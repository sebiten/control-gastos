import{j as e,r as c,a as n,S as L,b as P,L as M,c as A,T as O,F,R as E,d as T}from"./vendor.ce1622a6.js";import{CircularProgressbar as k,buildStyles as w}from"react-circular-progressbar";import"react-circular-progressbar/dist/styles.css";const _=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};_();const I=({children:t,tipo:a})=>e("div",{className:`alerta ${a}`,children:t}),B=({presupuesto:t,setPresupuesto:a,setIsValidPresupuesto:r})=>{const[l,o]=c.exports.useState("");return e("div",{className:"contenedor-presupuesto contenedor sombra",children:n("form",{onSubmit:d=>{if(d.preventDefault(),!t||t<0){o("No es un presupuesto v\xE1lido");return}o(""),r(!0)},className:"formulario",children:[n("div",{className:"campo",children:[e("label",{children:"Definir Presupuesto"}),e("input",{className:"nuevo-presupuesto",type:"number",placeholder:"A\xF1ade tu Presupuesto",value:t,onChange:d=>a(Number(d.target.value))})]}),e("input",{type:"submit",value:"A\xF1adir"}),l&&e(I,{tipo:"error",children:l})]})})},R=({gastos:t,setGastos:a,presupuesto:r,setPresupuesto:l,setIsValidPresupuesto:o})=>{const[s,d]=c.exports.useState(10),[u,v]=c.exports.useState(0),[p,f]=c.exports.useState(0);c.exports.useEffect(()=>{const g=t.reduce((x,y)=>y.cantidad+x,0),S=r-g,N=((r-S)/r*100).toFixed(2);v(S),f(g),setTimeout(()=>{d(N)},1500)},[t]);const m=g=>g.toLocaleString("en-US",{style:"currency",currency:"USD"}),h=()=>{confirm("\xBFDeseas reiniciar presupuesto y gastos?")&&(a([]),l(0),o(!1))};return n("div",{className:"contenedor-presupuesto contenedor sombra dos-columnas",children:[e("div",{children:e(k,{styles:w({pathColor:s>100?"#DC2626":"#3B82F6",trailColor:"#F5F5F5",textColor:s>100?"#DC2626":"#3B82F6"}),value:s,text:`${s}% Gastado`})}),n("div",{className:"contenido-presupuesto",children:[e("button",{className:"reset-app",type:"button",onClick:h,children:"Resetear App"}),n("p",{children:[e("span",{children:"Presupuesto: "}),m(r)]}),n("p",{className:`${u<0?"negativo":""}`,children:[e("span",{children:"Disponible: "}),m(u)]}),n("p",{children:[e("span",{children:"Gastado: "}),m(p)]})]})]})},$=({gastos:t,setGastos:a,presupuesto:r,setPresupuesto:l,isValidPresupuesto:o,setIsValidPresupuesto:s})=>n("header",{children:[e("h1",{children:"Planificador de Gastos"}),o?e(R,{gastos:t,setGastos:a,presupuesto:r,setPresupuesto:l,setIsValidPresupuesto:s}):e(B,{presupuesto:r,setPresupuesto:l,setIsValidPresupuesto:s})]}),H=({filtro:t,setFiltro:a})=>e("div",{className:"filtros sombra contenedor",children:e("form",{children:n("div",{className:"campo",children:[e("label",{children:"Filtrar Gastos"}),n("select",{value:t,onChange:r=>a(r.target.value),children:[e("option",{value:"",children:"-- Todas las Categor\xEDas --"}),e("option",{value:"ahorro",children:"Ahorro"}),e("option",{value:"comida",children:"Comida"}),e("option",{value:"casa",children:"Casa"}),e("option",{value:"gastos",children:"Gastos Varios"}),e("option",{value:"ocio",children:"Ocio"}),e("option",{value:"salud",children:"Salud"}),e("option",{value:"suscripciones",children:"Suscripciones"})]})]})})});const V=()=>{const t=Math.random().toString(36).substr(2),a=Date.now().toString(36);return t+a},z=t=>{const a=new Date(t),r={year:"numeric",month:"long",day:"2-digit"};return a.toLocaleDateString("es-ES",r)};var J="/assets/icono_ahorro.ff2959d3.svg",U="/assets/icono_casa.1170ce11.svg",q="/assets/icono_comida.db0a9016.svg",K="/assets/icono_gastos.e6dea3b0.svg",Q="/assets/icono_ocio.ad5d0e9e.svg",W="/assets/icono_salud.41ba3136.svg",X="/assets/icono_suscripciones.97f04dc8.svg";const Y={ahorro:J,comida:q,casa:U,gastos:K,ocio:Q,salud:W,suscripciones:X},D=({gasto:t,setGastoEditar:a,eliminarGasto:r})=>{const{categoria:l,nombre:o,cantidad:s,id:d,fecha:u}=t,v=()=>e(M,{children:e(A,{onClick:()=>a(t),children:"Editar"})}),p=()=>e(O,{children:e(A,{onClick:()=>r(d),destructive:!0,children:"Eliminar"})});return e(L,{children:e(P,{leadingActions:v(),trailingActions:p(),children:n("div",{className:"gasto sombra",children:[n("div",{className:"contenido-gasto",children:[e("img",{src:Y[l],alt:"Icono Gasto"}),n("div",{className:"descripcion-gasto",children:[e("p",{className:"categoria",children:l}),e("p",{className:"nombre-gasto",children:o}),n("p",{className:"fecha-gasto",children:["Agregado el: ","",e("span",{children:z(u)})]})]})]}),n("p",{className:"cantidad-gasto",children:["$",s]})]})})})},Z=({gastos:t,setGastoEditar:a,eliminarGasto:r,filtro:l,gastosFiltrados:o})=>e("div",{className:"listado-gastos contenedor",children:l?n(F,{children:[e("h2",{children:o.length?"Gastos":"No Hay Gastos en esta categor\xEDa"}),o.map(s=>e(D,{gasto:s,setGastoEditar:a,eliminarGasto:r},s.id))]}):n(F,{children:[e("h2",{children:t.length?"Gastos":"No Hay Gastos a\xFAn"}),t.map(s=>e(D,{gasto:s,setGastoEditar:a,eliminarGasto:r},s.id))]})});var ee="/assets/cerrar.ab3aac92.svg";const oe=({setModal:t,animarModal:a,setAnimarModal:r,guardarGasto:l,gastoEditar:o,setGastoEditar:s})=>{const[d,u]=c.exports.useState(""),[v,p]=c.exports.useState(""),[f,m]=c.exports.useState(""),[h,g]=c.exports.useState(""),[S,N]=c.exports.useState(""),[x,y]=c.exports.useState("");return c.exports.useEffect(()=>{Object.keys(o).length>0&&(p(o.nombre),m(o.cantidad),g(o.categoria),y(o.id),N(o.fecha))},[]),n("div",{className:"modal",children:[e("div",{className:"cerrar-modal",children:e("img",{src:ee,alt:"cerrar modal",onClick:()=>{r(!1),s({}),setTimeout(()=>{t(!1)},500)}})}),n("form",{onSubmit:i=>{if(i.preventDefault(),[v,f,h].includes("")){u("Todos los campos son obligatorios"),setTimeout(()=>{u("")},3e3);return}l({nombre:v,cantidad:f,categoria:h,id:x,fecha:S})},className:`formulario ${a?"animar":"cerrar"}`,children:[e("legend",{children:o.nombre?"Editar Gasto":"Nuevo Gasto"}),d&&e(I,{tipo:"error",children:d}),n("div",{className:"campo",children:[e("label",{htmlFor:"nombre",children:"Nombre Gasto"}),e("input",{id:"nombre",type:"text",placeholder:"A\xF1ade el Nombre del Gasto",value:v,onChange:i=>p(i.target.value)})]}),n("div",{className:"campo",children:[e("label",{htmlFor:"cantidad",children:"Cantidad"}),e("input",{id:"cantidad",type:"number",placeholder:"A\xF1ade La cantidad del gasto: ej. 300",value:f,onChange:i=>m(Number(i.target.value))})]}),n("div",{className:"campo",children:[e("label",{htmlFor:"categoria",children:"Categor\xEDa"}),n("select",{id:"categoria",value:h,onChange:i=>g(i.target.value),children:[e("option",{value:"",children:"-- Seleccione --"}),e("option",{value:"ahorro",children:"Ahorro"}),e("option",{value:"comida",children:"Comida"}),e("option",{value:"casa",children:"Casa"}),e("option",{value:"gastos",children:"Gastos Varios"}),e("option",{value:"ocio",children:"Ocio"}),e("option",{value:"salud",children:"Salud"}),e("option",{value:"suscripciones",children:"Suscripciones"})]})]}),e("input",{type:"submit",value:o.nombre?"Guardar Cambios":"A\xF1adir Gasto"})]})]})};var te="/assets/nuevo-gasto.3ab385ce.svg";function se(){var G;const[t,a]=c.exports.useState(localStorage.getItem("gastos")?JSON.parse(localStorage.getItem("gastos")):[]),[r,l]=c.exports.useState((G=Number(localStorage.getItem("presupuesto")))!=null?G:0),[o,s]=c.exports.useState(!1),[d,u]=c.exports.useState(!1),[v,p]=c.exports.useState(!1),[f,m]=c.exports.useState({}),[h,g]=c.exports.useState(""),[S,N]=c.exports.useState([]);return c.exports.useEffect(()=>{Object.keys(f).length>0&&(u(!0),setTimeout(()=>{p(!0)},500))},[f]),c.exports.useEffect(()=>{localStorage.setItem("presupuesto",r!=null?r:0)},[r]),c.exports.useEffect(()=>{var i;localStorage.setItem("gastos",(i=JSON.stringify(t))!=null?i:[])},[t]),c.exports.useEffect(()=>{if(h){const i=t.filter(b=>b.categoria===h);N(i)}},[h]),c.exports.useEffect(()=>{var b;((b=Number(localStorage.getItem("presupuesto")))!=null?b:0)>0&&s(!0)},[]),n("div",{className:d?"fijar":"",children:[e($,{gastos:t,setGastos:a,presupuesto:r,setPresupuesto:l,isValidPresupuesto:o,setIsValidPresupuesto:s}),o&&n(F,{children:[n("main",{children:[e(H,{filtro:h,setFiltro:g}),e(Z,{gastos:t,setGastoEditar:m,eliminarGasto:i=>{const b=t.filter(C=>C.id!==i);a(b)},filtro:h,gastosFiltrados:S})]}),e("div",{className:"nuevo-gasto",children:e("img",{src:te,alt:"icono nuevo gasto",onClick:()=>{u(!0),m({}),setTimeout(()=>{p(!0)},500)}})})]}),d&&e(oe,{setModal:u,animarModal:v,setAnimarModal:p,guardarGasto:i=>{if(i.id){const b=t.map(C=>C.id===i.id?i:C);a(b),m({})}else i.id=V(),i.fecha=Date.now(),a([...t,i]);p(!1),setTimeout(()=>{u(!1)},500)},gastoEditar:f,setGastoEditar:m})]})}E.render(e(T.StrictMode,{children:e(se,{})}),document.getElementById("root"));