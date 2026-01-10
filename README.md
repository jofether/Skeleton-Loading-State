# Skeleton Loading State - ViT Training Dataset

A React + Vite + Tailwind CSS project that renders a skeleton loading state UI with pulsing gray blocks.

## Project Overview

This project creates a UI that mimics a loading state with gray pulsing blocks containing no text. The goal is to train Vision Transformer (ViT) models to recognize this as a valid UI state (Loading) rather than flagging it as "Missing Content" or "Rendering Error."

## Features

- **Skeleton Header**: Avatar placeholder with title and subtitle lines
- **Skeleton Card Grid**: 6 responsive cards with image placeholders and text line skeletons
- **Pulse Animation**: Smooth pulsing effect on all skeleton elements using Tailwind's `animate-pulse`
- **Responsive Design**: Mobile-first approach with Tailwind CSS grid system

## Project Structure

```
.
├── src/
│   ├── App.jsx          # Main React component with skeleton loading UI
│   ├── main.jsx         # React DOM entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md           # This file
```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Development

The development server will start at `http://localhost:5173` by default. The app will automatically reload when you make changes to the source files.

## ViT Training Considerations

- **Purpose**: This UI pattern is designed as training data for Vision Transformer models
- **Goal**: Train models to accept "Empty Blocks" as a valid UI state (Loading)
- **Use Case**: Prevents models from flagging loading states as missing content or rendering errors

## Future Enhancements

- Future bug note: Removing `bg-gray-300` from the image placeholder would make it invisible

## Built With

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
