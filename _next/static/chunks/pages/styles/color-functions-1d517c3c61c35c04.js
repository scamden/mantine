(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10864],{37843:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/color-functions",function(){return o(38158)}])},38158:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return s}});var r=o(52322),i=o(45392),l=o(79016),a=o(33638);let t=(0,l.A)(a.us.ColorFunctions);function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"color-functions",children:"Color functions"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package exports several functions that can be used to manipulate colors\nor extract information before using them as CSS value."]}),"\n",(0,r.jsx)(n.h2,{id:"darken-and-lighten",children:"darken and lighten"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"darken"})," and ",(0,r.jsx)(n.code,{children:"lighten"})," functions can be used to manipulate color brightness,\nthey accept color in any format as first argument and the amount of lightness to add/remove as second argument."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { darken, lighten } from '@mantine/core';\n\nlighten('#228BE6', 0.1); // lighten by 10%\n// -> rgba(56, 151, 233, 1)\n\ndarken('rgb(245, 159, 0)', 0.5); // darken by 50%\n// -> rgba(123, 80, 0, 1)\n\ndarken('rgba(245, 159, 0, .3)', 0.5); // darken by 50%\n// -> rgba(123, 80, 0, 1, .3)\n\nlighten('var(--mantine-color-gray-4)', 0.74);\n// -> color-mix(in srgb, var(--mantine-color-gray-4), white 74%)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"alpha",children:"alpha"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"alpha"})," function converts color to rgba format with a given alpha channel,\nit is usually used to make colors more transparent. If it is not possible to convert color to rgba\nformat (for example if color is a CSS variable), the function will use ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix",children:"color-mix"}),".\nNote that ",(0,r.jsx)(n.code,{children:"color-mix"})," is not supported in some older browsers, you can check ",(0,r.jsx)(n.a,{href:"https://caniuse.com/mdn-css_types_color_color-mix",children:"caniuse"}),"\nfor more information."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { alpha } from '@mantine/core';\n\nalpha('#4578FC', 0.45); // -> rgba(69, 120, 252, 0.45)\nalpha('var(--mantine-color-gray-4)', 0.74);\n// -> color-mix(in srgb, var(--mantine-color-gray-4), transparent 26%)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parsethemecolor",children:"parseThemeColor"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parseThemeColor"})," function returns information about a given color in the following format:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface ParseThemeColorResult {\n  /**\n   * True if given color is theme color, for example\n   * `blue`, `orange.9`, `pink.3` are theme colors\n   * `#fff`, `rgba(0, 0, 0, .5)` are not\n   */\n  isThemeColor: boolean;\n\n  /**\n   * Key of `theme.colors` if given color is theme color, for example\n   * if given color is `blue` it will be `blue`,\n   * if given color is `orange.9` it will be `orange`\n   */\n  color: string;\n\n  /**\n   * Resolved color value, for example\n   * if given color is `blue.7` it will be value of `theme.colors.blue[7]`,\n   * if given color is `#fff` it will be `#fff`\n   */\n  value: string;\n\n  /**\n   * If given color is theme color, this will be shade of that color\n   * for example if given color is `blue.7` it will be `7`,\n   * if given color does not have index or is not theme color then it will be `undefined`\n   */\n  shade: MantineColorShade | undefined;\n\n  /**\n   * Color CSS variable, for example\n   * `blue.7` – `--mantine-color-blue-7`,\n   * `red` – `--mantine-color-red-filled`,\n   * `white` – `--mantine-color-white`\n   * `#fff` – `undefined`\n   */\n  variable: CssVariable | undefined;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parseThemeColor"})," function can be used everywhere ",(0,r.jsx)(n.code,{children:"theme"})," object is available,\nfor example in ",(0,r.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables resolver"}),", ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"variant color resolver"}),"\nor component body:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {\n  MantineColor,\n  parseThemeColor,\n  useMantineTheme,\n} from '@mantine/core';\n\ninterface DemoProps {\n  color: MantineColor;\n}\n\nfunction Demo({ color }: DemoProps) {\n  const theme = useMantineTheme();\n  const parsedColor = parseThemeColor({ color, theme });\n\n  return (\n    <div\n      style={{\n        backgroundColor: parsedColor.isThemeColor\n          ? `var(${parsedColor.variable})`\n          : parsedColor.value,\n      }}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"getthemecolor",children:"getThemeColor"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getThemeColor"})," is a simpler version of ",(0,r.jsx)(n.code,{children:"parseThemeColor"})," function, it accepts a color string\nas first argument and theme object as second argument. It returns parsed color value or CSS variable:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { getThemeColor, useMantineTheme } from '@mantine/core';\n\nfunction Demo() {\n  const theme = useMantineTheme();\n\n  getThemeColor('blue', theme); // -> var(--mantine-color-blue-filled)\n  getThemeColor('blue.7', theme); // -> var(--mantine-color-blue-7)\n  getThemeColor('white', theme); // -> var(--mantine-color-white)\n  getThemeColor('#DF78E4', theme); // -> #DF78E4\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"getgradient",children:"getGradient"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getGradient"})," function transforms given ",(0,r.jsx)(n.code,{children:"MantineGradient"})," object to CSS gradient string:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { getGradient, useMantineTheme } from '@mantine/core';\n\nfunction Demo() {\n  const theme = useMantineTheme();\n\n  getGradient({ deg: 180, from: 'blue', to: 'cyan.7' }, theme);\n  // -> `linear-gradient(180deg, var(--mantine-color-blue-filled) 0%, var(--mantine-color-cyan-7) 100%)`\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"islightcolor",children:"isLightColor"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"isLightColor"})," function can be used to achieve better contrast between text and background:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Box, isLightColor } from '@mantine/core';\n\ninterface DemoProps {\n  color: string;\n}\n\nexport function Demo({ color }: DemoProps) {\n  return (\n    <Box bg={color} c={isLightColor(color) ? 'black' : 'white'}>\n      Box with contrast text\n    </Box>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"luminance",children:"luminance"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"luminance"})," function returns color luminance, it can be used to check colors contrast:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { luminance } from '@mantine/core';\n\nluminance('#fff'); // -> 1\nluminance('#000'); // -> 0\nluminance('#4578FC'); // -> 0.21726425554966\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=37843)}),_N_E=e.O()}]);