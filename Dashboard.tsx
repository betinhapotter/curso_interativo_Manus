import React from 'react';
import { Link } from 'react-router-dom';
import { useCourse } from '../contexts/CourseContext';
import { useUser } from '../contexts/UserContext';

const Dashboard: React.FC = () => {
  const { modules, isModuleAccessible } = useCourse();
  const { user, getOverallProgress } = useUser();

  // Encontrar o próximo módulo/aula não concluído
  const findNextLesson = () => {
    if (!user) return null;

    for (const module of modules) {
      if (!user.progress[module.id]?.completed) {
        // Verificar se o módulo está acessível
        if (!isModuleAccessible(module.id)) continue;

        // Encontrar a primeira aula não concluída
        for (const lesson of module.lessons) {
          if (!user.progress[module.id]?.lessons[lesson.id]) {
            return {
              moduleId: module.id,
              lessonId: lesson.id,
              moduleTitle: module.title,
              lessonTitle: lesson.title
            };
          }
        }

        // Se todas as aulas foram concluídas, verificar o quiz
        if (!user.progress[module.id]?.quiz) {
          return {
            moduleId: module.id,
            quiz: true,
            moduleTitle: module.title,
            quizTitle: module.quiz.title
          };
        }
      }
    }

    return null;
  };

  const nextLesson = findNextLesson();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="h-64 rounded-xl bg-gradient-to-r from-gray-900 via-manus-blue to-accent-purple flex items-center p-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-sf-display font-bold text-white mb-4">
              Bem-vindo ao Curso Interativo de Manus
            </h1>
            <p className="text-xl text-white opacity-90">
              Aprenda sobre o revolucionário agente de IA Manus, suas capacidades, casos de uso e como ele se compara a outros agentes de IA.
            </p>
          </div>
        </div>
      </div>

      {nextLesson && (
        <div className="mb-12">
          <h2 className="text-2xl font-sf-display font-semibold text-white mb-4">Continue de onde parou</h2>
          <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 mb-1">{nextLesson.moduleTitle}</p>
                <h3 className="text-xl font-medium text-white mb-2">
                  {nextLesson.quiz ? nextLesson.quizTitle : nextLesson.lessonTitle}
                </h3>
                <p className="text-gray-400">
                  {nextLesson.quiz 
                    ? 'Teste seus conhecimentos com este quiz interativo' 
                    : 'Continue aprendendo sobre o Manus'}
                </p>
              </div>
              <div>
                <Link
                  to={nextLesson.quiz 
                    ? `/quiz/${nextLesson.moduleId}` 
                    : `/aula/${nextLesson.moduleId}/${nextLesson.lessonId}`}
                  className="px-6 py-3 bg-manus-blue text-white rounded-md hover:bg-opacity-90 transition-all flex items-center"
                >
                  Continuar
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-sf-display font-semibold text-white">Seu progresso</h2>
          <div className="flex items-center">
            <div className="w-64 h-3 bg-gray-800 rounded-full mr-3">
              <div 
                className="h-3 bg-manus-blue rounded-full" 
                style={{ width: `${getOverallProgress()}%` }}
              ></div>
            </div>
            <span className="text-white">{getOverallProgress()}%</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-sf-display font-semibold text-white mb-6">Módulos do curso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const isAccessible = isModuleAccessible(module.id);
            const isCompleted = user?.progress[module.id]?.completed || false;
            
            return (
              <div 
                key={module.id}
                className={`card-module overflow-hidden ${!isAccessible ? 'opacity-70' : ''}`}
              >
                <div className="h-40 bg-gradient-to-r from-gray-800 to-gray-700 relative">
                  {isCompleted && (
                    <div className="absolute top-2 right-2 bg-success-green text-white text-xs font-bold px-2 py-1 rounded">
                      CONCLUÍDO
                    </div>
                  )}
                  {!isAccessible && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                      <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
                    <h3 className="text-lg font-medium text-white">{module.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm mb-3">{module.lessons.length} aulas • 1 quiz</p>
                  <p className="text-gray-300 mb-4 line-clamp-2">{module.description}</p>
                  <Link
                    to={isAccessible ? `/modulo/${module.id}` : '#'}
                    className={`block w-full text-center py-2 rounded-md ${
                      isAccessible 
                        ? 'bg-manus-blue text-white hover:bg-opacity-90' 
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    } transition-all`}
                    onClick={(e) => !isAccessible && e.preventDefault()}
                  >
                    {isCompleted ? 'Revisar' : isAccessible ? 'Iniciar' : 'Bloqueado'}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
