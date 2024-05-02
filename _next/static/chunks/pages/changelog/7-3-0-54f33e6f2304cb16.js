(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12622],{39767:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-3-0",function(){return o(28919)}])},28919:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return g}});var r=o(52322),a=o(45392),i=o(65438),t=o(56159),s=o(41427);let l=`
import { Radio, Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack gap={7}>
      <Checkbox variant="outline" label="Outline Checkbox" defaultChecked />
      <Checkbox variant="outline" label="Outline indeterminate Checkbox" indeterminate />
      <Radio variant="outline" label="Outline Radio" defaultChecked />
    </Stack>
  );
}
`,c={type:"code",component:function(){return(0,r.jsxs)(i.K,{gap:7,children:[(0,r.jsx)(t.X,{variant:"outline",label:"Outline Checkbox",defaultChecked:!0}),(0,r.jsx)(t.X,{variant:"outline",label:"Outline indeterminate Checkbox",indeterminate:!0}),(0,r.jsx)(s.Y,{variant:"outline",label:"Outline Radio",defaultChecked:!0})]})},code:l,centered:!0};var d=o(51565),h=o(93243),m=o(57914),p=o(77612),u=o(79016),x=o(33638);let j=(0,u.A)(x.us.Changelog730);function f(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:o,InstallScript:i}=n;return o||v("Demo",!0),i||v("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"smaller-than-and-larger-than-mixins",children:"smaller-than and larger-than mixins"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"smaller-than"})," and ",(0,r.jsx)(n.code,{children:"larger-than"})," mixins can be used to create styles that will be applied only when the screen is smaller or larger than specified breakpoint.\nNote that to use these mixins, you need to update ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," to version ",(0,r.jsx)(n.code,{children:"1.11.0"})," or higher."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  @mixin smaller-than 320px {\n    color: red;\n  }\n\n  @mixin larger-than 320px {\n    color: blue;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:"// Breakpoint values are converted to em units\n// In smaller-than mixin 0.1px is subtracted from breakpoint value\n// to avoid intersection with larger-than mixin\n@media (max-width: 19.99375em) {\n  .demo {\n    color: red;\n  }\n}\n\n@media (min-width: 20em) {\n  .demo {\n    color: blue;\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also use ",(0,r.jsx)(n.code,{children:"smaller-than"})," and ",(0,r.jsx)(n.code,{children:"larger-than"})," mixins with ",(0,r.jsx)(n.a,{href:"/styles/responsive/#breakpoints-variables-in-css-modules",children:"mantine breakpoints"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  @mixin smaller-than $mantine-breakpoint-sm {\n    color: red;\n  }\n\n  @mixin larger-than $mantine-breakpoint-sm {\n    color: blue;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"form-schema-resolvers-packages",children:"Form schema resolvers packages"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/form"})," schema validation resolver packages are now available as ",(0,r.jsx)(n.a,{href:"/form/schema-validation",children:"separate packages"}),".\nMoving resolvers to separate packages allows making them type-safe and fully tested.\nOld resolvers are still exported from ",(0,r.jsx)(n.code,{children:"@mantine/form"})," package – you will be able to use them without any changes\nuntil 8.0.0 release."]}),"\n",(0,r.jsx)(n.p,{children:"The new packages are drop-in replacements for old resolvers, they have the same API and can be used in the same way."}),"\n",(0,r.jsx)(n.p,{children:"Example of zod resolver:"}),"\n",(0,r.jsx)(i,{packages:"zod mantine-form-zod-resolver"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { zodResolver } from 'mantine-form-zod-resolver';\nimport { z } from 'zod';\nimport { useForm } from '@mantine/form';\n\nconst schema = z.object({\n  name: z\n    .string()\n    .min(2, { message: 'Name should have at least 2 letters' }),\n  email: z.string().email({ message: 'Invalid email' }),\n  age: z.number().min(18, {\n    message: 'You must be at least 18 to create an account',\n  }),\n});\n\nconst form = useForm({\n  initialValues: {\n    name: '',\n    email: '',\n    age: 16,\n  },\n  validate: zodResolver(schema),\n});\n\nform.validate();\nform.errors;\n// -> {\n//  name: 'Name should have at least 2 letters',\n//  email: 'Invalid email',\n//  age: 'You must be at least 18 to create an account'\n// }\n"})}),"\n",(0,r.jsx)(n.h2,{id:"remem-functions-improvements",children:"rem/em functions improvements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/styles/rem",children:"rem and em"})," function now support space-separated values. This feature is available\nboth in ",(0,r.jsx)(n.code,{children:"rem"})," function exported from ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package and ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),".\nNote that you need to update ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," to ",(0,r.jsx)(n.code,{children:"1.11.0"})," to use this feature."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { rem } from '@mantine/core';\n\nrem('16px 32px');\n// -> calc(1rem * var(--mantine-scale)) calc(2rem * var(--mantine-scale))\n"})}),"\n",(0,r.jsxs)(n.p,{children:["All components props that are converted to ",(0,r.jsx)(n.code,{children:"rem"})," units now support space-separated values as well.\nFor example, space-separated values can be used in ",(0,r.jsx)(n.code,{children:"radius"})," prop of ",(0,r.jsx)(n.a,{href:"/core/modal",children:"Modal"})," component:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal radius=\"10px 10px 0 0\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"component-and-renderroot-props-for-non-polymorphic-components",children:"component and renderRoot props for non-polymorphic components"}),"\n",(0,r.jsxs)(n.p,{children:["All Mantine components now support ",(0,r.jsx)(n.code,{children:"component"})," and ",(0,r.jsx)(n.code,{children:"renderRoot"})," props event if they are not ",(0,r.jsx)(n.a,{href:"/guides/polymorphic",children:"polymorphic"}),".\nThe difference between polymorphic and non-polymorphic components is that polymorphic components\ninclude the full set of props of the component passed to the ",(0,r.jsx)(n.code,{children:"component"})," prop, while non-polymorphic\ncomponents only include props that are specific to the original component. It is done this way to\nimprove TypeScript performance."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Group } from '@mantine/core';\n\n// Group is not polymorphic component,\n// but it still supports component and renderRoot props\nfunction Demo() {\n  return (\n    <Group component=\"nav\">\n      <a>Item 1</a>\n      <a>Item 2</a>\n      <a>Item 3</a>\n    </Group>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"outline-checkbox-and-radio-variant",children:"Outline Checkbox and Radio variant"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/checkbox",children:"Checkbox"})," and ",(0,r.jsx)(n.a,{href:"/core/radio",children:"Radio"})," components now support ",(0,r.jsx)(n.code,{children:"outline"})," variant:"]}),"\n",(0,r.jsx)(o,{data:c}),"\n",(0,r.jsx)(n.h2,{id:"hueslider-and-alphaslider-components",children:"HueSlider and AlphaSlider components"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/color-picker",children:"HueSlider and AlphaSlider"})," components were added back:"]}),"\n",(0,r.jsx)(o,{data:d.u}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(o,{data:h.r}),"\n",(0,r.jsx)(n.h2,{id:"button-loading-state-animation",children:"Button loading state animation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," component now has loading state animation:"]}),"\n",(0,r.jsx)(o,{data:m.V}),"\n",(0,r.jsx)(n.h2,{id:"drawer-offset",children:"Drawer offset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/drawer",children:"Drawer"})," now supports ",(0,r.jsx)(n.code,{children:"offset"})," prop. It changes drawer offset from the edge of the viewport:"]}),"\n",(0,r.jsx)(o,{data:p.c}),"\n",(0,r.jsx)(n.h2,{id:"z-index-css-variables",children:"z-index CSS variables"}),"\n",(0,r.jsx)(n.p,{children:"You can now use Mantine z-index CSS variables:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--mantine-z-index-app"})," – value ",(0,r.jsx)(n.code,{children:"100"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--mantine-z-index-modal"})," – value ",(0,r.jsx)(n.code,{children:"200"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--mantine-z-index-popover"})," – value ",(0,r.jsx)(n.code,{children:"300"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--mantine-z-index-overlay"})," – value ",(0,r.jsx)(n.code,{children:"400"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--mantine-z-index-max"})," – value ",(0,r.jsx)(n.code,{children:"9999"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Example of using ",(0,r.jsx)(n.code,{children:"--mantine-z-index-modal"})," variable:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"/* Display content above the modal */\n.my-content {\n  z-index: calc(var(--mantine-z-index-modal) + 1);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"improved-dark-color-scheme-colors",children:"Improved dark color scheme colors"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"theme.colors.dark"})," colors were slightly changed to improve contrast and make it easier to read text.\nYou can preview new colors on ",(0,r.jsx)(n.a,{href:"/theming/colors/#default-colors",children:"this page"}),". New colors values are:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:"--mantine-color-dark-0: #c9c9c9;\n--mantine-color-dark-1: #b8b8b8;\n--mantine-color-dark-2: #828282;\n--mantine-color-dark-3: #696969;\n--mantine-color-dark-4: #424242;\n--mantine-color-dark-5: #3b3b3b;\n--mantine-color-dark-6: #2e2e2e;\n--mantine-color-dark-7: #242424;\n--mantine-color-dark-8: #1f1f1f;\n--mantine-color-dark-9: #141414;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you prefer old colors, change theme settings on ",(0,r.jsx)(n.code,{children:"MantineProvider"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    dark: [\n      '#C1C2C5',\n      '#A6A7AB',\n      '#909296',\n      '#5c5f66',\n      '#373A40',\n      '#2C2E33',\n      '#25262b',\n      '#1A1B1E',\n      '#141517',\n      '#101113',\n    ],\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Schema-based validation with ",(0,r.jsx)(n.code,{children:"@mantine/form"})," now has a ",(0,r.jsx)(n.a,{href:"/form/schema-validation",children:"dedicated page"}),". It includes more examples for basic, nested and list fields validation for each resolver."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,r.jsx)(n.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,r.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," now include new demos that show how to customize dropdown behavior and styles."]}),"\n",(0,r.jsxs)(n.li,{children:["Example of using Mantine with disabled JavaScript was added to the ",(0,r.jsx)(n.a,{href:"/theming/color-schemes/#with-disabled-javascript",children:"color schemes guide"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/pagination",children:"Pagination"})," now includes an additional example with chunked content handling."]}),"\n",(0,r.jsxs)(n.li,{children:["A new section about dayjs localization with Next.js app router and server components has been added to the ",(0,r.jsx)(n.a,{href:"/dates/getting-started/#localization-and-server-components",children:"dates getting started page"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/x/modals/#modal-props",children:"Modals manager"})," now includes a guide on how to pass props down to the underlying ",(0,r.jsx)(n.a,{href:"/core/modal",children:"Modal"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/slider",children:"Slider"})," now has sections about decimal values and ",(0,r.jsx)(n.code,{children:"minRange"})," prop."]}),"\n",(0,r.jsxs)(n.li,{children:["You can now view all 200+ releases with release dates on the ",(0,r.jsx)(n.a,{href:"/changelog/all-releases/",children:"all releases page"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/hooks/use-hash/",children:"use-hash"})," hook now supports ",(0,r.jsx)(n.code,{children:"getInitialValueInEffect: false"})," option to get initial value during state initialization."]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"useMantineColorScheme({ keepTransitions: true })"})," option allows keeping transitions when color scheme changes. Note that it is ",(0,r.jsx)(n.code,{children:"false"})," by default."]}),"\n",(0,r.jsxs)(n.li,{children:["All templates were migrated to ",(0,r.jsx)(n.a,{href:"https://yarnpkg.com/blog/release/4.0",children:"yarn v4"})," – this change significantly improves installation speed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/typography-styles-provider",children:"TypographyStylesProvider"})," now has styles for ",(0,r.jsx)(n.code,{children:"<kbd />"})," element."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,r.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," components now support ",(0,r.jsx)(n.code,{children:"hiddenValuesDivider"})," prop. It allows customizing divider character between values in ",(0,r.jsx)(n.code,{children:"value"})," prop of the hidden input."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/grid",children:"Grid"})," component now supports ",(0,r.jsx)(n.code,{children:"overflow"})," prop, which allows controlling ",(0,r.jsx)(n.code,{children:"overflow"})," CSS property on the root element. It is ",(0,r.jsx)(n.code,{children:"hidden"})," by default."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/modal",children:"Modal"})," and ",(0,r.jsx)(n.a,{href:"/core/drawer",children:"Drawer"})," components now support ",(0,r.jsx)(n.code,{children:"removeScrollProps"})," prop. It allows configuring ",(0,r.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/app-shell",children:"AppShell"})," now supports ",(0,r.jsx)(n.code,{children:"offsetScrollbars"})," prop. It determines whether scrollbars should be offset, it is ",(0,r.jsx)(n.code,{children:"true"})," by default. The logic of scrollbars offset is controlled by ",(0,r.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/menu",children:"Menu"})," now supports ",(0,r.jsx)(n.code,{children:'trigger="click-hover"'})," prop, to open menu both on click and on hover."]}),"\n",(0,r.jsxs)(n.li,{children:["It is now possible to set ",(0,r.jsx)(n.code,{children:"keepMounted"})," prop on ",(0,r.jsx)(n.a,{href:"/core/tabs",children:"Tabs.Panel"})," components individually, not only on ",(0,r.jsx)(n.code,{children:"Tabs"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://mantinedev.github.io/mantine-flagpack/",children:"mantine-flagpack"})," has been migrated to support ",(0,r.jsx)(n.code,{children:"7.x"})," versions of ",(0,r.jsx)(n.code,{children:"@mantine/core"}),". To use it, update ",(0,r.jsx)(n.code,{children:"mantine-flagpack"})," to ",(0,r.jsx)(n.code,{children:"4.0.0"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/mantinedev/vite-template",children:"vite-template"})," was migrated from Jest to ",(0,r.jsx)(n.a,{href:"https://vitest.dev/",children:"Vitest"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The main ",(0,r.jsx)(n.a,{href:"https://github.com/mantinedev/mantine",children:"Mantine repository"})," was migrated to ",(0,r.jsx)(n.a,{href:"https://yarnpkg.com/blog/release/4.0",children:"yarn v4"}),". The process of getting started locally ",(0,r.jsx)(n.a,{href:"/contribute/#get-started-with-mantine-locally",children:"was changed"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@mantine/ds"})," package has been deprecated. You can use ",(0,r.jsx)(n.code,{children:"@mantinex/mantine-logo"})," package to use ",(0,r.jsx)(n.code,{children:"MantineLogo"})," component in your project."]}),"\n"]})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(j,{...e,children:(0,r.jsx)(f,{...e})})}function v(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},57914:function(e,n,o){"use strict";o.d(n,{V:function(){return c}});var r=o(52322),a=o(93010),i=o(17115),t=o(950),s=o(3900);let l=`
import { Button, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
`,c={type:"code",component:function(){let[e,{toggle:n}]=(0,s.q)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.z,{loading:e,children:"Filled button"}),(0,r.jsx)(i.z,{variant:"light",loading:e,children:"Light button"}),(0,r.jsx)(i.z,{variant:"outline",loading:e,children:"Outline button"})]}),(0,r.jsx)(t.r,{checked:e,onChange:n,label:"Loading state",mt:"md"})]})},centered:!0,code:l}},93243:function(e,n,o){"use strict";o.d(n,{r:function(){return l}});var r=o(52322),a=o(2784),i=o(8582),t=o(14726);let s=`
import { useState } from 'react';
import { AlphaSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(0.55);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="#1c7ed6" value={value} onChange={onChange} />
    </>
  );
}
`,l={type:"code",component:function(){let[e,n]=(0,a.useState)(.55);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.x,{children:["Alpha value: ",e]}),(0,r.jsx)(t.k,{color:"#1c7ed6",value:e,onChange:n})]})},code:s,centered:!0,maxWidth:300}},51565:function(e,n,o){"use strict";o.d(n,{u:function(){return l}});var r=o(52322),a=o(2784),i=o(8582),t=o(93262);let s=`
import { useState } from 'react';
import { HueSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}
`,l={type:"code",component:function(){let[e,n]=(0,a.useState)(250);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.x,{children:["Hue value: ",e]}),(0,r.jsx)(t.Q,{value:e,onChange:n})]})},code:s,centered:!0,maxWidth:300}},41427:function(e,n,o){"use strict";o.d(n,{Y:function(){return M}});var r=o(52322),a=o(66178);o(2784);var i=o(91482),t=o(11200),s=o(46403),l=o(13588),c=o(39568),d=o(90006),h=o(38483),m=o(46690),p=o(97072),u=o(28559),x=o(82027),j=o(50569),f=o(75336);let[g,v]=(0,f.V)();var b=o(9341),w=o(6941),k=o(62770);let y={},C=(0,x.d)((e,n)=>{let{value:o,defaultValue:i,onChange:t,size:s,wrapperProps:l,children:c,name:d,readOnly:m,...p}=(0,h.w)("RadioGroup",y,e),u=(0,a.M)(d),[x,j]=(0,b.C)({value:o,defaultValue:i,finalValue:"",onChange:t});return(0,r.jsx)(g,{value:{value:x,onChange:e=>!m&&j(e.currentTarget.value),size:s,name:u},children:(0,r.jsx)(w.I.Wrapper,{size:s,ref:n,...l,...p,labelElement:"div",__staticSelector:"RadioGroup",children:(0,r.jsx)(k.m,{role:"radiogroup",children:c})})})});C.classes=w.I.Wrapper.classes,C.displayName="@mantine/core/RadioGroup";var S=o(58898);function z({size:e,style:n,...o}){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,S.h)(e),height:(0,S.h)(e),...n},"aria-hidden":!0,...o,children:(0,r.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var T={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};let N={labelPosition:"right"},I=(0,t.Z)((e,{size:n,radius:o,color:r,iconColor:a,variant:t,autoContrast:h})=>{let m=(0,s.E)({color:r||e.primaryColor,theme:e}),p=m.isThemeColor&&void 0===m.shade?`var(--mantine-color-${m.color}-outline)`:m.color;return{root:{"--radio-size":(0,i.ap)(n,"radio-size"),"--radio-radius":void 0===o?void 0:(0,i.H5)(o),"--radio-color":"outline"===t?p:(0,l.p)(r,e),"--radio-icon-color":a?(0,l.p)(a,e):(0,d.o)(h,e)?(0,c.R)({color:r,theme:e}):void 0,"--radio-icon-size":(0,i.ap)(n,"radio-icon-size")}}}),M=(0,x.d)((e,n)=>{let o=(0,h.w)("Radio",N,e),{classNames:i,className:t,style:s,styles:l,unstyled:c,vars:d,id:x,size:f,label:g,labelPosition:b,description:w,error:k,radius:y,color:C,variant:S,disabled:M,wrapperProps:_,icon:A=z,rootRef:R,iconColor:D,onChange:E,mod:B,...O}=o,P=(0,m.y)({name:"Radio",classes:T,props:o,className:t,style:s,classNames:i,styles:l,unstyled:c,vars:d,varsResolver:I}),G=v(),F=G?.size??f,Y=o.size?f:F,{styleProps:V,rest:H}=(0,p.c)(O),L=(0,a.M)(x),W=G?{checked:G.value===H.value,name:H.name??G.name,onChange:e=>{G.onChange(e),E?.(e)}}:{};return(0,r.jsx)(j.Z,{...P("root"),__staticSelector:"Radio",__stylesApiProps:o,id:L,size:Y,labelPosition:b,label:g,description:w,error:k,disabled:M,classNames:i,styles:l,unstyled:c,"data-checked":W.checked||void 0,variant:S,ref:R,mod:B,...V,..._,children:(0,r.jsxs)(u.x,{...P("inner"),mod:{"label-position":b},children:[(0,r.jsx)(u.x,{...P("radio",{focusable:!0,variant:S}),onChange:E,...H,...W,component:"input",mod:{error:!!k},ref:n,id:L,disabled:M,type:"radio"}),(0,r.jsx)(A,{...P("icon"),"aria-hidden":!0})]})})});M.classes=T,M.displayName="@mantine/core/Radio",M.Group=C}},function(e){e.O(0,[57938,17454,47747,79510,57902,49774,92888,40179],function(){return e(e.s=39767)}),_N_E=e.O()}]);