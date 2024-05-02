(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92695],{28879:function(e){var t,n,r,a,i,s,o,l,u,c,d,f,h,m,p,y,g,$,v,S,x,D;e.exports=(t="millisecond",n="second",r="minute",a="hour",i="week",s="month",o="quarter",l="year",u="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}},y="$isDayjsObject",g=function(e){return e instanceof x||!(!e||!e[y])},$=function e(t,n,r){var a;if(!t)return m;if("string"==typeof t){var i=t.toLowerCase();p[i]&&(a=i),n&&(p[i]=n,a=i);var s=t.split("-");if(!a&&s.length>1)return e(s[0])}else{var o=t.name;p[o]=t,a=o}return!r&&a&&(m=a),a||!r&&m},v=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},(S={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,s),i=n-a<0,o=t.clone().add(r+(i?-1:1),s);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:s,y:l,w:i,d:"day",D:u,h:a,m:r,s:n,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=$,S.i=g,S.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},D=(x=function(){function e(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[y]=!0}var h=e.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return S},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(e,t){var n=v(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return v(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<v(e)},h.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var o=this,c=!!S.u(t)||t,d=S.p(e),f=function(e,t){var n=S.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return c?n:n.endOf("day")},h=function(e,t){return S.w(o.toDate()[e].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},m=this.$W,p=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case l:return c?f(1,0):f(31,11);case s:return c?f(1,p):f(0,p+1);case i:var $=this.$locale().weekStart||0,v=(m<$?m+7:m)-$;return f(c?y-v:y+(6-v),p);case"day":case u:return h(g+"Hours",0);case a:return h(g+"Minutes",1);case r:return h(g+"Seconds",2);case n:return h(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,i){var o,c=S.p(e),d="set"+(this.$u?"UTC":""),f=((o={}).day=d+"Date",o[u]=d+"Date",o[s]=d+"Month",o[l]=d+"FullYear",o[a]=d+"Hours",o[r]=d+"Minutes",o[n]=d+"Seconds",o[t]=d+"Milliseconds",o)[c],h="day"===c?this.$D+(i-this.$W):i;if(c===s||c===l){var m=this.clone().set(u,1);m.$d[f](h),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[S.p(e)]()},h.add=function(e,t){var o,u=this;e=Number(e);var c=S.p(t),d=function(t){var n=v(u);return S.w(n.date(n.date()+Math.round(t*e)),u)};if(c===s)return this.set(s,this.$M+e);if(c===l)return this.set(l,this.$y+e);if("day"===c)return d(1);if(c===i)return d(7);var f=((o={})[r]=6e4,o[a]=36e5,o[n]=1e3,o)[c]||1,h=this.$d.getTime()+e*f;return S.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),i=this.$H,s=this.$m,o=this.$M,l=n.weekdays,u=n.months,d=n.meridiem,h=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},m=function(e){return S.s(i%12||12,e,"0")},p=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,u,3);case"MMMM":return h(u,o);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,l,2);case"ddd":return h(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return S.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(i,s,!0);case"A":return p(i,s,!1);case"m":return String(s);case"mm":return S.s(s,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,t,u){var c,d=this,f=S.p(t),h=v(e),m=(h.utcOffset()-this.utcOffset())*6e4,p=this-h,y=function(){return S.m(d,h)};switch(f){case l:c=y()/12;break;case s:c=y();break;case o:c=y()/3;break;case i:c=(p-m)/6048e5;break;case"day":c=(p-m)/864e5;break;case a:c=p/36e5;break;case r:c=p/6e4;break;case n:c=p/1e3;break;default:c=p}return u?c:S.a(c)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return p[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return S.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},e}()).prototype,v.prototype=D,[["$ms",t],["$s",n],["$m",r],["$H",a],["$W","day"],["$M",s],["$y",l],["$D",u]].forEach(function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,x,v),e.$i=!0),v},v.locale=$,v.isDayjs=g,v.unix=function(e){return v(1e3*e)},v.en=p[m],v.Ls=p,v.p={},v)},67338:function(e){var t,n;e.exports=(t={year:0,month:1,day:2,hour:3,minute:4,second:5},n={},function(e,r,a){var i,s=function(e,t,r){void 0===r&&(r={});var a,i,s,o,l=new Date(e);return(void 0===(a=r)&&(a={}),(o=n[s=t+"|"+(i=a.timeZoneName||"short")])||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),n[s]=o),o).formatToParts(l)},o=function(e,n){for(var r=s(e,n),i=[],o=0;o<r.length;o+=1){var l=r[o],u=l.type,c=l.value,d=t[u];d>=0&&(i[d]=parseInt(c,10))}var f=i[3],h=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===f?0:f)+":"+i[4]+":"+i[5]+":000",m=+e;return(a.utc(h).valueOf()-(m-=m%1e3))/6e4},l=r.prototype;l.tz=function(e,t){void 0===e&&(e=i);var n=this.utcOffset(),r=this.toDate(),s=r.toLocaleString("en-US",{timeZone:e}),o=Math.round((r-new Date(s))/1e3/60),l=a(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(r.getTimezoneOffset()/15))-o,!0);if(t){var u=l.utcOffset();l=l.add(n-u,"minute")}return l.$x.$timezone=e,l},l.offsetName=function(e){var t=this.$x.$timezone||a.tz.guess(),n=s(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return n&&n.value};var u=l.startOf;l.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return u.call(this,e,t);var n=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return u.call(n,e,t).tz(this.$x.$timezone,!0)},a.tz=function(e,t,n){var r=n&&t,s=n||t||i,l=o(+a(),s);if("string"!=typeof e)return a(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,a=o(r,n);if(t===a)return[r,t];var i=o(r-=60*(a-t)*1e3,n);return a===i?[r,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(a.utc(e,r).valueOf(),l,s),c=u[0],d=u[1],f=a(c).utcOffset(d);return f.$x.$timezone=s,f},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(e){i=e}})},10264:function(e){var t,n,r;e.exports=(t="minute",n=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g,function(e,a,i){var s=a.prototype;i.utc=function(e){var t={date:e,utc:!0,args:arguments};return new a(t)},s.utc=function(e){var n=i(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var o=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),o.call(this,e)};var l=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var u=s.utcOffset;s.utcOffset=function(e,a){var i=this.$utils().u;if(i(e))return this.$u?0:i(this.$offset)?u.call(this):this.$offset;if("string"==typeof e&&null===(e=function(e){void 0===e&&(e="");var t=e.match(n);if(!t)return null;var a=(""+t[0]).match(r)||["-",0,0],i=a[0],s=60*+a[1]+ +a[2];return 0===s?0:"+"===i?s:-s}(e)))return this;var s=16>=Math.abs(e)?60*e:e,o=this;if(a)return o.$offset=s,o.$u=0===e,o;if(0!==e){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(s+l,t)).$offset=s,o.$x.$localOffset=l}else o=this.utc();return o};var c=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var d=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=s.diff;s.diff=function(e,t,n){if(e&&this.$u===e.$u)return f.call(this,e,t,n);var r=this.local(),a=i(e).local();return f.call(r,a,t,n)}})},26798:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/year-picker-input",function(){return n(28969)}])},28969:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(52322),a=n(45392),i=n(82027),s=n(38483),o=n(51477);n(28879),n(2784);var l=n(46766),u=n(93893),c=n(51235),d=n(26005),f=n(9882),h=n(71686),m=n(98071);let p={type:"default",valueFormat:"YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},y=(0,i.d)((e,t)=>{let n=(0,s.w)("YearPickerInput",p,e),{type:a,value:i,defaultValue:y,onChange:g,valueFormat:$,labelSeparator:v,locale:S,classNames:x,styles:D,unstyled:k,closeOnChange:b,size:j,variant:P,dropdownType:w,sortDates:M,minDate:Y,maxDate:O,vars:C,valueFormatter:T,..._}=n,{resolvedClassNames:I,resolvedStyles:V}=(0,o.h)({classNames:x,styles:D,props:n}),{calendarProps:z,others:N}=(0,f.M)(_),A=(0,l.e)(),{_value:F,setValue:W,formattedValue:H,dropdownHandlers:L,dropdownOpened:U,onClear:E,shouldClear:Z}=(0,d.u)({type:a,value:i,defaultValue:y,onChange:g,locale:S,format:$,labelSeparator:v,closeOnChange:b,sortDates:M,valueFormatter:T});return(0,r.jsx)(h.i,{formattedValue:H,dropdownOpened:U,dropdownHandlers:L,classNames:I,styles:V,unstyled:k,ref:t,onClear:E,shouldClear:Z,value:F,size:j,variant:P,dropdownType:w,...N,type:a,__staticSelector:"YearPickerInput",children:(0,r.jsx)(m.q,{...z,size:j,variant:P,type:a,value:F,defaultDate:Array.isArray(F)?F[0]||(0,u.S)({maxDate:O,minDate:Y,timezone:A.getTimezone()}):F||(0,u.S)({maxDate:O,minDate:Y,timezone:A.getTimezone()}),onChange:W,locale:S,classNames:I,styles:V,unstyled:k,__staticSelector:"YearPickerInput",__stopPropagation:"popover"===w,minDate:Y,maxDate:O,date:(0,c.w)("add",z.date,A.getTimezone()),__timezoneApplied:!0})})});y.classes={...h.i.classes,...m.q.classes},y.displayName="@mantine/dates/YearPickerInput";var g=n(42411);let{usage:$,multiple:v,range:S,configurator:x,modal:D,icon:k,clearable:b,valueFormatter:j}=(0,g.B)(y),P=`
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput valueFormat="YY" type="multiple" label="Pick year" placeholder="Pick year" />
  );
}
`,w={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(y,{valueFormat:"YY",type:"multiple",label:"Pick year",placeholder:"Pick year"})},code:P},M=`
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Disabled"
      placeholder="Pick year"
      disabled
    />
  );
}
`,Y={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(y,{valueFormat:"YY",type:"multiple",label:"Disabled",placeholder:"Pick year",disabled:!0})},code:M};var O=n(79016),C=n(33638);let T=(0,O.A)(C.us.YearPickerInput);function _(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components},{Demo:n,GetElementRef:i,InputAccessibility:s,InputFeatures:o}=t;return n||V("Demo",!0),i||V("GetElementRef",!0),s||V("InputAccessibility",!0),o||V("InputFeatures",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"yearpicker-props",children:"YearPicker props"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"YearPickerInput"})," supports most of the ",(0,r.jsx)(t.a,{href:"/dates/year-picker/",children:"YearPicker"})," props,\nread through ",(0,r.jsx)(t.a,{href:"/dates/year-picker/",children:"YearPicker"})," documentation to learn about all component features that are not listed on this page."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:$}),"\n",(0,r.jsx)(t.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,r.jsx)(n,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"open-picker-in-modal",children:"Open picker in modal"}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.a,{href:"/dates/year-picker/",children:"YearPicker"})," is rendered inside ",(0,r.jsx)(t.a,{href:"/core/popover/",children:"Popover"}),".\nYou can change that to ",(0,r.jsx)(t.a,{href:"/core/modal/",children:"Modal"})," by setting ",(0,r.jsx)(t.code,{children:'dropdownType="modal"'}),":"]}),"\n",(0,r.jsx)(n,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"value-format",children:"Value format"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"valueFormat"})," prop to change ",(0,r.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of value label:"]}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"valueFormatter"})," is a more powerful alternative to ",(0,r.jsx)(t.code,{children:"valueFormat"})," prop.\nIt allows formatting value label with a custom function.\nThe function is the same for all component types (",(0,r.jsx)(t.code,{children:"default"}),", ",(0,r.jsx)(t.code,{children:"multiple"})," and ",(0,r.jsx)(t.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using a custom formatter function with ",(0,r.jsx)(t.code,{children:'type="multiple"'}),":"]}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"clearable"})," prop to display clear button in the right section. Note that if you set ",(0,r.jsx)(t.code,{children:"rightSection"}),"\nprop, clear button will not be displayed."]}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(o,{component:"MonthPickerInput",element:"button"}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"with-icon",children:"With icon"}),"\n",(0,r.jsx)(n,{data:k}),"\n",(0,r.jsx)(i,{component:"YearPickerInput",refType:"button",package:"@mantine/dates"}),"\n",(0,r.jsx)(s,{component:"YearPickerInput",packageName:"@mantine/dates"})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(T,{...e,children:(0,r.jsx)(_,{...e})})}function V(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},42411:function(e,t,n){"use strict";n.d(t,{B:function(){return g}});var r=n(52322);let a=e=>`
import { ${e} } from '@mantine/dates';

function Demo() {
  return (
    <${e}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`,i=e=>`import { ${e} } from '@mantine/dates';


function Demo() {
  return (
    <${e}
      {{props}}
    />
  );
}
`;var s=n(2784),o=n(70932),l=n(58898);let u=e=>`
import { useState } from 'react';
import { rem } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  return (
    <${e}
      leftSection={icon}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,c=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${e}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,d=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <${e}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`,f=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${e}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`,h=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${e}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;var m=n(28879);let p=e=>`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${e}, DateFormatter } from '@mantine/dates';

const formatter: DateFormatter = ({ type, date, locale, format }) => {
  if (type === 'multiple' && Array.isArray(date)) {
    if (date.length === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (date.length > 1) {
      return \`\${date.length} dates selected\`;
    }

    return '';
  }

  return '';
};

function Demo() {
  const [value, setValue] = useState<Date[]>([]);

  return (
    <${e}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`,y=({type:e,date:t,locale:n,format:r})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return m(t[0]).locale(n).format(r);if(t.length>1)return`${t.length} dates selected`}return""};function g(e){return{usage:{type:"code",centered:!0,maxWidth:400,code:h(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([]);return(0,r.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:f(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([null,null]);return(0,r.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:n})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:i(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},icon:{type:"code",centered:!0,maxWidth:400,code:u(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{leftSection:(0,r.jsx)(o.Z,{style:{width:(0,l.h)(18),height:(0,l.h)(18)},stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},clearable:{type:"code",centered:!0,maxWidth:400,code:a(e.displayName.replace("@mantine/dates/","")),component:()=>(0,r.jsx)(e,{clearable:!0,defaultValue:new Date,label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:p(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([]);return(0,r.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:n,type:"multiple",valueFormatter:y})}}}}},9882:function(e,t,n){"use strict";function r(e){let{maxLevel:t,minLevel:n,defaultLevel:r,level:a,onLevelChange:i,nextIcon:s,previousIcon:o,date:l,defaultDate:u,onDateChange:c,numberOfColumns:d,columnsToScroll:f,ariaLabels:h,onYearSelect:m,onMonthSelect:p,onYearMouseEnter:y,onMonthMouseEnter:g,onNextMonth:$,onPreviousMonth:v,onNextYear:S,onPreviousYear:x,onNextDecade:D,onPreviousDecade:k,withCellSpacing:b,__updateDateOnYearSelect:j,__updateDateOnMonthSelect:P,firstDayOfWeek:w,weekdayFormat:M,weekendDays:Y,getDayProps:O,excludeDate:C,renderDay:T,hideOutsideDates:_,hideWeekdays:I,getDayAriaLabel:V,monthLabelFormat:z,monthsListFormat:N,getMonthControlProps:A,yearLabelFormat:F,yearsListFormat:W,getYearControlProps:H,decadeLabelFormat:L,allowSingleDateInRange:U,allowDeselect:E,minDate:Z,maxDate:B,locale:J,...q}=e;return{calendarProps:{maxLevel:t,minLevel:n,defaultLevel:r,level:a,onLevelChange:i,nextIcon:s,previousIcon:o,date:l,defaultDate:u,onDateChange:c,numberOfColumns:d,columnsToScroll:f,ariaLabels:h,onYearSelect:m,onMonthSelect:p,onYearMouseEnter:y,onMonthMouseEnter:g,onNextMonth:$,onPreviousMonth:v,onNextYear:S,onPreviousYear:x,onNextDecade:D,onPreviousDecade:k,withCellSpacing:b,__updateDateOnYearSelect:j,__updateDateOnMonthSelect:P,firstDayOfWeek:w,weekdayFormat:M,weekendDays:Y,getDayProps:O,excludeDate:C,renderDay:T,hideOutsideDates:_,hideWeekdays:I,getDayAriaLabel:V,monthLabelFormat:z,monthsListFormat:N,getMonthControlProps:A,yearLabelFormat:F,yearsListFormat:W,getYearControlProps:H,decadeLabelFormat:L,allowSingleDateInRange:U,allowDeselect:E,minDate:Z,maxDate:B,locale:J},others:q}}n.d(t,{M:function(){return r}})},20228:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});var r=n(52322);function a({value:e,type:t,name:n,form:a}){return(0,r.jsx)("input",{type:"hidden",value:function(e,t){if("range"===t&&Array.isArray(e)){let[t,n]=e;return t?n?`${t.toISOString()} \u2013 ${n.toISOString()}`:`${t.toISOString()} \u2013`:""}return"multiple"===t&&Array.isArray(e)?e.map(e=>e?.toISOString()).filter(Boolean).join(", "):!Array.isArray(e)&&e?e.toISOString():""}(e,t),name:n,form:a})}a.displayName="@mantine/dates/HiddenDatesInput"},71686:function(e,t,n){"use strict";n.d(t,{i:function(){return m}});var r=n(52322),a=n(40489),i=n(82027),s=n(7140),o=n(2670),l=n(78222),u=n(6941),c=n(50205),d=n(20228),f={input:"m_6fa5e2aa"};let h={},m=(0,i.d)((e,t)=>{let{inputProps:n,wrapperProps:i,placeholder:m,classNames:p,styles:y,unstyled:g,popoverProps:$,modalProps:v,dropdownType:S,children:x,formattedValue:D,dropdownHandlers:k,dropdownOpened:b,onClick:j,clearable:P,onClear:w,clearButtonProps:M,rightSection:Y,shouldClear:O,readOnly:C,disabled:T,value:_,name:I,form:V,type:z,...N}=(0,s.k)("PickerInputBase",h,e),A=Y||(P&&O&&!C&&!T?(0,r.jsx)(o.P,{variant:"transparent",onClick:w,unstyled:g,size:n.size||"sm",...M}):null),F=()=>{let e="range"===z&&Array.isArray(_)&&_[0]&&!_[1];e&&w(),k.close()};return(0,r.jsxs)(r.Fragment,{children:["modal"===S&&!C&&(0,r.jsx)(l.u,{opened:b,onClose:F,withCloseButton:!1,size:"auto","data-dates-modal":!0,unstyled:g,...v,children:x}),(0,r.jsx)(u.I.Wrapper,{...i,children:(0,r.jsxs)(c.J,{position:"bottom-start",opened:b,trapFocus:!0,returnFocus:!0,unstyled:g,...$,disabled:$?.disabled||"modal"===S||C,onClose:()=>{$?.onClose?.(),F()},children:[(0,r.jsx)(c.J.Target,{children:(0,r.jsx)(u.I,{"aria-label":D||m,"data-dates-input":!0,"data-read-only":C||void 0,disabled:T,component:"button",type:"button",multiline:!0,onClick:e=>{j?.(e),k.toggle()},rightSection:A,...n,ref:t,classNames:{...p,input:(0,a.Z)(f.input,p?.input)},...N,children:D||(0,r.jsx)(u.I.Placeholder,{error:n.error,unstyled:g,className:p?.placeholder,style:y?.placeholder,children:m})})}),(0,r.jsx)(c.J.Dropdown,{"data-dates-dropdown":!0,children:x})]})}),(0,r.jsx)(d.n,{value:_,name:I,form:V,type:z})]})});m.classes=f,m.displayName="@mantine/dates/PickerInputBase"},98071:function(e,t,n){"use strict";n.d(t,{q:function(){return f}});var r=n(52322),a=n(82027),i=n(38483),s=n(51477),o=n(82083),l=n(46766);n(28879);var u=n(51235);n(2784);var c=n(11204);let d={type:"default"},f=(0,a.d)((e,t)=>{let n=(0,i.w)("YearPicker",d,e),{classNames:a,styles:f,vars:h,type:m,defaultValue:p,value:y,onChange:g,__staticSelector:$,getYearControlProps:v,allowSingleDateInRange:S,allowDeselect:x,onMouseLeave:D,onYearSelect:k,__updateDateOnYearSelect:b,__timezoneApplied:j,...P}=n,{onDateChange:w,onRootMouseLeave:M,onHoveredDateChange:Y,getControlProps:O}=(0,o.D)({type:m,level:"year",allowDeselect:x,allowSingleDateInRange:S,value:y,defaultValue:p,onChange:g,onMouseLeave:D,applyTimezone:!j}),{resolvedClassNames:C,resolvedStyles:T}=(0,s.h)({classNames:a,styles:f,props:n}),_=(0,l.e)();return(0,r.jsx)(c.f,{ref:t,minLevel:"decade",__updateDateOnYearSelect:b??!1,__staticSelector:$||"YearPicker",onMouseLeave:M,onYearMouseEnter:(e,t)=>Y(t),onYearSelect:e=>{w(e),k?.(e)},getYearControlProps:e=>({...O(e),...v?.(e)}),classNames:C,styles:T,...P,date:(0,u.w)("add",P.date,_.getTimezone(),j),__timezoneApplied:!0})});f.classes=c.f.classes,f.displayName="@mantine/dates/YearPicker"},26005:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r=n(3900),a=n(46766),i=n(28879),s=n(93141);function o({type:e,value:t,defaultValue:n,onChange:o,locale:l,format:u,closeOnChange:c,sortDates:d,labelSeparator:f,valueFormatter:h}){let m=(0,a.e)(),[p,y]=(0,r.q)(!1),[g,$]=(0,s.l)({type:e,value:t,defaultValue:n,onChange:o}),v=function({formatter:e,...t}){return(e||function({type:e,date:t,locale:n,format:r,labelSeparator:a}){let s=e=>i(e).locale(n).format(r);if("default"===e)return null===t?"":s(t);if("multiple"===e)return t.map(s).join(", ");if("range"===e&&Array.isArray(t)){if(t[0]&&t[1])return`${s(t[0])} ${a} ${s(t[1])}`;if(t[0])return`${s(t[0])} ${a} `}return""})(t)}({type:e,date:g,locale:m.getLocale(l),format:u,labelSeparator:m.getLabelSeparator(f),formatter:h}),S=t=>{c&&("default"===e&&y.close(),"range"===e&&t[0]&&t[1]&&y.close()),d&&"multiple"===e?$([...t].sort((e,t)=>e.getTime()-t.getTime())):$(t)},x="range"===e?!!g[0]:"multiple"===e?g.length>0:null!==g;return{_value:g,setValue:S,onClear:()=>S("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:x,formattedValue:v,dropdownOpened:p,dropdownHandlers:y}}},82083:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(28879),a=n(2784),i=n(93141);function s(e,t){let n=[...t].sort((e,t)=>e.getTime()-t.getTime());return r(n[0]).startOf("day").subtract(1,"ms").isBefore(e)&&r(n[1]).endOf("day").add(1,"ms").isAfter(e)}function o({type:e,level:t,value:n,defaultValue:o,onChange:l,allowSingleDateInRange:u,allowDeselect:c,onMouseLeave:d,applyTimezone:f=!0}){let[h,m]=(0,i.l)({type:e,value:n,defaultValue:o,onChange:l,applyTimezone:f}),[p,y]=(0,a.useState)("range"===e&&h[0]&&!h[1]?h[0]:null),[g,$]=(0,a.useState)(null),v=e=>p instanceof Date&&g instanceof Date?s(e,[g,p]):h[0]instanceof Date&&h[1]instanceof Date&&s(e,h),S="range"===e?e=>{d?.(e),$(null)}:d,x=e=>h[0]instanceof Date&&!!r(e).isSame(h[0],t)&&!(g&&r(g).isBefore(h[0])),D=e=>h[1]instanceof Date?r(e).isSame(h[1],t):h[0]instanceof Date&&!!g&&r(g).isBefore(h[0])&&r(e).isSame(h[0],t),k="range"===e&&p?$:()=>{};return(0,a.useEffect)(()=>{"range"!==e||h[0]||h[1]||y(null)},[n]),{onDateChange:n=>{if("range"===e){if(p instanceof Date&&!h[1]){if(r(n).isSame(p,t)&&!u){y(null),$(null),m([null,null]);return}let e=[n,p];e.sort((e,t)=>e.getTime()-t.getTime()),m(e),$(null),y(null);return}if(h[0]&&!h[1]&&r(n).isSame(h[0],t)&&!u){y(null),$(null),m([null,null]);return}m([n,null]),$(null),y(n);return}if("multiple"===e){h.some(e=>r(e).isSame(n,t))?m(h.filter(e=>!r(e).isSame(n,t))):m([...h,n]);return}h&&c&&r(n).isSame(h,t)?m(null):m(n)},onRootMouseLeave:S,onHoveredDateChange:k,getControlProps:n=>{if("range"===e)return{selected:h.some(e=>e&&r(e).isSame(n,t)),inRange:v(n),firstInRange:x(n),lastInRange:D(n),"data-autofocus":!!h[0]&&r(h[0]).isSame(n,t)||void 0};if("multiple"===e)return{selected:h.some(e=>e&&r(e).isSame(n,t)),"data-autofocus":!!h[0]&&r(h[0]).isSame(n,t)||void 0};let a=r(h).isSame(n,t);return{selected:a,"data-autofocus":a||void 0}},_value:h,setValue:m}}},93893:function(e,t,n){"use strict";n.d(t,{S:function(){return i}});var r=n(28879),a=n(51235);function i({minDate:e,maxDate:t,timezone:n}){let i=(0,a.w)("add",new Date,n);return e||t?e&&r(i).isBefore(e)?e:t&&r(i).isAfter(t)?t:i:i}},3900:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(2784);function a(e=!1,t){let{onOpen:n,onClose:a}=t||{},[i,s]=(0,r.useState)(e),o=(0,r.useCallback)(()=>{s(e=>e||(n?.(),!0))},[n]),l=(0,r.useCallback)(()=>{s(e=>e?(a?.(),!1):e)},[a]),u=(0,r.useCallback)(()=>{i?l():o()},[l,o,i]);return[i,{open:o,close:l,toggle:u}]}}},function(e){e.O(0,[57938,17454,47747,11204,49774,92888,40179],function(){return e(e.s=26798)}),_N_E=e.O()}]);