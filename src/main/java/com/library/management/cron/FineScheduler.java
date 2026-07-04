package com.library.management.cron;


import com.library.management.model.User;
import com.library.management.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Component
public class FineScheduler {

    @Autowired
    private UserRepository userRepository;

    // Runs automatically at midnight every single day
    @Scheduled(cron = "0 0 0 * * ?")
    public void calculateLateFeesDaily() {
        List<User> users = userRepository.findAll();
        LocalDate today = LocalDate.now();

        for (User user : users) {
            // Check if the user has an active book allocation record
            if (user.getBookIssuedDate() != null) {
                // Calculate total duration user has held onto the asset
                long daysBorrowed = ChronoUnit.DAYS.between(user.getBookIssuedDate(), today);
                
                // If they exceed the standard 14-day library grace window
                if (daysBorrowed > 14) {
                    long overdueDays = daysBorrowed - 14;
                    double accumulatedFine = overdueDays * 10.0; // ₹10 per day late fee penalty
                    
                    user.setOutstandingFines(accumulatedFine);
                    user.setHasOverdueBook(true);
                    userRepository.save(user);
                }
            }
        }
        System.out.println("LOG: Midnight automated library fine ledger verification scan finished successfully.");
    }
}
