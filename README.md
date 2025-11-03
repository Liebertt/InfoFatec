# InfoFatec
**InfoFatec** é um aplicativo mobile multiplataforma desenvolvido com **Expo** e **Expo RO projeto busca oferecer uma experiência moderna e informativa, refletindo o ambiente aca---
## ■ Tecnologias Utilizadas
- **Expo** — Framework para desenvolvimento mobile multiplataforma.
- **Expo Router** — Roteamento baseado em estrutura de pastas.
- **React / React Native** — Interface declarativa e responsiva.
- **React Native Web** — Suporte para execução via navegador.
- **TypeScript** — Tipagem estática para maior segurança e manutenção do código.
---
## ■ Estrutura do Projeto
### ■ Telas principais
| Tela | Descrição | Caminho |
|------|------------|---------|
| **HomeScreen** | Tela inicial com acesso às seções principais | `app/(tabs)/index.tsx` | **ExploreScreen** | Área de exploração adicional | `app/(tabs)/explore.tsx` |
| **CulturaScreen** | Conteúdo cultural e artístico | `app/cultura.tsx` |
| **EducacaoScreen** | Seção sobre ensino e inovação acadêmica | `app/educacao.tsx` |
| **EmpregosScreen** | Oportunidades e desenvolvimento profissional | `app/empregos.tsx` | **SegurancaScreen** | Informações sobre bem-estar e segurança institucional | `app/segu### ■■ Arquivos de configuração
| Arquivo | Função |
|----------|--------|
| `index.ts` | Ponto de entrada do Expo Router |
| `app/_layout.tsx` | Layout raiz com pilha de navegação |
| `app/(tabs)/_layout.tsx` | Estrutura das abas inferiores |
| `tsconfig.json` | Configuração do TypeScript |
| `app.json` | Configurações do Expo |
| `package.json` | Manifesto de dependências |
| `.gitignore` | Arquivos ignorados pelo Git |
---
## ■ Dependências principais
Veja a lista completa em `package.json`.
Principais pacotes:
- `expo`
- `expo-router`
- `react`
- `react-native`
- `react-native-web`
- `typescript`
---
## ■ Como executar o projeto (modo desenvolvimento)
1. **Instalar dependências**
 ```bash
 npm install
 ```
2. **Executar no ambiente desejado**
 ```bash
 # Mobile
 npx expo start
 # Android
 npm run android
 # Web
 npm run web
 ```
3. O aplicativo será carregado automaticamente no **Expo Go** (mobile) ou em **http://localhost:8081**
   
## ■ Recursos e Navegação
- Navegação declarativa via **Expo Router** (`Link` e estrutura de pastas).
- Layout responsivo compatível com **mobile** e **web**.
- Design institucional inspirado em **portais universitários modernos**.
- Código modular e de fácil expansão.
---
## ■ Autor e Propósito
Projeto criado por **Lieberte Ferreira**, estudante de **Desenvolvimento de Sistemas Mult---
## ■ Prévia
> Em breve: imagens demonstrando as telas de Cultura, Educação, Empregos e Segurança.
---
**InfoFatec** — Tecnologia, conhecimento e inovação a serviço da educação.
