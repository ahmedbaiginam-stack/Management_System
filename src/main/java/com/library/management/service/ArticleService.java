package com.library.management.service;

import com.library.management.model.Article;
import com.library.management.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public Article saveArticle(Article article) {
        if (article.getPublishedAt() == null) {
            article.setPublishedAt(LocalDateTime.now());
        }
        return articleRepository.save(article);
    }

    public List<Article> getArticlesByCategory(String category) {
        return articleRepository.findByCategoryIgnoreCase(category);
    }
    
    // Add this to ArticleService.java
    public Article getArticleById(String id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article not found"));
    }
    public Article updateArticle(String id, Article article) {

        Article existing = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article not found"));

        existing.setTitle(article.getTitle());
        existing.setContent(article.getContent());
        existing.setAuthor(article.getAuthor());
        existing.setCategory(article.getCategory());

        return articleRepository.save(existing);
    }

    public void deleteArticle(String id) {
        articleRepository.deleteById(id);
    }
}
