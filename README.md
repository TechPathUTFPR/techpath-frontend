# TechPath Frontend

Aplicação frontend do TechPath, construída com [Next.js](https://nextjs.org).

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Pré-requisitos

- Node.js 22+
- npm

## Como rodar localmente

1. Instalar as dependências:

```bash
npm install
```

2. Rodar em modo desenvolvimento:

```bash
npm run dev
```

3. Acessar [http://localhost:3000](http://localhost:3000).

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor a partir do build de produção |
| `npm run lint` | Executa o ESLint |

## Rodando com Docker

O [Dockerfile](Dockerfile) possui múltiplos estágios: `dev`, `build` e `production`.

```bash
# build da imagem de desenvolvimento
docker build --target dev -t techpath-frontend:dev .
docker run -p 3000:3000 techpath-frontend:dev

# build da imagem de produção
docker build --target production -t techpath-frontend:prod .
docker run -p 3000:3000 techpath-frontend:prod
```

## Rodando o projeto completo (frontend + backend + Postgres + Nginx)

Na raiz do repositório (`TechPath/`) existe um `docker-compose.yml` que orquestra todos os serviços do projeto.

```bash
cd ..
docker-compose up --build
```

Após subir os containers, a aplicação fica disponível via Nginx em [http://localhost](http://localhost) (porta configurável pela variável `NGINX_PORT` no `.env` da raiz).
