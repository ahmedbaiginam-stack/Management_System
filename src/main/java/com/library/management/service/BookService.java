package com.library.management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.library.management.model.Book;
import com.library.management.repository.BookRepository;

@Service
public class BookService {

    private final BookRepository repository;

    public BookService(BookRepository repository) {
        this.repository = repository;
    }

    // Get all books
    public List<Book> getAllBooks() {
        return repository.findAll();
    }

    // Get book
    public Book getBookById(String id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Book not found"));
    }

    // Add
    public Book addBook(Book book) {
        return repository.save(book);
    }

    // Update
    public Book updateBook(String id, Book updatedBook) {

        Book book = getBookById(id);

        book.setTitle(updatedBook.getTitle());
        book.setAuthor(updatedBook.getAuthor());
        book.setStock(updatedBook.getStock());
        book.setNextAvailableDate(updatedBook.getNextAvailableDate());
        book.setNotificationWaitlist(updatedBook.getNotificationWaitlist());

        return repository.save(book);
    }

    // Delete
    public void deleteBook(String id) {
        repository.deleteById(id);
    }

    // Search
    public List<Book> searchByTitle(String title) {
        return repository.findByTitleContainingIgnoreCase(title);
    }

    public List<Book> searchByAuthor(String author) {
        return repository.findByAuthorContainingIgnoreCase(author);
    }
}