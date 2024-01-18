<h2 id="project">💻 Projeto</h2>

O projeto consiste num gerador de descrições e títulos para vídeos do YouTube a partir da transcrição do conteúdo.

<!-- ![upload.ai](./public/upload-ai.png) -->

<h2 id="technologies">💻 Tecnologias Front-end</h2>

Este projeto foi desenvolvido utilizando tecnologias como:

- React
- TypeScript
- ESLint
- Tailwind CSS
- Axios
- Vite
- FFmpeg
- Radix UI
- PostCSS

<h2 id="usage">💡 Utilização do Front-end</h2>

Para executar a aplicação em sua máquina localmente, certifique-se de ter o `Node.js` e o `pnpm` instalados antes de prosseguir com as etapas abaixo:

1. Clone o projeto:

```
$ git clone https://github.com/erildojs/up.ai.git
```

2. Acesse a pasta do projeto:

```
$ cd up.ai/web
```

3. Instale as dependências:

```
$ npm install
```

4. Inicie o servidor:

```
$ npm run dev
```

<h2 id="technologies">💻 Tecnologias Back-end</h2>

Este projeto foi desenvolvido utilizando tecnologias como:

- NodeJS
- TypeScript
- Fastify
- Prisma
- DotEnv
- OpenAI
- Zod

<h2 id="usage">💡 Utilização do Back-end</h2>

Para executar a aplicação em sua máquina localmente, certifique-se de ter o `Node.js` e o `pnpm` instalados antes de prosseguir com as etapas abaixo:

1. Clone o projeto:

```
$ git clone https://github.com/erildojs/up.ai.git
```

2. Acesse a pasta do projeto:

```
$ cd up.ai/server
```

3. Instale as dependências:

```
$ npm install
```

4. Execute as migrações:

```
$ npx prisma migrate dev
```

5. Inicie o servidor:

```
$ npm run dev
```

⚠️ **Importante**: Crie um arquivo .env dentro da pasta server de acordo com o arquivo .env.example. No campo DATABASE_URL, especifique a URL do banco de dados que deseja utilizar. Crie uma conta no site [OpenAI](https://openai.com/), obtenha sua chave da API e preencha o campo OPENAI_KEY com sua chave.

<h2 id="license">📝 Licença</h2>

Este projeto está sob a licença MIT.

---

Feito com 💜 by ErildoJS 👋🏾

