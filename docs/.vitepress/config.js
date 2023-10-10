import { defineConfig } from "vitepress";

// export default defineConfig({
//     title: 'xxx', // 博客的标题
//     description: 'xxxx', // 博客的介绍
//     base: '/blog/', // 如果想用 https://xxx.github.io/blog/ 访问，那么这句话必填
//     themeConfig: {
//         search: {
//             provider: 'local'
//         },
//         logo: "/logo.png", // 页面上显示的logo
//         nav: [ // 页面右上角的导航
//             { text: "vue", link: "https://cn.vuejs.org/" },
//             { text: "vitepress", link: "https://vitejs.cn/vitepress/" },
//             {text:'test',link:'/test'}
//         ],
//         sidebar: {
//             // '/articles/':[{
//             //     text:'index',
//             //     items:[
//             //         {text:'index',link:'/articles/'},
//             //         {text:'aaa',link:'/articles/b'}
//             //     ]
//             // }
//             // ]
//             '/guide/': [
//         {
//           text: 'Guide',
//           items: [
//             { text: 'Index', link: '/guide/' },
//             { text: 'One', link: '/guide/one' },
//             { text: 'Two', link: '/guide/two' }
//           ]
//         }
//       ],
//         }
//     },
// })

export default {
    lastUpdated: true,
    title: '博客', // 博客的标题
    description: '博客', // 博客的介绍
    base: '/blog/', // 如果想用 https://xxx.github.io/blog/ 访问，那么这句话必填
    lastUpdated: true,
    themeConfig: {
        nav: [ // 页面右上角的导航
            { text: "文章", link: "/articles/",activeMatch:'/articles/' },
            { text: "开始", link: "/start" },
        ],
        sidebar: { // 侧边栏，可以分组
            "/articles/": [
                { text: "vitepress搭建",link:'/articles/start-vitepress' },
                { text: "markDown语法",link:'/articles/markdown-syntax' },
            ]
        },
        // sidebar:[
        //     {text:'111',
        //     items:[
        //         {text:'111',link:''},
        //         {text:'111',link:''},
        //         {text:'111',link:''},
        //         {text:'111',link:''},
        //         {text:'111',link:''},
        //     ]}
        // ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Evan You'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/fhfin" }], // 可以连接到 github
    },
  }   