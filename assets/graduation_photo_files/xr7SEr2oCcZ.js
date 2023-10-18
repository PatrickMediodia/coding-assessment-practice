;/*FB_PKG_DELIM*/

__d("CometResponsiveTopNav.react",["BaseHeading.react","BaseRow.react","BaseRowItem.react","CometLink.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={row:{paddingStart:"x1swvt13",paddingEnd:"x1pi30zi",$$css:!0},tabs:{overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},title:{paddingEnd:"x1pi30zi",$$css:!0}};function a(a){var b=a.action,d=a.auxiliary,e=a.isTitlePrimaryHeading;e=e===void 0?!0:e;var f=a.tabs,g=a.title,h=a.titleURL;a=a.xstyle;e=g!=null?i.jsx(c("BaseRowItem.react"),{xstyle:j.title,children:i.jsx(c("BaseHeading.react"),{isPrimaryHeading:e,children:i.jsx(c("TetraText.react"),{type:"headlineEmphasized1",children:g})})}):null;h!=null&&e!=null&&(e=i.jsx(c("CometLink.react"),{href:h,children:e}));return i.jsxs(c("BaseRow.react"),{verticalAlign:"center",xstyle:[j.row,a],children:[e,i.jsx(c("BaseRowItem.react"),{expanding:!0,xstyle:j.tabs,children:f}),b&&i.jsx(c("BaseRowItem.react"),{children:b}),i.jsx(c("BaseRowItem.react"),{children:d})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BaseAdaptiveTabs.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useCallback,l={absoluteFill:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},absoluteTop:{end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},heightGetter:{lineHeight:"x14ju556",position:"x1n2onr6",$$css:!0},heightSetter:{overflowX:"x6ikm8r",overflowY:"x10wlt62",visibility:"xlshs6z",$$css:!0},moreTab:{alignItems:"x6s0dn4",display:"x3nfvp2",justifyContent:"x1nhvcw1",$$css:!0},moreWrapper:{display:"x1rg5ohu",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",verticalAlign:"x16dsc37",$$css:!0},root:{overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",zIndex:"x1ja2u2z",$$css:!0},tab:{alignItems:"x6s0dn4",display:"x3nfvp2","float":"xrbpyxo",justifyContent:"x1nhvcw1",verticalAlign:"x16dsc37",$$css:!0}};function a(a){var b=a.height,d=a.heightXStyle,e=a.tabRole,f=e===void 0?"tab":e;e=a.tabs;var g=a.moreTab,i=a.maxVisibleTabs;i=i===void 0?Infinity:i;var m=a.moreTabWidthXStyle,n=a.moreTabXStyle,o=a.rootXStyle,p=a.selectedTabIndex,q=i<e.length?e.slice(0,i):e;a=i>=e.length;i=f==="tab"?"tablist":"group";e=k(function(a){return q.map(function(b,e){return typeof b==="function"?b([l.tab,d],e,a):j.jsx("div",{"aria-selected":f==="img"?void 0:p===e,className:(h||(h=c("stylex")))(l.tab,d),role:f,children:b},e+"tab")})},[d,p,f,q]);return j.jsx("div",{className:(h||(h=c("stylex")))(l.root,d,o),children:j.jsxs("div",{className:"x14ju556 x1n2onr6",children:[a&&j.jsx("div",{"aria-hidden":!0,className:"x6ikm8r x10wlt62 xlshs6z",role:i,children:e(!0)}),j.jsxs("div",{className:"x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy","data-testid":void 0,role:i,children:[j.jsx("div",{className:h(l.moreWrapper,d,m,n),style:a?{height:"calc((100% - "+b+"px) * 9999)",maxHeight:b,minHeight:0}:void 0,children:typeof g==="function"?g([l.absoluteTop,l.moreTab,d]):j.jsx("div",{className:(h||(h=c("stylex")))(l.absoluteTop,l.moreTab,d),children:g})}),e(!1)]})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPivotLinkTab.react",["CometPivotLink.react","ReactDOMComet","react","stylex","useIntersectionObserver","useUnsafeRef_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));b=j;var l=b.useCallback,m=b.useState,n={tab:{alignItems:"x6s0dn4",boxSizing:"x9f619",display:"x78zum5",flexShrink:"x2lah0s",minHeight:"x1hshjfz",paddingStart:"x1e558r4",paddingEnd:"x150jy0e",position:"x1n2onr6",zIndex:"x1vjfegm",$$css:!0}};function a(a,b){var e=a.FocusItem,f=a.containerRef,g=a.disabled;g=g===void 0?!1:g;var j=a.hasNewContentBadge;j=j===void 0?!1:j;var o=a.image,p=a.imagePlacement;p=p===void 0?"left":p;var q=a.isHiddenOverride;q=q===void 0?!1:q;var r=a.label,s=a.labelIsHidden;s=s===void 0?!1:s;var t=a.linkType,u=a.onHidden,v=a.selected;v=v===void 0?!1:v;var w=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["FocusItem","containerRef","disabled","hasNewContentBadge","image","imagePlacement","isHiddenOverride","label","labelIsHidden","linkType","onHidden","selected","xstyle"]);var x=m(!0),y=x[0],z=x[1],A=(h||(h=c("useUnsafeRef_DEPRECATED")))(u);A.current=u;x=l(function(a){var b=a.intersectionRatio;d("ReactDOMComet").flushSync(function(){var a=b<.5;z(a);A.current&&A.current(a)})},[]);u=c("useIntersectionObserver")(x,{root:f?function(){return f.current}:null,threshold:.5});x=k.jsx("div",{className:(i||(i=c("stylex")))(n.tab,w),ref:b,role:"none",children:k.jsx(c("CometPivotLink.react"),{disabled:g,focusable:!q,hasNewContentBadge:j,image:o,imagePlacement:p,label:r,labelIsHidden:s,linkProps:a.linkProps,onPress:a.onPress,ref:u,role:"tab",selected:v,testid:void 0,type:t})});return e&&!y?k.jsx(e,{disabled:q,children:x}):x}a.displayName=a.name+" [from "+f.id+"]";e=k.forwardRef(a);g["default"]=e}),98);
__d("CometPivotLinkTabs.react",["fbt","ix","BaseAdaptiveTabs.react","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometKeys","CometPivotLinkTab.react","FocusGroup.react","fbicon","focusScopeQueries","react","requireDeferred","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react"));b=k;var m=b.useCallback,n=b.useMemo,o=b.useRef,p=b.useState,q=c("requireDeferred")("CometTabMenuForPivotLinks.react").__setRef("CometPivotLinkTabs.react");e=d("FocusGroup.react").createFocusGroup(d("focusScopeQueries").tabbableScopeQuery);var r=e[0],s=e[1],t={height:{height:"xc9qbxq",$$css:!0},moreTabWidth:{width:"x1useyqa",$$css:!0},root:{marginStart:"x139jcc6",marginEnd:"xcud41i",$$css:!0}};function a(a){var b=a.linkType,e=a.maxTabs,f=e===void 0?Infinity:e,g=a.moreTabConfig,k=a.tabs;e=a.tabsContainerStyle;a=p(function(){return Array.from({length:k.length}).map(function(a,b){return b}).filter(function(a){return a>=f})});var x=a[0],y=a[1],z=o(null),A=n(function(){return x.some(function(a){return(a=k[a])==null?void 0:a.selected})},[x,k]);a=m(function(a,e){var f=[{command:{key:c("CometKeys").DOWN},description:h._("__JHASH__XKKEZVjEqk8__JHASH__"),handler:e}];return l.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:f,children:l.jsx(c("CometPivotLinkTab.react"),{FocusItem:s,"aria-haspopup":"menu","aria-label":h._("__JHASH__ELGUGxAyQfA__JHASH__"),image:(f=g==null?void 0:g.image)!=null?f:{icon:d("fbicon")._(i("484386"),16),type:"icon"},imagePlacement:(f=g==null?void 0:g.imagePlacement)!=null?f:"left",isHiddenOverride:x.length===0,label:(f=g==null?void 0:g.label)!=null?f:h._("__JHASH__ELGUGxAyQfA__JHASH__"),labelIsHidden:(f=g==null?void 0:g.labelIsHidden)!=null?f:!0,linkType:b,onPress:e,ref:a,selected:A,testid:void 0,xstyle:g==null?void 0:g.xstyle})})},[x.length,A,g,b]);a=l.jsx(c("CometDeferredPopoverTrigger.react"),{popoverProps:{menuItems:x.map(function(a){return k[a]}).filter(Boolean)},popoverResource:q,children:a});return l.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:w,children:l.jsx(r,{orientation:"horizontal",preventScrollOnFocus:!0,tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:l.jsx("div",{className:(j||(j=c("stylex")))(t.root,e),ref:z,children:l.jsx(c("BaseAdaptiveTabs.react"),{height:36,heightXStyle:t.height,maxVisibleTabs:f,moreTab:a,moreTabWidthXStyle:(e=g==null?void 0:g.width)!=null?e:t.moreTabWidth,selectedTabIndex:k.findIndex(function(a){return a.selected}),tabs:k.map(function(a){return function(d,e,f){return l.jsx("div",{"aria-hidden":x.includes(e)?!0:void 0,className:(j||(j=c("stylex")))(d),role:x.includes(e)?void 0:"none",children:l.jsx(c("CometPivotLinkTab.react"),babelHelpers["extends"]({},a,{FocusItem:s,containerRef:f?void 0:z,linkType:b,onHidden:function(a){y(function(b){return a?u(b,e):v(b,e)})},ref:a.ref,testid:void 0}))},e+"tab")}})})})})})}a.displayName=a.name+" [from "+f.id+"]";function u(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function v(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}var w=[{command:{key:c("CometKeys").LEFT},description:h._("__JHASH__1VqMgLPpraa__JHASH__"),handler:function(){}},{command:{key:c("CometKeys").RIGHT},description:h._("__JHASH__7zajSsSIBFZ__JHASH__"),handler:function(){}}];g["default"]=a}),98);