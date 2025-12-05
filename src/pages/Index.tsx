import { useState } from "react";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import CoursePage from "@/pages/CoursePage";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleNavigate = (page: string, courseId?: string) => {
    setCurrentPage(page);
    if (courseId) {
      setSelectedCourseId(courseId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === "home" && <Home onNavigate={handleNavigate} />}
      {currentPage === "catalog" && <Catalog onNavigate={handleNavigate} />}
      {currentPage === "course" && selectedCourseId && (
        <CoursePage courseId={selectedCourseId} onNavigate={handleNavigate} />
      )}
      {currentPage === "dashboard" && <Dashboard onNavigate={handleNavigate} />}
      {currentPage === "profile" && <Profile />}
    </div>
  );
};

export default Index;
