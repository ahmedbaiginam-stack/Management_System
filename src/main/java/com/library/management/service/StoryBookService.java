package com.library.management.service;

import com.library.management.model.StoryBook;
import com.library.management.repository.StoryBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StoryBookService {

    @Autowired
    private StoryBookRepository storyBookRepository;

    // ================= GET ALL =================

    public List<StoryBook> getAllStories() {
        return storyBookRepository.findAll();
    }

    // ================= GET BY ID =================

    public StoryBook getStoryBookById(String id) {

        return storyBookRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("StoryBook not found with id: " + id));
    }

    // ================= SAVE =================

    public StoryBook saveStoryBook(StoryBook storyBook) {

        if (storyBook.getPages() == null) {
            storyBook.setPages(new ArrayList<>());
        }

        return storyBookRepository.save(storyBook);
    }

    // ================= UPDATE =================

    public StoryBook updateStoryBook(String id, StoryBook storyBook) {

        StoryBook existing = storyBookRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("StoryBook not found"));

        existing.setTitle(storyBook.getTitle());
        existing.setAuthor(storyBook.getAuthor());
        existing.setCoverUrl(storyBook.getCoverUrl());
        existing.setPages(storyBook.getPages());

        return storyBookRepository.save(existing);
    }

    // ================= DELETE =================

    public void deleteStoryBook(String id) {

        StoryBook storyBook = storyBookRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("StoryBook not found"));

        storyBookRepository.delete(storyBook);
    }

}