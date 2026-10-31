# Orientações do repositório

- Comente o código em português.

## Comandos e verificação
- Use npm com `package-lock.json`: `npm ci` instala as versões fixadas das dependências.
- `npm run dev` inicia o Vite; `npm run build` gera `dist/`; `npm run preview` serve essa versão compilada (execute o build primeiro).
- Não há scripts nem configurações de testes, lint, formatação ou verificação de tipos. O README contém o texto padrão do template; suas referências ao ESLint não correspondem às ferramentas instaladas.
- Verifique as alterações com `npm run build` e teste a interface manualmente usando `npm run dev`, especialmente operações encadeadas, troca de operador, entrada de um dígito após `=` e limpeza com `C`. Um build bem-sucedido não verifica o comportamento da calculadora.

## Funcionamento da calculadora
- `index.html` carrega `src/main.jsx`, que monta `App` dentro do StrictMode do React e importa o CSS global `src/index.css`.
- `src/App.jsx` gerencia todo o estado da calculadora e a sequência das operações; as funções aritméticas puras ficam em `src/utils/operacoes.js`. Adicionar uma operação exige atualizar as exportações desse arquivo, as importações em App, o tratamento em `calcular` e a lista de botões `OPERADORES`.
- O valor do visor é uma string; App o converte com `Number` ao realizar cálculos. `novoNumero` controla se um dígito substitui o valor atual ou é acrescentado a ele; selecionar outro operador só executa uma operação pendente quando um novo operando já foi digitado.
- `Botao` chama `onClick(valor)`, não `onClick(event)`. Sua prop `tipo` seleciona a classe CSS global `botao-${tipo}`.
- Os textos da interface e os identificadores existentes estão em português (`pt-BR`). Os operadores de multiplicação e divisão usam `x` e `÷` em App. `dividir` lança um erro ao receber divisor zero; App exibe `Erro` e limpa a operação pendente, permitindo reiniciar com um dígito ou `C`. Entrada decimal e histórico ainda são TODOs.
