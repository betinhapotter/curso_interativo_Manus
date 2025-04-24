import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCourse } from '../contexts/CourseContext';
import { useUser } from '../contexts/UserContext';
import ReactMarkdown from 'react-markdown';

const LessonPage: React.FC = () => {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const { modules, getNextLesson, getPreviousLesson, isLessonAccessible } = useCourse();
  const { updateProgress, isLessonCompleted } = useUser();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const [module, setModule] = useState<any>(null);
  const [lesson, setLesson] = useState<any>(null);
  const [nextLesson, setNextLesson] = useState<any>(null);
  const [prevLesson, setPrevLesson] = useState<any>(null);

  // Efeito para inicializar e validar dados
  useEffect(() => {
    if (!moduleId || !lessonId) {
      navigate('/');
      return;
    }

    const foundModule = modules.find(m => m.id === moduleId);
    if (!foundModule) {
      navigate('/');
      return;
    }

    const foundLesson = foundModule.lessons.find((l: any) => l.id === lessonId);
    if (!foundLesson) {
      navigate(`/modulo/${moduleId}`);
      return;
    }

    // Verificar se a lição está acessível
    if (!isLessonAccessible(moduleId, lessonId)) {
      navigate(`/modulo/${moduleId}`);
      return;
    }
    
    setModule(foundModule);
    setLesson(foundLesson);
    
    // Obter próxima e anterior lições
    if (moduleId && lessonId) {
      setNextLesson(getNextLesson(moduleId, lessonId));
      setPrevLesson(getPreviousLesson(moduleId, lessonId));
    }
    
    // Verificar se a lição já foi concluída
    if (moduleId && lessonId) {
      setIsCompleted(isLessonCompleted(moduleId, lessonId));
    }
  }, [moduleId, lessonId, modules, isLessonAccessible, isLessonCompleted, navigate, getNextLesson, getPreviousLesson]);

  // Se ainda estiver carregando os dados
  if (!module || !lesson) {
    return <div className="container mx-auto px-4 py-8 text-white">Carregando...</div>;
  }

  const handleMarkAsCompleted = () => {
    if (moduleId && lessonId) {
      updateProgress(moduleId, lessonId, true);
      setIsCompleted(true);
    }
  };

  const handleNextLesson = () => {
    if (nextLesson) {
      navigate(`/aula/${nextLesson.moduleId}/${nextLesson.lessonId}`);
    } else if (moduleId) {
      navigate(`/modulo/${moduleId}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-400 mb-2">
          <Link to={`/modulo/${moduleId}`} className="hover:text-manus-blue transition-colors">
            {module.title}
          </Link>
          <span className="mx-2">&gt;</span>
          <span>{lesson.title}</span>
        </div>
        <h1 className="text-3xl font-sf-display font-bold text-white">{lesson.title}</h1>
      </div>

      <div className="bg-gray-900 rounded-xl p-8 mb-8">
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{lesson.content}</ReactMarkdown>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          {prevLesson && (
            <Link
              to={`/aula/${prevLesson.moduleId}/${prevLesson.lessonId}`}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Anterior
            </Link>
          )}
        </div>
        
        <div className="flex space-x-4">
          {!isCompleted && (
            <button
              onClick={handleMarkAsCompleted}
              className="px-4 py-2 bg-success-green text-white rounded-md hover:bg-opacity-90 transition-all flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Marcar como Concluído
            </button>
          )}
          
          {nextLesson && (
            <button
              onClick={handleNextLesson}
              className={`px-4 py-2 ${isCompleted ? 'bg-manus-blue' : 'bg-gray-700'} text-white rounded-md ${isCompleted ? 'hover:bg-opacity-90' : 'cursor-not-allowed'} transition-all flex items-center`}
              disabled={!isCompleted}
            >
              Próxima
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          {!nextLesson && moduleId && (
            <Link
              to={`/quiz/${moduleId}`}
              className={`px-4 py-2 ${isCompleted ? 'bg-accent-purple' : 'bg-gray-700'} text-white rounded-md ${isCompleted ? 'hover:bg-opacity-90' : 'cursor-not-allowed'} transition-all flex items-center`}
              onClick={(e) => !isCompleted && e.preventDefault()}
            >
              Ir para o Quiz
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
