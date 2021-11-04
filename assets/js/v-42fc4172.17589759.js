"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2803],{2330:(e,a,i)=>{i.r(a),i.d(a,{data:()=>o});const o={key:"v-42fc4172",path:"/es_ES/dsiware-backups.html",title:"Respaldos de DSiWare",lang:"es-ES",frontmatter:{title:"Respaldos de DSiWare"},excerpt:"",headers:[{level:2,title:"Requisitos",slug:"requisitos",children:[]},{level:2,title:"Nintendo DSi - Instrucciones",slug:"nintendo-dsi-instrucciones",children:[{level:3,title:"Sección I - Identificar el título DSiWare deseado",slug:"seccion-i-identificar-el-titulo-dsiware-deseado",children:[]},{level:3,title:"Sección II - Extraer el título deseado",slug:"seccion-ii-extraer-el-titulo-deseado",children:[]},{level:3,title:"Sección III - Extraer el archivo de guardado (opcional)",slug:"seccion-iii-extraer-el-archivo-de-guardado-opcional",children:[]}]}],filePathRelative:"es_ES/dsiware-backups.md",git:{updatedTime:1636009446e3,contributors:[{name:"RocketRobz",email:"bobesh8@gmail.com",commits:1}]}}},2148:(e,a,i)=>{i.r(a),i.d(a,{default:()=>u});var o=i(6252);const l=(0,o._)("h2",{id:"requisitos",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#requisitos","aria-hidden":"true"},"#"),(0,o.Uk)(" Requisitos")],-1),r=(0,o.Uk)("La ultima version de "),d={href:"https://github.com/RocketRobz/godmode9i/releases",target:"_blank",rel:"noopener noreferrer"},t=(0,o.Uk)("GodMode9i"),c=(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("Descargar el archivo, extraer su contenido y colocar "),(0,o._)("code",null,"GodMode9i"),(0,o.Uk)(" en cualquier lugar de tu tarjeta SD.")])],-1),n=(0,o.uE)('<h2 id="nintendo-dsi-instrucciones" tabindex="-1"><a class="header-anchor" href="#nintendo-dsi-instrucciones" aria-hidden="true">#</a> Nintendo DSi - Instrucciones</h2><h3 id="seccion-i-identificar-el-titulo-dsiware-deseado" tabindex="-1"><a class="header-anchor" href="#seccion-i-identificar-el-titulo-dsiware-deseado" aria-hidden="true">#</a> Sección I - Identificar el título DSiWare deseado</h3><ol><li>Ejecuta GodMode9i y seleccióna <code>[nand:] SYSNAND</code>.</li><li>Navega hacia la carpeta <code>title</code>.</li><li>Elige la carpeta correspondiente a la categoría de DSiWare que estás buscando. <ul><li><code>00030004</code>: DSiWare estandar.</li><li><code>00030005</code>: Herramientas de entretenimiento preinstaladas.</li><li><code>0003000f</code>: Datos del sistema (no son archivos de DSiWare, no pueden ser ejecutados).</li><li><code>00030015</code>: Herramientas base del sistema.</li><li><code>00030017</code>: Launcher por defecto de la consola.</li></ul></li><li>Una vez elegido el tipo de DSiWare que quieras extraer, entre en la subcarpeta correspondiente y luego a la carpeta <code>content</code>.</li><li>Debería haber una archivo <code>.app</code> visible. Selecciona el archivo y elige la opción <code>Show NDS file info</code>. Esto servirá para confirmar que es el título DSiWare que estás buscando. <ul><li>Si no lo es, continúa buscando en las carpetas hasta que lo encuentres.</li><li>No puedes ver la información NDS de los archivos en <code>0003000f</code> porque no son títulos DSiWare ejecutables y no contienen información de banner válida.</li></ul></li></ol><h3 id="seccion-ii-extraer-el-titulo-deseado" tabindex="-1"><a class="header-anchor" href="#seccion-ii-extraer-el-titulo-deseado" aria-hidden="true">#</a> Sección II - Extraer el título deseado</h3><ol><li>Resalta el archivo <code>.app</code>, luego presiona <kbd class="face">Y</kbd> para añadirlo al portapapeles.</li><li>Navega hasta el directorio de la tarjeta SD en la que quieras volcar el título DSiWare.</li><li>Presiona <kbd class="face">Y</kbd> nuevamente para pegar el título DSiWare en el directorio en el que te encuentras. <ul><li>Puedes cambiar el nombre del archivo después de pegarlo presionando <kbd class="face">X</kbd> mientras mantienes <kbd class="R">R</kbd>.</li><li>Repite esto para todos los archivos que quieras copiar en el mismo directorio.</li></ul></li></ol><p>Ahora deberías ver el título DSiWare en TWiLight Menu++ o el sistema de archivos de Unlaunch.</p><h3 id="seccion-iii-extraer-el-archivo-de-guardado-opcional" tabindex="-1"><a class="header-anchor" href="#seccion-iii-extraer-el-archivo-de-guardado-opcional" aria-hidden="true">#</a> Sección III - Extraer el archivo de guardado (opcional)</h3><ol><li>En la misma carpeta que contiene <code>content</code> del título DSiWare específico, también habrá una carpeta llamada <code>data</code>.</li><li>Dentro de esta carpeta está el archivo de guardado. Copia este archivo y pégalo en tu tarjeta SD de la misma forma que hiciste con el título DSiWare. <ul><li>Unlaunch y nds-bootstrap usan las extensiones de archivo <code>.pub</code> y <code>.prv</code> para identificar archivos de guardado de títulos DSiWare. Si el archivo de guardado se llamaba originalmente <code>public.sav</code>, usa la extensión <code>.pub</code>. Si en cambio se llamaba <code>private.sav</code> originalmente, usa la extensión <code>.prv</code> en su lugar.</li><li>Si deseas utilizar el archivo de guardado de título DSiWare en TWiLight Menu++, asegúrate de colocarlo en la carpeta llamda <code>saves</code> que se encuentra en el mismo lugar que la ROM. Si esta no existe, créala manualmente.</li></ul></li></ol>',8),s={},u=(0,i(3744).Z)(s,[["render",function(e,a){const i=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l,(0,o._)("ul",null,[(0,o._)("li",null,[r,(0,o._)("a",d,[t,(0,o.Wm)(i)]),c])]),n],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[i,o]of a)e[i]=o;return e}}}]);