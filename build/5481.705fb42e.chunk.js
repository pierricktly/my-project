(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5481],{1350:(_,e,t)=>{"use strict";t.d(e,{a:()=>m});var n=t(27279),a=t(23604),o=t(69439),r=t.n(o),d=t(61020),L=t(51447),E=t(75021);const c="strapi-notification-seat-limit",f="https://cloud.strapi.io/profile/billing",l="https://strapi.io/billing/request-seats",m=()=>{const{formatMessage:s}=(0,d.Z)(),{license:M,isError:u,isLoading:D}=(0,E.q)(),T=(0,a.lm)(),{pathname:O}=(0,L.TH)(),{enforcementUserCount:C,permittedSeats:I,licenseLimitStatus:i,isHostedOnStrapiCloud:P}=M;n.useEffect(()=>{if(u||D)return;const A=!r()(I)&&!window.sessionStorage.getItem(`${c}-${O}`)&&(i==="AT_LIMIT"||i==="OVER_LIMIT");let g;i==="OVER_LIMIT"?g="warning":i==="AT_LIMIT"&&(g="softWarning"),A&&T({type:g,message:s({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:i}),title:s({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:i,enforcementUserCount:C,permittedSeats:I}),link:{url:P?f:l,label:s({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:P})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${c}-${O}`,"true")}})},[T,M,O,s,D,I,i,C,P,u])}},75021:(_,e,t)=>{"use strict";t.d(e,{q:()=>r});var n=t(27279),a=t(23604),o=t(40464);function r({enabled:d}={enabled:!0}){const{get:L}=(0,a.kY)(),{data:E,isError:c,isLoading:f}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:s}}=await L("/admin/license-limit-information");return s},{enabled:d}),l=n.useMemo(()=>E??{},[E]),m=n.useCallback(s=>(l?.features??[]).find(u=>u.name===s)?.options??{},[l?.features]);return{license:l,getFeature:m,isError:c,isLoading:f}}},17403:(_,e,t)=>{"use strict";t.r(e),t.d(e,{UserListPageEE:()=>r});var n=t(27279),a=t(61611),o=t(1350);function r(){return(0,o.a)(),n.createElement(a.W,null)}},69439:_=>{function e(t){return t==null}_.exports=e}}]);
