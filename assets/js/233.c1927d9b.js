(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1522:function(e,t,n){"use strict";n.r(t);n(31),n(333);var l=n(327),i={data:function(){return{items:[]}},beforeMount:function(){var e=this.$page.path.split("/"),t=e[e.length-2],n=l.nodes[t],i=[];n&&n.codex&&(i=n.codex.data.resources.generic),this.$data.items=i}},r=n(26),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.items,(function(t){return n("li",{key:t.label},[n("a",{attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.label)+" "+e._s(t.icon))])])})),0)}),[],!1,null,null,null);t.default=s.exports},333:function(e,t,n){"use strict";var l=n(180),i=n(178),r=n(7),s=n(21),u=n(104),a=n(181),c=n(15),o=n(182),h=n(78),g=n(179).UNSUPPORTED_Y,d=[].push,p=Math.min;l("split",2,(function(e,t,n){var l;return l="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var l=String(s(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===e)return[l];if(!i(e))return t.call(l,e,r);for(var u,a,c,o=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,f=new RegExp(e.source,g+"g");(u=h.call(f,l))&&!((a=f.lastIndex)>p&&(o.push(l.slice(p,u.index)),u.length>1&&u.index<l.length&&d.apply(o,u.slice(1)),c=u[0].length,p=a,o.length>=r));)f.lastIndex===u.index&&f.lastIndex++;return p===l.length?!c&&f.test("")||o.push(""):o.push(l.slice(p)),o.length>r?o.slice(0,r):o}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=s(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,i,n):l.call(String(i),t,n)},function(e,i){var s=n(l,e,this,i,l!==t);if(s.done)return s.value;var h=r(e),d=String(this),f=u(h,RegExp),v=h.unicode,x=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"g":"y"),b=new f(g?"^(?:"+h.source+")":h,x),m=void 0===i?4294967295:i>>>0;if(0===m)return[];if(0===d.length)return null===o(b,d)?[d]:[];for(var w=0,_=0,k=[];_<d.length;){b.lastIndex=g?0:_;var y,I=o(b,g?d.slice(_):d);if(null===I||(y=p(c(b.lastIndex+(g?_:0)),d.length))===w)_=a(d,_,v);else{if(k.push(d.slice(w,_)),k.length===m)return k;for(var E=1;E<=I.length-1;E++)if(k.push(I[E]),k.length===m)return k;_=w=y}}return k.push(d.slice(w)),k}]}),g)}}]);