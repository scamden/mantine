(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63358],{21725:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-media-query",function(){return i(32999)}])},32999:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return p}});var o=i(52322),t=i(45392),a=i(58898),r=i(32581),d=i(27780);let s=`
import { Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${(0,a.em)(900)})');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`,c={type:"code",code:s,component:function(){let e=(0,d.a)(`(min-width: ${(0,a.em)(900)})`);return(0,o.jsxs)(r.C,{color:e?"teal":"red",variant:"filled",children:["Breakpoint ",e?"matches":"does not match"]})},centered:!0};var l=i(79016),u=i(33638);let h=(0,l.A)(u.us.useMediaQuery);function m(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Demo:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-media-query"})," subscribes to media queries.\nIt receives a media query as an argument and returns ",(0,o.jsx)(n.code,{children:"true"})," if the given media query matches the current state.\nThe hook relies on ",(0,o.jsx)(n.code,{children:"window.matchMedia()"})," ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia",children:"API"}),"\nand will return ",(0,o.jsx)(n.code,{children:"false"})," if the API is not available, unless an initial value is provided in the second argument."]}),"\n",(0,o.jsxs)(n.p,{children:["Resize browser window to trigger ",(0,o.jsx)(n.code,{children:"window.matchMedia"})," event:"]}),"\n",(0,o.jsx)(i,{data:c}),"\n",(0,o.jsx)(n.h2,{id:"server-side-rendering",children:"Server Side Rendering"}),"\n",(0,o.jsxs)(n.p,{children:["During server side rendering the hook will always return ",(0,o.jsx)(n.code,{children:"false"})," as ",(0,o.jsx)(n.code,{children:"window.matchMedia"})," api is not available,\nif that is not a desired behavior, you can override the initial value:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useMediaQuery } from '@mantine/hooks';\n\nfunction Demo() {\n  // Set initial value in second argument and getInitialValueInEffect option to false\n  const matches = useMediaQuery('(max-width: 40em)', true, {\n    getInitialValueInEffect: false,\n  });\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usemediaqueryoptions-type",children:"UseMediaQueryOptions type"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"@mantine/hooks"})," package exports ",(0,o.jsx)(n.code,{children:"UseMediaQueryOptions"})," type – a type of the second argument of ",(0,o.jsx)(n.code,{children:"useMediaQuery"})," hook."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useMediaQuery, UseMediaQueryOptions } from '@mantine/hooks';\n\nconst options: UseMediaQueryOptions = {\n  getInitialValueInEffect: false,\n};\n\nconst matches = useMediaQuery('(max-width: 40em)', true, options);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useMediaQuery(\n  query: string,\n  initialValue?: boolean,\n  options?: {\n    getInitialValueInEffect: boolean;\n  }\n): boolean;\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(m,{...e})})}},32581:function(e,n,i){"use strict";i.d(n,{C:function(){return p}});var o=i(52322);i(2784);var t=i(91482),a=i(11200),r=i(13588),d=i(38483),s=i(46690),c=i(28559),l=i(33502),u={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let h={},m=(0,a.Z)((e,{radius:n,color:i,gradient:o,variant:a,size:d,autoContrast:s})=>{let c=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:o,variant:a||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.ap)(d,"badge-height"),"--badge-padding-x":(0,t.ap)(d,"badge-padding-x"),"--badge-fz":(0,t.ap)(d,"badge-fz"),"--badge-radius":void 0===n?void 0:(0,t.H5)(n),"--badge-bg":i||a?c.background:void 0,"--badge-color":i||a?c.color:void 0,"--badge-bd":i||a?c.border:void 0,"--badge-dot-color":"dot"===a?(0,r.p)(i,e):void 0}}}),p=(0,l.b)((e,n)=>{let i=(0,d.w)("Badge",h,e),{classNames:t,className:a,style:r,styles:l,unstyled:p,vars:f,radius:g,color:x,gradient:b,leftSection:j,rightSection:v,children:y,variant:w,fullWidth:k,autoContrast:M,circle:_,mod:Q,...I}=i,E=(0,s.y)({name:"Badge",props:i,classes:u,className:a,style:r,classNames:t,styles:l,unstyled:p,vars:f,varsResolver:m});return(0,o.jsxs)(c.x,{variant:w,mod:[{block:k,circle:_},Q],...E("root",{variant:w}),ref:n,...I,children:[j&&(0,o.jsx)("span",{...E("section"),"data-position":"left",children:j}),(0,o.jsx)("span",{...E("label"),children:y}),v&&(0,o.jsx)("span",{...E("section"),"data-position":"right",children:v})]})});p.classes=u,p.displayName="@mantine/core/Badge"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=21725)}),_N_E=e.O()}]);