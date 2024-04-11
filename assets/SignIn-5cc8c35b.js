import{R as ie,G as Fi,r as tr,j as O,L as Vn}from"./index-14b670b4.js";var Wt=r=>r.type==="checkbox",dt=r=>r instanceof Date,Y=r=>r==null;const Ts=r=>typeof r=="object";var z=r=>!Y(r)&&!Array.isArray(r)&&Ts(r)&&!dt(r),Bi=r=>z(r)&&r.target?Wt(r.target)?r.target.checked:r.target.value:r,$i=r=>r.substring(0,r.search(/\.\d+(\.|$)/))||r,Hi=(r,e)=>r.has($i(e)),Wi=r=>{const e=r.constructor&&r.constructor.prototype;return z(e)&&e.hasOwnProperty("isPrototypeOf")},hn=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function se(r){let e;const t=Array.isArray(r);if(r instanceof Date)e=new Date(r);else if(r instanceof Set)e=new Set(r);else if(!(hn&&(r instanceof Blob||r instanceof FileList))&&(t||z(r)))if(e=t?[]:{},!t&&!Wi(r))e=r;else for(const n in r)r.hasOwnProperty(n)&&(e[n]=se(r[n]));else return r;return e}var Zt=r=>Array.isArray(r)?r.filter(Boolean):[],Z=r=>r===void 0,w=(r,e,t)=>{if(!e||!z(r))return t;const n=Zt(e.split(/[,[\].]+?/)).reduce((s,i)=>Y(s)?s:s[i],r);return Z(n)||n===r?Z(r[e])?t:r[e]:n},Se=r=>typeof r=="boolean";const jn={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ce={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ke={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ie.createContext(null);var Zi=(r,e,t,n=!0)=>{const s={defaultValues:e._defaultValues};for(const i in r)Object.defineProperty(s,i,{get:()=>{const a=i;return e._proxyFormState[a]!==ce.all&&(e._proxyFormState[a]=!n||ce.all),t&&(t[a]=!0),r[a]}});return s},ae=r=>z(r)&&!Object.keys(r).length,zi=(r,e,t,n)=>{t(r);const{name:s,...i}=r;return ae(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(a=>e[a]===(!n||ce.all))},Br=r=>Array.isArray(r)?r:[r];function qi(r){const e=ie.useRef(r);e.current=r,ie.useEffect(()=>{const t=!r.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{t&&t.unsubscribe()}},[r.disabled])}var me=r=>typeof r=="string",Gi=(r,e,t,n,s)=>me(r)?(n&&e.watch.add(r),w(t,r,s)):Array.isArray(r)?r.map(i=>(n&&e.watch.add(i),w(t,i))):(n&&(e.watchAll=!0),t),fn=r=>/^\w*$/.test(r),ks=r=>Zt(r.replace(/["|']|\]/g,"").split(/\.|\[/)),M=(r,e,t)=>{let n=-1;const s=fn(e)?[e]:ks(e),i=s.length,a=i-1;for(;++n<i;){const o=s[n];let c=t;if(n!==a){const u=r[o];c=z(u)||Array.isArray(u)?u:isNaN(+s[n+1])?{}:[]}r[o]=c,r=r[o]}return r},Ss=(r,e,t,n,s)=>e?{...t[r],types:{...t[r]&&t[r].types?t[r].types:{},[n]:s||!0}}:{},Fn=r=>({isOnSubmit:!r||r===ce.onSubmit,isOnBlur:r===ce.onBlur,isOnChange:r===ce.onChange,isOnAll:r===ce.all,isOnTouch:r===ce.onTouched}),Bn=(r,e,t)=>!t&&(e.watchAll||e.watch.has(r)||[...e.watch].some(n=>r.startsWith(n)&&/^\.\w+/.test(r.slice(n.length))));const kt=(r,e,t,n)=>{for(const s of t||Object.keys(r)){const i=w(r,s);if(i){const{_f:a,...o}=i;if(a){if(a.refs&&a.refs[0]&&e(a.refs[0],s)&&!n)break;if(a.ref&&e(a.ref,a.name)&&!n)break;kt(o,e)}else z(o)&&kt(o,e)}}};var Ki=(r,e,t)=>{const n=Zt(w(r,t));return M(n,"root",e[t]),M(r,t,n),r},pn=r=>r.type==="file",$e=r=>typeof r=="function",ur=r=>{if(!hn)return!1;const e=r?r.ownerDocument:0;return r instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},sr=r=>me(r),mn=r=>r.type==="radio",dr=r=>r instanceof RegExp;const $n={value:!1,isValid:!1},Hn={value:!0,isValid:!0};var As=r=>{if(Array.isArray(r)){if(r.length>1){const e=r.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:e,isValid:!!e.length}}return r[0].checked&&!r[0].disabled?r[0].attributes&&!Z(r[0].attributes.value)?Z(r[0].value)||r[0].value===""?Hn:{value:r[0].value,isValid:!0}:Hn:$n}return $n};const Wn={isValid:!1,value:null};var Cs=r=>Array.isArray(r)?r.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,Wn):Wn;function Zn(r,e,t="validate"){if(sr(r)||Array.isArray(r)&&r.every(sr)||Se(r)&&!r)return{type:t,message:sr(r)?r:"",ref:e}}var ct=r=>z(r)&&!dr(r)?r:{value:r,message:""},zn=async(r,e,t,n,s)=>{const{ref:i,refs:a,required:o,maxLength:c,minLength:u,min:m,max:b,pattern:E,validate:j,name:H,valueAsNumber:be,mount:we,disabled:re}=r._f,T=w(e,H);if(!we||re)return{};const F=a?a[0]:i,$=L=>{n&&F.reportValidity&&(F.setCustomValidity(Se(L)?"":L||""),F.reportValidity())},D={},Q=mn(i),Ie=Wt(i),bt=Q||Ie,ee=(be||pn(i))&&Z(i.value)&&Z(T)||ur(i)&&i.value===""||T===""||Array.isArray(T)&&!T.length,Ee=Ss.bind(null,H,t,D),Te=(L,N,W,te=ke.maxLength,ne=ke.minLength)=>{const fe=L?N:W;D[H]={type:L?te:ne,message:fe,ref:i,...Ee(L?te:ne,fe)}};if(s?!Array.isArray(T)||!T.length:o&&(!bt&&(ee||Y(T))||Se(T)&&!T||Ie&&!As(a).isValid||Q&&!Cs(a).isValid)){const{value:L,message:N}=sr(o)?{value:!!o,message:o}:ct(o);if(L&&(D[H]={type:ke.required,message:N,ref:F,...Ee(ke.required,N)},!t))return $(N),D}if(!ee&&(!Y(m)||!Y(b))){let L,N;const W=ct(b),te=ct(m);if(!Y(T)&&!isNaN(T)){const ne=i.valueAsNumber||T&&+T;Y(W.value)||(L=ne>W.value),Y(te.value)||(N=ne<te.value)}else{const ne=i.valueAsDate||new Date(T),fe=er=>new Date(new Date().toDateString()+" "+er),Ke=i.type=="time",wt=i.type=="week";me(W.value)&&T&&(L=Ke?fe(T)>fe(W.value):wt?T>W.value:ne>new Date(W.value)),me(te.value)&&T&&(N=Ke?fe(T)<fe(te.value):wt?T<te.value:ne<new Date(te.value))}if((L||N)&&(Te(!!L,W.message,te.message,ke.max,ke.min),!t))return $(D[H].message),D}if((c||u)&&!ee&&(me(T)||s&&Array.isArray(T))){const L=ct(c),N=ct(u),W=!Y(L.value)&&T.length>+L.value,te=!Y(N.value)&&T.length<+N.value;if((W||te)&&(Te(W,L.message,N.message),!t))return $(D[H].message),D}if(E&&!ee&&me(T)){const{value:L,message:N}=ct(E);if(dr(L)&&!T.match(L)&&(D[H]={type:ke.pattern,message:N,ref:i,...Ee(ke.pattern,N)},!t))return $(N),D}if(j){if($e(j)){const L=await j(T,e),N=Zn(L,F);if(N&&(D[H]={...N,...Ee(ke.validate,N.message)},!t))return $(N.message),D}else if(z(j)){let L={};for(const N in j){if(!ae(L)&&!t)break;const W=Zn(await j[N](T,e),F,N);W&&(L={...W,...Ee(N,W.message)},$(W.message),t&&(D[H]=L))}if(!ae(L)&&(D[H]={ref:F,...L},!t))return D}}return $(!0),D};function Ji(r,e){const t=e.slice(0,-1).length;let n=0;for(;n<t;)r=Z(r)?n++:r[e[n++]];return r}function Yi(r){for(const e in r)if(r.hasOwnProperty(e)&&!Z(r[e]))return!1;return!0}function G(r,e){const t=Array.isArray(e)?e:fn(e)?[e]:ks(e),n=t.length===1?r:Ji(r,t),s=t.length-1,i=t[s];return n&&delete n[i],s!==0&&(z(n)&&ae(n)||Array.isArray(n)&&Yi(n))&&G(r,t.slice(0,-1)),r}var $r=()=>{let r=[];return{get observers(){return r},next:s=>{for(const i of r)i.next&&i.next(s)},subscribe:s=>(r.push(s),{unsubscribe:()=>{r=r.filter(i=>i!==s)}}),unsubscribe:()=>{r=[]}}},hr=r=>Y(r)||!Ts(r);function Ye(r,e){if(hr(r)||hr(e))return r===e;if(dt(r)&&dt(e))return r.getTime()===e.getTime();const t=Object.keys(r),n=Object.keys(e);if(t.length!==n.length)return!1;for(const s of t){const i=r[s];if(!n.includes(s))return!1;if(s!=="ref"){const a=e[s];if(dt(i)&&dt(a)||z(i)&&z(a)||Array.isArray(i)&&Array.isArray(a)?!Ye(i,a):i!==a)return!1}}return!0}var xs=r=>r.type==="select-multiple",Xi=r=>mn(r)||Wt(r),Hr=r=>ur(r)&&r.isConnected,Rs=r=>{for(const e in r)if($e(r[e]))return!0;return!1};function fr(r,e={}){const t=Array.isArray(r);if(z(r)||t)for(const n in r)Array.isArray(r[n])||z(r[n])&&!Rs(r[n])?(e[n]=Array.isArray(r[n])?[]:{},fr(r[n],e[n])):Y(r[n])||(e[n]=!0);return e}function Os(r,e,t){const n=Array.isArray(r);if(z(r)||n)for(const s in r)Array.isArray(r[s])||z(r[s])&&!Rs(r[s])?Z(e)||hr(t[s])?t[s]=Array.isArray(r[s])?fr(r[s],[]):{...fr(r[s])}:Os(r[s],Y(e)?{}:e[s],t[s]):t[s]=!Ye(r[s],e[s]);return t}var rr=(r,e)=>Os(r,e,fr(e)),Ns=(r,{valueAsNumber:e,valueAsDate:t,setValueAs:n})=>Z(r)?r:e?r===""?NaN:r&&+r:t&&me(r)?new Date(r):n?n(r):r;function Wr(r){const e=r.ref;if(!(r.refs?r.refs.every(t=>t.disabled):e.disabled))return pn(e)?e.files:mn(e)?Cs(r.refs).value:xs(e)?[...e.selectedOptions].map(({value:t})=>t):Wt(e)?As(r.refs).value:Ns(Z(e.value)?r.ref.value:e.value,r)}var Qi=(r,e,t,n)=>{const s={};for(const i of r){const a=w(e,i);a&&M(s,i,a._f)}return{criteriaMode:t,names:[...r],fields:s,shouldUseNativeValidation:n}},It=r=>Z(r)?r:dr(r)?r.source:z(r)?dr(r.value)?r.value.source:r.value:r,ea=r=>r.mount&&(r.required||r.min||r.max||r.maxLength||r.minLength||r.pattern||r.validate);function qn(r,e,t){const n=w(r,t);if(n||fn(t))return{error:n,name:t};const s=t.split(".");for(;s.length;){const i=s.join("."),a=w(e,i),o=w(r,i);if(a&&!Array.isArray(a)&&t!==i)return{name:t};if(o&&o.type)return{name:i,error:o};s.pop()}return{name:t}}var ta=(r,e,t,n,s)=>s.isOnAll?!1:!t&&s.isOnTouch?!(e||r):(t?n.isOnBlur:s.isOnBlur)?!r:(t?n.isOnChange:s.isOnChange)?r:!0,ra=(r,e)=>!Zt(w(r,e)).length&&G(r,e);const na={mode:ce.onSubmit,reValidateMode:ce.onChange,shouldFocusError:!0};function sa(r={},e){let t={...na,...r},n={submitCount:0,isDirty:!1,isLoading:$e(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:t.errors||{},disabled:t.disabled||!1},s={},i=z(t.values)||z(t.defaultValues)?se(t.values||t.defaultValues)||{}:{},a=t.shouldUnregister?{}:se(i),o={action:!1,mount:!1,watch:!1},c={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,m=0;const b={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},E={values:$r(),array:$r(),state:$r()},j=Fn(t.mode),H=Fn(t.reValidateMode),be=t.criteriaMode===ce.all,we=l=>d=>{clearTimeout(m),m=setTimeout(l,d)},re=async l=>{if(b.isValid||l){const d=t.resolver?ae((await ee()).errors):await Te(s,!0);d!==n.isValid&&E.state.next({isValid:d})}},T=l=>b.isValidating&&E.state.next({isValidating:l}),F=(l,d=[],h,v,g=!0,p=!0)=>{if(v&&h){if(o.action=!0,p&&Array.isArray(w(s,l))){const k=h(w(s,l),v.argA,v.argB);g&&M(s,l,k)}if(p&&Array.isArray(w(n.errors,l))){const k=h(w(n.errors,l),v.argA,v.argB);g&&M(n.errors,l,k),ra(n.errors,l)}if(b.touchedFields&&p&&Array.isArray(w(n.touchedFields,l))){const k=h(w(n.touchedFields,l),v.argA,v.argB);g&&M(n.touchedFields,l,k)}b.dirtyFields&&(n.dirtyFields=rr(i,a)),E.state.next({name:l,isDirty:N(l,d),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else M(a,l,d)},$=(l,d)=>{M(n.errors,l,d),E.state.next({errors:n.errors})},D=l=>{n.errors=l,E.state.next({errors:n.errors,isValid:!1})},Q=(l,d,h,v)=>{const g=w(s,l);if(g){const p=w(a,l,Z(h)?w(i,l):h);Z(p)||v&&v.defaultChecked||d?M(a,l,d?p:Wr(g._f)):ne(l,p),o.mount&&re()}},Ie=(l,d,h,v,g)=>{let p=!1,k=!1;const V={name:l},q=!!(w(s,l)&&w(s,l)._f.disabled);if(!h||v){b.isDirty&&(k=n.isDirty,n.isDirty=V.isDirty=N(),p=k!==V.isDirty);const pe=q||Ye(w(i,l),d);k=!!(!q&&w(n.dirtyFields,l)),pe||q?G(n.dirtyFields,l):M(n.dirtyFields,l,!0),V.dirtyFields=n.dirtyFields,p=p||b.dirtyFields&&k!==!pe}if(h){const pe=w(n.touchedFields,l);pe||(M(n.touchedFields,l,h),V.touchedFields=n.touchedFields,p=p||b.touchedFields&&pe!==h)}return p&&g&&E.state.next(V),p?V:{}},bt=(l,d,h,v)=>{const g=w(n.errors,l),p=b.isValid&&Se(d)&&n.isValid!==d;if(r.delayError&&h?(u=we(()=>$(l,h)),u(r.delayError)):(clearTimeout(m),u=null,h?M(n.errors,l,h):G(n.errors,l)),(h?!Ye(g,h):g)||!ae(v)||p){const k={...v,...p&&Se(d)?{isValid:d}:{},errors:n.errors,name:l};n={...n,...k},E.state.next(k)}T(!1)},ee=async l=>t.resolver(a,t.context,Qi(l||c.mount,s,t.criteriaMode,t.shouldUseNativeValidation)),Ee=async l=>{const{errors:d}=await ee(l);if(l)for(const h of l){const v=w(d,h);v?M(n.errors,h,v):G(n.errors,h)}else n.errors=d;return d},Te=async(l,d,h={valid:!0})=>{for(const v in l){const g=l[v];if(g){const{_f:p,...k}=g;if(p){const V=c.array.has(p.name),q=await zn(g,a,be,t.shouldUseNativeValidation&&!d,V);if(q[p.name]&&(h.valid=!1,d))break;!d&&(w(q,p.name)?V?Ki(n.errors,q,p.name):M(n.errors,p.name,q[p.name]):G(n.errors,p.name))}k&&await Te(k,d,h)}}return h.valid},L=()=>{for(const l of c.unMount){const d=w(s,l);d&&(d._f.refs?d._f.refs.every(h=>!Hr(h)):!Hr(d._f.ref))&&Ur(l)}c.unMount=new Set},N=(l,d)=>(l&&d&&M(a,l,d),!Ye(Cn(),i)),W=(l,d,h)=>Gi(l,c,{...o.mount?a:Z(d)?i:me(l)?{[l]:d}:d},h,d),te=l=>Zt(w(o.mount?a:i,l,r.shouldUnregister?w(i,l,[]):[])),ne=(l,d,h={})=>{const v=w(s,l);let g=d;if(v){const p=v._f;p&&(!p.disabled&&M(a,l,Ns(d,p)),g=ur(p.ref)&&Y(d)?"":d,xs(p.ref)?[...p.ref.options].forEach(k=>k.selected=g.includes(k.value)):p.refs?Wt(p.ref)?p.refs.length>1?p.refs.forEach(k=>(!k.defaultChecked||!k.disabled)&&(k.checked=Array.isArray(g)?!!g.find(V=>V===k.value):g===k.value)):p.refs[0]&&(p.refs[0].checked=!!g):p.refs.forEach(k=>k.checked=k.value===g):pn(p.ref)?p.ref.value="":(p.ref.value=g,p.ref.type||E.values.next({name:l,values:{...a}})))}(h.shouldDirty||h.shouldTouch)&&Ie(l,g,h.shouldTouch,h.shouldDirty,!0),h.shouldValidate&&Mr(l)},fe=(l,d,h)=>{for(const v in d){const g=d[v],p=`${l}.${v}`,k=w(s,p);(c.array.has(l)||!hr(g)||k&&!k._f)&&!dt(g)?fe(p,g,h):ne(p,g,h)}},Ke=(l,d,h={})=>{const v=w(s,l),g=c.array.has(l),p=se(d);M(a,l,p),g?(E.array.next({name:l,values:{...a}}),(b.isDirty||b.dirtyFields)&&h.shouldDirty&&E.state.next({name:l,dirtyFields:rr(i,a),isDirty:N(l,p)})):v&&!v._f&&!Y(p)?fe(l,p,h):ne(l,p,h),Bn(l,c)&&E.state.next({...n}),E.values.next({name:l,values:{...a}}),!o.mount&&e()},wt=async l=>{const d=l.target;let h=d.name,v=!0;const g=w(s,h),p=()=>d.type?Wr(g._f):Bi(l),k=V=>{v=Number.isNaN(V)||V===w(a,h,V)};if(g){let V,q;const pe=p(),ot=l.type===jn.BLUR||l.type===jn.FOCUS_OUT,Ui=!ea(g._f)&&!t.resolver&&!w(n.errors,h)&&!g._f.deps||ta(ot,w(n.touchedFields,h),n.isSubmitted,H,j),jr=Bn(h,c,ot);M(a,h,pe),ot?(g._f.onBlur&&g._f.onBlur(l),u&&u(0)):g._f.onChange&&g._f.onChange(l);const Fr=Ie(h,pe,ot,!1),Vi=!ae(Fr)||jr;if(!ot&&E.values.next({name:h,type:l.type,values:{...a}}),Ui)return b.isValid&&re(),Vi&&E.state.next({name:h,...jr?{}:Fr});if(!ot&&jr&&E.state.next({...n}),T(!0),t.resolver){const{errors:Mn}=await ee([h]);if(k(pe),v){const ji=qn(n.errors,s,h),Un=qn(Mn,s,ji.name||h);V=Un.error,h=Un.name,q=ae(Mn)}}else V=(await zn(g,a,be,t.shouldUseNativeValidation))[h],k(pe),v&&(V?q=!1:b.isValid&&(q=await Te(s,!0)));v&&(g._f.deps&&Mr(g._f.deps),bt(h,q,V,Fr))}},er=(l,d)=>{if(w(n.errors,d)&&l.focus)return l.focus(),1},Mr=async(l,d={})=>{let h,v;const g=Br(l);if(T(!0),t.resolver){const p=await Ee(Z(l)?l:g);h=ae(p),v=l?!g.some(k=>w(p,k)):h}else l?(v=(await Promise.all(g.map(async p=>{const k=w(s,p);return await Te(k&&k._f?{[p]:k}:k)}))).every(Boolean),!(!v&&!n.isValid)&&re()):v=h=await Te(s);return E.state.next({...!me(l)||b.isValid&&h!==n.isValid?{}:{name:l},...t.resolver||!l?{isValid:h}:{},errors:n.errors,isValidating:!1}),d.shouldFocus&&!v&&kt(s,er,l?g:c.mount),v},Cn=l=>{const d={...i,...o.mount?a:{}};return Z(l)?d:me(l)?w(d,l):l.map(h=>w(d,h))},xn=(l,d)=>({invalid:!!w((d||n).errors,l),isDirty:!!w((d||n).dirtyFields,l),isTouched:!!w((d||n).touchedFields,l),error:w((d||n).errors,l)}),Pi=l=>{l&&Br(l).forEach(d=>G(n.errors,d)),E.state.next({errors:l?n.errors:{}})},Rn=(l,d,h)=>{const v=(w(s,l,{_f:{}})._f||{}).ref;M(n.errors,l,{...d,ref:v}),E.state.next({name:l,errors:n.errors,isValid:!1}),h&&h.shouldFocus&&v&&v.focus&&v.focus()},Di=(l,d)=>$e(l)?E.values.subscribe({next:h=>l(W(void 0,d),h)}):W(l,d,!0),Ur=(l,d={})=>{for(const h of l?Br(l):c.mount)c.mount.delete(h),c.array.delete(h),d.keepValue||(G(s,h),G(a,h)),!d.keepError&&G(n.errors,h),!d.keepDirty&&G(n.dirtyFields,h),!d.keepTouched&&G(n.touchedFields,h),!t.shouldUnregister&&!d.keepDefaultValue&&G(i,h);E.values.next({values:{...a}}),E.state.next({...n,...d.keepDirty?{isDirty:N()}:{}}),!d.keepIsValid&&re()},On=({disabled:l,name:d,field:h,fields:v,value:g})=>{if(Se(l)){const p=l?void 0:Z(g)?Wr(h?h._f:w(v,d)._f):g;M(a,d,p),Ie(d,p,!1,!1,!0)}},Vr=(l,d={})=>{let h=w(s,l);const v=Se(d.disabled);return M(s,l,{...h||{},_f:{...h&&h._f?h._f:{ref:{name:l}},name:l,mount:!0,...d}}),c.mount.add(l),h?On({field:h,disabled:d.disabled,name:l,value:d.value}):Q(l,!0,d.value),{...v?{disabled:d.disabled}:{},...t.progressive?{required:!!d.required,min:It(d.min),max:It(d.max),minLength:It(d.minLength),maxLength:It(d.maxLength),pattern:It(d.pattern)}:{},name:l,onChange:wt,onBlur:wt,ref:g=>{if(g){Vr(l,d),h=w(s,l);const p=Z(g.value)&&g.querySelectorAll&&g.querySelectorAll("input,select,textarea")[0]||g,k=Xi(p),V=h._f.refs||[];if(k?V.find(q=>q===p):p===h._f.ref)return;M(s,l,{_f:{...h._f,...k?{refs:[...V.filter(Hr),p,...Array.isArray(w(i,l))?[{}]:[]],ref:{type:p.type,name:l}}:{ref:p}}}),Q(l,!1,void 0,p)}else h=w(s,l,{}),h._f&&(h._f.mount=!1),(t.shouldUnregister||d.shouldUnregister)&&!(Hi(c.array,l)&&o.action)&&c.unMount.add(l)}}},Nn=()=>t.shouldFocusError&&kt(s,er,c.mount),Li=l=>{Se(l)&&(E.state.next({disabled:l}),kt(s,(d,h)=>{let v=l;const g=w(s,h);g&&Se(g._f.disabled)&&(v||(v=g._f.disabled)),d.disabled=v},0,!1))},Pn=(l,d)=>async h=>{let v;h&&(h.preventDefault&&h.preventDefault(),h.persist&&h.persist());let g=se(a);if(E.state.next({isSubmitting:!0}),t.resolver){const{errors:p,values:k}=await ee();n.errors=p,g=k}else await Te(s);if(G(n.errors,"root"),ae(n.errors)){E.state.next({errors:{}});try{await l(g,h)}catch(p){v=p}}else d&&await d({...n.errors},h),Nn(),setTimeout(Nn);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ae(n.errors)&&!v,submitCount:n.submitCount+1,errors:n.errors}),v)throw v},Mi=(l,d={})=>{w(s,l)&&(Z(d.defaultValue)?Ke(l,se(w(i,l))):(Ke(l,d.defaultValue),M(i,l,se(d.defaultValue))),d.keepTouched||G(n.touchedFields,l),d.keepDirty||(G(n.dirtyFields,l),n.isDirty=d.defaultValue?N(l,se(w(i,l))):N()),d.keepError||(G(n.errors,l),b.isValid&&re()),E.state.next({...n}))},Dn=(l,d={})=>{const h=l?se(l):i,v=se(h),g=l&&!ae(l)?v:i;if(d.keepDefaultValues||(i=h),!d.keepValues){if(d.keepDirtyValues)for(const p of c.mount)w(n.dirtyFields,p)?M(g,p,w(a,p)):Ke(p,w(g,p));else{if(hn&&Z(l))for(const p of c.mount){const k=w(s,p);if(k&&k._f){const V=Array.isArray(k._f.refs)?k._f.refs[0]:k._f.ref;if(ur(V)){const q=V.closest("form");if(q){q.reset();break}}}}s={}}a=r.shouldUnregister?d.keepDefaultValues?se(i):{}:se(g),E.array.next({values:{...g}}),E.values.next({values:{...g}})}c={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!o.mount&&e(),o.mount=!b.isValid||!!d.keepIsValid||!!d.keepDirtyValues,o.watch=!!r.shouldUnregister,E.state.next({submitCount:d.keepSubmitCount?n.submitCount:0,isDirty:d.keepDirty?n.isDirty:!!(d.keepDefaultValues&&!Ye(l,i)),isSubmitted:d.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:d.keepDirtyValues?d.keepDefaultValues&&a?rr(i,a):n.dirtyFields:d.keepDefaultValues&&l?rr(i,l):{},touchedFields:d.keepTouched?n.touchedFields:{},errors:d.keepErrors?n.errors:{},isSubmitSuccessful:d.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Ln=(l,d)=>Dn($e(l)?l(a):l,d);return{control:{register:Vr,unregister:Ur,getFieldState:xn,handleSubmit:Pn,setError:Rn,_executeSchema:ee,_getWatch:W,_getDirty:N,_updateValid:re,_removeUnmounted:L,_updateFieldArray:F,_updateDisabledField:On,_getFieldArray:te,_reset:Dn,_resetDefaultValues:()=>$e(t.defaultValues)&&t.defaultValues().then(l=>{Ln(l,t.resetOptions),E.state.next({isLoading:!1})}),_updateFormState:l=>{n={...n,...l}},_disableForm:Li,_subjects:E,_proxyFormState:b,_setErrors:D,get _fields(){return s},get _formValues(){return a},get _state(){return o},set _state(l){o=l},get _defaultValues(){return i},get _names(){return c},set _names(l){c=l},get _formState(){return n},set _formState(l){n=l},get _options(){return t},set _options(l){t={...t,...l}}},trigger:Mr,register:Vr,handleSubmit:Pn,watch:Di,setValue:Ke,getValues:Cn,reset:Ln,resetField:Mi,clearErrors:Pi,unregister:Ur,setError:Rn,setFocus:(l,d={})=>{const h=w(s,l),v=h&&h._f;if(v){const g=v.refs?v.refs[0]:v.ref;g.focus&&(g.focus(),d.shouldSelect&&g.select())}},getFieldState:xn}}function ia(r={}){const e=ie.useRef(),t=ie.useRef(),[n,s]=ie.useState({isDirty:!1,isValidating:!1,isLoading:$e(r.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:r.errors||{},disabled:r.disabled||!1,defaultValues:$e(r.defaultValues)?void 0:r.defaultValues});e.current||(e.current={...sa(r,()=>s(a=>({...a}))),formState:n});const i=e.current.control;return i._options=r,qi({subject:i._subjects.state,next:a=>{zi(a,i._proxyFormState,i._updateFormState,!0)&&s({...i._formState})}}),ie.useEffect(()=>i._disableForm(r.disabled),[i,r.disabled]),ie.useEffect(()=>{if(i._proxyFormState.isDirty){const a=i._getDirty();a!==n.isDirty&&i._subjects.state.next({isDirty:a})}},[i,n.isDirty]),ie.useEffect(()=>{r.values&&!Ye(r.values,t.current)?(i._reset(r.values,i._options.resetOptions),t.current=r.values,s(a=>({...a}))):i._resetDefaultValues()},[r.values,i]),ie.useEffect(()=>{r.errors&&i._setErrors(r.errors)},[r.errors,i]),ie.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),ie.useEffect(()=>{r.shouldUnregister&&i._subjects.values.next({values:i._getWatch()})},[r.shouldUnregister,i]),e.current.formState=Zi(n,i),e.current}var P;(function(r){r.assertEqual=s=>s;function e(s){}r.assertIs=e;function t(s){throw new Error}r.assertNever=t,r.arrayToEnum=s=>{const i={};for(const a of s)i[a]=a;return i},r.getValidEnumValues=s=>{const i=r.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),a={};for(const o of i)a[o]=s[o];return r.objectValues(a)},r.objectValues=s=>r.objectKeys(s).map(function(i){return s[i]}),r.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&i.push(a);return i},r.find=(s,i)=>{for(const a of s)if(i(a))return a},r.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function n(s,i=" | "){return s.map(a=>typeof a=="string"?`'${a}'`:a).join(i)}r.joinValues=n,r.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(P||(P={}));var en;(function(r){r.mergeShapes=(e,t)=>({...e,...t})})(en||(en={}));const _=P.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ve=r=>{switch(typeof r){case"undefined":return _.undefined;case"string":return _.string;case"number":return isNaN(r)?_.nan:_.number;case"boolean":return _.boolean;case"function":return _.function;case"bigint":return _.bigint;case"symbol":return _.symbol;case"object":return Array.isArray(r)?_.array:r===null?_.null:r.then&&typeof r.then=="function"&&r.catch&&typeof r.catch=="function"?_.promise:typeof Map<"u"&&r instanceof Map?_.map:typeof Set<"u"&&r instanceof Set?_.set:typeof Date<"u"&&r instanceof Date?_.date:_.object;default:return _.unknown}},f=P.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),aa=r=>JSON.stringify(r,null,2).replace(/"([^"]+)":/g,"$1:");class ue extends Error{constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(i){return i.message},n={_errors:[]},s=i=>{for(const a of i.issues)if(a.code==="invalid_union")a.unionErrors.map(s);else if(a.code==="invalid_return_type")s(a.returnTypeError);else if(a.code==="invalid_arguments")s(a.argumentsError);else if(a.path.length===0)n._errors.push(t(a));else{let o=n,c=0;for(;c<a.path.length;){const u=a.path[c];c===a.path.length-1?(o[u]=o[u]||{_errors:[]},o[u]._errors.push(t(a))):o[u]=o[u]||{_errors:[]},o=o[u],c++}}};return s(this),n}toString(){return this.message}get message(){return JSON.stringify(this.issues,P.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},n=[];for(const s of this.issues)s.path.length>0?(t[s.path[0]]=t[s.path[0]]||[],t[s.path[0]].push(e(s))):n.push(e(s));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}ue.create=r=>new ue(r);const At=(r,e)=>{let t;switch(r.code){case f.invalid_type:r.received===_.undefined?t="Required":t=`Expected ${r.expected}, received ${r.received}`;break;case f.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(r.expected,P.jsonStringifyReplacer)}`;break;case f.unrecognized_keys:t=`Unrecognized key(s) in object: ${P.joinValues(r.keys,", ")}`;break;case f.invalid_union:t="Invalid input";break;case f.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${P.joinValues(r.options)}`;break;case f.invalid_enum_value:t=`Invalid enum value. Expected ${P.joinValues(r.options)}, received '${r.received}'`;break;case f.invalid_arguments:t="Invalid function arguments";break;case f.invalid_return_type:t="Invalid function return type";break;case f.invalid_date:t="Invalid date";break;case f.invalid_string:typeof r.validation=="object"?"includes"in r.validation?(t=`Invalid input: must include "${r.validation.includes}"`,typeof r.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${r.validation.position}`)):"startsWith"in r.validation?t=`Invalid input: must start with "${r.validation.startsWith}"`:"endsWith"in r.validation?t=`Invalid input: must end with "${r.validation.endsWith}"`:P.assertNever(r.validation):r.validation!=="regex"?t=`Invalid ${r.validation}`:t="Invalid";break;case f.too_small:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at least":"more than"} ${r.minimum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at least":"over"} ${r.minimum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(r.minimum))}`:t="Invalid input";break;case f.too_big:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at most":"less than"} ${r.maximum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at most":"under"} ${r.maximum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="bigint"?t=`BigInt must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly":r.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(r.maximum))}`:t="Invalid input";break;case f.custom:t="Invalid input";break;case f.invalid_intersection_types:t="Intersection results could not be merged";break;case f.not_multiple_of:t=`Number must be a multiple of ${r.multipleOf}`;break;case f.not_finite:t="Number must be finite";break;default:t=e.defaultError,P.assertNever(r)}return{message:t}};let Ps=At;function oa(r){Ps=r}function pr(){return Ps}const mr=r=>{const{data:e,path:t,errorMaps:n,issueData:s}=r,i=[...t,...s.path||[]],a={...s,path:i};let o="";const c=n.filter(u=>!!u).slice().reverse();for(const u of c)o=u(a,{data:e,defaultError:o}).message;return{...s,path:i,message:s.message||o}},ca=[];function y(r,e){const t=mr({issueData:e,data:r.data,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,pr(),At].filter(n=>!!n)});r.common.issues.push(t)}class K{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const s of t){if(s.status==="aborted")return C;s.status==="dirty"&&e.dirty(),n.push(s.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,t){const n=[];for(const s of t)n.push({key:await s.key,value:await s.value});return K.mergeObjectSync(e,n)}static mergeObjectSync(e,t){const n={};for(const s of t){const{key:i,value:a}=s;if(i.status==="aborted"||a.status==="aborted")return C;i.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof a.value<"u"||s.alwaysSet)&&(n[i.value]=a.value)}return{status:e.value,value:n}}}const C=Object.freeze({status:"aborted"}),Ds=r=>({status:"dirty",value:r}),X=r=>({status:"valid",value:r}),tn=r=>r.status==="aborted",rn=r=>r.status==="dirty",Ct=r=>r.status==="valid",gr=r=>typeof Promise<"u"&&r instanceof Promise;var I;(function(r){r.errToObj=e=>typeof e=="string"?{message:e}:e||{},r.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(I||(I={}));class ye{constructor(e,t,n,s){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Gn=(r,e)=>{if(Ct(e))return{success:!0,data:e.value};if(!r.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new ue(r.common.issues);return this._error=t,this._error}}};function x(r){if(!r)return{};const{errorMap:e,invalid_type_error:t,required_error:n,description:s}=r;if(e&&(t||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(a,o)=>a.code!=="invalid_type"?{message:o.defaultError}:typeof o.data>"u"?{message:n??o.defaultError}:{message:t??o.defaultError},description:s}}class R{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Ve(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Ve(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new K,ctx:{common:e.parent.common,data:e.data,parsedType:Ve(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(gr(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){var n;const s={common:{issues:[],async:(n=t==null?void 0:t.async)!==null&&n!==void 0?n:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ve(e)},i=this._parseSync({data:e,path:s.path,parent:s});return Gn(s,i)}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ve(e)},s=this._parse({data:e,path:n.path,parent:n}),i=await(gr(s)?s:Promise.resolve(s));return Gn(n,i)}refine(e,t){const n=s=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(s):t;return this._refinement((s,i)=>{const a=e(s),o=()=>i.addIssue({code:f.custom,...n(s)});return typeof Promise<"u"&&a instanceof Promise?a.then(c=>c?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((n,s)=>e(n)?!0:(s.addIssue(typeof t=="function"?t(n,s):t),!1))}_refinement(e){return new he({schema:this,typeName:A.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Re.create(this,this._def)}nullable(){return nt.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return de.create(this,this._def)}promise(){return _t.create(this,this._def)}or(e){return Nt.create([this,e],this._def)}and(e){return Pt.create(this,e,this._def)}transform(e){return new he({...x(this._def),schema:this,typeName:A.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Vt({...x(this._def),innerType:this,defaultValue:t,typeName:A.ZodDefault})}brand(){return new Ms({typeName:A.ZodBranded,type:this,...x(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new br({...x(this._def),innerType:this,catchValue:t,typeName:A.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return zt.create(this,e)}readonly(){return Ir.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const la=/^c[^\s-]{8,}$/i,ua=/^[a-z][a-z0-9]*$/,da=/^[0-9A-HJKMNP-TV-Z]{26}$/,ha=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,fa=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,pa="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Zr;const ma=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,ga=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,_a=r=>r.precision?r.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}Z$`):r.precision===0?r.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):r.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function ya(r,e){return!!((e==="v4"||!e)&&ma.test(r)||(e==="v6"||!e)&&ga.test(r))}class le extends R{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==_.string){const i=this._getOrReturnCtx(e);return y(i,{code:f.invalid_type,expected:_.string,received:i.parsedType}),C}const n=new K;let s;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),y(s,{code:f.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),n.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),y(s,{code:f.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),n.dirty());else if(i.kind==="length"){const a=e.data.length>i.value,o=e.data.length<i.value;(a||o)&&(s=this._getOrReturnCtx(e,s),a?y(s,{code:f.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):o&&y(s,{code:f.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),n.dirty())}else if(i.kind==="email")fa.test(e.data)||(s=this._getOrReturnCtx(e,s),y(s,{validation:"email",code:f.invalid_string,message:i.message}),n.dirty());else if(i.kind==="emoji")Zr||(Zr=new RegExp(pa,"u")),Zr.test(e.data)||(s=this._getOrReturnCtx(e,s),y(s,{validation:"emoji",code:f.invalid_string,message:i.message}),n.dirty());else if(i.kind==="uuid")ha.test(e.data)||(s=this._getOrReturnCtx(e,s),y(s,{validation:"uuid",code:f.invalid_string,message:i.message}),n.dirty());else if(i.kind==="cuid")la.test(e.data)||(s=this._getOrReturnCtx(e,s),y(s,{validation:"cuid",code:f.invalid_string,message:i.message}),n.dirty());else if(i.kind==="cuid2")ua.test(e.data)||(s=this._getOrReturnCtx(e,s),y(s,{validation:"cuid2",code:f.invalid_string,message:i.message}),n.dirty());else if(i.kind==="ulid")da.test(e.data)||(s=this._getOrReturnCtx(e,s),y(s,{validation:"ulid",code:f.invalid_string,message:i.message}),n.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),y(s,{validation:"url",code:f.invalid_string,message:i.message}),n.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),y(s,{validation:"regex",code:f.invalid_string,message:i.message}),n.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),y(s,{code:f.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),n.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),y(s,{code:f.invalid_string,validation:{startsWith:i.value},message:i.message}),n.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),y(s,{code:f.invalid_string,validation:{endsWith:i.value},message:i.message}),n.dirty()):i.kind==="datetime"?_a(i).test(e.data)||(s=this._getOrReturnCtx(e,s),y(s,{code:f.invalid_string,validation:"datetime",message:i.message}),n.dirty()):i.kind==="ip"?ya(e.data,i.version)||(s=this._getOrReturnCtx(e,s),y(s,{validation:"ip",code:f.invalid_string,message:i.message}),n.dirty()):P.assertNever(i);return{status:n.value,value:e.data}}_regex(e,t,n){return this.refinement(s=>e.test(s),{validation:t,code:f.invalid_string,...I.errToObj(n)})}_addCheck(e){return new le({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...I.errToObj(e)})}url(e){return this._addCheck({kind:"url",...I.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...I.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...I.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...I.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...I.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...I.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...I.errToObj(e)})}datetime(e){var t;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,...I.errToObj(e==null?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...I.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...I.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...I.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...I.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...I.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...I.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...I.errToObj(t)})}nonempty(e){return this.min(1,I.errToObj(e))}trim(){return new le({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new le({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new le({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}le.create=r=>{var e;return new le({checks:[],typeName:A.ZodString,coerce:(e=r==null?void 0:r.coerce)!==null&&e!==void 0?e:!1,...x(r)})};function va(r,e){const t=(r.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,s=t>n?t:n,i=parseInt(r.toFixed(s).replace(".","")),a=parseInt(e.toFixed(s).replace(".",""));return i%a/Math.pow(10,s)}class Ze extends R{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==_.number){const i=this._getOrReturnCtx(e);return y(i,{code:f.invalid_type,expected:_.number,received:i.parsedType}),C}let n;const s=new K;for(const i of this._def.checks)i.kind==="int"?P.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),y(n,{code:f.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(n=this._getOrReturnCtx(e,n),y(n,{code:f.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(n=this._getOrReturnCtx(e,n),y(n,{code:f.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?va(e.data,i.value)!==0&&(n=this._getOrReturnCtx(e,n),y(n,{code:f.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),y(n,{code:f.not_finite,message:i.message}),s.dirty()):P.assertNever(i);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,I.toString(t))}gt(e,t){return this.setLimit("min",e,!1,I.toString(t))}lte(e,t){return this.setLimit("max",e,!0,I.toString(t))}lt(e,t){return this.setLimit("max",e,!1,I.toString(t))}setLimit(e,t,n,s){return new Ze({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:I.toString(s)}]})}_addCheck(e){return new Ze({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:I.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:I.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:I.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:I.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:I.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:I.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:I.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:I.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:I.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&P.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(t===null||n.value>t)&&(t=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Ze.create=r=>new Ze({checks:[],typeName:A.ZodNumber,coerce:(r==null?void 0:r.coerce)||!1,...x(r)});class ze extends R{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==_.bigint){const i=this._getOrReturnCtx(e);return y(i,{code:f.invalid_type,expected:_.bigint,received:i.parsedType}),C}let n;const s=new K;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(n=this._getOrReturnCtx(e,n),y(n,{code:f.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(n=this._getOrReturnCtx(e,n),y(n,{code:f.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),y(n,{code:f.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):P.assertNever(i);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,I.toString(t))}gt(e,t){return this.setLimit("min",e,!1,I.toString(t))}lte(e,t){return this.setLimit("max",e,!0,I.toString(t))}lt(e,t){return this.setLimit("max",e,!1,I.toString(t))}setLimit(e,t,n,s){return new ze({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:I.toString(s)}]})}_addCheck(e){return new ze({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:I.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:I.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:I.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:I.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:I.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ze.create=r=>{var e;return new ze({checks:[],typeName:A.ZodBigInt,coerce:(e=r==null?void 0:r.coerce)!==null&&e!==void 0?e:!1,...x(r)})};class xt extends R{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==_.boolean){const n=this._getOrReturnCtx(e);return y(n,{code:f.invalid_type,expected:_.boolean,received:n.parsedType}),C}return X(e.data)}}xt.create=r=>new xt({typeName:A.ZodBoolean,coerce:(r==null?void 0:r.coerce)||!1,...x(r)});class tt extends R{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==_.date){const i=this._getOrReturnCtx(e);return y(i,{code:f.invalid_type,expected:_.date,received:i.parsedType}),C}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return y(i,{code:f.invalid_date}),C}const n=new K;let s;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),y(s,{code:f.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),n.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),y(s,{code:f.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),n.dirty()):P.assertNever(i);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new tt({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:I.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:I.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}tt.create=r=>new tt({checks:[],coerce:(r==null?void 0:r.coerce)||!1,typeName:A.ZodDate,...x(r)});class _r extends R{_parse(e){if(this._getType(e)!==_.symbol){const n=this._getOrReturnCtx(e);return y(n,{code:f.invalid_type,expected:_.symbol,received:n.parsedType}),C}return X(e.data)}}_r.create=r=>new _r({typeName:A.ZodSymbol,...x(r)});class Rt extends R{_parse(e){if(this._getType(e)!==_.undefined){const n=this._getOrReturnCtx(e);return y(n,{code:f.invalid_type,expected:_.undefined,received:n.parsedType}),C}return X(e.data)}}Rt.create=r=>new Rt({typeName:A.ZodUndefined,...x(r)});class Ot extends R{_parse(e){if(this._getType(e)!==_.null){const n=this._getOrReturnCtx(e);return y(n,{code:f.invalid_type,expected:_.null,received:n.parsedType}),C}return X(e.data)}}Ot.create=r=>new Ot({typeName:A.ZodNull,...x(r)});class gt extends R{constructor(){super(...arguments),this._any=!0}_parse(e){return X(e.data)}}gt.create=r=>new gt({typeName:A.ZodAny,...x(r)});class Qe extends R{constructor(){super(...arguments),this._unknown=!0}_parse(e){return X(e.data)}}Qe.create=r=>new Qe({typeName:A.ZodUnknown,...x(r)});class Oe extends R{_parse(e){const t=this._getOrReturnCtx(e);return y(t,{code:f.invalid_type,expected:_.never,received:t.parsedType}),C}}Oe.create=r=>new Oe({typeName:A.ZodNever,...x(r)});class yr extends R{_parse(e){if(this._getType(e)!==_.undefined){const n=this._getOrReturnCtx(e);return y(n,{code:f.invalid_type,expected:_.void,received:n.parsedType}),C}return X(e.data)}}yr.create=r=>new yr({typeName:A.ZodVoid,...x(r)});class de extends R{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),s=this._def;if(t.parsedType!==_.array)return y(t,{code:f.invalid_type,expected:_.array,received:t.parsedType}),C;if(s.exactLength!==null){const a=t.data.length>s.exactLength.value,o=t.data.length<s.exactLength.value;(a||o)&&(y(t,{code:a?f.too_big:f.too_small,minimum:o?s.exactLength.value:void 0,maximum:a?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),n.dirty())}if(s.minLength!==null&&t.data.length<s.minLength.value&&(y(t,{code:f.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),n.dirty()),s.maxLength!==null&&t.data.length>s.maxLength.value&&(y(t,{code:f.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>s.type._parseAsync(new ye(t,a,t.path,o)))).then(a=>K.mergeArray(n,a));const i=[...t.data].map((a,o)=>s.type._parseSync(new ye(t,a,t.path,o)));return K.mergeArray(n,i)}get element(){return this._def.type}min(e,t){return new de({...this._def,minLength:{value:e,message:I.toString(t)}})}max(e,t){return new de({...this._def,maxLength:{value:e,message:I.toString(t)}})}length(e,t){return new de({...this._def,exactLength:{value:e,message:I.toString(t)}})}nonempty(e){return this.min(1,e)}}de.create=(r,e)=>new de({type:r,minLength:null,maxLength:null,exactLength:null,typeName:A.ZodArray,...x(e)});function ut(r){if(r instanceof B){const e={};for(const t in r.shape){const n=r.shape[t];e[t]=Re.create(ut(n))}return new B({...r._def,shape:()=>e})}else return r instanceof de?new de({...r._def,type:ut(r.element)}):r instanceof Re?Re.create(ut(r.unwrap())):r instanceof nt?nt.create(ut(r.unwrap())):r instanceof ve?ve.create(r.items.map(e=>ut(e))):r}class B extends R{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=P.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==_.object){const u=this._getOrReturnCtx(e);return y(u,{code:f.invalid_type,expected:_.object,received:u.parsedType}),C}const{status:n,ctx:s}=this._processInputParams(e),{shape:i,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Oe&&this._def.unknownKeys==="strip"))for(const u in s.data)a.includes(u)||o.push(u);const c=[];for(const u of a){const m=i[u],b=s.data[u];c.push({key:{status:"valid",value:u},value:m._parse(new ye(s,b,s.path,u)),alwaysSet:u in s.data})}if(this._def.catchall instanceof Oe){const u=this._def.unknownKeys;if(u==="passthrough")for(const m of o)c.push({key:{status:"valid",value:m},value:{status:"valid",value:s.data[m]}});else if(u==="strict")o.length>0&&(y(s,{code:f.unrecognized_keys,keys:o}),n.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const m of o){const b=s.data[m];c.push({key:{status:"valid",value:m},value:u._parse(new ye(s,b,s.path,m)),alwaysSet:m in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const u=[];for(const m of c){const b=await m.key;u.push({key:b,value:await m.value,alwaysSet:m.alwaysSet})}return u}).then(u=>K.mergeObjectSync(n,u)):K.mergeObjectSync(n,c)}get shape(){return this._def.shape()}strict(e){return I.errToObj,new B({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,n)=>{var s,i,a,o;const c=(a=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,t,n).message)!==null&&a!==void 0?a:n.defaultError;return t.code==="unrecognized_keys"?{message:(o=I.errToObj(e).message)!==null&&o!==void 0?o:c}:{message:c}}}:{}})}strip(){return new B({...this._def,unknownKeys:"strip"})}passthrough(){return new B({...this._def,unknownKeys:"passthrough"})}extend(e){return new B({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new B({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:A.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new B({...this._def,catchall:e})}pick(e){const t={};return P.objectKeys(e).forEach(n=>{e[n]&&this.shape[n]&&(t[n]=this.shape[n])}),new B({...this._def,shape:()=>t})}omit(e){const t={};return P.objectKeys(this.shape).forEach(n=>{e[n]||(t[n]=this.shape[n])}),new B({...this._def,shape:()=>t})}deepPartial(){return ut(this)}partial(e){const t={};return P.objectKeys(this.shape).forEach(n=>{const s=this.shape[n];e&&!e[n]?t[n]=s:t[n]=s.optional()}),new B({...this._def,shape:()=>t})}required(e){const t={};return P.objectKeys(this.shape).forEach(n=>{if(e&&!e[n])t[n]=this.shape[n];else{let i=this.shape[n];for(;i instanceof Re;)i=i._def.innerType;t[n]=i}}),new B({...this._def,shape:()=>t})}keyof(){return Ls(P.objectKeys(this.shape))}}B.create=(r,e)=>new B({shape:()=>r,unknownKeys:"strip",catchall:Oe.create(),typeName:A.ZodObject,...x(e)});B.strictCreate=(r,e)=>new B({shape:()=>r,unknownKeys:"strict",catchall:Oe.create(),typeName:A.ZodObject,...x(e)});B.lazycreate=(r,e)=>new B({shape:r,unknownKeys:"strip",catchall:Oe.create(),typeName:A.ZodObject,...x(e)});class Nt extends R{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;function s(i){for(const o of i)if(o.result.status==="valid")return o.result;for(const o of i)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=i.map(o=>new ue(o.ctx.common.issues));return y(t,{code:f.invalid_union,unionErrors:a}),C}if(t.common.async)return Promise.all(n.map(async i=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await i._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(s);{let i;const a=[];for(const c of n){const u={...t,common:{...t.common,issues:[]},parent:null},m=c._parseSync({data:t.data,path:t.path,parent:u});if(m.status==="valid")return m;m.status==="dirty"&&!i&&(i={result:m,ctx:u}),u.common.issues.length&&a.push(u.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;const o=a.map(c=>new ue(c));return y(t,{code:f.invalid_union,unionErrors:o}),C}}get options(){return this._def.options}}Nt.create=(r,e)=>new Nt({options:r,typeName:A.ZodUnion,...x(e)});const ir=r=>r instanceof Lt?ir(r.schema):r instanceof he?ir(r.innerType()):r instanceof Mt?[r.value]:r instanceof qe?r.options:r instanceof Ut?Object.keys(r.enum):r instanceof Vt?ir(r._def.innerType):r instanceof Rt?[void 0]:r instanceof Ot?[null]:null;class Or extends R{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==_.object)return y(t,{code:f.invalid_type,expected:_.object,received:t.parsedType}),C;const n=this.discriminator,s=t.data[n],i=this.optionsMap.get(s);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(y(t,{code:f.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),C)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,n){const s=new Map;for(const i of t){const a=ir(i.shape[e]);if(!a)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(s.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);s.set(o,i)}}return new Or({typeName:A.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:s,...x(n)})}}function nn(r,e){const t=Ve(r),n=Ve(e);if(r===e)return{valid:!0,data:r};if(t===_.object&&n===_.object){const s=P.objectKeys(e),i=P.objectKeys(r).filter(o=>s.indexOf(o)!==-1),a={...r,...e};for(const o of i){const c=nn(r[o],e[o]);if(!c.valid)return{valid:!1};a[o]=c.data}return{valid:!0,data:a}}else if(t===_.array&&n===_.array){if(r.length!==e.length)return{valid:!1};const s=[];for(let i=0;i<r.length;i++){const a=r[i],o=e[i],c=nn(a,o);if(!c.valid)return{valid:!1};s.push(c.data)}return{valid:!0,data:s}}else return t===_.date&&n===_.date&&+r==+e?{valid:!0,data:r}:{valid:!1}}class Pt extends R{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),s=(i,a)=>{if(tn(i)||tn(a))return C;const o=nn(i.value,a.value);return o.valid?((rn(i)||rn(a))&&t.dirty(),{status:t.value,value:o.data}):(y(n,{code:f.invalid_intersection_types}),C)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([i,a])=>s(i,a)):s(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}Pt.create=(r,e,t)=>new Pt({left:r,right:e,typeName:A.ZodIntersection,...x(t)});class ve extends R{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==_.array)return y(n,{code:f.invalid_type,expected:_.array,received:n.parsedType}),C;if(n.data.length<this._def.items.length)return y(n,{code:f.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),C;!this._def.rest&&n.data.length>this._def.items.length&&(y(n,{code:f.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...n.data].map((a,o)=>{const c=this._def.items[o]||this._def.rest;return c?c._parse(new ye(n,a,n.path,o)):null}).filter(a=>!!a);return n.common.async?Promise.all(i).then(a=>K.mergeArray(t,a)):K.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new ve({...this._def,rest:e})}}ve.create=(r,e)=>{if(!Array.isArray(r))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ve({items:r,typeName:A.ZodTuple,rest:null,...x(e)})};class Dt extends R{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==_.object)return y(n,{code:f.invalid_type,expected:_.object,received:n.parsedType}),C;const s=[],i=this._def.keyType,a=this._def.valueType;for(const o in n.data)s.push({key:i._parse(new ye(n,o,n.path,o)),value:a._parse(new ye(n,n.data[o],n.path,o))});return n.common.async?K.mergeObjectAsync(t,s):K.mergeObjectSync(t,s)}get element(){return this._def.valueType}static create(e,t,n){return t instanceof R?new Dt({keyType:e,valueType:t,typeName:A.ZodRecord,...x(n)}):new Dt({keyType:le.create(),valueType:e,typeName:A.ZodRecord,...x(t)})}}class vr extends R{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==_.map)return y(n,{code:f.invalid_type,expected:_.map,received:n.parsedType}),C;const s=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([o,c],u)=>({key:s._parse(new ye(n,o,n.path,[u,"key"])),value:i._parse(new ye(n,c,n.path,[u,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of a){const u=await c.key,m=await c.value;if(u.status==="aborted"||m.status==="aborted")return C;(u.status==="dirty"||m.status==="dirty")&&t.dirty(),o.set(u.value,m.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const c of a){const u=c.key,m=c.value;if(u.status==="aborted"||m.status==="aborted")return C;(u.status==="dirty"||m.status==="dirty")&&t.dirty(),o.set(u.value,m.value)}return{status:t.value,value:o}}}}vr.create=(r,e,t)=>new vr({valueType:e,keyType:r,typeName:A.ZodMap,...x(t)});class rt extends R{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==_.set)return y(n,{code:f.invalid_type,expected:_.set,received:n.parsedType}),C;const s=this._def;s.minSize!==null&&n.data.size<s.minSize.value&&(y(n,{code:f.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),t.dirty()),s.maxSize!==null&&n.data.size>s.maxSize.value&&(y(n,{code:f.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),t.dirty());const i=this._def.valueType;function a(c){const u=new Set;for(const m of c){if(m.status==="aborted")return C;m.status==="dirty"&&t.dirty(),u.add(m.value)}return{status:t.value,value:u}}const o=[...n.data.values()].map((c,u)=>i._parse(new ye(n,c,n.path,u)));return n.common.async?Promise.all(o).then(c=>a(c)):a(o)}min(e,t){return new rt({...this._def,minSize:{value:e,message:I.toString(t)}})}max(e,t){return new rt({...this._def,maxSize:{value:e,message:I.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}rt.create=(r,e)=>new rt({valueType:r,minSize:null,maxSize:null,typeName:A.ZodSet,...x(e)});class ht extends R{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==_.function)return y(t,{code:f.invalid_type,expected:_.function,received:t.parsedType}),C;function n(o,c){return mr({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,pr(),At].filter(u=>!!u),issueData:{code:f.invalid_arguments,argumentsError:c}})}function s(o,c){return mr({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,pr(),At].filter(u=>!!u),issueData:{code:f.invalid_return_type,returnTypeError:c}})}const i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof _t){const o=this;return X(async function(...c){const u=new ue([]),m=await o._def.args.parseAsync(c,i).catch(j=>{throw u.addIssue(n(c,j)),u}),b=await Reflect.apply(a,this,m);return await o._def.returns._def.type.parseAsync(b,i).catch(j=>{throw u.addIssue(s(b,j)),u})})}else{const o=this;return X(function(...c){const u=o._def.args.safeParse(c,i);if(!u.success)throw new ue([n(c,u.error)]);const m=Reflect.apply(a,this,u.data),b=o._def.returns.safeParse(m,i);if(!b.success)throw new ue([s(m,b.error)]);return b.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new ht({...this._def,args:ve.create(e).rest(Qe.create())})}returns(e){return new ht({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,n){return new ht({args:e||ve.create([]).rest(Qe.create()),returns:t||Qe.create(),typeName:A.ZodFunction,...x(n)})}}class Lt extends R{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Lt.create=(r,e)=>new Lt({getter:r,typeName:A.ZodLazy,...x(e)});class Mt extends R{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return y(t,{received:t.data,code:f.invalid_literal,expected:this._def.value}),C}return{status:"valid",value:e.data}}get value(){return this._def.value}}Mt.create=(r,e)=>new Mt({value:r,typeName:A.ZodLiteral,...x(e)});function Ls(r,e){return new qe({values:r,typeName:A.ZodEnum,...x(e)})}class qe extends R{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),n=this._def.values;return y(t,{expected:P.joinValues(n),received:t.parsedType,code:f.invalid_type}),C}if(this._def.values.indexOf(e.data)===-1){const t=this._getOrReturnCtx(e),n=this._def.values;return y(t,{received:t.data,code:f.invalid_enum_value,options:n}),C}return X(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return qe.create(e)}exclude(e){return qe.create(this.options.filter(t=>!e.includes(t)))}}qe.create=Ls;class Ut extends R{_parse(e){const t=P.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==_.string&&n.parsedType!==_.number){const s=P.objectValues(t);return y(n,{expected:P.joinValues(s),received:n.parsedType,code:f.invalid_type}),C}if(t.indexOf(e.data)===-1){const s=P.objectValues(t);return y(n,{received:n.data,code:f.invalid_enum_value,options:s}),C}return X(e.data)}get enum(){return this._def.values}}Ut.create=(r,e)=>new Ut({values:r,typeName:A.ZodNativeEnum,...x(e)});class _t extends R{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==_.promise&&t.common.async===!1)return y(t,{code:f.invalid_type,expected:_.promise,received:t.parsedType}),C;const n=t.parsedType===_.promise?t.data:Promise.resolve(t.data);return X(n.then(s=>this._def.type.parseAsync(s,{path:t.path,errorMap:t.common.contextualErrorMap})))}}_t.create=(r,e)=>new _t({type:r,typeName:A.ZodPromise,...x(e)});class he extends R{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===A.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),s=this._def.effect||null,i={addIssue:a=>{y(n,a),a.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),s.type==="preprocess"){const a=s.transform(n.data,i);return n.common.issues.length?{status:"dirty",value:n.data}:n.common.async?Promise.resolve(a).then(o=>this._def.schema._parseAsync({data:o,path:n.path,parent:n})):this._def.schema._parseSync({data:a,path:n.path,parent:n})}if(s.type==="refinement"){const a=o=>{const c=s.refinement(o,i);if(n.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?C:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?C:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(s.type==="transform")if(n.common.async===!1){const a=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Ct(a))return a;const o=s.transform(a.value,i);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(a=>Ct(a)?Promise.resolve(s.transform(a.value,i)).then(o=>({status:t.value,value:o})):a);P.assertNever(s)}}he.create=(r,e,t)=>new he({schema:r,typeName:A.ZodEffects,effect:e,...x(t)});he.createWithPreprocess=(r,e,t)=>new he({schema:e,effect:{type:"preprocess",transform:r},typeName:A.ZodEffects,...x(t)});class Re extends R{_parse(e){return this._getType(e)===_.undefined?X(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Re.create=(r,e)=>new Re({innerType:r,typeName:A.ZodOptional,...x(e)});class nt extends R{_parse(e){return this._getType(e)===_.null?X(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}nt.create=(r,e)=>new nt({innerType:r,typeName:A.ZodNullable,...x(e)});class Vt extends R{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===_.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Vt.create=(r,e)=>new Vt({innerType:r,typeName:A.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...x(e)});class br extends R{_parse(e){const{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return gr(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new ue(n.common.issues)},input:n.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new ue(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}br.create=(r,e)=>new br({innerType:r,typeName:A.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...x(e)});class wr extends R{_parse(e){if(this._getType(e)!==_.nan){const n=this._getOrReturnCtx(e);return y(n,{code:f.invalid_type,expected:_.nan,received:n.parsedType}),C}return{status:"valid",value:e.data}}}wr.create=r=>new wr({typeName:A.ZodNaN,...x(r)});const ba=Symbol("zod_brand");class Ms extends R{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class zt extends R{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return i.status==="aborted"?C:i.status==="dirty"?(t.dirty(),Ds(i.value)):this._def.out._parseAsync({data:i.value,path:n.path,parent:n})})();{const s=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?C:s.status==="dirty"?(t.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:n.path,parent:n})}}static create(e,t){return new zt({in:e,out:t,typeName:A.ZodPipeline})}}class Ir extends R{_parse(e){const t=this._def.innerType._parse(e);return Ct(t)&&(t.value=Object.freeze(t.value)),t}}Ir.create=(r,e)=>new Ir({innerType:r,typeName:A.ZodReadonly,...x(e)});const Us=(r,e={},t)=>r?gt.create().superRefine((n,s)=>{var i,a;if(!r(n)){const o=typeof e=="function"?e(n):typeof e=="string"?{message:e}:e,c=(a=(i=o.fatal)!==null&&i!==void 0?i:t)!==null&&a!==void 0?a:!0,u=typeof o=="string"?{message:o}:o;s.addIssue({code:"custom",...u,fatal:c})}}):gt.create(),wa={object:B.lazycreate};var A;(function(r){r.ZodString="ZodString",r.ZodNumber="ZodNumber",r.ZodNaN="ZodNaN",r.ZodBigInt="ZodBigInt",r.ZodBoolean="ZodBoolean",r.ZodDate="ZodDate",r.ZodSymbol="ZodSymbol",r.ZodUndefined="ZodUndefined",r.ZodNull="ZodNull",r.ZodAny="ZodAny",r.ZodUnknown="ZodUnknown",r.ZodNever="ZodNever",r.ZodVoid="ZodVoid",r.ZodArray="ZodArray",r.ZodObject="ZodObject",r.ZodUnion="ZodUnion",r.ZodDiscriminatedUnion="ZodDiscriminatedUnion",r.ZodIntersection="ZodIntersection",r.ZodTuple="ZodTuple",r.ZodRecord="ZodRecord",r.ZodMap="ZodMap",r.ZodSet="ZodSet",r.ZodFunction="ZodFunction",r.ZodLazy="ZodLazy",r.ZodLiteral="ZodLiteral",r.ZodEnum="ZodEnum",r.ZodEffects="ZodEffects",r.ZodNativeEnum="ZodNativeEnum",r.ZodOptional="ZodOptional",r.ZodNullable="ZodNullable",r.ZodDefault="ZodDefault",r.ZodCatch="ZodCatch",r.ZodPromise="ZodPromise",r.ZodBranded="ZodBranded",r.ZodPipeline="ZodPipeline",r.ZodReadonly="ZodReadonly"})(A||(A={}));const Ia=(r,e={message:`Input not instance of ${r.name}`})=>Us(t=>t instanceof r,e),Vs=le.create,js=Ze.create,Ea=wr.create,Ta=ze.create,Fs=xt.create,ka=tt.create,Sa=_r.create,Aa=Rt.create,Ca=Ot.create,xa=gt.create,Ra=Qe.create,Oa=Oe.create,Na=yr.create,Pa=de.create,Da=B.create,La=B.strictCreate,Ma=Nt.create,Ua=Or.create,Va=Pt.create,ja=ve.create,Fa=Dt.create,Ba=vr.create,$a=rt.create,Ha=ht.create,Wa=Lt.create,Za=Mt.create,za=qe.create,qa=Ut.create,Ga=_t.create,Kn=he.create,Ka=Re.create,Ja=nt.create,Ya=he.createWithPreprocess,Xa=zt.create,Qa=()=>Vs().optional(),eo=()=>js().optional(),to=()=>Fs().optional(),ro={string:r=>le.create({...r,coerce:!0}),number:r=>Ze.create({...r,coerce:!0}),boolean:r=>xt.create({...r,coerce:!0}),bigint:r=>ze.create({...r,coerce:!0}),date:r=>tt.create({...r,coerce:!0})},no=C;var zr=Object.freeze({__proto__:null,defaultErrorMap:At,setErrorMap:oa,getErrorMap:pr,makeIssue:mr,EMPTY_PATH:ca,addIssueToContext:y,ParseStatus:K,INVALID:C,DIRTY:Ds,OK:X,isAborted:tn,isDirty:rn,isValid:Ct,isAsync:gr,get util(){return P},get objectUtil(){return en},ZodParsedType:_,getParsedType:Ve,ZodType:R,ZodString:le,ZodNumber:Ze,ZodBigInt:ze,ZodBoolean:xt,ZodDate:tt,ZodSymbol:_r,ZodUndefined:Rt,ZodNull:Ot,ZodAny:gt,ZodUnknown:Qe,ZodNever:Oe,ZodVoid:yr,ZodArray:de,ZodObject:B,ZodUnion:Nt,ZodDiscriminatedUnion:Or,ZodIntersection:Pt,ZodTuple:ve,ZodRecord:Dt,ZodMap:vr,ZodSet:rt,ZodFunction:ht,ZodLazy:Lt,ZodLiteral:Mt,ZodEnum:qe,ZodNativeEnum:Ut,ZodPromise:_t,ZodEffects:he,ZodTransformer:he,ZodOptional:Re,ZodNullable:nt,ZodDefault:Vt,ZodCatch:br,ZodNaN:wr,BRAND:ba,ZodBranded:Ms,ZodPipeline:zt,ZodReadonly:Ir,custom:Us,Schema:R,ZodSchema:R,late:wa,get ZodFirstPartyTypeKind(){return A},coerce:ro,any:xa,array:Pa,bigint:Ta,boolean:Fs,date:ka,discriminatedUnion:Ua,effect:Kn,enum:za,function:Ha,instanceof:Ia,intersection:Va,lazy:Wa,literal:Za,map:Ba,nan:Ea,nativeEnum:qa,never:Oa,null:Ca,nullable:Ja,number:js,object:Da,oboolean:to,onumber:eo,optional:Ka,ostring:Qa,pipeline:Xa,preprocess:Ya,promise:Ga,record:Fa,set:$a,strictObject:La,string:Vs,symbol:Sa,transformer:Kn,tuple:ja,undefined:Aa,union:Ma,unknown:Ra,void:Na,NEVER:no,ZodIssueCode:f,quotelessJson:aa,ZodError:ue}),Jn=function(r,e,t){if(r&&"reportValidity"in r){var n=w(t,e);r.setCustomValidity(n&&n.message||""),r.reportValidity()}},Bs=function(r,e){var t=function(s){var i=e.fields[s];i&&i.ref&&"reportValidity"in i.ref?Jn(i.ref,s,r):i.refs&&i.refs.forEach(function(a){return Jn(a,s,r)})};for(var n in e.fields)t(n)},so=function(r,e){e.shouldUseNativeValidation&&Bs(r,e);var t={};for(var n in r){var s=w(e.fields,n),i=Object.assign(r[n]||{},{ref:s&&s.ref});if(io(e.names||Object.keys(r),n)){var a=Object.assign({},w(t,n));M(a,"root",i),M(t,n,a)}else M(t,n,i)}return t},io=function(r,e){return r.some(function(t){return t.startsWith(e+".")})},ao=function(r,e){for(var t={};r.length;){var n=r[0],s=n.code,i=n.message,a=n.path.join(".");if(!t[a])if("unionErrors"in n){var o=n.unionErrors[0].errors[0];t[a]={message:o.message,type:o.code}}else t[a]={message:i,type:s};if("unionErrors"in n&&n.unionErrors.forEach(function(m){return m.errors.forEach(function(b){return r.push(b)})}),e){var c=t[a].types,u=c&&c[n.code];t[a]=Ss(a,e,t,s,u?[].concat(u,n.message):n.message)}r.shift()}return t},oo=function(r,e,t){return t===void 0&&(t={}),function(n,s,i){try{return Promise.resolve(function(a,o){try{var c=Promise.resolve(r[t.mode==="sync"?"parse":"parseAsync"](n,e)).then(function(u){return i.shouldUseNativeValidation&&Bs({},i),{errors:{},values:t.raw?n:u}})}catch(u){return o(u)}return c&&c.then?c.then(void 0,o):c}(0,function(a){if(function(o){return o.errors!=null}(a))return{values:{},errors:so(ao(a.errors,!i.shouldUseNativeValidation&&i.criteriaMode==="all"),i)};throw a}))}catch(a){return Promise.reject(a)}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},co=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],a=r[t++],o=r[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Hs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,o=a?r[s+1]:0,c=s+2<r.length,u=c?r[s+2]:0,m=i>>2,b=(i&3)<<4|o>>4;let E=(o&15)<<2|u>>6,j=u&63;c||(j=64,a||(E=64)),n.push(t[m],t[b],t[E],t[j])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray($s(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):co(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],o=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const b=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||o==null||u==null||b==null)throw new lo;const E=i<<2|o>>4;if(n.push(E),u!==64){const j=o<<4&240|u>>2;if(n.push(j),b!==64){const H=u<<6&192|b;n.push(H)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class lo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uo=function(r){const e=$s(r);return Hs.encodeByteArray(e,!0)},Ws=function(r){return uo(r).replace(/\./g,"")},Zs=function(r){try{return Hs.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=()=>ho().__FIREBASE_DEFAULTS__,po=()=>{if(typeof process>"u"||typeof process.env>"u")return;const r={}.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},mo=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Zs(r[1]);return e&&JSON.parse(e)},gn=()=>{try{return fo()||po()||mo()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},go=r=>{var e,t;return(t=(e=gn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},zs=()=>{var r;return(r=gn())===null||r===void 0?void 0:r.config},qs=r=>{var e;return(e=gn())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function vo(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function bo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wo(){const r=J();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Io(){try{return typeof indexedDB=="object"}catch{return!1}}function Eo(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="FirebaseError";class Ge extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=To,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qt.prototype.create)}}class qt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?ko(i,n):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new Ge(s,o,n)}}function ko(r,e){return r.replace(So,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const So=/\{\$([^}]+)}/g;function Ao(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Er(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],a=e[s];if(Yn(i)&&Yn(a)){if(!Er(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Yn(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Et(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Tt(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Co(r,e){const t=new xo(r,e);return t.subscribe.bind(t)}class xo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Ro(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=qr),s.error===void 0&&(s.error=qr),s.complete===void 0&&(s.complete=qr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ro(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function qr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(r){return r&&r._delegate?r._delegate:r}class yt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new _o;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Po(e))try{this.getOrInitializeService({instanceIdentifier:Je})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Je){return this.instances.has(e)}getOptions(e=Je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);n===o&&a.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:No(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Je){return this.component?this.component.multipleInstances?e:Je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function No(r){return r===Je?void 0:r}function Po(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Oo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(U||(U={}));const Lo={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Mo=U.INFO,Uo={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Vo=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Uo[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gs{constructor(e){this.name=e,this._logLevel=Mo,this._logHandler=Vo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const jo=(r,e)=>e.some(t=>r instanceof t);let Xn,Qn;function Fo(){return Xn||(Xn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bo(){return Qn||(Qn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ks=new WeakMap,sn=new WeakMap,Js=new WeakMap,Gr=new WeakMap,_n=new WeakMap;function $o(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(He(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ks.set(t,r)}).catch(()=>{}),_n.set(e,r),e}function Ho(r){if(sn.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});sn.set(r,e)}let an={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return sn.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Js.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Wo(r){an=r(an)}function Zo(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Kr(this),e,...t);return Js.set(n,e.sort?e.sort():[e]),He(n)}:Bo().includes(r)?function(...e){return r.apply(Kr(this),e),He(Ks.get(this))}:function(...e){return He(r.apply(Kr(this),e))}}function zo(r){return typeof r=="function"?Zo(r):(r instanceof IDBTransaction&&Ho(r),jo(r,Fo())?new Proxy(r,an):r)}function He(r){if(r instanceof IDBRequest)return $o(r);if(Gr.has(r))return Gr.get(r);const e=zo(r);return e!==r&&(Gr.set(r,e),_n.set(e,r)),e}const Kr=r=>_n.get(r);function qo(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,e),o=He(a);return n&&a.addEventListener("upgradeneeded",c=>{n(He(a.result),c.oldVersion,c.newVersion,He(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const Go=["get","getKey","getAll","getAllKeys","count"],Ko=["put","add","delete","clear"],Jr=new Map;function es(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Jr.get(e))return Jr.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Ko.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Go.includes(t)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(o.shift())),(await Promise.all([u[t](...o),s&&c.done]))[0]};return Jr.set(e,i),i}Wo(r=>({...r,get:(e,t,n)=>es(e,t)||r.get(e,t,n),has:(e,t)=>!!es(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yo(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Yo(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const on="@firebase/app",ts="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Gs("@firebase/app"),Xo="@firebase/app-compat",Qo="@firebase/analytics-compat",ec="@firebase/analytics",tc="@firebase/app-check-compat",rc="@firebase/app-check",nc="@firebase/auth",sc="@firebase/auth-compat",ic="@firebase/database",ac="@firebase/database-compat",oc="@firebase/functions",cc="@firebase/functions-compat",lc="@firebase/installations",uc="@firebase/installations-compat",dc="@firebase/messaging",hc="@firebase/messaging-compat",fc="@firebase/performance",pc="@firebase/performance-compat",mc="@firebase/remote-config",gc="@firebase/remote-config-compat",_c="@firebase/storage",yc="@firebase/storage-compat",vc="@firebase/firestore",bc="@firebase/firestore-compat",wc="firebase",Ic="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]",Ec={[on]:"fire-core",[Xo]:"fire-core-compat",[ec]:"fire-analytics",[Qo]:"fire-analytics-compat",[rc]:"fire-app-check",[tc]:"fire-app-check-compat",[nc]:"fire-auth",[sc]:"fire-auth-compat",[ic]:"fire-rtdb",[ac]:"fire-rtdb-compat",[oc]:"fire-fn",[cc]:"fire-fn-compat",[lc]:"fire-iid",[uc]:"fire-iid-compat",[dc]:"fire-fcm",[hc]:"fire-fcm-compat",[fc]:"fire-perf",[pc]:"fire-perf-compat",[mc]:"fire-rc",[gc]:"fire-rc-compat",[_c]:"fire-gcs",[yc]:"fire-gcs-compat",[vc]:"fire-fst",[bc]:"fire-fst-compat","fire-js":"fire-js",[wc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map,ln=new Map;function Tc(r,e){try{r.container.addComponent(e)}catch(t){st.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function jt(r){const e=r.name;if(ln.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;ln.set(e,r);for(const t of Tr.values())Tc(t,r);return!0}function Ys(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},We=new qt("app","Firebase",kc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=Ic;function Xs(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:cn,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw We.create("bad-app-name",{appName:String(s)});if(t||(t=zs()),!t)throw We.create("no-options");const i=Tr.get(s);if(i){if(Er(t,i.options)&&Er(n,i.config))return i;throw We.create("duplicate-app",{appName:s})}const a=new Do(s);for(const c of ln.values())a.addComponent(c);const o=new Sc(t,n,a);return Tr.set(s,o),o}function Ac(r=cn){const e=Tr.get(r);if(!e&&r===cn&&zs())return Xs();if(!e)throw We.create("no-app",{appName:r});return e}function ft(r,e,t){var n;let s=(n=Ec[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(o.join(" "));return}jt(new yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="firebase-heartbeat-database",xc=1,Ft="firebase-heartbeat-store";let Yr=null;function Qs(){return Yr||(Yr=qo(Cc,xc,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ft)}catch(t){console.warn(t)}}}}).catch(r=>{throw We.create("idb-open",{originalErrorMessage:r.message})})),Yr}async function Rc(r){try{const t=(await Qs()).transaction(Ft),n=await t.objectStore(Ft).get(ei(r));return await t.done,n}catch(e){if(e instanceof Ge)st.warn(e.message);else{const t=We.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(t.message)}}}async function rs(r,e){try{const n=(await Qs()).transaction(Ft,"readwrite");await n.objectStore(Ft).put(e,ei(r)),await n.done}catch(t){if(t instanceof Ge)st.warn(t.message);else{const n=We.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});st.warn(n.message)}}}function ei(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=1024,Nc=30*24*60*60*1e3;class Pc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lc(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ns();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=Nc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ns(),{heartbeatsToSend:n,unsentEntries:s}=Dc(this._heartbeatsCache.heartbeats),i=Ws(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ns(){return new Date().toISOString().substring(0,10)}function Dc(r,e=Oc){const t=[];let n=r.slice();for(const s of r){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ss(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ss(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Lc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Io()?Eo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Rc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ss(r){return Ws(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(r){jt(new yt("platform-logger",e=>new Jo(e),"PRIVATE")),jt(new yt("heartbeat",e=>new Pc(e),"PRIVATE")),ft(on,ts,r),ft(on,ts,"esm2017"),ft("fire-js","")}Mc("");function yn(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function ti(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uc=ti,ri=new qt("auth","Firebase",ti());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Gs("@firebase/auth");function Vc(r,...e){kr.logLevel<=U.WARN&&kr.warn(`Auth (${Kt}): ${r}`,...e)}function ar(r,...e){kr.logLevel<=U.ERROR&&kr.error(`Auth (${Kt}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(r,...e){throw vn(r,...e)}function ge(r,...e){return vn(r,...e)}function ni(r,e,t){const n=Object.assign(Object.assign({},Uc()),{[e]:t});return new qt("auth","Firebase",n).create(e,{appName:r.name})}function jc(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&oe(r,"argument-error"),ni(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vn(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return ri.create(r,...e)}function S(r,e,...t){if(!r)throw vn(e,...t)}function Ce(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ar(e),new Error(e)}function Ne(r,e){r||Ce(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Fc(){return is()==="http:"||is()==="https:"}function is(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fc()||vo()||"connection"in navigator)?navigator.onLine:!0}function $c(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ne(t>e,"Short delay should be less than long delay!"),this.isMobile=yo()||bo()}get(){return Bc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(r,e){Ne(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ce("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ce("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ce("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new Jt(3e4,6e4);function De(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Le(r,e,t,n,s={}){return ii(r,s,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const o=Gt(Object.assign({key:r.config.apiKey},a)).slice(1),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode),si.fetch()(ai(r,r.config.apiHost,t,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ii(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Hc),e);try{const s=new zc(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw nr(r,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const o=i.ok?a.errorMessage:a.error.message,[c,u]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(r,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw nr(r,"email-already-in-use",a);if(c==="USER_DISABLED")throw nr(r,"user-disabled",a);const m=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ni(r,m,u);oe(r,m)}}catch(s){if(s instanceof Ge)throw s;oe(r,"network-request-failed",{message:String(s)})}}async function Yt(r,e,t,n,s={}){const i=await Le(r,e,t,n,s);return"mfaPendingCredential"in i&&oe(r,"multi-factor-auth-required",{_serverResponse:i}),i}function ai(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?bn(r.config,s):`${r.config.apiScheme}://${s}`}function Zc(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(ge(this.auth,"network-request-failed")),Wc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nr(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=ge(r,e,n);return s.customData._tokenResponse=t,s}function as(r){return r!==void 0&&r.enterprise!==void 0}class qc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Zc(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gc(r,e){return Le(r,"GET","/v2/recaptchaConfig",De(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(r,e){return Le(r,"POST","/v1/accounts:delete",e)}async function Jc(r,e){return Le(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yc(r,e=!1){const t=Pe(r),n=await t.getIdToken(e),s=wn(n);S(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:St(Xr(s.auth_time)),issuedAtTime:St(Xr(s.iat)),expirationTime:St(Xr(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xr(r){return Number(r)*1e3}function wn(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ar("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zs(t);return s?JSON.parse(s):(ar("Failed to decode base64 JWT payload"),null)}catch(s){return ar("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xc(r){const e=wn(r);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Ge&&Qc(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Qc({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=St(this.lastLoginAt),this.creationTime=St(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(r){var e;const t=r.auth,n=await r.getIdToken(),s=await Bt(r,Jc(t,{idToken:n}));S(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?nl(i.providerUserInfo):[],o=rl(r.providerData,a),c=r.isAnonymous,u=!(r.email&&i.passwordHash)&&!(o!=null&&o.length),m=c?u:!1,b={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new oi(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(r,b)}async function tl(r){const e=Pe(r);await Sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rl(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function nl(r){return r.map(e=>{var{providerId:t}=e,n=yn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(r,e){const t=await ii(r,{},async()=>{const n=Gt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,a=ai(r,s,"/v1/token",`key=${i}`),o=await r._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",si.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function il(r,e){return Le(r,"POST","/v2/accounts:revokeToken",De(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await sl(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,a=new $t;return n&&(S(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(S(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(S(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $t,this.toJSON())}_performRefresh(){return Ce("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(r,e){S(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class et{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=yn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new el(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Bt(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Yc(this,e)}reload(){return tl(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Sr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bt(this,Kc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,a,o,c,u,m;const b=(n=t.displayName)!==null&&n!==void 0?n:void 0,E=(s=t.email)!==null&&s!==void 0?s:void 0,j=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,H=(a=t.photoURL)!==null&&a!==void 0?a:void 0,be=(o=t.tenantId)!==null&&o!==void 0?o:void 0,we=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,re=(u=t.createdAt)!==null&&u!==void 0?u:void 0,T=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:F,emailVerified:$,isAnonymous:D,providerData:Q,stsTokenManager:Ie}=t;S(F&&Ie,e,"internal-error");const bt=$t.fromJSON(this.name,Ie);S(typeof F=="string",e,"internal-error"),Ue(b,e.name),Ue(E,e.name),S(typeof $=="boolean",e,"internal-error"),S(typeof D=="boolean",e,"internal-error"),Ue(j,e.name),Ue(H,e.name),Ue(be,e.name),Ue(we,e.name),Ue(re,e.name),Ue(T,e.name);const ee=new et({uid:F,auth:e,email:E,emailVerified:$,displayName:b,isAnonymous:D,photoURL:H,phoneNumber:j,tenantId:be,stsTokenManager:bt,createdAt:re,lastLoginAt:T});return Q&&Array.isArray(Q)&&(ee.providerData=Q.map(Ee=>Object.assign({},Ee))),we&&(ee._redirectEventId=we),ee}static async _fromIdTokenResponse(e,t,n=!1){const s=new $t;s.updateFromServerResponse(t);const i=new et({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Sr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Map;function xe(r){Ne(r instanceof Function,"Expected a class definition");let e=os.get(r);return e?(Ne(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,os.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ci.type="NONE";const cs=ci;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(r,e,t){return`firebase:${r}:${e}:${t}`}class pt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=or(this.userKey,s.apiKey,i),this.fullPersistenceKey=or("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pt(xe(cs),e,n);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||xe(cs);const a=or(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const m=await u._get(a);if(m){const b=et._fromJSON(e,m);u!==i&&(o=b),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pt(i,e,n):(i=c[0],o&&await i._set(a,o.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new pt(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(di(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(li(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fi(e))return"Blackberry";if(pi(e))return"Webos";if(In(e))return"Safari";if((e.includes("chrome/")||ui(e))&&!e.includes("edge/"))return"Chrome";if(hi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function li(r=J()){return/firefox\//i.test(r)}function In(r=J()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ui(r=J()){return/crios\//i.test(r)}function di(r=J()){return/iemobile/i.test(r)}function hi(r=J()){return/android/i.test(r)}function fi(r=J()){return/blackberry/i.test(r)}function pi(r=J()){return/webos/i.test(r)}function Nr(r=J()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function al(r=J()){var e;return Nr(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ol(){return wo()&&document.documentMode===10}function mi(r=J()){return Nr(r)||hi(r)||pi(r)||fi(r)||/windows phone/i.test(r)||di(r)}function cl(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(r,e=[]){let t;switch(r){case"Browser":t=ls(J());break;case"Worker":t=`${ls(J())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kt}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((a,o)=>{try{const c=e(i);a(c)}catch(c){o(c)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(r,e={}){return Le(r,"GET","/v2/passwordPolicy",De(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=6;class hl{constructor(e){var t,n,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:dl,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new us(this),this.idTokenSubscription=new us(this),this.beforeStateQueue=new ll(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ri,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xe(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await pt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$c()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Pe(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ul(this),t=new hl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await il(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xe(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(o,this,"internal-error"),o.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Vc(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Me(r){return Pe(r)}class us{constructor(e){this.auth=e,this.observer=null,this.addObserver=Co(t=>this.observer=t)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pl(r){Pr=r}function _i(r){return Pr.loadJS(r)}function ml(){return Pr.recaptchaEnterpriseScript}function gl(){return Pr.gapiScript}function _l(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const yl="recaptcha-enterprise",vl="NO_RECAPTCHA";class bl{constructor(e){this.type=yl,this.auth=Me(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,o)=>{Gc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new qc(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,a(u.siteKey)}}).catch(c=>{o(c)})})}function s(i,a,o){const c=window.grecaptcha;as(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{a(u)}).catch(()=>{a(vl)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{n(this.auth).then(o=>{if(!t&&as(window.grecaptcha))s(o,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ml();c.length!==0&&(c+=o),_i(c).then(()=>{s(o,i,a)}).catch(u=>{a(u)})}}).catch(o=>{a(o)})})}}async function ds(r,e,t,n=!1){const s=new bl(r);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return n?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ar(r,e,t,n){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ds(r,e,t,t==="getOobCode");return n(r,i)}else return n(r,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ds(r,e,t,t==="getOobCode");return n(r,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(r,e){const t=Ys(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Er(i,e??{}))return s;oe(s,"already-initialized")}return t.initialize({options:e})}function Il(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(xe);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function El(r,e,t){const n=Me(r);S(n._canInitEmulator,n,"emulator-config-failed"),S(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=yi(e),{host:a,port:o}=Tl(e),c=o===null?"":`:${o}`;n.config.emulator={url:`${i}//${a}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||kl()}function yi(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Tl(r){const e=yi(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:hs(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:hs(a)}}}function hs(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function kl(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ce("not implemented")}_getIdTokenResponse(e){return Ce("not implemented")}_linkToIdToken(e,t){return Ce("not implemented")}_getReauthenticationResolver(e){return Ce("not implemented")}}async function Sl(r,e){return Le(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(r,e){return Yt(r,"POST","/v1/accounts:signInWithPassword",De(r,e))}async function Cl(r,e){return Le(r,"POST","/v1/accounts:sendOobCode",De(r,e))}async function xl(r,e){return Cl(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(r,e){return Yt(r,"POST","/v1/accounts:signInWithEmailLink",De(r,e))}async function Ol(r,e){return Yt(r,"POST","/v1/accounts:signInWithEmailLink",De(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends En{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ht(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ht(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ar(e,t,"signInWithPassword",Al);case"emailLink":return Rl(e,{email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ar(e,n,"signUpPassword",Sl);case"emailLink":return Ol(e,{idToken:t,email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(r,e){return Yt(r,"POST","/v1/accounts:signInWithIdp",De(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="http://localhost";class it extends En{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new it(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):oe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=yn(t,["providerId","signInMethod"]);if(!n||!s)return null;const a=new it(n,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return mt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,mt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mt(e,t)}buildRequest(){const e={requestUri:Nl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dl(r){const e=Et(Tt(r)).link,t=e?Et(Tt(e)).deep_link_id:null,n=Et(Tt(r)).deep_link_id;return(n?Et(Tt(n)).link:null)||n||t||e||r}class Tn{constructor(e){var t,n,s,i,a,o;const c=Et(Tt(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,m=(n=c.oobCode)!==null&&n!==void 0?n:null,b=Pl((s=c.mode)!==null&&s!==void 0?s:null);S(u&&m&&b,"argument-error"),this.apiKey=u,this.operation=b,this.code=m,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const t=Dl(e);try{return new Tn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.providerId=vt.PROVIDER_ID}static credential(e,t){return Ht._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Tn.parseLink(t);return S(n,"argument-error"),Ht._fromEmailAndCode(e,n.code,n.tenantId)}}vt.PROVIDER_ID="password";vt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends kn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Xt{constructor(){super("facebook.com")}static credential(e){return it._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com";je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Xt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return it._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ae.credential(t,n)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Xt{constructor(){super("github.com")}static credential(e){return it._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.GITHUB_SIGN_IN_METHOD="github.com";Fe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Xt{constructor(){super("twitter.com")}static credential(e,t){return it._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Be.credential(t,n)}catch{return null}}}Be.TWITTER_SIGN_IN_METHOD="twitter.com";Be.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(r,e){return Yt(r,"POST","/v1/accounts:signUp",De(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await et._fromIdTokenResponse(e,n,s),a=fs(n);return new at({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=fs(n);return new at({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function fs(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Ge{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Cr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Cr(e,t,n,s)}}function vi(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Cr._fromErrorAndOperation(r,i,e,n):i})}async function Ml(r,e,t=!1){const n=await Bt(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return at._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(r,e,t=!1){const{auth:n}=r,s="reauthenticate";try{const i=await Bt(r,vi(n,s,e,r),t);S(i.idToken,n,"internal-error");const a=wn(i.idToken);S(a,n,"internal-error");const{sub:o}=a;return S(r.uid===o,n,"user-mismatch"),at._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&oe(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(r,e,t=!1){const n="signIn",s=await vi(r,n,e),i=await at._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function Vl(r,e){return bi(Me(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(r,e,t){var n;S(((n=t.url)===null||n===void 0?void 0:n.length)>0,r,"invalid-continue-uri"),S(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(S(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(S(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(r){const e=Me(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Fl(r,e,t){const n=Me(r),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&jl(n,s,t),await Ar(n,s,"getOobCode",xl)}async function Bl(r,e,t){const n=Me(r),a=await Ar(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ll).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&wi(r),c}),o=await at._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(o.user),o}function $l(r,e,t){return Vl(Pe(r),vt.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&wi(r),n})}function Hl(r,e,t,n){return Pe(r).onIdTokenChanged(e,t,n)}function Wl(r,e,t){return Pe(r).beforeAuthStateChanged(e,t)}function Zl(r,e,t,n){return Pe(r).onAuthStateChanged(e,t,n)}function zl(r){return Pe(r).signOut()}const xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){const r=J();return In(r)||Nr(r)}const Gl=1e3,Kl=10;class Ei extends Ii{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ql()&&cl(),this.fallbackToPolling=mi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);ol()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Kl):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Gl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ei.type="LOCAL";const Jl=Ei;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Ii{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ti.type="SESSION";const ki=Ti;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Dr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(a).map(async u=>u(t.origin,i)),c=await Yl(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((o,c)=>{const u=Sn("",20);s.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(b){const E=b;if(E.data.eventId===u)switch(E.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(E.data.response);break;default:clearTimeout(m),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return window}function Ql(r){_e().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){return typeof _e().WorkerGlobalScope<"u"&&typeof _e().importScripts=="function"}async function eu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tu(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function ru(){return Si()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="firebaseLocalStorageDb",nu=1,Rr="firebaseLocalStorage",Ci="fbase_key";class Qt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lr(r,e){return r.transaction([Rr],e?"readwrite":"readonly").objectStore(Rr)}function su(){const r=indexedDB.deleteDatabase(Ai);return new Qt(r).toPromise()}function dn(){const r=indexedDB.open(Ai,nu);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Rr,{keyPath:Ci})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Rr)?e(n):(n.close(),await su(),e(await dn()))})})}async function ps(r,e,t){const n=Lr(r,!0).put({[Ci]:e,value:t});return new Qt(n).toPromise()}async function iu(r,e){const t=Lr(r,!1).get(e),n=await new Qt(t).toPromise();return n===void 0?null:n.value}function ms(r,e){const t=Lr(r,!0).delete(e);return new Qt(t).toPromise()}const au=800,ou=3;class xi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>ou)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Si()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dr._getInstance(ru()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await eu(),!this.activeServiceWorker)return;this.sender=new Xl(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dn();return await ps(e,xr,"1"),await ms(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ps(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>iu(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ms(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Lr(s,!1).getAll();return new Qt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),au)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xi.type="LOCAL";const cu=xi;new Jt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(r,e){return e?xe(e):(S(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends En{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lu(r){return bi(r.auth,new An(r),r.bypassAuthState)}function uu(r){const{auth:e,user:t}=r;return S(t,e,"internal-error"),Ul(t,new An(r),r.bypassAuthState)}async function du(r){const{auth:e,user:t}=r;return S(t,e,"internal-error"),Ml(t,new An(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lu;case"linkViaPopup":case"linkViaRedirect":return du;case"reauthViaPopup":case"reauthViaRedirect":return uu;default:oe(this.auth,"internal-error")}}resolve(e){Ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new Jt(2e3,1e4);async function fu(r,e,t){const n=Me(r);jc(r,e,kn);const s=Ri(n,t);return new Xe(n,"signInViaPopup",e,s).executeNotNull()}class Xe extends Oi{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Xe.currentPopupAction&&Xe.currentPopupAction.cancel(),Xe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){Ne(this.filter.length===1,"Popup operations only handle one event");const e=Sn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hu.get())};e()}}Xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="pendingRedirect",cr=new Map;class mu extends Oi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=cr.get(this.auth._key());if(!e){try{const n=await gu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}cr.set(this.auth._key(),e)}return this.bypassAuthState||cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gu(r,e){const t=vu(e),n=yu(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function _u(r,e){cr.set(r._key(),e)}function yu(r){return xe(r._redirectPersistence)}function vu(r){return or(pu,r.config.apiKey,r.name)}async function bu(r,e,t=!1){const n=Me(r),s=Ri(n,e),a=await new mu(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=10*60*1e3;class Iu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Eu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ni(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wu&&this.cachedEventUids.clear(),this.cachedEventUids.has(gs(e))}saveEventToCache(e){this.cachedEventUids.add(gs(e)),this.lastProcessedEventTime=Date.now()}}function gs(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Ni({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Eu(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ni(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(r,e={}){return Le(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Su=/^https?/;async function Au(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Tu(r);for(const t of e)try{if(Cu(t))return}catch{}oe(r,"unauthorized-domain")}function Cu(r){const e=un(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Su.test(t))return!1;if(ku.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Jt(3e4,6e4);function _s(){const r=_e().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Ru(r){return new Promise((e,t)=>{var n,s,i;function a(){_s(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_s(),t(ge(r,"network-request-failed"))},timeout:xu.get()})}if(!((s=(n=_e().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_e().gapi)===null||i===void 0)&&i.load)a();else{const o=_l("iframefcb");return _e()[o]=()=>{gapi.load?a():t(ge(r,"network-request-failed"))},_i(`${gl()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw lr=null,e})}let lr=null;function Ou(r){return lr=lr||Ru(r),lr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Jt(5e3,15e3),Pu="__/auth/iframe",Du="emulator/auth/iframe",Lu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uu(r){const e=r.config;S(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?bn(e,Du):`https://${r.config.authDomain}/${Pu}`,n={apiKey:e.apiKey,appName:r.name,v:Kt},s=Mu.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Gt(n).slice(1)}`}async function Vu(r){const e=await Ou(r),t=_e().gapi;return S(t,r,"internal-error"),e.open({where:document.body,url:Uu(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lu,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const a=ge(r,"network-request-failed"),o=_e().setTimeout(()=>{i(a)},Nu.get());function c(){_e().clearTimeout(o),s(n)}n.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fu=500,Bu=600,$u="_blank",Hu="http://localhost";class ys{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wu(r,e,t,n=Fu,s=Bu){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const c=Object.assign(Object.assign({},ju),{width:n.toString(),height:s.toString(),top:i,left:a}),u=J().toLowerCase();t&&(o=ui(u)?$u:t),li(u)&&(e=e||Hu,c.scrollbars="yes");const m=Object.entries(c).reduce((E,[j,H])=>`${E}${j}=${H},`,"");if(al(u)&&o!=="_self")return Zu(e||"",o),new ys(null);const b=window.open(e||"",o,m);S(b,r,"popup-blocked");try{b.focus()}catch{}return new ys(b)}function Zu(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="__/auth/handler",qu="emulator/auth/handler",Gu=encodeURIComponent("fac");async function vs(r,e,t,n,s,i){S(r.config.authDomain,r,"auth-domain-config-required"),S(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Kt,eventId:s};if(e instanceof kn){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Ao(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,b]of Object.entries(i||{}))a[m]=b}if(e instanceof Xt){const m=e.getScopes().filter(b=>b!=="");m.length>0&&(a.scopes=m.join(","))}r.tenantId&&(a.tid=r.tenantId);const o=a;for(const m of Object.keys(o))o[m]===void 0&&delete o[m];const c=await r._getAppCheckToken(),u=c?`#${Gu}=${encodeURIComponent(c)}`:"";return`${Ku(r)}?${Gt(o).slice(1)}${u}`}function Ku({config:r}){return r.emulator?bn(r,qu):`https://${r.authDomain}/${zu}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="webStorageSupport";class Ju{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ki,this._completeRedirectFn=bu,this._overrideRedirectResult=_u}async _openPopup(e,t,n,s){var i;Ne((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await vs(e,t,n,un(),s);return Wu(e,a,Sn())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await vs(e,t,n,un(),s);return Ql(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ne(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Vu(e),n=new Iu(e);return t.register("authEvent",s=>(S(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qr,{type:Qr},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qr];a!==void 0&&t(!!a),oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Au(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mi()||In()||Nr()}}const Yu=Ju;var bs="@firebase/auth",ws="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ed(r){jt(new yt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;S(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gi(r)},u=new fl(n,s,i,c);return Il(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),jt(new yt("auth-internal",e=>{const t=Me(e.getProvider("auth").getImmediate());return(n=>new Xu(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(bs,ws,Qu(r)),ft(bs,ws,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=5*60,rd=qs("authIdTokenMaxAge")||td;let Is=null;const nd=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>rd)return;const s=t==null?void 0:t.token;Is!==s&&(Is=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sd(r=Ac()){const e=Ys(r,"auth");if(e.isInitialized())return e.getImmediate();const t=wl(r,{popupRedirectResolver:Yu,persistence:[cu,Jl,ki]}),n=qs("authTokenSyncURL");if(n){const i=nd(n);Wl(t,i,()=>i(t.currentUser)),Hl(t,a=>i(a))}const s=go("auth");return s&&El(t,`http://${s}`),t}function id(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}pl({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=ge("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",id().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ed("Browser");var ad="firebase",od="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(ad,od,"app");const cd={apiKey:"AIzaSyBKANY6a4hGxduq1k2OTESypfqvoHertv8",authDomain:"interiour-b30ce.firebaseapp.com",projectId:"interiour-b30ce",storageBucket:"interiour-b30ce.appspot.com",messagingSenderId:"204669824299",appId:"1:204669824299:web:b8aa0e40fd28708167a96e"},ld=Xs(cd),lt=sd(ld),Es=new Ae;function ud(r){return Fi({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(r)}const md=()=>{const[r,e]=tr.useState(null),[t,n]=tr.useState(!0),[s,i]=tr.useState("");tr.useEffect(()=>{const T=Zl(lt,F=>{e(F)});return()=>T()},[]);const a=zr.object({email:zr.string().email("Email must be a valid email"),password:zr.string().min(6,"Password must be at least 6 characters").max(16,"Password must not exceed 16 characters")}),{register:o,handleSubmit:c,formState:{errors:u,isSubmitting:m},reset:b}=ia({resolver:oo(a)}),E=async T=>{await new Promise(F=>setTimeout(F,1e3));try{t?j(T):H(T)}catch(F){const $=F.code,D=F.message;console.log($,D),i(D)}},j=async({email:T,password:F})=>{try{const D=(await Bl(lt,T,F)).user;i(""),b()}catch($){const D=$.code,Q=$.message;console.error(D,Q),i(Q)}},H=async({email:T,password:F})=>{try{const D=(await $l(lt,Es)).user;i(""),b()}catch($){const D=$.code,Q=$.message;D.includes("auth/invalid-credential")?i("Email or password is incorrect"):(i("An unexpected error occurred. Please try again."),console.error(D,Q))}},be=async()=>{try{const F=(await fu(lt,Es)).user;b()}catch(T){console.log(T)}},we=()=>{zl(lt).then(()=>console.log("Sign Out")).catch(T=>console.error(T))},re=()=>{const T=prompt("Please enter your emal");Fl(lt,T),alert(T?"Email sent! Check your inbox for password reset instructions and then go back to sign in again with your new password. We are waiting for you!":"Password reset canceled.")};return O.jsx(O.Fragment,{children:O.jsx("section",{className:"login-wrapper",children:r?O.jsxs(O.Fragment,{children:[O.jsx("h5",{className:"",children:"You have successfully registered!"}),O.jsx(Vn,{to:"/",className:"home-page",children:"Home Page"}),O.jsx(Vn,{to:"/",className:"sign-out",onClick:we,children:"Sign out"})]}):O.jsxs(O.Fragment,{children:[O.jsxs("header",{className:"login-header",children:[O.jsx("h5",{children:"Welcome!"}),O.jsxs("h6",{children:[O.jsx("a",{className:"sign-in-link",onClick:()=>n(!0),children:"Create an account"})," or  ",O.jsx("a",{className:"sign-in-link",onClick:()=>n(!1),children:"Log in"})]})]}),O.jsxs("div",{className:"form-wrapper",children:[O.jsxs("form",{onSubmit:c(E),children:[t&&O.jsx("legend",{className:"title-sign-in",children:" Create an account"}),!t&&O.jsx("legend",{className:"title-sign-in",children:" Log In"}),s.includes("auth/email-already-in-use")?O.jsxs("p",{className:"error-message",children:["Such a user is already registered. Maybe you want to ",O.jsx("a",{onClick:()=>n(!1),children:"Log in"})," ?"]}):O.jsx("p",{className:"error-message",children:s}),O.jsxs("div",{className:"input-wrapper",children:[O.jsx("input",{...o("email"),className:"input",name:"email",autoComplete:"on",type:"text",placeholder:"Your Email",autoFocus:!0}),O.jsx("div",{className:"error-message",children:u.email&&O.jsx("p",{children:u.email.message})})]}),O.jsxs("div",{className:"input-wrapper",children:[O.jsx("input",{...o("password"),className:"input",id:"password",name:"password",autoComplete:"on",type:"password",placeholder:"Your Password"}),O.jsx("div",{className:"error-message",children:u.password&&O.jsx("p",{children:u.password.message})})]}),O.jsx("button",{type:"submit",disabled:m,className:"login-btn",children:O.jsx("span",{children:m?"Loading...":t?"Create an account":"Log In"})})]}),O.jsxs("button",{className:"google-btn",onClick:be,children:[O.jsx("span",{children:"Sign in with Google"}),O.jsx(ud,{className:"google-icon"})]})]}),O.jsx("p",{onClick:re,className:"forgot-password",children:"Forgot Password?"})]})})})};export{md as default};
