package com.library.management.service;

import com.library.management.model.News;
import com.library.management.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository;

    public News getTodaysNews() {

        List<News> newsList = newsRepository.findAll();

        if (!newsList.isEmpty()) {
            return newsList.get(newsList.size() - 1);
        }

        News fallback = new News();
        fallback.setHeading("Welcome to Digital Library");
        fallback.setBody("No news available today.");
        fallback.setSource("Library System");
        fallback.setDate(LocalDate.now());

        return fallback;
    }

    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    public News saveNews(News news) {

        if (news.getDate() == null) {
            news.setDate(LocalDate.now());
        }

        return newsRepository.save(news);
    }
    
    public News updateNews(String id, News news) {

        News existing = newsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("News not found"));

        existing.setHeading(news.getHeading());
        existing.setBody(news.getBody());
        existing.setSource(news.getSource());
        existing.setDate(news.getDate());

        return newsRepository.save(existing);
    }

    public void deleteNews(String id) {
        newsRepository.deleteById(id);
    }
}