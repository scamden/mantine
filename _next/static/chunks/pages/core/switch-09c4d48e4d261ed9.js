(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62909],{11495:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/switch",function(){return n(44174)}])},44174:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(52322),o=n(45392),i=n(950);let c={type:"configurator",component:e=>(0,r.jsx)(i.r,{defaultChecked:!0,...e}),code:`
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      defaultChecked
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var l=n(93010);let a={type:"code",component:function(){return(0,r.jsxs)(l.Z,{justify:"center",children:[(0,r.jsx)(i.r,{size:"xs",onLabel:"ON",offLabel:"OFF"}),(0,r.jsx)(i.r,{size:"sm",onLabel:"ON",offLabel:"OFF"}),(0,r.jsx)(i.r,{size:"md",onLabel:"ON",offLabel:"OFF"}),(0,r.jsx)(i.r,{size:"lg",onLabel:"ON",offLabel:"OFF"}),(0,r.jsx)(i.r,{size:"xl",onLabel:"ON",offLabel:"OFF"})]})},code:`
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="xl" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}
`};var s=n(90664),h=n(40151),u=n(68755),d=n(58898);let p={type:"code",component:function(){let e=(0,u.rZ)(),t=(0,r.jsx)(s.Z,{style:{width:(0,d.h)(16),height:(0,d.h)(16)},stroke:2.5,color:e.colors.yellow[4]}),n=(0,r.jsx)(h.Z,{style:{width:(0,d.h)(16),height:(0,d.h)(16)},stroke:2.5,color:e.colors.blue[6]});return(0,r.jsx)(i.r,{size:"md",color:"dark.4",onLabel:t,offLabel:n})},centered:!0,code:`
import { Switch, useMantineTheme, rem } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />;
}
`};var m=n(2784),f=n(9705),b=n(12980);let w={type:"code",component:function(){let e=(0,u.rZ)(),[t,n]=(0,m.useState)(!1);return(0,r.jsx)(i.r,{checked:t,onChange:e=>n(e.currentTarget.checked),color:"teal",size:"md",label:"Switch with thumb icon",thumbIcon:t?(0,r.jsx)(f.Z,{style:{width:(0,d.h)(12),height:(0,d.h)(12)},color:e.colors.teal[6],stroke:3}):(0,r.jsx)(b.Z,{style:{width:(0,d.h)(12),height:(0,d.h)(12)},color:e.colors.red[6],stroke:3})})},centered:!0,code:`
import { useState } from 'react';
import { Switch, useMantineTheme, rem } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.teal[6]}
            stroke={3}
          />
        ) : (
          <IconX
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.red[6]}
            stroke={3}
          />
        )
      }
    />
  );
}
`};var x=n(893);let S={type:"code",component:function(){return(0,r.jsx)(x.u,{label:"Switch tooltip",refProp:"rootRef",children:(0,r.jsx)(i.r,{label:"Switch with tooltip"})})},code:`
import { Switch, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
`,centered:!0},j={type:"configurator",component:function(e){return(0,r.jsx)(i.r.Group,{defaultValue:["react"],...e,children:(0,r.jsxs)(l.Z,{mt:"xs",children:[(0,r.jsx)(i.r,{value:"react",label:"React"}),(0,r.jsx)(i.r,{value:"svelte",label:"Svelte"}),(0,r.jsx)(i.r,{value:"ng",label:"Angular"}),(0,r.jsx)(i.r,{value:"vue",label:"Vue"})]})})},code:`
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
`,centered:!0,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var g=n(7297);let y=`
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`,v={type:"styles-api",data:g.T,component:function(e){return(0,r.jsx)(i.r,{...e,label:"Switch component",description:"Switch description",error:"Switch error"})},centered:!0,code:y};var k=n(25071),V=n(15019);let L=(0,k.A)(V.us.Switch);function I(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n,StylesApiSelectors:i,WrapperProps:l}=t;return n||T("Demo",!0),i||T("StylesApiSelectors",!0),l||T("WrapperProps",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Switch\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"inner-labels",children:"Inner Labels"}),"\n",(0,r.jsx)(n,{data:a}),"\n",(0,r.jsx)(t.h2,{id:"icon-labels",children:"Icon labels"}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"thumb-icon",children:"Thumb icon"}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"with-tooltip",children:"With tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'refProp="rootRef"'})," on ",(0,r.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components to make them work with ",(0,r.jsx)(t.code,{children:"Switch"}),":"]}),"\n",(0,r.jsx)(n,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,r.jsxs)(t.p,{children:["By default, switch input and label have ",(0,r.jsx)(t.code,{children:"cursor: default"})," (same as native ",(0,r.jsx)(t.code,{children:'input[type="checkbox"]'}),").\nTo change cursor to pointer, set ",(0,r.jsx)(t.code,{children:"cursorType"})," on ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Switch } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Switch label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(l,{component:"Switch"}),"\n",(0,r.jsx)(t.h2,{id:"switchgroup",children:"Switch.Group"}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"controlled-switchgroup",children:"Controlled Switch.Group"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Switch } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Switch.Group value={value} onChange={setValue}>\n      <Switch value="react" label="React" />\n      <Switch value="svelte" label="Svelte" />\n    </Switch.Group>\n  );\n}\n'})}),"\n",(0,r.jsx)(i,{component:"Switch"}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"get-input-ref",children:"Get input ref"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const ref = useRef<HTMLInputElement>(null);\n  return <Switch ref={ref} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Switch"})," is a regular ",(0,r.jsx)(t.code,{children:'input[type="checkbox"]'}),". Set ",(0,r.jsx)(t.code,{children:"aria-label"})," if the ",(0,r.jsx)(t.code,{children:"Switch"})," is used without ",(0,r.jsx)(t.code,{children:"label"})," prop:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Switch } from \'@mantine/core\';\n\n// -> not ok, input is not labeled\nfunction Bad() {\n  return <Switch />;\n}\n\n// -> ok, input has aria-label\nfunction Good() {\n  return <Switch aria-label="I agree to everything" />;\n}\n\n// -> ok, input has associated label\nfunction AlsoGood() {\n  return <Switch label="I agree to everything" />;\n}\n'})})]})}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(L,{...e,children:(0,r.jsx)(I,{...e})})}function T(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},40151:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(73681).Z)("outline","moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]])},12980:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(73681).Z)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=11495)}),_N_E=e.O()}]);