"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56926],{50776:function(e,t,r){r.d(t,{n:function(){return n}});let n="__MANTINE_FORM_INDEX__"},56926:function(e,t,r){r.d(t,{c:function(){return E}});var n=r(27378),l=r(66471);let i="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function a(e,t){i(()=>{if(e)return window.addEventListener(e,t),()=>window.removeEventListener(e,t)},[e])}function u(e){return null===e||"object"!=typeof e?{}:Object.keys(e).reduce((t,r)=>{let n=e[r];return null!=n&&!1!==n&&(t[r]=n),t},{})}function o(e,t){let r=Object.keys(e);if("string"==typeof t){let n=r.filter(e=>e.startsWith(`${t}.`));return e[t]||n.some(t=>e[t])||!1}return r.some(t=>e[t])}function s(e,t){if(null===t||"object"!=typeof t)return{};let r={...t};return Object.keys(t).forEach(t=>{t.includes(`${String(e)}.`)&&delete r[t]}),r}function f(e,t){let r=e.substring(t.length+1).split(".")[0];return parseInt(r,10)}function c(e,t,r,n){if(void 0===t)return r;let l=`${String(e)}`,i=r;-1===n&&(i=s(`${l}.${t}`,i));let a={...i},u=new Set;return Object.entries(i).filter(([e])=>{if(!e.startsWith(`${l}.`))return!1;let r=f(e,l);return!Number.isNaN(r)&&r>=t}).forEach(([e,t])=>{let r=f(e,l),i=e.replace(`${l}.${r}`,`${l}.${r+n}`);a[i]=t,u.add(i),u.has(e)||delete a[e]}),a}function d(e){return"string"!=typeof e?[]:e.split(".")}function m(e,t){let r=d(e);if(0===r.length||"object"!=typeof t||null===t)return;let n=t[r[0]];for(let e=1;e<r.length&&void 0!==n;e+=1)n=n[r[e]];return n}var p=r(28380);function y(e,t,r){let n=d(e);if(0===n.length)return r;let l=(0,p.Y)(r);if(1===n.length)return l[n[0]]=t,l;let i=l[n[0]];for(let e=1;e<n.length-1;e+=1){if(void 0===i)return l;i=i[n[e]]}return i[n[n.length-1]]=t,l}function b(e){let t=u(e);return{hasErrors:Object.keys(t).length>0,errors:t}}function h(e,t){return"function"==typeof e?b(e(t)):b(function e(t,r,n="",l={}){return"object"!=typeof t||null===t?l:Object.keys(t).reduce((l,i)=>{let a=t[i],u=`${""===n?"":`${n}.`}${i}`,o=m(u,r),s=!1;return"function"==typeof a&&(l[u]=a(o,r,u)),"object"==typeof a&&Array.isArray(o)&&(s=!0,o.forEach((t,n)=>e(a,r,`${u}.${n}`,l))),"object"!=typeof a||"object"!=typeof o||null===o||s||e(a,r,u,l),l},l)}(e,t))}function $(e,t,r){if("string"!=typeof e)return{hasError:!1,error:null};let n=h(t,r),l=Object.keys(n.errors).find(t=>e.split(".").every((e,r)=>e===t.split(".")[r]));return{hasError:!!l,error:l?n.errors[l]:null}}var k=r(50776);function v(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]/g,`.${k.n}`)))}function E({name:e,initialValues:t,initialErrors:r={},initialDirty:i={},initialTouched:f={},clearInputErrorOnChange:d=!0,validateInputOnChange:p=!1,validateInputOnBlur:b=!1,onValuesChange:k,transformValues:E=e=>e,enhanceGetInputProps:g,validate:C}={}){let[j,A]=(0,n.useState)(f),[O,w]=(0,n.useState)(i),[I,S]=(0,n.useState)(t||{}),[_,L]=(0,n.useState)(u(r)),[N,T]=(0,n.useState)(!1),D=(0,n.useRef)(t||{}),F=e=>{D.current=e},x=(0,n.useCallback)(e=>{N||(T(!0),S(e),F(e))},[N]),M=(0,n.useCallback)(()=>A({}),[]),V=(0,n.useCallback)(e=>L(t=>u("function"==typeof e?e(t):e)),[]),W=(0,n.useCallback)(()=>L({}),[]),H=(0,n.useCallback)(()=>{S(D.current),W(),w({}),M()},[]),P=(0,n.useCallback)((e,t)=>V(r=>({...r,[e]:t})),[]),R=(0,n.useCallback)(e=>V(t=>{if("string"!=typeof e)return t;let r={...t};return delete r[e],r}),[]),z=(0,n.useCallback)(e=>w(t=>{if("string"!=typeof e)return t;let r=s(e,t);return delete r[e],r}),[]),B=(0,n.useCallback)((e,t)=>{let r=v(e,p);z(e),A(t=>({...t,[e]:!0})),S(n=>{let l=y(e,t,n);if(r){let t=$(e,C,l);t.hasError?P(e,t.error):R(e)}return k?.(l,n),l}),!r&&d&&P(e,null)},[]),X=(0,n.useCallback)(e=>{S(t=>{let r="function"==typeof e?e(t):e,n={...t,...r};return k?.(n,t),n}),d&&W()},[]),Y=(0,n.useCallback)((e,t)=>{z(e),S(r=>{let n=function(e,{from:t,to:r},n){let l=m(e,n);if(!Array.isArray(l))return n;let i=[...l],a=l[t];return i.splice(t,1),i.splice(r,0,a),y(e,i,n)}(e,t,r);return k?.(n,r),n}),L(r=>(function(e,{from:t,to:r},n){let l=`${e}.${t}`,i=`${e}.${r}`,a={...n};return Object.keys(n).every(e=>{let t,r;if(e.startsWith(l)&&(t=e,r=e.replace(l,i)),e.startsWith(i)&&(t=e.replace(i,l),r=e),t&&r){let e=a[t],n=a[r];return void 0===n?delete a[t]:a[t]=n,void 0===e?delete a[r]:a[r]=e,!1}return!0}),a})(e,t,r))},[]),Z=(0,n.useCallback)((e,t)=>{z(e),S(r=>{let n=function(e,t,r){let n=m(e,r);return Array.isArray(n)?y(e,n.filter((e,r)=>r!==t),r):r}(e,t,r);return k?.(n,r),n}),L(r=>c(e,t,r,-1))},[]),q=(0,n.useCallback)((e,t,r)=>{z(e),S(n=>{let l=function(e,t,r,n){let l=m(e,n);if(!Array.isArray(l))return n;let i=[...l];return i.splice("number"==typeof r?r:i.length,0,t),y(e,i,n)}(e,t,r,n);return k?.(l,n),l}),L(t=>c(e,r,t,1))},[]),G=(0,n.useCallback)(()=>{let e=h(C,I);return L(e.errors),e},[I,C]),J=(0,n.useCallback)(e=>{let t=$(e,C,I);return t.hasError?P(e,t.error):R(e),t},[I,C]),K=(0,n.useCallback)(e=>{e.preventDefault(),H()},[]),Q=(0,n.useCallback)(e=>o(j,e),[j]),U=(0,n.useCallback)(e=>e?!$(e,C,I).hasError:!h(C,I).hasErrors,[I,C]),ee={initialized:N,values:I,errors:_,initialize:x,setValues:X,setInitialValues:F,setErrors:V,setFieldValue:B,setFieldError:P,clearFieldError:R,clearErrors:W,reset:H,validate:G,validateField:J,reorderListItem:Y,removeListItem:Z,insertListItem:q,getInputProps:(e,{type:t="input",withError:r=!0,withFocus:n=!0,...l}={})=>{var i;let a=(i=t=>B(e,t),e=>{if(e){if("function"==typeof e)i(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;t instanceof HTMLInputElement?"checkbox"===t.type?i(t.checked):i(t.value):(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&i(t.value)}else i(e)}else i(e)}),u={onChange:a};return r&&(u.error=_[e]),"checkbox"===t?u.checked=m(e,I):u.value=m(e,I),n&&(u.onFocus=()=>A(t=>({...t,[e]:!0})),u.onBlur=()=>{if(v(e,b)){let t=$(e,C,I);t.hasError?P(e,t.error):R(e)}}),Object.assign(u,g?.({inputProps:u,field:e,options:{type:t,withError:r,withFocus:n,...l},form:ee}))},onSubmit:(e,t)=>r=>{r?.preventDefault();let n=G();n.hasErrors?t?.(n.errors,I,r):e?.(E(I),r)},onReset:K,isDirty:e=>{if(e){let t=m(e,O);if("boolean"==typeof t)return t;let r=m(e,I),n=m(e,D.current);return!l(r,n)}let t=Object.keys(O).length>0;return t?o(O):!l(I,D.current)},isTouched:Q,setTouched:A,setDirty:w,resetTouched:M,resetDirty:e=>{let t=e?{...I,...e}:I;F(t),w({})},isValid:U,getTransformedValues:e=>E(e||I)};return e&&function(e){if(!/^[0-9a-zA-Z-]+$/.test(e))throw Error(`[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`)}(e),a(`mantine-form:${e}:set-field-value`,e=>ee.setFieldValue(e.detail.path,e.detail.value)),a(`mantine-form:${e}:set-values`,e=>ee.setValues(e.detail)),a(`mantine-form:${e}:set-initial-values`,e=>ee.setInitialValues(e.detail)),a(`mantine-form:${e}:set-errors`,e=>ee.setErrors(e.detail)),a(`mantine-form:${e}:set-field-error`,e=>ee.setFieldError(e.detail.path,e.detail.error)),a(`mantine-form:${e}:clear-field-error`,e=>ee.clearFieldError(e.detail)),a(`mantine-form:${e}:clear-errors`,ee.clearErrors),a(`mantine-form:${e}:reset`,ee.reset),a(`mantine-form:${e}:validate`,ee.validate),a(`mantine-form:${e}:validate-field`,e=>ee.validateField(e.detail)),a(`mantine-form:${e}:reorder-list-item`,e=>ee.reorderListItem(e.detail.path,e.detail.payload)),a(`mantine-form:${e}:remove-list-item`,e=>ee.removeListItem(e.detail.path,e.detail.index)),a(`mantine-form:${e}:insert-list-item`,e=>ee.insertListItem(e.detail.path,e.detail.item,e.detail.index)),a(`mantine-form:${e}:set-dirty`,e=>ee.setDirty(e.detail)),a(`mantine-form:${e}:set-touched`,e=>ee.setTouched(e.detail)),a(`mantine-form:${e}:reset-dirty`,e=>ee.resetDirty(e.detail)),a(`mantine-form:${e}:reset-touched`,ee.resetTouched),ee}}}]);