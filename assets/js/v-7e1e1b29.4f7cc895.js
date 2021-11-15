"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3841],{366:(e,i,s)=>{s.r(i),s.d(i,{data:()=>t});const t={key:"v-7e1e1b29",path:"/fr_FR/",title:"Accueil",lang:"fr-FR",frontmatter:{home:!0,title:"Accueil",header:{overlay_image:"/assets/images/home-page-feature.png",overlay_filter:.5}},excerpt:"",headers:[{level:2,title:"Qu'est-ce qu'un homebrew ?",slug:"qu-est-ce-qu-un-homebrew",children:[]},{level:2,title:"Que fera ce guide à mon système ?",slug:"que-fera-ce-guide-a-mon-systeme",children:[]},{level:2,title:"Que puis-je faire en moddant mon système ?",slug:"que-puis-je-faire-en-moddant-mon-systeme",children:[]},{level:2,title:"Où puis-je trouver des applications homebrew ?",slug:"ou-puis-je-trouver-des-applications-homebrew",children:[]},{level:2,title:"Que dois-je savoir avant de commencer ?",slug:"que-dois-je-savoir-avant-de-commencer",children:[]}],filePathRelative:"fr_FR/index.md",git:{updatedTime:1636996043e3,contributors:[{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},5264:(e,i,s)=>{s.r(i),s.d(i,{default:()=>_});var t=s(6252);const r={class:"custom-container tip"},a=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),n=(0,t.Uk)("Pour des guides complets sur les homebrews et firmwares personnalisés pour d'autres appareils, consultez "),o={href:"https://cfw.guide/",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("CFW.Guide"),u=(0,t.Uk)("."),d=(0,t.uE)('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Ce guide n&#39;est pas compatible avec les consoles de développement Nintendo DSi.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Lisez attentivement toutes les pages d&#39;introduction (y compris celle-ci !) avant de continuer.</p></div><h2 id="qu-est-ce-qu-un-homebrew" tabindex="-1"><a class="header-anchor" href="#qu-est-ce-qu-un-homebrew" aria-hidden="true">#</a> Qu&#39;est-ce qu&#39;un homebrew ?</h2>',3),c={href:"https://fr.wikipedia.org/wiki/Homebrew_(jeu_vid%C3%A9o)",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("Les applications homebrews"),p=(0,t.Uk)(" sont des logiciels sans licence conçus pour des systèmes fermés tels que la Nintendo DSi. Ces applications peuvent aller d'utilitaires à des jeux homebrews personnalisés."),h=(0,t.uE)('<p>Les homebrews peuvent être exécutés gratuitement sur toutes les consoles Nintendo DSi, quelle que soit la version du firmware ou la région. Tout ce dont vous avez besoin est d&#39;un point d&#39;entrée et une carte SD pour stocker votre homebrew. Le point d&#39;entrée principal utilisé dans ce tutoriel est Memory Pit, mais il y en a d&#39;autres que vous pouvez utiliser si Memory Pit est inutilisable.</p><h2 id="que-fera-ce-guide-a-mon-systeme" tabindex="-1"><a class="header-anchor" href="#que-fera-ce-guide-a-mon-systeme" aria-hidden="true">#</a> Que fera ce guide à mon système ?</h2><p>Gardez à l&#39;esprit que le guide est structuré de manière linéaire, mais cela dépend généralement de la profondeur que vous souhaitez atteindre en termes de moddage du système.</p><ul><li>Nous allons configurer un point d&#39;entrée pour lancer des homebrew de base via Memory Pit, l&#39;exploit de l&#39;application Appareil photo Nintendo DSi</li><li>Nous allons ensuite prendre une sauvegarde NAND, qui est utile comme point de restauration au cas où vous vous tromperiez plus tard</li><li>Enfin, pour les utilisateurs qui veulent avoir accès à toutes les fonctionnalités de la DSi nous les guiderons en installant Unlaunch. Il permet aux homebrews de s&#39;exécuter avec plus de permissions (comme l&#39;accès Slot-1) et au démarrage du système <ul><li>L&#39;installation de Unlaunch modifie votre NAND et, dans des cas extrêmes, peut potentiellement <strong>bricker</strong> le système. Si vous ne risquez pas de brick, vous pouvez arrêter après avoir fait une sauvegarde NAND</li></ul></li></ul><h2 id="que-puis-je-faire-en-moddant-mon-systeme" tabindex="-1"><a class="header-anchor" href="#que-puis-je-faire-en-moddant-mon-systeme" aria-hidden="true">#</a> Que puis-je faire en moddant mon système ?</h2><ul><li>Run Nintendo DS(i) game backups or ROM hacks from your DSi SD card without the need of a flashcard</li><li>Lancez n&#39;importe quels titres DSiWare (hors-région et/ou exclusivités 3DS) depuis votre carte SD</li><li>Démarrez les applications DSiWare et homebrews en maintenant enfoncés certains boutons lorsque vous allumez votre Nintendo DSi</li><li>Exécutez des vieux classiques en utilisant divers émulateurs</li><li>Utilisez des linkers normalement incompatibles</li><li>Redirect your NAND to the SD card using hiyaCFW</li><li>Regardez vos films favoris en utilisant MPEG4Player</li><li>Display an image (referred to as the boot splash) on system launch</li><li>Play homebrew games</li></ul><h2 id="ou-puis-je-trouver-des-applications-homebrew" tabindex="-1"><a class="header-anchor" href="#ou-puis-je-trouver-des-applications-homebrew" aria-hidden="true">#</a> Où puis-je trouver des applications homebrew ?</h2>',7),v={href:"https://db.universal-team.net/ds",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("Universal-DB"),b=(0,t.Uk)(" a les homebrews les plus modernes, avec une bonne recherche et un bon tri pour garder une trace de ce qui a été récemment mis à jour"),g={href:"https://www.gamebrew.org/wiki/List_of_all_DS_homebrew",target:"_blank",rel:"noopener noreferrer"},w=(0,t.Uk)("GameBrew"),k=(0,t.Uk)(" a beaucoup de homebrews plus anciens, mais beaucoup ne fonctionneront que sur des linkers"),q=(0,t.uE)('<h2 id="que-dois-je-savoir-avant-de-commencer" tabindex="-1"><a class="header-anchor" href="#que-dois-je-savoir-avant-de-commencer" aria-hidden="true">#</a> Que dois-je savoir avant de commencer ?</h2><ul><li>Sur Windows, il est recommandé d&#39;<a href="file-extensions-%28windows%29">afficher les extensions de fichier</a> si vous utilisez l&#39;Explorateur de fichiers par défaut</li><li>Le seul risque de brick provient de l&#39;installation de Unlaunch, et le risque de brick est minimal</li><li>Si vous n&#39;avez pas l&#39;habitude de copier des fichiers sur une carte SD, nous mettons à votre disposition des outils d&#39;aide</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Continuer vers <a href="launching-the-exploit">Lancement de l&#39;exploit</a></p></div>',3),y={},_=(0,s(3744).Z)(y,[["render",function(e,i){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",r,[a,(0,t._)("p",null,[n,(0,t._)("a",o,[l,(0,t.Wm)(s)]),u])]),d,(0,t._)("p",null,[(0,t._)("a",c,[m,(0,t.Wm)(s)]),p]),h,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",v,[f,(0,t.Wm)(s)]),b]),(0,t._)("li",null,[(0,t._)("a",g,[w,(0,t.Wm)(s)]),k])]),q],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const s=e.__vccOpts||e;for(const[e,t]of i)s[e]=t;return s}}}]);