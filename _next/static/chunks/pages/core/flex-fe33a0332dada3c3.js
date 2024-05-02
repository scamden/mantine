(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38902],{5009:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/flex",function(){return t(52613)}])},52613:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return S}});var n=t(52322),o=t(45392);let l={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var a=t(40580);t(2784);var s=t(68755),i=t(38483),p=t(46690),c=t(9437),u=t(17978),d=t(12063),m=t(28559),x=t(33502),h={root:"m_8bffd616"};let f={},y=(0,x.b)((e,r)=>{let t=(0,i.w)("Flex",f,e),{classNames:o,className:x,style:y,styles:b,unstyled:j,vars:g,gap:v,rowGap:w,columnGap:B,align:k,justify:F,wrap:_,direction:E,...S}=t,z=(0,p.y)({name:"Flex",classes:h,props:t,className:x,style:y,classNames:o,styles:b,unstyled:j,vars:g}),G=(0,s.rZ)(),N=(0,d.m)(),V=(0,u.n)({styleProps:{gap:v,rowGap:w,columnGap:B,align:k,justify:F,wrap:_,direction:E},theme:G,data:l});return(0,n.jsxs)(n.Fragment,{children:[V.hasResponsiveStyles&&(0,n.jsx)(c.f,{selector:`.${N}`,styles:V.styles,media:V.media}),(0,n.jsx)(m.x,{ref:r,...z("root",{className:N,style:(0,a.L)(V.inlineStyles)}),...S})]})});y.classes=h,y.displayName="@mantine/core/Flex";var b=t(17115);let j=`
import { Flex, Button } from '@mantine/core';


function Demo() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      {{props}}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
`,g={type:"configurator",component:function(e){return(0,n.jsxs)(y,{mih:50,bg:"rgba(0, 0, 0, .3)",...e,children:[(0,n.jsx)(b.z,{children:"Button 1"}),(0,n.jsx)(b.z,{children:"Button 2"}),(0,n.jsx)(b.z,{children:"Button 3"})]})},code:j,controls:[{prop:"gap",type:"size",initialValue:"md",libraryValue:null},{prop:"justify",type:"select",data:[{value:"flex-start",label:"flex-start"},{value:"center",label:"center"},{value:"flex-end",label:"flex-end"}],initialValue:"flex-start",libraryValue:null},{prop:"align",type:"select",data:[{value:"flex-start",label:"flex-start"},{value:"center",label:"center"},{value:"flex-end",label:"flex-end"}],initialValue:"flex-start",libraryValue:null},{prop:"direction",type:"select",data:[{value:"row",label:"row"},{value:"column",label:"column"},{value:"row-reverse",label:"row-reverse"},{value:"column-reverse",label:"column-reverse"}],initialValue:"row",libraryValue:null},{prop:"wrap",type:"select",data:[{value:"wrap",label:"wrap"},{value:"nowrap",label:"nowrap"},{value:"wrap-reverse",label:"wrap-reverse"}],initialValue:"wrap",libraryValue:null}]},v=`
import { Flex, Button } from '@mantine/core';

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
`,w={type:"code",component:function(){return(0,n.jsxs)(y,{direction:{base:"column",sm:"row"},gap:{base:"sm",sm:"lg"},justify:{sm:"center"},children:[(0,n.jsx)(b.z,{children:"Button 1"}),(0,n.jsx)(b.z,{children:"Button 2"}),(0,n.jsx)(b.z,{children:"Button 3"})]})},code:v};var B=t(46055),k=t(79016),F=t(33638);let _=(0,k.A)(F.us.Flex);function E(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{DataTable:t,Demo:a,FlexboxGapSupport:s}=r;return t||z("DataTable",!0),a||z("Demo",!0),s||z("FlexboxGapSupport",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:g}),"\n",(0,n.jsx)(r.h2,{id:"supported-props",children:"Supported props"}),"\n",(0,n.jsx)(B.T,{source:l}),"\n",(0,n.jsx)(r.h2,{id:"responsive-props",children:"Responsive props"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Flex"})," component props can have responsive values the same way as other ",(0,n.jsx)(r.a,{href:"/styles/style-props/",children:"style props"}),":"]}),"\n",(0,n.jsx)(a,{data:w}),"\n",(0,n.jsx)(r.h2,{id:"difference-from-group-and-stack",children:"Difference from Group and Stack"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Flex"})," component is an alternative to ",(0,n.jsx)(r.a,{href:"/core/group/",children:"Group"})," and ",(0,n.jsx)(r.a,{href:"/core/stack/",children:"Stack"}),".\n",(0,n.jsx)(r.code,{children:"Flex"})," is more flexible, it allows creating both horizontal and vertical flexbox layouts, but requires more configuration.\nUnlike ",(0,n.jsx)(r.a,{href:"/core/group/",children:"Group"})," and ",(0,n.jsx)(r.a,{href:"/core/stack/",children:"Stack"})," ",(0,n.jsx)(r.code,{children:"Flex"})," is ",(0,n.jsx)(r.a,{href:"/guides/polymorphic/",children:"polymorphic"})," and supports responsive props."]}),"\n",(0,n.jsx)(t,{head:["","Group","Stack","Flex"],data:[["Direction","horizontal","vertical","both"],["Equal width children","✅","❌","❌"],["flex-wrap support","✅","❌","✅"],["Responsive flexbox props","❌","❌","✅"],["Polymorphic component","❌","❌","✅"]]}),"\n",(0,n.jsx)(s,{component:"Flex"})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(_,{...e,children:(0,n.jsx)(E,{...e})})}function z(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},46055:function(e,r,t){"use strict";t.d(r,{T:function(){return p}});var n=t(52322),o=t(58272),l=t(45909),a=t(88319),s=t(37969);let i={color:"theme.colors",fontSize:"theme.fontSizes",spacing:"theme.spacing",lineHeight:"theme.lineHeights"};function p(e){let{source:r=o.p}=e,t=Object.keys(r).map(e=>{let t=r[e],o=i[t.type];return[(0,n.jsx)(l.E,{children:e},"1"),(0,n.jsx)(a.O,{separator:",",styles:{separator:{marginLeft:2,marginRight:2}},children:Array.isArray(t.property)?t.property.map(e=>(0,n.jsx)(l.E,{children:e},e)):(0,n.jsx)(l.E,{children:t.property})}),o?(0,n.jsx)(l.E,{children:o}):"–"]});return(0,n.jsx)(s.gw,{head:["Prop","CSS Property","Theme key"],data:t})}},88319:function(e,r,t){"use strict";t.d(r,{O:function(){return h}});var n=t(52322),o=t(2784),l=t(98399),a=t(91482),s=t(11200),i=t(38483),p=t(46690),c=t(28559),u=t(82027),d={root:"m_8b3717df",breadcrumb:"m_f678d540",separator:"m_3b8f2208"};let m={separator:"/"},x=(0,s.Z)((e,{separatorMargin:r})=>({root:{"--bc-separator-margin":(0,a.bG)(r)}})),h=(0,u.d)((e,r)=>{let t=(0,i.w)("Breadcrumbs",m,e),{classNames:a,className:s,style:u,styles:h,unstyled:f,vars:y,children:b,separator:j,separatorMargin:g,...v}=t,w=(0,p.y)({name:"Breadcrumbs",classes:d,props:t,className:s,style:u,classNames:a,styles:h,unstyled:f,vars:y,varsResolver:x}),B=o.Children.toArray(b).reduce((e,r,t,n)=>{let a=(0,l.k)(r)?(0,o.cloneElement)(r,{...w("breadcrumb",{className:r.props?.className}),key:t}):(0,o.createElement)("div",{...w("breadcrumb"),key:t},r);return e.push(a),t!==n.length-1&&e.push((0,o.createElement)(c.x,{...w("separator"),key:`separator-${t}`},j)),e},[]);return(0,n.jsx)(c.x,{ref:r,...w("root"),...v,children:B})});h.classes=d,h.displayName="@mantine/core/Breadcrumbs"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=5009)}),_N_E=e.O()}]);