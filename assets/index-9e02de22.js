(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var I,u,se,E,X,fe,j,C={},ue=[],be=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function S(_,e){for(var t in e)_[t]=e[t];return _}function ae(_){var e=_.parentNode;e&&e.removeChild(_)}function ke(_,e,t){var r,i,o,l={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:l[o]=e[o];if(arguments.length>2&&(l.children=arguments.length>3?I.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)l[o]===void 0&&(l[o]=_.defaultProps[o]);return D(_,l,r,i,null)}function D(_,e,t,r,i){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++se};return i==null&&u.vnode!=null&&u.vnode(o),o}function U(_){return _.children}function F(_,e){this.props=_,this.context=e}function T(_,e){if(e==null)return _.__?T(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?T(_):null}function pe(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return pe(_)}}function Y(_){(!_.__d&&(_.__d=!0)&&E.push(_)&&!V.__r++||X!==u.debounceRendering)&&((X=u.debounceRendering)||fe)(V)}function V(){var _,e,t,r,i,o,l,f,s;for(E.sort(j);_=E.shift();)_.__d&&(e=E.length,r=void 0,i=void 0,o=void 0,f=(l=(t=_).__v).__e,(s=t.__P)&&(r=[],i=[],(o=S({},l)).__v=l.__v+1,J(s,l,o,t.__n,s.ownerSVGElement!==void 0,l.__h!=null?[f]:null,r,f??T(l),l.__h,i),ye(r,l,i),l.__e!=f&&pe(l)),E.length>e&&E.sort(j));V.__r=0}function de(_,e,t,r,i,o,l,f,s,y,d){var n,h,a,c,p,N,v,g,$,P=0,b=r&&r.__k||ue,L=b.length,x=L,w=e.length;for(t.__k=[],n=0;n<w;n++)(c=t.__k[n]=(c=e[n])==null||typeof c=="boolean"||typeof c=="function"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?D(null,c,null,null,c):K(c)?D(U,{children:c},null,null,null):c.__b>0?D(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null?(c.__=t,c.__b=t.__b+1,(g=Pe(c,b,v=n+P,x))===-1?a=C:(a=b[g]||C,b[g]=void 0,x--),J(_,c,a,i,o,l,f,s,y,d),p=c.__e,(h=c.ref)&&a.ref!=h&&(a.ref&&Q(a.ref,null,c),d.push(h,c.__c||p,c)),p!=null&&(N==null&&(N=p),($=a===C||a.__v===null)?g==-1&&P--:g!==v&&(g===v+1?P++:g>v?x>w-v?P+=g-v:P--:P=g<v&&g==v-1?g-v:0),v=n+P,typeof c.type!="function"||g===v&&a.__k!==c.__k?typeof c.type=="function"||g===v&&!$?c.__d!==void 0?(s=c.__d,c.__d=void 0):s=p.nextSibling:s=ve(_,p,s):s=he(c,s,_),typeof t.type=="function"&&(t.__d=s))):(a=b[n])&&a.key==null&&a.__e&&(a.__e==s&&(s=T(a)),q(a,a,!1),b[n]=null);for(t.__e=N,n=L;n--;)b[n]!=null&&(typeof t.type=="function"&&b[n].__e!=null&&b[n].__e==t.__d&&(t.__d=b[n].__e.nextSibling),q(b[n],b[n]))}function he(_,e,t){for(var r,i=_.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=_,e=typeof r.type=="function"?he(r,e,t):ve(t,r.__e,e));return e}function ve(_,e,t){return t==null||t.parentNode!==_?_.insertBefore(e,null):e==t&&e.parentNode!=null||_.insertBefore(e,t),e.nextSibling}function Pe(_,e,t,r){var i=_.key,o=_.type,l=t-1,f=t+1,s=e[t];if(s===null||s&&i==s.key&&o===s.type)return t;if(r>(s!=null?1:0))for(;l>=0||f<e.length;){if(l>=0){if((s=e[l])&&i==s.key&&o===s.type)return l;l--}if(f<e.length){if((s=e[f])&&i==s.key&&o===s.type)return f;f++}}return-1}function He(_,e,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in e||W(_,o,null,t[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||W(_,o,e[o],t[o],r)}function Z(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||be.test(e)?t:t+"px"}function W(_,e,t,r,i){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||Z(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||Z(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r||_.addEventListener(e,o?_e:ee,o):_.removeEventListener(e,o?_e:ee,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function ee(_){return this.l[_.type+!1](u.event?u.event(_):_)}function _e(_){return this.l[_.type+!0](u.event?u.event(_):_)}function J(_,e,t,r,i,o,l,f,s,y){var d,n,h,a,c,p,N,v,g,$,P,b,L,x,w,H=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(s=t.__h,f=e.__e=t.__e,e.__h=null,o=[f]),(d=u.__b)&&d(e);e:if(typeof H=="function")try{if(v=e.props,g=(d=H.contextType)&&r[d.__c],$=d?g?g.props.value:d.__:r,t.__c?N=(n=e.__c=t.__c).__=n.__E:("prototype"in H&&H.prototype.render?e.__c=n=new H(v,$):(e.__c=n=new F(v,$),n.constructor=H,n.render=xe),g&&g.sub(n),n.props=v,n.state||(n.state={}),n.context=$,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),H.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=S({},n.__s)),S(n.__s,H.getDerivedStateFromProps(v,n.__s))),a=n.props,c=n.state,n.__v=e,h)H.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(H.getDerivedStateFromProps==null&&v!==a&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,$),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,$)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(n.props=v,n.state=n.__s,n.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(A){A&&(A.__=e)}),P=0;P<n._sb.length;P++)n.__h.push(n._sb[P]);n._sb=[],n.__h.length&&l.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,$),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(a,c,p)})}if(n.context=$,n.props=v,n.__P=_,n.__e=!1,b=u.__r,L=0,"prototype"in H&&H.prototype.render){for(n.state=n.__s,n.__d=!1,b&&b(e),d=n.render(n.props,n.state,n.context),x=0;x<n._sb.length;x++)n.__h.push(n._sb[x]);n._sb=[]}else do n.__d=!1,b&&b(e),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++L<25);n.state=n.__s,n.getChildContext!=null&&(r=S(S({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(p=n.getSnapshotBeforeUpdate(a,c)),de(_,K(w=d!=null&&d.type===U&&d.key==null?d.props.children:d)?w:[w],e,t,r,i,o,l,f,s,y),n.base=e.__e,e.__h=null,n.__h.length&&l.push(n),N&&(n.__E=n.__=null)}catch(A){e.__v=null,(s||o!=null)&&(e.__e=f,e.__h=!!s,o[o.indexOf(f)]=null),u.__e(A,e,t)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=$e(t.__e,e,t,r,i,o,l,s,y);(d=u.diffed)&&d(e)}function ye(_,e,t){for(var r=0;r<t.length;r++)Q(t[r],t[++r],t[++r]);u.__c&&u.__c(e,_),_.some(function(i){try{_=i.__h,i.__h=[],_.some(function(o){o.call(i)})}catch(o){u.__e(o,i.__v)}})}function $e(_,e,t,r,i,o,l,f,s){var y,d,n,h=t.props,a=e.props,c=e.type,p=0;if(c==="svg"&&(i=!0),o!=null){for(;p<o.length;p++)if((y=o[p])&&"setAttribute"in y==!!c&&(c?y.localName===c:y.nodeType===3)){_=y,o[p]=null;break}}if(_==null){if(c===null)return document.createTextNode(a);_=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,a.is&&a),o=null,f=!1}if(c===null)h===a||f&&_.data===a||(_.data=a);else{if(o=o&&I.call(_.childNodes),d=(h=t.props||C).dangerouslySetInnerHTML,n=a.dangerouslySetInnerHTML,!f){if(o!=null)for(h={},p=0;p<_.attributes.length;p++)h[_.attributes[p].name]=_.attributes[p].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(He(_,a,h,i,f),n)e.__k=[];else if(de(_,K(p=e.props.children)?p:[p],e,t,r,i&&c!=="foreignObject",o,l,o?o[0]:t.__k&&T(t,0),f,s),o!=null)for(p=o.length;p--;)o[p]!=null&&ae(o[p]);f||("value"in a&&(p=a.value)!==void 0&&(p!==_.value||c==="progress"&&!p||c==="option"&&p!==h.value)&&W(_,"value",p,h.value,!1),"checked"in a&&(p=a.checked)!==void 0&&p!==_.checked&&W(_,"checked",p,h.checked,!1))}return _}function Q(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){u.__e(r,t)}}function q(_,e,t){var r,i;if(u.unmount&&u.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||Q(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(i=0;i<r.length;i++)r[i]&&q(r[i],e,t||typeof _.type!="function");t||_.__e==null||ae(_.__e),_.__=_.__e=_.__d=void 0}function xe(_,e,t){return this.constructor(_,t)}function Se(_,e,t){var r,i,o,l;u.__&&u.__(_,e),i=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],l=[],J(e,_=(!r&&t||e).__k=ke(U,null,[_]),i||C,C,e.ownerSVGElement!==void 0,!r&&t?[t]:i?null:e.firstChild?I.call(e.childNodes):null,o,!r&&t?t:i?i.__e:e.firstChild,r,l),ye(o,_,l)}I=ue.slice,u={__e:function(_,e,t,r){for(var i,o,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(_)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(_,r||{}),l=i.__d),l)return i.__E=i}catch(f){_=f}throw _}},se=0,F.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof _=="function"&&(_=_(S({},t),this.props)),_&&S(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),Y(this))},F.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Y(this))},F.prototype.render=U,E=[],fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,j=function(_,e){return _.__v.__b-e.__v.__b},V.__r=0;var R,m,B,te,z=0,me=[],M=[],ne=u.__b,oe=u.__r,re=u.diffed,ie=u.__c,le=u.unmount;function Ee(_,e){u.__h&&u.__h(m,_,z||e),z=0;var t=m.__H||(m.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:M}),t.__[_]}function Ne(_){return z=1,we(ge,_)}function we(_,e,t){var r=Ee(R++,2);if(r.t=_,!r.__c&&(r.__=[t?t(e):ge(void 0,e),function(f){var s=r.__N?r.__N[0]:r.__[0],y=r.t(s,f);s!==y&&(r.__N=[y,r.__[1]],r.__c.setState({}))}],r.__c=m,!m.u)){var i=function(f,s,y){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(h){return h.__c});if(d.every(function(h){return!h.__N}))return!o||o.call(this,f,s,y);var n=!1;return d.forEach(function(h){if(h.__N){var a=h.__[0];h.__=h.__N,h.__N=void 0,a!==h.__[0]&&(n=!0)}}),!(!n&&r.__c.props===f)&&(!o||o.call(this,f,s,y))};m.u=!0;var o=m.shouldComponentUpdate,l=m.componentWillUpdate;m.componentWillUpdate=function(f,s,y){if(this.__e){var d=o;o=void 0,i(f,s,y),o=d}l&&l.call(this,f,s,y)},m.shouldComponentUpdate=i}return r.__N||r.__}function Ce(){for(var _;_=me.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(O),_.__H.__h.forEach(G),_.__H.__h=[]}catch(e){_.__H.__h=[],u.__e(e,_.__v)}}u.__b=function(_){m=null,ne&&ne(_)},u.__r=function(_){oe&&oe(_),R=0;var e=(m=_.__c).__H;e&&(B===m?(e.__h=[],m.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=M,t.__N=t.i=void 0})):(e.__h.forEach(O),e.__h.forEach(G),e.__h=[],R=0)),B=m},u.diffed=function(_){re&&re(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(me.push(e)!==1&&te===u.requestAnimationFrame||((te=u.requestAnimationFrame)||Le)(Ce)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==M&&(t.__=t.__V),t.i=void 0,t.__V=M})),B=m=null},u.__c=function(_,e){e.some(function(t){try{t.__h.forEach(O),t.__h=t.__h.filter(function(r){return!r.__||G(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],u.__e(r,t.__v)}}),ie&&ie(_,e)},u.unmount=function(_){le&&le(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{O(r)}catch(i){e=i}}),t.__H=void 0,e&&u.__e(e,t.__v))};var ce=typeof requestAnimationFrame=="function";function Le(_){var e,t=function(){clearTimeout(r),ce&&cancelAnimationFrame(e),setTimeout(_)},r=setTimeout(t,100);ce&&(e=requestAnimationFrame(t))}function O(_){var e=m,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),m=e}function G(_){var e=m;_.__c=_.__(),m=e}function ge(_,e){return typeof e=="function"?e(_):e}const Te="/gh-pages-preact/assets/preact-48177e6f.svg",Ue="/gh-pages-preact/vite.svg";var Ae=0;function k(_,e,t,r,i,o){var l,f,s={};for(f in e)f=="ref"?l=e[f]:s[f]=e[f];var y={type:_,props:s,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ae,__source:i,__self:o};if(typeof _=="function"&&(l=_.defaultProps))for(f in l)s[f]===void 0&&(s[f]=l[f]);return u.vnode&&u.vnode(y),y}function De(){const[_,e]=Ne(0);return k(U,{children:[k("div",{children:[k("a",{href:"https://vitejs.dev",target:"_blank",children:k("img",{src:Ue,class:"logo",alt:"Vite logo"})}),k("a",{href:"https://preactjs.com",target:"_blank",children:k("img",{src:Te,class:"logo preact",alt:"Preact logo"})})]}),k("h1",{children:"Vite + Preact"}),k("div",{class:"card",children:[k("button",{onClick:()=>e(t=>t+1),children:["count is ",_]}),k("p",{children:["Edit ",k("code",{children:"src/app.tsx"})," and save to test HMR"]})]}),k("p",{class:"read-the-docs",children:"Click on the Vite and Preact logos to learn more"})]})}Se(k(De,{}),document.getElementById("app"));
