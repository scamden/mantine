(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76959],{28879:function(e){var t,o,n,r,i,s,a,l,d,c,u,h,p,f,m,v,x,w,g,j,b,y;e.exports=(t="millisecond",o="second",n="minute",r="hour",i="week",s="month",a="quarter",l="year",d="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=function(e,t,o){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(o)+e},(m={})[f="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],o=e%100;return"["+e+(t[(o-20)%10]||t[o]||"th")+"]"}},v="$isDayjsObject",x=function(e){return e instanceof b||!(!e||!e[v])},w=function e(t,o,n){var r;if(!t)return f;if("string"==typeof t){var i=t.toLowerCase();m[i]&&(r=i),o&&(m[i]=o,r=i);var s=t.split("-");if(!r&&s.length>1)return e(s[0])}else{var a=t.name;m[a]=t,r=a}return!n&&r&&(f=r),r||!n&&f},g=function(e,t){if(x(e))return e.clone();var o="object"==typeof t?t:{};return o.date=e,o.args=arguments,new b(o)},(j={s:p,z:function(e){var t=-e.utcOffset(),o=Math.abs(t);return(t<=0?"+":"-")+p(Math.floor(o/60),2,"0")+":"+p(o%60,2,"0")},m:function e(t,o){if(t.date()<o.date())return-e(o,t);var n=12*(o.year()-t.year())+(o.month()-t.month()),r=t.clone().add(n,s),i=o-r<0,a=t.clone().add(n+(i?-1:1),s);return+(-(n+(o-r)/(i?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:s,y:l,w:i,d:"day",D:d,h:r,m:n,s:o,ms:t,Q:a})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=w,j.i=x,j.w=function(e,t){return g(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},y=(b=function(){function e(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var p=e.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,o=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(u);if(n){var r=n[2]-1||0,i=(n[7]||"0").substring(0,3);return o?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return j},p.isValid=function(){return this.$d.toString()!==c},p.isSame=function(e,t){var o=g(e);return this.startOf(t)<=o&&o<=this.endOf(t)},p.isAfter=function(e,t){return g(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<g(e)},p.$g=function(e,t,o){return j.u(e)?this[t]:this.set(o,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var a=this,c=!!j.u(t)||t,u=j.p(e),h=function(e,t){var o=j.w(a.$u?Date.UTC(a.$y,t,e):new Date(a.$y,t,e),a);return c?o:o.endOf("day")},p=function(e,t){return j.w(a.toDate()[e].apply(a.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),a)},f=this.$W,m=this.$M,v=this.$D,x="set"+(this.$u?"UTC":"");switch(u){case l:return c?h(1,0):h(31,11);case s:return c?h(1,m):h(0,m+1);case i:var w=this.$locale().weekStart||0,g=(f<w?f+7:f)-w;return h(c?v-g:v+(6-g),m);case"day":case d:return p(x+"Hours",0);case r:return p(x+"Minutes",1);case n:return p(x+"Seconds",2);case o:return p(x+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,i){var a,c=j.p(e),u="set"+(this.$u?"UTC":""),h=((a={}).day=u+"Date",a[d]=u+"Date",a[s]=u+"Month",a[l]=u+"FullYear",a[r]=u+"Hours",a[n]=u+"Minutes",a[o]=u+"Seconds",a[t]=u+"Milliseconds",a)[c],p="day"===c?this.$D+(i-this.$W):i;if(c===s||c===l){var f=this.clone().set(d,1);f.$d[h](p),f.init(),this.$d=f.set(d,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[j.p(e)]()},p.add=function(e,t){var a,d=this;e=Number(e);var c=j.p(t),u=function(t){var o=g(d);return j.w(o.date(o.date()+Math.round(t*e)),d)};if(c===s)return this.set(s,this.$M+e);if(c===l)return this.set(l,this.$y+e);if("day"===c)return u(1);if(c===i)return u(7);var h=((a={})[n]=6e4,a[r]=36e5,a[o]=1e3,a)[c]||1,p=this.$d.getTime()+e*h;return j.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,o=this.$locale();if(!this.isValid())return o.invalidDate||c;var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=j.z(this),i=this.$H,s=this.$m,a=this.$M,l=o.weekdays,d=o.months,u=o.meridiem,p=function(e,o,r,i){return e&&(e[o]||e(t,n))||r[o].slice(0,i)},f=function(e){return j.s(i%12||12,e,"0")},m=u||function(e,t,o){var n=e<12?"AM":"PM";return o?n.toLowerCase():n};return n.replace(h,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return j.s(t.$y,4,"0");case"M":return a+1;case"MM":return j.s(a+1,2,"0");case"MMM":return p(o.monthsShort,a,d,3);case"MMMM":return p(d,a);case"D":return t.$D;case"DD":return j.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(o.weekdaysMin,t.$W,l,2);case"ddd":return p(o.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return j.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return j.s(s,2,"0");case"s":return String(t.$s);case"ss":return j.s(t.$s,2,"0");case"SSS":return j.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,t,d){var c,u=this,h=j.p(t),p=g(e),f=(p.utcOffset()-this.utcOffset())*6e4,m=this-p,v=function(){return j.m(u,p)};switch(h){case l:c=v()/12;break;case s:c=v();break;case a:c=v()/3;break;case i:c=(m-f)/6048e5;break;case"day":c=(m-f)/864e5;break;case r:c=m/36e5;break;case n:c=m/6e4;break;case o:c=m/1e3;break;default:c=m}return d?c:j.a(c)},p.daysInMonth=function(){return this.endOf(s).$D},p.$locale=function(){return m[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var o=this.clone(),n=w(e,t,!0);return n&&(o.$L=n),o},p.clone=function(){return j.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},e}()).prototype,g.prototype=y,[["$ms",t],["$s",o],["$m",n],["$H",r],["$W","day"],["$M",s],["$y",l],["$D",d]].forEach(function(e){y[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),g.extend=function(e,t){return e.$i||(e(t,b,g),e.$i=!0),g},g.locale=w,g.isDayjs=x,g.unix=function(e){return g(1e3*e)},g.en=m[f],g.Ls=m,g.p={},g)},67338:function(e){var t,o;e.exports=(t={year:0,month:1,day:2,hour:3,minute:4,second:5},o={},function(e,n,r){var i,s=function(e,t,n){void 0===n&&(n={});var r,i,s,a,l=new Date(e);return(void 0===(r=n)&&(r={}),(a=o[s=t+"|"+(i=r.timeZoneName||"short")])||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),o[s]=a),a).formatToParts(l)},a=function(e,o){for(var n=s(e,o),i=[],a=0;a<n.length;a+=1){var l=n[a],d=l.type,c=l.value,u=t[d];u>=0&&(i[u]=parseInt(c,10))}var h=i[3],p=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===h?0:h)+":"+i[4]+":"+i[5]+":000",f=+e;return(r.utc(p).valueOf()-(f-=f%1e3))/6e4},l=n.prototype;l.tz=function(e,t){void 0===e&&(e=i);var o=this.utcOffset(),n=this.toDate(),s=n.toLocaleString("en-US",{timeZone:e}),a=Math.round((n-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(n.getTimezoneOffset()/15))-a,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},l.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),o=s(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return o&&o.value};var d=l.startOf;l.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return d.call(this,e,t);var o=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return d.call(o,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var n=o&&t,s=o||t||i,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,o){var n=e-60*t*1e3,r=a(n,o);if(t===r)return[n,t];var i=a(n-=60*(r-t)*1e3,o);return r===i?[n,r]:[e-60*Math.min(r,i)*1e3,Math.max(r,i)]}(r.utc(e,n).valueOf(),l,s),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){i=e}})},10264:function(e){var t,o,n;e.exports=(t="minute",o=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g,function(e,r,i){var s=r.prototype;i.utc=function(e){var t={date:e,utc:!0,args:arguments};return new r(t)},s.utc=function(e){var o=i(this.toDate(),{locale:this.$L,utc:!0});return e?o.add(this.utcOffset(),t):o},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var a=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),a.call(this,e)};var l=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var d=s.utcOffset;s.utcOffset=function(e,r){var i=this.$utils().u;if(i(e))return this.$u?0:i(this.$offset)?d.call(this):this.$offset;if("string"==typeof e&&null===(e=function(e){void 0===e&&(e="");var t=e.match(o);if(!t)return null;var r=(""+t[0]).match(n)||["-",0,0],i=r[0],s=60*+r[1]+ +r[2];return 0===s?0:"+"===i?s:-s}(e)))return this;var s=16>=Math.abs(e)?60*e:e,a=this;if(r)return a.$offset=s,a.$u=0===e,a;if(0!==e){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(s+l,t)).$offset=s,a.$x.$localOffset=l}else a=this.utc();return a};var c=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var u=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():u.call(this)};var h=s.diff;s.diff=function(e,t,o){if(e&&this.$u===e.$u)return h.call(this,e,t,o);var n=this.local(),r=i(e).local();return h.call(n,r,t,o)}})},34051:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/popover",function(){return o(56137)}])},56137:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return E}});var n=o(52322),r=o(45392),i=o(50205),s=o(17115),Text=o(8582);let a=`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,l={type:"code",code:a,centered:!0,component:function(){return(0,n.jsxs)(i.J,{width:200,position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(s.z,{children:"Toggle popover"})}),(0,n.jsx)(i.J.Dropdown,{children:(0,n.jsx)(Text.x,{size:"xs",children:"This is uncontrolled popover, it is opened when button is clicked"})})]})}};var d=o(3900);let c=`
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,u={type:"code",code:c,centered:!0,component:function(){let[e,{close:t,open:o}]=(0,d.q)(!1);return(0,n.jsxs)(i.J,{width:200,position:"bottom",withArrow:!0,shadow:"md",opened:e,children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(s.z,{onMouseEnter:o,onMouseLeave:t,children:"Hover to see popover"})}),(0,n.jsx)(i.J.Dropdown,{style:{pointerEvents:"none"},children:(0,n.jsx)(Text.x,{size:"sm",children:"This popover is shown when user hovers the target element"})})]})}};var h=o(74770);let p=`
import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput label="Name" placeholder="Name" size="xs" />
        <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
`,f={type:"code",code:p,centered:!0,component:function(){return(0,n.jsxs)(i.J,{width:300,trapFocus:!0,position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(s.z,{children:"Toggle popover"})}),(0,n.jsxs)(i.J.Dropdown,{children:[(0,n.jsx)(h.o,{label:"Name",placeholder:"Name",size:"xs"}),(0,n.jsx)(h.o,{label:"Email",placeholder:"john@doe.com",size:"xs",mt:"xs"})]})]})}};var m=o(20368);let v=`
import { Popover, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler\u2019s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Popover middlewares={{ flip: true, shift: true, inline: true }} position="top">
        <Popover.Target>
          <Mark>When visiting a junkyard</Mark>
        </Popover.Target>
        <Popover.Dropdown>Inline dropdown</Popover.Dropdown>
      </Popover>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh\u2019s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`,x={type:"code",component:function(){return(0,n.jsxs)(Text.x,{children:["Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers."," ",(0,n.jsxs)(i.J,{middlewares:{flip:!0,shift:!0,inline:!0},position:"top",children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(m.v,{children:"When visiting a junkyard"})}),(0,n.jsx)(i.J.Dropdown,{children:"Inline dropdown"})]}),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot of a rainbow."]})},code:v},w=`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

`,g={type:"code",code:w,centered:!0,component:function(){return(0,n.jsxs)(i.J,{width:"target",position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(s.z,{w:280,children:"Toggle popover"})}),(0,n.jsx)(i.J.Dropdown,{children:(0,n.jsx)(Text.x,{size:"sm",children:"This popover has same width as target, it is useful when you are building input dropdowns"})})]})}};var j=o(19282);let b=`
import { Popover, Button, Text } from '@mantine/core';


function Demo() {
  return (
    <Popover
      width={200}
      opened
      {{props}}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,y={type:"configurator",component:function(e){return(0,n.jsxs)(i.J,{width:200,opened:!0,...e,children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(s.z,{children:"Popover target"})}),(0,n.jsx)(i.J.Dropdown,{children:(0,n.jsx)(Text.x,{size:"xs",children:"Change position and offset to configure dropdown offset relative to target"})})]})},code:b,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:j.c,libraryValue:null},{type:"number",prop:"offset",initialValue:0,libraryValue:null,min:-50,max:50}]},P={type:"configurator",component:function(e){return(0,n.jsxs)(i.J,{width:200,position:e.position,opened:!0,offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis},children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(s.z,{children:"Popover target"})}),(0,n.jsx)(i.J.Dropdown,{children:(0,n.jsx)(Text.x,{size:"xs",children:"Change position and offset to configure dropdown offset relative to target"})})]})},code:e=>`
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={200}
      position="${e.position}"
      opened
      offset={{ mainAxis: ${e.mainAxis}, crossAxis: ${e.crossAxis} }}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:j.c,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:0,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},D=`
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} opened position="bottom-start" withArrow{{props}}>
      <Popover.Target>
        <Button>Target element</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Arrow position can be changed for *-start and *-end positions</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,$={type:"configurator",component:function(e){return(0,n.jsxs)(i.J,{width:200,opened:!0,position:"bottom-start",withArrow:!0,...e,children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(s.z,{children:"Target element"})}),(0,n.jsx)(i.J.Dropdown,{children:(0,n.jsx)(Text.x,{size:"xs",children:"Arrow position can be changed for *-start and *-end positions"})})]})},code:D,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:10,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:7,libraryValue:7,min:5,max:12},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},T=`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200}{{props}}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,S={type:"configurator",component:function(e){return(0,n.jsxs)(i.J,{width:200,...e,children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(s.z,{children:"Toggle popover"})}),(0,n.jsx)(i.J.Dropdown,{children:(0,n.jsx)(Text.x,{size:"xs",children:"Disabled popover dropdown is always hidden"})})]})},code:T,centered:!0,controls:[{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1}]},O=`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" clickOutsideEvents={['mouseup', 'touchend']}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Popover will be closed with mouseup and touchend events</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,M={type:"code",component:function(){return(0,n.jsxs)(i.J,{width:200,position:"bottom",clickOutsideEvents:["mouseup","touchend"],children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(s.z,{children:"Toggle popover"})}),(0,n.jsx)(i.J.Dropdown,{children:(0,n.jsx)(Text.x,{size:"xs",children:"Popover will be closed with mouseup and touchend events"})})]})},code:O,centered:!0};var k=o(79649),z=o(18738);let A=`
import { Button, Popover, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown bg="var(--mantine-color-body)">
        <Select
          label="Select within Popover"
          placeholder="Select within Popover"
          comboboxProps={{ withinPortal: false }}
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
        <DatePickerInput
          label="DatePickerInput within Popover"
          placeholder="DatePickerInput within Popover"
          popoverProps={{ withinPortal: false }}
          mt="md"
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,C={type:"code",component:function(){return(0,n.jsxs)(i.J,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(i.J.Target,{children:(0,n.jsx)(s.z,{children:"Toggle popover"})}),(0,n.jsxs)(i.J.Dropdown,{bg:"var(--mantine-color-body)",children:[(0,n.jsx)(k.P,{label:"Select within Popover",placeholder:"Select within Popover",comboboxProps:{withinPortal:!1},data:["React","Angular","Svelte","Vue"]}),(0,n.jsx)(z.a,{label:"DatePickerInput within Popover",placeholder:"DatePickerInput within Popover",popoverProps:{withinPortal:!1},mt:"md"})]})]})},code:A,centered:!0};var I=o(79016),B=o(33638);let J=(0,I.A)(B.us.Popover);function _(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:o,KeyboardEventsTable:i,TargetComponent:s}=t;return o||N("Demo",!0),i||N("KeyboardEventsTable",!0),s||N("TargetComponent",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:l}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:["You can control Popover state with ",(0,n.jsx)(t.code,{children:"opened"})," and ",(0,n.jsx)(t.code,{children:"onChange"})," props:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Button, Popover } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Popover opened={opened} onChange={setOpened}>\n      <Popover.Target>\n        <Button onClick={() => setOpened((o) => !o)}>\n          Toggle popover\n        </Button>\n      </Popover.Target>\n\n      <Popover.Dropdown>Dropdown</Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Controlled example with mouse events:"}),"\n",(0,n.jsx)(o,{data:u,demoProps:{toggle:!1}}),"\n",(0,n.jsx)(t.h2,{id:"focus-trap",children:"Focus trap"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to use interactive elements (inputs, buttons, etc.) inside ",(0,n.jsx)(t.code,{children:"Popover.Dropdown"}),", set ",(0,n.jsx)(t.code,{children:"trapFocus"})," prop:"]}),"\n",(0,n.jsx)(o,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"inline-elements",children:"Inline elements"}),"\n",(0,n.jsxs)(t.p,{children:["Enable ",(0,n.jsx)(t.code,{children:"inline"})," middleware to use ",(0,n.jsx)(t.code,{children:"Popover"})," with inline elements:"]}),"\n",(0,n.jsx)(o,{data:x}),"\n",(0,n.jsx)(t.h2,{id:"same-width",children:"Same width"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:'width="target"'})," prop to make Popover dropdown take the same width as target element:"]}),"\n",(0,n.jsx)(o,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"offset",children:"offset"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"offset"})," prop to a number to change dropdown position relative to the target element.\nThis way you can control dropdown offset on main axis only."]}),"\n",(0,n.jsx)(o,{data:y}),"\n",(0,n.jsxs)(t.p,{children:["To control offset on both axis, pass object with ",(0,n.jsx)(t.code,{children:"mainAxis"})," and ",(0,n.jsx)(t.code,{children:"crossAxis"})," properties:"]}),"\n",(0,n.jsx)(o,{data:P}),"\n",(0,n.jsx)(t.h2,{id:"middlewares",children:"Middlewares"}),"\n",(0,n.jsxs)(t.p,{children:["You can enable or disable ",(0,n.jsx)(t.a,{href:"https://floating-ui.com/",children:"Floating UI"})," middlewares with\n",(0,n.jsx)(t.code,{children:"middlewares"})," prop:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://floating-ui.com/docs/shift",children:"shift"})," middleware shifts the dropdown to keep it in view. It is enabled by default"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://floating-ui.com/docs/flip",children:"flip"})," middleware changes the placement of the dropdown to keep it in view. It is enabled by default."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://floating-ui.com/docs/inline",children:"inline"})," middleware improves positioning for inline reference elements that span over multiple lines. It is disabled by default."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://floating-ui.com/docs/size",children:"size"})," middleware manipulates dropdown size. It is disabled by default."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Example of turning off ",(0,n.jsx)(t.code,{children:"shift"})," and ",(0,n.jsx)(t.code,{children:"flip"})," middlewares:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover\n      middlewares={{ flip: false, shift: false }}\n      position=\"bottom\"\n    >\n      {/* Popover content */}\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"customize-middleware-options",children:"Customize middleware options"}),"\n",(0,n.jsxs)(t.p,{children:["To customize ",(0,n.jsx)(t.a,{href:"https://floating-ui.com/",children:"Floating UI"})," middlewares options, pass them as\nan object to the ",(0,n.jsx)(t.code,{children:"middlewares"})," prop. For example, to change ",(0,n.jsx)(t.a,{href:"https://floating-ui.com/docs/shift",children:"shift"}),"\nmiddleware padding to ",(0,n.jsx)(t.code,{children:"20px"})," use the following configuration:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover\n      middlewares={{ shift: { padding: 20 } }}\n      position=\"bottom\"\n    >\n      {/* Popover content */}\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-arrow",children:"Dropdown arrow"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withArrow"})," prop to add an arrow to the dropdown. Arrow is a ",(0,n.jsx)(t.code,{children:"div"})," element rotated with ",(0,n.jsx)(t.code,{children:"transform: rotate(45deg)"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"arrowPosition"})," prop determines how arrow is position relative to the target element when ",(0,n.jsx)(t.code,{children:"position"})," is set to ",(0,n.jsx)(t.code,{children:"*-start"})," and ",(0,n.jsx)(t.code,{children:"*-end"})," values on ",(0,n.jsx)(t.code,{children:"Popover"})," component.\nBy default, the value is ",(0,n.jsx)(t.code,{children:"center"})," – the arrow is positioned in the center of the target element if it is possible."]}),"\n",(0,n.jsxs)(t.p,{children:["If you change ",(0,n.jsx)(t.code,{children:"arrowPosition"})," to ",(0,n.jsx)(t.code,{children:"side"}),", then the arrow will be positioned on the side of the target element,\nand you will be able to control arrow offset with ",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop. Note that when ",(0,n.jsx)(t.code,{children:"arrowPosition"})," is set to ",(0,n.jsx)(t.code,{children:"center"}),",\n",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop is ignored."]}),"\n",(0,n.jsx)(o,{data:$}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"disabled"})," prop to prevent ",(0,n.jsx)(t.code,{children:"Popover.Dropdown"})," from rendering:"]}),"\n",(0,n.jsx)(o,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"click-outside",children:"Click outside"}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"Popover"})," closes when you click outside of the dropdown. To disable this behavior, set ",(0,n.jsx)(t.code,{children:"closeOnClickOutside={false}"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can configure events that are used for click outside detection with ",(0,n.jsx)(t.code,{children:"clickOutsideEvents"})," prop.\nBy default, ",(0,n.jsx)(t.code,{children:"Popover"})," listens to ",(0,n.jsx)(t.code,{children:"mousedown"})," and ",(0,n.jsx)(t.code,{children:"touchstart"})," events. You can change it to any other\nevents, for example, ",(0,n.jsx)(t.code,{children:"mouseup"})," and ",(0,n.jsx)(t.code,{children:"touchend"}),":"]}),"\n",(0,n.jsx)(o,{data:M}),"\n",(0,n.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,n.jsxs)(t.p,{children:["Popover uses ",(0,n.jsx)(t.a,{href:"/core/focus-trap/",children:"FocusTrap"})," component to manage focus.\nAdd ",(0,n.jsx)(t.code,{children:"data-autofocus"})," attribute to element that should receive initial focus:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover>\n      <Popover.Target>\n        <button type=\"button\">Target</button>\n      </Popover.Target>\n      <Popover.Dropdown>\n        <input />\n        <input data-autofocus />\n        <input />\n      </Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(s,{component:"Popover"}),"\n",(0,n.jsx)(t.h2,{id:"nested-popovers",children:"Nested popovers"}),"\n",(0,n.jsxs)(t.p,{children:["Nested popovers require children rendering without ",(0,n.jsx)(t.a,{href:"/core/portal/",children:"Portal"}),". Usually, you\nshould disable portal with props of the component that renders popover content, for example,\n",(0,n.jsx)(t.a,{href:"/core/select/",children:"Select"})," has ",(0,n.jsx)(t.code,{children:"comboboxProps={{ withinPortal: false }}"})," prop. Check documentation\nof the component that you are using to render popover content to find out how to disable the portal.\nIf the portal is not disabled, outside click will close all popovers."]}),"\n",(0,n.jsxs)(t.p,{children:["Example of disabling portal in ",(0,n.jsx)(t.a,{href:"/core/select/",children:"Select"})," and ",(0,n.jsx)(t.a,{href:"/dates/date-picker-input/",children:"DatePickerInput"}),"\ncomponents:"]}),"\n",(0,n.jsx)(o,{data:C}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:["Popover follows ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Dropdown element has ",(0,n.jsx)(t.code,{children:'role="dialog"'})," and ",(0,n.jsx)(t.code,{children:'aria-labelledby="target-id"'})," attributes"]}),"\n",(0,n.jsxs)(t.li,{children:["Target element has ",(0,n.jsx)(t.code,{children:'aria-haspopup="dialog"'}),", ",(0,n.jsx)(t.code,{children:"aria-expanded"}),", ",(0,n.jsx)(t.code,{children:'aria-controls="dropdown-id"'})," attributes"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Uncontrolled Popover will be accessible only when used with ",(0,n.jsx)(t.code,{children:"button"})," element or component that renders it (",(0,n.jsx)(t.a,{href:"/core/button/",children:"Button"}),", ",(0,n.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"}),", etc.).\nOther elements will not support ",(0,n.jsx)(t.code,{children:"Space"})," and ",(0,n.jsx)(t.code,{children:"Enter"})," key presses."]}),"\n",(0,n.jsx)(t.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(i,{data:[{key:"Escape",description:"Closes dropdown",condition:"Focus within dropdown"},{key:"Space/Enter",description:"Opens/closes dropdown",condition:"Focus on target element"}]})]})}function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(J,{...e,children:(0,n.jsx)(_,{...e})})}function N(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},19282:function(e,t,o){"use strict";o.d(t,{M:function(){return r},c:function(){return n}});let n=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}],r=[{label:"side",value:"side"},{label:"center",value:"center"}]},66958:function(e,t,o){"use strict";o.d(t,{r:function(){return c}});var n=o(52322),r=o(40489),i=o(40284),s=o(38405),a=o(61324),l=o(36186),d=o(61271);function Option({data:e,withCheckIcon:t,value:o,checkIconPosition:s,unstyled:c,renderOption:u}){if(!(0,l.f)(e)){var h;let l=(h=e.value,Array.isArray(o)?o.includes(h):o===h),p=t&&l&&(0,n.jsx)(i.n,{className:d.Z.optionsDropdownCheckIcon}),f=(0,n.jsxs)(n.Fragment,{children:["left"===s&&p,(0,n.jsx)("span",{children:e.label}),"right"===s&&p]});return(0,n.jsx)(a.h.Option,{value:e.value,disabled:e.disabled,className:(0,r.Z)({[d.Z.optionsDropdownOption]:!c}),"data-reverse":"right"===s||void 0,"data-checked":l||void 0,"aria-selected":l,active:l,children:"function"==typeof u?u({option:e,checked:l}):f})}let p=e.items.map(e=>(0,n.jsx)(Option,{data:e,value:o,unstyled:c,withCheckIcon:t,checkIconPosition:s,renderOption:u},e.value));return(0,n.jsx)(a.h.Group,{label:e.group,children:p})}function c({data:e,hidden:t,hiddenWhenEmpty:o,filter:r,search:i,limit:d,maxDropdownHeight:c,withScrollArea:u=!0,filterOptions:h=!0,withCheckIcon:p=!1,value:f,checkIconPosition:m,nothingFoundMessage:v,unstyled:x,labelId:w,renderOption:g,scrollAreaProps:j}){!function e(t,o=new Set){if(Array.isArray(t))for(let n of t)if((0,l.f)(n))e(n.items,o);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof n.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`);if(o.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);o.add(n.value)}}(e);let b="string"==typeof i,y=b?(r||function e({options:t,search:o,limit:n}){let r=o.trim().toLowerCase(),i=[];for(let s=0;s<t.length;s+=1){let a=t[s];if(i.length===n)break;(0,l.f)(a)&&i.push({group:a.group,items:e({options:a.items,search:o,limit:n-i.length})}),!(0,l.f)(a)&&a.label.toLowerCase().includes(r)&&i.push(a)}return i})({options:e,search:h?i:"",limit:d??1/0}):e,P=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(y),D=y.map(e=>(0,n.jsx)(Option,{data:e,withCheckIcon:p,value:f,checkIconPosition:m,unstyled:x,renderOption:g},(0,l.f)(e)?e.group:e.value));return(0,n.jsx)(a.h.Dropdown,{hidden:t||o&&P,children:(0,n.jsxs)(a.h.Options,{labelledBy:w,children:[u?(0,n.jsx)(s.x.Autosize,{mah:c??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...j,children:D}):D,P&&v&&(0,n.jsx)(a.h.Empty,{children:v})]})})}},36186:function(e,t,o){"use strict";function n(e){return"group"in e}o.d(t,{f:function(){return n}})},77606:function(e,t,o){"use strict";o.d(t,{g:function(){return function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}}})},79649:function(e,t,o){"use strict";o.d(t,{P:function(){return x}});var n=o(52322),r=o(2784),i=o(66178),s=o(9341),a=o(51477),l=o(38483),d=o(82027),c=o(29995),u=o(77606),h=o(61324),p=o(66958),f=o(56237),m=o(73063);let v={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},x=(0,d.d)((e,t)=>{let o=(0,l.w)("Select",v,e),{classNames:d,styles:x,unstyled:w,vars:g,dropdownOpened:j,defaultDropdownOpened:b,onDropdownClose:y,onDropdownOpen:P,onFocus:D,onBlur:$,onClick:T,onChange:S,data:O,value:M,defaultValue:k,selectFirstOptionOnChange:z,onOptionSubmit:A,comboboxProps:C,readOnly:I,disabled:B,filter:J,limit:_,withScrollArea:E,maxDropdownHeight:N,size:Y,searchable:V,rightSection:H,checkIconPosition:F,withCheckIcon:U,nothingFoundMessage:L,name:W,form:Z,searchValue:R,defaultSearchValue:q,onSearchChange:K,allowDeselect:X,error:G,rightSectionPointerEvents:Q,id:ee,clearable:et,clearButtonProps:eo,hiddenInputProps:en,renderOption:er,onClear:ei,autoComplete:es,scrollAreaProps:ea,...el}=o,ed=(0,r.useMemo)(()=>(0,c.R)(O),[O]),ec=(0,r.useMemo)(()=>(0,u.g)(ed),[ed]),eu=(0,i.M)(ee),[eh,ep,ef]=(0,s.C)({value:M,defaultValue:k,finalValue:null,onChange:S}),em="string"==typeof eh?ec[eh]:void 0,[ev,ex]=(0,s.C)({value:R,defaultValue:q,finalValue:em?em.label:"",onChange:K}),ew=(0,f.K)({opened:j,defaultOpened:b,onDropdownOpen:()=>{P?.(),ew.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{y?.(),ew.resetSelectedOption()}}),{resolvedClassNames:eg,resolvedStyles:ej}=(0,a.h)({props:o,styles:x,classNames:d});(0,r.useEffect)(()=>{z&&ew.selectFirstOption()},[z,eh]),(0,r.useEffect)(()=>{null===M&&ex(""),"string"==typeof M&&em&&ex(em.label)},[M,em]);let eb=et&&!!eh&&!B&&!I&&(0,n.jsx)(h.h.ClearButton,{size:Y,...eo,onClear:()=>{ep(null,null),ex(""),ei?.()}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.h,{store:ew,__staticSelector:"Select",classNames:eg,styles:ej,unstyled:w,readOnly:I,onOptionSubmit:e=>{A?.(e);let t=X&&ec[e].value===eh?null:ec[e],o=t?t.value:null;ep(o,t),ef||ex("string"==typeof o&&t?.label||""),ew.closeDropdown()},size:Y,...C,children:[(0,n.jsx)(h.h.Target,{targetType:V?"input":"button",autoComplete:es,children:(0,n.jsx)(m.M,{id:eu,ref:t,rightSection:H||eb||(0,n.jsx)(h.h.Chevron,{size:Y,error:G,unstyled:w}),rightSectionPointerEvents:Q||(eb?"all":"none"),...el,size:Y,__staticSelector:"Select",disabled:B,readOnly:I||!V,value:ev,onChange:e=>{ex(e.currentTarget.value),ew.openDropdown(),z&&ew.selectFirstOption()},onFocus:e=>{V&&ew.openDropdown(),D?.(e)},onBlur:e=>{V&&ew.closeDropdown(),ex(null!=eh&&ec[eh]?.label||""),$?.(e)},onClick:e=>{V?ew.openDropdown():ew.toggleDropdown(),T?.(e)},classNames:eg,styles:ej,unstyled:w,pointer:!V,error:G})}),(0,n.jsx)(p.r,{data:ed,hidden:I||B,filter:J,search:ev,limit:_,hiddenWhenEmpty:!V||!L,withScrollArea:E,maxDropdownHeight:N,filterOptions:V&&em?.label!==ev,value:eh,checkIconPosition:F,withCheckIcon:U,nothingFoundMessage:L,unstyled:w,labelId:`${eu}-label`,renderOption:er,scrollAreaProps:ea})]}),(0,n.jsx)(h.h.HiddenInput,{value:eh,name:W,form:Z,disabled:B,...en})]})});x.classes={...m.M.classes,...h.h.classes},x.displayName="@mantine/core/Select"}},function(e){e.O(0,[57938,17454,47747,11204,61324,18738,49774,92888,40179],function(){return e(e.s=34051)}),_N_E=e.O()}]);