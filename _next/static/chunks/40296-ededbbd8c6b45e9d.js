"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40296],{9404:function(t,e,a){a.d(e,{It:function(){return n},K$:function(){return i},Lc:function(){return c},aT:function(){return o},hm:function(){return p},jm:function(){return l},op:function(){return r},sR:function(){return s}});let o=[{month:"January",Smartphones:1200,Laptops:900,Tablets:200},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:400,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:1400,Tablets:1200},{month:"June",Smartphones:750,Laptops:600,Tablets:1e3}],r=`
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
`,n=[{item:"TaxRate","Effective tax rate in %":21,color:"blue"},{item:"Foreign inc.","Effective tax rate in %":-15.5,color:"teal"},{item:"Perm. diff.","Effective tax rate in %":-3,color:"teal"},{item:"Credits","Effective tax rate in %":-3,color:"teal"},{item:"Loss carryf. ","Effective tax rate in %":-2,color:"teal"},{item:"Law changes","Effective tax rate in %":2,color:"red"},{item:"Reven. adj.","Effective tax rate in %":4,color:"red"},{item:"ETR","Effective tax rate in %":3.5,color:"blue",standalone:!0}],i=`
export const data =
[
  { item: 'TaxRate', 'Effective tax rate in %': 21, color: 'blue' },
  { item: 'Foreign inc.', 'Effective tax rate in %': -15.5, color: 'teal' },
  { item: 'Perm. diff.', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Credits', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Loss carryf. ', 'Effective tax rate in %': -2, color: 'teal' },
  { item: 'Law changes', 'Effective tax rate in %': 2, color: 'red' },
  { item: 'Reven. adj.', 'Effective tax rate in %': 4, color: 'red' },
  { item: 'ETR', 'Effective tax rate in %': 3.5, color: 'blue', standalone: true },
];
`,l=[{month:"January",Smartphones:1200,Laptops:900,Tablets:0},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:0,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:0,Tablets:1200},{month:"June",Smartphones:0,Laptops:600,Tablets:1e3}],s=`export const zeroData = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 0 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 0, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 0, Tablets: 1200 },
  { month: 'June', Smartphones: 0, Laptops: 600, Tablets: 1000 },
];`,p=[{month:"January",Smartphones:1200,Laptops:500,Tablets:800},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:1800,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:200,Tablets:700},{month:"June",Smartphones:800,Laptops:500,Tablets:200}],c=`export const mixedStack = [
  { month: 'January', Smartphones: 1200, Laptops: 500, Tablets: 800 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 1800, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 200, Tablets: 700 },
  { month: 'June', Smartphones: 800, Laptops: 500, Tablets: 200 },
];`},8132:function(t,e,a){a.d(e,{v:function(){return w}});var o=a(52322),r=a(2784),n=a(171),i=a(11011),l=a(30840),s=a(18205),p=a(80739),c=a(55734),m=a(25556),d=a(81224),h=a(3131),f=a(55484),u=a(21154),y=a(11200),x=a(13588),b=a(82027),v=a(38483),L=a(68755),S=a(51477),T=a(46690),g=a(28559),j=a(46293),k=a(50425),A=a(39561),C=a(7064);function I(t){return`${(100*t).toFixed(0)}%`}let _={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default"},E=(0,y.Z)((t,{textColor:e,gridColor:a,cursorFill:o,barLabelColor:r})=>({root:{"--chart-text-color":e?(0,x.p)(e,t):void 0,"--chart-grid-color":a?(0,x.p)(a,t):void 0,"--chart-cursor-fill":o?(0,x.p)(o,t):void 0,"--chart-bar-label-color":r?(0,x.p)(r,t):void 0}})),w=(0,b.d5)((t,e)=>{let a,y;let b=(0,v.w)("BarChart",_,t),{classNames:w,className:M,style:z,styles:B,unstyled:J,vars:K,data:F,withLegend:N,legendProps:D,series:R,onMouseLeave:Z,dataKey:O,withTooltip:P,withXAxis:$,withYAxis:Q,gridAxis:W,tickLine:X,xAxisProps:q,yAxisProps:G,unit:H,tooltipAnimationDuration:Y,strokeDasharray:U,gridProps:V,tooltipProps:tt,referenceLines:te,fillOpacity:ta,barChartProps:to,type:tr,orientation:tn,dir:ti,valueFormatter:tl,children:ts,barProps:tp,xAxisLabel:tc,yAxisLabel:tm,withBarValueLabel:td,withRightYAxis:th,rightYAxisLabel:tf,rightYAxisProps:tu,minBarSize:ty,maxBarWidth:tx,mod:tb,...tv}=b,tL=(0,L.rZ)(),[tS,tT]=(0,r.useState)(null),tg=null!==tS,tj="stacked"===tr||"percent"===tr,{resolvedClassNames:tk,resolvedStyles:tA}=(0,S.h)({classNames:w,styles:B,props:b}),tC="waterfall"===tr?(a=0,y=0,F.map(t=>{if(t.standalone)for(let e in t)"number"==typeof t[e]&&e!==O&&(t[e]=[0,t[e]]);else for(let e in t)"number"==typeof t[e]&&e!==O&&(y+=t[e],t[e]=[a,y],a=y);return t})):F,tI=(0,T.y)({name:"BarChart",classes:C.Z,props:b,className:M,style:z,classNames:w,styles:B,unstyled:J,vars:K,varsResolver:E}),t_=R.map(t=>{let e=(0,x.p)(t.color,tL),a=tg&&tS!==t.name;return(0,r.createElement)(n.$,{...tI("bar"),key:t.name,name:t.name,dataKey:t.name,fill:e,stroke:e,isAnimationActive:!1,fillOpacity:a?.1:ta,strokeOpacity:a?.2:0,stackId:tj?"stack":t.stackId||void 0,label:td?(0,o.jsx)(A.B,{valueFormatter:tl,orientation:tn}):void 0,yAxisId:t.yAxisId||"left",minPointSize:ty,..."function"==typeof tp?tp(t):tp},tC.map((t,a)=>(0,o.jsx)(i.b,{fill:t.color?(0,x.p)(t.color,tL):e},`cell-${a}`)))}),tE=te?.map((t,e)=>{let a=x.p(t.color,tL);return o.jsx(l.d,{stroke:t.color?a:"var(--chart-grid-color)",strokeWidth:1,yAxisId:t.yAxisId||"left",...t,label:{value:t.label,fill:t.color?a:"currentColor",fontSize:12,position:t.labelPosition??"insideBottomLeft"},...tI("referenceLine")},e)}),tw="percent"===tr?I:tl,tM={axisLine:!1,..."vertical"===tn?{dataKey:O,type:"category"}:{type:"number"},tickLine:!!("none"!==W&&("y"===X||"xy"===X))&&{stroke:"currentColor"},allowDecimals:!0,unit:H,tickFormatter:"vertical"===tn?void 0:tw,...tI("axis")};return(0,o.jsx)(g.x,{ref:e,...tI("root"),onMouseLeave:t=>{tT(null),Z?.(t)},dir:ti||"ltr",mod:[{orientation:tn},tb],...tv,children:(0,o.jsx)(s.h,{...tI("container"),children:(0,o.jsxs)(p.v,{data:tC,stackOffset:"percent"===tr?"expand":void 0,layout:tn,maxBarSize:tx,margin:{bottom:tc?30:void 0,left:tm?10:void 0,right:tm?5:void 0},...to,children:[N&&(0,o.jsx)(c.D,{verticalAlign:"top",content:t=>(0,o.jsx)(j.Q,{payload:t.payload,onHighlight:tT,legendPosition:D?.verticalAlign||"top",classNames:tk,styles:tA,series:R,showColor:"waterfall"!==tr}),...D}),(0,o.jsxs)(m.K,{hide:!$,..."vertical"===tn?{type:"number"}:{dataKey:O},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==W&&("x"===X||"xy"===X))&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===tn?tw:void 0,...tI("axis"),...q,children:[tc&&(0,o.jsx)(d._,{position:"insideBottom",offset:-20,fontSize:12,...tI("axisLabel"),children:tc}),q?.children]}),(0,o.jsxs)(h.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!Q,...tM,...G,children:[tm&&(0,o.jsx)(d._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...tI("axisLabel"),children:tm}),G?.children]}),(0,o.jsxs)(h.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!th,...tM,...tu,children:[tf&&(0,o.jsx)(d._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...tI("axisLabel"),children:tf}),G?.children]}),(0,o.jsx)(f.q,{strokeDasharray:U,vertical:"y"===W||"xy"===W,horizontal:"x"===W||"xy"===W,...tI("grid"),...V}),P&&(0,o.jsx)(u.u,{animationDuration:Y,isAnimationActive:0!==Y,position:"vertical"===tn?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:U,fill:"var(--chart-cursor-fill)"},content:({label:t,payload:e})=>(0,o.jsx)(k.h,{label:t,payload:e,type:"waterfall"===tr?"scatter":void 0,unit:H,classNames:tk,styles:tA,series:R,valueFormatter:tl}),...tt}),t_,tE,ts]})})})});w.displayName="@mantine/charts/BarChart",w.classes=C.Z},39561:function(t,e,a){a.d(e,{B:function(){return r}});var o=a(52322);function r({value:t,valueFormatter:e,textBreakAll:a,parentViewBox:r,orientation:n,viewBox:i,width:l,height:s,...p}){return(0,o.jsx)("text",{...p,dy:"vertical"===n?s/2+4:-10,dx:"vertical"===n?l-30:0,fontSize:12,fill:"var(--chart-bar-label-color, var(--mantine-color-dimmed))",children:"function"==typeof e?e(t):t})}},46293:function(t,e,a){a.d(e,{Q:function(){return d}});var o=a(52322),r=a(82027),n=a(38483),i=a(46690),l=a(27009),s=a(28559),p=a(64438),c={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let m={},d=(0,r.d5)((t,e)=>{let a=(0,n.w)("ChartLegend",m,t),{classNames:r,className:d,style:h,styles:f,unstyled:u,vars:y,payload:x,onHighlight:b,legendPosition:v,mod:L,series:S,showColor:T,centered:g,...j}=a,k=(0,i.y)({name:"ChartLegend",classes:c,props:a,className:d,style:h,classNames:r,styles:f,unstyled:u});if(!x)return null;let A=x.filter(t=>"none"!==t.color).map(t=>{let e=t.dataKey.split(".").pop();return{...t,dataKey:e,payload:{...t.payload,name:e,dataKey:e}}}),C=(0,p.v)(S),I=A.map((t,e)=>(0,o.jsxs)("div",{...k("legendItem"),onMouseEnter:()=>b(t.dataKey),onMouseLeave:()=>b(null),"data-without-color":!1===T||void 0,children:[(0,o.jsx)(l.b,{color:t.color,size:12,...k("legendItemColor"),withShadow:!1}),(0,o.jsx)("p",{...k("legendItemName"),children:C[t.dataKey]||t.dataKey})]},e));return(0,o.jsx)(s.x,{ref:e,mod:[{position:v,centered:g},L],...k("legend"),...j,children:I})});d.displayName="@mantine/charts/ChartLegend"},50425:function(t,e,a){a.d(e,{h:function(){return y},X:function(){return h}});var o=a(52322),r=a(82027),n=a(38483),i=a(68755),l=a(46690),s=a(27009),p=a(13588),c=a(28559),m=a(64438),d={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function h(t,e){let a=t.filter(t=>"none"!==t.fill||!t.color).map(t=>{if(!t.payload||t.payload[t.name])return t;let e=t.name.search(/\./);if(e>=0){let a=t.name.substring(0,e),o={...t.payload[a]},r=Object.entries(t.payload).reduce((t,e)=>{let[o,r]=e;return o===a?t:{...t,[o]:r}},{});return{...t,name:t.name.substring(e+1),payload:{...r,...o}}}return t});return e?a.filter(t=>t.name===e):a}function f(t,e){return"radial"===e||"scatter"===e?Array.isArray(t.value)?t.value[1]-t.value[0]:t.value:Array.isArray(t.payload[t.dataKey])?t.payload[t.dataKey][1]-t.payload[t.dataKey][0]:t.payload[t.name]}let u={type:"area",showColor:!0},y=(0,r.d5)((t,e)=>{let a=(0,n.w)("ChartTooltip",u,t),{classNames:r,className:y,style:x,styles:b,unstyled:v,vars:L,payload:S,label:T,unit:g,type:j,segmentId:k,mod:A,series:C,valueFormatter:I,showColor:_,...E}=a,w=(0,i.rZ)(),M=(0,l.y)({name:"ChartTooltip",classes:d,props:a,className:y,style:x,classNames:r,styles:b,unstyled:v});if(!S)return null;let z=h(S,k),B="scatter"===j?S[0]?.payload?.name:null,J=(0,m.v)(C),K=T||B,F=z.map(t=>(0,o.jsxs)("div",{"data-type":j,...M("tooltipItem"),children:[(0,o.jsxs)("div",{...M("tooltipItemBody"),children:[_&&(0,o.jsx)(s.b,{color:(0,p.p)(t.color,w),size:12,...M("tooltipItemColor"),withShadow:!1}),(0,o.jsx)("div",{...M("tooltipItemName"),children:J[t.name]||t.name})]}),(0,o.jsxs)("div",{...M("tooltipItemData"),children:["function"==typeof I?I(f(t,j)):f(t,j),g||t.unit]})]},t?.key??t.name));return(0,o.jsxs)(c.x,{...M("tooltip"),mod:[{type:j},A],ref:e,...E,children:[K&&(0,o.jsx)("div",{...M("tooltipLabel"),children:K}),(0,o.jsx)("div",{...M("tooltipBody"),children:F})]})});y.displayName="@mantine/charts/ChartTooltip"},7064:function(t,e,a){a.d(e,{Z:function(){return o}});var o={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},64438:function(t,e,a){a.d(e,{v:function(){return o}});function o(t){return t?t.reduce((t,e)=>{let a=e.name.search(/\./);return a>=0?t[e.name.substring(a+1)]=e.label:t[e.name]=e.label,t},{}):{}}}}]);