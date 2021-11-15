"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2509],{6464:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a={key:"v-8daa1a0e",path:"/",title:"Home",lang:"en-US",frontmatter:{home:!0,title:"Home",header:{overlay_image:"/assets/images/home-page-feature.png",overlay_filter:.5}},excerpt:"",headers:[{level:2,title:"What is homebrew?",slug:"what-is-homebrew",children:[]},{level:2,title:"What will this guide do to my system?",slug:"what-will-this-guide-do-to-my-system",children:[]},{level:2,title:"What can I do by modding my system?",slug:"what-can-i-do-by-modding-my-system",children:[]},{level:2,title:"Where can I find homebrew applications?",slug:"where-can-i-find-homebrew-applications",children:[]},{level:2,title:"What should I know before starting?",slug:"what-should-i-know-before-starting",children:[]}],filePathRelative:"index.md",git:{updatedTime:1636996043e3,contributors:[{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},9709:(e,i,t)=>{t.r(i),t.d(i,{default:()=>W});var a=t(6252);const o={class:"custom-container tip"},n=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),r=(0,a.Uk)("For complete guides to homebrew and custom firmware for other devices, check out "),l={href:"https://cfw.guide/",target:"_blank",rel:"noopener noreferrer"},s=(0,a.Uk)("CFW.Guide"),h=(0,a.Uk)("."),d=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,"Thoroughly read all of the introductory pages (including this one!) before proceeding.")],-1),c=(0,a._)("h2",{id:"what-is-homebrew",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#what-is-homebrew","aria-hidden":"true"},"#"),(0,a.Uk)(" What is homebrew?")],-1),u={href:"https://en.wikipedia.org/wiki/Homebrew_(video_games)",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("Homebrew"),p=(0,a.Uk)(" applications are unlicensed software made for closed systems such as the Nintendo DSi. These applications can range from utilities to custom homebrew games."),w=(0,a.uE)('<p>Homebrew can be run for free on all Nintendo DSi consoles, regardless of firmware version or region. All you need is an entry point and an SD card to store your homebrew. The main entry point used in this guide is called Memory Pit, but there are other entry points you can use if Memory Pit is unusable.</p><h2 id="what-will-this-guide-do-to-my-system" tabindex="-1"><a class="header-anchor" href="#what-will-this-guide-do-to-my-system" aria-hidden="true">#</a> What will this guide do to my system?</h2><p>Keep in mind that the guide is structured in a linear path, yet it generally depends on how deep you want to go in terms of modding the system.</p><ul><li>We will be setting up an entry point to launch basic homebrew via Memory Pit, the exploit for the Nintendo DSi Camera application</li><li>We will then take a NAND backup, which is useful as a restoration point in case you mess up later on</li><li>Finally, for users that want access to the full capabilities of the DSi we will walk them through installing Unlaunch. Unlaunch allows homebrew to run with more permissions (such as Slot-1 access) and at system boot <ul><li>Installing Unlaunch modifies your NAND, and in extreme edge cases has the potential to <strong>brick</strong> the system. If you do not risk bricking, you can stop after taking a NAND backup</li></ul></li></ul><h2 id="what-can-i-do-by-modding-my-system" tabindex="-1"><a class="header-anchor" href="#what-can-i-do-by-modding-my-system" aria-hidden="true">#</a> What can I do by modding my system?</h2><ul><li>Run Nintendo DS(i) game backups or ROM hacks from your DSi SD card without the need of a flashcard</li><li>Launch any DSiWare (out-of-region and/or 3DS exclusives) from your SD card</li><li>Boot into DSiWare and homebrew applications by holding specific buttons when turning on your Nintendo DSi</li><li>Run old-time classics using various emulators</li><li>Use normally incompatible flashcards</li><li>Redirect your NAND to the SD card using hiyaCFW</li><li>Watch your favorite movies using MPEG4Player</li><li>Display an image (referred to as the boot splash) on system launch</li><li>Play homebrew games</li></ul><h2 id="where-can-i-find-homebrew-applications" tabindex="-1"><a class="header-anchor" href="#where-can-i-find-homebrew-applications" aria-hidden="true">#</a> Where can I find homebrew applications?</h2>',7),f={href:"https://db.universal-team.net/ds",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("Universal-DB"),y=(0,a.Uk)(" has most modern homebrew, with nice search and sorting to keep track of what's been updated recently"),b={href:"https://www.gamebrew.org/wiki/List_of_all_DS_homebrew",target:"_blank",rel:"noopener noreferrer"},k=(0,a.Uk)("GameBrew"),_=(0,a.Uk)(" has a lot of older homebrew, however many will only work on flashcards"),v=(0,a.uE)('<h2 id="what-should-i-know-before-starting" tabindex="-1"><a class="header-anchor" href="#what-should-i-know-before-starting" aria-hidden="true">#</a> What should I know before starting?</h2><ul><li>On Windows, it&#39;s recommended to <a href="file-extensions-%28windows%29">show file extensions</a> if you are using the default File Explorer</li><li>The only brick risk comes from installing Unlaunch, and the brick risk is minimal</li><li>If you are not experienced with copying files to an SD card, we have helper tools available at your disposal</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Continue to <a href="launching-the-exploit">Launching the Exploit</a></p></div>',3),D={},W=(0,t(3744).Z)(D,[["render",function(e,i){const t=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",o,[n,(0,a._)("p",null,[r,(0,a._)("a",l,[s,(0,a.Wm)(t)]),h])]),d,c,(0,a._)("p",null,[(0,a._)("a",u,[m,(0,a.Wm)(t)]),p]),w,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",f,[g,(0,a.Wm)(t)]),y]),(0,a._)("li",null,[(0,a._)("a",b,[k,(0,a.Wm)(t)]),_])]),v],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,a]of i)t[e]=a;return t}}}]);