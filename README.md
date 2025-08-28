# SaaS Starter Kit

A complete starter kit for SaaS applications built with Next.js 15, TypeScript, Tailwind CSS, and Convex.

## 🚀 Technologies Included

- **Next.js 15** - React framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI components
- **Convex** - Backend-as-a-Service with real-time database
- **Biome** - Code linter and formatter
- **Husky** - Git hooks for code quality
- **Commitlint** - Conventional commit standardization

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/              # Route group for authentication
│   │   ├── sign-in/         # Login page
│   │   ├── sign-up/         # Registration page
│   │   └── forgot-password/ # Password recovery page
│   ├── (public)/            # Route group for public pages
│   │   ├── about/           # About page
│   │   └── page.tsx         # Home page
│   ├── ConvexClientProvider.tsx
│   ├── layout.tsx
│   └── globals.css
├── lib/
│   └── utils.ts             # Utilities (cn function)
convex/
├── _generated/              # Convex generated files
└── tasks.ts                 # Convex query example
```

## 🛠️ Setup and Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd tc96-saas-starter
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Convex
```bash
# Initialize Convex (requires account)
npx convex dev
```

### 4. Configure environment variables
Update the `.env.local` file with your Convex settings:
```env
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
CONVEX_DEPLOYMENT=your-deployment-name
```

### 5. Run the project
```bash
npm run dev
```

The project will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Generate production build
- `npm run start` - Start production server
- `npm run lint` - Run linter
- `npm run lint:fix` - Run linter and fix issues automatically
- `npm run format` - Format code

## 🔧 Development Tools

### Biome
Configured for code linting and formatting with optimized rules for React and TypeScript.

### Husky
Sets up git hooks for:
- **pre-commit**: Runs linting and formatting before each commit
- **commit-msg**: Validates commit messages using Commitlint

### Commitlint
Enforces conventional commit standards:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Refactoring
- `test:` - Tests
- `chore:` - Maintenance tasks

## 🎨 Included Pages

### Public Pages (`(public)`)
- **Home** (`/`) - Home page with technology demonstration
- **About** (`/about`) - About page with company information

### Authentication Pages (`(auth)`)
- **Sign In** (`/sign-in`) - Login page
- **Sign Up** (`/sign-up`) - Registration page
- **Forgot Password** (`/forgot-password`) - Password recovery page

## 🚀 Next Steps

1. **Configure Convex properly** by running `npx convex dev`
2. **Implement authentication logic** in auth pages
3. **Add more Shadcn/ui components** as needed
4. **Configure an authentication provider** (Auth0, Clerk, etc.)
5. **Add tests** with Jest and Testing Library
6. **Set up CI/CD** for automatic deployment

## 📄 License

This project is under the MIT license.
