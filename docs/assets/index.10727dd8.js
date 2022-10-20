const Je=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};Je();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),Pe=new WeakMap;class We{constructor(e,t,s){if(this._$cssResult$=!0,s!==ye)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet;const t=this._strings;if(_e&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Pe.get(t)),e===void 0&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Pe.set(t,e))}return e}toString(){return this.cssText}}const et=i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},tt=i=>new We(typeof i=="string"?i:String(i),void 0,ye),P=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,n,o)=>s+et(n)+i[o+1],i[0]);return new We(t,i,ye)},it=(i,e)=>{_e?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),n=window.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)})},st=i=>{let e="";for(const t of i.cssRules)e+=t.cssText;return tt(e)},xe=_e?i=>i:i=>i instanceof CSSStyleSheet?st(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F,Y,Q,qe;let Ke,$;const Te=window.trustedTypes,nt=Te?Te.emptyScript:"",z=window.reactiveElementPolyfillSupportDevMode;{const i=(F=globalThis.litIssuedWarnings)!==null&&F!==void 0?F:globalThis.litIssuedWarnings=new Set;$=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,i.has(t)||(console.warn(t),i.add(t))},$("dev-mode","Lit is in dev mode. Not recommended for production!"),((Y=window.ShadyDOM)===null||Y===void 0?void 0:Y.inUse)&&z===void 0&&$("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded."),Ke=e=>({then:(t,s)=>{$("request-update-promise",`The \`requestUpdate\` method should no longer return a Promise but does so on \`${e}\`. Use \`updateComplete\` instead.`),t!==void 0&&t(!1)}})}const X=i=>{!window.emitLitDebugLogEvents||window.dispatchEvent(new CustomEvent("lit-debug",{detail:i}))},Fe=(i,e)=>i,ue={toAttribute(i,e){switch(e){case Boolean:i=i?nt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i);break}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}break}return t}},Ye=(i,e)=>e!==i&&(e===e||i===i),G={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:Ye},pe="finalized";class v extends HTMLElement{constructor(){super(),this.__instanceProperties=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this._initialize()}static addInitializer(e){var t;(t=this._initializers)!==null&&t!==void 0||(this._initializers=[]),this._initializers.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const n=this.__attributeNameForProperty(s,t);n!==void 0&&(this.__attributeToPropertyMap.set(n,s),e.push(n))}),e}static createProperty(e,t=G){var s;if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,n,t);o!==void 0&&(Object.defineProperty(this.prototype,e,o),this.hasOwnProperty("__reactivePropertyKeys")||(this.__reactivePropertyKeys=new Set((s=this.__reactivePropertyKeys)!==null&&s!==void 0?s:[])),this.__reactivePropertyKeys.add(e))}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||G}static finalize(){if(this.hasOwnProperty(pe))return!1;this[pe]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.__attributeToPropertyMap=new Map,this.hasOwnProperty(Fe("properties"))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of s)this.createProperty(n,t[n])}this.elementStyles=this.finalizeStyles(this.styles);{const t=(s,n=!1)=>{this.prototype.hasOwnProperty(s)&&$(n?"renamed-api":"removed-api",`\`${s}\` is implemented on class ${this.name}. It has been ${n?"renamed":"removed"} in this version of LitElement.`)};t("initialize"),t("requestUpdateInternal"),t("_getUpdateComplete",!0)}return!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(xe(n))}else e!==void 0&&t.push(xe(e));return t}static __attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}_initialize(){var e;this.__updatePromise=new Promise(t=>this.enableUpdating=t),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),(e=this.constructor._initializers)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this.__controllers)!==null&&t!==void 0?t:this.__controllers=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this.__controllers)===null||t===void 0||t.splice(this.__controllers.indexOf(e)>>>0,1)}__saveInstanceProperties(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this.__instanceProperties.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return it(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.__controllers)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this.__controllers)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$attributeToProperty(e,s)}__propertyToAttribute(e,t,s=G){var n,o;const r=this.constructor.__attributeNameForProperty(e,s);if(r!==void 0&&s.reflect===!0){const a=((o=(n=s.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&o!==void 0?o:ue.toAttribute)(t,s.type);this.constructor.enabledWarnings.indexOf("migration")>=0&&a===void 0&&$("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this.__reflectingProperty=null}}_$attributeToProperty(e,t){var s,n;const o=this.constructor,r=o.__attributeToPropertyMap.get(e);if(r!==void 0&&this.__reflectingProperty!==r){const c=o.getPropertyOptions(r),a=c.converter,l=(n=(s=a==null?void 0:a.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&n!==void 0?n:ue.fromAttribute;this.__reflectingProperty=r,this[r]=l(t,c.type),this.__reflectingProperty=null}}requestUpdate(e,t,s){let n=!0;return e!==void 0&&(s=s||this.constructor.getPropertyOptions(e),(s.hasChanged||Ye)(this[e],t)?(this._$changedProperties.has(e)||this._$changedProperties.set(e,t),s.reflect===!0&&this.__reflectingProperty!==e&&(this.__reflectingProperties===void 0&&(this.__reflectingProperties=new Map),this.__reflectingProperties.set(e,s))):n=!1),!this.isUpdatePending&&n&&(this.__updatePromise=this.__enqueueUpdate()),Ke(this.localName)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e,t;if(!this.isUpdatePending)return;if(X==null||X({kind:"update"}),!this.hasUpdated){const o=[];if((e=this.constructor.__reactivePropertyKeys)===null||e===void 0||e.forEach(r=>{var c;this.hasOwnProperty(r)&&!(!((c=this.__instanceProperties)===null||c===void 0)&&c.has(r))&&o.push(r)}),o.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${o.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}this.__instanceProperties&&(this.__instanceProperties.forEach((o,r)=>this[r]=o),this.__instanceProperties=void 0);let s=!1;const n=this._$changedProperties;try{s=this.shouldUpdate(n),s?(this.willUpdate(n),(t=this.__controllers)===null||t===void 0||t.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(n)):this.__markUpdated()}catch(o){throw s=!1,this.__markUpdated(),o}s&&this._$didUpdate(n)}willUpdate(e){}_$didUpdate(e){var t;(t=this.__controllers)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdated)===null||n===void 0?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.indexOf("change-in-update")>=0&&$("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties!==void 0&&(this.__reflectingProperties.forEach((t,s)=>this.__propertyToAttribute(s,this[s],t)),this.__reflectingProperties=void 0),this.__markUpdated()}updated(e){}firstUpdated(e){}}qe=pe;v[qe]=!0;v.elementProperties=new Map;v.elementStyles=[];v.shadowRootOptions={mode:"open"};z==null||z({ReactiveElement:v});{v.enabledWarnings=["change-in-update"];const i=function(e){e.hasOwnProperty(Fe("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};v.enableWarning=function(e){i(this),this.enabledWarnings.indexOf(e)<0&&this.enabledWarnings.push(e)},v.disableWarning=function(e){i(this);const t=this.enabledWarnings.indexOf(e);t>=0&&this.enabledWarnings.splice(t,1)}}((Q=globalThis.reactiveElementVersions)!==null&&Q!==void 0?Q:globalThis.reactiveElementVersions=[]).push("1.3.3");globalThis.reactiveElementVersions.length>1&&$("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z,J,ee,te;const d=i=>{!window.emitLitDebugLogEvents||window.dispatchEvent(new CustomEvent("lit-debug",{detail:i}))};let ot=0,V;(Z=globalThis.litIssuedWarnings)!==null&&Z!==void 0||(globalThis.litIssuedWarnings=new Set),V=(i,e)=>{e+=i?` See https://lit.dev/msg/${i} for more information.`:"",globalThis.litIssuedWarnings.has(e)||(console.warn(e),globalThis.litIssuedWarnings.add(e))},V("dev-mode","Lit is in dev mode. Not recommended for production!");const y=((J=window.ShadyDOM)===null||J===void 0?void 0:J.inUse)&&((ee=window.ShadyDOM)===null||ee===void 0?void 0:ee.noPatch)===!0?window.ShadyDOM.wrap:i=>i,C=globalThis.trustedTypes,Se=C?C.createPolicy("lit-html",{createHTML:i=>i}):void 0,rt=i=>i,B=(i,e,t)=>rt,at=i=>{if(S!==B)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");S=i},dt=()=>{S=B},me=(i,e,t)=>S(i,e,t),fe="$lit$",b=`lit$${String(Math.random()).slice(9)}$`,Qe="?"+b,lt=`<${Qe}>`,O=document,R=(i="")=>O.createComment(i),M=i=>i===null||typeof i!="object"&&typeof i!="function",Xe=Array.isArray,ct=i=>Xe(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ie=`[ 	
\f\r]`,ht=`[^ 	
\f\r"'\`<>=]`,ut=`[^\\s"'>=/]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ee=1,se=2,pt=3,Ce=/-->/g,Ne=/>/g,x=new RegExp(`>|${ie}(?:(${ut}+)(${ie}*=${ie}*(?:${ht}|("|')|))|$)`,"g"),mt=0,Ae=1,ft=2,ke=3,ne=/'/g,oe=/"/g,Ge=/^(?:script|style|textarea|title)$/i,gt=1,ge=2,ve=1,D=2,_t=3,yt=4,vt=5,be=6,bt=7,wt=i=>(e,...t)=>(e.some(s=>s===void 0)&&console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`),{_$litType$:i,strings:e,values:t}),g=wt(gt),T=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Oe=new WeakMap,H=(i,e,t)=>{var s,n;if(e==null)throw new TypeError(`The container to render into may not be ${e}`);const o=ot++,r=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let c=r._$litPart$;if(d==null||d({kind:"begin render",id:o,value:i,container:e,options:t,part:c}),c===void 0){const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=c=new U(e.insertBefore(R(),a),a,void 0,t!=null?t:{})}return c._$setValue(i),d==null||d({kind:"end render",id:o,value:i,container:e,options:t,part:c}),c};H.setSanitizer=at,H.createSanitizer=me,H._testOnlyClearSanitizerFactoryDoNotCallOrElse=dt;const E=O.createTreeWalker(O,129,null,!1);let S=B;const $t=(i,e)=>{const t=i.length-1,s=[];let n=e===ge?"<svg>":"",o,r=k;for(let a=0;a<t;a++){const l=i[a];let f=-1,m,h=0,u;for(;h<l.length&&(r.lastIndex=h,u=r.exec(l),u!==null);)if(h=r.lastIndex,r===k){if(u[Ee]==="!--")r=Ce;else if(u[Ee]!==void 0)r=Ne;else if(u[se]!==void 0)Ge.test(u[se])&&(o=new RegExp(`</${u[se]}`,"g")),r=x;else if(u[pt]!==void 0)throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else r===x?u[mt]===">"?(r=o!=null?o:k,f=-1):u[Ae]===void 0?f=-2:(f=r.lastIndex-u[ft].length,m=u[Ae],r=u[ke]===void 0?x:u[ke]==='"'?oe:ne):r===oe||r===ne?r=x:r===Ce||r===Ne?r=k:(r=x,o=void 0);console.assert(f===-1||r===x||r===ne||r===oe,"unexpected parse state B");const K=r===x&&i[a+1].startsWith("/>")?" ":"";n+=r===k?l+lt:f>=0?(s.push(m),l.slice(0,f)+fe+l.slice(f)+b+K):l+b+(f===-2?(s.push(void 0),a):K)}const c=n+(i[t]||"<?>")+(e===ge?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw")){let a="invalid template strings array";throw a=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.

          If you're using the html or svg tagged template functions normally
          and and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),new Error(a)}return[Se!==void 0?Se.createHTML(c):c,s]};class L{constructor({strings:e,["_$litType$"]:t},s){this.parts=[];let n,o=0,r=0;const c=e.length-1,a=this.parts,[l,f]=$t(e,t);if(this.el=L.createElement(l,s),E.currentNode=this.el.content,t===ge){const m=this.el.content,h=m.firstChild;h.remove(),m.append(...h.childNodes)}for(;(n=E.nextNode())!==null&&a.length<c;){if(n.nodeType===1){{const m=n.localName;if(/^(?:textarea|template)$/i.test(m)&&n.innerHTML.includes(b)){const h=`Expressions are not supported inside \`${m}\` elements. See https://lit.dev/msg/expression-in-${m} for more information.`;if(m==="template")throw new Error(h);V("",h)}}if(n.hasAttributes()){const m=[];for(const h of n.getAttributeNames())if(h.endsWith(fe)||h.startsWith(b)){const u=f[r++];if(m.push(h),u!==void 0){const Ze=n.getAttribute(u.toLowerCase()+fe).split(b),j=/([.?@])?(.*)/.exec(u);a.push({type:ve,index:o,name:j[2],strings:Ze,ctor:j[1]==="."?xt:j[1]==="?"?St:j[1]==="@"?Et:W})}else a.push({type:be,index:o})}for(const h of m)n.removeAttribute(h)}if(Ge.test(n.tagName)){const m=n.textContent.split(b),h=m.length-1;if(h>0){n.textContent=C?C.emptyScript:"";for(let u=0;u<h;u++)n.append(m[u],R()),E.nextNode(),a.push({type:D,index:++o});n.append(m[h],R())}}}else if(n.nodeType===8)if(n.data===Qe)a.push({type:D,index:o});else{let h=-1;for(;(h=n.data.indexOf(b,h+1))!==-1;)a.push({type:bt,index:o}),h+=b.length-1}o++}d==null||d({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){const s=O.createElement("template");return s.innerHTML=e,s}}function N(i,e,t=i,s){var n,o,r,c;if(e===T)return e;let a=s!==void 0?(n=t.__directives)===null||n===void 0?void 0:n[s]:t.__directive;const l=M(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$notifyDirectiveConnectionChanged)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$initialize(i,t,s)),s!==void 0?((r=(c=t).__directives)!==null&&r!==void 0?r:c.__directives=[])[s]=a:t.__directive=a),a!==void 0&&(e=N(i,a._$resolve(i,e.values),a,s)),e}class Pt{constructor(e,t){this._parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){var t;const{el:{content:s},parts:n}=this._$template,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:O).importNode(s,!0);E.currentNode=o;let r=E.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let f;l.type===D?f=new U(r,r.nextSibling,this,e):l.type===ve?f=new l.ctor(r,l.name,l.strings,this,e):l.type===be&&(f=new Ct(r,this,e)),this._parts.push(f),l=n[++a]}c!==(l==null?void 0:l.index)&&(r=E.nextNode(),c++)}return o}_update(e){let t=0;for(const s of this._parts)s!==void 0&&(d==null||d({kind:"set part",part:s,value:e[t],valueIndex:t,values:e,templateInstance:this}),s.strings!==void 0?(s._$setValue(e,s,t),t+=s.strings.length-2):s._$setValue(e[t])),t++}}class U{constructor(e,t,s,n){var o;this.type=D,this._$committedValue=p,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=s,this.options=n,this.__isConnected=(o=n==null?void 0:n.isConnected)!==null&&o!==void 0?o:!0,this._textSanitizer=void 0}get _$isConnected(){var e,t;return(t=(e=this._$parent)===null||e===void 0?void 0:e._$isConnected)!==null&&t!==void 0?t:this.__isConnected}get parentNode(){let e=y(this._$startNode).parentNode;const t=this._$parent;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(this.parentNode===null)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");e=N(this,e,t),M(e)?e===p||e==null||e===""?(this._$committedValue!==p&&(d==null||d({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=p):e!==this._$committedValue&&e!==T&&this._commitText(e):e._$litType$!==void 0?this._commitTemplateResult(e):e.nodeType!==void 0?this._commitNode(e):ct(e)?this._commitIterable(e):this._commitText(e)}_insert(e,t=this._$endNode){return y(y(this._$startNode).parentNode).insertBefore(e,t)}_commitNode(e){var t;if(this._$committedValue!==e){if(this._$clear(),S!==B){const s=(t=this._$startNode.parentNode)===null||t===void 0?void 0:t.nodeName;if(s==="STYLE"||s==="SCRIPT"){let n="Forbidden";throw s==="STYLE"?n="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":n="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(n)}}d==null||d({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==p&&M(this._$committedValue)){const t=y(this._$startNode).nextSibling;this._textSanitizer===void 0&&(this._textSanitizer=me(t,"data","property")),e=this._textSanitizer(e),d==null||d({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{const t=document.createTextNode("");this._commitNode(t),this._textSanitizer===void 0&&(this._textSanitizer=me(t,"data","property")),e=this._textSanitizer(e),d==null||d({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){var t;const{values:s,["_$litType$"]:n}=e,o=typeof n=="number"?this._$getTemplate(e):(n.el===void 0&&(n.el=L.createElement(n.h,this.options)),n);if(((t=this._$committedValue)===null||t===void 0?void 0:t._$template)===o)d==null||d({kind:"template updating",template:o,instance:this._$committedValue,parts:this._$committedValue._parts,options:this.options,values:s}),this._$committedValue._update(s);else{const r=new Pt(o,this),c=r._clone(this.options);d==null||d({kind:"template instantiated",template:o,instance:r,parts:r._parts,options:this.options,fragment:c,values:s}),r._update(s),d==null||d({kind:"template instantiated and updated",template:o,instance:r,parts:r._parts,options:this.options,fragment:c,values:s}),this._commitNode(c),this._$committedValue=r}}_$getTemplate(e){let t=Oe.get(e.strings);return t===void 0&&Oe.set(e.strings,t=new L(e)),t}_commitIterable(e){Xe(this._$committedValue)||(this._$committedValue=[],this._$clear());const t=this._$committedValue;let s=0,n;for(const o of e)s===t.length?t.push(n=new U(this._insert(R()),this._insert(R()),this,this.options)):n=t[s],n._$setValue(o),s++;s<t.length&&(this._$clear(n&&y(n._$endNode).nextSibling,s),t.length=s)}_$clear(e=y(this._$startNode).nextSibling,t){var s;for((s=this._$notifyConnectionChanged)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$endNode;){const n=y(e).nextSibling;y(e).remove(),e=n}}setConnected(e){var t;if(this._$parent===void 0)this.__isConnected=e,(t=this._$notifyConnectionChanged)===null||t===void 0||t.call(this,e);else throw new Error("part.setConnected() may only be called on a RootPart returned from render().")}}class W{constructor(e,t,s,n,o){this.type=ve,this._$committedValue=p,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$committedValue=new Array(s.length-1).fill(new String),this.strings=s):this._$committedValue=p,this._sanitizer=void 0}get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e,t=this,s,n){const o=this.strings;let r=!1;if(o===void 0)e=N(this,e,t,0),r=!M(e)||e!==this._$committedValue&&e!==T,r&&(this._$committedValue=e);else{const c=e;e=o[0];let a,l;for(a=0;a<o.length-1;a++)l=N(this,c[s+a],t,a),l===T&&(l=this._$committedValue[a]),r||(r=!M(l)||l!==this._$committedValue[a]),l===p?e=p:e!==p&&(e+=(l!=null?l:"")+o[a+1]),this._$committedValue[a]=l}r&&!n&&this._commitValue(e)}_commitValue(e){e===p?y(this.element).removeAttribute(this.name):(this._sanitizer===void 0&&(this._sanitizer=S(this.element,this.name,"attribute")),e=this._sanitizer(e!=null?e:""),d==null||d({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),y(this.element).setAttribute(this.name,e!=null?e:""))}}class xt extends W{constructor(){super(...arguments),this.type=_t}_commitValue(e){this._sanitizer===void 0&&(this._sanitizer=S(this.element,this.name,"property")),e=this._sanitizer(e),d==null||d({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===p?void 0:e}}const Tt=C?C.emptyScript:"";class St extends W{constructor(){super(...arguments),this.type=yt}_commitValue(e){d==null||d({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==p),options:this.options}),e&&e!==p?y(this.element).setAttribute(this.name,Tt):y(this.element).removeAttribute(this.name)}}class Et extends W{constructor(e,t,s,n,o){if(super(e,t,s,n,o),this.type=vt,this.strings!==void 0)throw new Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){var s;if(e=(s=N(this,e,t,0))!==null&&s!==void 0?s:p,e===T)return;const n=this._$committedValue,o=e===p&&n!==p||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==p&&(n===p||o);d==null||d({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:o,addListener:r,oldListener:n}),o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){var t,s;typeof this._$committedValue=="function"?this._$committedValue.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$committedValue.handleEvent(e)}}class Ct{constructor(e,t,s){this.element=e,this.type=be,this._$disconnectableChildren=void 0,this._$parent=t,this.options=s}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){d==null||d({kind:"commit to element binding",element:this.element,value:e,options:this.options}),N(this,e)}}const re=window.litHtmlPolyfillSupportDevMode;re==null||re(L,U);((te=globalThis.litHtmlVersions)!==null&&te!==void 0?te:globalThis.litHtmlVersions=[]).push("2.2.6");globalThis.litHtmlVersions.length>1&&V("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ae,de,le;let we;{const i=(ae=globalThis.litIssuedWarnings)!==null&&ae!==void 0?ae:globalThis.litIssuedWarnings=new Set;we=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,i.has(t)||(console.warn(t),i.add(t))}}class _ extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=H(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.__childPart)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.__childPart)===null||e===void 0||e.setConnected(!1)}render(){return T}}_.finalized=!0;_._$litElement$=!0;(de=globalThis.litElementHydrateSupport)===null||de===void 0||de.call(globalThis,{LitElement:_});const ce=globalThis.litElementPolyfillSupportDevMode;ce==null||ce({LitElement:_});_.finalize=function(){if(!v.finalize.call(this))return!1;const e=(t,s,n=!1)=>{if(t.hasOwnProperty(s)){const o=(typeof t=="function"?t:t.constructor).name;we(n?"renamed-api":"removed-api",`\`${s}\` is implemented on class ${o}. It has been ${n?"renamed":"removed"} in this version of LitElement.`)}};return e(this,"render"),e(this,"getStyles",!0),e(this.prototype,"adoptStyles"),!0};((le=globalThis.litElementVersions)!==null&&le!==void 0?le:globalThis.litElementVersions=[]).push("3.2.1");globalThis.litElementVersions.length>1&&we("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=(i,e)=>(window.customElements.define(i,e),e),At=(i,e)=>{const{kind:t,elements:s}=e;return{kind:t,elements:s,finisher(n){window.customElements.define(i,n)}}},w=i=>e=>typeof e=="function"?Nt(i,e):At(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Ot=(i,e,t)=>{e.constructor.createProperty(t,i)};function q(i){return(e,t)=>t!==void 0?Ot(i,e,t):kt(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he;((he=window.HTMLSlotElement)===null||he===void 0?void 0:he.prototype.assignedElements)!=null;var Rt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,Lt=(i,e,t,s)=>{for(var n=s>1?void 0:s?Mt(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&Rt(e,t,n),n};let Ut=(i,e)=>{let t=0;i.forEach(s=>{s.isIntersecting&&(setTimeout(()=>{s.target.show()},t*100),t++)})};const It=new IntersectionObserver(Ut,{rootMargin:"-100px"});let Re=class extends _{static get styles(){return P`
      :host {
        display: block;
        transform-origin: 50% 20px;
        opacity: 0;
        background: white;
        border-radius: 6px;
        box-shadow: #0000000a 2px 4px 12px;
        overflow: hidden;
        transition: opacity 0.5s ease 0s,
          box-shadow 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s,
          transform 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s;
        transform: translate(0, 60px);
      }
      :host([shown]) {
        opacity: 1;
        transform: rotate(var(--rot, 2deg)) translate(0, 0px);
      }
      :host(:hover) {
        transform: rotate(var(--rot, 2deg)) translate(0, 0px) scale(1.0069);
        box-shadow: #00000010 2px 4px 24px;
      }
      .wrapper {
        padding: 30px 20px;
      }
    `}show(){this.setAttribute("shown","")}connectedCallback(){super.connectedCallback(),this.style.setProperty("--rot",`${(Math.random()-.5)*4}deg`),It.observe(this)}render(){return g`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Re=Lt([w("nida-card")],Re);var jt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,I=(i,e,t,s)=>{for(var n=s>1?void 0:s?zt(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&jt(e,t,n),n};let A=class extends _{constructor(){super(),this._image=new Image,this._image.addEventListener("load",()=>{setTimeout(()=>{this._image.classList.remove("hidden")},10)})}static get styles(){return P`
			:host {
				display: contents;
			}

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: opacity 0.5s ease;
				opacity: 1;
			}

			img.hidden {
				opacity: 0;
			}
		`}connectedCallback(){super.connectedCallback()}attributeChangedCallback(i,e,t){super.attributeChangedCallback(i,e,t),i==="src"&&(this._image.src=t,this._image.width=+(this.width||0),this._image.height=+(this.height||0),this._image.loading="lazy",this._image.alt=this.alt||"",this._image.classList.add("hidden"))}render(){return g`${this._image}`}};I([q({type:String})],A.prototype,"src",2);I([q({type:String})],A.prototype,"alt",2);I([q({type:String})],A.prototype,"width",2);I([q({type:String})],A.prototype,"height",2);A=I([w("aui-lazyimage")],A);var Ht=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Dt=(i,e,t,s)=>{for(var n=s>1?void 0:s?Vt(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&Ht(e,t,n),n};let Me=class extends _{constructor(){super(...arguments),this.cards=[],this.init=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener("cards",e=>{this.cards=e.detail});const i=document.querySelector(".page");if(i)i.addEventListener("scroll",()=>{!this.init&&this.cards.length>0&&(this.init=!0,this.requestUpdate())});else throw new Error("Something went wrong")}renderMedia(i){switch(i.type){default:return i.embed?g`<iframe
            src="${i.embed}"
            width="100%"
            height="280px"
            style="border: none;"
            allow="autoplay"
          ></iframe>`:g`Media not suppoerted. ${i.type}`}}renderCard(i){return g`
      <nida-card>
        <div class="message">
          <nida-message>${i.message}</nida-message>
        </div>

        ${i.media?g` <div class="media">${this.renderMedia(i.media)}</div> `:""}

        <div class="name">
          <span>${i.name}</span>
        </div>
      </nida-card>
    `}render(){if(!this.init)return;const i=[];let e=0;for(let t of this.cards){const s=e%3;i[s]=i[s]||[],i[s].push(t),e++}return g`
      <div class="grid">
        ${i.map(t=>g`
            <div class="column">
              ${t.map(s=>this.renderCard(s))}
            </div>
          `)}
      </div>
    `}};Me=Dt([w("nida-cardlist")],Me);const Bt=["nidali1Pew yasBih nidali1Pew yasBih nidali1Pew yasBih ","When's your birthday? Is it this year?","nidali1Pew nidali1Pew nidali1Pew","nidali1Pew nidali1NidaHeart nidali1Pew","nidali1NidaHype nidali1NidaHype nidali1NidaHype nidali1NidaHype","nidali1NidaHype nidali1NidaHype nidali1NidaHype nidali1NidaHype nidali1NidaHype","nidali1NidaHype nidali1NidaHype","nidali1NidaHype nidali1NidaHype nidali1NidaHype"];var Wt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Kt=(i,e,t,s)=>{for(var n=s>1?void 0:s?qt(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&Wt(e,t,n),n};let Le=class extends _{constructor(){super(...arguments),this.messages=[]}static get styles(){return P`
      :host {
        display: block;
        position: absolute;
        bottom: 120px;
        margin: 10px;
        color: white;
      }
      .message {
        margin-top: 8px;
        animation: slide-up 0.2s ease;
      }
      @keyframes slide-up {
        from {
          transform: translate(0, 20px);
        }
      }
      .messages {
        overflow: hidden;
      }
      img {
        width: 32px;
      }
    `}connectedCallback(){super.connectedCallback();const i=()=>{const t=Bt,s=t[Math.floor(t.length*Math.random())],n=document.createElement("nida-message");n.className="message",n.innerHTML=s,this.messages.push(n),this.messages.length>5&&this.messages.shift()};i(),i(),i(),i();const e=()=>{i(),this.requestUpdate(),setTimeout(()=>e(),750*Math.random()+500*1.5)};e()}render(){return g`
      <div class="wrapper">
        <div class="messages">${this.messages}</div>
      </div>
    `}};Le=Kt([w("nida-chat")],Le);var Ft=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Qt=(i,e,t,s)=>{for(var n=s>1?void 0:s?Yt(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&Ft(e,t,n),n};let Ue=class extends _{constructor(i){super(),this.original=i,this.position=null}static get styles(){return P`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 100000000;
      }
      .blackbox {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        animation: fadein 0.25s ease;
      }
      .close-btn {
        position: absolute;
        top: 40px;
        right: 40px;
        border-radius: 50%;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .close-btn:hover {
        background: grey;
      }
      .close-btn:active {
        background: black;
      }
      .content {
        height: auto;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        max-width: 900px;
        margin: auto;
      }
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}connectedCallback(){super.connectedCallback(),this.position=this.original.getBoundingClientRect(),window.addEventListener("keydown",i=>{i.key==="Escape"&&this.close()})}updated(){var e;const i=(e=this.shadowRoot)==null?void 0:e.querySelector(".content");!i||!this.position||(i.style.width=this.position.width+"px",i.style.height=this.position.height+"px",i.style.transform=`translate(${this.position.x}px, ${this.position.y}px)`,i.offsetHeight,this.original&&(this.original.style.opacity="0",this.original.style.transition="opacity .125s ease"),i.style.transform="translate(0, 0)",i.style.width="900px",i.style.height="auto")}close(){this.remove(),this.original&&(this.original.style.opacity="")}render(){return g`
      <div
        class="blackbox"
        @click="${i=>{i.target.className==="blackbox"&&this.close()}}"
      >
        <div class="close-btn" @click="${i=>this.close()}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 30.258 30.258"
          >
            <g transform="translate(-447.371 -422.371)">
              <line
                x2="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
              <line
                x1="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>

        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}};Ue=Qt([w("image-show")],Ue);const Xt=[{date:"10/18/2022 5:07:41",message:"Dear Aethy, Hap Birth, I wish you nothin but the best and may fortune and good health always find you. May the poop talks further strengthen your bond with your hubby... P.S. you may still not like Larry but you are like a role model to him... P.P.S. Have a Goblin Shark -Niuraeix #thepoopunites",media:{src:"dist/media/1ImaW75PvP1LLtKuukL2AvWayHc5NsMGT.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1ImaW75PvP1LLtKuukL2AvWayHc5NsMGT/preview"},name:"Niuraeix"},{date:"10/18/2022 5:14:04",message:"Happy Birthday Aethy! You are now older than you've ever been. Also now. And now. And now",media:{src:"dist/media/1lj0ocWQRLdEuXK4A4In5TLSz6cBtKAE8.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1lj0ocWQRLdEuXK4A4In5TLSz6cBtKAE8/preview"},name:"Zephyr"},{date:"10/18/2022 6:41:52",message:"Ahh hello my waifu nyan, who worries about me streaming without hydrating sufficiently. May you have the bestest of Birthdays as we get older together and not punish me for this cursed picture. or do, if you know what I mean ;D",media:{src:"dist/media/1vTfypjcxkUx9138zqgBbrQiGcahs4OnW.png",type:"image/png",embed:"https://drive.google.com/file/d/1vTfypjcxkUx9138zqgBbrQiGcahs4OnW/preview"},name:"Phwee"},{date:"10/18/2022 18:52:29",message:"Happy Birthday hope you like my drawing",media:{src:"dist/media/1AUR01u-BlEWE4jAXB9DuguP6NhUslLBg.png",type:"image/png",embed:"https://drive.google.com/file/d/1AUR01u-BlEWE4jAXB9DuguP6NhUslLBg/preview"},name:"JasonAU"},{date:"10/18/2022 19:39:37",message:`Hey, Aethy! It's been a joy getting to know both Phwee and you. And, I'm not the best at expressing sentiment, but thank you. They few talks we have had have help me a bunch and I look forward to many more! In my family we have a very corny "traditional" song that we add to the end of the birthday song. We start the song with "and many more" and end with "and lots and lots of fun"(with jazz hands). It doesn't have the same magic not hearing the song, but from me to you, I wish you many more birthdays and as much fun as you heart can handle. Happy birthday, Aethy!`,media:{src:"dist/media/1W5RT9K6pUKMauYzTTfqFTtBJOKQxfxfx.png",type:"image/png",embed:"https://drive.google.com/file/d/1W5RT9K6pUKMauYzTTfqFTtBJOKQxfxfx/preview"},name:"BearTheCoder"},{date:"10/18/2022 20:49:21",message:"thks be the best stremer i hav, better than eav, but dnt tell her, i mean, phwee is is an honest competitor, ( she wins as the best birb stremer, my bad aethy) but i dnt hav any tag of founder, so",media:{src:"dist/media/1hqwn29F6mBG7A7H6TZts7Wwuk-nrQ8yd.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1hqwn29F6mBG7A7H6TZts7Wwuk-nrQ8yd/preview"},name:"Poul"},{date:"10/19/2022 10:31:07",message:"I'm uh not really good with words so... Happy birthday \u2764\uFE0F\u2764\uFE0F hehe",media:null,name:"Anh Nguyen"},{date:"10/19/2022 11:07:27",message:"I don't know you too much Aethy but Happy Birthday! Hope you have a good one and you're happy with all these beautiful messages! Also I wanted to add... you guys really made a beautiful community, I'm very glad I got to meet you all <3",media:null,name:"Merengil"},{date:"10/19/2022 11:27:14",message:"HAPPY BIRTHDAY, AETHIANA!! I hope that it's an amazing day for you and yours because you deserve nothing less. Hope you and hubby and Mia are all doing well. <3",media:null,name:"Eav"},{date:"10/19/2022 14:37:44",message:"happy bday best sister! <3",media:null,name:"ecupcakes"},{date:"10/19/2022 17:53:46",message:"Aethy HAPPY BIRTHDAY!!! If you could teleport to any one place on earth and back (home) whenever you like, where would it be??",media:{src:"dist/media/1hq-ZnPV10BXHKsuLMzFEQJNvfZVK6_E3.gif",type:"image/gif",embed:"https://drive.google.com/file/d/1hq-ZnPV10BXHKsuLMzFEQJNvfZVK6_E3/preview"},name:"hybrr virdual"},{date:"10/19/2022 18:07:12",message:"Happy Birthday! There is too much to list out but hope this special day is just that much better with everyone.",media:{src:"dist/media/1gsA_n8YU-oB8PvelamM-C0dpKOmL0d9V.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1gsA_n8YU-oB8PvelamM-C0dpKOmL0d9V/preview"},name:"ploppy"}],Ie={showPage(){const i=document.querySelector(".page");i&&(i.removeAttribute("loading"),window.dispatchEvent(new CustomEvent("cards",{detail:Xt})))}},je=["Hi Aethy!","Im sorry to remind you,","but today is your birthday! :O","To celebrate,","we decided to make a horror game for you.","jk","But look at this!"];var Gt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Jt=(i,e,t,s)=>{for(var n=s>1?void 0:s?Zt(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&Gt(e,t,n),n};let ze=class extends _{constructor(){super(),this.index=-1,location.hash!=="#intro"&&(location.hash="",localStorage.setItem("into-finished","true"),Ie.showPage(),this.remove())}static get styles(){return P`
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        color: #333;
        filter: contrast(1.1);
      }
      .overlay {
        object-fit: cover;
        opacity: 0.1;
        pointer-events: none;
        position: absolute;
        z-index: 1000;
      }
      .container {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        width: 900px;
        margin: auto;
      }
      .info-message {
        position: absolute;
        left: 50%;
        bottom: 30%;
        transform: translateX(-50%);
        color: inherit;
        animation: attention 3s ease infinite both;
      }
      @keyframes attention {
        0% {
          opacity: 1;
        }
        25% {
          opacity: 0.1;
        }
        50% {
          opacity: 1;
        }
        75% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .title {
        font-size: 48px;
        font-weight: bold;
        color: inherit;
      }
      strong {
        font-weight: bold;
      }
    `}connectedCallback(){super.connectedCallback(),this.tabIndex=0,window.addEventListener("keydown",this.onKeyDown.bind(this)),this.next()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown.bind(this))}onKeyDown(i){i.code==="Space"&&this.next()}next(){this.index++,this.index>je.length-1?this.onEnded():(this.headline=je[this.index],this.requestUpdate())}onEnded(){location.hash="";const i=document.createElement("video");i.src="./nida-bday-king.mp4",i.muted=!0,i.className="intro-video",i.oncanplay=()=>{i.play()},i.onanimationend=()=>{i.remove()},document.body.append(i),setTimeout(()=>{localStorage.setItem("into-finished","true"),Ie.showPage(),this.remove()},3e3)}render(){return g`
      <img
        class="overlay"
        width="100%"
        height="100%"
        src="./images/noise.png"
      />
      <div class="container">
        <types-text class="title">${this.headline}</types-text>
      </div>

      <div class="info-message">Press <strong>Space</strong> to continue.</div>
    `}};ze=Jt([w("nida-intro")],ze);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ti=i=>(...e)=>({_$litDirective$:i,values:e});class ii{constructor(e){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(e,t,s){this.__part=e,this._$parent=t,this.__attributeIndex=s}_$resolve(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=1;class $e extends ii{constructor(e){if(super(e),this._value=p,e.type!==ei.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}render(e){if(e===p||e==null)return this._templateResult=void 0,this._value=e;if(e===T)return e;if(typeof e!="string")throw new Error(`${this.constructor.directiveName}() called with a non-string value`);if(e===this._value)return this._templateResult;this._value=e;const t=[e];return t.raw=t,this._templateResult={_$litType$:this.constructor.resultType,strings:t,values:[]}}}$e.directiveName="unsafeHTML";$e.resultType=si;const ni=ti($e),He={aethia1Blankie:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_b7c1a562144b44509209cdc165ef0ead/default/dark/2.0",aethia1Sing:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_396d0de91da44ac7b4e3cdf1bb9448e4/default/dark/2.0",aethia1Pats:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_0c32e2de605a4a66a136a3bd21042ab9/default/dark/2.0",aethia1Like:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_e2ac7e95803947acabdce70b2719aea5/default/dark/2.0",aethia1Flower:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_38eac4b2a2af462da52781892f999eb0/default/dark/2.0",aethia1Hype:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_00e71be9b7b14b4c912a0a86366f916d/default/dark/2.0",aethia1Laugh:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_e502138c48cd48409f583737fa2f5e9d/default/dark/2.0",aethia1Wow:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_9f8f7910f2e84ababd58275ccd6f5eb3/default/dark/2.0",aethia1Hug:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_111fd751e2ee44729bf73e302e0a00b6/default/dark/2.0",nidali1NidaHeart:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_ba124aeeb3c24bcda15c1b3572aba694/default/dark/2.0",nidali1NidaWave:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_5c9c5b1b75434261b39c615ad3b62dba/default/dark/2.0",nidali1PowderPat:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_a2e29618473840c88b58137ff8b5f9de/default/dark/2.0",nidali1NidaHype:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_3babc35d0b2048a691d79e5558dbce45/default/dark/2.0",nidali1Huh:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_8125272c5aba40fc839d7b62adef22ca/default/dark/2.0",nidali1Sip:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_99e6fc19b9d3409791243a93247b09a2/default/dark/2.0",nidali1Oop:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_d8858cdff3d449518d523310776019d9/default/dark/2.0",nidali1Swog:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_643649db5cfe49e38344033b8fb6518f/default/dark/2.0",yasBih:"https://cdn.betterttv.net/emote/5fd810b7a926f43485ce71ad/2x",nidaClown:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_4adcf9a1f7ef43afb59243f26fde7845/default/dark/2.0",NidaHeart:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_bcc47849ebd94260b11402758d239de9/default/dark/2.0"};var oi=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,ai=(i,e,t,s)=>{for(var n=s>1?void 0:s?ri(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&oi(e,t,n),n};function di(i){return i.matchAll(/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu)}let Ve=class extends _{constructor(){super(...arguments),this.content=""}static get styles(){return P`
      :host {
        display: block;
        text-align: left;
        font-size: 1rem;
        color: #333;
        margin: 4px 0;
      }

      p {
        white-space: pre-wrap;
        margin: 0;
      }

      .emote img {
        width: 32px;
        margin-top: -4px;
        display: inline-block;
        vertical-align: middle;
      }

      .emote {
        font-size: 32px;
        vertical-align: middle;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
        pointer-events: none;
      }
    `}onContentChange(){const i=[...this.childNodes].find(n=>n.nodeName==="#text"),t=(i==null?void 0:i.data).replaceAll(`
`,` 
`).split(" "),s=[];for(let n of t)if(n=n.replace(/:/g,""),n in He)s.push(`<span class="emote"><img src="${He[n]}" alt="${n}" /></span>`);else{let o=n;for(let r of di(n))o=o.replace(r[0],`<span class="emote">${r[0]}</span>`);s.push(o)}this.content=s.join(" "),this.requestUpdate()}render(){return g`
      <p class="message">${ni(this.content)}</p>
      <slot @slotchange="${this.onContentChange}"></slot>
    `}};Ve=ai([w("nida-message")],Ve);var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,hi=(i,e,t,s)=>{for(var n=s>1?void 0:s?ci(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&li(e,t,n),n};let De=class extends _{static get styles(){return P`
      :host {
        position: fixed;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        pointer-events: none;
        transition: opacity 0.33s ease;
        z-index: 0;
        opacity: 0;

        animation: bounce 2s ease infinite both;
        animation-delay: 3s;
      }
      :host([shown]) {
        opacity: 1;
      }
      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateX(-50%) translateY(0);
        }
        40% {
          transform: translateX(-50%) translateY(-20px);
        }
        60% {
          transform: translateX(-50%) translateY(-5px);
        }
      }
    `}connectedCallback(){super.connectedCallback();const i=document.querySelector(".page");if(i){const e=()=>{Math.floor(i.scrollTop/20)>0?this.removeAttribute("shown"):this.setAttribute("shown","")};i.addEventListener("scroll",e),e()}else throw new Error("Something went wrong")}render(){return g`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="85.965"
        height="51.382"
        viewBox="0 0 85.965 51.382"
        class="scroll-indicator"
      >
        <defs>
          <filter
            id="Path_1"
            x="0"
            y="0"
            width="85.965"
            height="51.382"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="2" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood flood-opacity="0.161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)">
          <path
            id="Path_1-2"
            data-name="Path 1"
            d="M2931.512,1003.219l26.781,20.181,26.781-20.181"
            transform="translate(-2915.31 -989.02)"
            fill="none"
            stroke="#615051"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
          />
        </g>
      </svg>
    `}};De=hi([w("scroll-indicator")],De);var ui=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,mi=(i,e,t,s)=>{for(var n=s>1?void 0:s?pi(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&ui(e,t,n),n};async function fi(i){return new Promise(e=>{setTimeout(()=>{e(1)},i)})}let Be=class extends _{constructor(){super(...arguments),this.content=[],this.lastData=null}static get styles(){return P`
      :host {
        display: contents;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
      }
    `}async onContentChange(){const i=[...this.childNodes].find(s=>s.nodeName==="#text"),e=i==null?void 0:i.data,t=e.split("");this.content=[],this.lastData=e;for(let s of t){if(this.lastData!=e)break;this.content.push(s),this.requestUpdate(),await fi(20+Math.random()*50)}}connectedCallback(){super.connectedCallback(),new MutationObserver(e=>{this.onContentChange()}).observe(this,{characterData:!0,childList:!0,subtree:!0}),this.onContentChange()}render(){return g` ${this.content.join("")} `}};Be=mi([w("types-text")],Be);
