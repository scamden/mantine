"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67415],{81097:function(e,t,n){n.d(t,{r:function(){return d}});var l=n(27378),r=n(40624),a=n(38765),o=n(49849),i=n(45608),s=n(61777),u=n(62443);function c(e,t){return Array.isArray(e)?e.includes(t):e===t}function Option({data:e,withCheckIcon:t,value:n,checkIconPosition:o,unstyled:d}){if(!(0,s.f)(e)){let s=t&&c(n,e.value)&&l.createElement(a.n,{className:u.Z.optionsDropdownCheckIcon});return l.createElement(i.h.Option,{value:e.value,disabled:e.disabled,className:(0,r.Z)({[u.Z.optionsDropdownOption]:!d}),"data-reverse":"right"===o||void 0,"data-checked":c(n,e.value)||void 0,"aria-selected":c(n,e.value)},"left"===o&&s,l.createElement("span",null,e.label),"right"===o&&s)}let p=e.items.map(e=>l.createElement(Option,{data:e,value:n,key:e.value,unstyled:d,withCheckIcon:t,checkIconPosition:o}));return l.createElement(i.h.Group,{label:e.group},p)}function d({data:e,hidden:t,hiddenWhenEmpty:n,filter:r,search:a,limit:u,maxDropdownHeight:c,withScrollArea:d=!0,filterOptions:p=!0,withCheckIcon:m=!1,value:f,checkIconPosition:v,nothingFoundMessage:h,unstyled:g,labelId:E}){!function e(t,n=new Set){if(Array.isArray(t))for(let l of t)if((0,s.f)(l))e(l.items,n);else{if(void 0===l.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof l.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof l.value}`);if(n.has(l.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${l.value}" was provided more than once`);n.add(l.value)}}(e);let y="string"==typeof a,w=y?(r||function e({options:t,search:n,limit:l}){let r=n.trim().toLowerCase(),a=[];for(let o=0;o<t.length;o+=1){let i=t[o];if(a.length===l)break;(0,s.f)(i)&&a.push({group:i.group,items:e({options:i.items,search:n,limit:l-a.length})}),!(0,s.f)(i)&&i.label.toLowerCase().includes(r)&&a.push(i)}return a})({options:e,search:p?a:"",limit:u??1/0}):e,b=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(w),D=w.map(e=>l.createElement(Option,{data:e,key:(0,s.f)(e)?e.group:e.value,withCheckIcon:m,value:f,checkIconPosition:v,unstyled:g}));return l.createElement(i.h.Dropdown,{hidden:t||n&&b},l.createElement(i.h.Options,{labelledBy:E},d?l.createElement(o.x.Autosize,{mah:c??220,type:"scroll",scrollbarSize:"var(--_combobox-padding)",offsetScrollbars:"y"},D):D,b&&h&&l.createElement(i.h.Empty,null,h)))}},61777:function(e,t,n){n.d(t,{f:function(){return l}});function l(e){return"group"in e}},38099:function(e,t,n){n.d(t,{g:function(){return function e(t){return t.reduce((t,n)=>"group"in n?{...t,...e(n.items)}:(t[n.value]=n,t),{})}}})},67415:function(e,t,n){n.d(t,{N:function(){return b}});var l=n(27378),r=n(31002),a=n(58675),o=n(5564),i=n(6231),s=n(96739),u=n(55934),c=n(20410),d=n(2161),p=n(38099),m=n(45608),f=n(81097),v=n(54526),h=n(23163),g=n(39394),E=n(28639),y=n(61777);let w={maxValues:1/0,withCheckIcon:!0,checkIconPosition:"left",hiddenInputValuesDivider:","},b=(0,c.d)((e,t)=>{let n=(0,s.w)("MultiSelect",w,e),{classNames:c,className:h,style:b,styles:D,unstyled:C,vars:P,size:k,value:S,defaultValue:O,onChange:x,onKeyDown:I,variant:N,data:_,dropdownOpened:M,defaultDropdownOpened:z,onDropdownOpen:F,onDropdownClose:A,selectFirstOptionOnChange:V,onOptionSubmit:B,comboboxProps:G,filter:L,limit:R,withScrollArea:Z,maxDropdownHeight:$,searchValue:H,defaultSearchValue:T,onSearchChange:K,readOnly:j,disabled:W,onFocus:Y,onBlur:q,onPaste:J,radius:Q,rightSection:U,rightSectionWidth:X,rightSectionPointerEvents:ee,rightSectionProps:et,leftSection:en,leftSectionWidth:el,leftSectionPointerEvents:er,leftSectionProps:ea,inputContainer:eo,inputWrapperOrder:ei,withAsterisk:es,labelProps:eu,descriptionProps:ec,errorProps:ed,wrapperProps:ep,description:em,label:ef,error:ev,maxValues:eh,searchable:eg,nothingFoundMessage:eE,withCheckIcon:ey,checkIconPosition:ew,hidePickedOptions:eb,withErrorStyles:eD,name:eC,form:eP,id:ek,clearable:eS,clearButtonProps:eO,hiddenInputProps:ex,placeholder:eI,hiddenInputValuesDivider:eN,required:e_,mod:eM,...ez}=n,eF=(0,r.M)(ek),eA=(0,d.R)(_),eV=(0,p.g)(eA),eB=(0,v.K)({opened:M,defaultOpened:z,onDropdownOpen:F,onDropdownClose:()=>{A?.(),eB.resetSelectedOption()}}),{styleProps:eG,rest:{type:eL,...eR}}=(0,u.c)(ez),[eZ,e$]=(0,a.C)({value:S,defaultValue:O,finalValue:[],onChange:x}),[eH,eT]=(0,a.C)({value:H,defaultValue:T,finalValue:"",onChange:K}),eK=(0,i.y)({name:"MultiSelect",classes:{},props:n,classNames:c,styles:D,unstyled:C}),{resolvedClassNames:ej,resolvedStyles:eW}=(0,o.h)({props:n,styles:D,classNames:c}),eY=eZ.map((e,t)=>l.createElement(g.D,{key:`${e}-${t}`,withRemoveButton:!j&&!eV[e]?.disabled,onRemove:()=>e$(eZ.filter(t=>e!==t)),unstyled:C,...eK("pill")},eV[e]?.label||e));(0,l.useEffect)(()=>{V&&eB.selectFirstOption()},[V,eZ]);let eq=eS&&eZ.length>0&&!W&&!j&&l.createElement(m.h.ClearButton,{size:k,...eO,onClear:()=>{e$([]),eT("")}}),eJ=function({data:e,value:t}){let n=t.map(e=>e.trim().toLowerCase()),l=e.reduce((e,t)=>((0,y.f)(t)?e.push({group:t.group,items:t.items.filter(e=>-1===n.indexOf(e.value.toLowerCase().trim()))}):-1===n.indexOf(t.value.toLowerCase().trim())&&e.push(t),e),[]);return l}({data:eA,value:eZ});return l.createElement(l.Fragment,null,l.createElement(m.h,{store:eB,classNames:ej,styles:eW,unstyled:C,size:k,readOnly:j,__staticSelector:"MultiSelect",onOptionSubmit:e=>{B?.(e),eT(""),eB.updateSelectedOptionIndex("selected"),eZ.includes(eV[e].value)?e$(eZ.filter(t=>t!==eV[e].value)):eZ.length<eh&&e$([...eZ,eV[e].value])},...G},l.createElement(m.h.DropdownTarget,null,l.createElement(E.d,{...eG,__staticSelector:"MultiSelect",classNames:ej,styles:eW,unstyled:C,size:k,className:h,style:b,variant:N,disabled:W,radius:Q,rightSection:U||eq||l.createElement(m.h.Chevron,{size:k,error:ev,unstyled:C}),rightSectionPointerEvents:ee||(eq?"all":"none"),rightSectionWidth:X,rightSectionProps:et,leftSection:en,leftSectionWidth:el,leftSectionPointerEvents:er,leftSectionProps:ea,inputContainer:eo,inputWrapperOrder:ei,withAsterisk:es,labelProps:eu,descriptionProps:ec,errorProps:ed,wrapperProps:ep,description:em,label:ef,error:ev,multiline:!0,withErrorStyles:eD,__stylesApiProps:{...n,rightSectionPointerEvents:ee||(eq?"all":"none"),multiline:!0},pointer:!eg,onClick:()=>eg?eB.openDropdown():eB.toggleDropdown(),"data-expanded":eB.dropdownOpened||void 0,id:eF,required:e_,mod:eM},l.createElement(g.D.Group,{disabled:W,unstyled:C,...eK("pillsList")},eY,l.createElement(m.h.EventsTarget,null,l.createElement(E.d.Field,{...eR,ref:t,id:eF,placeholder:eI,type:eg||eI?"visible":"hidden",...eK("inputField"),unstyled:C,onFocus:e=>{Y?.(e),eg&&eB.openDropdown()},onBlur:e=>{q?.(e),eB.closeDropdown(),eT("")},onKeyDown:e=>{I?.(e)," "!==e.key||eg||(e.preventDefault(),eB.toggleDropdown()),"Backspace"===e.key&&0===eH.length&&eZ.length>0&&e$(eZ.slice(0,eZ.length-1))},value:eH,onChange:e=>{eT(e.currentTarget.value),eg&&eB.openDropdown(),V&&eB.selectFirstOption()},disabled:W,readOnly:j||!eg,pointer:!eg}))))),l.createElement(f.r,{data:eb?eJ:eA,hidden:j||W,filter:L,search:eH,limit:R,hiddenWhenEmpty:!eg||!eE||eb&&0===eJ.length&&0===eH.trim().length,withScrollArea:Z,maxDropdownHeight:$,filterOptions:eg,value:eZ,checkIconPosition:ew,withCheckIcon:ey,nothingFoundMessage:eE,unstyled:C,labelId:`${eF}-label`})),l.createElement("input",{type:"hidden",name:eC,value:eZ.join(eN),form:eP,disabled:W,...ex}))});b.classes={...h.M.classes,...m.h.classes},b.displayName="@mantine/core/MultiSelect"},39394:function(e,t,n){n.d(t,{D:function(){return b}});var l=n(27378),r=n(92082),a=n(83453),o=n(96739),i=n(6231),s=n(56589),u=n(20410),c=n(96217),d=n(33),p=n(89871);let[m,f]=(0,p.V)();var v={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};let h={},g=(0,a.Z)((e,{gap:t},{size:n})=>({group:{"--pg-gap":void 0!==t?(0,r.ap)(t):(0,r.ap)(n,"pg-gap")}})),E=(0,u.d)((e,t)=>{let n=(0,o.w)("PillGroup",h,e),{classNames:r,className:a,style:u,styles:c,unstyled:p,vars:f,size:E,disabled:y,...w}=n,b=(0,d.D)(),D=b?.size||E||void 0,C=(0,i.y)({name:"PillGroup",classes:v,props:n,className:a,style:u,classNames:r,styles:c,unstyled:p,vars:f,varsResolver:g,stylesCtx:{size:D},rootSelector:"group"});return l.createElement(m,{value:{size:D,disabled:y}},l.createElement(s.x,{ref:t,size:D,...C("group"),...w}))});E.classes=v,E.displayName="@mantine/core/PillGroup";let y={variant:"default"},w=(0,a.Z)((e,{radius:t},{size:n})=>({root:{"--pill-fz":(0,r.ap)(n,"pill-fz"),"--pill-height":(0,r.ap)(n,"pill-height"),"--pill-radius":void 0===t?void 0:(0,r.H5)(t)}})),b=(0,u.d)((e,t)=>{let n=(0,o.w)("Pill",y,e),{classNames:r,className:a,style:u,styles:p,unstyled:m,vars:h,variant:g,children:E,withRemoveButton:b,onRemove:D,removeButtonProps:C,radius:P,size:k,disabled:S,mod:O,...x}=n,I=f(),N=(0,d.D)(),_=k||I?.size||void 0,M=N?.variant==="filled"?"contrast":g||"default",z=(0,i.y)({name:"Pill",classes:v,props:n,className:a,style:u,classNames:r,styles:p,unstyled:m,vars:h,varsResolver:w,stylesCtx:{size:_}});return l.createElement(s.x,{component:"span",ref:t,variant:M,size:_,...z("root",{variant:M}),mod:[{"with-remove":b,disabled:S||I?.disabled},O],...x},l.createElement("span",{...z("label")},E),b&&l.createElement(c.P,{variant:"transparent",radius:P,tabIndex:-1,"aria-hidden":!0,unstyled:m,...C,...z("remove",{className:C?.className,style:C?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),C?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),D?.(),C?.onClick?.(e)}}))});b.classes=v,b.displayName="@mantine/core/Pill",b.Group=E},33:function(e,t,n){n.d(t,{D:function(){return a},H:function(){return r}}),n(27378);var l=n(89871);let[r,a]=(0,l.V)()},28639:function(e,t,n){n.d(t,{d:function(){return h}});var l=n(27378),r=n(96739),a=n(20410),o=n(23163),i=n(33),s=n(72840),u=n(6231),c=n(56589),d=n(5739),p={field:"m-45c4369d"};let m={type:"visible"},f=(0,a.d)((e,t)=>{let n=(0,r.w)("PillsInputField",m,e),{classNames:a,className:o,style:f,styles:v,unstyled:h,vars:g,type:E,disabled:y,id:w,pointer:b,mod:D,...C}=n,P=(0,i.D)(),k=(0,d.D)(),S=(0,u.y)({name:"PillsInputField",classes:p,props:n,className:o,style:f,classNames:a,styles:v,unstyled:h,rootSelector:"field"}),O=y||P?.disabled;return l.createElement(c.x,{component:"input",ref:(0,s.Yx)(t,P?.fieldRef),"data-type":E,disabled:O,mod:[{disabled:O,pointer:b},D],...S("field"),...C,id:k?.inputId||w,"aria-invalid":P?.hasError,"aria-describedby":k?.describedBy,type:"text",onMouseDown:e=>!b&&e.stopPropagation()})});f.classes=p,f.displayName="@mantine/core/PillsInputField";let v={},h=(0,a.d)((e,t)=>{let n=(0,r.w)("PillsInput",v,e),{children:a,onMouseDown:s,onClick:u,size:c,disabled:d,__staticSelector:p,error:m,variant:f,...h}=n,g=(0,l.useRef)();return l.createElement(i.H,{value:{fieldRef:g,size:c,disabled:d,hasError:!!m,variant:f}},l.createElement(o.M,{size:c,error:m,variant:f,component:"div",ref:t,onMouseDown:e=>{e.preventDefault(),s?.(e),g.current?.focus()},onClick:e=>{e.preventDefault(),u?.(e),g.current?.focus()},...h,multiline:!0,disabled:d,__staticSelector:p||"PillsInput",withAria:!1},a))});h.displayName="@mantine/core/PillsInput",h.Field=f}}]);