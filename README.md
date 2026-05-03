# Adarsh Children School - Next.js Starter

A modern Next.js starter template for the Adarsh Children School website, featuring TypeScript, Tailwind CSS, and a clean, professional design.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd adarsh-children-school
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm run start
   ```

## 🛠️ Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: React Context API (optional)
- **Forms**: React Hook Form + Zod (optional)

## 📂 Project Structure

```
adarsh-children-school/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── (marketing)/     # Marketing pages
│       └── ...
├── components/          # Reusable React components
│   ├── layout/          # Layout components
│   ├── common/          # Common UI components
│   └── marketing/       # Marketing-specific components
├── lib/                 # Utility functions and constants
├── styles/              # Global styles
└── public/              # Static assets
```

## 🎨 Theming

### Custom Colors

Add these colors to your `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
      },
      secondary: '#f59e0b',
      accent: '#10b981',
    },
  },
}
```

### Theme Configuration

See `app/layout.tsx` for theme provider configuration.

## 📱 Responsive Design

The site uses a mobile-first responsive design approach with Tailwind CSS:

- **Mobile**: 360px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## ♿ Accessibility

The template includes:
- Semantic HTML5 structure
- Keyboard navigation support
- Color contrast checks
- ARIA labels where needed

## 🚀 Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Lint code |
| `npm run format` | Format code |

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

For questions or issues, please open an issue on the repository.

---

Made with ❤️ for Adarsh Children School
