package com.library.management.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.library.management.model.BorrowRecord;

public interface BorrowRecordRepository
        extends MongoRepository<BorrowRecord, String> {

    List<BorrowRecord> findByUserId(String userId);

    List<BorrowRecord> findByStatus(String status);
}