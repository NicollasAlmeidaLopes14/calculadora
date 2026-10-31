# Calculadora

## Descrição

Calculadora web desenvolvida com React e Vite. Permite realizar soma, subtração, multiplicação e divisão, além de limpar o visor com o botão `C`.

## Pré-requisitos

- Node.js e npm instalados.

## Instalação

Na pasta do projeto, instale as dependências:

```bash
npm install
```

## Como rodar

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço exibido no terminal.

## Estrutura do projeto

```text
src/
├── components/
│   ├── Botao.jsx       # Botão reutilizável da calculadora
│   └── Display.jsx     # Visor que apresenta o valor atual
├── utils/
│   └── operacoes.js    # Funções das operações matemáticas
├── App.jsx            # Estado e lógica de interação da calculadora
├── index.css          # Estilos globais da interface
└── main.jsx           # Inicialização da aplicação React
```

- **`src/`**: código-fonte da aplicação. O `App.jsx` coordena o estado e as operações, utilizando os componentes de interface de `components/` e as funções matemáticas de `utils/`.
- **`dist/`**: versão de produção gerada pelo comando `npm run build`.
- **`node_modules/`**: dependências instaladas pelo npm; não deve ser editada manualmente.
- **Raiz do projeto**: contém o `index.html`, página de entrada da aplicação; o `package.json`, com scripts e dependências; o `package-lock.json`, que registra as versões das dependências; e o `vite.config.js`, com a configuração do Vite.
