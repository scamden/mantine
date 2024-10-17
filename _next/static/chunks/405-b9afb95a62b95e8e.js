"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{56624:function(e,r,t){t.d(r,{n:function(){return l}});let l="__MANTINE_FORM_INDEX__"},5752:function(e,r,t){t.d(r,{E:function(){return l}});function l(e){return r=>{if(r){if("function"==typeof r)e(r);else if("object"==typeof r&&"nativeEvent"in r){let{currentTarget:t}=r;t instanceof HTMLInputElement?"checkbox"===t.type?e(t.checked):e(t.value):(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&e(t.value)}else e(r)}else e(r)}}},405:function(e,r,t){t.d(r,{c:function(){return $}});var l=t(2784);let n="undefined"!=typeof window?l.useLayoutEffect:l.useEffect;function u(e,r){n(()=>{if(e)return window.addEventListener(e,r),()=>window.removeEventListener(e,r)},[e])}var a=t(5752);function s(e){return null===e||"object"!=typeof e?{}:Object.keys(e).reduce((r,t)=>{let l=e[t];return null!=l&&!1!==l&&(r[t]=l),r},{})}function i(e,r){if(null===r||"object"!=typeof r)return{};let t={...r};return Object.keys(r).forEach(r=>{r.includes(`${String(e)}.`)&&delete t[r]}),t}function o(e,r){return parseInt(e.substring(r.length+1).split(".")[0],10)}function c(e,r,t,l){if(void 0===r)return t;let n=`${String(e)}`,u=t;-1===l&&(u=i(`${n}.${r}`,u));let a={...u},s=new Set;return Object.entries(u).filter(([e])=>{if(!e.startsWith(`${n}.`))return!1;let t=o(e,n);return!Number.isNaN(t)&&t>=r}).forEach(([e,r])=>{let t=o(e,n),u=e.replace(`${n}.${t}`,`${n}.${t+l}`);a[u]=r,s.add(u),s.has(e)||delete a[e]}),a}function f(e){return"string"!=typeof e?[]:e.split(".")}function d(e,r){let t=f(e);if(0===t.length||"object"!=typeof r||null===r)return;let l=r[t[0]];for(let e=1;e<t.length&&null!=l;e+=1)l=l[t[e]];return l}var p=t(15463);function h(e,r,t){let l=f(e);if(0===l.length)return t;let n=(0,p.Y)(t);if(1===l.length)return n[l[0]]=r,n;let u=n[l[0]];for(let e=1;e<l.length-1;e+=1){if(void 0===u)return n;u=u[l[e]]}return u[l[l.length-1]]=r,n}var b=t(69378);function m(e,r){let t=Object.keys(e);if("string"==typeof r){let l=t.filter(e=>e.startsWith(`${r}.`));return e[r]||l.some(r=>e[r])||!1}return t.some(r=>e[r])}function y(e,r){return e?`${e}-${r.toString()}`:r.toString()}function E(e){let r=s(e);return{hasErrors:Object.keys(r).length>0,errors:r}}function k(e,r){return"function"==typeof e?E(e(r)):E(function e(r,t,l="",n={}){return"object"!=typeof r||null===r?n:Object.keys(r).reduce((n,u)=>{let a=r[u],s=`${""===l?"":`${l}.`}${u}`,i=d(s,t),o=!1;return"function"==typeof a&&(n[s]=a(i,t,s)),"object"==typeof a&&Array.isArray(i)&&(o=!0,i.forEach((r,l)=>e(a,t,`${s}.${l}`,n))),"object"!=typeof a||"object"!=typeof i||null===i||o||e(a,t,s,n),n},n)}(e,r))}function v(e,r,t){if("string"!=typeof e)return{hasError:!1,error:null};let l=k(r,t),n=Object.keys(l.errors).find(r=>e.split(".").every((e,t)=>e===r.split(".")[t]));return{hasError:!!n,error:n?l.errors[n]:null}}var V=t(56365);function $({name:e,mode:r="controlled",initialValues:t,initialErrors:n={},initialDirty:o={},initialTouched:f={},clearInputErrorOnChange:p=!0,validateInputOnChange:E=!1,validateInputOnBlur:$=!1,onValuesChange:C,transformValues:g=e=>e,enhanceGetInputProps:S,validate:F}={}){let D=function(e){let[r,t]=(0,l.useState)(s(e)),n=(0,l.useRef)(r),u=(0,l.useCallback)(e=>{t(r=>{let t=s("function"==typeof e?e(r):e);return n.current=t,t})},[]),a=(0,l.useCallback)(()=>u({}),[]),i=(0,l.useCallback)(e=>{void 0!==n.current[e]&&u(r=>{let t={...r};return delete t[e],t})},[r]),o=(0,l.useCallback)((e,r)=>{null==r||!1===r?i(e):n.current[e]!==r&&u(t=>({...t,[e]:r}))},[r]);return{errorsState:r,setErrors:u,clearErrors:a,setFieldError:o,clearFieldError:i}}(n),T=function({initialValues:e,onValuesChange:r,mode:t}){let n=(0,l.useRef)(!1),[u,a]=(0,l.useState)(e||{}),s=(0,l.useRef)(u),i=(0,l.useRef)(u),o=(0,l.useCallback)(({values:e,subscribers:t,updateState:l=!0,mergeWithPreviousValues:n=!0})=>{let u=s.current,i=e instanceof Function?e(s.current):e,o=n?{...u,...i}:i;s.current=o,l&&a(o),r?.(o,u),t?.filter(Boolean).forEach(e=>e({updatedValues:o,previousValues:u}))},[r]),c=(0,l.useCallback)(e=>{let r=d(e.path,s.current),t=e.value instanceof Function?e.value(r):e.value;if(r!==t){let r=s.current,l=h(e.path,t,s.current);o({values:l,updateState:e.updateState}),e.subscribers?.filter(Boolean).forEach(t=>t({path:e.path,updatedValues:l,previousValues:r}))}},[o]),f=(0,l.useCallback)(e=>{i.current=e},[]),p=(0,l.useCallback)((e,r)=>{n.current||(n.current=!0,o({values:e,updateState:"controlled"===t}),f(e),r())},[o]),b=(0,l.useCallback)(()=>{o({values:i.current,updateState:!0,mergeWithPreviousValues:!1})},[o]),m=(0,l.useCallback)(()=>s.current,[]),y=(0,l.useCallback)(()=>i.current,[]);return{initialized:n,stateValues:u,refValues:s,valuesSnapshot:i,setValues:o,setFieldValue:c,resetValues:b,setValuesSnapshot:f,initialize:p,getValues:m,getValuesSnapshot:y}}({initialValues:t,onValuesChange:C,mode:r}),j=function({initialDirty:e,initialTouched:r,mode:t,$values:n}){let[u,a]=(0,l.useState)(r),[s,o]=(0,l.useState)(e),c=(0,l.useRef)(r),f=(0,l.useRef)(e),p=(0,l.useCallback)(e=>{let r="function"==typeof e?e(c.current):e;c.current=r,"controlled"===t&&a(r)},[]),h=(0,l.useCallback)((e,r=!1)=>{let l="function"==typeof e?e(f.current):e;f.current=l,("controlled"===t||r)&&o(l)},[]),y=(0,l.useCallback)(()=>p({}),[]),E=(0,l.useCallback)((e,r)=>{p(t=>m(t,e)===r?t:{...t,[e]:r})},[]),k=(0,l.useCallback)((e,r,t)=>{h(t=>m(t,e)===r?t:{...t,[e]:r},t)},[]),v=(0,l.useCallback)((e,r)=>{let t=m(f.current,e),l=!b(d(e,n.getValuesSnapshot()),r),u=i(e,f.current);u[e]=l,h(u,t!==l)},[]),V=(0,l.useCallback)(e=>m(c.current,e),[]),$=(0,l.useCallback)(e=>h(r=>{if("string"!=typeof e)return r;let t=i(e,r);return(delete t[e],b(t,r))?r:t}),[]),C=(0,l.useCallback)(e=>{if(e){let r=d(e,f.current);return"boolean"==typeof r?r:!b(d(e,n.refValues.current),d(e,n.valuesSnapshot.current))}return Object.keys(f.current).length>0?m(f.current):!b(n.refValues.current,n.valuesSnapshot.current)},[]),g=(0,l.useCallback)(()=>f.current,[]),S=(0,l.useCallback)(()=>c.current,[]);return{touchedState:u,dirtyState:s,touchedRef:c,dirtyRef:f,setTouched:p,setDirty:h,resetDirty:e=>{let r=e?{...e,...n.refValues.current}:n.refValues.current;n.setValuesSnapshot(r),h({})},resetTouched:y,isTouched:V,setFieldTouched:E,setFieldDirty:k,setTouchedState:a,setDirtyState:o,clearFieldDirty:$,isDirty:C,getDirty:g,getTouched:S,setCalculatedFieldDirty:v}}({initialDirty:o,initialTouched:f,$values:T,mode:r}),I=function({$values:e,$errors:r,$status:t}){return{reorderListItem:(0,l.useCallback)((l,n)=>{t.clearFieldDirty(l),r.setErrors(e=>(function(e,{from:r,to:t},l){let n=`${e}.${r}`,u=`${e}.${t}`,a={...l};return Object.keys(l).every(e=>{let r,t;if(e.startsWith(n)&&(r=e,t=e.replace(n,u)),e.startsWith(u)&&(r=e.replace(u,n),t=e),r&&t){let e=a[r],l=a[t];return void 0===l?delete a[r]:a[r]=l,void 0===e?delete a[t]:a[t]=e,!1}return!0}),a})(l,n,e)),e.setValues({values:function(e,{from:r,to:t},l){let n=d(e,l);if(!Array.isArray(n))return l;let u=[...n],a=n[r];return u.splice(r,1),u.splice(t,0,a),h(e,u,l)}(l,n,e.refValues.current),updateState:!0})},[]),removeListItem:(0,l.useCallback)((l,n)=>{t.clearFieldDirty(l),r.setErrors(e=>c(l,n,e,-1)),e.setValues({values:function(e,r,t){let l=d(e,t);return Array.isArray(l)?h(e,l.filter((e,t)=>t!==r),t):t}(l,n,e.refValues.current),updateState:!0})},[]),insertListItem:(0,l.useCallback)((l,n,u)=>{t.clearFieldDirty(l),r.setErrors(e=>c(l,u,e,1)),e.setValues({values:function(e,r,t,l){let n=d(e,l);if(!Array.isArray(n))return l;let u=[...n];return u.splice("number"==typeof t?t:u.length,0,r),h(e,u,l)}(l,n,u,e.refValues.current),updateState:!0})},[])}}({$values:T,$errors:D,$status:j}),L=function({$status:e}){let r=(0,l.useRef)({}),t=(0,l.useCallback)((e,t)=>{(0,l.useEffect)(()=>(r.current[e]=r.current[e]||[],r.current[e].push(t),()=>{r.current[e]=r.current[e].filter(e=>e!==t)}),[t])},[]),n=(0,l.useCallback)(t=>r.current[t]?r.current[t].map(r=>l=>r({previousValue:d(t,l.previousValues),value:d(t,l.updatedValues),touched:e.isTouched(t),dirty:e.isDirty(t)})):[],[]);return{subscribers:r,watch:t,getFieldSubscribers:n}}({$status:j}),[A,w]=(0,l.useState)(0),[O,_]=(0,l.useState)({}),N=(0,l.useCallback)(()=>{T.resetValues(),D.clearErrors(),j.resetDirty(),j.resetTouched(),"uncontrolled"===r&&w(e=>e+1)},[]),R=(0,l.useCallback)(e=>{p&&D.clearErrors(),"uncontrolled"===r&&w(e=>e+1),Object.keys(L.subscribers.current).forEach(r=>{d(r,T.refValues.current)!==d(r,e)&&L.getFieldSubscribers(r).forEach(r=>r({previousValues:e,updatedValues:T.refValues.current}))})},[p]),x=(0,l.useCallback)(e=>{let t=T.refValues.current;T.initialize(e,()=>"uncontrolled"===r&&w(e=>e+1)),R(t)},[R]),M=(0,l.useCallback)((e,t,l)=>{let n=(0,V.i)(e,E),u=t instanceof Function?t(d(e,T.refValues.current)):t;j.setCalculatedFieldDirty(e,u),j.setFieldTouched(e,!0),!n&&p&&D.clearFieldError(e),T.setFieldValue({path:e,value:t,updateState:"controlled"===r,subscribers:[...L.getFieldSubscribers(e),n?r=>{let t=v(e,F,r.updatedValues);t.hasError?D.setFieldError(e,t.error):D.clearFieldError(e)}:null,l?.forceUpdate!==!1&&"controlled"!==r?()=>_(r=>({...r,[e]:(r[e]||0)+1})):null]})},[C,F]),W=(0,l.useCallback)(e=>{let t=T.refValues.current;T.setValues({values:e,updateState:"controlled"===r}),R(t)},[C,R]),z=(0,l.useCallback)(()=>{let e=k(F,T.refValues.current);return D.setErrors(e.errors),e},[F]),B=(0,l.useCallback)(e=>{let r=v(e,F,T.refValues.current);return r.hasError?D.setFieldError(e,r.error):D.clearFieldError(e),r},[F]),H=(0,l.useCallback)(e=>{e.preventDefault(),N()},[]),P=(0,l.useCallback)(e=>e?!v(e,F,T.refValues.current).hasError:!k(F,T.refValues.current).hasErrors,[F]),U=(0,l.useCallback)(r=>document.querySelector(`[data-path="${y(e,r)}"]`),[]),q={watch:L.watch,initialized:T.initialized.current,values:T.stateValues,getValues:T.getValues,setInitialValues:T.setValuesSnapshot,initialize:x,setValues:W,setFieldValue:M,errors:D.errorsState,setErrors:D.setErrors,setFieldError:D.setFieldError,clearFieldError:D.clearFieldError,clearErrors:D.clearErrors,resetDirty:j.resetDirty,setTouched:j.setTouched,setDirty:j.setDirty,isTouched:j.isTouched,resetTouched:j.resetTouched,isDirty:j.isDirty,getTouched:j.getTouched,getDirty:j.getDirty,reorderListItem:I.reorderListItem,insertListItem:I.insertListItem,removeListItem:I.removeListItem,reset:N,validate:z,validateField:B,getInputProps:(t,{type:l="input",withError:n=!0,withFocus:u=!0,...s}={})=>{let i={onChange:(0,a.E)(e=>M(t,e,{forceUpdate:!1})),"data-path":y(e,t)};return n&&(i.error=D.errorsState[t]),"checkbox"===l?i["controlled"===r?"checked":"defaultChecked"]=d(t,T.refValues.current):i["controlled"===r?"value":"defaultValue"]=d(t,T.refValues.current),u&&(i.onFocus=()=>j.setFieldTouched(t,!0),i.onBlur=()=>{if((0,V.i)(t,$)){let e=v(t,F,T.refValues.current);e.hasError?D.setFieldError(t,e.error):D.clearFieldError(t)}}),Object.assign(i,S?.({inputProps:i,field:t,options:{type:l,withError:n,withFocus:u,...s},form:q}))},onSubmit:(e,r)=>t=>{t?.preventDefault();let l=z();l.hasErrors?r?.(l.errors,T.refValues.current,t):e?.(g(T.refValues.current),t)},onReset:H,isValid:P,getTransformedValues:e=>g(e||T.refValues.current),key:e=>`${A}-${e}-${O[e]||0}`,getInputNode:U};return e&&function(e){if(!/^[0-9a-zA-Z-]+$/.test(e))throw Error(`[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`)}(e),u(`mantine-form:${e}:set-field-value`,e=>q.setFieldValue(e.detail.path,e.detail.value)),u(`mantine-form:${e}:set-values`,e=>q.setValues(e.detail)),u(`mantine-form:${e}:set-initial-values`,e=>q.setInitialValues(e.detail)),u(`mantine-form:${e}:set-errors`,e=>q.setErrors(e.detail)),u(`mantine-form:${e}:set-field-error`,e=>q.setFieldError(e.detail.path,e.detail.error)),u(`mantine-form:${e}:clear-field-error`,e=>q.clearFieldError(e.detail)),u(`mantine-form:${e}:clear-errors`,q.clearErrors),u(`mantine-form:${e}:reset`,q.reset),u(`mantine-form:${e}:validate`,q.validate),u(`mantine-form:${e}:validate-field`,e=>q.validateField(e.detail)),u(`mantine-form:${e}:reorder-list-item`,e=>q.reorderListItem(e.detail.path,e.detail.payload)),u(`mantine-form:${e}:remove-list-item`,e=>q.removeListItem(e.detail.path,e.detail.index)),u(`mantine-form:${e}:insert-list-item`,e=>q.insertListItem(e.detail.path,e.detail.item,e.detail.index)),u(`mantine-form:${e}:set-dirty`,e=>q.setDirty(e.detail)),u(`mantine-form:${e}:set-touched`,e=>q.setTouched(e.detail)),u(`mantine-form:${e}:reset-dirty`,e=>q.resetDirty(e.detail)),u(`mantine-form:${e}:reset-touched`,q.resetTouched),q}},56365:function(e,r,t){t.d(r,{i:function(){return n}});var l=t(56624);function n(e,r){return!!r&&("boolean"==typeof r?r:!!Array.isArray(r)&&r.includes(e.replace(/[.][0-9]+/g,`.${l.n}`)))}}}]);