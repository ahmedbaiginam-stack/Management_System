package com.library.management.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.library.management.model.Book;

@Repository
public interface BookRepository extends MongoRepository<Book, String> {
    List<Book> findByTitleContainingIgnoreCase(String title);
    List<Book> findByAuthorContainingIgnoreCase(String author);
    
    // REMOVE findTop3ByOrderByCreatedAtDesc() if you don't have that field.
    // If you want to fetch any 3 books, use this instead:
    List<Book> findFirst3By(); 
}