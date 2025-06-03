# 🧭 Technical Documentation Site

This project is a static documentation site built with **Next.js**, **Tailwind CSS**, and **Markdown**. It's designed to help new team members onboard quickly and understand our tools, technologies, and workflows.

## 🚀 Features

- Built with **Next.js App Router**
- Markdown (`.md`) support using `gray-matter` and `remark-html`
- Tailwind CSS with `@tailwindcss/typography` for beautiful Markdown styling
- Dynamic routing based on file slugs
- Custom sorting of topics using `weight` in frontmatter
- Designed for **developer onboarding** and technical alignment


## 🧰 Tools Used

- [Next.js](https://nextjs.org/) — frontend framework
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) — Markdown formatting
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — frontmatter parsing
- [remark](https://github.com/remarkjs/remark) — Markdown to HTML

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open your browser
http://localhost:3000
```
##✍️ Adding New Topics

To add a new documentation page:

1. Create a new file inside the `content/` directory (e.g. `docker.md`)
2. Add frontmatter to define the title and weight:

   ```md
   ---
   title: "Docker"
   weight: 4
   ---
3. The filename becomes the route: `/posts/docker`  
4. The homepage will list topics sorted by `weight`

## Contribution Guide

- Use clear, structured Markdown  
- Include both `title` and `weight` in the frontmatter  
- Keep filenames lowercase and hyphenated (e.g. `nextjs.md`)

## License

This project is open-source and licensed under the [MIT License](LICENSE).

##👋 For New Recruits

Start by reading the Technical Architecture page, then explore tools like Next.js, Vapor, Docker, Figma, and Postman to get familiar with our tech stack.
