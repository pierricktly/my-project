"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[801],{84044:(K,P,n)=>{n.r(P),n.d(P,{default:()=>en});var e=n(27279),o=n(23604),N=n(98934),U=n.n(N),C=n(40464);const D={i8:"4.14.4"};var I=n(20838),k=n(96854),A=n(1821),O=n(2637),p=n(10701),f=n(32370),v=n(93415),ne=n(4987),ae=n(2878),se=n(10989),Le=n(77804),be=n(39708),Q=n(48102),V=n(95066),oe=n(71563),W=n(61020),S=n(72450),Y=n(47853),Oe=n(66858);const xe=(0,S.ZP)(A.g)`
  height: ${32/16}rem;
  width: ${32/16}rem;

  > label,
  ~ input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  > label {
    color: inherit;
    cursor: pointer;
    padding: ${({theme:t})=>t.spaces[2]};
    text-align: center;
    vertical-align: middle;
  }

  &:hover,
  &:focus-within {
    background-color: ${({theme:t})=>t.colors.neutral0};
  }

  &:active,
  &.selected {
    color: ${({theme:t})=>t.colors.primary700};
    background-color: ${({theme:t})=>t.colors.neutral0};
    border-color: ${({theme:t})=>t.colors.primary700};
  }
`,w={postResponse:90*24*60*60*1e3,postFirstDismissal:7*24*60*60*1e3,postSubsequentDismissal:90*24*60*60*1e3,display:5*60*1e3},ke=[...Array(11).keys()],Be=t=>{const{enabled:a,lastResponseDate:s,firstDismissalDate:i,lastDismissalDate:d}=t;return a===!1?!1:s?Date.now()-new Date(s).getTime()>=w.postResponse:d?Date.now()-new Date(d).getTime()>=w.postSubsequentDismissal:i?Date.now()-new Date(i).getTime()>=w.postFirstDismissal:!0},Ze=()=>{const t=(0,S.Fg)(),{formatMessage:a}=(0,W.Z)(),{npsSurveySettings:s,setNpsSurveySettings:i}=(0,Oe.$)(),[d,u]=e.useState(!1),E=(0,o.lm)(),{currentEnvironment:m,strapiVersion:h}=(0,o.L7)(),{mutate:c,isLoading:M}=(0,C.useMutation)(async g=>{const y=await fetch("https://analytics.strapi.io/submit-nps",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!y.ok)throw new Error("Failed to submit NPS survey");return y},{onSuccess(){i(g=>({...g,lastResponseDate:new Date,firstDismissalDate:null,lastDismissalDate:null})),u(!0),setTimeout(()=>{B(!1)},3e3)},onError(){E({type:"warning",message:a({id:"notification.error"})})}}),[x,B]=e.useState(Be(s)),[F,Z]=e.useState(!1);if(e.useEffect(()=>{const g=setTimeout(()=>{Z(!0)},w.display);return()=>{clearTimeout(g)}},[]),!F||!x)return null;const R=({npsSurveyRating:g,npsSurveyFeedback:y})=>{const{email:L}=o.I8.getUserInfo();c({email:L,rating:g,comment:y,environment:m,version:h,license:window.strapi.projectType})},G=()=>{i(g=>{const y={...g,lastResponseDate:null};return g.firstDismissalDate?y.lastDismissalDate=new Date:y.firstDismissalDate=new Date,y}),B(!1)};return e.createElement(O.h,null,e.createElement(oe.J9,{initialValues:{npsSurveyFeedback:"",npsSurveyRating:null},onSubmit:R,validationSchema:Y.Ry({npsSurveyFeedback:Y.Z_(),npsSurveyRating:Y.Rx().required()})},({values:g,handleChange:y,setFieldValue:L})=>e.createElement(oe.l0,{name:"npsSurveyForm"},e.createElement(p.k,{hasRadius:!0,direction:"column",padding:4,borderColor:"primary200",background:"neutral0",shadow:"popupShadow",position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",zIndex:t.zIndices[2],width:"50%"},d?e.createElement(f.Z,{fontWeight:"semiBold"},a({id:"app.components.NpsSurvey.feedback-response",defaultMessage:"Thank you very much for your feedback!"})):e.createElement(v.x,{as:"fieldset",width:"100%"},e.createElement(p.k,{justifyContent:"space-between",width:"100%"},e.createElement(v.x,{marginLeft:"auto",marginRight:"auto"},e.createElement(f.Z,{fontWeight:"semiBold",as:"legend"},a({id:"app.components.NpsSurvey.banner-title",defaultMessage:"How likely are you to recommend Strapi to a friend or colleague?"}))),e.createElement(ne.h,{onClick:G,"aria-label":a({id:"app.components.NpsSurvey.dismiss-survey-label",defaultMessage:"Dismiss survey"}),icon:e.createElement(V.Z,null)})),e.createElement(p.k,{gap:2,marginTop:2,marginBottom:2,justifyContent:"center"},e.createElement(f.Z,{variant:"pi",textColor:"neutral600"},a({id:"app.components.NpsSurvey.no-recommendation",defaultMessage:"Not at all likely"})),ke.map(r=>e.createElement(xe,{key:r,className:g.npsSurveyRating===r?"selected":null,hasRadius:!0,background:"primary100",borderColor:"primary200",color:"primary600",position:"relative",cursor:"pointer"},e.createElement(ae.Q,{htmlFor:`nps-survey-rating-${r}-input`},e.createElement(se.T,null,e.createElement(Le._,{type:"radio",id:`nps-survey-rating-${r}-input`,name:"npsSurveyRating",checked:g.npsSurveyRating===r,onChange:b=>L("npsSurveyRating",parseInt(b.target.value,10)),value:r})),r))),e.createElement(f.Z,{variant:"pi",textColor:"neutral600"},a({id:"app.components.NpsSurvey.happy-to-recommend",defaultMessage:"Extremely likely"}))),g.npsSurveyRating!==null&&e.createElement(p.k,{direction:"column"},e.createElement(v.x,{marginTop:2},e.createElement(ae.Q,{htmlFor:"npsSurveyFeedback",fontWeight:"semiBold",fontSize:2},a({id:"app.components.NpsSurvey.feedback-question",defaultMessage:"Do you have any suggestion for improvements?"}))),e.createElement(v.x,{width:"62%",marginTop:3,marginBottom:4},e.createElement(be.g,{id:"npsSurveyFeedback",width:"100%",onChange:y},g.npsSurveyFeedback)),e.createElement(Q.z,{marginBottom:2,type:"submit",loading:M},a({id:"app.components.NpsSurvey.submit-feedback",defaultMessage:"Submit Feedback"}))))))))};var Ne=n(67621),We=n(92241),H=n(49402),T=n(51447),Fe=n(33812),re=n.n(Fe),Ge=n(99571),ie=n(45553),Ue=n(70627),l=n.n(Ue);const je=(0,S.ZP)(p.k)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,le=({onClose:t,onSkip:a,children:s,hideSkip:i})=>{const{formatMessage:d}=(0,W.Z)();return e.createElement(O.h,null,e.createElement(je,{onClick:t,padding:8,justifyContent:"center"},e.createElement(ie.i,{onEscape:t},e.createElement(p.k,{direction:"column",alignItems:"stretch",background:"neutral0",width:(0,o.Q1)(660),shadow:"popupShadow",hasRadius:!0,padding:4,gap:8,role:"dialog","aria-modal":!0,onClick:u=>u.stopPropagation()},e.createElement(p.k,{justifyContent:"flex-end"},e.createElement(ne.h,{onClick:t,"aria-label":d({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(V.Z,null)})),e.createElement(v.x,{paddingLeft:7,paddingRight:7,paddingBottom:i?8:0},s),!i&&e.createElement(p.k,{justifyContent:"flex-end"},e.createElement(Q.z,{variant:"tertiary",onClick:a},d({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};le.propTypes={children:l().node.isRequired,onClose:l().func.isRequired,onSkip:l().func.isRequired,hideSkip:l().bool.isRequired};const $e=le;var ce=n(53274),j=n(16334),J=n(43234);const ze=S.ZP.li`
  list-style: disc;
  &::marker {
    color: ${({theme:t})=>t.colors.neutral800};
  }
`,de=({id:t,defaultMessage:a})=>{const{formatMessage:s}=(0,W.Z)();return e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:4,paddingBottom:6},s({id:t,defaultMessage:a},{documentationLink:Ke,b:Qe,p:we,light:He,ul:Ve,li:Ye}))},Ke=t=>e.createElement(f.Z,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},t),Qe=t=>e.createElement(f.Z,{fontWeight:"semiBold"},t),we=t=>e.createElement(f.Z,null,t),He=t=>e.createElement(f.Z,{textColor:"neutral600"},t),Ve=t=>e.createElement(v.x,{paddingLeft:6},e.createElement("ul",null,t)),Ye=t=>e.createElement(ze,null,t);de.propTypes={id:l().string.isRequired,defaultMessage:l().string.isRequired};const Je=de;var Xe=n(2364);const X=({number:t,last:a,type:s})=>e.createElement(v.x,{paddingTop:3,paddingBottom:a?0:3},e.createElement(Xe.Z,{number:t,type:s}));X.defaultProps={number:void 0,last:!1,type:""},X.propTypes={number:l().number,last:l().bool,type:l().string};const ue=X,q=({title:t,content:a,cta:s,onCtaClick:i,sectionIndex:d,stepIndex:u,hasSectionAfter:E})=>{const{formatMessage:m}=(0,W.Z)(),h=d>0,c=u>0,M=d+1;return e.createElement(e.Fragment,null,e.createElement(p.k,{alignItems:"stretch"},e.createElement(p.k,{marginRight:8,justifyContent:"center",minWidth:(0,o.Q1)(30)},h&&e.createElement(J.Z,{type:j.hx,minHeight:(0,o.Q1)(24)})),e.createElement(f.Z,{variant:"sigma",textColor:"primary600"},m({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(p.k,null,e.createElement(p.k,{marginRight:8,minWidth:(0,o.Q1)(30)},e.createElement(ue,{number:d+1,type:c?j.hx:j.lW})),e.createElement(f.Z,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},m(t))),e.createElement(p.k,{alignItems:"stretch"},e.createElement(p.k,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,o.Q1)(30)},E&&e.createElement(e.Fragment,null,e.createElement(J.Z,{type:j.hx}),c&&e.createElement(ue,{number:M+1,type:j.lW,last:!0}))),e.createElement(v.x,null,e.createElement(Je,{...a}),s&&(s.target?e.createElement(o.Qj,{endIcon:e.createElement(ce.Z,null),onClick:i,to:s.target},m(s.title)):e.createElement(Q.z,{endIcon:e.createElement(ce.Z,null),onClick:i},m(s.title))))),c&&E&&e.createElement(v.x,{paddingTop:3},e.createElement(p.k,{marginRight:8,justifyContent:"center",width:(0,o.Q1)(30)},e.createElement(J.Z,{type:j.hx,minHeight:(0,o.Q1)(24)}))))};q.defaultProps={currentStep:null,cta:void 0},q.propTypes={sectionIndex:l().number.isRequired,stepIndex:l().number.isRequired,hasSectionAfter:l().bool.isRequired,content:l().shape({id:l().string.isRequired,defaultMessage:l().string.isRequired}).isRequired,cta:l().shape({target:l().string,title:l().shape({id:l().string.isRequired,defaultMessage:l().string.isRequired})}),currentStep:l().string,onCtaClick:l().func.isRequired,title:l().shape({id:l().string.isRequired,defaultMessage:l().string.isRequired}).isRequired};const qe=q;var pe=n(61815);const me={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},_e=(t=me,a)=>(0,pe.ZP)(t,s=>{switch(a.type){case"UPDATE_MODAL":{s.stepContent=a.content,s.sectionIndex=a.newSectionIndex,s.stepIndex=a.newStepIndex,s.hasSectionAfter=a.newHasSectionAfter,s.hasStepAfter=a.newHasStepAfter;break}default:return s}}),et=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:s,setStepState:i,isGuidedTourVisible:d,setSkipped:u}=(0,o.c1)(),[E,m]=(0,e.useState)(t),[{stepContent:h,sectionIndex:c,stepIndex:M,hasSectionAfter:x,hasStepAfter:B},F]=(0,e.useReducer)(_e,me),{trackUsage:Z}=(0,o.rS)();(0,e.useEffect)(()=>{if(!t){m(!1);return}const[g]=re()(a,t);m(!g&&d)},[t,a,d]),(0,e.useEffect)(()=>{if(t){const[g]=re()(Ge.Z,t),y=Object.keys(a),[L,r]=t.split("."),b=y.indexOf(L),$=Object.keys(a[L]).indexOf(r),tn=b<y.length-1,nn=$<Object.keys(a[L]).length-1;F({type:"UPDATE_MODAL",content:g,newSectionIndex:b,newStepIndex:$,newHasSectionAfter:tn,newHasStepAfter:nn})}},[t,a]);const R=()=>{i(t,!0),Z(h.trackingEvent),s(null)},G=()=>{u(!0),s(null),Z("didSkipGuidedtour")};return E&&h?e.createElement($e,{hideSkip:!B&&!x,onSkip:G,onClose:R},e.createElement(qe,{...h,onCtaClick:R,currentStep:t,sectionIndex:c,stepIndex:M,hasSectionAfter:x})):null};var ge=n(84366),tt=n(27074),nt=n(44240),at=n(71335),_=n(5267),he=n(36395),st=n(49296),ot=n(65216),rt=n(25711),it=n(30984),lt=n(68285),z=n(47533);const ct=(0,S.ZP)(v.x)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,fe=(0,S.ZP)(z.OL)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,Ee=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const s=(0,e.useRef)(),[i,d]=(0,e.useState)(!1),{logos:{menu:u}}=(0,I.um)(),[E,m]=(0,o.Yw)("navbar-condensed",!1),{userDisplayName:h}=(0,o.L7)(),{formatMessage:c}=(0,W.Z)(),{trackUsage:M}=(0,o.rS)(),{pathname:x}=(0,T.TH)(),B=(0,T.k6)(),{post:F}=(0,o.tg)(),Z=h.split(" ").map(r=>r.substring(0,1)).join("").substring(0,2),R=()=>d(r=>!r),G=async()=>{await F("/admin/logout"),o.I8.clearAppStorage(),R(),B.push("/auth/login")},g=r=>{!r.currentTarget.contains(r.relatedTarget)&&r.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&d(!1)},y=(r=null)=>{M("willNavigate",{from:x,to:r})},L=c({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(tt.$,{condensed:E},e.createElement(nt.D,{as:z.OL,workplace:c({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:L,icon:e.createElement("img",{src:u.custom||u.default,alt:c({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(ge.i,null),e.createElement(at._,null,e.createElement(_.O,{as:z.OL,to:"/content-manager",icon:e.createElement(it.Z,null),onClick:()=>y("/content-manager")},c({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(he.y,{label:c({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(r=>{const b=r.icon;return e.createElement(_.O,{as:z.OL,to:r.to,key:r.to,icon:e.createElement(b,null),onClick:()=>y(r.to)},c(r.intlLabel))})):null,t.length>0?e.createElement(he.y,{label:c({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(r=>{const b=r.icon;return e.createElement(_.O,{as:z.OL,badgeContent:r.notificationsCount>0&&r.notificationsCount.toString()||void 0,to:r.to,key:r.to,icon:e.createElement(b,null),onClick:()=>y(r.to)},c(r.intlLabel))})):null),e.createElement(st.q,null,e.createElement(ot.r,{id:"main-nav-user-button",ref:s,onClick:R,initials:Z},h),i&&e.createElement(ct,{onBlur:g,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(ie.i,{onEscape:R},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:0},e.createElement(fe,{tabIndex:0,onClick:R,to:"/me"},e.createElement(f.Z,null,c({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(fe,{tabIndex:0,onClick:G,to:"/auth/login"},e.createElement(f.Z,{textColor:"danger600"},c({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(lt.Z,null))))),e.createElement(rt.w,{onClick:()=>m(r=>!r)},c(E?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"}))))};Ee.propTypes={generalSectionLinks:l().array.isRequired,pluginsSectionLinks:l().array.isRequired};const dt=Ee;var ut=n(23886);const pt=(0,S.ZP)(v.x)`
  flex: 1;
`,ye=({children:t,sideNav:a})=>{const{formatMessage:s}=(0,W.Z)();return e.createElement(v.x,{background:"neutral100"},e.createElement(ut.z,null,s({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(p.k,{alignItems:"flex-start"},a,e.createElement(pt,null,t)))};ye.propTypes={children:l().node.isRequired,sideNav:l().node.isRequired};const mt=ye;var gt=n(63128),ee=n(50703),ht=n(8990),ft=n(50862),Et=n(13317),yt=n(64820);const vt=n.p+"19eb2dfcf2603eb55733.png";var St=n(42108),Tt=n(13789);const Ct=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],ve={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},Mt=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:St.Z},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:Tt.Z}],Rt=(0,S.ZP)(Q.z)`
  border-radius: 50%;
  padding: ${({theme:t})=>t.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,Pt=(0,S.ZP)(p.k)`
  transform: translate(-50%, -50%);
`,Dt=(0,S.ZP)(p.k)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:t})=>`-${t.spaces[1]}`};
  }

  :hover {
    background: ${({theme:t})=>t.colors.primary100};

    /* Hover style for the number displayed */
    ${f.Z}:first-child {
      color: ${({theme:t})=>t.colors.primary500};
    }

    /* Hover style for the label */
    ${f.Z}:nth-child(1) {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,It=S.ZP.img`
  width: ${({theme:t})=>t.spaces[10]};
  height: ${({theme:t})=>t.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
  border-radius: ${({theme:t})=>t.borderRadius};
`,Se=(0,S.ZP)(f.Z)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,Te=(0,S.ZP)(Se)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,At=()=>{const t=(0,e.useRef)(),[a,s]=(0,e.useState)(!1),{formatMessage:i}=(0,W.Z)(),{communityEdition:d}=(0,o.L7)(),u=()=>{s(m=>!m)},E=[...Mt,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:ft.Z,href:d?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(v.x,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(Rt,{"aria-label":i(a?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:u,ref:t},e.createElement(ee.J,{as:a?V.Z:Et.Z,color:"buttonNeutral0"})),a&&e.createElement(O.h,null,e.createElement(ht.VY,{padding:0,onDimiss:u,source:t,placement:"top-end",spacing:12},e.createElement(p.k,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(Se,{fontWeight:"bold"},i({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(Te,{as:"a",href:ve.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},i(ve.label))),e.createElement(ge.i,null),Ct.map(({href:m,duration:h,label:c},M)=>e.createElement(Dt,{as:"a",href:m,target:"_blank",rel:"noreferrer noopener",key:m,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(v.x,{paddingRight:5},e.createElement(f.Z,{textColor:"neutral200",variant:"alpha"},M+1)),e.createElement(v.x,{position:"relative"},e.createElement(It,{src:vt,alt:""}),e.createElement(Pt,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(ee.J,{as:yt.Z,color:"buttonNeutral0",width:3,height:3}))),e.createElement(p.k,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(f.Z,{fontWeight:"bold"},i(c)),e.createElement(se.T,null,":"),e.createElement(f.Z,{textColor:"neutral600",variant:"pi"},h)))),e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:2,paddingLeft:5,paddingTop:2,paddingBottom:5},E.map(({label:m,href:h,icon:c})=>e.createElement(p.k,{gap:3,key:h},e.createElement(ee.J,{as:c,color:"primary600"}),e.createElement(Te,{as:"a",href:h,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},i(m))))))))},Lt=(0,e.lazy)(()=>Promise.all([n.e(9423),n.e(4225),n.e(7649),n.e(994)]).then(n.bind(n,85602))),bt=(0,e.lazy)(()=>n.e(3981).then(n.bind(n,22339))),Ot=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,4186))),xt=(0,e.lazy)(()=>Promise.all([n.e(5338),n.e(5516)]).then(n.bind(n,9117))),Ce=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,23337))),kt=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,50068))),Bt=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,3549))),Me=(0,e.lazy)(()=>n.e(5895).then(n.bind(n,39223)).then(t=>({default:t.SettingsPage}))),Zt=()=>{const{trackUsage:t}=(0,o.rS)(),a=(0,H.I0)(),s=(0,H.v9)(i=>i.admin_app.status);(0,e.useEffect)(()=>{s==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:gt.eb}))},[s])},Nt=()=>{Zt();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:s}=(0,I.H9)(),{menu:i}=(0,o.j1)(),{showTutorials:d}=(0,I.um)(),u=(0,e.useMemo)(()=>i.filter(E=>E.Component).map(({to:E,Component:m,exact:h})=>(0,k.ot)(m,E,h)),[i]);return t?e.createElement(o.dO,null):e.createElement(Ne.DndProvider,{backend:We.PD},e.createElement(mt,{sideNav:e.createElement(dt,{generalSectionLinks:a,pluginsSectionLinks:s})},e.createElement(e.Suspense,{fallback:e.createElement(o.dO,null)},e.createElement(T.rs,null,e.createElement(T.AW,{path:"/",component:bt,exact:!0}),e.createElement(T.AW,{path:"/me",component:Bt,exact:!0}),e.createElement(T.AW,{path:"/content-manager",component:Lt}),u,e.createElement(T.AW,{path:"/settings/:settingId",component:Me}),e.createElement(T.AW,{path:"/settings",component:Me,exact:!0}),e.createElement(T.AW,{path:"/marketplace"},e.createElement(xt,null)),e.createElement(T.AW,{path:"/list-plugins",exact:!0},e.createElement(Ot,null)),e.createElement(T.AW,{path:"/404",component:Ce}),e.createElement(T.AW,{path:"/500",component:kt}),e.createElement(T.AW,{path:"",component:Ce}))),e.createElement(et,null),d&&e.createElement(At,null)))},Wt=t=>({plugins:Object.keys(t).reduce((a,s)=>(a[s]={...t[s]},a),{})});var Ft=n(43433),Gt=n.n(Ft);const Re={plugins:null},Ut=(t=Re,a)=>(0,pe.ZP)(t,s=>{switch(a.type){case"SET_PLUGIN_READY":{Gt()(s,["plugins",a.pluginId,"isReady"],!0);break}default:return s}}),jt=()=>{const{plugins:t}=(0,o.j1)(),[{plugins:a},s]=(0,e.useReducer)(Ut,Re,()=>Wt(t)),i=(0,e.useRef)(u=>{s({type:"SET_PLUGIN_READY",pluginId:u})});if(Object.keys(a).some(u=>a[u].isReady===!1)){const u=Object.keys(a).reduce((E,m)=>{const h=a[m].initializer;if(h){const c=a[m].pluginId;E.push(e.createElement(h,{key:c,setPlugin:i.current}))}return E},[]);return e.createElement(e.Fragment,null,u,e.createElement(o.dO,null))}return e.createElement(Nt,null)};var Pe=n(58633);const $t=()=>({type:Pe.l}),zt=t=>({type:Pe.m,permissions:t}),De=({children:t,permissions:a,refetchPermissions:s})=>{const{allPermissions:i}=(0,H.v9)(u=>u.rbacProvider),d=(0,H.I0)();return(0,e.useEffect)(()=>(d(zt(a)),()=>{d($t())}),[a,d]),i?e.createElement(o.oL.Provider,{value:{allPermissions:i,refetchPermissions:s}},t):e.createElement(o.dO,null)};De.propTypes={children:l().node.isRequired,permissions:l().array.isRequired,refetchPermissions:l().func.isRequired};const Kt=De,{get:te}=(0,o.tg)(),Qt=async()=>{try{const{data:t,headers:a}=await te("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},wt=async()=>{try{const{data:t,headers:a}=await te("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},Ht=async()=>{try{const{data:{data:{roles:t}}}=await te("/admin/users/me");return t}catch(t){throw new Error(t)}};var Vt=n(64797),Yt=n.n(Vt),Jt=n(85811),Ie=n.n(Jt);const Xt=(t,a)=>!Ie()(t)||!Ie()(a)?!1:Yt()(t,a),qt=D.i8,_t=async()=>{try{const t=await fetch("https://api.github.com/repos/strapi/strapi/releases/latest");if(!t.ok)throw new Error("Failed to fetch latest Strapi version.");const{tag_name:a}=await t.json();return a}catch{return qt}},Ae=D.i8,en=()=>{const{setGuidedTourVisibility:t}=(0,o.c1)(),a=(0,o.lm)(),s=o.I8.getUserInfo(),i=U()(s,"username")||(0,k.Pp)(s.firstname,s.lastname),[d,u]=(0,e.useState)(i),[E,m]=(0,e.useState)(null),{showReleaseNotification:h}=(0,I.um)(),[{data:c,status:M},{data:x,isLoading:B},{data:F,status:Z,refetch:R,isFetching:G},{data:g}]=(0,C.useQueries)([{queryKey:"app-infos",queryFn:Qt},{queryKey:"strapi-release",queryFn:()=>_t(a),enabled:h,initialData:Ae},{queryKey:"admin-users-permission",queryFn:wt,initialData:[]},{queryKey:"user-roles",queryFn:Ht}]),y=Xt(Ae,x);return(0,e.useEffect)(()=>{g&&g.find(({code:$})=>$==="strapi-super-admin")&&c?.autoReload&&t(!0)},[g,c,t]),(0,e.useEffect)(()=>{(async()=>{const $=await(0,k.Qy)(s);m($)})()},[s]),B||(G||M==="loading"||Z==="loading")?e.createElement(o.dO,null):M==="error"?e.createElement("div",null,"error..."):e.createElement(o.iq,{...c,userId:E,latestStrapiReleaseTag:x,setUserDisplayName:u,shouldUpdateStrapi:y,userDisplayName:d},e.createElement(Kt,{permissions:F,refetchPermissions:R},e.createElement(Ze,null),e.createElement(jt,null)))}},43234:(K,P,n)=>{n.d(P,{Z:()=>k});var e=n(27279),o=n(93415),N=n(23604),U=n(70627),C=n.n(U),D=n(16334);const I=({type:A,...O})=>e.createElement(o.x,{width:(0,N.Q1)(2),height:"100%",background:A===D.VM?"neutral300":"primary500",hasRadius:!0,...O});I.defaultProps={type:D.VM},I.propTypes={type:C().oneOf([D.lW,D.hx,D.VM])};const k=I},2364:(K,P,n)=>{n.d(P,{Z:()=>p});var e=n(27279),o=n(10701),N=n(50703),U=n(32370),C=n(23604),D=n(59082),I=n(70627),k=n.n(I),A=n(16334);const O=({type:f,number:v})=>f===A.hx?e.createElement(o.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,C.Q1)(30),height:(0,C.Q1)(30),justifyContent:"center"},e.createElement(N.J,{as:D.Z,"aria-hidden":!0,width:(0,C.Q1)(16),color:"neutral0"})):f===A.lW?e.createElement(o.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,C.Q1)(30),height:(0,C.Q1)(30),justifyContent:"center"},e.createElement(U.Z,{fontWeight:"semiBold",textColor:"neutral0"},v)):e.createElement(o.k,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,C.Q1)(30),height:(0,C.Q1)(30),justifyContent:"center"},e.createElement(U.Z,{fontWeight:"semiBold",textColor:"neutral600"},v));O.defaultProps={number:void 0,type:A.VM},O.propTypes={number:k().number,type:k().oneOf([A.lW,A.hx,A.VM])};const p=O},16334:(K,P,n)=>{n.d(P,{VM:()=>N,hx:()=>o,lW:()=>e});const e="isActive",o="isDone",N="isNotDone"},99571:(K,P,n)=>{n.d(P,{Z:()=>o});const o={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
