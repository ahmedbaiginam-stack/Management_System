package com.library.management.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.library.management.model.StoryBook;

@Repository
public interface StoryBookRepository extends MongoRepository<StoryBook, String> {

}