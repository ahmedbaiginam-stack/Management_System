package com.library.management.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "questions")
public class Question {

    @Id
    private String id;

    private String title;

    private String content;

    private String askedBy;

    private LocalDateTime askedAt = LocalDateTime.now();

    private List<Answer> answers = new ArrayList<>();

    public Question() {
    }

    // ===========================
    // Nested Answer Class
    // ===========================
    public static class Answer {

        private String answeredBy;

        private String content;

        private LocalDateTime answeredAt;

        public Answer() {
        }

        public String getAnsweredBy() {
            return answeredBy;
        }

        public void setAnsweredBy(String answeredBy) {
            this.answeredBy = answeredBy;
        }

        public String getContent() {
            return content;
        }

        public void setContent(String content) {
            this.content = content;
        }

        public LocalDateTime getAnsweredAt() {
            return answeredAt;
        }

        public void setAnsweredAt(LocalDateTime answeredAt) {
            this.answeredAt = answeredAt;
        }
    }

    // ===========================
    // Getters & Setters
    // ===========================

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAskedBy() {
        return askedBy;
    }

    public void setAskedBy(String askedBy) {
        this.askedBy = askedBy;
    }

    public LocalDateTime getAskedAt() {
        return askedAt;
    }

    public void setAskedAt(LocalDateTime askedAt) {
        this.askedAt = askedAt;
    }

    public List<Answer> getAnswers() {

        if (answers == null) {
            answers = new ArrayList<>();
        }

        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

}