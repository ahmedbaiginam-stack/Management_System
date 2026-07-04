import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

import Books from "./pages/Books";
import BookReader from "./pages/BookReader";

import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetail from "./pages/ArticleDetail";

import StoryBooks from "./pages/StoryBooks";
import StoryBookReader from "./pages/StoryBookReader";

import News from "./pages/News";
import QuestionBank from "./pages/QuestionBank";

import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import ManageBooks from "./pages/ManageBooks";
import ManageUsers from "./pages/ManageUsers";
import ManageNews from "./pages/ManageNews";
import ManageArticles from "./pages/ManageArticles";
import BorrowRecords from "./pages/BorrowRecords";
import ManageQuestions from "./pages/ManageQuestions";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookReader />} />

        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />

        <Route path="/storybooks" element={<StoryBooks />} />
        <Route path="/storybooks/:id" element={<StoryBookReader />} />

        <Route path="/news" element={<News />} />
        <Route path="/questions" element={<QuestionBank />} />

        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/admin/books" element={<ManageBooks />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/news" element={<ManageNews />} />
        <Route path="/admin/articles" element={<ManageArticles />} />
        <Route path="/admin/borrow-records" element={<BorrowRecords />} />
        <Route path="/admin/questions" element={<ManageQuestions />} />
      </Routes>

      {/* ✅ FOOTER MUST BE HERE */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;