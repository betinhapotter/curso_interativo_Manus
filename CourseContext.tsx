import React, { createContext, useState, useContext, ReactNode } from 'react';
import { updateModuleContents } from '../data/moduleContents';

// Definição dos tipos para o conteúdo do curso
export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  duration: number; // em minutos
}

export interface Quiz {
  id: string;
  title: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  image: string;
  lessons: Lesson[];
  quiz: Quiz;
}

interface CourseContextType {
  modules: Module[];
  currentModule: Module | null;
  currentLesson: Lesson | null;
  setCurrentModule: (moduleId: string) => void;
  setCurrentLesson: (lessonId: string) => void;
  getNextLesson: (moduleId: string, lessonId: string) => { moduleId: string; lessonId: string } | null;
  getPreviousLesson: (moduleId: string, lessonId: string) => { moduleId: string; lessonId: string } | null;
  isModuleAccessible: (moduleId: string) => boolean;
  isLessonAccessible: (moduleId: string, lessonId: string) => boolean;
  isQuizAccessible: (moduleId: string) => boolean;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Módulo 1 definido diretamente, módulos 2-5 importados do arquivo moduleContents
  const initialModules: Module[] = [
    {
      id: '1',
      title: 'Introdução ao Manus',
      description: 'Apresentação do Manus, suas capacidades fundamentais e seu potencial revolucionário como agente de IA.',
      image: '/images/module1.jpg',
      lessons: [
        {
          id: '1',
          title: 'O que é o Manus?',
          description: 'Definição e visão geral do Manus, história e desenvolvimento pela equipe Monica.',
          content: `# O que é o Manus?

Manus é um agente de IA revolucionário desenvolvido pela equipe Monica que pode operar seu computador, navegar na web e completar tarefas complexas de forma autônoma. Diferentemente dos chatbots tradicionais, o Manus não apenas responde perguntas, mas também realiza operações reais, ajudando os usuários a completar várias tarefas complexas.

## História e Desenvolvimento

O Manus foi desenvolvido pela equipe Monica com o objetivo de criar um assistente de IA verdadeiramente autônomo, capaz de executar tarefas complexas com mínima intervenção humana. A equipe focou em desenvolver capacidades avançadas de tomada de decisão, adaptabilidade e transparência.

## Posicionamento no Ecossistema de IA

No ecossistema atual de agentes de IA, o Manus se destaca por sua:

1. **Autonomia**: Capacidade de completar tarefas sem orientação contínua do usuário
2. **Adaptabilidade**: Habilidade de se adaptar a diferentes tarefas e ambientes
3. **Transparência**: Através do recurso de replay, permitindo que os usuários entendam o processo de tomada de decisão
4. **Versatilidade**: Desempenho em várias tarefas, desde desenvolvimento de código até análise de dados

O Manus representa um importante marco na tecnologia de agentes de IA, não apenas entendendo as necessidades do usuário, mas executando tarefas de forma autônoma, ajudando os usuários a melhorar a eficiência do trabalho.`,
          duration: 15
        },
        {
          id: '2',
          title: 'Capacidades Fundamentais',
          description: 'Execução autônoma de tarefas, navegação na web, desenvolvimento de código, análise de dados e criação de conteúdo.',
          content: `# Capacidades Fundamentais do Manus

O Manus possui as seguintes capacidades fundamentais que o tornam uma ferramenta poderosa para diversos tipos de tarefas:

## 1. Execução Autônoma de Tarefas

O Manus pode dividir tarefas complexas em etapas gerenciáveis, tomar decisões ao longo do caminho e se adaptar a desafios, executando assim tarefas complexas de forma independente. Ele pode entender o contexto das tarefas e ajustar seus métodos conforme necessário.

## 2. Navegação na Web e Pesquisa

O Manus pode pesquisar na web, visitar sites, extrair informações e escrever relatórios de pesquisa com mínima intervenção humana. Ele entende o conteúdo da web e extrai informações relevantes.

## 3. Desenvolvimento de Código

De scripts simples a aplicações web completas, o Manus pode escrever, testar e depurar código em várias linguagens de programação e frameworks. Ele entende conceitos de programação e gera código de alta qualidade.

## 4. Análise de Dados

Carregue seus dados e deixe o Manus analisá-los, criar visualizações e fornecer insights acionáveis através de relatórios abrangentes. Ele pode processar vários formatos de dados e extrair informações valiosas.

## 5. Criação de Conteúdo

O Manus pode criar vários tipos de conteúdo, incluindo artigos, relatórios, apresentações e até experiências web interativas. Ele pode gerar conteúdo de alta qualidade com base nas necessidades do usuário.`,
          duration: 20
        },
        {
          id: '3',
          title: 'O Diferencial do Manus',
          description: 'Autonomia e adaptabilidade, transparência através do recurso de replay, versatilidade em diferentes tarefas.',
          content: `# O Diferencial do Manus

Comparado às ferramentas de IA tradicionais, o Manus possui várias características distintivas:

## Autonomia e Adaptabilidade

O Manus se destaca por sua capacidade de operar com alto grau de autonomia. Diferentemente de assistentes de IA convencionais que requerem instruções detalhadas e supervisão constante, o Manus pode:

- Interpretar instruções gerais e transformá-las em planos de ação detalhados
- Tomar decisões independentes durante a execução de tarefas
- Adaptar-se a circunstâncias imprevistas e obstáculos
- Aprender com interações anteriores para melhorar o desempenho futuro

Esta autonomia permite que os usuários deleguem tarefas complexas com confiança, sabendo que o Manus pode navegar por desafios sem intervenção constante.

## Transparência através do Recurso de Replay

Uma das características mais inovadoras do Manus é seu recurso de replay, que proporciona um nível sem precedentes de transparência:

- Registra cada etapa do processo de execução da tarefa
- Permite aos usuários revisar o raciocínio e as decisões do agente
- Fornece uma ferramenta de aprendizado para entender métodos eficientes de resolução de problemas
- Aumenta a confiança ao permitir a verificação do trabalho realizado

Esta transparência não apenas diferencia o Manus de outras "caixas pretas" de IA, mas também serve como uma ferramenta educacional valiosa.

## Versatilidade em Diferentes Tarefas

O Manus foi projetado como um agente de IA versátil, capaz de executar uma ampla gama de tarefas em diferentes domínios:

- **Desenvolvimento de Software**: Escrita de código, depuração, criação de aplicações web
- **Análise de Dados**: Processamento de dados, visualização, geração de insights
- **Pesquisa**: Coleta de informações, síntese, criação de relatórios
- **Criação de Conteúdo**: Redação de artigos, design de páginas web, criação de apresentações
- **Automação de Processos**: Execução de fluxos de trabalho complexos com múltiplas etapas

Esta versatilidade torna o Manus uma ferramenta valiosa para profissionais em diversos campos, eliminando a necessidade de múltiplas ferramentas especializadas.`,
          duration: 25
        }
      ],
      quiz: {
        id: '1',
        title: 'Quiz: Introdução ao Manus',
        questions: [
          {
            id: '1',
            question: 'O que diferencia o Manus de chatbots tradicionais?',
            options: [
              'Apenas responde a perguntas de forma mais precisa',
              'Realiza operações reais e executa tarefas complexas de forma autônoma',
              'Funciona exclusivamente offline',
              'É mais rápido em cálculos matemáticos'
            ],
            correctAnswer: 1
          },
          {
            id: '2',
            question: 'Qual das seguintes NÃO é uma capacidade fundamental do Manus?',
            options: [
              'Navegação na web e pesquisa',
              'Desenvolvimento de código',
              'Controle de dispositivos IoT físicos',
              'Análise de dados'
            ],
            correctAnswer: 2
          },
          {
            id: '3',
            question: 'O que é o recurso de replay do Manus?',
            options: [
              'Um sistema para repetir comandos anteriores',
              'Uma ferramenta que permite aos usuários ver o processo de tomada de decisão do Manus',
              'Um mecanismo para gravar a voz do usuário',
              'Um sistema de backup automático'
            ],
            correctAnswer: 1
          },
          {
            id: '4',
            question: 'Quem desenvolveu o Manus?',
            options: [
              'Equipe Google',
              'Equipe OpenAI',
              'Equipe Monica',
              'Equipe Microsoft'
            ],
            correctAnswer: 2
          },
          {
            id: '5',
            question: 'Qual característica melhor descreve a autonomia do Manus?',
            options: [
              'Funciona sem conexão com a internet',
              'Pode completar tarefas sem orientação contínua do usuário',
              'Não requer energia elétrica',
              'Funciona apenas com comandos de voz'
            ],
            correctAnswer: 1
          }
        ]
      }
    }
  ];

  // Obter conteúdo dos módulos 2-5
  const additionalModules = updateModuleContents();
  
  // Combinar módulo 1 com módulos 2-5
  const allModules = [...initialModules];
  
  // Adicionar módulos 2-5 se estiverem disponíveis
  Object.entries(additionalModules).forEach(([id, moduleData]) => {
    allModules.push({
      id,
      ...moduleData as Omit<Module, 'id'>
    });
  });

  const [modules] = useState<Module[]>(allModules);
  const [currentModule, setCurrentModuleState] = useState<Module | null>(null);
  const [currentLesson, setCurrentLessonState] = useState<Lesson | null>(null);

  const setCurrentModule = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId) || null;
    setCurrentModuleState(module);
    if (module && module.lessons.length > 0) {
      setCurrentLessonState(module.lessons[0]);
    }
  };

  const setCurrentLesson = (lessonId: string) => {
    if (!currentModule) return;
    const lesson = currentModule.lessons.find(l => l.id === lessonId) || null;
    setCurrentLessonState(lesson);
  };

  const getNextLesson = (moduleId: string, lessonId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return null;

    const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
    if (lessonIndex === -1) return null;

    // Se não for a última lição do módulo
    if (lessonIndex < module.lessons.length - 1) {
      return {
        moduleId,
        lessonId: module.lessons[lessonIndex + 1].id
      };
    }

    // Se for a última lição do módulo, verificar se há próximo módulo
    const moduleIndex = modules.findIndex(m => m.id === moduleId);
    if (moduleIndex < modules.length - 1) {
      const nextModule = modules[moduleIndex + 1];
      if (nextModule.lessons.length > 0) {
        return {
          moduleId: nextModule.id,
          lessonId: nextModule.lessons[0].id
        };
      }
    }

    return null;
  };

  const getPreviousLesson = (moduleId: string, lessonId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return null;

    const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
    if (lessonIndex === -1) return null;

    // Se não for a primeira lição do módulo
    if (lessonIndex > 0) {
      return {
        moduleId,
        lessonId: module.lessons[lessonIndex - 1].id
      };
    }

    // Se for a primeira lição do módulo, verificar se há módulo anterior
    const moduleIndex = modules.findIndex(m => m.id === moduleId);
    if (moduleIndex > 0) {
      const prevModule = modules[moduleIndex - 1];
      if (prevModule.lessons.length > 0) {
        return {
          moduleId: prevModule.id,
          lessonId: prevModule.lessons[prevModule.lessons.length - 1].id
        };
      }
    }

    return null;
  };

  // Lógica para verificar se um módulo está acessível
  // No módulo 1 sempre está acessível, outros módulos só são acessíveis se o anterior estiver completo
  const isModuleAccessible = (moduleId: string): boolean => {
    // O primeiro módulo sempre está acessível
    if (moduleId === '1') return true;

    // Para outros módulos, verificar se o módulo anterior foi concluído
    // Esta lógica seria integrada com o UserContext em uma implementação completa
    const moduleIndex = modules.findIndex(m => m.id === moduleId);
    if (moduleIndex <= 0) return false;

    // Simulação - em um app real, isso verificaria o progresso do usuário
    return true; // Temporariamente permitindo acesso a todos os módulos para desenvolvimento
  };

  // Lógica para verificar se uma lição está acessível
  const isLessonAccessible = (moduleId: string, lessonId: string): boolean => {
    // Se o módulo não estiver acessível, a lição também não está
    if (!isModuleAccessible(moduleId)) return false;

    const module = modules.find(m => m.id === moduleId);
    if (!module) return false;

    // A primeira lição de um módulo acessível sempre está acessível
    const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
    if (lessonIndex === 0) return true;

    // Para outras lições, verificar se a lição anterior foi concluída
    // Esta lógica seria integrada com o UserContext em uma implementação completa
    return true; // Temporariamente permitindo acesso a todas as lições para desenvolvimento
  };

  // Lógica para verificar se um quiz está acessível
  const isQuizAccessible = (moduleId: string): boolean => {
    // Se o módulo não estiver acessível, o quiz também não está
    if (!isModuleAccessible(moduleId)) return false;

    const module = modules.find(m => m.id === moduleId);
    if (!module) return false;

    // O quiz só está acessível se todas as lições do módulo foram concluídas
    // Esta lógica seria integrada com o UserContext em uma implementação completa
    return true; // Temporariamente permitindo acesso a todos os quizzes para desenvolvimento
  };

  return (
    <CourseContext.Provider
      value={{
        modules,
        currentModule,
        currentLesson,
        setCurrentModule,
        setCurrentLesson,
        getNextLesson,
        getPreviousLesson,
        isModuleAccessible,
        isLessonAccessible,
        isQuizAccessible
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};
