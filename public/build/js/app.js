let paso=1;const pasoInicial=1,pasoFinal=3,cita={nombre:"",fecha:"",hora:"",servicios:[]};function iniciarApp(){mostrarSeccion(),tabs(),botonesPaginador(),paginaAnterior(),paginaSiguiente(),consultarAPI()}function mostrarSeccion(){const o=document.querySelector(".mostrar");o&&o.classList.remove("mostrar");const t=`#paso-${paso}`;document.querySelector(t).classList.add("mostrar");const e=document.querySelector(".actual");e&&e.classList.remove("actual");document.querySelector(`[data-paso="${paso}"]`).classList.add("actual")}function tabs(){document.querySelectorAll(".tabs button").forEach((o=>{o.addEventListener("click",(function(o){paso=parseInt(o.target.dataset.paso),mostrarSeccion(),botonesPaginador()}))}))}function botonesPaginador(){const o=document.querySelector("#anterior"),t=document.querySelector("#siguiente");1===paso?(o.classList.add("ocultar"),t.classList.remove("ocultar")):3===paso?(o.classList.remove("ocultar"),t.classList.add("ocultar")):(o.classList.remove("ocultar"),t.classList.remove("ocultar")),mostrarSeccion()}function paginaAnterior(){document.querySelector("#anterior").addEventListener("click",(function(){paso<=pasoInicial||(paso--,botonesPaginador())}))}function paginaSiguiente(){document.querySelector("#siguiente").addEventListener("click",(function(){paso>=pasoFinal||(paso++,botonesPaginador())}))}async function consultarAPI(){try{const o="http://localhost:4321/api/servicios",t=await fetch(o);mostrarServicios(await t.json())}catch(o){console.log(o)}}function mostrarServicios(o){o.forEach((o=>{const{id:t,nombre:e,precio:c}=o,a=document.createElement("P");a.classList.add("nombre-servicio"),a.textContent=e;const n=document.createElement("P");n.classList.add("precio-servicio"),n.textContent=`${c} €`;const s=document.createElement("DIV");s.classList.add("servicio"),s.dataset.idServicio=t,s.onclick=function(){seleccionarServicio(o)},s.appendChild(a),s.appendChild(n),document.querySelector("#servicios").appendChild(s)}))}function seleccionarServicio(o){const{servicios:t}=cita;cita.servicios=[...t,o],console.log(cita)}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));