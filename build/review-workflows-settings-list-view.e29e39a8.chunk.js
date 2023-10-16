"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[349],{40784:(M,E,e)=>{e.d(E,{r:()=>g});var t=e(74081),n=e(93415),o=e(67621),i=e.n(o);function v(r,m,u){if(!r||!m||!u)return{display:"none"};const{x:s,y:a}=u;return{transform:`translate(${s}px, ${a}px)`}}const g=({renderItem:r})=>{const{itemType:m,isDragging:u,item:s,initialOffset:a,currentOffset:l,mouseOffset:w}=(0,o.useDragLayer)(d=>({item:d.getItem(),itemType:d.getItemType(),initialOffset:d.getInitialSourceClientOffset(),currentOffset:d.getSourceClientOffset(),isDragging:d.isDragging(),mouseOffset:d.getClientOffset()}));return u?(0,t.jsx)(n.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,t.jsx)(n.x,{style:v(a,l,w),children:r({type:m,item:s})})}):null}},75021:(M,E,e)=>{e.d(E,{q:()=>i});var t=e(27279),n=e(23604),o=e(40464);function i({enabled:v}={enabled:!0}){const{get:g}=(0,n.kY)(),{data:r,isError:m,isLoading:u}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:l}}=await g("/admin/license-limit-information");return l},{enabled:v}),s=t.useMemo(()=>r??{},[r]),a=t.useCallback(l=>(s?.features??[]).find(d=>d.name===l)?.options??{},[s?.features]);return{license:s,getFeature:a,isError:m,isLoading:u}}},43390:(M,E,e)=>{e.d(E,{eJ:()=>P,lx:()=>D,h4:()=>T,fC:()=>A});var t=e(27279),n=e(27997),o=e(73354),i=e(74758),v=e(27875),g=e(23604),r=e(76827),m=e(61020),u=e(40784),s=e(86978),a=e(10701),l=e(32370),w=e(10411),d=e(70627),h=e.n(d),y=e(72450);const S=(0,y.ZP)(a.k)`
  svg path {
    fill: ${({theme:O})=>O.colors.neutral600};
  }
`;function L({name:O}){return t.createElement(a.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,g.Q1)(300)},t.createElement(S,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(w.Z,{width:`${8/16}rem`})),t.createElement(l.Z,{fontWeight:"bold"},O))}L.propTypes={name:h().string.isRequired};function p({type:O,item:C}){switch(O){case s.uL.STAGE:return t.createElement(L,{...C});default:return null}}function D(){return t.createElement(u.r,{renderItem:p})}function A({children:O}){return t.createElement(n.A,null,t.createElement(o.o,{tabIndex:-1},t.createElement(i.D,null,O)))}function P({href:O}){const{formatMessage:C}=(0,m.Z)();return t.createElement(g.rU,{startIcon:t.createElement(r.Z,null),to:O},C({id:"global.back",defaultMessage:"Back"}))}function T({title:O,subtitle:C,navigationAction:R,primaryAction:W}){return t.createElement(t.Fragment,null,t.createElement(g.SL,{name:O}),t.createElement(v.T,{navigationAction:R,primaryAction:W,title:O,subtitle:C}))}},38705:(M,E,e)=>{e.d(E,{uT:()=>p,fC:()=>P,Dx:()=>L});var t=e(27279),n=e(32370),o=e(10701),i=e(5938),v=e(15244),g=e(93415),r=e(4987),m=e(37370),u=e(95066),s=e(70627),a=e.n(s),l=e(61020),w=e(72450);const d=e.p+"0cd5f8915b265d5b1856.png",h="limits-title",y="https://strapi.io/pricing-cloud",S="https://strapi.io/contact-sales";function L({children:T}){return t.createElement(n.Z,{variant:"alpha",id:h},T)}L.propTypes={children:a().node.isRequired};function p({children:T}){return t.createElement(n.Z,{variant:"omega"},T)}p.propTypes={children:a().node.isRequired};function D(){const{formatMessage:T}=(0,l.Z)();return t.createElement(o.k,{gap:2,paddingTop:4},t.createElement(m.Q,{variant:"default",isExternal:!0,href:y},T({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(m.Q,{variant:"tertiary",isExternal:!0,href:S},T({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const A=w.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:T})=>`-${T.spaces[7]}`};
  margin-top: ${({theme:T})=>`-${T.spaces[7]}`};
  width: 360px;
`;function P({children:T,isOpen:O,onClose:C}){const{formatMessage:R}=(0,l.Z)();return O?t.createElement(i.P,{labelledBy:h},t.createElement(v.f,null,t.createElement(o.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(o.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},T,t.createElement(D,null)),t.createElement(o.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(A,{src:d,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(g.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(r.h,{icon:t.createElement(u.Z,null),"aria-label":R({id:"global.close",defaultMessage:"Close"}),onClick:C})))))):null}P.defaultProps={isOpen:!1},P.propTypes={children:a().node.isRequired,isOpen:a().bool,onClose:a().func.isRequired}},86978:(M,E,e)=>{e.d(E,{$k:()=>d,Ef:()=>p,FT:()=>S,Nj:()=>l,Ot:()=>s,QM:()=>m,VS:()=>h,_X:()=>D,bc:()=>a,gu:()=>o,k_:()=>w,lv:()=>y,qZ:()=>r,rg:()=>v,sN:()=>n,uL:()=>L,x4:()=>u,yq:()=>i,zn:()=>g});var t=e(97003);const n="settings_review-workflows",o="Settings/Review_Workflows/RESET_WORKFLOW",i="Settings/Review_Workflows/SET_CONTENT_TYPES",v="Settings/Review_Workflows/SET_IS_LOADING",g="Settings/Review_Workflows/SET_ROLES",r="Settings/Review_Workflows/SET_WORKFLOW",m="Settings/Review_Workflows/SET_WORKFLOWS",u="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",s="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",a="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",l="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",w="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",d="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",h="Settings/Review_Workflows/WORKFLOW_UPDATE",y={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},S=t.W.colors.primary600,L={STAGE:"stage"},p="numberOfWorkflows",D="stagesPerWorkflow"},52258:(M,E,e)=>{e.d(E,{n:()=>i});var t=e(27279),n=e(23604),o=e(40464);function i(v={}){const{get:g}=(0,n.kY)(),{id:r="",...m}=v,u={populate:"stages"},{data:s,isLoading:a,status:l,refetch:w}=(0,o.useQuery)(["review-workflows","workflows",r],async()=>(await g(`/admin/review-workflows/workflows/${r}`,{params:{...u,...m}})).data),d=t.useMemo(()=>r&&s?.data?[s.data]:Array.isArray(s?.data)?s.data:[],[s?.data,r]);return{meta:t.useMemo(()=>s?.meta??{},[s?.meta]),workflows:d,isLoading:a,status:l,refetch:w}}},26259:(M,E,e)=>{e.r(E),e.d(E,{default:()=>z});var t=e(27279),n=e(23604),o=e(49402),i=e(36364),v=e(10701),g=e(77970),r=e(70774),m=e(38566),u=e(38101),s=e(93153),a=e(50086),l=e(32370),w=e(10989),d=e(86967),h=e(4987),y=e(36938),S=e(26784),L=e(78665),p=e(61020),D=e(40464),A=e(51447),P=e(72450),T=e(92686),O=e(75021),C=e(43390),R=e(38705),W=e(86978),Y=e(52258);const V=(0,P.ZP)(n.rU)`
  align-items: center;
  height: ${(0,n.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:c})=>`${c.spaces[2]}}`};
  width: ${(0,n.Q1)(32)};

  svg {
    height: ${(0,n.Q1)(12)};
    width: ${(0,n.Q1)(12)};

    path {
      fill: ${({theme:c})=>c.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:c})=>c.colors.neutral800};
      }
    }
  }
`;function X(){const{formatMessage:c}=(0,p.Z)(),{push:k}=(0,A.k6)(),{collectionTypes:J,singleTypes:b,isLoading:_}=(0,T.G)(),{meta:x,workflows:$,isLoading:N,refetch:q}=(0,Y.n)(),[F,j]=t.useState(null),[ee,B]=t.useState(!1),{del:te}=(0,n.kY)(),{formatAPIError:ne}=(0,n.So)(),Z=(0,n.lm)(),{getFeature:se,isLoading:G}=(0,O.q)(),{trackUsage:Q}=(0,n.rS)(),ae=(0,o.v9)(i._),{allowedActions:{canCreate:H,canDelete:oe}}=(0,n.ss)(ae.settings["review-workflows"]),I=se("review-workflows"),{mutateAsync:le,isLoading:re}=(0,D.useMutation)(async({workflowId:f,stages:K})=>{const{data:{data:U}}=await te(`/admin/review-workflows/workflows/${f}`,{data:K});return U},{onSuccess(){Z({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),ie=f=>[...J,...b].find(U=>U.uid===f).info.displayName,de=f=>{j(f)},ce=()=>{j(null)},Ee=async()=>{try{const f=await le({workflowId:F});return await q(),j(null),f}catch(f){return Z({type:"warning",message:ne(f)}),null}};return t.useEffect(()=>{!N&&!G&&I?.[W.Ef]&&x?.workflowCount>parseInt(I[W.Ef],10)&&B(!0)},[G,N,I,x?.workflowCount,x.workflowsTotal]),t.createElement(t.Fragment,null,t.createElement(C.h4,{primaryAction:H&&t.createElement(n.Qj,{startIcon:t.createElement(y.Z,null),size:"S",to:"/settings/review-workflows/create",onClick:f=>{I?.[W.Ef]&&x?.workflowCount>=parseInt(I[W.Ef],10)?(f.preventDefault(),B(!0)):Q("willCreateWorkflow")}},c({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),subtitle:c({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:c({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),t.createElement(C.fC,null,N||_?t.createElement(v.k,{justifyContent:"center"},t.createElement(g.a,null,c({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"}))):t.createElement(r.i,{colCount:3,footer:H&&t.createElement(m.c,{icon:t.createElement(y.Z,null),onClick:()=>{I?.[W.Ef]&&x?.workflowCount>=parseInt(I[W.Ef],10)?B(!0):(k("/settings/review-workflows/create"),Q("willCreateWorkflow"))}},c({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),rowCount:1},t.createElement(u.h,null,t.createElement(s.Tr,null,t.createElement(a.Th,null,t.createElement(l.Z,{variant:"sigma"},c({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}))),t.createElement(a.Th,null,t.createElement(l.Z,{variant:"sigma"},c({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}))),t.createElement(a.Th,null,t.createElement(l.Z,{variant:"sigma"},c({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}))),t.createElement(a.Th,null,t.createElement(w.T,null,c({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"}))))),t.createElement(d.p,null,$.map(f=>t.createElement(s.Tr,{...(0,n.X7)({fn(K){K.target.nodeName!=="BUTTON"&&k(`/settings/review-workflows/${f.id}`)}}),key:`workflow-${f.id}`},t.createElement(a.Td,{width:(0,n.Q1)(250)},t.createElement(l.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},f.name)),t.createElement(a.Td,null,t.createElement(l.Z,{textColor:"neutral800"},f.stages.length)),t.createElement(a.Td,null,t.createElement(l.Z,{textColor:"neutral800"},(f?.contentTypes??[]).map(ie).join(", "))),t.createElement(a.Td,null,t.createElement(v.k,{alignItems:"center",justifyContent:"end"},t.createElement(V,{to:`/settings/review-workflows/${f.id}`,"aria-label":c({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:f.name})},t.createElement(S.Z,null)),$.length>1&&oe&&t.createElement(h.h,{"aria-label":c({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:t.createElement(L.Z,null),noBorder:!0,onClick:()=>{de(f.id)}}))))))),t.createElement(n.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:re,isOpen:!!F,onToggleDialog:ce,onConfirm:Ee}),t.createElement(R.fC,{isOpen:ee,onClose:()=>B(!1)},t.createElement(R.Dx,null,c({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),t.createElement(R.uT,null,c({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})))))}function z(){const c=(0,o.v9)(i._);return t.createElement(n.O4,{permissions:c.settings["review-workflows"].main},t.createElement(X,null))}},38566:(M,E,e)=>{e.d(E,{c:()=>u});var t=e(74081),n=e(72450),o=e(93415),i=e(84366),v=e(10701),g=e(32370);const r=(0,n.ZP)(o.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:s})=>s.colors.primary600};
  }
`,m=(0,n.ZP)(o.x)`
  border-radius: 0 0 ${({theme:s})=>s.borderRadius} ${({theme:s})=>s.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,u=({children:s,icon:a,...l})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(i.i,{}),(0,t.jsx)(m,{as:"button",background:"primary100",padding:5,...l,children:(0,t.jsxs)(v.k,{children:[(0,t.jsx)(r,{"aria-hidden":!0,background:"primary200",children:a}),(0,t.jsx)(o.x,{paddingLeft:3,children:(0,t.jsx)(g.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:s})})]})})]})},37370:(M,E,e)=>{e.d(E,{Q:()=>s});var t=e(74081),n=e(27279),o=e(72450),i=e(62629),v=e(8976),g=e(30413),r=e(10701),m=e(32370);const u=(0,o.ZP)(v.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${i.sg}
    &:active {
      ${i.sg}
    }
  }

  &:hover {
    ${i.yP}
  }

  &:active {
    ${i.tB}
  }

  ${i.PD}
`,s=n.forwardRef(({variant:a="default",startIcon:l,endIcon:w,disabled:d=!1,children:h,size:y="S",as:S=g.f,...L},p)=>{const D=y==="S"?2:"10px",A=4;return(0,t.jsxs)(u,{ref:p,"aria-disabled":d,size:y,variant:a,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:D,paddingLeft:A,paddingRight:A,paddingTop:D,pointerEvents:d?"none":void 0,...L,as:S||g.f,children:[l&&(0,t.jsx)(r.k,{"aria-hidden":!0,children:l}),(0,t.jsx)(m.Z,{variant:y==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:h}),w&&(0,t.jsx)(r.k,{"aria-hidden":!0,children:w})]})});s.displayName="LinkButton"},76827:(M,E,e)=>{e.d(E,{Z:()=>o});var t=e(74081);const n=i=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),o=n}}]);
