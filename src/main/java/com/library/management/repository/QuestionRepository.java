package com.library.management.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.library.management.model.Question;

@Repository
public interface QuestionRepository extends MongoRepository<Question, String> {

}