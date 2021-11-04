"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[351],{8223:(a,e,n)=>{n.r(e),n.d(e,{data:()=>o});const o={key:"v-5ddf77c8",path:"/it_IT/troubleshooting.html",title:"Risoluzione dei problemi",lang:"it-IT",frontmatter:{title:"Risoluzione dei problemi"},excerpt:"",headers:[{level:2,title:"Unlaunch",slug:"unlaunch",children:[{level:3,title:"Unlaunch si blocca a MISMATCH IN FAT COPIES",slug:"unlaunch-si-blocca-a-mismatch-in-fat-copies",children:[]},{level:3,title:'Non c\'è alcun avvio audio o avvio quando si avvia "Launcher" utilizzando Unlaunch',slug:"non-c-e-alcun-avvio-audio-o-avvio-quando-si-avvia-launcher-utilizzando-unlaunch",children:[]},{level:3,title:"L'accensione mostra solo uno schermo nero dopo aver installato di Unlaunch",slug:"l-accensione-mostra-solo-uno-schermo-nero-dopo-aver-installato-di-unlaunch",children:[]},{level:3,title:"Dopo aver installato Unlaunch, sono bloccato all'avvio di un'applicazione o al menu di Unlaunch",slug:"dopo-aver-installato-unlaunch-sono-bloccato-all-avvio-di-un-applicazione-o-al-menu-di-unlaunch",children:[]},{level:3,title:"Altri problemi con Unlaunch",slug:"altri-problemi-con-unlaunch",children:[]}]},{level:2,title:"TWiLight Menu++",slug:"twilight-menu",children:[]},{level:2,title:"Ulteriore assistenza",slug:"ulteriore-assistenza",children:[]}],filePathRelative:"it_IT/troubleshooting.md",git:{updatedTime:1636009446e3,contributors:[{name:"RocketRobz",email:"bobesh8@gmail.com",commits:1}]}}},5242:(a,e,n)=>{n.r(e),n.d(e,{default:()=>H});var o=n(6252);const i=(0,o.uE)('<h2 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h2><h3 id="unlaunch-si-blocca-a-mismatch-in-fat-copies" tabindex="-1"><a class="header-anchor" href="#unlaunch-si-blocca-a-mismatch-in-fat-copies" aria-hidden="true">#</a> Unlaunch si blocca a <code>MISMATCH IN FAT COPIES</code></h3><p>twlnf ha un bug critico che non aggiorna correttamente l&#39;intera NAND dopo averla modificata, che porta alcuni homebrew (come Unlaunch installer) a generare un errore.</p><p>Nonostante sia sistemabile, il metodo per farlo non è impostato in stone e varia in gran parte tra i sistemi. Un metodo è quello di eliminare qualsiasi DSiWare installato via twlnf in passato, ma è stato anche segnalato che spostare <em>tutti</em> DSiWare nella scheda SD e tornare al sistema può aiutare in alcuni casi.</p><p>Se hai mai eseguito il downgrade del firmware, aggiornare di nuovo alla versione 1.4.5 (o 1.4.6 se il tuo DSi è cinese o coreano) può sistemare questo bug.</p><p>Se il problema persiste, proba questo:</p>',6),l=(0,o.Uk)("Monta il tuo backup della NAND con "),t={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},r=(0,o.Uk)("ninfs"),c=(0,o.Uk)(", e abilita l'opzione "),s=(0,o._)("code",null,"Allow writing",-1),u=(0,o.Uk)("Quando il backup della NAND è montato, monta "),d=(0,o._)("code",null,"twl_main.img",-1),h=(0,o.Uk)(". Se usi windows, puoi usare "),p={href:"https://www.osforensics.com/tools/mount-disk-images.html",target:"_blank",rel:"noopener noreferrer"},m=(0,o.Uk)("OSFMount"),v=(0,o.Uk)(" per montare l'mmagine"),b=(0,o._)("li",null,[(0,o.Uk)("Smonta "),(0,o._)("code",null,"twl_main.img"),(0,o.Uk)(", dopo smonta il backup delle NAND su ninfs Se la NAND è stata salvata, procedi con "),(0,o._)("a",{href:"restoring-nand"},"Ripristino NAND"),(0,o.Uk)(" e dopo continua con "),(0,o._)("a",{href:"installing-unlaunch"},"Installazione di Unlaunch"),(0,o.Uk)(".")],-1),g=(0,o._)("h3",{id:"non-c-e-alcun-avvio-audio-o-avvio-quando-si-avvia-launcher-utilizzando-unlaunch",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#non-c-e-alcun-avvio-audio-o-avvio-quando-si-avvia-launcher-utilizzando-unlaunch","aria-hidden":"true"},"#"),(0,o.Uk)(' Non c\'è alcun avvio audio o avvio quando si avvia "Launcher" utilizzando Unlaunch')],-1),f=(0,o.Uk)("Lo sviluppatore di Unlaunch (nocash) ha intenzionalmente rimosso l'audio di sottofondo e la schermata d'avvio come impostazione predefinita. Puoi riattivare questi effetti "),k=(0,o._)("a",{href:"installing-unlaunch"},"reinstallando Unlaunch",-1),U=(0,o.Uk)(" usando TWiLight Menu++, o usando "),_={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},z=(0,o.Uk)("hiyaCFW"),w=(0,o.Uk)("."),N=(0,o._)("h3",{id:"l-accensione-mostra-solo-uno-schermo-nero-dopo-aver-installato-di-unlaunch",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#l-accensione-mostra-solo-uno-schermo-nero-dopo-aver-installato-di-unlaunch","aria-hidden":"true"},"#"),(0,o.Uk)(" L'accensione mostra solo uno schermo nero dopo aver installato di Unlaunch")],-1),S=(0,o.Uk)("Prova ad espellere la scheda SD e riaccendere la console. Se continua a mostrare uno schermo nero, potresti aver bisogno di flashare la tua NAND con una "),D={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},T=(0,o.Uk)("hardmod"),A=(0,o.Uk)("."),W=(0,o.uE)('<h3 id="dopo-aver-installato-unlaunch-sono-bloccato-all-avvio-di-un-applicazione-o-al-menu-di-unlaunch" tabindex="-1"><a class="header-anchor" href="#dopo-aver-installato-unlaunch-sono-bloccato-all-avvio-di-un-applicazione-o-al-menu-di-unlaunch" aria-hidden="true">#</a> Dopo aver installato Unlaunch, sono bloccato all&#39;avvio di un&#39;applicazione o al menu di Unlaunch</h3><p>La causa è probabilmente la scelta dell&#39;app sbagliata per l&#39;opzione <code>NO BUTTON</code> in unlaunch. Tieni premuto <kbd class="face">A</kbd> + <kbd class="face">B</kbd> durante l&#39;avvio della console, apri le <code>OPZIONI</code>, e imposta <code>NO BUTTON</code> come preferisci.</p><h3 id="altri-problemi-con-unlaunch" tabindex="-1"><a class="header-anchor" href="#altri-problemi-con-unlaunch" aria-hidden="true">#</a> Altri problemi con Unlaunch</h3><p>Se Unlaunch mostra <code>Clusters too large</code>, <code>Bad VBR</code>, <code>Bad MBR</code>, oppure non mostra alcuna applicazione mentre la scheda SD è inserita, probabilmente la scheda SD non è stata formattata correttamente. Segui di nuovo <a href="sd-card-setup">Configurazione scheda SD</a>.</p><h2 id="twilight-menu" tabindex="-1"><a class="header-anchor" href="#twilight-menu" aria-hidden="true">#</a> TWiLight Menu++</h2>',5),q=(0,o.Uk)("Per problemi generali di TWiLight Menu++ leggi la pagina "),I={href:"https://wiki.ds-homebrew.com/twilightmenu/faq",target:"_blank",rel:"noopener noreferrer"},M=(0,o.Uk)("FAQ &Troubleshooting"),L=(0,o.Uk)(" sulla wiki del DS-Homebrew."),x=(0,o._)("h2",{id:"ulteriore-assistenza",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ulteriore-assistenza","aria-hidden":"true"},"#"),(0,o.Uk)(" Ulteriore assistenza")],-1),O=(0,o.Uk)("Se hai incontrato un problema che non viene risolto qui, o uno che persiste nonostante le soluzioni fornite, chiedi assistenza nel server Discord "),C={href:"https://discord.gg/yD3spjv",target:"_blank",rel:"noopener noreferrer"},R=(0,o.Uk)("DS"),B=(0,o._)("sup",null,"(i)",-1),P=(0,o.Uk)(" Mode Hacking!"),F={},H=(0,n(3744).Z)(F,[["render",function(a,e){const n=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("ol",null,[(0,o._)("li",null,[l,(0,o._)("a",t,[r,(0,o.Wm)(n)]),c,s]),(0,o._)("li",null,[u,d,h,(0,o._)("a",p,[m,(0,o.Wm)(n)]),v]),b]),g,(0,o._)("p",null,[f,k,U,(0,o._)("a",_,[z,(0,o.Wm)(n)]),w]),N,(0,o._)("p",null,[S,(0,o._)("a",D,[T,(0,o.Wm)(n)]),A]),W,(0,o._)("p",null,[q,(0,o._)("a",I,[M,(0,o.Wm)(n)]),L]),x,(0,o._)("p",null,[O,(0,o._)("a",C,[R,B,P,(0,o.Wm)(n)])])],64)}]])},3744:(a,e)=>{e.Z=(a,e)=>{for(const[n,o]of e)a[n]=o;return a}}}]);