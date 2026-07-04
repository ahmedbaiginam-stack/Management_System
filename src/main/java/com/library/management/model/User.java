package com.library.management.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String name;

    @Indexed(unique = true)
    private String email;

    private String password;

    // ROLE_USER or ROLE_ADMIN
    private String role;

    private double outstandingFines = 0.0;

    private boolean hasOverdueBook = false;

    private LocalDate bookIssuedDate;

    public User() {
    }

    public User(String id, String name, String email, String password, String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public double getOutstandingFines() {
        return outstandingFines;
    }

    public void setOutstandingFines(double outstandingFines) {
        this.outstandingFines = outstandingFines;
    }

    public boolean isHasOverdueBook() {
        return hasOverdueBook;
    }

    public void setHasOverdueBook(boolean hasOverdueBook) {
        this.hasOverdueBook = hasOverdueBook;
    }

    public LocalDate getBookIssuedDate() {
        return bookIssuedDate;
    }

    public void setBookIssuedDate(LocalDate bookIssuedDate) {
        this.bookIssuedDate = bookIssuedDate;
    }
}