package com.library.management.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.library.management.model.BorrowRecord;
import com.library.management.service.BorrowService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final BorrowService borrowService;

    public UserController(BorrowService borrowService) {
        this.borrowService = borrowService;
    }

    // ================= BORROW BOOK =================
    @PostMapping("/borrow/book")
    public ResponseEntity<BorrowRecord> borrowBook(
            @RequestParam String userId,
            @RequestParam String bookId) {

        return ResponseEntity.ok(
                borrowService.borrowBook(userId, bookId));
    }

    // ================= BORROW ARTICLE =================
    @PostMapping("/borrow/article")
    public ResponseEntity<BorrowRecord> borrowArticle(
            @RequestParam String userId,
            @RequestParam String articleId) {

        return ResponseEntity.ok(
                borrowService.borrowArticle(userId, articleId));
    }

    // ================= BORROW STORYBOOK =================
    @PostMapping("/borrow/storybook")
    public ResponseEntity<BorrowRecord> borrowStoryBook(
            @RequestParam String userId,
            @RequestParam String storyBookId) {

        return ResponseEntity.ok(
                borrowService.borrowStoryBook(userId, storyBookId));
    }

    // ================= RETURN ITEM =================
    @PostMapping("/return/{borrowId}")
    public ResponseEntity<BorrowRecord> returnItem(
            @PathVariable String borrowId) {

        return ResponseEntity.ok(
                borrowService.returnBook(borrowId));
    }

    // ================= USER HISTORY =================
    @GetMapping("/borrowed-items")
    public ResponseEntity<List<BorrowRecord>> getUserBorrowHistory(
            @RequestParam String userId) {

        return ResponseEntity.ok(
                borrowService.getUserBorrowHistory(userId));
    }
    
}