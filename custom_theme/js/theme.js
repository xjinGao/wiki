/* sphinx_rtd_theme version 0.4.1 | MIT license */
/* Built 20180727 10:07 */
require=function n(e,i,t){function o(s,a){if(!i[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[s]={exports:{}};e[s][0].call(u.exports,function(n){var i=e[s][1][n];return o(i||n)},u,u.exports,n,e,i,t)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<t.length;s++)o(t[s]);return o}({"sphinx-rtd-theme":[function(n,e,i){var jQuery="undefined"!=typeof window?window.jQuery:n("jquery");e.exports.ThemeNav={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:!1,enable:function(n){var e=this;void 0===n&&(n=!0),e.isRunning||(e.isRunning=!0,jQuery(function(i){e.init(i),e.reset(),e.win.on("hashchange",e.reset),n&&e.win.on("scroll",function(){e.linkScroll||e.winScroll||(e.winScroll=!0,requestAnimationFrame(function(){e.onScroll()}))}),e.win.on("resize",function(){e.winResize||(e.winResize=!0,requestAnimationFrame(function(){e.onResize()}))}),e.onResize()}))},enableSticky:function(){this.enable(!0)},init:function(n){n(document);var e=this;this.navBar=n("div.wy-side-scroll:first"),this.win=n(window),n(document).on("click","[data-toggle='wy-nav-top']",function(){n("[data-toggle='wy-nav-shift']").toggleClass("shift"),n("[data-toggle='rst-versions']").toggleClass("shift")}).on("click",".wy-menu-vertical .current ul li a",function(){var i=n(this);n("[data-toggle='wy-nav-shift']").removeClass("shift"),n("[data-toggle='rst-versions']").toggleClass("shift"),e.toggleCurrent(i),e.hashChange()}).on("click","[data-toggle='rst-current-version']",function(){n("[data-toggle='rst-versions']").toggleClass("shift-up")}),n("table.docutils:not(.field-list,.footnote,.citation)").wrap("<div class='wy-table-responsive'></div>"),n("table.docutils.footnote").wrap("<div class='wy-table-responsive footnote'></div>"),n("table.docutils.citation").wrap("<div class='wy-table-responsive citation'></div>"),n(".wy-menu-vertical ul").not(".simple").siblings("a").each(function(){var i=n(this);expand=n('<span class="toctree-expand"></span>'),expand.on("click",function(n){return e.toggleCurrent(i),n.stopPropagation(),!1}),i.prepend(expand)})},reset:function(){var n=encodeURI(window.location.hash)||"#";try{var e=$(".wy-menu-vertical"),i=e.find('[href="'+n+'"]');if(0===i.length){var t=$('.document [id="'+n.substring(1)+'"]').closest("div.section");0===(i=e.find('[href="#'+t.attr("id")+'"]')).length&&(i=e.find('[href="#"]'))}i.length>0&&($(".wy-menu-vertical .current").removeClass("current"),i.addClass("current"),i.closest("li.toctree-l1").parent().addClass("current"),i.closest("li.toctree-l2").addClass("current"),i.closest("li.toctree-l3").addClass("current"),i.closest("li.toctree-l4").addClass("current"))}catch(o){console.log("Error expanding nav for anchor",o)}},onScroll:function(){this.winScroll=!1;var n=this.win.scrollTop(),e=n+this.winHeight,i=this.navBar.scrollTop()+(n-this.winPosition);n<0||e>this.docHeight||(this.navBar.scrollTop(i),this.winPosition=n)},onResize:function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},hashChange:function(){this.linkScroll=!0,this.win.one("hashchange",function(){this.linkScroll=!1})},toggleCurrent:function(n){var e=n.closest("li");e.siblings("li.current").removeClass("current"),e.siblings().find("li.current").removeClass("current"),e.find("> ul li.current").removeClass("current"),e.toggleClass("current")}},"undefined"!=typeof window&&(window.SphinxRtdTheme={Navigation:e.exports.ThemeNav,StickyNav:e.exports.ThemeNav}),function(){for(var n=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,i){var t=(new Date).getTime(),o=Math.max(0,16-(t-n)),r=window.setTimeout(function(){e(t+o)},o);return n=t+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})}()},{jquery:"jquery"}]},{},["sphinx-rtd-theme"]);
