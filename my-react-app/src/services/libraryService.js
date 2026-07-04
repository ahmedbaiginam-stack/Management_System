import API from './api';

export const getDashboardData = async () => {
    try {
        // MATCHING THE CONTROLLER PATHS EXACTLY
        const [news, articles, stories, books] = await Promise.all([
            API.get('/features/today-news'), // Updated from '/features/news'
            API.get('/features/articles'),
            API.get('/features/storybooks'),
            API.get('/books') // Assuming your BookController uses /api/books
        ]);
        return [news, articles, stories, books];
    } catch (error) {
        console.error("Dashboard Fetch Error:", error);
        return [{data: []}, {data: []}, {data: []}, {data: []}];
    }
};