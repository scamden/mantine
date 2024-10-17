(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54139],{50145:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-logger",function(){return n(41595)}])},41595:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return g}});var t=n(52322),r=n(45392),s=n(2784),c=n(17115),u=n(71978);let i={type:"code",code:`
import { useState } from 'react';
import { useLogger } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`,component:function(){var e,o;let[n,r]=(0,s.useState)(0);return e="Demo",o=[{count:n,hello:"world"}],(0,s.useEffect)(()=>(console.log(`${e} mounted`,...o),()=>console.log(`${e} unmounted`)),[]),(0,u.l)(()=>{console.log(`${e} updated`,...o)},o),(0,t.jsxs)(c.z,{onClick:()=>r(e=>e+1),children:["Update state (",n,")"]})},centered:!0};var l=n(25071),d=n(15019);let a=(0,l.A)(d.us.useLogger);function p(e){let o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"use-logger"})," logs given values to the console each time component renders.\nOpen devtools to see state changes in console:"]}),"\n",(0,t.jsx)(n,{data:i}),"\n",(0,t.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"function useLogger(componentName: string, props: any[]): any;\n"})})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})})}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=50145)}),_N_E=e.O()}]);