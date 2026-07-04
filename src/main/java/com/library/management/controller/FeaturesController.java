package com.library.management.controller;

import com.library.management.model.Article;
import com.library.management.model.News;
import com.library.management.model.Question;
import com.library.management.model.StoryBook;
import com.library.management.service.ArticleService;
import com.library.management.service.NewsService;
import com.library.management.service.QuestionService;
import com.library.management.service.StoryBookService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/features")
@CrossOrigin(origins = "http://localhost:5173")
public class FeaturesController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private NewsService newsService;

    @Autowired
    private QuestionService questionService;

    @Autowired
    private StoryBookService storyBookService;

    // ===================== NEWS ======================

    @GetMapping("/today-news")
    public ResponseEntity<News> getTodaysNews() {
        return ResponseEntity.ok(newsService.getTodaysNews());
    }
    

    @GetMapping("/all-news")
    public ResponseEntity<List<News>> getAllNews() {
        return ResponseEntity.ok(newsService.getAllNews());
    }
    //============= ARTICLES ======================

    @GetMapping("/articles")
    public ResponseEntity<List<Article>> getArticles() {
        return ResponseEntity.ok(articleService.getAllArticles());
    }

    @PostMapping("/articles")
    public ResponseEntity<Article> publishArticle(
            @RequestBody Article article) {

        return ResponseEntity.ok(articleService.saveArticle(article));
    }

    // ===================== STORY BOOKS ======================

    @GetMapping("/storybooks")
    public ResponseEntity<List<StoryBook>> getAllStoryBooks() {
        return ResponseEntity.ok(storyBookService.getAllStories());
    }
    @GetMapping("/storybooks/{id}")
    public ResponseEntity<StoryBook> getStoryBookById(@PathVariable String id) {
        return ResponseEntity.ok(storyBookService.getStoryBookById(id));
    }
    // ===================== QUESTIONS ======================

    @GetMapping("/questions")
    public ResponseEntity<List<Question>> getQuestions() {
        return ResponseEntity.ok(questionService.getAllQuestions());
    }

    @PostMapping("/questions")
    public ResponseEntity<Question> addQuestion(
            @RequestBody Question question) {

        return ResponseEntity.ok(questionService.postQuestion(question));
    }
    
 // Add this to FeaturesController.java
    @GetMapping("/articles/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable String id) {
        // You will need to add a findById method to your ArticleService
        return ResponseEntity.ok(articleService.getArticleById(id));
    }

    @PostMapping("/questions/{id}/reply")
    public ResponseEntity<Question> replyQuestion(
            @PathVariable String id,
            @RequestBody Map<String, String> body) {

        return ResponseEntity.ok(
                questionService.addReplyToQuestion(
                        id,
                        body.get("answeredBy"),
                        body.get("content")));
    }
    
   
}