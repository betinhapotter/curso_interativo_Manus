import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCourse } from '../contexts/CourseContext';
import { useUser } from '../contexts/UserContext';

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const { modules, isLessonAccessible, isQuizAccessible } = useCourse();
  const { isLessonCompleted, isQuizCompleted } = useUser();
  const navigate = useNavigate();

  if (!moduleId) {
    navigate('/');
    return null;
  }

  const module = modules.find(m => m.id === moduleId);
  
  if (!module) {
    navigate('/');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="h-64 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 flex items-end p-8 mb-4">
          <div>
            <h1 className="text-4xl font-sf-display font-bold text-white mb-2">{module.title}</h1>
            <p className="text-xl text-gray-300">{module.description}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-sf-display font-semibold text-white mb-4">Sobre este módulo</h2>
        <p className="text-gray-300">{module.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-sf-display font-semibold text-white mb-4">Aulas</h2>
        <div className="space-y-4">
          {module.lessons.map((lesson) => {
            const isAccessible = isLessonAccessible(module.id, lesson.id);
            const isCompleted = isLessonCompleted(module.id, lesson.id);
            
            return (
              <div 
                key={lesson.id}
                className={`card-lesson ${isCompleted ? 'border-l-4 border-success-green' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center">
                    {isCompleted && (
                      <svg className="w-5 h-5 text-success-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {!isCompleted && !isAccessible && (
                      <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                    <h3 className="text-lg font-medium text-white">{lesson.title}</h3>
                  </div>
                  <p className="text-gray-400 mt-1">{lesson.description}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {lesson.duration} minutos
                  </div>
                </div>
                <div>
                  {isAccessible ? (
                    <Link
                      to={`/aula/${module.id}/${lesson.id}`}
                      className="px-4 py-2 bg-manus-blue text-white rounded-md hover:bg-opacity-90 transition-all"
                    >
                      {isCompleted ? 'Revisar' : 'Iniciar'}
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 bg-gray-700 text-gray-400 rounded-md cursor-not-allowed"
                    >
                      Bloqueado
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Quiz do módulo */}
          <div 
            className={`card-lesson ${isQuizCompleted(module.id) ? 'border-l-4 border-success-green' : ''}`}
          >
            <div className="flex-1">
              <div className="flex items-center">
                {isQuizCompleted(module.id) && (
                  <svg className="w-5 h-5 text-success-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {!isQuizCompleted(module.id) && !isQuizAccessible(module.id) && (
                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
                <h3 className="text-lg font-medium text-white">{module.quiz.title}</h3>
              </div>
              <p className="text-gray-400 mt-1">Teste seus conhecimentos sobre {module.title}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {module.quiz.questions.length} perguntas
              </div>
            </div>
            <div>
              {isQuizAccessible(module.id) ? (
                <Link
                  to={`/quiz/${module.id}`}
                  className="px-4 py-2 bg-accent-purple text-white rounded-md hover:bg-opacity-90 transition-all"
                >
                  {isQuizCompleted(module.id) ? 'Refazer' : 'Iniciar Quiz'}
                </Link>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 bg-gray-700 text-gray-400 rounded-md cursor-not-allowed"
                >
                  Bloqueado
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;
