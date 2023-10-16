"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5516],{75286:(he,N,n)=>{n.d(N,{N:()=>D});var e=n(27279);function D(C,I){const[F,h]=e.useState(C);return e.useEffect(()=>{const Z=setTimeout(()=>{h(C)},I);return()=>{clearTimeout(Z)}},[C,I]),F}},9117:(he,N,n)=>{n.r(N),n.d(N,{MarketPlacePage:()=>ue,default:()=>vt});var e=n(27279),D=n(27997),C=n(73354),I=n(74758),F=n(69878),h=n(10701),Z=n(94098),P=n(93415),ve=n(31624),V=n(61908),g=n(23604),Ee=n(364),v=n(61020),Me=n(49402),ye=n(75286),ke=n(36364),R=n(50703),be=n(12997),Y=n(48157);const Se=()=>{const{formatMessage:a}=(0,v.Z)(),{trackUsage:s}=(0,g.rS)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>s("didMissMarketplacePlugin")},e.createElement(g.Y_,{title:a({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:a({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(be.Z,null),iconBackground:"alternative100",endAction:e.createElement(R.J,{as:Y.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var Re=n(35157),w=n(48102),Ce=n(95066),Te=n(57121),xe=n(70627),t=n.n(xe),T=n(72450),Ze=n(8990),K=n(5627),X=n(78955);const _=({message:a,value:s,onChange:i,possibleFilters:l,onClear:r,customizeContent:d})=>{const o=(c,u)=>`${c} (${u})`;return e.createElement(K.P,{"data-testid":`${a}-button`,label:a,placeholder:a,size:"M",onChange:i,onClear:r,value:s,customizeContent:d,multi:!0},Object.entries(l).map(([c,u])=>e.createElement(X.W,{"data-testid":`${c}-${u}`,key:c,value:c},o(c,u))))};_.propTypes={message:t().string.isRequired,value:t().array.isRequired,onChange:t().func.isRequired,possibleFilters:t().object.isRequired,onClear:t().func.isRequired,customizeContent:t().func.isRequired};const ee=_,te=({source:a,onToggle:s,query:i,npmPackageType:l,possibleCategories:r,possibleCollections:d,handleSelectChange:o,handleSelectClear:c})=>{const{formatMessage:u}=(0,v.Z)();return e.createElement(Ze.J2,{source:a,onDismiss:s,padding:3,spacing:4},e.createElement(De,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ee,{message:u({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:i?.collections||[],onChange:m=>{o({collections:m})},onClear:()=>c("collections"),possibleFilters:d,customizeContent:m=>u({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:m.length})}),l==="plugin"&&e.createElement(ee,{message:u({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:i?.categories||[],onChange:m=>{o({categories:m})},onClear:()=>c("categories"),possibleFilters:r,customizeContent:m=>u({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:m.length}),name:"categories"})))};te.propTypes={onToggle:t().func.isRequired,source:t().shape({current:t().instanceOf(Element)}).isRequired,query:t().object.isRequired,npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const Ne=te,De=(0,T.ZP)(h.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,z=({name:a,handleRemove:s})=>e.createElement(P.x,{padding:1},e.createElement(Re.V,{icon:e.createElement(Ce.Z,null),onClick:s},a)),Ie=(0,T.ZP)(w.z)`
  height: ${({theme:a})=>a.sizes.input.S};
`,ae=({possibleCollections:a,possibleCategories:s,npmPackageType:i,query:l,handleSelectClear:r,handleSelectChange:d})=>{const[o,c]=(0,e.useState)(!1),u=(0,e.useRef)(),{formatMessage:m}=(0,v.Z)(),f=()=>c(p=>!p),E=(p,M)=>{const b={[M]:l[M].filter(x=>x!==p)};d(b)};return e.createElement(e.Fragment,null,e.createElement(P.x,{paddingTop:1,paddingBottom:1},e.createElement(Ie,{variant:"tertiary",ref:u,startIcon:e.createElement(Te.Z,null),onClick:f,size:"S"},m({id:"app.utils.filters",defaultMessage:"Filters"})),o&&e.createElement(Ne,{onToggle:f,source:u,query:l,handleSelectClear:r,handleSelectChange:d,possibleCollections:a,possibleCategories:s,npmPackageType:i})),l.collections?.map(p=>e.createElement(z,{name:p,key:p,handleRemove:()=>E(p,"collections")})),i==="plugin"&&l.categories?.map(p=>e.createElement(z,{name:p,key:p,handleRemove:()=>E(p,"categories")})))};z.propTypes={name:t().string.isRequired,handleRemove:t().func.isRequired},ae.propTypes={npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,query:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const $e=ae;var Le=n(77970),Oe=n(23298),Be=n(74577),k=n(32370),je=n(52448),Fe=n(87393);const Ve=(0,T.ZP)(P.x)`
  background: ${({theme:a})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${a.colors.neutral150} 100%)`};
  opacity: 0.33;
`,we=()=>e.createElement(Fe.M,null,Array(12).fill(null).map((a,s)=>e.createElement(Ve,{key:`empty-plugin-card-${s}`,height:"234px",hasRadius:!0}))),ne=({content:a})=>e.createElement(P.x,{position:"relative"},e.createElement(we,null),e.createElement(P.x,{position:"absolute",top:11,width:"100%"},e.createElement(h.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(R.J,{as:je.Z,color:"",width:"160px",height:"88px"}),e.createElement(P.x,{paddingTop:6},e.createElement(k.Z,{variant:"delta",as:"p",textColor:"neutral600"},a)))));ne.propTypes={content:t().string.isRequired};const ze=ne;var A=n(2981),se=n(37370),Ae=n(15398),Qe=n(6699),Ge=n.n(Qe),Ue=n(61473),He=n(59082),re=n(78031),qe=n(96487),ie=n.n(qe);const $=({description:a,installMessage:s,disabled:i,handleCopy:l,pluginName:r})=>e.createElement(A.u,{"data-testid":`tooltip-${r}`,description:a},e.createElement(P.x,null,e.createElement(w.z,{size:"S",startIcon:e.createElement(re.Z,null),variant:"secondary",disabled:i,onClick:l},s))),Q=({strapiPeerDepVersion:a,strapiAppVersion:s,handleCopy:i,pluginName:l})=>{const{formatMessage:r}=(0,v.Z)(),d=ie().validRange(a),o=ie().satisfies(s,d),c=r({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(s){if(!d)return e.createElement($,{installMessage:c,pluginName:l,description:r({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:s}),handleCopy:i});if(!o)return e.createElement($,{installMessage:c,pluginName:l,description:r({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:s,versionRange:d}),disabled:!0})}return e.createElement(w.z,{size:"S",startIcon:e.createElement(re.Z,null),variant:"secondary",onClick:i},c)};$.defaultProps={disabled:!1,handleCopy:null},$.propTypes={description:t().string.isRequired,installMessage:t().string.isRequired,disabled:t().bool,handleCopy:t().func,pluginName:t().string.isRequired},Q.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},Q.propTypes={strapiAppVersion:t().string,strapiPeerDepVersion:t().string,handleCopy:t().func.isRequired,pluginName:t().string.isRequired};const Je=Q,G=({isInstalled:a,isInDevelopmentMode:s,commandToCopy:i,strapiAppVersion:l,strapiPeerDepVersion:r,pluginName:d})=>{const o=(0,g.lm)(),{formatMessage:c}=(0,v.Z)(),{trackUsage:u}=(0,g.rS)(),{copy:m}=(0,g.VP)(),f=async()=>{await m(i)&&(u("willInstallPlugin"),o({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return a?e.createElement(P.x,{paddingLeft:4},e.createElement(R.J,{as:He.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(k.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},c({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):s?e.createElement(Je,{strapiAppVersion:l,strapiPeerDepVersion:r,handleCopy:f,pluginName:d}):null};G.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},G.propTypes={isInstalled:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,commandToCopy:t().string.isRequired,strapiAppVersion:t().string,strapiPeerDepVersion:t().string,pluginName:t().string.isRequired};const We=G;var Ye=n(84366),Ke=n(66770),Xe=n(39142),_e=n(33766);const et=(0,T.ZP)(Ye.i)`
  width: ${(0,g.Q1)(12)};
  transform: rotate(90deg);
`,U=({githubStars:a,npmDownloads:s,npmPackageType:i})=>{const{formatMessage:l}=(0,v.Z)();return e.createElement(h.k,{gap:1},!!a&&e.createElement(e.Fragment,null,e.createElement(R.J,{as:Ke.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),"aria-hidden":!0}),e.createElement(R.J,{as:Xe.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":l({id:`admin.pages.MarketPlacePage.${i}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:a,package:i})},e.createElement(k.Z,{variant:"pi",textColor:"neutral800"},a)),e.createElement(et,{unsetMargin:!1,background:"neutral200"})),e.createElement(R.J,{as:_e.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":l({id:`admin.pages.MarketPlacePage.${i}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:s,package:i})},e.createElement(k.Z,{variant:"pi",textColor:"neutral800"},s)))};U.defaultProps={githubStars:0,npmDownloads:0},U.propTypes={githubStars:t().number,npmDownloads:t().number,npmPackageType:t().string.isRequired};const tt=U,at=(0,T.ZP)(k.Z)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`,H=({npmPackage:a,isInstalled:s,useYarn:i,isInDevelopmentMode:l,npmPackageType:r,strapiAppVersion:d})=>{const{attributes:o}=a,{formatMessage:c}=(0,v.Z)(),{trackUsage:u}=(0,g.rS)(),m=i?`yarn add ${o.npmPackageName}`:`npm install ${o.npmPackageName}`,f=c({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),E=`https://market.strapi.io/${Ge().plural(r)}/${o.slug}`;return e.createElement(h.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(P.x,null,e.createElement(h.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(P.x,{as:"img",src:o.logo.url,alt:`${o.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(tt,{githubStars:o.githubStars,npmDownloads:o.npmDownloads,npmPackageType:r})),e.createElement(P.x,{paddingTop:4},e.createElement(k.Z,{as:"h3",variant:"delta"},e.createElement(h.k,{alignItems:"center"},o.name,o.validated&&!o.madeByStrapi&&e.createElement(A.u,{description:c({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(h.k,null,e.createElement(R.J,{as:Ae.Z,marginLeft:2,color:"success600"}))),o.madeByStrapi&&e.createElement(A.u,{description:f},e.createElement(h.k,null,e.createElement(P.x,{as:"img",src:Ue,alt:f,marginLeft:1,width:6,height:"auto"})))))),e.createElement(P.x,{paddingTop:2},e.createElement(at,{as:"p",variant:"omega",textColor:"neutral600"},o.description))),e.createElement(h.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(se.Q,{size:"S",href:E,isExternal:!0,endIcon:e.createElement(Y.Z,null),"aria-label":c({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:o.name}),variant:"tertiary",onClick:()=>u("didPluginLearnMore")},c({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(We,{isInstalled:s,isInDevelopmentMode:l,commandToCopy:m,strapiAppVersion:d,strapiPeerDepVersion:o.strapiVersion,pluginName:o.name})))};H.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},H.propTypes={npmPackage:t().shape({id:t().string.isRequired,attributes:t().shape({name:t().string.isRequired,description:t().string.isRequired,slug:t().string.isRequired,npmPackageName:t().string.isRequired,npmPackageUrl:t().string.isRequired,repositoryUrl:t().string.isRequired,logo:t().object.isRequired,developerName:t().string.isRequired,validated:t().bool.isRequired,madeByStrapi:t().bool.isRequired,strapiCompatibility:t().oneOf(["v3","v4"]),strapiVersion:t().string,githubStars:t().number,npmDownloads:t().number}).isRequired}).isRequired,isInstalled:t().bool.isRequired,useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool,npmPackageType:t().string.isRequired,strapiAppVersion:t().string};const nt=H,q=({status:a,npmPackages:s,installedPackageNames:i,useYarn:l,isInDevelopmentMode:r,npmPackageType:d,strapiAppVersion:o,debouncedSearch:c})=>{const{formatMessage:u}=(0,v.Z)();if(a==="error")return e.createElement(h.k,{paddingTop:8},e.createElement(g.Hn,null));if(a==="loading")return e.createElement(h.k,{justifyContent:"center",paddingTop:8},e.createElement(Le.a,null,"Loading content..."));const m=u({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:c});return s.length===0?e.createElement(ze,{content:m}):e.createElement(Oe.r,{gap:4},s.map(f=>e.createElement(Be.P,{col:4,s:6,xs:12,style:{height:"100%"},key:f.id},e.createElement(nt,{npmPackage:f,isInstalled:i.includes(f.attributes.npmPackageName),useYarn:l,isInDevelopmentMode:r,npmPackageType:d,strapiAppVersion:o}))))};q.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},q.propTypes={status:t().string.isRequired,npmPackages:t().array,installedPackageNames:t().arrayOf(t().string),useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,npmPackageType:t().string.isRequired,strapiAppVersion:t().string,debouncedSearch:t().string};const le=q,oe=({pagination:a})=>e.createElement(P.x,{paddingTop:4},e.createElement(h.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(g.v4,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(g.tU,{pagination:a})));oe.propTypes={pagination:t().shape({page:t().number.isRequired,pageCount:t().number.isRequired,pageSize:t().number.isRequired,total:t().number.isRequired}).isRequired};const st=oe,rt=n.p+"9d5d788027e86620c234.svg";var it=n(27875),lt=n(70521);const J=({isOnline:a,npmPackageType:s})=>{const{formatMessage:i}=(0,v.Z)(),{trackUsage:l}=(0,g.rS)(),r=s==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(it.T,{title:i({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:i({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:a&&e.createElement(se.Q,{startIcon:e.createElement(lt.Z,null),variant:"tertiary",href:`https://market.strapi.io/submit-${s}`,onClick:()=>l(r),isExternal:!0},i({id:`admin.pages.MarketPlacePage.submit.${s}.link`,defaultMessage:`Submit ${s}`}))})},ce=J;J.defaultProps={npmPackageType:"plugin"},J.propTypes={isOnline:t().bool.isRequired,npmPackageType:t().string};const ot=()=>{const{formatMessage:a}=(0,v.Z)();return e.createElement(D.A,null,e.createElement(C.o,null,e.createElement(ce,{isOnline:!1}),e.createElement(h.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,g.Q1)(120)},e.createElement(P.x,{paddingBottom:2},e.createElement(k.Z,{textColor:"neutral700",variant:"alpha"},a({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(P.x,{paddingBottom:6},e.createElement(k.Z,{textColor:"neutral700",variant:"epsilon"},a({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:rt,alt:"offline",style:{width:"88px",height:"88px"}}))))},ct=(0,T.ZP)(P.x)`
  font-weight: ${({theme:a})=>a.fontWeights.semiBold};

  span {
    font-size: ${({theme:a})=>a.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,de=({sortQuery:a,handleSelectChange:s})=>{const{formatMessage:i}=(0,v.Z)(),l={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(ct,null,e.createElement(K.P,{size:"S",id:"sort-by-select",value:a,customizeContent:()=>i(l[a].selected),onChange:r=>{s({sort:r})},label:i({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(l).map(([r,d])=>e.createElement(X.W,{key:r,value:r},i(d.option)))))};de.propTypes={sortQuery:t().string.isRequired,handleSelectChange:t().func.isRequired};const dt=de,gt=()=>{const a=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[s,i]=e.useState(a),l=()=>i(!0),r=()=>i(!1);return e.useEffect(()=>(window.addEventListener("online",l),window.addEventListener("offline",r),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",r)}),[]),s};var pt=n(51926),ut=n(29206),L=n.n(ut),ge=n(40464);const pe="https://market-api.strapi.io",mt=(a,s={})=>{const i=(0,g.lm)();return(0,ge.useQuery)(["marketplace","plugins",s],async()=>{try{const l=L().stringify(L().parse(s)),r=await fetch(`${pe}/plugins?${l}`);if(!r.ok)throw new Error("Failed to fetch marketplace plugins.");return await r.json()}catch{}return null},{onSuccess(){a&&a()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},ft=(a,s={})=>{const i=(0,g.lm)();return(0,ge.useQuery)(["marketplace","providers",s],async()=>{try{const l=L().stringify(L().parse(s)),r=await fetch(`${pe}/providers?${l}`);if(!r.ok)throw new Error("Failed to fetch marketplace providers.");return await r.json()}catch{}return null},{onSuccess(){a&&a()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function Pt({npmPackageType:a,debouncedSearch:s,query:i,tabQuery:l}){const{notifyStatus:r}=(0,pt.G)(),{formatMessage:d}=(0,v.Z)(),o=d({id:"global.marketplace",defaultMessage:"Marketplace"}),c=()=>{r(d({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:o}))},u={page:i?.page||1,pageSize:i?.pageSize||24},{data:m,status:f}=mt(c,{...l.plugin,pagination:u,search:s}),{data:E,status:p}=ft(c,{...l.provider,pagination:u,search:s}),M=a==="plugin"?m:E,b=a==="plugin"?f:p,[x,O]=(0,e.useState)({}),[B,j]=(0,e.useState)({});(0,e.useEffect)(()=>{b==="success"&&O(M.meta.collections),f==="success"&&j(m.meta.categories)},[m?.meta.categories,f,M?.meta.collections,b]);const{pagination:W}=b==="success"?M.meta:{};return{pluginsResponse:m,providersResponse:E,pluginsStatus:f,providersStatus:p,possibleCollections:x,possibleCategories:B,pagination:W}}const ht=Pt,ue=()=>{const{formatMessage:a}=(0,v.Z)(),{trackUsage:s}=(0,g.rS)(),i=(0,e.useRef)(s),l=(0,g.lm)(),[{query:r},d]=(0,g.Kx)(),o=(0,ye.N)(r?.search,500)||"",{autoReload:c,dependencies:u,useYarn:m,strapiVersion:f}=(0,g.L7)(),E=gt(),p=r?.npmPackageType||"plugin",[M,b]=(0,e.useState)({plugin:p==="plugin"?{...r}:{},provider:p==="provider"?{...r}:{}});(0,g.go)(),(0,e.useEffect)(()=>{i.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{c||l({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"}})},[l,c]);const{pluginsResponse:x,providersResponse:O,pluginsStatus:B,providersStatus:j,possibleCollections:W,possibleCategories:Et,pagination:me}=ht({npmPackageType:p,debouncedSearch:o,query:r,tabQuery:M});if(!E)return e.createElement(ot,null);const Mt=S=>{const y=S===0?"plugin":"provider",kt=M[y]&&Object.keys(M[y]).length;d(kt?{...M[y],search:r?.search||"",npmPackageType:y,page:1}:{npmPackageType:y,collections:[],categories:[],sort:"name:asc",page:1,search:r?.search||""})},fe=S=>{d({...S,page:1}),b(y=>({...y,[p]:{...y[p],...S}}))},yt=S=>{d({[S]:[],page:null},"remove"),b(y=>({...y,[p]:{}}))},Pe=Object.keys(u);return e.createElement(D.A,null,e.createElement(C.o,null,e.createElement(Ee.q,{title:a({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(ce,{isOnline:E,npmPackageType:p}),e.createElement(I.D,null,e.createElement(F.v,{label:a({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(p),onTabChange:Mt},e.createElement(h.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(Z.m,null,e.createElement(Z.O,null,a({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",B==="success"?`(${x.meta.pagination.total})`:"..."),e.createElement(Z.O,null,a({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",j==="success"?`(${O.meta.pagination.total})`:"...")),e.createElement(P.x,{width:"25%"},e.createElement(ve.w,{name:"searchbar",onClear:()=>d({search:"",page:1}),value:r?.search,onChange:S=>d({search:S.target.value,page:1}),clearLabel:a({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(h.k,{paddingBottom:4,gap:2},e.createElement(dt,{sortQuery:r?.sort||"name:asc",handleSelectChange:fe}),e.createElement($e,{npmPackageType:p,possibleCollections:W,possibleCategories:Et,query:r||{},handleSelectChange:fe,handleSelectClear:yt})),e.createElement(V.n,null,e.createElement(V.x,null,e.createElement(le,{npmPackages:x?.data,status:B,installedPackageNames:Pe,useYarn:m,isInDevelopmentMode:c,npmPackageType:"plugin",strapiAppVersion:f,debouncedSearch:o})),e.createElement(V.x,null,e.createElement(le,{npmPackages:O?.data,status:j,installedPackageNames:Pe,useYarn:m,isInDevelopmentMode:c,npmPackageType:"provider",debouncedSearch:o})))),me&&e.createElement(st,{pagination:me}),e.createElement(P.x,{paddingTop:8},e.createElement(Se,null)))))},vt=()=>{const a=(0,Me.v9)(ke._);return e.createElement(g.O4,{permissions:a.marketplace.main},e.createElement(ue,null))}}}]);
