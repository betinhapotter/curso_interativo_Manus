import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ModulePage from './pages/ModulePage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import { UserProvider } from './contexts/UserContext';
import { CourseProvider } from './contexts/CourseContext';

function App() {
  return (
    <UserProvider>
      <CourseProvider>
        <Router>
          <div className="flex h-screen bg-netflix-black text-white">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/*"
                element={
                  <div className="flex w-full h-full">
                    <Sidebar />
                    <div className="flex-1 overflow-auto">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/modulo/:moduleId" element={<ModulePage />} />
                        <Route path="/aula/:moduleId/:lessonId" element={<LessonPage />} />
                        <Route path="/quiz/:moduleId" element={<QuizPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </div>
                  </div>
                }
              />
            </Routes>
          </div>
        </Router>
      </CourseProvider>
    </UserProvider>
  );
}

export default App;
