(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55686],{72394:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-picker",function(){return o(52265)}])},52265:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return D}});var t=o(52322),n=o(45392),c=o(2784),l=o(37574),Text=o(8582);let a=`
import { useState } from 'react';
import { ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}
`,i={type:"code",component:function(){let[e,r]=(0,c.useState)("rgba(47, 119, 150, 0.7)");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.z,{format:"rgba",value:e,onChange:r}),(0,t.jsx)(Text.x,{mt:"md",children:e})]})},code:a,centered:!0};var s=o(65438);let d=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,u={type:"configurator",component:function(e){let[r,o]=(0,c.useState)("#C5D899");return(0,t.jsxs)(s.K,{align:"center",children:[(0,t.jsx)(l.z,{value:r,onChange:o,...e}),(0,t.jsx)(Text.x,{children:r})]})},code:d,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var h=o(87744);let p=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(h.t.colors).map(e=>`'${h.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,m={type:"code",component:function(){return(0,t.jsx)(s.K,{align:"center",children:(0,t.jsx)(l.z,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(h.t.colors).map(e=>h.t.colors[e][6])})})},code:p};var x=o(96464);let f=`
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />

      <Text>{value}</Text>
    </>
  );
}
`,j={type:"code",component:function(){let[e,r]=(0,c.useState)("#fff");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.z,{format:"hex",value:e,onChange:r,withPicker:!1,fullWidth:!0,swatches:[...h.t.colors.red.slice(0,7),...h.t.colors.green.slice(0,7),...h.t.colors.blue.slice(0,7)]}),(0,t.jsx)(Text.x,{ta:"center",mt:5,children:e})]})},code:f,centered:!0,maxWidth:220},b=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,g={type:"configurator",component:function(e){return(0,t.jsx)(l.z,{mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(h.t.colors).map(e=>h.t.colors[e][6]),...e})},code:b,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},w=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`,k={type:"code",component:function(){return(0,t.jsx)(l.z,{fullWidth:!0,size:"lg",format:"rgba"})},code:w};var v=o(46008);let C=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
`,y={type:"styles-api",data:v.L,component:function(e){return(0,t.jsx)(l.z,{size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"],...e})},centered:!0,code:C};var P=o(51565),S=o(93243),T=o(79016),E=o(33638);let z=(0,T.A)(E.us.ColorPicker);function A(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Demo:o,StylesApiSelectors:c}=r;return o||_("Demo",!0),c||_("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:i}),"\n",(0,t.jsx)(r.h2,{id:"color-format",children:"Color format"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"ColorPicker"})," supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:"]}),"\n",(0,t.jsx)(o,{data:u}),"\n",(0,t.jsx)(r.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,t.jsxs)(r.p,{children:["You can add predefined color swatches with ",(0,t.jsx)(r.code,{children:"swatches"})," prop:"]}),"\n",(0,t.jsx)(o,{data:m}),"\n",(0,t.jsxs)(r.p,{children:["By default, ",(0,t.jsx)(r.code,{children:"ColorPicker"})," will display 7 swatches per row, you can configure it with ",(0,t.jsx)(r.code,{children:"swatchesPerRow"})," prop:"]}),"\n",(0,t.jsx)(o,{data:x.h}),"\n",(0,t.jsxs)(r.p,{children:["To display swatches without picker set ",(0,t.jsx)(r.code,{children:"withPicker={false}"})," and ",(0,t.jsx)(r.code,{children:"fullWidth"})," props:"]}),"\n",(0,t.jsx)(o,{data:j}),"\n",(0,t.jsx)(r.h2,{id:"size",children:"Size"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"ColorPicker"})," has 5 predefined sizes: ",(0,t.jsx)(r.code,{children:"xs"}),", ",(0,t.jsx)(r.code,{children:"sm"}),", ",(0,t.jsx)(r.code,{children:"md"}),", ",(0,t.jsx)(r.code,{children:"lg"})," and ",(0,t.jsx)(r.code,{children:"xl"}),":"]}),"\n",(0,t.jsx)(o,{data:g}),"\n",(0,t.jsx)(r.h2,{id:"fullwidth",children:"fullWidth"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"fullWidth"})," prop to stretch component to 100% of parent width. In this case the picker will not\nhave fixed width, but you can still use ",(0,t.jsx)(r.code,{children:"size"})," prop to control sizes of sliders."]}),"\n",(0,t.jsx)(o,{data:k}),"\n",(0,t.jsx)(c,{component:"ColorPicker"}),"\n",(0,t.jsx)(o,{data:y}),"\n",(0,t.jsx)(r.h2,{id:"hueslider-component",children:"HueSlider component"}),"\n",(0,t.jsx)(o,{data:P.u}),"\n",(0,t.jsx)(r.h2,{id:"alphaslider-component",children:"AlphaSlider component"}),"\n",(0,t.jsx)(o,{data:S.r}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsx)(r.p,{children:"ColorPicker component is accessible by default:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Saturation, hue and alpha sliders are focusable"}),"\n",(0,t.jsx)(r.li,{children:"When moused is used to interact with the slider, focus is moved to the slider"}),"\n",(0,t.jsx)(r.li,{children:"All values can be changed with arrows"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["To make component accessible for screen readers, set ",(0,t.jsx)(r.code,{children:"saturationLabel"}),", ",(0,t.jsx)(r.code,{children:"hueLabel"})," and ",(0,t.jsx)(r.code,{children:"alphaLabel"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { ColorPicker } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <ColorPicker\n      saturationLabel="Saturation"\n      hueLabel="Hue"\n      alphaLabel="Alpha"\n    />\n  );\n}\n'})})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(z,{...e,children:(0,t.jsx)(A,{...e})})}function _(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93243:function(e,r,o){"use strict";o.d(r,{r:function(){return i}});var t=o(52322),n=o(2784),c=o(8582),l=o(14726);let a=`
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
`,i={type:"code",component:function(){let[e,r]=(0,n.useState)(.55);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.x,{children:["Alpha value: ",e]}),(0,t.jsx)(l.k,{color:"#1c7ed6",value:e,onChange:r})]})},code:a,centered:!0,maxWidth:300}},51565:function(e,r,o){"use strict";o.d(r,{u:function(){return i}});var t=o(52322),n=o(2784),c=o(8582),l=o(93262);let a=`
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
`,i={type:"code",component:function(){let[e,r]=(0,n.useState)(250);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.x,{children:["Hue value: ",e]}),(0,t.jsx)(l.Q,{value:e,onChange:r})]})},code:a,centered:!0,maxWidth:300}},96464:function(e,r,o){"use strict";o.d(r,{h:function(){return a}});var t=o(52322),n=o(37574),c=o(87744);let l=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(c.t.colors).map(e=>`'${c.t.colors[e][6]}'`).join(", ")}]} />
  );
}
`,a={type:"configurator",component:function(e){return(0,t.jsx)(n.z,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(c.t.colors).map(e=>c.t.colors[e][6]),...e})},code:l,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=72394)}),_N_E=e.O()}]);