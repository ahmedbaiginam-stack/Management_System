package com.library.management.controller;

import java.util.List;
import com.library.management.model.Question;
import com.library.management.service.QuestionService;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.library.management.model.Article;
import com.library.management.model.Book;
import com.library.management.model.BorrowRecord;
import com.library.management.model.News;
import com.library.management.model.User;
import com.library.management.service.ArticleService;
import com.library.management.service.BookService;
import com.library.management.service.BorrowService;
import com.library.management.service.NewsService;
import com.library.management.service.UserService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final BookService bookService;
    private final UserService userService;
    private final NewsService newsService;
    private final ArticleService articleService;
    private final BorrowService borrowService;
    
    private final QuestionService questionService;

    public AdminController(BookService bookService,
            UserService userService,
            NewsService newsService,
            ArticleService articleService,
            BorrowService borrowService,
            QuestionService questionService) {

			this.bookService = bookService;
			this.userService = userService;
			this.newsService = newsService;
			this.articleService = articleService;
			this.borrowService = borrowService;
			this.questionService = questionService;
			}

    // ================= BOOKS =================

    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping("/books")
    public Book addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @PutMapping("/books/{id}")
    public Book updateBook(@PathVariable String id,
                           @RequestBody Book book) {
        return bookService.updateBook(id, book);
    }

    @DeleteMapping("/books/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable String id) {

        bookService.deleteBook(id);

        return ResponseEntity.ok("Book Deleted");
    }

    // ================= USERS =================

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String id) {

        userService.deleteUser(id);

        return ResponseEntity.ok("User Deleted");
    }
    
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable String id,
            @RequestBody User user) {

        return ResponseEntity.ok(userService.updateUser(id, user));
    }

    // ================= NEWS =================

    @GetMapping("/news")
    public List<News> getNews() {
        return newsService.getAllNews();
    }

    @PostMapping("/news")
    public News addNews(@RequestBody News news) {
        return newsService.saveNews(news);
    }

    @PutMapping("/news/{id}")
    public News updateNews(@PathVariable String id,
                           @RequestBody News news) {

        return newsService.updateNews(id, news);
    }

    @DeleteMapping("/news/{id}")
    public ResponseEntity<?> deleteNews(@PathVariable String id) {

        newsService.deleteNews(id);

        return ResponseEntity.ok("News Deleted");
    }

    // ================= ARTICLES =================

    @GetMapping("/articles")
    public List<Article> getArticles() {
        return articleService.getAllArticles();
    }

    @PostMapping("/articles")
    public Article addArticle(@RequestBody Article article) {
        return articleService.saveArticle(article);
    }

    @PutMapping("/articles/{id}")
    public Article updateArticle(@PathVariable String id,
                                 @RequestBody Article article) {

        return articleService.updateArticle(id, article);
    }

    @DeleteMapping("/articles/{id}")
    public ResponseEntity<?> deleteArticle(@PathVariable String id) {

        articleService.deleteArticle(id);

        return ResponseEntity.ok("Article Deleted");
    }

    // ================= BORROW RECORDS =================

    @GetMapping("/borrow-records")
    public List<BorrowRecord> getBorrowRecords() {
        return borrowService.getAllBorrowRecords();
    }

    @DeleteMapping("/borrow-records/{id}")
    public ResponseEntity<String> deleteBorrowRecord(@PathVariable String id) {

        borrowService.deleteBorrowRecord(id);

        return ResponseEntity.ok("Borrow Record Deleted");
    }
    
    
 // ================= QUESTIONS =================

    @GetMapping("/questions")
    public List<Question> getQuestions() {
        return questionService.getAllQuestions();
    }

    @PutMapping("/questions/{id}")
    public ResponseEntity<Question> updateQuestion(
            @PathVariable String id,
            @RequestBody Question question) {

        question.setId(id);

        return ResponseEntity.ok(
                questionService.postQuestion(question));
    }

    @DeleteMapping("/questions/{id}")
    public ResponseEntity<String> deleteQuestion(
            @PathVariable String id) {

        questionService.deleteQuestion(id);

        return ResponseEntity.ok("Question Deleted Successfully");
    }
    
    
}