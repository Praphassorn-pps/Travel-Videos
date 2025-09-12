# Travel Videos Project

This project is a modern React application built with Vite, TypeScript, Tailwind CSS, and Shadcn UI components. It is designed to showcase travel videos in a visually appealing and responsive layout.

## Features
- Video grid display with modal preview
- Responsive design for mobile and desktop
- Reusable UI components (Accordion, Dialog, Card, etc.)
- Mock data for development
- ESLint for code quality
- Tailwind CSS for styling

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Travel-Videos
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (default Vite port).

### Building for Production
```bash
npm run build
```
The output will be in the `dist/` folder.

### Linting
```bash
npm run lint
```

## Project Structure
```
Travel-Videos/
├── public/           # Static assets
├── src/              # Source code
│   ├── components/   # UI components
│   ├── data/         # Mock data
│   ├── hooks/        # Custom hooks
│   ├── lib/          # Utility functions
│   ├── pages/        # Page components
│   ├── types/        # TypeScript types
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── package.json      # Project metadata and scripts
├── tailwind.config.ts# Tailwind CSS config
├── vite.config.ts    # Vite config
└── README.md         # Project documentation
```

## How to Extend or Modify
- **Add new UI components:** Create files in `src/components/` or `src/components/ui/`.
- **Add new pages:** Create files in `src/pages/` and update routing in `main.tsx`.
- **Update video data:** Modify or extend `src/data/mockVideos.ts`.
- **Change styles:** Edit Tailwind config or CSS files in `src/`.
- **Add hooks/utilities:** Place in `src/hooks/` or `src/lib/`.

## Contribution Guidelines
- Follow the existing code style and structure.
- Write clear, descriptive commit messages.
- Test your changes before pushing.
- Use TypeScript for all new code.

## Troubleshooting
- If dependencies are missing, run `npm install`.
- For build or runtime errors, check the terminal output and fix issues in the code or configuration files.

## License
Specify your license here (e.g., MIT, Apache-2.0).

## Contact
For questions or support, contact the project owner or open an issue in the repository.
