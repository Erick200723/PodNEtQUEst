# 🎬 Project App Flow

Um aplicativo estilo **Netflix**, mas focado em **podcasts em vídeo**, permitindo organizar e consumir episódios por categorias.

---

## 📌 Descrição
O **Project App Flow** centraliza diferentes episódios de podcasts em vídeo, permitindo navegar entre categorias, visualizar capas, acessar links diretos para os vídeos e buscar episódios por nome.

---

## 🌐 Domínio
- **Podcasts em vídeo** (ex.: entrevistas, bate-papos, programas temáticos).

---

## ✨ Funcionalidades
- 📂 Listar episódios organizados por **categorias**:
  - *Fitness, Saúde, Humor, Esportes, Ciência, Tecnologia, etc.*
- 🔍 Filtrar episódios pelo **nome do podcast**.
- 🖼️ Visualizar **capa, título e link direto** para o vídeo.
- 🎯 Buscar episódios por categoria ou parâmetro específico.

---

## ⚙️ Scripts disponíveis

No `package.json`, temos alguns scripts para rodar e compilar o projeto:

| Script         | Comando | Descrição |
|----------------|---------|-----------|
| `build`        | `tsup src/index.ts --format cjs,esm --dts` | Faz o build do projeto em CommonJS e ESM, gerando tipos. |
| `start:dev`    | `tsx --env-file=.env src/server.ts` | Inicia o servidor em **modo desenvolvimento**. |
| `start:watch`  | `tsx watch --env-file=.env src/server.ts` | Inicia o servidor em dev com **watcher**. |
| `dist`         | `tsup src` | Gera versão otimizada para produção. |
| `start:dist`   | `npm run dist && --env-file=.env node/server.js` | Roda a versão de produção. |

---

## 🚀 API Endpoints

### 🔹 `GET /episodes`
Retorna a lista completa de episódios.

**Response Exemplo:**
```json
[
  {
    "podcastName": "flow",
    "episode": "SEREMOS EXTINTOS PELA INTELIGÊNCIA ARTIFICIAL?",
    "videoId": "g-1ZLqvRvrg",
    "cover": "https://i.ytimg.com/vi/g-1ZLqvRvrg/maxresdefault.jpg",
    "link": "https://youtu.be/g-1ZLqvRvrg?si=YpDR-1DTsBAFO8ru",
    "category": ["ciência", "tecnologia"]
  }
]

# Clonar o repositório
git clone https://github.com/seu-usuario/project-app-flow.git

# Entrar na pasta do projeto
cd project-app-flow

# Instalar dependências
npm install
