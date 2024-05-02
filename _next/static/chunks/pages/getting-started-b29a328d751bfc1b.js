(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46651],{73375:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started",function(){return t(82440)}])},82440:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var s=t(52322),i=t(45392),o=t(13929),r=t(56456),a=t(79016),l=t(33638);let c=(0,a.A)(l.us.GettingStarted);function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{InstallScript:t,PackagesInstallation:a,TemplatesList:l}=n;return t||u("InstallScript",!0),a||u("PackagesInstallation",!0),l||u("TemplatesList",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsx)(n.h2,{id:"get-started-with-a-template",children:"Get started with a template"}),"\n",(0,s.jsxs)(n.p,{children:["The easiest way to get started is to use one of the templates.\nAll templates include required dependencies and pre-configured settings.\nSome templates also include additional features like ",(0,s.jsx)(n.a,{href:"https://jestjs.io/",children:"Jest"}),",\n",(0,s.jsx)(n.a,{href:"https://storybook.js.org/",children:"Storybook"}),", ",(0,s.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"}),", etc."]}),"\n",(0,s.jsxs)(n.p,{children:["All templates include only ",(0,s.jsx)(n.code,{children:"@mantine/core"})," and ",(0,s.jsx)(n.code,{children:"@mantine/hooks"})," packages,\nif you need additional ",(0,s.jsx)(n.code,{children:"@mantine/*"})," packages follow installation instructions\nof the package you want to use."]}),"\n",(0,s.jsxs)(n.p,{children:['To get started with a template, open it on GitHub and click on the "Use this template"\nbutton. Note that you need to be logged in to your GitHub account to use this feature.\nIf you are not familiar with GitHub, you can find a detailed instruction on how to\nbootstrap a project from a template ',(0,s.jsx)(n.a,{href:"/templates-usage",children:"on this page"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Templates list:"}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(n.h2,{id:"community-templates",children:"Community templates"}),"\n",(0,s.jsxs)(n.p,{children:["Community templates are created and maintained by the community. These templates\nusually include additional features and third-party integrations. You are welcome\nto share your template with the community by following ",(0,s.jsx)(n.a,{href:"/submit-template/",children:"this guide"}),"."]}),"\n",(0,s.jsx)(l,{community:!0}),"\n",(0,s.jsx)(n.h2,{id:"framework-guide",children:"Framework guide"}),"\n",(0,s.jsx)(n.p,{children:"Follow one of the guides below to get started with Mantine and your preferred framework.\nNote that usually it is better to start a new project with a template. Use guides if you want\nto add Mantine to an existing project or if enjoy doing things manually."}),"\n",(0,s.jsx)(o.b,{}),"\n",(0,s.jsx)(n.h2,{id:"get-started-without-framework",children:"Get started without framework"}),"\n",(0,s.jsx)(a,{}),"\n",(0,s.jsxs)(n.p,{children:["Install PostCSS plugins and ",(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),":"]}),"\n",(0,s.jsx)(t,{packages:"postcss postcss-preset-mantine postcss-simple-vars",dev:!0}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"PostCSS without framework"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that if you are using a framework that is not officially supported, you may need\nto set up PostCSS manually. Refer to the framework documentation to learn how to do that.\nFor example, if you are using Webpack, you will need to install and configure ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/loaders/postcss-loader/",children:"postcss-loader"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"postcss.config.cjs"})," file at the root of your application with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add styles imports to the root of your application. Usually styles are imported\nonce in the root file. For example, if you are using Next.js with pages router,\nyou can import styles in ",(0,s.jsx)(n.code,{children:"_app.tsx"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// core styles are required for all packages\nimport '@mantine/core/styles.css';\n\n// other css files are required only if\n// you are using components from the corresponding package\n// import '@mantine/dates/styles.css';\n// import '@mantine/dropzone/styles.css';\n// import '@mantine/code-highlight/styles.css';\n// ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Wrap your application with ",(0,s.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  /** Put your mantine theme override here */\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If your application has server side rendering, add ",(0,s.jsx)(n.a,{href:"/theming/color-schemes",children:"ColorSchemeScript"}),"\nto the ",(0,s.jsx)(n.code,{children:"<head />"})," of your application:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { ColorSchemeScript } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <html lang="en">\n      <head>\n        <meta charSet="UTF-8" />\n        <meta\n          name="viewport"\n          content="width=device-width, initial-scale=1.0"\n        />\n        <title>My awesome app</title>\n\n        <ColorSchemeScript />\n      </head>\n      <body>{/* Your app here */}</body>\n    </html>\n  );\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"All set! Now you can use Mantine components in your application."}),"\n",(0,s.jsx)(n.h2,{id:"set-up-vs-code",children:"Set up VS Code"}),"\n",(0,s.jsxs)(n.p,{children:["By default, VS Code does not recognize postcss syntax, you need to install\n",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss",children:"PostCSS Intellisense and Highlighting"}),"\nto enable syntax highlighting and suppress variables (",(0,s.jsx)(n.code,{children:"$variable"}),") errors."]}),"\n",(0,s.jsxs)(n.p,{children:["To get CSS variables autocomplete, install ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables",children:"CSS Variable Autocomplete extension"}),".\nThen create ",(0,s.jsx)(n.code,{children:".vscode/settings.json"})," file in the root folder of your project with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "cssVariables.lookupFiles": [\n    "**/*.css",\n    "**/*.scss",\n    "**/*.sass",\n    "**/*.less",\n    "node_modules/@mantine/core/styles.css"\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"learn",children:"Learn"}),"\n",(0,s.jsx)(n.p,{children:"Before you jump into the code, it is recommended to learn more about Mantine theming and styling options.\nThe most important documentation pages are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/overview",children:"API overview"})," – overview of the most important Mantine styling and theming features"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/theming/theme-object",children:"Theme object"})," – learn about available theme properties"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/theming/colors",children:"Colors"})," – learn how to add/replace colors in the theme object"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," – learn how to use CSS modules with Mantine"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," – learn about ",(0,s.jsx)(n.code,{children:"postcss-preset-mantine"})," functions and mixins"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/styles/responsive",children:"Responsive styles"})," – learn how to apply responsive styles to components"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," – learn how to style internal elements of any component"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/guides/polymorphic",children:"Polymorphic components"})," – learn how to use polymorphic components to change rendered element"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"get-help",children:"Get help"}),"\n",(0,s.jsx)(r.a,{twitter:!1}),"\n",(0,s.jsx)(n.h2,{id:"support-mantine",children:"Support Mantine"}),"\n",(0,s.jsx)(n.p,{children:"If you enjoy working with Mantine we would appreciate your contribution to the project.\nThere are multiple ways to support the project:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Share your feedback in ",(0,s.jsx)(n.a,{href:"https://github.com/mantinedev/mantine/discussions/categories/feedback",children:"GitHub Discussions"})," –\nwe are always happy to hear your thoughts on how to make Mantine better. Most of the new features and components\nare based on the feedback we receive from the community."]}),"\n",(0,s.jsxs)(n.li,{children:["Help others on ",(0,s.jsx)(n.a,{href:"https://discord.gg/wbH82zuWMN",children:"Discord"})," and/or ",(0,s.jsx)(n.a,{href:"https://github.com/mantinedev/mantine/discussions",children:"GitHub Discussions"}),". There are usually 10-20 new questions every day,\nyou can help people with their issues and questions. While helping others, you will learn yourself and become\nmore proficient with React and Mantine."]}),"\n",(0,s.jsxs)(n.li,{children:["Give us a code review. You are welcome to explore ",(0,s.jsx)(n.code,{children:"@mantine/*"})," packages ",(0,s.jsx)(n.a,{href:"https://github.com/mantinedev/mantine",children:"source code"}),"\nand provide your feedback on how we can improve it. We are always open to new ideas and suggestions."]}),"\n",(0,s.jsxs)(n.li,{children:["Send us some ",(0,s.jsx)(n.a,{href:"https://github.com/mantinedev/mantine/discussions/categories/kind-words",children:"kind words"}),". We usually receive only\nbug reports and feature requests, it is always nice to hear that people enjoy working with Mantine."]}),"\n",(0,s.jsxs)(n.li,{children:["Star the project on ",(0,s.jsx)(n.a,{href:"https://github.com/mantinedev/mantine",children:"GitHub"}),". It is a small thing that helps us grow and get more\npeople interested in the project."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/contribute",children:"Contribute"})," to the Mantine codebase. We welcome all kinds of contributions: if you do not have much\nexperience with React/TypeScript, you can help us improve the documentation to make it more clear and understandable\nfor new developers. If you are an experienced React developer, you can help us with open ",(0,s.jsx)(n.a,{href:"https://github.com/mantinedev/mantine/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22",children:"issues"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"If you are using Mantine at work and your company wants to support the project, you can allocate some time\nof your engineers to contribute to Mantine."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mantine-for-figma",children:"Mantine for Figma"}),"\n",(0,s.jsx)(n.p,{children:"Design files are not used during the development process of the library – there are no official\nFigma or Sketch files. However, there are community-driven projects that provide Figma components\nbased on Mantine. Note that these projects are not maintained by Mantine team, and we do not guarantee\nthat they are up-to-date with the latest Mantine version."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://www.figma.com/community/file/1293978471602433537",children:["Design files by ",(0,s.jsx)(n.strong,{children:"Ravn"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://www.figma.com/community/file/1067173247578645134",children:["Design files by ",(0,s.jsx)(n.strong,{children:"In The Zone"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://www.figma.com/community/file/1212329956432440320/Mantine-UI-Design-System---v5.10",children:["Design files by ",(0,s.jsx)(n.strong,{children:"Devias"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://www.figma.com/community/file/1294398524808646906/mantine-lean-ui-library-alley-corp-nord",children:["Design files by ",(0,s.jsx)(n.strong,{children:"AlleyCorp Nord"})]})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,s.jsxs)(n.p,{children:["All ",(0,s.jsx)(n.code,{children:"@mantine/*"})," packages are distributed under ",(0,s.jsx)(n.a,{href:"https://github.com/mantinedev/mantine/blob/master/LICENSE",children:"MIT"})," license.\nYou can use them in any project, commercial or not, with or without attribution. All ",(0,s.jsx)(n.code,{children:"@mantine/*"})," packages\ndependencies are also distributed under MIT license."]})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(c,{...e,children:(0,s.jsx)(d,{...e})})}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},13929:function(e,n,t){"use strict";t.d(n,{b:function(){return p}});var s=t(52322);let i=[{name:"Next.js",link:"/guides/next",type:"next"},{name:"Vite",link:"/guides/vite",type:"vite"},{name:"Remix",link:"/guides/remix",type:"remix"},{name:"RedwoodJS",link:"/guides/redwood",type:"redwood"},{name:"Gatsby",link:"/guides/gatsby",type:"gatsby"}];var o=t(39097),r=t.n(o),a=t(44296),l=t(61659),c=t.n(l);function d(e){let{data:n}=e,t=a.mZ[n.type];return(0,s.jsxs)(r(),{href:n.link,className:c().link,children:[(0,s.jsx)("div",{className:c().iconWrapper,children:(0,s.jsx)(t,{className:c().icon})}),(0,s.jsx)("div",{className:c().name,children:n.name})]})}var h=t(85019),u=t.n(h);function p(){let e=i.map(e=>(0,s.jsx)(d,{data:e},e.name));return(0,s.jsx)("div",{className:u().root,children:e})}},56456:function(e,n,t){"use strict";t.d(n,{a:function(){return x}});var s=t(52322),i=t(40489),o=t(51878),r=t(45353),a=t(13444),l=t(10962),c=t(19542),d=t.n(c);let h={discord:(0,s.jsx)(o.D,{size:30,className:d().icon}),twitter:(0,s.jsx)(r.Z,{size:30,className:d().icon}),github:(0,s.jsx)(a.E,{size:30,className:d().icon})};function u(e){let{icon:n,title:t,description:o,className:r,...a}=e;return(0,s.jsxs)("a",{className:(0,i.Z)(d().card,r),target:"_blank",rel:"noreferrer",...a,children:[h[n],(0,s.jsxs)("div",{className:d().body,children:[(0,s.jsx)("div",{className:d().title,children:t}),(0,s.jsx)("div",{className:d().description,children:o})]})]})}function p(){return(0,s.jsx)(u,{icon:"discord",className:d().discord,href:l.$.discordLink,title:"Join Discord community",description:"Ask questions, share feedback, get updates, learn about upcoming features and more"})}function m(){return(0,s.jsx)(u,{icon:"github",className:d().github,href:l.$.gitHubLinks.discussions,title:"Start a discussion",description:"Request new features, ask questions and provide feedback with GitHub discussions"})}function j(){return(0,s.jsx)(u,{icon:"twitter",className:d().twitter,href:l.$.twitterLink,title:"Follow on Twitter",description:"Get notified about new minor and major releases"})}function x(e){let{discord:n=!0,github:t=!0,twitter:i=!0}=e;return(0,s.jsxs)("div",{className:d().cards,children:[n&&(0,s.jsx)(p,{}),t&&(0,s.jsx)(m,{}),i&&(0,s.jsx)(j,{})]})}},61659:function(e){e.exports={link:"FrameworkLink_link__Emh1H",icon:"FrameworkLink_icon__zupZJ",iconWrapper:"FrameworkLink_iconWrapper__0LRfe",name:"FrameworkLink_name__ndKcH"}},85019:function(e){e.exports={root:"FrameworksGuides_root__pc73z"}},19542:function(e){e.exports={cards:"SocialCards_cards__4G6Xc",card:"SocialCards_card__NsQpB",discord:"SocialCards_discord__wSEoF",twitter:"SocialCards_twitter__qriae",github:"SocialCards_github__9B4CL",icon:"SocialCards_icon__24gwI",title:"SocialCards_title__zAhN_",description:"SocialCards_description__klWfo"}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=73375)}),_N_E=e.O()}]);