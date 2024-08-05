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
            text: "开发规范",
            icon: "laptop-code",
            prefix: "指南/开发规范/",
            link: "指南/开发规范/README.md",
            children: "structure",
          },
      ],
});
