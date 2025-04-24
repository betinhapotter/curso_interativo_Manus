import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCourse } from '../contexts/CourseContext';
import { useUser } from '../contexts/UserContext';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams<{ moduleId: string }>();
  const { modules, isQuizAccessible } = useCourse();
  const { updateQuizProgress, isQuizCompleted } = useUser();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [module, setModule] = useState<any>(null);
  const [quiz, setQuiz] = useState<any>(null);

  // Inicializar dados do módulo e quiz
  useEffect(() => {
    if (!moduleId) {
      navigate('/');
      return;
    }

    const foundModule = modules.find(m => m.id === moduleId);
    if (!foundModule) {
      navigate('/');
      return;
    }

    setModule(foundModule);
    setQuiz(foundModule.quiz);

    // Verificar se o quiz está acessível
    if (!isQuizAccessible(moduleId)) {
      navigate(`/modulo/${moduleId}`);
    }
  }, [moduleId, modules, isQuizAccessible, navigate]);

  if (!module || !quiz) {
    return <div className="container mx-auto px-4 py-8 text-white">Carregando...</div>;
  }

  const questions = quiz.questions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calcular pontuação
      let correctAnswers = 0;
      questions.forEach((question: any, index: number) => {
        if (selectedAnswers[index] === question.correctAnswer) {
          correctAnswers++;
        }
      });
      
      const finalScore = Math.round((correctAnswers / questions.length) * 100);
      setScore(finalScore);
      
      // Marcar quiz como concluído se a pontuação for >= 70%
      if (finalScore >= 70 && moduleId) {
        updateQuizProgress(moduleId, true);
      }
      
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const handleBackToModule = () => {
    if (moduleId) {
      navigate(`/modulo/${moduleId}`);
    }
  };

  // Renderizar resultados do quiz
  if (showResults) {
    const passed = score >= 70;
    
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-sf-display font-bold text-white">{quiz.title}</h1>
        </div>

        <div className="bg-gray-900 rounded-xl p-8 mb-8 text-center">
          <h2 className="text-2xl font-sf-display font-bold mb-4">
            Resultado do Quiz
          </h2>
          
          <div className="mb-6">
            <div className="inline-block w-32 h-32 rounded-full border-4 border-gray-700 flex items-center justify-center">
              <span className={`text-4xl font-bold ${passed ? 'text-success-green' : 'text-alert-red'}`}>
                {score}%
              </span>
            </div>
          </div>
          
          <p className="text-xl mb-4">
            Você acertou {selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length} de {questions.length} questões.
          </p>
          
          {passed ? (
            <div className="p-4 bg-success-green bg-opacity-20 rounded-lg mb-6">
              <p className="text-success-green font-medium">
                Parabéns! Você passou no quiz e desbloqueou o próximo módulo.
              </p>
            </div>
          ) : (
            <div className="p-4 bg-alert-red bg-opacity-20 rounded-lg mb-6">
              <p className="text-alert-red font-medium">
                Você não atingiu a pontuação mínima de 70%. Tente novamente.
              </p>
            </div>
          )}
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleRestartQuiz}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
            >
              Tentar Novamente
            </button>
            
            <button
              onClick={handleBackToModule}
              className="px-4 py-2 bg-manus-blue text-white rounded-md hover:bg-opacity-90 transition-all"
            >
              Voltar ao Módulo
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Renderizar pergunta atual
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-400 mb-2">
          <Link to={`/modulo/${moduleId}`} className="hover:text-manus-blue transition-colors">
            {module.title}
          </Link>
          <span className="mx-2">&gt;</span>
          <span>{quiz.title}</span>
        </div>
        <h1 className="text-3xl font-sf-display font-bold text-white">{quiz.title}</h1>
      </div>

      <div className="bg-gray-900 rounded-xl p-8 mb-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">
              Pergunta {currentQuestionIndex + 1} de {questions.length}
            </span>
            <div className="w-32 h-2 bg-gray-800 rounded-full">
              <div 
                className="h-2 bg-manus-blue rounded-full" 
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h2 className="text-xl font-sf-display font-medium text-white mb-6">
            {currentQuestion.question}
          </h2>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option: string, index: number) => (
              <div 
                key={index}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedAnswers[currentQuestionIndex] === index 
                    ? 'border-manus-blue bg-manus-blue bg-opacity-10' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                    selectedAnswers[currentQuestionIndex] === index 
                      ? 'border-manus-blue' 
                      : 'border-gray-600'
                  }`}>
                    {selectedAnswers[currentQuestionIndex] === index && (
                      <div className="w-3 h-3 rounded-full bg-manus-blue"></div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswers[currentQuestionIndex] === undefined}
            className={`px-4 py-2 ${
              selectedAnswers[currentQuestionIndex] !== undefined 
                ? 'bg-manus-blue hover:bg-opacity-90' 
                : 'bg-gray-700 cursor-not-allowed'
            } text-white rounded-md transition-all flex items-center`}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Próxima' : 'Finalizar Quiz'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
