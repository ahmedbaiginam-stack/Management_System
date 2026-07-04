package com.library.management.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.library.management.model.Article;

@Repository
public interface ArticleRepository extends MongoRepository<Article, String> {

    List<Article> findByCategoryIgnoreCase(String category);

}