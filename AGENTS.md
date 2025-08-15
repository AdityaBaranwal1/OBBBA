# AGENTS.md

Welcome to the OBBBA Website Project!

This file is for AI agents (and developers) to understand how to navigate, run, and contribute to this codebase. It includes commands, conventions, and resources to ensure smooth operation and best practices.

---

## Project Structure

- `obbba-website/` — Main Next.js app
  - `src/components/` — All React components (UI, calculator, timeline, etc.)
  - `src/app/` — App entry, global styles, layout, and pages
  - `src/styles/` — Additional CSS (theme, pills, etc.)
  - `public/` — Static assets (SVGs, icons, etc.)
  - `BACKUP/` — Legacy/backup components for reference
- `package.json` — Project scripts and dependencies
- `globals.css` — Global theme and utility classes
- `ThemeToggle.tsx` — Dark/light mode toggle logic
- `AGENTS.md` — This file

---

## Key Commands

### 1. Install dependencies
```sh
cd obbba-website
npm install
```

### 2. Start the development server (localhost)
```sh
npm run dev
```
- Access at: http://localhost:3000

### 3. Build for production
```sh
npm run build
npm start
```

### 4. Lint and check formatting
```sh
npm run lint
```

---

## Testing & Best Practices
- **Manual testing:** Use `npm run dev` and interact with the UI in your browser.
- **Linting:** Always run `npm run lint` before pushing changes.
- **Component isolation:** All major UI pieces are in `src/components/` and should be reusable.
- **Theme:** Use CSS variables from `globals.css` for all colors, backgrounds, and text for dark/light compatibility.
- **Glassmorphism:** Use the `.glass` class for Apple-like frosted surfaces.
- **Accessibility:** Ensure all text has sufficient contrast in both dark and light mode.
- **Responsive:** Layouts use CSS grid/flex and should work on all screen sizes.

---

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS (if used)](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

---

## Contributing
- Branch from `main` for new features or fixes.
- Use clear, descriptive commit messages.
- Keep UI changes consistent with the Apple-inspired, glassmorphic, high-contrast design language.
- Test in both dark and light mode before submitting PRs.

---

## Contact
For questions, open an issue or contact the repository owner. dddddddddd