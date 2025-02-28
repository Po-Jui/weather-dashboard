(function(){"use strict";var e={8536:function(e,t,n){var a=n(5130),l=n(6768),o=(n(8111),n(2489),n(4232)),r=n(144),u=n(7960),s=n(1560),c=n(3813),i=n(6756),d=n(5526),f=n(9669),p=n(5126),b=n(6887),m=n(6498),v=n(7294),_=n(6632),k={__name:"SearchInput",emits:["place-data"],setup(e,{emit:t}){const n=t,a=(0,r.Kh)({query:"",timeout:null,results:null}),k=((0,r.Kh)({name:"",region:"",country:"",id:"",icon:null}),localStorage.getItem("historyList")?JSON.parse(localStorage.getItem("historyList")):(0,r.Kh)([])),h=(0,r.KR)(!1),y=()=>{setTimeout((()=>{null===a.results&&(h.value=!1)}),100)},g=()=>{clearTimeout(a.timeout),a.timeout=setTimeout((async()=>{if(""!==a.query){const e=await fetch(`https://api.weatherapi.com/v1/search.json?key=60be4b5c98bb445da82111820252702&q=${a.query}`).catch((e=>console.log(e))),t=await e.json();a.results=t,console.log(a.results)}else a.results=null}),500)},F=async e=>{const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=60be4b5c98bb445da82111820252702&q=id:${e}&days=5&aqi=no&alerts=no`).catch((e=>console.log(e)));h.value=!1;const l=await t.json();console.log(l);const o={name:l.location.name,region:l.location.region,country:l.location.country,id:e,icon:l.current.condition.icon};k.unshift(o);const r=k.filter(((e,t,n)=>t===n.findIndex((t=>t.name===e.name&&t.id===e.id&&t.icon===e.icon))));k.splice(0,k.length,...r),k.length>5?(k.pop(),localStorage.setItem("historyList",JSON.stringify(k))):localStorage.setItem("historyList",JSON.stringify(k)),console.log(k),n("place-data",l),a.query="",a.results=null};return(e,t)=>((0,l.uX)(),(0,l.Wv)(c.I,null,{default:(0,l.k6)((()=>[(0,l.bF)(i.L,{justify:"center",dense:""},{default:(0,l.k6)((()=>[(0,l.bF)(d.B,{cols:"12"},{default:(0,l.k6)((()=>[(0,l.bF)(p.y,{class:"mx-auto mb-5","max-height":"480","max-width":"650",src:"https://risingnepaldaily.com/storage/media/47278/Untitled-1.gif",style:{"border-radius":"10px"}})])),_:1})])),_:1}),(0,l.bF)(s.n,{class:"position-relative"},{default:(0,l.k6)((()=>[(0,l.bF)(_.W,{modelValue:a.query,"onUpdate:modelValue":t[0]||(t[0]=e=>a.query=e),label:"Search for a place",variant:"outlined","prepend-inner-icon":"mdi-magnify","hide-details":"",onInput:g,onFocus:t[1]||(t[1]=e=>h.value=!0),onBlur:y},null,8,["modelValue"]),null!==a.results?((0,l.uX)(),(0,l.Wv)(u.J,{key:0,class:"position-absolute w-100",style:{top:"100%","z-index":"10"}},{default:(0,l.k6)((()=>[(0,l.bF)(b.x8,null,{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.results,(e=>((0,l.uX)(),(0,l.Wv)(m.g,{key:e.id,onClick:t=>F(e.id),class:"hover:text-indigo-600 hover:font-bold"},{default:(0,l.k6)((()=>[(0,l.bF)(v.U,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.name)+", "+(0,o.v_)(e.region)+", "+(0,o.v_)(e.country),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):(0,l.Q3)("",!0),(0,r.R1)(k).length>0&&h.value&&null===a.results?((0,l.uX)(),(0,l.Wv)(u.J,{key:1,class:"position-absolute w-100",style:{top:"100%","z-index":"10"}},{default:(0,l.k6)((()=>[(0,l.bF)(b.x8,null,{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)((0,r.R1)(k),(e=>((0,l.uX)(),(0,l.Wv)(m.g,{key:e.id,onClick:t=>F(e.id),class:"d-flex align-center hover:text-indigo-600 hover:font-bold"},{default:(0,l.k6)((()=>[(0,l.bF)(v.U,null,{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"me-2",size:"1.5rem"},{default:(0,l.k6)((()=>t[2]||(t[2]=[(0,l.eW)("mdi-history")]))),_:1}),(0,l.eW)(" "+(0,o.v_)(e.name)+", "+(0,o.v_)(e.region)+", "+(0,o.v_)(e.country),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):(0,l.Q3)("",!0)])),_:1})])),_:1}))}};const h=k;var y=h,g=n(7511);function F(e,t){return(0,l.uX)(),(0,l.Wv)(g.G,{class:"footerdivider my-10 mt-5"})}var w=n(1241);const x={},L=(0,w.A)(x,[["render",F],["__scopeId","data-v-230515c9"]]);var j=L;const W={key:0},O={key:1};var C={__name:"WeatherForecastDay",props:{day:Object,degreeType:Boolean},setup(e){return(t,n)=>((0,l.uX)(),(0,l.Wv)(i.L,{class:"mb-2",align:"center",justify:"space-between"},{default:(0,l.k6)((()=>[(0,l.bF)(d.B,{class:"text-center",cols:"4"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,o.v_)(new Date(e.day.date).toLocaleDateString("en-us",{weekday:"long"})),1)])),_:1}),(0,l.bF)(d.B,{class:"text-center",cols:"4"},{default:(0,l.k6)((()=>[(0,l.bF)(p.y,{src:e.day.day.condition.icon,alt:"icon",width:"30",class:"mx-auto"},null,8,["src"])])),_:1}),(0,l.bF)(d.B,{class:"text-center",cols:"4"},{default:(0,l.k6)((()=>[!0===e.degreeType?((0,l.uX)(),(0,l.CE)("span",W,(0,o.v_)(Math.round(e.day.day.maxtemp_c))+"°C / "+(0,o.v_)(Math.round(e.day.day.mintemp_c))+"°C",1)):(0,l.Q3)("",!0),!1===e.degreeType?((0,l.uX)(),(0,l.CE)("span",O,(0,o.v_)(Math.round(e.day.day.maxtemp_f))+"°F / "+(0,o.v_)(Math.round(e.day.day.mintemp_f))+"°F",1)):(0,l.Q3)("",!0)])),_:1})])),_:1}))}};const B=C;var X=B,E=n(926);const I={class:"text-h6 font-weight-bold"},S={class:"text-h6 font-weight-bold"},T={class:"text-h6 font-weight-bold"},K={class:"text-h6 font-weight-bold"},M={class:"text-h6 font-weight-bold"},P={class:"text-h6 font-weight-bold"},q={class:"text-body-2 text-opacity-50"};var D={__name:"WeatherInfo",props:{place:Object},setup(e){return(t,n)=>((0,l.uX)(),(0,l.Wv)(u.J,{class:"absolute bg-white/80 backdrop-blur-sm text-slate-900 inset-x-0 bottom-0 rounded-t-lg p-8"},{default:(0,l.k6)((()=>[(0,l.bF)(i.L,{justify:"end",class:"mb-10"},{default:(0,l.k6)((()=>[(0,l.bF)(E.D,{style:{color:"red","background-color":"bisque"},onClick:n[0]||(n[0]=e=>t.$emit("close-info")),icon:""},{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"mr-2 mt-2"},{default:(0,l.k6)((()=>n[1]||(n[1]=[(0,l.eW)("mdi-close")]))),_:1})])),_:1})])),_:1}),(0,l.bF)(i.L,{class:"mb-20",justify:"space-between"},{default:(0,l.k6)((()=>[(0,l.bF)(d.B,{class:"text-center",cols:"4"},{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"mb-2",size:"2rem"},{default:(0,l.k6)((()=>n[2]||(n[2]=[(0,l.eW)("mdi-weather-windy")]))),_:1}),(0,l.Lk)("p",I,(0,o.v_)(e.place.current.wind_kph)+" km/h ",1),n[3]||(n[3]=(0,l.Lk)("p",null,"wind",-1))])),_:1}),(0,l.bF)(d.B,{class:"text-center",cols:"4"},{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"mb-2",size:"2rem"},{default:(0,l.k6)((()=>n[4]||(n[4]=[(0,l.eW)("mdi-water-percent")]))),_:1}),(0,l.Lk)("p",S,(0,o.v_)(e.place.current.humidity)+"%",1),n[5]||(n[5]=(0,l.Lk)("p",null,"humidity",-1))])),_:1}),(0,l.bF)(d.B,{class:"text-center",cols:"4"},{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"mb-2",size:"2rem"},{default:(0,l.k6)((()=>n[6]||(n[6]=[(0,l.eW)("mdi-umbrella")]))),_:1}),(0,l.Lk)("p",T,(0,o.v_)(e.place.current.precip_mm)+" mm",1),n[7]||(n[7]=(0,l.Lk)("p",null,"precipitation",-1))])),_:1})])),_:1}),(0,l.bF)(i.L,{class:"mb-10",justify:"space-between"},{default:(0,l.k6)((()=>[(0,l.bF)(d.B,{class:"text-center",cols:"4"},{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"mb-2",size:"2rem"},{default:(0,l.k6)((()=>n[8]||(n[8]=[(0,l.eW)("mdi-windsock")]))),_:1}),(0,l.Lk)("p",K,(0,o.v_)(e.place.current.wind_dir),1),n[9]||(n[9]=(0,l.Lk)("p",null,"direction",-1))])),_:1}),(0,l.bF)(d.B,{class:"text-center",cols:"4"},{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"mb-2",size:"2rem"},{default:(0,l.k6)((()=>n[10]||(n[10]=[(0,l.eW)("mdi-thermometer")]))),_:1}),(0,l.Lk)("p",M,(0,o.v_)(Math.round(e.place.current.feelslike_c)),1),n[11]||(n[11]=(0,l.Lk)("p",null,"Feels",-1))])),_:1}),(0,l.bF)(d.B,{class:"text-center",cols:"4"},{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"mb-2",size:"2rem"},{default:(0,l.k6)((()=>n[12]||(n[12]=[(0,l.eW)("mdi-weather-sunny")]))),_:1}),(0,l.Lk)("p",P,(0,o.v_)(e.place.current.uv),1),n[13]||(n[13]=(0,l.Lk)("p",null,"UV index",-1))])),_:1})])),_:1}),(0,l.bF)(i.L,{class:"justify-between items-center"},{default:(0,l.k6)((()=>[(0,l.bF)(d.B,{class:"text-left"},{default:(0,l.k6)((()=>[(0,l.bF)(d.B,{class:"d-flex align-center"},{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"me-2",size:"1rem"},{default:(0,l.k6)((()=>n[14]||(n[14]=[(0,l.eW)("mdi-refresh")]))),_:1}),(0,l.Lk)("span",q,"last update: "+(0,o.v_)(e.place.current.last_updated),1)])),_:1})])),_:1})])),_:1})])),_:1}))}};const z=D;var R=z,N=n(697),A=n(3745),J=n(1720),Q=n(8482),V=n(9562);const U={class:"text-lg"},$={class:"text-lg"},G={class:"mr-4 ml-6",style:{font:"5em sans-serif"}},H={key:0},Y={key:1},Z={class:"text-lg"};var ee={__name:"WeatherCard",props:{place:Object},setup(e){const t=(0,r.KR)(!1),n=((0,r.KR)(!1),(0,r.KR)(!1)),s=(0,r.KR)(!0);return(0,l.wB)(s,((e,t)=>{console.log("model 變化：",t,"→",e)})),(r,c)=>((0,l.uX)(),(0,l.Wv)(u.J,{class:(0,o.C4)([1===e.place.current.is_day?"bg-day":"bg-night","text-white p-6 rounded-lg shadow-lg gap-2 relative overflow-hidden"])},{default:(0,l.k6)((()=>[(0,l.bF)(i.L,{class:"mt-2"},{default:(0,l.k6)((()=>[(0,l.bF)(d.B,{class:"d-flex align-center ml-4"},{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"me-2"},{default:(0,l.k6)((()=>c[6]||(c[6]=[(0,l.eW)("mdi-map-marker")]))),_:1}),(0,l.Lk)("h3",U,(0,o.v_)(e.place.location.name),1)])),_:1}),(0,l.bF)(d.B,{class:"d-flex align-center justify-end pe-4 mr-4"},{default:(0,l.k6)((()=>[(0,l.bF)(f.w,{class:"me-2"},{default:(0,l.k6)((()=>c[7]||(c[7]=[(0,l.eW)("mdi-clock-outline")]))),_:1}),(0,l.Lk)("h3",$,(0,o.v_)(new Date(e.place.location.localtime).getHours())+":"+(0,o.v_)(String(new Date(e.place.location.localtime).getMinutes()).padStart(2,"0")),1)])),_:1})])),_:1}),(0,l.bF)(N.O,{class:"text-center"},{default:(0,l.k6)((()=>[(0,l.bF)(p.y,{src:e.place.current.condition.icon,alt:"icon",width:"150",class:"mx-auto",contain:""},null,8,["src"]),(0,l.bF)(i.L,{style:{"margin-top":"-20px"}},{default:(0,l.k6)((()=>[(0,l.bF)(d.B,{class:"d-flex justify-center ml-4"},{default:(0,l.k6)((()=>[(0,l.bF)(Q.N,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=e=>s.value=e),label:"°"+(s.value?"C":"F"),"hide-details":"",inset:""},null,8,["modelValue","label"])])),_:1})])),_:1}),(0,l.Lk)("h1",G,[s.value?((0,l.uX)(),(0,l.CE)("span",Y,(0,o.v_)(Math.round(e.place.current.temp_c))+"°C",1)):((0,l.uX)(),(0,l.CE)("span",H,(0,o.v_)(Math.round(e.place.current.temp_f))+"°F",1))]),(0,l.Lk)("p",Z,(0,o.v_)(e.place.current.condition.text),1)])),_:1}),(0,l.bF)(A.S,null,{default:(0,l.k6)((()=>[(0,l.bF)(E.D,{onClick:c[1]||(c[1]=e=>n.value=!n.value),color:"orange-lighten-2",text:"more days & details"}),(0,l.bF)(J.h),(0,l.bF)(E.D,{icon:n.value?"mdi-chevron-up":"mdi-chevron-down",onClick:c[2]||(c[2]=e=>n.value=!n.value)},null,8,["icon"])])),_:1}),(0,l.bF)(V.Qo,null,{default:(0,l.k6)((()=>[(0,l.bo)((0,l.Lk)("div",null,[(0,l.bF)(j),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.place.forecast.forecastday,((e,t)=>((0,l.uX)(),(0,l.Wv)(i.L,{key:t},{default:(0,l.k6)((()=>[(0,l.bF)(d.B,null,{default:(0,l.k6)((()=>[(0,l.bF)(X,{day:e,degreeType:s.value},null,8,["day","degreeType"])])),_:2},1024)])),_:2},1024)))),128)),(0,l.bF)(V.Qo,null,{default:(0,l.k6)((()=>[t.value?((0,l.uX)(),(0,l.Wv)(N.O,{key:0,class:"position-absolute w-100",style:{bottom:"0"}},{default:(0,l.k6)((()=>[(0,l.bF)(R,{place:e.place,onCloseInfo:c[3]||(c[3]=e=>t.value=!1),onRemovePlace:c[4]||(c[4]=t=>r.removePlace(e.place.location.name))},null,8,["place"])])),_:1})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(A.S,{class:"justify-end mr-1"},{default:(0,l.k6)((()=>[(0,l.bF)(E.D,{onClick:c[5]||(c[5]=e=>t.value=!0),text:""},{default:(0,l.k6)((()=>[c[9]||(c[9]=(0,l.eW)(" More Details")),(0,l.bF)(f.w,{end:""},{default:(0,l.k6)((()=>c[8]||(c[8]=[(0,l.eW)("mdi-arrow-right")]))),_:1})])),_:1})])),_:1})],512),[[a.aG,n.value]])])),_:1})])),_:1},8,["class"]))}};const te=(0,w.A)(ee,[["__scopeId","data-v-0ae334e6"]]);var ne=te,ae=n(6450),le=n(8477);const oe={class:"masonry-grid"};var re={__name:"App",setup(e){const t=(0,r.KR)([]),n=e=>{t.value.unshift(e)};return(e,a)=>((0,l.uX)(),(0,l.Wv)(ae.E,null,{default:(0,l.k6)((()=>[(0,l.bF)(le.Y,null,{default:(0,l.k6)((()=>[(0,l.bF)(c.I,null,{default:(0,l.k6)((()=>[(0,l.bF)(i.L,{justify:"center"},{default:(0,l.k6)((()=>[(0,l.bF)(d.B,{cols:"12",md:"6"},{default:(0,l.k6)((()=>[(0,l.bF)(y,{onPlaceData:n})])),_:1})])),_:1})])),_:1}),(0,l.bF)(c.I,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",oe,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t.value,((e,t)=>((0,l.uX)(),(0,l.Wv)(ne,{key:t,place:e,class:"masonry-item"},null,8,["place"])))),128))])])),_:1})])),_:1})])),_:1}))}};const ue=(0,w.A)(re,[["__scopeId","data-v-23acf846"]]);var se=ue,ce=n(1387);const ie=[{path:"/",name:"home",component:y}],de=(0,ce.aE)({history:(0,ce.Bt)(),routes:ie});var fe=de,pe=(n(5524),n(1036)),be=(0,pe.$N)();async function me(){try{const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900"]}})}catch(e){console.error("Error loading fonts:",e)}}me(),(0,a.Ef)(se).use(fe).use(be).mount("#app")}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,l,o){if(!a){var r=1/0;for(i=0;i<e.length;i++){a=e[i][0],l=e[i][1],o=e[i][2];for(var u=!0,s=0;s<a.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(u=!1,o<r&&(r=o));if(u){e.splice(i--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[a,l,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,l){if(1&l&&(a=this(a)),8&l)return a;if("object"===typeof a&&a){if(4&l&&a.__esModule)return a;if(16&l&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var u=2&l&&a;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){r[e]=function(){return a[e]}}));return r["default"]=function(){return a},n.d(o,r),o}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.c8fa06ba.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-weather-dashboard:";n.l=function(a,l,o,r){if(e[a])e[a].push(l);else{var u,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),i=0;i<c.length;i++){var d=c[i];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=a),e[a]=[l];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var l=e[a];if(delete e[a],u.parentNode&&u.parentNode.removeChild(u),l&&l.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/weather-dashboard/"}(),function(){var e={524:0};n.f.j=function(t,a){var l=n.o(e,t)?e[t]:void 0;if(0!==l)if(l)a.push(l[2]);else{var o=new Promise((function(n,a){l=e[t]=[n,a]}));a.push(l[2]=o);var r=n.p+n.u(t),u=new Error,s=function(a){if(n.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,l[1](u)}};n.l(r,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,o,r=a[0],u=a[1],s=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(l in u)n.o(u,l)&&(n.m[l]=u[l]);if(s)var i=s(n)}for(t&&t(a);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(i)},a=self["webpackChunkvue_weather_dashboard"]=self["webpackChunkvue_weather_dashboard"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(8536)}));a=n.O(a)})();
//# sourceMappingURL=app.ff7269ee.js.map