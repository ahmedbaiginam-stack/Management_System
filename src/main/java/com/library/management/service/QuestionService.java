package com.library.management.service;

import com.library.management.model.Question;
import com.library.management.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    // Admin/User Feature: Post a new question cleanly
    public Question postQuestion(Question question) {
        // Safe check using getter: ensures the nested answer array list structure is initialized
        question.getAnswers(); 
        return questionRepository.save(question);
    }

    // User Feature: Add a reply thread to an existing query safely
    public Question addReplyToQuestion(String questionId, String answeredBy, String content) {
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Discussion thread not found with ID: " + questionId));

        // Create the answer object payload
        Question.Answer reply = new Question.Answer();
        reply.setAnsweredBy(answeredBy);
        reply.setContent(content);
        reply.setAnsweredAt(LocalDateTime.now());

        // Appends straight to your list using your manual getter
        question.getAnswers().add(reply);
        
        return questionRepository.save(question);
    }
    
    public void deleteQuestion(String id) {

        questionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found"));

        questionRepository.deleteById(id);
    }
}
