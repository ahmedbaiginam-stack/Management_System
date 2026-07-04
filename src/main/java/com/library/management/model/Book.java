package com.library.management.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")
public class Book {

    @Id
    private String id;

    private String title;

    private String author;

    private int stock;

    private LocalDate nextAvailableDate;
    private String content;

    public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Book(String id, String title, String author, int stock, LocalDate nextAvailableDate, String content,
			List<String> notificationWaitlist) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.stock = stock;
		this.nextAvailableDate = nextAvailableDate;
		this.content = content;
		this.notificationWaitlist = notificationWaitlist;
	}

	private List<String> notificationWaitlist = new ArrayList<>();

    public Book() {
    }

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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public LocalDate getNextAvailableDate() {
        return nextAvailableDate;
    }

    public void setNextAvailableDate(LocalDate nextAvailableDate) {
        this.nextAvailableDate = nextAvailableDate;
    }

    public List<String> getNotificationWaitlist() {
        return notificationWaitlist;
    }

    public void setNotificationWaitlist(List<String> notificationWaitlist) {
        this.notificationWaitlist = notificationWaitlist;
    }
}