import React from 'react';

export const updateModuleContents = () => {
  return {
    '2': {
      title: 'Como Usar o Manus',
      description: 'Guia detalhado sobre como utilizar o Manus, desde o acesso inicial até a otimização de prompts.',
      image: '/images/module2.jpg',
      lessons: [
        {
          id: '1',
          title: 'Primeiros Passos',
          description: 'Como obter acesso ao Manus, navegar na interface e submeter sua primeira tarefa.',
          content: `# Primeiros Passos com o Manus

## Obtendo Acesso ao Manus

O Manus está atualmente em fase de acesso limitado, e você precisa de um código de convite para utilizá-lo. Aqui estão os passos para obter acesso:

1. Visite o [site oficial do Manus](https://manus.im)
2. Clique no botão "Entrar na Lista de Espera"
3. Preencha seu endereço de e-mail e informações relevantes
4. Aguarde um código de convite (isso pode levar algum tempo)
5. Quando receber o código de convite, siga as instruções no e-mail para completar o registro

## Primeiro Login e Familiarização com a Interface

Após o registro bem-sucedido, você pode fazer login na plataforma Manus. Aqui estão os principais componentes da interface:

- **Caixa de Entrada de Tarefas**: Localizada no centro da página, usada para inserir a tarefa que você deseja que o Manus execute
- **Histórico**: Exibe suas tarefas enviadas anteriormente e seus status
- **Configurações**: Usado para ajustar o comportamento e preferências do Manus
- **Replay**: Visualize o processo detalhado de execução de tarefas pelo Manus

## Submetendo Sua Primeira Tarefa

Para submeter uma tarefa, simplesmente descreva a tarefa que você deseja que o Manus execute na caixa de entrada de tarefas e clique no botão "Enviar". Por exemplo:

> "Ajude-me a criar uma aplicação simples de lista de tarefas com funcionalidades de adicionar, excluir e marcar como concluída."

Após enviar a tarefa, o Manus começará a trabalhar, e você poderá observar seu processo de execução em tempo real.`,
          duration: 15
        },
        {
          id: '2',
          title: 'A Arte da Descrição de Tarefas',
          description: 'Elementos-chave de uma descrição eficaz, exemplos comentados e erros comuns a evitar.',
          content: `# A Arte da Descrição de Tarefas

## Elementos-Chave de uma Descrição de Tarefa

Para obter os melhores resultados, sua descrição de tarefa deve incluir os seguintes elementos:

1. **Objetivo Claro**: Declare claramente o que você deseja alcançar
2. **Contexto Necessário**: Forneça informações de fundo relevantes
3. **Requisitos Específicos**: Especifique quaisquer preferências ou restrições particulares
4. **Resultado Esperado**: Descreva o resultado final que você espera

## Exemplos de Descrições de Tarefas e Análise

Aqui estão alguns exemplos de descrições eficazes de tarefas:

**Exemplo 1: Tarefa de Análise de Dados**

> "Analise os dados de vendas no anexo (2022-2023), crie um painel contendo tendências mensais, padrões sazonais e os cinco principais produtos. Use Python e Matplotlib, e apresente os resultados em formato de relatório PDF."

**Análise**: Esta descrição de tarefa especifica claramente a fonte de dados, o conteúdo da análise, as ferramentas a serem usadas e o formato de saída.

**Exemplo 2: Tarefa de Desenvolvimento Web**

> "Crie um site de portfólio para meu trabalho de fotografia. O site deve incluir uma página inicial, página de portfólio e página de contato. O estilo de design deve ser minimalista e moderno, com um esquema de cores preto e branco que destaque as fotos. Use HTML, CSS e uma pequena quantidade de JavaScript, garantindo que o site seja exibido corretamente em dispositivos móveis também."

**Análise**: Esta descrição de tarefa inclui estrutura do site, estilo de design, requisitos técnicos e requisitos de design responsivo.

## Erros Comuns a Evitar

Ao descrever tarefas, evite estes erros comuns:

1. **Muito Vago**: Como "faça um site legal"
2. **Informações Insuficientes**: Faltando detalhes ou contexto importantes
3. **Restrições Excessivas**: Fornecer muitas restrições detalhadas, dificultando a criatividade do Manus
4. **Termos Técnicos Imprecisos**: Usar termos técnicos incorretos pode levar a mal-entendidos`,
          duration: 20
        },
        {
          id: '3',
          title: 'Interagindo com o Manus',
          description: 'Fornecimento de feedback, refinamento iterativo de resultados e estratégias para tarefas complexas.',
          content: `# Interagindo com o Manus

## Fornecendo Feedback Efetivo

O Manus é não apenas uma ferramenta, mas um parceiro colaborativo. Aqui estão dicas para fornecer feedback efetivo:

1. **Seja Específico**: Indique exatamente quais aspectos você gostou e quais precisam de melhoria
2. **Forneça Exemplos**: Quando possível, dê exemplos do que você está procurando
3. **Explique o Porquê**: Compartilhe seu raciocínio para ajudar o Manus a entender suas preferências
4. **Mantenha-se Positivo**: Foque em melhorias construtivas em vez de críticas negativas

## Refinamento Iterativo de Resultados

Para obter os melhores resultados, considere uma abordagem iterativa:

1. **Comece Amplo**: Inicie com uma descrição de tarefa geral
2. **Avalie os Resultados Iniciais**: Identifique o que funciona e o que precisa de ajustes
3. **Refine Gradualmente**: Forneça feedback específico e solicite ajustes
4. **Repita Conforme Necessário**: Continue o processo até atingir o resultado desejado

Esta abordagem geralmente leva a resultados melhores do que tentar obter tudo perfeito na primeira tentativa.

## Estratégias para Tarefas Complexas

Para tarefas particularmente complexas, considere estas estratégias:

1. **Decomposição de Tarefas**: Divida tarefas grandes em várias tarefas menores
2. **Refinamento Progressivo**: Obtenha resultados preliminares primeiro, depois refine gradualmente
3. **Forneça Exemplos**: Se possível, forneça exemplos de tarefas similares
4. **Defina Pontos de Verificação**: Solicite atualizações de progresso do Manus em estágios-chave

## Lidando com Desafios Comuns

Quando encontrar desafios ao trabalhar com o Manus:

1. **Resultados Inesperados**: Clarifique suas expectativas e forneça exemplos mais específicos
2. **Limitações Técnicas**: Entenda as capacidades do Manus e ajuste suas expectativas
3. **Tarefas Complexas**: Divida em subtarefas menores e mais gerenciáveis
4. **Comunicação Confusa**: Reformule suas instruções usando linguagem mais clara e direta

Lembre-se de que o Manus está constantemente aprendendo e melhorando. Sua interação e feedback ajudam a melhorar o sistema para todos os usuários.`,
          duration: 25
        }
      ],
      quiz: {
        id: '2',
        title: 'Quiz: Como Usar o Manus',
        questions: [
          {
            id: '1',
            question: 'Qual elemento é mais importante em uma descrição de tarefa eficaz para o Manus?',
            options: [
              'Uso de termos técnicos avançados',
              'Objetivo claro do que você deseja alcançar',
              'Limitação rigorosa do tempo de execução',
              'Formatação com muitos emojis e marcadores'
            ],
            correctAnswer: 1
          },
          {
            id: '2',
            question: 'Qual é a melhor abordagem para tarefas complexas no Manus?',
            options: [
              'Sempre incluir todos os detalhes em uma única descrição longa',
              'Usar apenas comandos curtos de uma linha',
              'Dividir em subtarefas menores e mais gerenciáveis',
              'Evitar completamente tarefas complexas'
            ],
            correctAnswer: 2
          },
          {
            id: '3',
            question: 'Como você pode acessar o Manus atualmente?',
            options: [
              'Está disponível gratuitamente para todos',
              'Apenas através de compra direta',
              'Através de um código de convite após entrar na lista de espera',
              'Exclusivamente para empresas Fortune 500'
            ],
            correctAnswer: 2
          },
          {
            id: '4',
            question: 'Qual é a melhor estratégia para refinar resultados no Manus?',
            options: [
              'Rejeitar completamente e recomeçar se o primeiro resultado não for perfeito',
              'Fornecer feedback específico e solicitar ajustes iterativamente',
              'Nunca dar feedback para não confundir o sistema',
              'Sempre aceitar o primeiro resultado sem questionar'
            ],
            correctAnswer: 1
          },
          {
            id: '5',
            question: 'O que é o recurso "Replay" no Manus?',
            options: [
              'Uma função para repetir exatamente a mesma tarefa',
              'Um botão para reiniciar o Manus quando trava',
              'Uma ferramenta para visualizar o processo detalhado de execução de tarefas',
              'Um sistema de backup automático'
            ],
            correctAnswer: 2
          }
        ]
      }
    },
    '3': {
      title: 'Casos de Uso do Manus',
      description: 'Explore aplicações práticas do Manus em diferentes áreas, com exemplos detalhados e análise de resultados.',
      image: '/images/module3.jpg',
      lessons: [
        {
          id: '1',
          title: 'Desenvolvimento de Código',
          description: 'Casos práticos de desenvolvimento de software usando o Manus, desde jogos até soluções para problemas de engenharia.',
          content: `# Desenvolvimento de Código com o Manus

## Caso: Desenvolvendo um Simulador de CEO do Google

Neste caso, um usuário pediu ao Manus para desenvolver um jogo interativo baseado em texto que permite aos jogadores assumir o papel de CEO do Google, experimentando decisões importantes na história da empresa, tanto para diversão quanto para aprender sobre a cultura da empresa.

O Manus completou esta tarefa em cerca de uma hora, criando um jogo web completo. O jogo inclui:
- Recurso de seleção de dificuldade
- Pontos de decisão-chave na história do desenvolvimento do Google
- Sistema de gerenciamento de recursos
- Múltiplos finais de jogo

Este caso demonstra as poderosas capacidades do Manus no desenvolvimento de código. Ele não apenas entende requisitos complexos, mas também implementa uma aplicação totalmente funcional em pouco tempo.

## Caso: Resolvendo um Problema de Braço Robótico

Em outro caso, um engenheiro encontrou um problema com um braço robótico Atlas. Obter serviço pós-venda custaria milhares de dólares, e revisar a documentação era complicado.

O Manus proativamente baixou a documentação do site oficial da Atlas, leu e analisou, encontrou o conteúdo-chave para resolver o problema e criou o programa correspondente. Embora o código tivesse algumas pequenas falhas, era totalmente utilizável após modificações simples, economizando muito tempo e dinheiro para o usuário.

## Melhores Práticas para Tarefas de Desenvolvimento de Código

Ao solicitar ao Manus tarefas de desenvolvimento de código, considere estas práticas recomendadas:

1. **Especifique Linguagens e Frameworks**: Seja claro sobre quais tecnologias você deseja usar
2. **Forneça Requisitos Funcionais**: Liste as funcionalidades específicas que você precisa
3. **Mencione Restrições**: Indique quaisquer limitações ou requisitos específicos
4. **Solicite Testes**: Peça ao Manus para incluir testes unitários ou de integração
5. **Peça Documentação**: Solicite comentários de código e documentação quando necessário

## Limitações e Considerações

Embora o Manus seja poderoso no desenvolvimento de código, é importante estar ciente de algumas limitações:

1. **Conhecimento de Bibliotecas Especializadas**: O Manus pode não estar familiarizado com bibliotecas muito obscuras ou específicas de domínio
2. **Otimização Avançada**: Para casos de uso de alto desempenho, pode ser necessário otimização adicional
3. **Segurança**: Sempre revise o código gerado para possíveis problemas de segurança antes de implantá-lo em produção
4. **Integração com Sistemas Legados**: Pode ser desafiador para o Manus entender sistemas legados complexos sem documentação adequada

Apesar dessas limitações, o Manus representa uma ferramenta poderosa para acelerar significativamente o desenvolvimento de software em uma ampla variedade de contextos.`,
          duration: 20
        },
        {
          id: '2',
          title: 'Análise de Dados',
          description: 'Como o Manus pode transformar dados brutos em insights acionáveis através de análise e visualização.',
          content: `# Análise de Dados com o Manus

## Caso: Análise de Ações

Um usuário pediu ao Manus para conduzir uma análise aprofundada das ações da Tesla. O Manus não apenas coletou dados relevantes, mas também criou painéis visualmente impressionantes mostrando insights abrangentes sobre as ações.

A análise incluiu:
- Tendências de preços históricos
- Análise de volume de negociação
- Indicadores financeiros-chave
- Análise de sentimento de mercado
- Recomendações de investimento

Este caso demonstra as capacidades do Manus na análise de dados. Ele pode coletar dados de várias fontes, analisá-los e apresentar resultados de maneira intuitiva.

## Caso: Análise de Relatório Financeiro da Amazon

Através de pesquisa e análise de dados, o Manus capturou mudanças no sentimento do mercado em relação à Amazon ao longo dos últimos quatro trimestres. Ele não apenas analisou dados financeiros, mas também considerou reações do mercado e comentários de analistas, fornecendo uma análise abrangente de sentimento de mercado.

## Estratégias para Tarefas de Análise de Dados

Para obter os melhores resultados ao solicitar análises de dados ao Manus:

1. **Forneça Dados Claros**: Carregue arquivos de dados ou forneça fontes específicas
2. **Defina Perguntas Específicas**: Articule claramente quais insights você está buscando
3. **Especifique Visualizações**: Indique quais tipos de gráficos ou visualizações você prefere
4. **Solicite Explicações**: Peça ao Manus para explicar suas descobertas em linguagem simples
5. **Itere Conforme Necessário**: Refine sua análise com base nos resultados iniciais

## Tipos de Análise que o Manus Pode Realizar

O Manus é versátil em suas capacidades de análise de dados, incluindo:

1. **Análise Exploratória**: Descobrindo padrões e tendências em conjuntos de dados
2. **Análise Estatística**: Aplicando métodos estatísticos para testar hipóteses
3. **Análise Preditiva**: Usando dados históricos para fazer previsões
4. **Análise de Sentimento**: Avaliando opiniões e emoções em dados textuais
5. **Visualização de Dados**: Criando representações visuais claras e informativas
6. **Relatórios Automatizados**: Gerando relatórios abrangentes com insights acionáveis

## Limitações e Melhores Práticas

Ao trabalhar com o Manus para análise de dados, esteja ciente de:

1. **Qualidade dos Dados**: O Manus só pode fornecer insights tão bons quanto os dados fornecidos
2. **Verificação de Resultados**: Sempre verifique resultados críticos, especialmente para decisões importantes
3. **Privacidade de Dados**: Considere questões de privacidade ao carregar dados sensíveis
4. **Complexidade Computacional**: Análises muito complexas podem levar mais tempo ou precisar ser divididas

Com as práticas corretas, o Manus pode transformar significativamente sua abordagem à análise de dados, economizando tempo e descobrindo insights que poderiam ser facilmente perdidos.`,
          duration: 20
        },
        {
          id: '3',
          title: 'Criação de Conteúdo e Pesquisa',
          description: 'Exemplos de como o Manus pode criar conteúdo criativo e realizar pesquisas aprofundadas.',
          content: `# Criação de Conteúdo e Pesquisa com o Manus

## Caso: Crônica Minimalista Nacional

Um usuário pediu ao Manus para criar uma crônica minimalista de um país, apresentada em forma de quadrinhos com design web.

O Manus dividiu a históri
(Content truncated due to size limit. Use line ranges to read in chunks)