import{f as te,m as se,V as I,_ as le,a as oe,b as c,c as F}from"./CpmfWiZV.js";import{m as ie,c as ae,d as ne,e as de,f as re,g as B,h as ue,i as ce,a as me,L as fe,k as be,j as U,V as x}from"./DhGTqNVR.js";import{m as Ve,u as j,b as ve,V as ge}from"./DWEoi87O.js";import{J as E,a7 as J,r as X,z as o,a3 as R,a8 as Se,i as L,a9 as we,aa as ye,a6 as T,ab as pe,_ as he,a as M,ac as ke,A as m,t as Ce,ad as z,x as N,ae as O,af as W,B as D}from"./LtJP8o6U.js";import"./C4x_1256.js";const Pe=E({...Ve(),...ie()},"VForm"),Ue=J()({name:"VForm",props:Pe(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:f,emit:s}=t;const i=ae(e),a=X();function b(d){d.preventDefault(),i.reset()}function l(d){const r=d,n=i.validate();r.then=n.then.bind(n),r.catch=n.catch.bind(n),r.finally=n.finally.bind(n),s("submit",r),r.defaultPrevented||n.then(v=>{var g;let{valid:p}=v;p&&((g=a.value)==null||g.submit())}),r.preventDefault()}return j(()=>{var d;return o("form",{ref:a,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:b,onSubmit:l},[(d=f.default)==null?void 0:d.call(f,i)])}),te(i,a)}}),xe=E({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ne(),...se()},"VSwitch"),Ne=J()({name:"VSwitch",inheritAttrs:!1,props:xe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,t){let{attrs:f,slots:s}=t;const i=R(e,"indeterminate"),a=R(e,"modelValue"),{loaderClasses:b}=de(e),{isFocused:l,focus:d,blur:r}=re(e),n=X(),v=Se&&window.matchMedia("(forced-colors: active)").matches,p=L(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),g=we(),q=L(()=>e.id||`switch-${g}`);function G(){i.value&&(i.value=!1)}function H(S){var w,y;S.stopPropagation(),S.preventDefault(),(y=(w=n.value)==null?void 0:w.input)==null||y.click()}return j(()=>{const[S,w]=ye(f),y=B.filterProps(e),K=I.filterProps(e);return o(B,T({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":i.value},b.value,e.class]},S,y,{modelValue:a.value,"onUpdate:modelValue":h=>a.value=h,id:q.value,focused:l.value,style:e.style}),{...s,default:h=>{let{id:Q,messagesId:Y,isDisabled:Z,isReadonly:_,isValid:A}=h;const k={model:a,isValid:A};return o(I,T({ref:n},K,{modelValue:a.value,"onUpdate:modelValue":[V=>a.value=V,G],id:Q.value,"aria-describedby":Y.value,type:"checkbox","aria-checked":i.value?"mixed":void 0,disabled:Z.value,readonly:_.value,onFocus:d,onBlur:r},w),{...s,default:V=>{let{backgroundColorClasses:C,backgroundColorStyles:u}=V;return o("div",{class:["v-switch__track",v?void 0:C.value],style:u.value,onClick:H},[s["track-true"]&&o("div",{key:"prepend",class:"v-switch__track-true"},[s["track-true"](k)]),s["track-false"]&&o("div",{key:"append",class:"v-switch__track-false"},[s["track-false"](k)])])},input:V=>{let{inputNode:C,icon:u,backgroundColorClasses:$,backgroundColorStyles:ee}=V;return o(pe,null,[C,o("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":u||e.loading},e.inset||v?void 0:$.value],style:e.inset?void 0:ee.value},[s.thumb?o(ue,{defaults:{VIcon:{icon:u,size:"x-small"}}},{default:()=>[s.thumb({...k,icon:u})]}):o(ce,null,{default:()=>[e.loading?o(fe,{name:"v-switch",active:!0,color:A.value===!1?void 0:p.value},{default:P=>s.loader?s.loader(P):o(be,{active:P.isActive,color:P.color,indeterminate:!0,size:"16",width:"2"},null)}):u&&o(me,{key:String(u),icon:u,size:"x-small"},null)]})])])}})}})}),{}}}),De={setup(){return{store:ve()}},data(){return{wifiList:[],apStatus:-1,show1:!1,show2:!1,secondary:!1,isValid:!0}},computed:{},created(){const{$listen:e}=M();e("bt:connected",()=>{console.log("bt connected")}),e("bt:disconnected",()=>{console.log("bt disconnected"),this.$refs.form.reset()})},mounted(){this.recieveWifiList()},beforeDestroy(){const{$off:e}=M();e("bt:connected",{}),e("bt:disconnected",{})},methods:{ruleDmx:e=>!e||/^[0-9]{0,3}$/.test(e.toString())&&e>=1&&e<=512||"The field must be a valid decimal 1 to 512",ruleUniverse:e=>!e||/^[0-9]{0,2}$/.test(e.toString())&&e>=0&&e<=15||"The field must be a valid decimal 0 to 15",ruleNet:e=>!e||/^[0-9]{0,3}$/.test(e.toString())&&e>=0&&e<=127||"The field must be a valid decimal 0 to 127",async recieveWifiList(){if(this.$espconfig.ssidListUuid){const e=new TextDecoder("windows-1252");let t=await this.$espconfig.readSsidlist();if(t)return t=e.decode(t),t=JSON.parse(t),this.wifiList=t.SSID,t;this.dropdownMessage="-- SSID from ESP32 --"}},async submit(e){this.store.config.ssidSec||(this.store.config.ssidSec=this.store.config.ssidPrim,this.store.config.pwSec=this.store.config.pwPrim),this.$espconfig.writeCredentials(U(this.store.apName,this.store.config))},reset(e){this.$espconfig.writeCredentials(U(this.store.apName,{reset:""}))},identify(e){this.$espconfig.writeCredentials(U(this.store.apName,{identify:""}))}}};function Ae(e,t,f,s,i,a){const b=le;return Ce(),ke(b,null,{default:m(()=>[o(ge,{class:"mb-5"},{default:m(()=>[o(Ue,{ref:"form",method:"POST",onSubmit:z(a.submit,["prevent"]),onReset:z(a.reset,["prevent"]),class:"ga-0",modelValue:i.isValid,"onUpdate:modelValue":t[13]||(t[13]=l=>i.isValid=l),disabled:!s.store.btStat},{default:m(()=>[o(oe,{fluid:""},{default:m(()=>[t[17]||(t[17]=N("h2",null,"WiFi configuration",-1)),o(c,{label:"Primary SSID","hide-details":"auto",modelValue:s.store.config.ssidPrim,"onUpdate:modelValue":t[0]||(t[0]=l=>s.store.config.ssidPrim=l)},null,8,["modelValue"]),o(F,{label:"Available SSIDs",density:"compact","hide-details":"auto",items:i.wifiList,modelValue:s.store.config.ssidPrim,"onUpdate:modelValue":t[1]||(t[1]=l=>s.store.config.ssidPrim=l)},null,8,["items","modelValue"]),o(c,{"hide-details":"auto",modelValue:s.store.config.pwPrim,"onUpdate:modelValue":t[2]||(t[2]=l=>s.store.config.pwPrim=l),"append-icon":i.show1?"mdi-eye":"mdi-eye-off",type:i.show1?"text":"password",label:"Primary password","onClick:append":t[3]||(t[3]=l=>i.show1=!i.show1)},null,8,["modelValue","append-icon","type"]),O(o(Ne,{modelValue:i.secondary,"onUpdate:modelValue":t[4]||(t[4]=l=>i.secondary=l),label:"Use secondary SSID"},null,8,["modelValue"]),[[W,!1]]),O(N("div",null,[o(c,{label:"Secondary SSID","hide-details":"auto",modelValue:s.store.config.ssidSec,"onUpdate:modelValue":t[5]||(t[5]=l=>s.store.config.ssidSec=l),disabled:!i.secondary},null,8,["modelValue","disabled"]),o(F,{label:"Available SSIDs",density:"compact","hide-details":"auto",items:i.wifiList,modelValue:s.store.config.ssidSec,"onUpdate:modelValue":t[6]||(t[6]=l=>s.store.config.ssidSec=l),disabled:!i.secondary},null,8,["items","modelValue","disabled"]),o(c,{modelValue:s.store.config.pwSec,"onUpdate:modelValue":t[7]||(t[7]=l=>s.store.config.pwSec=l),"append-icon":i.show2?"mdi-eye":"mdi-eye-off",type:i.show2?"text":"password",disabled:!i.secondary,label:"Secondary password","hide-details":"auto","onClick:append":t[8]||(t[8]=l=>i.show2=!i.show2)},null,8,["modelValue","append-icon","type","disabled"])],512),[[W,i.secondary]]),t[18]||(t[18]=N("h2",null,"DMX configuration",-1)),o(c,{label:"Start address","hide-details":"auto",rules:[l=>a.ruleDmx(l)],modelValue:s.store.config.stAddr,"onUpdate:modelValue":t[9]||(t[9]=l=>s.store.config.stAddr=l)},null,8,["rules","modelValue"]),o(c,{label:"ArtNet net","hide-details":"auto",rules:[l=>a.ruleNet(l)],modelValue:s.store.config.stNet,"onUpdate:modelValue":t[10]||(t[10]=l=>s.store.config.stNet=l)},null,8,["rules","modelValue"]),o(c,{label:"ArtNet subnet","hide-details":"auto",rules:[l=>a.ruleUniverse(l)],modelValue:s.store.config.stSubNet,"onUpdate:modelValue":t[11]||(t[11]=l=>s.store.config.stSubNet=l)},null,8,["rules","modelValue"]),o(c,{label:"ArtNet universe","hide-details":"auto",rules:[l=>a.ruleUniverse(l)],modelValue:s.store.config.stUni,"onUpdate:modelValue":t[12]||(t[12]=l=>s.store.config.stUni=l)},null,8,["rules","modelValue"]),o(x,{type:"submit",disabled:!(s.store.btStat&&i.isValid)},{default:m(()=>t[14]||(t[14]=[D(" Save")])),_:1},8,["disabled"]),o(x,{type:"reset",disabled:!s.store.btStat},{default:m(()=>t[15]||(t[15]=[D("Reboot")])),_:1},8,["disabled"]),o(x,{onClick:a.identify,disabled:!s.store.btStat},{default:m(()=>t[16]||(t[16]=[D("Identify")])),_:1},8,["onClick","disabled"])]),_:1})]),_:1},8,["onSubmit","onReset","modelValue","disabled"])]),_:1})]),_:1})}const Te=he(De,[["render",Ae]]);export{Te as default};
