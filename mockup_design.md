# Mockup do Design do Site do Curso Manus - Estilo Netflix/Apple

## Visão Geral do Design

O design do site do curso Manus seguirá uma estética minimalista inspirada na Apple (fontes limpas, bastante espaçamento, cores suaves) combinada com a organização e navegação da Netflix (barra lateral, cards de conteúdo, navegação fluida).

## Paleta de Cores

- **Primária**: #0A84FF (Azul Manus)
- **Secundária**: #F5F5F7 (Cinza claro Apple)
- **Fundo**: #000000 (Preto Netflix)
- **Texto**: #FFFFFF (Branco)
- **Acentos**: 
  - #34C759 (Verde - Sucesso)
  - #FF3B30 (Vermelho - Alerta)
  - #5E5CE6 (Roxo - Destaque)

## Tipografia

- **Título Principal**: SF Pro Display, 48px, peso 700
- **Títulos de Seção**: SF Pro Display, 32px, peso 600
- **Subtítulos**: SF Pro Display, 24px, peso 500
- **Corpo de Texto**: SF Pro Text, 16px, peso 400
- **Botões e Navegação**: SF Pro Text, 14px, peso 500

## Layout Principal

### Tela de Login/Registro
- Fundo gradiente escuro com efeito de profundidade
- Logo Manus centralizado
- Campos de entrada minimalistas com bordas sutis
- Botão de acesso em azul Manus com efeito de hover suave

### Dashboard Principal
- **Barra Lateral (Esquerda - 20% da largura)**
  - Logo Manus no topo
  - Perfil do usuário com foto e nome
  - Menu de navegação com ícones e texto
  - Indicador de progresso geral do curso
  - Botão de configurações na parte inferior

- **Área de Conteúdo Principal (Centro/Direita - 80% da largura)**
  - Banner do curso em destaque no topo (estilo hero)
  - Seção "Continue de onde parou" com a próxima aula disponível
  - Carrossel horizontal de módulos do curso
  - Cada módulo exibe:
    - Imagem de capa com gradiente
    - Título do módulo
    - Número de aulas
    - Indicador de progresso
    - Status (Bloqueado/Desbloqueado/Concluído)

## Páginas Principais

### Página Inicial
- Banner de boas-vindas com animação sutil
- Visão geral do curso
- Módulos disponíveis em formato de cards
- Progresso geral do usuário
- Últimas atividades

### Página de Módulo
- Banner do módulo com imagem e título
- Descrição e objetivos de aprendizado
- Lista de aulas em formato de cards horizontais
- Cada card de aula contém:
  - Número e título da aula
  - Duração estimada
  - Status (Bloqueada/Disponível/Concluída)
  - Ícone indicativo do tipo de conteúdo

### Página de Aula
- **Cabeçalho**
  - Título da aula
  - Navegação entre aulas (anterior/próxima)
  - Indicador de progresso no módulo

- **Área de Conteúdo**
  - Texto formatado com tipografia clara
  - Imagens ilustrativas
  - Blocos de código com sintaxe destacada
  - Citações e notas em destaque
  - Tabelas comparativas quando necessário

- **Área de Interação**
  - Botões de navegação (anterior/próxima)
  - Botão de marcar como concluída
  - Opção de fazer anotações

### Página de Quiz
- Introdução ao quiz com objetivos
- Perguntas apresentadas uma por vez
- Feedback visual imediato para respostas
- Barra de progresso do quiz
- Resultado final com pontuação e feedback
- Botão para revisar ou avançar

## Componentes de UI

### Cards de Módulo
- Formato retangular com proporção 16:9
- Imagem de fundo com overlay gradiente
- Título do módulo na parte inferior
- Indicador de progresso como barra linear
- Efeito de hover com leve aumento de escala e brilho

### Cards de Aula
- Formato retangular horizontal
- Ícone representativo do tipo de conteúdo
- Título e descrição breve
- Indicador de status (ícone de cadeado/check)
- Efeito de hover com destaque sutil

### Botões
- Cantos arredondados (8px)
- Preenchimento generoso (16px vertical, 24px horizontal)
- Efeito de hover com mudança suave de opacidade
- Versões: primário (azul), secundário (cinza), sucesso (verde)

### Navegação
- Indicadores de progresso como círculos preenchidos
- Setas de navegação minimalistas
- Breadcrumbs para localização dentro do curso
- Animações suaves de transição entre páginas

## Elementos de Gamificação

### Sistema de Progresso
- Barra de progresso circular para progresso geral
- Barras lineares para progresso em módulos
- Animações de preenchimento ao completar itens

### Conquistas
- Badges minimalistas para conclusão de módulos
- Animação de celebração ao desbloquear conquistas
- Seção dedicada ao perfil para visualizar todas as conquistas

### Desbloqueio Progressivo
- Efeito visual de desbloqueio quando uma nova aula fica disponível
- Notificação sutil quando novo conteúdo é desbloqueado
- Transição suave de estado bloqueado para desbloqueado

## Responsividade

### Desktop (1200px+)
- Layout completo com barra lateral sempre visível
- Carrosséis horizontais com 3-4 itens visíveis
- Conteúdo de texto com largura máxima de 800px para legibilidade

### Tablet (768px - 1199px)
- Barra lateral colapsável com botão de menu
- Carrosséis horizontais com 2-3 itens visíveis
- Ajuste de tamanho de fonte e espaçamento

### Mobile (320px - 767px)
- Barra lateral substituída por menu de hambúrguer
- Carrosséis verticais em vez de horizontais
- Cards de conteúdo em largura total
- Navegação simplificada com botões maiores para toque

## Animações e Transições

- Transições de página com fade suave (300ms)
- Animação de carregamento minimalista (spinner circular)
- Efeito parallax sutil em banners de destaque
- Transições de hover com timing de 150ms
- Animações de desbloqueio de conteúdo (400ms)

## Exemplos Visuais

### Tela de Login
```
┌────────────────────────────────────────────────────┐
│                                                    │
│                                                    │
│                    [Logo Manus]                    │
│                                                    │
│                                                    │
│             Curso Interativo de Manus              │
│                                                    │
│  ┌────────────────────────────────────────────┐   │
│  │                  Email                      │   │
│  └────────────────────────────────────────────┘   │
│                                                    │
│  ┌────────────────────────────────────────────┐   │
│  │                  Senha                      │   │
│  └────────────────────────────────────────────┘   │
│                                                    │
│             [Entrar no Curso Manus]                │
│                                                    │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Dashboard Principal
```
┌────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌───────────────────────────────────┐ │
│ │          │ │                                   │ │
│ │   Logo   │ │           Banner do Curso         │ │
│ │          │ │                                   │ │
│ ├──────────┤ └───────────────────────────────────┘ │
│ │          │                                       │
│ │  Perfil  │ Continue de onde parou:               │
│ │          │ ┌───────────────────────────────────┐ │
│ ├──────────┤ │                                   │ │
│ │ ● Módulo1 │ │      Aula 2.3: Interagindo       │ │
│ │ ○ Módulo2 │ │           com o Manus            │ │
│ │ ○ Módulo3 │ │                                   │ │
│ │ ○ Módulo4 │ └───────────────────────────────────┘ │
│ │ ○ Módulo5 │                                       │
│ ├──────────┤ Módulos do Curso:                      │
│ │          │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   │
│ │Progresso:│ │Módulo│ │Módulo│ │Módulo│ │Módulo│   │
│ │  45%     │ │  1   │ │  2   │ │  3   │ │  4   │   │
│ │          │ │      │ │      │ │      │ │      │   │
│ │[●●●○○○○○○]│ └──────┘ └──────┘ └──────┘ └──────┘   │
│ └──────────┘                                       │
└────────────────────────────────────────────────────┘
```

### Página de Módulo
```
┌────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌───────────────────────────────────┐ │
│ │          │ │                                   │ │
│ │   Menu   │ │     Banner do Módulo 2            │ │
│ │          │ │                                   │ │
│ │          │ └───────────────────────────────────┘ │
│ │          │                                       │
│ │          │ Como Usar o Manus                     │
│ │          │                                       │
│ │          │ Descrição e objetivos do módulo...    │
│ │          │                                       │
│ │          │ Aulas:                                │
│ │          │ ┌───────────────────────────────────┐ │
│ │          │ │ ✓ 2.1: Primeiros Passos           │ │
│ │          │ └───────────────────────────────────┘ │
│ │          │ ┌───────────────────────────────────┐ │
│ │          │ │ ✓ 2.2: A Arte da Descrição        │ │
│ │          │ └───────────────────────────────────┘ │
│ │          │ ┌───────────────────────────────────┐ │
│ │          │ │ ○ 2.3: Interagindo com o Manus    │ │
│ │          │ └───────────────────────────────────┘ │
│ │          │ ┌───────────────────────────────────┐ │
│ │          │ │ 🔒 Quiz Interativo 2              │ │
│ │          │ └───────────────────────────────────┘ │
│ └──────────┘                                       │
└────────────────────────────────────────────────────┘
```

### Página de Aula
```
┌────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌───────────────────────────────────┐ │
│ │          │ │ Módulo 2 > Aula 2.3               │ │
│ │   Menu   │ └───────────────────────────────────┘ │
│ │          │                                       │
│ │          │ Interagindo com o Manus               │
│ │          │                                       │
│ │          │ Conteúdo da aula com formatação rica, │
│ │          │ imagens, exemplos de código, etc.     │
│ │          │                                       │
│ │          │ Lorem ipsum dolor sit amet,           │
│ │          │ consectetur adipiscing elit. Sed do   │
│ │          │ eiusmod tempor incididunt ut labore.  │
│ │          │                                       │
│ │          │ [Imagem ilustrativa]                  │
│ │          │                                       │
│ │          │ Mais conteúdo textual...              │
│ │          │                                       │
│ │          │                                       │
│ │          │ ┌─────────────┐    ┌─────────────┐   │
│ │          │ │   Anterior  │    │   Próxima   │   │
│ │          │ └─────────────┘    └─────────────┘   │
│ └──────────┘                                       │
└────────────────────────────────────────────────────┘
```

### Página de Quiz
```
┌────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌───────────────────────────────────┐ │
│ │          │ │ Módulo 2 > Quiz Interativo        │ │
│ │   Menu   │ └───────────────────────────────────┘ │
│ │          │                                       │
│ │          │ Pergunta 2 de 5                       │
│ │          │                                       │
│ │          │ Qual dos seguintes elementos é mais   │
│ │          │ importante em uma descrição de tarefa │
│ │          │ para o Manus?                         │
│ │          │                                       │
│ │          │ ┌───────────────────────────────────┐ │
│ │          │ │ ○ A) Linguagem formal             │ │
│ │          │ └───────────────────────────────────┘ │
│ │          │ ┌───────────────────────────────────┐ │
│ │          │ │ ○ B) Objetivo claro               │ │
│ │          │ └───────────────────────────────────┘ │
│ │          │ ┌───────────────────────────────────┐ │
│ │          │ │ ○ C) Muitos detalhes técnicos     │ │
│ │          │ └───────────────────────────────────┘ │
│ │          │ ┌───────────────────────────────────┐ │
│ │          │ │ ○ D) Instruções passo a passo     │ │
│ │          │ └───────────────────────────────────┘ │
│ │          │                                       │
│ │          │ [Progresso: ●●○○○]                    │
│ └──────────┘                                       │
└────────────────────────────────────────────────────┘
```
