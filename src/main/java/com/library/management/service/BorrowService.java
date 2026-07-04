package com.library.management.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.management.model.Article;
import com.library.management.model.Book;
import com.library.management.model.BorrowRecord;
import com.library.management.model.StoryBook;
import com.library.management.model.User;
import com.library.management.repository.ArticleRepository;
import com.library.management.repository.BookRepository;
import com.library.management.repository.BorrowRecordRepository;
import com.library.management.repository.StoryBookRepository;
import com.library.management.repository.UserRepository;

@Service
public class BorrowService {

    @Autowired
    private BorrowRecordRepository borrowRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private StoryBookRepository storyBookRepository;

    @Autowired
    private UserRepository userRepository;

    // ================= BORROW BOOK =================
    public BorrowRecord borrowBook(String userId, String bookId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        if (book.getStock() <= 0) {
            throw new RuntimeException("Book out of stock");
        }

        book.setStock(book.getStock() - 1);
        bookRepository.save(book);

        BorrowRecord record = new BorrowRecord();
        record.setUserId(user.getId());
        record.setUserName(user.getName());
        record.setBookId(book.getId());
        record.setBookTitle(book.getTitle());
        record.setItemType("BOOK");

        record.setBorrowDate(LocalDate.now());
        record.setDueDate(LocalDate.now().plusDays(7));
        record.setStatus("BORROWED");
        record.setFine(0);

        return borrowRepository.save(record);
    }

    // ================= BORROW ARTICLE =================
    public BorrowRecord borrowArticle(String userId, String articleId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article not found"));

        BorrowRecord record = new BorrowRecord();
        record.setUserId(user.getId());
        record.setUserName(user.getName());
        record.setBookId(article.getId());
        record.setBookTitle(article.getTitle());
        record.setItemType("ARTICLE");

        record.setBorrowDate(LocalDate.now());
        record.setDueDate(LocalDate.now().plusDays(7));
        record.setStatus("BORROWED");
        record.setFine(0);

        return borrowRepository.save(record);
    }

    // ================= BORROW STORYBOOK =================
    public BorrowRecord borrowStoryBook(String userId, String storyBookId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        StoryBook storyBook = storyBookRepository.findById(storyBookId)
                .orElseThrow(() -> new RuntimeException("Story Book not found"));

        BorrowRecord record = new BorrowRecord();
        record.setUserId(user.getId());
        record.setUserName(user.getName());
        record.setBookId(storyBook.getId());
        record.setBookTitle(storyBook.getTitle());
        record.setItemType("STORYBOOK");

        record.setBorrowDate(LocalDate.now());
        record.setDueDate(LocalDate.now().plusDays(7));
        record.setStatus("BORROWED");
        record.setFine(0);

        return borrowRepository.save(record);
    }

    // ================= RETURN ITEM (FIXED) =================
    public BorrowRecord returnBook(String borrowId) {

        BorrowRecord record = borrowRepository.findById(borrowId)
                .orElseThrow(() -> new RuntimeException("Borrow record not found"));

        if ("RETURNED".equals(record.getStatus())) {
            throw new RuntimeException("Already returned");
        }

        // ONLY BOOK affects stock
        if ("BOOK".equals(record.getItemType())) {

            bookRepository.findById(record.getBookId())
                    .ifPresent(book -> {
                        book.setStock(book.getStock() + 1);
                        bookRepository.save(book);
                    });
        }

        record.setStatus("RETURNED");
        record.setReturnDate(LocalDate.now());

        long lateDays = ChronoUnit.DAYS.between(record.getDueDate(), LocalDate.now());

        if (lateDays > 0) {
            record.setFine(lateDays * 10);
        }

        return borrowRepository.save(record);
    }

    // ================= HISTORY =================
    public List<BorrowRecord> getUserBorrowHistory(String userId) {
        return borrowRepository.findByUserId(userId);
    }

    public List<BorrowRecord> getAllBorrowRecords() {
        return borrowRepository.findAll();
    }

    // ================= DELETE RECORD =================
    public void deleteBorrowRecord(String id) {

        BorrowRecord record = borrowRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Borrow record not found"));

        borrowRepository.delete(record);
    }
}