# SaaS Starter Kit

Um starter kit completo para aplicações SaaS construído com Next.js 15, TypeScript, Tailwind CSS e Convex.

## 🚀 Tecnologias Incluídas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes UI modernos
- **Convex** - Backend-as-a-Service com banco de dados em tempo real
- **Biome** - Linter e formatador de código
- **Husky** - Git hooks para qualidade de código
- **Commitlint** - Padronização de commits convencionais

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── (auth)/              # Route group para autenticação
│   │   ├── sign-in/         # Página de login
│   │   ├── sign-up/         # Página de registro
│   │   └── forgot-password/ # Página de recuperação de senha
│   ├── (public)/            # Route group para páginas públicas
│   │   ├── about/           # Página sobre
│   │   └── page.tsx         # Página inicial
│   ├── ConvexClientProvider.tsx
│   ├── layout.tsx
│   └── globals.css
├── lib/
│   └── utils.ts             # Utilitários (cn function)
convex/
├── _generated/              # Arquivos gerados pelo Convex
└── tasks.ts                 # Exemplo de query Convex
```

## 🛠️ Configuração e Instalação

### 1. Clone o repositório
```bash
git clone <repository-url>
cd tc96-saas-starter
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o Convex
```bash
# Inicie o Convex (requer conta)
npx convex dev
```

### 4. Configure as variáveis de ambiente
Atualize o arquivo `.env.local` com suas configurações do Convex:
```env
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
CONVEX_DEPLOYMENT=your-deployment-name
```

### 5. Execute o projeto
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run lint:fix` - Executa o linter e corrige problemas automaticamente
- `npm run format` - Formata o código

## 🔧 Ferramentas de Desenvolvimento

### Biome
Configurado para linting e formatação de código com regras otimizadas para React e TypeScript.

### Husky
Configura git hooks para:
- **pre-commit**: Executa linting e formatação antes de cada commit
- **commit-msg**: Valida mensagens de commit usando Commitlint

### Commitlint
Enforça o padrão de commits convencionais:
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação
- `refactor:` - Refatoração
- `test:` - Testes
- `chore:` - Tarefas de manutenção

## 🎨 Páginas Incluídas

### Páginas Públicas (`(public)`)
- **Home** (`/`) - Página inicial com demonstração das tecnologias
- **About** (`/about`) - Página sobre com informações da empresa

### Páginas de Autenticação (`(auth)`)
- **Sign In** (`/sign-in`) - Página de login
- **Sign Up** (`/sign-up`) - Página de registro
- **Forgot Password** (`/forgot-password`) - Página de recuperação de senha

## 🚀 Próximos Passos

1. **Configure o Convex adequadamente** executando `npx convex dev`
2. **Implemente a lógica de autenticação** nas páginas de auth
3. **Adicione mais componentes Shadcn/ui** conforme necessário
4. **Configure um provedor de autenticação** (Auth0, Clerk, etc.)
5. **Adicione testes** com Jest e Testing Library
6. **Configure CI/CD** para deploy automático

## 📄 Licença

Este projeto está sob a licença MIT.
