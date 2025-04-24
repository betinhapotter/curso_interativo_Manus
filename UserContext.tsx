import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  progress: {
    [moduleId: string]: {
      completed: boolean;
      lessons: {
        [lessonId: string]: boolean;
      };
      quiz: boolean;
    };
  };
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProgress: (moduleId: string, lessonId: string, completed: boolean) => void;
  updateQuizProgress: (moduleId: string, completed: boolean) => void;
  isModuleCompleted: (moduleId: string) => boolean;
  isLessonCompleted: (moduleId: string, lessonId: string) => boolean;
  isQuizCompleted: (moduleId: string) => boolean;
  getOverallProgress: () => number;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulação de login - em um app real, isso seria uma chamada de API
    if (email && password) {
      setUser({
        id: '1',
        name: 'Usuário Teste',
        email,
        progress: {
          '1': {
            completed: false,
            lessons: {
              '1': false,
              '2': false,
              '3': false
            },
            quiz: false
          },
          '2': {
            completed: false,
            lessons: {
              '1': false,
              '2': false,
              '3': false
            },
            quiz: false
          },
          '3': {
            completed: false,
            lessons: {
              '1': false,
              '2': false,
              '3': false
            },
            quiz: false
          },
          '4': {
            completed: false,
            lessons: {
              '1': false,
              '2': false,
              '3': false
            },
            quiz: false
          },
          '5': {
            completed: false,
            lessons: {
              '1': false,
              '2': false,
              '3': false
            },
            quiz: false
          }
        }
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProgress = (moduleId: string, lessonId: string, completed: boolean) => {
    if (!user) return;

    setUser(prevUser => {
      if (!prevUser) return null;

      const newProgress = { ...prevUser.progress };
      
      if (!newProgress[moduleId]) {
        newProgress[moduleId] = {
          completed: false,
          lessons: {},
          quiz: false
        };
      }
      
      if (!newProgress[moduleId].lessons) {
        newProgress[moduleId].lessons = {};
      }
      
      newProgress[moduleId].lessons[lessonId] = completed;
      
      // Verificar se todas as lições do módulo foram concluídas
      const allLessonsCompleted = Object.values(newProgress[moduleId].lessons).every(status => status);
      const quizCompleted = newProgress[moduleId].quiz;
      
      // Marcar o módulo como concluído se todas as lições e o quiz foram concluídos
      newProgress[moduleId].completed = allLessonsCompleted && quizCompleted;
      
      return {
        ...prevUser,
        progress: newProgress
      };
    });
  };

  const updateQuizProgress = (moduleId: string, completed: boolean) => {
    if (!user) return;

    setUser(prevUser => {
      if (!prevUser) return null;

      const newProgress = { ...prevUser.progress };
      
      if (!newProgress[moduleId]) {
        newProgress[moduleId] = {
          completed: false,
          lessons: {},
          quiz: false
        };
      }
      
      newProgress[moduleId].quiz = completed;
      
      // Verificar se todas as lições do módulo foram concluídas
      const allLessonsCompleted = Object.values(newProgress[moduleId].lessons).every(status => status);
      
      // Marcar o módulo como concluído se todas as lições e o quiz foram concluídos
      newProgress[moduleId].completed = allLessonsCompleted && completed;
      
      return {
        ...prevUser,
        progress: newProgress
      };
    });
  };

  const isModuleCompleted = (moduleId: string): boolean => {
    if (!user || !user.progress[moduleId]) return false;
    return user.progress[moduleId].completed;
  };

  const isLessonCompleted = (moduleId: string, lessonId: string): boolean => {
    if (!user || !user.progress[moduleId] || !user.progress[moduleId].lessons[lessonId]) return false;
    return user.progress[moduleId].lessons[lessonId];
  };

  const isQuizCompleted = (moduleId: string): boolean => {
    if (!user || !user.progress[moduleId]) return false;
    return user.progress[moduleId].quiz;
  };

  const getOverallProgress = (): number => {
    if (!user) return 0;
    
    const totalModules = Object.keys(user.progress).length;
    if (totalModules === 0) return 0;
    
    const completedModules = Object.values(user.progress).filter(module => module.completed).length;
    return Math.round((completedModules / totalModules) * 100);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        updateProgress,
        updateQuizProgress,
        isModuleCompleted,
        isLessonCompleted,
        isQuizCompleted,
        getOverallProgress
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
