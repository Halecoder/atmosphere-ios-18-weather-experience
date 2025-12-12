# Atmosphere - iOS 18 Weather Experience

[cloudflarebutton]

A visually breathtaking weather dashboard inspired by the design language of Apple's iOS 18. This application features a horizontal layout of four distinct weather cards (Sunny, Windy, Heavy Rain, Snowstorm), each serving as a dynamic window into atmospheric conditions. Built with a focus on glassmorphism, fluid animations, and responsive design, it delivers a premium, interactive experience reminiscent of iOS weather interfaces.

## Features

- **iOS 18-Inspired Design**: Glassmorphism 2.0 with backdrop blurs, deep gradients, and SF Pro/Inter typography for an authentic Apple aesthetic.
- **Dynamic Weather Cards**:
  - **Sunny**: Rotating sun with lens flares and warm golden-hour gradients.
  - **Windy**: Animated SVG streamlines simulating air currents on a teal-grey background.
  - **Heavy Rain**: Dark indigo gradients with falling raindrops and lightning flashes.
  - **Snowstorm**: Serene blue-white gradients with drifting snowflakes influenced by wind.
- **Interactive Elements**: Cards feature hover lifts, 3D mouse-tracking tilts, click pulses, and breathing animations using Framer Motion.
- **Responsive Layout**: Horizontal showcase on desktop; vertical stack on mobile devices for optimal viewing across screens.
- **Performance-Optimized**: 60fps animations, static mock data for instant loading, and careful particle management to ensure smooth performance.
- **Accessibility**: Adheres to Apple's Human Interface Guidelines with high contrast, keyboard navigation, and screen reader support.

## Technology Stack

- **Frontend**: React 18 with TypeScript for robust, type-safe development.
- **Styling**: Tailwind CSS for utility-first, responsive design; shadcn/ui components for accessible UI primitives.
- **Animations & Interactions**: Framer Motion for smooth transitions and micro-interactions; Lucide React for icons.
- **State Management**: Local React state with hooks; no external libraries for simplicity.
- **Routing**: React Router DOM for seamless navigation.
- **Build Tools**: Vite for fast development and bundling; Bun for package management.
- **Deployment**: Cloudflare Workers for edge deployment and global performance.
- **Utilities**: clsx and tailwind-merge for class name handling; Zod for validation (if extended).

## Installation

This project uses Bun as the package manager for faster performance. Ensure you have Bun installed (version 1.0+).

1. Clone the repository:
   ```
   git clone <repository-url>
   cd atmosphere-ios18
   ```

2. Install dependencies:
   ```
   bun install
   ```

3. Start the development server:
   ```
   bun run dev
   ```

   The app will be available at `http://localhost:3000` (or the port specified in your environment).

## Usage

The application is a single-page dashboard view. Upon loading:

- Browse the four weather cards in a horizontal layout (desktop) or vertical stack (mobile).
- Hover over cards for lift and acceleration effects on weather animations.
- Click cards for haptic-like visual feedback.
- No user authentication or external data is required; all weather effects use static mock data for demonstration.

For custom extensions:
- Modify weather data or animations in `src/pages/HomePage.tsx`.
- Add new routes in `src/main.tsx` using React Router.
- Extend components in `src/components/` for additional features.

Example interaction (in code):
```tsx
// Hover effect on a weather card
<motion.div
  whileHover={{ scale: 1.05, rotateX: 5 }}
  whileTap={{ scale: 0.98 }}
  className="glass cursor-pointer"
>
  {/* Card content */}
</motion.div>
```

## Development

- **Linting**: Run `bun run lint` to check code quality with ESLint.
- **Type Checking**: TypeScript is configured for strict mode; errors will surface during development.
- **Hot Reloading**: Vite provides instant updates during `bun run dev`.
- **Testing Changes**: Preview builds with `bun run preview`.
- **Environment Variables**: Use `.env` files for local configuration (e.g., API keys if integrating external services).
- **Custom Styling**: Extend Tailwind in `tailwind.config.js` or add CSS in `src/index.css`.

Contribute by forking the repo, creating a feature branch, and submitting a pull request. Ensure code adheres to the project's visual excellence standards.

## Deployment

Deploy to Cloudflare Workers for global edge delivery. This setup handles static assets and API routes seamlessly.

1. Ensure you have a Cloudflare account and Wrangler CLI installed:
   ```
   bun add -g wrangler
   wrangler login
   ```

2. Configure your project:
   - Update `wrangler.jsonc` with your Cloudflare account details if needed.
   - Run `bun run cf-typegen` to generate types.

3. Build and deploy:
   ```
   bun run build
   wrangler deploy
   ```

   Your app will be live at a URL like `https://your-project.workers.dev`.

[cloudflarebutton]

For production monitoring, enable Cloudflare's observability in `wrangler.jsonc`.

## License

This project is open source and available under the MIT License. See the LICENSE file for details (or create one if extending).