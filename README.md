# InfoFatec

Aplicativo mobile criado com Expo e expo-router que apresenta seções sobre cultura, educação, empregabilidade e segurança.

## Principais arquivos e componentes
- Tela inicial: [`HomeScreen`](app/(tabs)/index.tsx) — [app/(tabs)/index.tsx](app/(tabs)/index.tsx)  
- Área de exploração: [`ExploreScreen`](app/(tabs)/explore.tsx) — [app/(tabs)/explore.tsx](app/(tabs)/explore.tsx)  
- Layout das abas: [`RootLayout`](app/(tabs)/_layout.tsx) — [app/(tabs)/_layout.tsx](app/(tabs)/_layout.tsx)  
- Páginas principais:
  - [`CulturaScreen`](app/cultura.tsx) — [app/cultura.tsx](app/cultura.tsx)  
  - [`EducacaoScreen`](app/educacao.tsx) — [app/educacao.tsx](app/educacao.tsx)  
  - [`EmpregosScreen`](app/empregos.tsx) — [app/empregos.tsx](app/empregos.tsx)  
  - [`SegurancaScreen`](app/seguranca.tsx) — [app/seguranca.tsx](app/seguranca.tsx)  
- Entrypoint do router: [index.ts](index.ts)  
- Configuração TypeScript: [tsconfig.json](tsconfig.json)  
- Configuração do Expo: [app.json](app.json)  
- Package manifest: [package.json](package.json)  
- Git ignore: [.gitignore](.gitignore)

Outros arquivos/pastas no workspace:
- [.expo/devices.json](.expo/devices.json)  
- [.expo/README.md](.expo/README.md)  
- [.expo/web/cache/production/images/favicon/favicon-24272cdaeff82cc5facdaccd982a6f05b60c4504704bbf94c19a6388659880bb-contain-transparent/](.expo/web/cache/production/images/favicon/favicon-24272cdaeff82cc5facdaccd982a6f05b60c4504704bbf94c19a6388659880bb-contain-transparent/)  
- [app/_layout.tsx](app/_layout.tsx)  
- [app/assets](app/assets)

## Dependências principais
Veja [package.json](package.json) para a lista completa. Principais pacotes:
- expo
- expo-router
- react / react-native
- react-native-web (para web)

## Como rodar (desenvolvimento)
1. Instale dependências:
```sh
npm install