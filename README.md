# 🛍️ Página de Produto - Desafio Técnico Montink

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Frontend na Montink. A aplicação simula uma página de produto de e-commerce, construída com foco em arquitetura escalável, experiência do usuário e manutenção inteligente de estado.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **ViaCEP API**

---

## 🧠 Estratégia Técnica

### 🔄 Roteamento Dinâmico e Compartilhável

Ao invés de utilizar `localStorage` ou cookies para persistência temporária de dados, optei por uma abordagem diferente baseada em rotas dinâmicas e parâmetros de URL.

- Cada produto é carregado dinamicamente via a rota no padrão `/[categoria]/[slug]`
- As escolhas do usuário, como cor e tamanho, são refletidas diretamente na URL por meio de query params:
  - Exemplo: `/camisetas/camisa-polo?cor=Branco&tamanho=P`
- Essa abordagem permite:
  - **Persistência funcional**: as seleções do usuário são preservadas mesmo após o refresh da página, sem necessidade de armazenamento local
  - **Compartilhamento eficiente**: o link gerado contém o estado atual da visualização, facilitando o envio para outras pessoas com as variantes já pré-selecionadas

### 🧱 Arquitetura Escalável

- Componentes foram criados com foco em reutilização e encapsulamento
- Lógicas de negócio e renderização estão separadas, permitindo testes e refatorações independentes
- O projeto segue padrões de **atomic design** na composição visual

### 🧼 Clean Code e Manutenibilidade

O projeto foi estruturado com foco real em legibilidade e manutenção — pensando não só no agora, mas em quem vai colocar a mão no código depois, seja em ajustes pontuais ou escaladas futuras.

---

### 🧩 Flexibilidade e Visão de Escalabilidade

Mais do que apenas atender os requisitos do desafio técnico, o projeto já foi desenhado com visão de produto e continuidade.

A estrutura atual permite a inclusão fácil de novas variantes de produto sem reescrita de lógica — bastando adicionar chaves no objeto original de produto.

---

## 🖥️ Execução Local

```bash
# Clone o repositório
git clone https://github.com/henriquegarcia-web/quick-product-page.git

# Acesse a pasta
cd quick-product-page

# Instale as dependências
npm install | yarn install

# Inicie o servidor local
npm run dev | yarn dev
```

## 🌐 Deploy

O projeto está publicado e pode ser acessado publicamente através dos links abaixo:

- 🔗 **Projeto na Vercel:** [Clique aqui (Ctrl + Click)](https://desafio-montink.vercel.app)
- 📁 **Repositório no GitHub:** [Clique aqui (Ctrl + Click)](https://github.com/henriquegarcia-web/quick-product-page)

---

## 🙋‍♂️ Desenvolvedor

**Henrique Garcia**  
Desenvolvedor Full-Stack com foco em Front-End, especialista em React, Next.js e sistemas escaláveis.

- 📧 henriquegarcia.tech@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/henrique-garcia-dev/)
