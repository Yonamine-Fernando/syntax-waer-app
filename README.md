# 🛍️ SyntaxWear

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BA5?style=for-the-badge&logo=vite&logoColor=FFD62E)

A **SyntaxWear** é um e-commerce de moda moderno, rápido e responsivo, focado em proporcionar a melhor experiência de usuário (UX) e performance.

> **⚠️ Aviso Legal:** Esta é uma loja fictícia. O projeto foi desenvolvido exclusivamente para fins de estudo e composição de portfólio.

---

## 📌 Contexto do Projeto e Mentoria

O escopo principal desta aplicação foi desenvolvido acompanhando as bases de um curso de Front-end. No entanto, tomei a iniciativa de ir além do que foi ensinado e adicionei funcionalidades totalmente novas e exclusivas que não existiam no projeto original, como:

- O componente de autenticação **`ButtonGoogle`**.
- A **validação de restrição de idade (+18 anos)** integrada aos formulários.

Além disso, utilizei a inteligência artificial do **Google Gemini** como um "Mentor Virtual" para debater decisões arquiteturais e refatorar o código focando em padrões de mercado (Nível Sênior). Dentre as principais melhorias implementadas, destacam-se:

- **Performance no Estado Global:** Refatoração do carrinho de compras (`BagProvider`) utilizando _Lazy Initialization_ no State para leitura do LocalStorage, eliminando problemas de renderização em cascata (_Cascading Renders_).
- **Roteamento Tipado e Seguro:** Implementação do método estrito `parseParams` no **TanStack Router** para garantir a conversão e tipagem correta de parâmetros da URL antes da renderização dos componentes.
- **Clean Code e Boas Práticas:** Uso extensivo de Cláusulas de Guarda (_Guard Clauses_), imutabilidade de estados e tratamento seguro de erros em requisições de API externa.

---

## ✨ Funcionalidades

- 🛒 **Carrinho de Compras Global:** Gerenciamento de estado otimizado persistido no LocalStorage.
- 🚚 **Cálculo de Frete Dinâmico:** Consumo da API do ViaCEP para preenchimento de endereço e cálculo de taxas por região.
- 🔐 **Login Seguro e Validação:** Integração de botões sociais (Google) e validação de regras de negócio (maioridade) via Zod.
- ⚡ **Navegação SPA Instantânea:** Roteamento de páginas ultrarrápido sem recarregamento do navegador.
- 📱 **Design Responsivo:** Layout adaptável para dispositivos móveis, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **React.js** (com Vite)
- **TypeScript** (Tipagem rigorosa e Interfaces)
- **Tailwind CSS** (Estilização via utilitários)
- **TanStack Router** (Roteamento moderno e 100% tipado)
- **React Hook Form + Zod** (Gerenciamento e validação de formulários)
- **Context API** (Gerenciamento de estados globais)

---

## 🚀 Como rodar o projeto localmente

Siga os passos abaixo para testar o Front-end na sua máquina:

1. Clone este repositório:

```bash
git clone https://github.com/Yonamine-Fernando/syntax-wear-app
```

2.Acesse a pasta do projeto:

Bash
cd syntax-wear-app

3.Instale as dependências:

Bash
npm install

4.Inicie o servidor de desenvolvimento:

Bash
npm run dev

---

🌐 Deploy
O Front-end da aplicação está hospedado na Vercel e pode ser acessado através do link abaixo:

🔗 https://syntax-waer-app.vercel.app/

---

🗺️ Roadmap / Próximos Passos
Atualmente, o Front-end já está 100% estruturado, validado e com deploy ativo utilizando dados mockados e LocalStorage para simulação da experiência de compra.

A próxima fase deste projeto (em desenvolvimento) é a construção de uma API própria no Back-end (Node.js/Express e Banco de Dados) para substituir o armazenamento local, integrar autenticação real e gerenciar os pedidos e o estoque de forma dinâmica.
