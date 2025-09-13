# Travel Videos Project

Modern React + Vite + TypeScript + Tailwind CSS + Shadcn UI + Radix UI + mock data

## Features
- Video grid display with modal preview
- Responsive design (mobile/desktop)
- Reusable UI components (Accordion, Dialog, Card, etc.)
- Mock data for development (`src/data/mockVideos.ts`)
- ESLint for code quality
- Tailwind CSS for styling
- Radix UI primitives

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
```bash
git clone <your-repo-url>
cd Travel-Videos
npm install
```

### Running the Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:8080` (or next available port).

### Building for Production
```bash
npm run build
```
Output will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

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
