"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3242],{66471:function(e){e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var r,o,a,u=a[o];if(!e(t[u],n[u]))return!1}return!0}return t!=t&&n!=n}},28380:function(e,t,n){function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,a,u=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?a=Object.create(e.__proto__||null):"[object Array]"===i?a=Array(e.length):"[object Set]"===i?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===i?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===i?a=new Date(+e):"[object RegExp]"===i?a=new RegExp(e.source,e.flags):"[object DataView]"===i?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?a=e.slice(0):"Array]"===i.slice(-6)&&(a=new e.constructor(e)),a){for(n=Object.getOwnPropertySymbols(e);u<n.length;u++)r(a,n[u],Object.getOwnPropertyDescriptor(e,n[u]));for(u=0,n=Object.getOwnPropertyNames(e);u<n.length;u++)Object.hasOwnProperty.call(a,t=n[u])&&a[t]===e[t]||r(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}n.d(t,{Y:function(){return o}})},68058:function(e,t,n){n.d(t,{T:function(){return l}});var r=n(27378),o=n(7033),a=n(62339),u=n(56926);let i=`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => ({
      disabled: payload.field === 'name',
    }),
  });

  return (
    <>
      <TextInput {...form.getInputProps('name')} label="Name" placeholder="Name" />
      <NumberInput {...form.getInputProps('age')} label="Age" placeholder="Age" mt="md" />
    </>
  );
}
`,l={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",age:""},enhanceGetInputProps:e=>({disabled:"name"===e.field})});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name"),label:"Name",placeholder:"Name"}),r.createElement(a.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}))},code:i,centered:!0,maxWidth:340}},18748:function(e,t,n){n.d(t,{W:function(){return m}});var r=n(27378),o=n(7033),a=n(62339),u=n(8671),i=n(56926);let l=`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (!payload.form.initialized) {
        return { disabled: true };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput {...form.getInputProps('name')} label="Your name" placeholder="Your name" />
      <NumberInput {...form.getInputProps('age')} label="Age" placeholder="Age" mt="md" />
      <Button onClick={() => form.initialize({ name: 'John', age: 20 })} mt="md">
        Initialize form
      </Button>
    </>
  );
}
`,m={type:"code",component:function(){let e=(0,i.c)({initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name"),label:"Your name",placeholder:"Your name"}),r.createElement(a.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}),r.createElement(u.z,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md"},"Initialize form"))},code:l,centered:!0,maxWidth:340}},99166:function(e,t,n){n.d(t,{w:function(){return l}});var r=n(27378),o=n(7033),a=n(62339),u=n(56926);let i=`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (payload.options.fieldType === 'name') {
        return {
          label: 'Your name',
          placeholder: 'Your name',
          withAsterisk: true,
          description: 'Your personal information is stored securely. (Just kidding!)',
        };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput {...form.getInputProps('name', { fieldType: 'name' })} />
      <NumberInput {...form.getInputProps('age')} label="Age" placeholder="Age" mt="md" />
    </>
  );
}
`,l={type:"code",component:function(){let e=(0,u.c)({initialValues:{name:"",age:""},enhanceGetInputProps:e=>"name"===e.options.fieldType?{label:"Your name",placeholder:"Your name",withAsterisk:!0,description:"Your personal information is stored securely. (Just kidding!)"}:{}});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name",{fieldType:"name"})}),r.createElement(a.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}))},code:i,centered:!0,maxWidth:340}},97900:function(e,t,n){n.d(t,{j:function(){return s}});var r=n(27378),o=n(7033),a=n(62339),u=n(8671),i=n(56926),l=n(31877),m=n(52865);let c=`
import { Button, NumberInput, TextInput } from '@mantine/core';
import { isInRange, isNotEmpty, useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function apiRequest(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', age: 25 });
    }, 1000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    initialValues: { name: '', age: 0 },
    validate: {
      name: isNotEmpty('Name is required'),
      age: isInRange({ min: 18 }, 'You must be at least 18 to register'),
    },
  });

  return (
    <>
      <TextInput {...form.getInputProps('name')} label="Name" placeholder="Name" />
      <NumberInput {...form.getInputProps('age')} label="Age" placeholder="Age" mt="md" />
      <Button onClick={() => apiRequest().then((values) => form.initialize(values))} mt="md">
        Initialize form
      </Button>
    </>
  );
}
`,s={type:"code",component:function(){let e=(0,i.c)({initialValues:{name:"",age:0},validate:{name:(0,l.U)("Name is required"),age:(0,m.m)({min:18},"You must be at least 18 to register")}});return r.createElement(r.Fragment,null,r.createElement(o.o,{...e.getInputProps("name"),label:"Name",placeholder:"Name"}),r.createElement(a.Y,{...e.getInputProps("age"),label:"Age",placeholder:"Age",mt:"md"}),r.createElement(u.z,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md"},"Initialize form"))},code:c,centered:!0,maxWidth:340}},62339:function(e,t,n){n.d(t,{Y:function(){return E}});var r=n(27378),o=n(40624),a=n(62740),u=n(58675),i=n(28086),l=n(72840),m=n(92082),c=n(83453),s=n(5564),p=n(6231),f=n(96739),d=n(20410),g=n(23163),b=n(19397);function h({direction:e,style:t,...n}){return r.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var v={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"};let y=/^-0(\.0*)?$/,I=/^-?0\d+$/;function w(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let N={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},P=(0,c.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,m.ap)(t,"ni-chevron-size")}})),E=(0,d.d)((e,t)=>{let n=(0,f.w)("NumberInput",N,e),{className:m,classNames:c,styles:d,unstyled:E,vars:A,onChange:j,onValueChange:O,value:V,defaultValue:D,max:F,min:x,step:k,hideControls:T,rightSection:Y,isAllowed:R,clampBehavior:z,onBlur:_,allowDecimal:C,decimalScale:S,onKeyDown:B,handlersRef:M,startValue:G,disabled:J,rightSectionPointerEvents:L,allowNegative:W,readOnly:U,size:q,rightSectionWidth:Z,stepHoldInterval:$,stepHoldDelay:K,allowLeadingZeros:X,...H}=n,Q=(0,p.y)({name:"NumberInput",classes:v,props:n,classNames:c,styles:d,unstyled:E,vars:A,varsResolver:P}),{resolvedClassNames:ee,resolvedStyles:et}=(0,s.h)({classNames:c,styles:d,props:n}),[en,er]=(0,u.C)({value:V,defaultValue:D,onChange:j}),eo=void 0!==K&&void 0!==$,ea=(0,r.useRef)(null),eu=(0,r.useRef)(null),ei=(0,r.useRef)(0),el=(0,r.useRef)();el.current=()=>{"number"!=typeof en||Number.isNaN(en)?er((0,i.u)(G,x,F)):void 0!==F?er(en+k<=F?en+k:F):er(en+k)};let em=(0,r.useRef)();em.current=()=>{"number"!=typeof en||Number.isNaN(en)?er((0,i.u)(G,x,F)):er(function({value:e,min:t,step:n=1,allowNegative:r}){let o=e-n;return void 0!==t&&o<t?t:!r&&o<0&&void 0===t?e:o}({value:en,min:x,step:k,allowNegative:W}))},(0,l.kR)(M,{increment:el.current,decrement:em.current});let ec=e=>{e?el.current():em.current(),ei.current+=1},es=e=>{if(ec(e),eo){let t="number"==typeof $?$:$(ei.current);eu.current=window.setTimeout(()=>es(e),t)}},ep=(e,t)=>{e.preventDefault(),ea.current?.focus(),ec(t),eo&&(eu.current=window.setTimeout(()=>es(t),K))},ef=()=>{eu.current&&window.clearTimeout(eu.current),eu.current=null,ei.current=0},ed=r.createElement("div",{...Q("controls")},r.createElement(b.k,{...Q("control"),tabIndex:-1,"aria-hidden":!0,disabled:J||"number"==typeof en&&void 0!==F&&en>=F,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ep(e,!0)},onPointerUp:ef,onPointerLeave:ef},r.createElement(h,{direction:"up"})),r.createElement(b.k,{...Q("control"),tabIndex:-1,"aria-hidden":!0,disabled:J||"number"==typeof en&&void 0!==x&&en<=x,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ep(e,!1)},onPointerUp:ef,onPointerLeave:ef},r.createElement(h,{direction:"down"})));return r.createElement(g.M,{component:a.h3,allowNegative:W,className:(0,o.Z)(v.root,m),size:q,...H,readOnly:U,disabled:J,value:en,getInputRef:(0,l.Yx)(t,ea),onValueChange:(e,t)=>{if("event"===t.source){var n;er(!(("number"==typeof(n=e.floatValue)?n<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(n)))&&!Number.isNaN(n))||y.test(e.value)||X&&I.test(e.value)?e.value:e.floatValue)}O?.(e,t)},rightSection:T||U?Y:Y||ed,classNames:ee,styles:et,unstyled:E,__staticSelector:"NumberInput",decimalScale:C?S:0,onKeyDown:e=>{B?.(e),U||("ArrowUp"===e.key&&(e.preventDefault(),el.current()),"ArrowDown"===e.key&&(e.preventDefault(),em.current()))},rightSectionPointerEvents:L??(J?"none":void 0),rightSectionWidth:Z??`var(--ni-right-section-width-${q||"sm"})`,allowLeadingZeros:X,onBlur:e=>{if(_?.(e),"blur"===z&&"number"==typeof en){let e=(0,i.u)(en,x,F);e!==en&&er((0,i.u)(en,x,F))}},isAllowed:e=>"strict"===z?R?R(e)&&w(e.floatValue,x,F):w(e.floatValue,x,F):!R||R(e)})});E.classes={...g.M.classes,...v},E.displayName="@mantine/core/NumberInput"},52865:function(e,t,n){n.d(t,{m:function(){return r}});function r({min:e,max:t},n){let r=n||!0;return n=>{if("number"!=typeof n)return r;let o=!0;return"number"==typeof e&&n<e&&(o=!1),"number"==typeof t&&n>t&&(o=!1),o?null:r}}},31877:function(e,t,n){n.d(t,{U:function(){return r}});function r(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}}}]);