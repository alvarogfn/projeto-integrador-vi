import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Documentation",
  description:
    "Enim ipsum culpa exercitation eiusmod minim esse ipsum veniam ipsum do aliquip officia. Aliqua reprehenderit mollit nostrud magna est nisi tempor aute qui. Mollit tempor elit duis dolor. Eu incididunt cupidatat exercitation aliqua non. Ipsum aute pariatur sint do ad voluptate excepteur. Aute consequat sit consequat magna laborum minim irure. Irure laborum pariatur dolore ex ex ut esse sunt ut culpa dolore non in.",
  lang: "pt-BR",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Api", link: "/api" },
        ],
      },
    ],
  },
});
