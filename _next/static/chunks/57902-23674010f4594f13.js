"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57902],{35661:function(e,t,r){r.d(t,{Z:function(){return o}});var o=(0,r(99882).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},9945:function(e,t,r){r.d(t,{Z:function(){return o}});var o=(0,r(99882).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},69378:function(e){e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((o=t.length)!=r.length)return!1;for(n=o;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((o=(s=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(n=o;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,s[n]))return!1;for(n=o;0!=n--;){var o,n,s,a=s[n];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},15463:function(e,t,r){function o(e,t,r){"object"==typeof r.value&&(r.value=n(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function n(e){if("object"!=typeof e)return e;var t,r,s,a=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?s=Object.create(e.__proto__||null):"[object Array]"===i?s=Array(e.length):"[object Set]"===i?(s=new Set,e.forEach(function(e){s.add(n(e))})):"[object Map]"===i?(s=new Map,e.forEach(function(e,t){s.set(n(t),n(e))})):"[object Date]"===i?s=new Date(+e):"[object RegExp]"===i?s=new RegExp(e.source,e.flags):"[object DataView]"===i?s=new e.constructor(n(e.buffer)):"[object ArrayBuffer]"===i?s=e.slice(0):"Array]"===i.slice(-6)&&(s=new e.constructor(e)),s){for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)o(s,r[a],Object.getOwnPropertyDescriptor(e,r[a]));for(a=0,r=Object.getOwnPropertyNames(e);a<r.length;a++)Object.hasOwnProperty.call(s,t=r[a])&&s[t]===e[t]||o(s,t,Object.getOwnPropertyDescriptor(e,t))}return s||e}r.d(t,{Y:function(){return n}})},77612:function(e,t,r){r.d(t,{c:function(){return c}});var o=r(52322),n=r(41168),s=r(17115),a=r(3900),i=r(3789);let l=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
`,c={type:"code",code:l,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,a.q)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.d,{offset:8,radius:"md",opened:e,onClose:r,title:"Authentication",children:(0,o.jsx)(i._,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(s.z,{onClick:t,children:"Open Drawer"})]})}}},3789:function(e,t,r){r.d(t,{_:function(){return y}});var o=r(52322),n=r(2784),s=r(35661),a=r(9945),i=r(1198),l=r(20992),c=r(93010),u=r(74770),d=r(60284),p=r(56159),f=r(8582),m=r(71873),w=r(17115),h=r(79510);function y({noShadow:e,noPadding:t,noSubmit:r,style:y}){let[g,v]=(0,n.useState)("register"),[j,b]=(0,n.useState)(!1),[x,C]=(0,n.useState)(null),O=(0,h.c)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return(0,o.jsx)(i.X,{p:t?0:"lg",shadow:e?"none":"sm",style:{...y,position:"relative",backgroundColor:"var(--mantine-color-body)"},children:(0,o.jsxs)("form",{onSubmit:O.onSubmit(()=>{b(!0),C(null),setTimeout(()=>{b(!1),C("register"===g?"User with this email already exists":"User with this email does not exist")},3e3)}),children:[(0,o.jsx)(l.f,{visible:j}),"register"===g&&(0,o.jsxs)(c.Z,{grow:!0,children:[(0,o.jsx)(u.o,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...O.getInputProps("firstName")}),(0,o.jsx)(u.o,{required:!0,placeholder:"Your last name",label:"Last name",...O.getInputProps("lastName")})]}),(0,o.jsx)(u.o,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:(0,o.jsx)(s.Z,{size:16,stroke:1.5}),...O.getInputProps("email")}),(0,o.jsx)(d.W,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:(0,o.jsx)(a.Z,{size:16,stroke:1.5}),...O.getInputProps("password")}),"register"===g&&(0,o.jsx)(d.W,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:(0,o.jsx)(a.Z,{size:16,stroke:1.5}),...O.getInputProps("confirmPassword")}),"register"===g&&(0,o.jsx)(p.X,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...O.getInputProps("termsOfService",{type:"checkbox"})}),x&&(0,o.jsx)(f.x,{c:"red",size:"sm",mt:"sm",children:x}),!r&&(0,o.jsxs)(c.Z,{justify:"space-between",mt:"xl",children:[(0,o.jsx)(m.e,{component:"button",type:"button",c:"dimmed",onClick:()=>{v(e=>"register"===e?"login":"register"),C(null)},size:"sm",children:"register"===g?"Have an account? Login":"Don't have an account? Register"}),(0,o.jsx)(w.z,{color:"blue",type:"submit",children:"register"===g?"Register":"Login"})]})]})})}},41168:function(e,t,r){r.d(t,{d:function(){return T}});var o=r(52322);r(2784);var n=r(97263),s=r(38483),a=r(82027),i=r(83147),l=r(89106);let[c,u]=(0,l.R)("Drawer component was not found in tree");var d={root:"m_f11b401e",header:"m_5a7c2c9",content:"m_b8a05bbd",inner:"m_31cd769a"};let p={},f=(0,a.d)((e,t)=>{let r=(0,s.w)("DrawerBody",p,e),{classNames:n,className:a,style:l,styles:c,vars:d,...f}=r,m=u();return(0,o.jsx)(i.y,{ref:t,...m.getStyles("body",{classNames:n,style:l,styles:c,className:a}),...f})});f.classes=d,f.displayName="@mantine/core/DrawerBody";var m=r(91403);let w={},h=(0,a.d)((e,t)=>{let r=(0,s.w)("DrawerCloseButton",w,e),{classNames:n,className:a,style:i,styles:l,vars:c,...d}=r,p=u();return(0,o.jsx)(m._,{ref:t,...p.getStyles("close",{classNames:n,style:i,styles:l,className:a}),...d})});h.classes=d,h.displayName="@mantine/core/DrawerCloseButton";var y=r(91822),g=r(9628);let v={},j=(0,a.d)((e,t)=>{let r=(0,s.w)("DrawerContent",v,e),{classNames:n,className:a,style:i,styles:l,vars:c,children:d,radius:p,...f}=r,m=u(),w=m.scrollAreaComponent||g.Z;return(0,o.jsx)(y.G,{...m.getStyles("content",{className:a,style:i,styles:l,classNames:n}),innerProps:m.getStyles("inner",{className:a,style:i,styles:l,classNames:n}),ref:t,...f,radius:p||m.radius||0,children:(0,o.jsx)(w,{style:{height:"100vh"},children:d})})});j.classes=d,j.displayName="@mantine/core/DrawerContent";var b=r(79208);let x={},C=(0,a.d)((e,t)=>{let r=(0,s.w)("DrawerHeader",x,e),{classNames:n,className:a,style:i,styles:l,vars:c,...d}=r,p=u();return(0,o.jsx)(b.o,{ref:t,...p.getStyles("header",{classNames:n,style:i,styles:l,className:a}),...d})});C.classes=d,C.displayName="@mantine/core/DrawerHeader";var O=r(23461);let D={},k=(0,a.d)((e,t)=>{let r=(0,s.w)("DrawerOverlay",D,e),{classNames:n,className:a,style:i,styles:l,vars:c,...d}=r,p=u();return(0,o.jsx)(O.e,{ref:t,...p.getStyles("overlay",{classNames:n,style:i,styles:l,className:a}),...d})});k.classes=d,k.displayName="@mantine/core/DrawerOverlay";var S=r(58898),P=r(91482),_=r(11200),I=r(46690),z=r(89027),Z=r(74610);let M={top:"slide-down",bottom:"slide-up",left:"slide-right",right:"slide-left"},N={top:"slide-down",bottom:"slide-up",right:"slide-right",left:"slide-left"},L={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,n.w)("modal"),position:"left"},A=(0,_.Z)((e,{position:t,size:r,offset:o})=>({root:{"--drawer-size":(0,P.ap)(r,"drawer-size"),"--drawer-flex":function(e){if("top"===e||"bottom"===e)return"0 0 calc(100% - var(--drawer-offset, 0rem) * 2)"}(t),"--drawer-height":"left"===t||"right"===t?void 0:"var(--drawer-size)","--drawer-align":function(e){switch(e){case"top":return"flex-start";case"bottom":return"flex-end";default:return}}(t),"--drawer-justify":"right"===t?"flex-end":void 0,"--drawer-offset":(0,S.h)(o)}})),B=(0,a.d)((e,t)=>{let r=(0,s.w)("DrawerRoot",L,e),{classNames:n,className:a,style:i,styles:l,unstyled:u,vars:p,scrollAreaComponent:f,position:m,transitionProps:w,radius:h,...y}=r,{dir:g}=(0,z.gm)(),v=(0,I.y)({name:"Drawer",classes:d,props:r,className:a,style:i,classNames:n,styles:l,unstyled:u,vars:p,varsResolver:A}),j=("rtl"===g?N:M)[m];return(0,o.jsx)(c,{value:{scrollAreaComponent:f,getStyles:v,radius:h},children:(0,o.jsx)(Z.e,{ref:t,...v("root"),transitionProps:{transition:j,...w},unstyled:u,...y})})});B.classes=d,B.displayName="@mantine/core/DrawerRoot";var E=r(92682);let R={},q=(0,a.d)((e,t)=>{let r=(0,s.w)("DrawerTitle",R,e),{classNames:n,className:a,style:i,styles:l,vars:c,...d}=r,p=u();return(0,o.jsx)(E.q,{ref:t,...p.getStyles("title",{classNames:n,style:i,styles:l,className:a}),...d})});q.classes=d,q.displayName="@mantine/core/DrawerTitle";let F={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,n.w)("modal"),withOverlay:!0,withCloseButton:!0},T=(0,a.d)((e,t)=>{let{title:r,withOverlay:n,overlayProps:a,withCloseButton:i,closeButtonProps:l,children:c,...u}=(0,s.w)("Drawer",F,e),d=!!r||i;return(0,o.jsxs)(B,{ref:t,...u,children:[n&&(0,o.jsx)(k,{...a}),(0,o.jsxs)(j,{children:[d&&(0,o.jsxs)(C,{children:[r&&(0,o.jsx)(q,{children:r}),i&&(0,o.jsx)(h,{...l})]}),(0,o.jsx)(f,{children:c})]})]})});T.classes=d,T.displayName="@mantine/core/Drawer",T.Root=B,T.Overlay=k,T.Content=j,T.Body=f,T.Header=C,T.Title=q,T.CloseButton=h},20992:function(e,t,r){r.d(t,{f:function(){return y}});var o=r(52322);r(2784);var n=r(97263),s=r(11200),a=r(68755),i=r(38483),l=r(46690),c=r(28559),u=r(82027),d=r(12491),p=r(87170),f=r(96321),m={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let w={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,n.w)("overlay")},h=(0,s.Z)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),y=(0,u.d)((e,t)=>{let r=(0,i.w)("LoadingOverlay",w,e),{classNames:n,className:s,style:u,styles:y,unstyled:g,vars:v,transitionProps:j,loaderProps:b,overlayProps:x,visible:C,zIndex:O,...D}=r,k=(0,a.rZ)(),S=(0,l.y)({name:"LoadingOverlay",classes:m,props:r,className:s,style:u,classNames:n,styles:y,unstyled:g,vars:v,varsResolver:h}),P={...w.overlayProps,...x};return(0,o.jsx)(f.u,{transition:"fade",...j,mounted:!!C,children:e=>(0,o.jsxs)(c.x,{...S("root",{style:e}),ref:t,...D,children:[(0,o.jsx)(d.a,{...S("loader"),unstyled:g,...b}),(0,o.jsx)(p.a,{...P,...S("overlay"),darkHidden:!0,unstyled:g,color:x?.color||k.white}),(0,o.jsx)(p.a,{...P,...S("overlay"),lightHidden:!0,unstyled:g,color:x?.color||k.colors.dark[5]})]})})});y.classes=m,y.displayName="@mantine/core/LoadingOverlay"},60284:function(e,t,r){r.d(t,{W:function(){return j}});var o=r(52322),n=r(40489),s=r(66178),a=r(9341);r(2784);var i=r(91482),l=r(11200),c=r(51477),u=r(46690),d=r(38483),p=r(97072),f=r(82027),m=r(54813),w=r(6941),h=r(73063),y={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let g={visibilityToggleIcon:({reveal:e})=>(0,o.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,o.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},v=(0,l.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.ap)(t,"psi-icon-size"),"--psi-button-size":(0,i.ap)(t,"psi-button-size")}})),j=(0,f.d)((e,t)=>{let r=(0,d.w)("PasswordInput",g,e),{classNames:i,className:l,style:f,styles:h,unstyled:j,vars:b,required:x,error:C,leftSection:O,disabled:D,id:k,variant:S,inputContainer:P,description:_,label:I,size:z,errorProps:Z,descriptionProps:M,labelProps:N,withAsterisk:L,inputWrapperOrder:A,wrapperProps:B,radius:E,rightSection:R,rightSectionWidth:q,rightSectionPointerEvents:F,leftSectionWidth:T,visible:H,defaultVisible:V,onVisibilityChange:W,visibilityToggleIcon:Y,visibilityToggleButtonProps:K,rightSectionProps:U,leftSectionProps:X,leftSectionPointerEvents:G,mod:J,...Q}=r,$=(0,s.M)(k),[ee,et]=(0,a.C)({value:H,defaultValue:V,finalValue:!1,onChange:W}),er=()=>et(!ee),eo=(0,u.y)({name:"PasswordInput",classes:y,props:r,className:l,style:f,classNames:i,styles:h,unstyled:j,vars:b,varsResolver:v}),{resolvedClassNames:en,resolvedStyles:es}=(0,c.h)({classNames:i,styles:h,props:r}),{styleProps:ea,rest:ei}=(0,p.c)(Q),el=(0,o.jsx)(m.A,{...eo("visibilityToggle"),disabled:D,radius:E,"aria-hidden":!K,tabIndex:-1,...K,variant:"subtle",color:"gray",unstyled:j,onMouseDown:e=>{e.preventDefault(),K?.onMouseDown?.(e),er()},onKeyDown:e=>{K?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),er())},children:(0,o.jsx)(Y,{reveal:ee})});return(0,o.jsx)(w.I.Wrapper,{required:x,id:$,label:I,error:C,description:_,size:z,classNames:en,styles:es,__staticSelector:"PasswordInput",errorProps:Z,descriptionProps:M,unstyled:j,withAsterisk:L,inputWrapperOrder:A,inputContainer:P,variant:S,labelProps:{...N,htmlFor:$},mod:J,...eo("root"),...ea,...B,children:(0,o.jsx)(w.I,{component:"div",error:C,leftSection:O,size:z,classNames:{...en,input:(0,n.Z)(y.input,en.input)},styles:es,radius:E,disabled:D,__staticSelector:"PasswordInput",rightSectionWidth:q,rightSection:R??el,variant:S,unstyled:j,leftSectionWidth:T,rightSectionPointerEvents:F||"all",rightSectionProps:U,leftSectionProps:X,leftSectionPointerEvents:G,withAria:!1,children:(0,o.jsx)("input",{required:x,"data-invalid":!!C||void 0,"data-with-left-section":!!O||void 0,...eo("innerInput"),disabled:D,id:$,ref:t,...ei,autoComplete:ei.autoComplete||"off",type:ee?"text":"password"})})})});j.classes={...h.M.classes,...y},j.displayName="@mantine/core/PasswordInput"},3900:function(e,t,r){r.d(t,{q:function(){return n}});var o=r(2784);function n(e=!1,t){let{onOpen:r,onClose:n}=t||{},[s,a]=(0,o.useState)(e),i=(0,o.useCallback)(()=>{a(e=>e||(r?.(),!0))},[r]),l=(0,o.useCallback)(()=>{a(e=>e?(n?.(),!1):e)},[n]),c=(0,o.useCallback)(()=>{s?l():i()},[l,i,s]);return[s,{open:i,close:l,toggle:c}]}}}]);