import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        {
          text: "快速上手",
          icon: "laptop-code",
          prefix: "指南/快速上手/",
          link: "指南/快速上手/README.md",
          children: "structure",
        },

        
        {
          text: "后端手册",
          icon: "laptop-code",
          prefix: "指南/后端手册/",
          link: "指南/后端手册/README.md",
          children: "structure",
        },

        {
          text: "前端手册",
          icon: "laptop-code",
          prefix: "指南/前端手册/",
          link: "指南/前端手册/README.md",
          children: "structure",
        },
      ],
});
