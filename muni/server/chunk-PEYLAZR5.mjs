import './polyfills.server.mjs';
import{A as x,D as h,a as d,b as p,c as g,d as u,e as t,f as e,g as c,h as n,i as l,p as f,r as C,s as M,t as P,w as O}from"./chunk-YXPLRPD4.mjs";var _=(()=>{let i=class i{constructor(a,o){this.renderer=a,this.el=o}ngOnInit(){this.scrollFunction(),this.renderer.listen("window","scroll",()=>{this.scrollFunction()});let a=document.getElementById("expand"),o=document.getElementById("hambuergerClick");a&&o&&(o.addEventListener("click",()=>this.toggleClass()),a.addEventListener("click",()=>this.toggleClass()))}scrollFunction(){let a=this.el.nativeElement.querySelector("#menu");a&&(window.scrollY>0?this.renderer.addClass(a,"scrolled"):this.renderer.removeClass(a,"scrolled"))}toggleClass(){let a=document.getElementById("expand");a&&a.classList.toggle("displayNone")}};i.\u0275fac=function(o){return new(o||i)(g(u),g(p))},i.\u0275cmp=d({type:i,selectors:[["app-menu"]],standalone:!0,features:[l],decls:72,vars:0,consts:[["id","menu"],["id","logo"],["src","../../../assets/iconos/logo.png","alt","logo"],[1,"midBar"],[1,"recursos"],[1,"humano"],[1,"territorio"],[1,"circular"],[1,"referentes"],[1,"spacioIz"],[1,"spacio"],[1,"spacioDr"],[1,"blockBurguer"],["id","hambuergerClick",1,"hamburger-menu"],[1,"line"],["id","expand",1,"displayNone"],[1,"cerrar"],[1,"blockExpand"],["id","expandClick",1,"expand-menu"],[1,"expandList"],[1,"1","exl"],[1,"2","exl"],[1,"3","exl"]],template:function(o,m){o&1&&(t(0,"header")(1,"div",0)(2,"div",1),c(3,"img",2),e(),t(4,"div",3)(5,"div",4)(6,"div",5)(7,"P"),n(8,"HUMANO"),e()(),t(9,"div",6)(10,"P"),n(11,"TERRITORIO"),e()(),t(12,"div",7)(13,"P"),n(14,"CIRCULAR"),e()()(),t(15,"div",8)(16,"div",9)(17,"P"),n(18,"MUNICIPALIDAD"),e()(),c(19,"div",10),t(20,"div",11)(21,"P"),n(22,"COPERATIVA"),e()()()(),t(23,"div",12)(24,"div",13),c(25,"div",14)(26,"div",14)(27,"div",14),e()()(),t(28,"div",15)(29,"div",16)(30,"div",17)(31,"div",18),c(32,"div",14)(33,"div",14)(34,"div",14),e()()(),t(35,"div",19)(36,"div",20),n(37," Planes "),e(),t(38,"div",21),n(39," Mapa de Planificasion "),e(),t(40,"div",22),n(41," Guia de video "),e(),t(42,"div",20),n(43," Planes "),e(),t(44,"div",21),n(45," Mapa de Planificasion "),e(),t(46,"div",22),n(47," Guia de video "),e(),t(48,"div",20),n(49," Planes "),e(),t(50,"div",21),n(51," Mapa de Planificasion "),e(),t(52,"div",22),n(53," Guia de video "),e(),t(54,"div",20),n(55," Planes "),e(),t(56,"div",21),n(57," Mapa de Planificasion "),e(),t(58,"div",22),n(59," Guia de video "),e(),t(60,"div",20),n(61," Planes "),e(),t(62,"div",21),n(63," Mapa de Planificasion "),e(),t(64,"div",22),n(65," Guia de video "),e(),t(66,"div",20),n(67," Planes "),e(),t(68,"div",21),n(69," Mapa de Planificasion "),e(),t(70,"div",22),n(71," Guia de video "),e()()()())},dependencies:[C],styles:['#menu[_ngcontent-%COMP%]{position:fixed;display:flex;place-content:stretch center;align-items:stretch;width:100vw;min-width:300px;height:110px;background-color:transparent;padding:1rem;z-index:2}#menu[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]{width:55px;display:flex;justify-content:center;align-items:center;margin-left:5rem;margin-right:5rem}#menu[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:transparent;width:100%}#menu[_ngcontent-%COMP%]   .midBar[_ngcontent-%COMP%]{background:transparent;width:90vw;display:flex;justify-content:space-between;align-items:center}#menu[_ngcontent-%COMP%]   .midBar[_ngcontent-%COMP%]   .recursos[_ngcontent-%COMP%]{background:transparent;display:flex;justify-content:space-between;align-items:center;gap:3rem;cursor:pointer}#menu[_ngcontent-%COMP%]   .midBar[_ngcontent-%COMP%]   .recursos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:transparent}#menu[_ngcontent-%COMP%]   .midBar[_ngcontent-%COMP%]   .referentes[_ngcontent-%COMP%]{background:transparent;display:flex;justify-content:space-between;align-items:center;gap:1rem}#menu[_ngcontent-%COMP%]   .midBar[_ngcontent-%COMP%]   .referentes[_ngcontent-%COMP%]   .spacioIz[_ngcontent-%COMP%]{background:transparent;cursor:pointer}#menu[_ngcontent-%COMP%]   .midBar[_ngcontent-%COMP%]   .referentes[_ngcontent-%COMP%]   .spacio[_ngcontent-%COMP%]{background-color:#fff;width:1px;height:1rem}#menu[_ngcontent-%COMP%]   .midBar[_ngcontent-%COMP%]   .referentes[_ngcontent-%COMP%]   .spacioDr[_ngcontent-%COMP%]{background:transparent;cursor:pointer}#menu[_ngcontent-%COMP%]   .blockBurguer[_ngcontent-%COMP%]{display:flex;align-items:center;padding-right:3.5rem;padding-left:3.5rem}#menu[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]{flex-direction:column;justify-content:space-between;width:4rem;height:2.5rem;display:flex;cursor:pointer;scale:.4}#menu[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;height:1px;background-color:#fff;box-shadow:0 0 2px #fff,0 0 2px #fff,0 0 2px #fff;transition:all .3s ease;border-radius:10px}#menu[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:hover   .line[_ngcontent-%COMP%]:nth-child(1){transform:translateY(1rem) rotate(45deg);box-shadow:0 0 2px #fff,0 0 2px #fff,0 0 2px #fff}#menu[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:hover   .line[_ngcontent-%COMP%]:nth-child(2){opacity:0}#menu[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:hover   .line[_ngcontent-%COMP%]:nth-child(3){transform:translateY(-1.4rem) rotate(-45deg);box-shadow:0 0 2px #fff,0 0 2px #fff,0 0 2px #fff}#expand[_ngcontent-%COMP%]{background-color:#090909;position:fixed;width:240px;height:100vh;right:0;top:0;z-index:3;display:grid;grid-template-rows:repeat(10,1fr)}#expand[_ngcontent-%COMP%]:before{content:"";position:fixed;top:0;left:0;width:calc(100vw - 246px);height:100vh;background-color:#212121a2;z-index:-10}#expand[_ngcontent-%COMP%]   .cerrar[_ngcontent-%COMP%]{grid-rows:1/2;margin-top:2rem;display:flex;justify-content:start;align-items:center}#expand[_ngcontent-%COMP%]   .cerrar[_ngcontent-%COMP%]   .expand-menu[_ngcontent-%COMP%]{flex-direction:column;justify-content:space-between;width:4rem;height:2.5rem;display:flex;cursor:pointer;scale:.4}#expand[_ngcontent-%COMP%]   .cerrar[_ngcontent-%COMP%]   .expand-menu[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;height:1px;background-color:#fff;box-shadow:0 0 2px #fff,0 0 2px #fff,0 0 2px #fff;transition:all .3s ease;border-radius:10px}#expand[_ngcontent-%COMP%]   .cerrar[_ngcontent-%COMP%]   .expand-menu[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(1){transform:translateY(1rem) rotate(45deg);box-shadow:0 0 2px #fff,0 0 2px #fff,0 0 2px #fff}#expand[_ngcontent-%COMP%]   .cerrar[_ngcontent-%COMP%]   .expand-menu[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(2){opacity:0}#expand[_ngcontent-%COMP%]   .cerrar[_ngcontent-%COMP%]   .expand-menu[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(3){transform:translateY(-1.4rem) rotate(-45deg);box-shadow:0 0 2px #fff,0 0 2px #fff,0 0 2px #fff}#expand[_ngcontent-%COMP%]   .expandList[_ngcontent-%COMP%]{overflow-y:scroll;grid-row:2/11;display:flex;flex-direction:column;margin:2rem}#expand[_ngcontent-%COMP%]   .expandList[_ngcontent-%COMP%]   .exl[_ngcontent-%COMP%]{border-bottom:2px solid white;padding-bottom:2rem}#expand.displayNone[_ngcontent-%COMP%]{display:none}@media (min-width: 769px) and (max-width: 1524px){#menu[_ngcontent-%COMP%]{display:flex;place-content:stretch space-between;align-items:stretch}#menu[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]{margin-left:3rem}#menu[_ngcontent-%COMP%]   .midBar[_ngcontent-%COMP%]{display:none}#menu[_ngcontent-%COMP%]   .blockBurguer[_ngcontent-%COMP%]{margin:0;padding:3rem}}@media (max-width: 768px){#menu[_ngcontent-%COMP%]{display:flex;place-content:stretch space-between;align-items:stretch}#menu[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]{margin-left:1rem}#menu[_ngcontent-%COMP%]   .midBar[_ngcontent-%COMP%]{display:none}#menu[_ngcontent-%COMP%]   .blockBurguer[_ngcontent-%COMP%]{margin:0;padding:.5rem}#expand[_ngcontent-%COMP%]{background-color:#090909;position:fixed;width:100vw;height:100vh;padding:2rem;right:0;top:0}}']});let r=i;return r})();var v=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=d({type:i,selectors:[["app-main"]],standalone:!0,features:[l],decls:16,vars:0,consts:[["id","main",1,"main"],[1,"mainBlock"],[1,"title"],[1,"subTitle"],[1,"titleVideo"],[1,"fa-solid","fa-play"],[1,"map"],[1,"fa-solid","fa-map"]],template:function(o,m){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),n(4,"TITULO DEL PROYECTO EN GESTION "),e()(),t(5,"div",3)(6,"h2"),n(7,"Sub titulo del proyecto en gestion"),e(),t(8,"div",4)(9,"div"),n(10,"VER AHORA"),e(),c(11,"i",5),e()()(),t(12,"div",6)(13,"div"),n(14,"VER MAPA DE DISTIBUCION DE TIERRA "),e(),c(15,"i",7),e()())},styles:['#main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;overflow:hidden;width:100vw;height:100vh;z-index:-999999;background-image:url("./media/fondo2-C4WRY2N4.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;gap:2rem;padding-top:120px;padding-bottom:8rem}#main[_ngcontent-%COMP%]   .mainBlock[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:65vw;height:40vh;gap:2.5rem}#main[_ngcontent-%COMP%]   .mainBlock[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:75vw;height:auto}#main[_ngcontent-%COMP%]   .mainBlock[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5rem;text-align:center}#main[_ngcontent-%COMP%]   .mainBlock[_ngcontent-%COMP%]   .subTitle[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:2rem}#main[_ngcontent-%COMP%]   .mainBlock[_ngcontent-%COMP%]   .subTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;font-weight:300}#main[_ngcontent-%COMP%]   .mainBlock[_ngcontent-%COMP%]   .subTitle[_ngcontent-%COMP%]   .titleVideo[_ngcontent-%COMP%]{height:2.5rem;padding:1.5rem;margin-top:5vh;border-radius:5px;display:flex;justify-content:center;align-items:center;gap:2rem;cursor:pointer}#main[_ngcontent-%COMP%]   .mainBlock[_ngcontent-%COMP%]   .subTitle[_ngcontent-%COMP%]   .titleVideo[_ngcontent-%COMP%]:hover{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}#main[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:1rem;padding:1rem;border-radius:5px;gap:2rem}#main[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]:hover{position:relative;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}']});let r=i;return r})();var b=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=d({type:i,selectors:[["app-fixed"]],standalone:!0,features:[l],decls:3,vars:0,consts:[["id","fixed"]],template:function(o,m){o&1&&(t(0,"div",0)(1,"p"),n(2,"fixed works!"),e()())},styles:['#fixed[_ngcontent-%COMP%]{position:fixed;width:100vw;height:100vh;background-image:url("./media/fixed5-TVRJB7XR.jpeg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-999999}']});let r=i;return r})();var w=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=d({type:i,selectors:[["app-grid-one"]],standalone:!0,features:[l],decls:20,vars:0,consts:[["id","grid-one"],[1,"block"],[1,"col1","fil1"],["src","../../../assets/imagenes/fondo/2110046.jpg","alt","img 1"],[1,"col1","fil2"],["src","../../../assets/imagenes/fondo/fondo1.jpg","alt","img 2"],[1,"col1","fil3"],["src","../../../assets/imagenes/fondo/fondo2.jpg","alt","img 3"],[1,"col2a4","fil123"],[1,"textcol2a4"],["src","../../../assets/imagenes/fondo/fondo3.jpg","alt","img 4"]],template:function(o,m){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),n(4,"Algo que contar"),e(),c(5,"img",3),e(),t(6,"div",4)(7,"h3"),n(8,"Algo que contar"),e(),c(9,"img",5),e(),t(10,"div",6)(11,"h3"),n(12,"Algo que contar"),e(),c(13,"img",7),e(),t(14,"div",8)(15,"h3"),n(16,"Algo que contar mas espesifico"),e(),t(17,"p",9),n(18,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequuntur natus porro eaque exercitationem, quae voluptas ducimus tempore, fuga asperiores vero! Aperiam enim accusamus temporibus tenetur consectetur in autem illo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repellendus magni. Iusto sint molestiae et! Voluptas debitis odit repellat incidunt, culpa temporibus ducimus quisquam vel magnam atque possimus accusamus placeat."),e(),c(19,"img",10),e()()())},styles:['@charset "UTF-8";#grid-one[_ngcontent-%COMP%]{overflow:hidden;width:100vw;height:90vh;margin-top:10vh;display:flex;justify-content:center;align-items:center}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]{width:70vw;display:grid;grid-template-rows:repeat(3,1fr);grid-template-columns:repeat(2,1fr);gap:1rem}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);margin:0;padding:.5rem;color:#fff;z-index:1}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .textcol2a4[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:15vw;height:auto;background-color:#00000093;margin:0;padding:.5rem;color:#fff;z-index:1}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .col2a4[_ngcontent-%COMP%]{width:50vw;position:relative}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]{width:20vw;height:20vh;position:relative}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil1[_ngcontent-%COMP%]{grid-row:1/2;grid-column:1/2;overflow:hidden}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .3s ease-in-out}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil2[_ngcontent-%COMP%]{grid-row:2/3;grid-column:1/2;overflow:hidden}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .3s ease-in-out}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil3[_ngcontent-%COMP%]{grid-row:3/4;grid-column:1/2;overflow:hidden}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .3s ease-in-out}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil123[_ngcontent-%COMP%]{grid-row:1/4;grid-column:2/3;overflow:hidden}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil123[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .3s ease-in-out}#grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil2[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil3[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #grid-one[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .fil123[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.2)}']});let r=i;return r})();var k=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=d({type:i,selectors:[["app-contenido"]],standalone:!0,features:[l],decls:11,vars:0,consts:[["id","contenido"]],template:function(o,m){o&1&&(t(0,"div",0)(1,"h3"),n(2,"Contenido mas especifico"),e(),t(3,"p"),n(4,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque iure perferendis dolorem placeat, labore ad obcaecati qui fugiat officia suscipit ratione, quia numquam eos ab, accusamus odit sequi porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ratione eligendi fugit autem inventore sint officia repellat accusamus expedita et, sapiente, provident amet commodi, facere quia doloremque ipsa earum natus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur debitis nobis aliquid, possimus dolore doloremque eum neque amet deleniti, molestiae est temporibus et sapiente. Ut maiores veniam non dicta!"),e(),t(5,"p"),n(6,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit in fuga ipsum earum ducimus architecto ut ad consectetur! Nihil dignissimos aut iure, illum recusandae quo odit asperiores nobis quae maxime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem beatae commodi dolor quidem aperiam illo repellat rerum nostrum illum? Minus natus repudiandae deserunt perspiciatis cupiditate nisi totam laborum pariatur similique!"),e(),t(7,"p"),n(8,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores dolorem delectus! Dolore optio, veritatis reprehenderit error aliquam, corrupti deserunt nemo eligendi doloribus, alias quos pariatur laboriosam eius eum cupiditate."),e(),t(9,"p"),n(10,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsum id amet recusandae molestias pariatur perferendis exercitationem maxime doloribus eum tenetur saepe, nam minima animi reiciendis sequi eaque blanditiis odit!"),e()())},styles:['#contenido[_ngcontent-%COMP%]{width:100vw;height:100vh;margin-bottom:8rem;background-image:url("./media/2110046-6P3BTI5D.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:1000}#contenido[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:3rem;margin:3rem;padding-top:120px}#contenido[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;width:40vw;margin:3rem}']});let r=i;return r})();var y=(()=>{let i=class i{constructor(){this.title="muni"}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=d({type:i,selectors:[["app-root"]],standalone:!0,features:[l],decls:8,vars:0,consts:[["all",""]],template:function(o,m){o&1&&(t(0,"div",null,0),c(2,"app-menu")(3,"app-fixed")(4,"app-main")(5,"app-grid-one")(6,"app-contenido"),e(),c(7,"router-outlet"))},dependencies:[x,_,v,b,w,k]});let r=i;return r})();var E=[];var S={providers:[h(E),P()]};var B={providers:[O()]},q=f(S,B);var D=()=>M(y,q),oe=D;export{oe as a};
