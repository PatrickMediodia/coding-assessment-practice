;/*FB_PKG_DELIM*/

__d("CometTab.react",["CometFocusGroupContext","CometIcon.react","CometNonBreakingSpace.react","CometPressable.react","CometTextWithIcon.react","ReactDOMComet","TetraText.react","gkx","react","stylex","useIntersectionObserver","useMergeRefs","useUnsafeRef_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));b=j;var l=b.useCallback,m=b.useContext,n=b.useState,o={icon:{lineHeight:"x14ju556",$$css:!0},iconEnd:{marginStart:"xsgj6o6",$$css:!0},iconEnd8:{marginStart:"x1i64zmx",$$css:!0},iconStart:{marginEnd:"xw3qccf",$$css:!0},iconStart8:{marginEnd:"x1emribx",$$css:!0},pressable:{appearance:"xjyslct",backgroundColor:"xjbqb8w",backgroundImage:"x18o3ruo",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxSizing:"x9f619",color:"x1heor9g",cursor:"x1ypdohk",display:"x78zum5",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",textAlign:"x16tdsg8",textDecoration:"x1hl2dhg",zIndex:"x1vjfegm",$$css:!0},selected:{borderTopEndRadius:"x11t77rh",borderTopStartRadius:"x146dn1l",bottom:"x1ey2m1c",end:"xds687c",height:"xuoj239",position:"x10l6tqk",start:"x17qophe",$$css:!0},tab:{alignItems:"x6s0dn4",boxSizing:"x9f619",display:"x78zum5",flexShrink:"x2lah0s",minHeight:"x1hshjfz",position:"x1n2onr6",$$css:!0}};function a(a,b){var e=a.badge,f=a.badgeCap,g=a.containerRef,j=a.highlightColor,p=a.icon,q=a.iconColor;q=q===void 0?"secondary":q;var r=a.iconLocation;r=r===void 0?"right":r;var s=a.iconSize;s=s===void 0?16:s;var t=a.label,u=a.labelIsHidden;u=u===void 0?!1:u;var v=a.onHidden,w=a.pressableXStyle,x=a.preventDisableWhenHidden;x=x===void 0?!1:x;var y=a.reduceEmphasis;y=y===void 0?!1:y;var z=a.selected;z=z===void 0?!1:z;var A=a.tabRef,B=a.underlineColor,C=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["badge","badgeCap","containerRef","highlightColor","icon","iconColor","iconLocation","iconSize","label","labelIsHidden","onHidden","pressableXStyle","preventDisableWhenHidden","reduceEmphasis","selected","tabRef","underlineColor","xstyle"]);var D=n(x?!1:!c("gkx")("2333")),E=D[0],F=D[1],G=(h||(h=c("useUnsafeRef_DEPRECATED")))(v);G.current=v;D=m(c("CometFocusGroupContext"));v=D.FocusItem;D=l(function(a){a=a.intersectionRatio;var b=a<.5;(!c("gkx")("2333")||b!==E)&&d("ReactDOMComet").flushSync(function(){F(b),G.current&&G.current(b)})},[E,G]);D=c("useIntersectionObserver")(D,{root:g?function(){return g.current}:null,threshold:.5});f=!u&&e!=null?typeof e==="number"?k.jsxs(k.Fragment,{children:[t,k.jsx(c("CometNonBreakingSpace.react"),{size:.75}),k.jsx(c("TetraText.react"),{color:z?"highlight":"secondary",type:"body4",children:f!=null&&e>f?f+"+":e})]}):k.jsx(c("CometTextWithIcon.react"),{iconAfter:e,spacing:.75,children:t}):u?null:t;z&&j!=null&&(f=k.jsx("span",{style:{color:j},children:f}));y?f=k.jsx(c("TetraText.react"),{color:z?"highlight":"secondary",type:"body3",children:f}):f=k.jsx(c("TetraText.react"),{color:z?"highlight":"secondary",type:"bodyLink3",children:f});e=p!=null&&r==="left"?k.jsx("div",{className:(i||(i=c("stylex")))(o.icon,!u&&(s===16?o.iconStart:o.iconStart8)),children:k.jsx(c("CometIcon.react"),{color:z?"highlight":q,icon:p,size:s})}):null;j=p!=null&&r==="right"?k.jsx("div",{className:(i||(i=c("stylex")))(o.icon,(e!=null||!u)&&(s===16?o.iconEnd:o.iconEnd8)),children:k.jsx(c("CometIcon.react"),{color:z?"highlight":q,icon:p,size:s})}):null;y=c("useMergeRefs")(x?void 0:D,b,A);r=k.jsxs("div",{className:(i||(i=c("stylex")))(o.tab,C),ref:y,children:[e,f,j,k.jsx("div",{className:i(z&&o.selected),style:{backgroundColor:z?B:void 0}})]});if(a.onPress!=null||a.linkProps!=null){q=k.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{"aria-hidden":E,"aria-selected":z,disabled:E,display:"inline",focusable:!E,label:u?t:void 0,overlayDisabled:z,ref:y,role:"tab",xstyle:[o.pressable,w],children:r}));return v&&!E?k.jsx(v,{children:q}):q}return r}a.displayName=a.name+" [from "+f.id+"]";e=k.forwardRef(a);g["default"]=e}),98);
__d("CometTabs.react",["fbt","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometFocusGroup.react","CometKeys","CometTab.react","CometVisualCompletionAttributes","CurrentLocale","SVGIcon","TriangleDownFilled20.svg.react","focusScopeQueries","gkx","mergeRefs","react","requireDeferred","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));b=j;var l=b.useCallback,m=b.useEffect,n=b.useMemo,o=b.useRef,p=b.useState,q=c("requireDeferred")("CometTabMenu.react").__setRef("CometTabs.react"),r={heightGetter:{lineHeight:"x14ju556",position:"x1n2onr6",$$css:!0},heightSetter:{overflowX:"x6ikm8r",overflowY:"x10wlt62",visibility:"xlshs6z",$$css:!0},moreTab:{height:"xng8ra",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},moreWrapper:{display:"x1rg5ohu",height:"xng8ra",position:"x1n2onr6",verticalAlign:"x16dsc37",$$css:!0},moreWrapperAdaptive:{height:"x1x4j4od",maxHeight:"x1jquxbb",minHeight:"x2lwn1j",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},root:{height:"xng8ra",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",zIndex:"x1ja2u2z",$$css:!0},tab:{display:"x3nfvp2","float":"xrbpyxo",height:"xng8ra",verticalAlign:"x16dsc37",$$css:!0},tabsContainer:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}},s={"default":{width:"x1k51ox",$$css:!0},englishOrShorter:{width:"x192njpj",$$css:!0}},t=["en_US","en_GB","nl_NL","vi_VN","af_ZA","fy_NL","kk_KZ","cs_CZ","sw_KE","it_IT","pt_BR","pt_PT","bg_BG","hr_HR","nn_NO","es_ES","es_LA","fr_FR","ca_ES","fr_CA","si_LK","sr_RS","nb_NO","sv_SE","zh_HK","zh_TW","he_IL","ne_NP","eo_EO"];function a(a){var b=a.heightXStyle,e=a.maxHeightXStyle,f=a.tabs,g=a.maxTabs,j=g===void 0?f.length:g,x=a.menuSize,y=a.moreTabRef,z=a.moreTabStyles,A=a.moreTabXStyle,B=a.moreWrapperXStyle,C=a.tabsContainerStyle;g=a.truncateMenu;var D=g===void 0?!1:g,E=a.onMoreTabPress,F=o(null),G=o([]),H=o(null);g=p(w(f.length,j));var I=g[0],J=g[1];m(function(){J(w(f.length,j))},[f.length,j]);var K=j<f.length?f.slice(0,j):f,L=j>=f.length,M=n(function(){return I.some(function(a){return(a=f[a])==null?void 0:a.selected})},[I,f]),N=l(function(a,f){a=c("mergeRefs")(a,H,y);var g=[{command:{key:c("CometKeys").DOWN},description:h._("__JHASH__XKKEZVjEqk8__JHASH__"),handler:f}];return k.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:g,xstyle:[r.moreWrapper,s["default"],t.includes(c("CurrentLocale").get())&&s.englishOrShorter,b,L&&r.moreWrapperAdaptive,B,e],children:k.jsx(c("CometTab.react"),babelHelpers["extends"]({},z,{"aria-haspopup":"menu",icon:d("SVGIcon").svgIcon(c("TriangleDownFilled20.svg.react")),iconSize:16,label:h._("__JHASH__aIpSCYSYAKN__JHASH__"),onPress:function(){f(),E&&E()},pressableXStyle:[r.moreTab,b],ref:a,role:"tab",selected:M,testid:void 0,xstyle:A}))})},[L,b,M,e,z,A,B,E]);return k.jsx(c("CometFocusGroup.react"),{hideArrowSignifiers:!0,orientation:"horizontal",preventScrollOnFocus:!0,role:"tablist",tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:function(a){return k.jsx("div",babelHelpers["extends"]({className:(i||(i=c("stylex")))(r.root,a,b),role:"tablist"},c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,{children:k.jsxs("div",{className:"x14ju556 x1n2onr6",children:[L&&k.jsx("div",{className:"x6ikm8r x10wlt62 xlshs6z",children:K.map(function(a,b){a.linkProps;a.onPress;a=babelHelpers.objectWithoutPropertiesLoose(a,["linkProps","onPress"]);return k.createElement(c("CometTab.react"),babelHelpers["extends"]({},a,{key:b+"tab",ref:function(a){return G.current[b]=a},role:"tab",selected:a.selected,xstyle:[r.tab,a.xstyle]}))})}),k.jsxs("div",{className:i(r.tabsContainer,C),"data-testid":void 0,children:[k.jsx(c("CometDeferredPopoverTrigger.react"),{popoverProps:{menuItems:I.map(function(a){return f[a]}).filter(Boolean),menuSize:x,truncate:D},popoverResource:q,children:N}),K.map(function(a,b){return k.createElement(c("CometTab.react"),babelHelpers["extends"]({},a,{containerRef:F,key:b+"tab",onHidden:function(a){if(c("gkx")("3806")){var d=a?u(I,b):v(I,b);d!==I&&J(d)}else J(function(c){return a?u(c,b):v(c,b)})},pressableXStyle:r.tab,ref:function(a){return G.current[b]=a},role:"tab",selected:a.selected}))})]})]})}))}})}a.displayName=a.name+" [from "+f.id+"]";function u(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function v(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}function w(a,b){return Array.from({length:a}).map(function(a,b){return b}).filter(function(a){return a>=b})}g["default"]=a}),98);
__d("CometEntityHeaderTabs.react",["CometTabs.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={entityHeaderTab:{height:"xng8ra",paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",$$css:!0}};function a(a){var b=a.maxTabs,d=a.menuSize,e=a.onMoreTabPress;a=a.tabs;return i.jsx(c("CometTabs.react"),{maxTabs:b,menuSize:d,moreTabStyles:{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)"},moreTabXStyle:j.entityHeaderTab,onMoreTabPress:e,tabs:a.map(function(a){return babelHelpers["extends"]({},a,{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)",xstyle:j.entityHeaderTab})}),truncateMenu:!0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderTabBar.react",["CometEntityHeaderTabs.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.maxTabs,d=a.menuSize,e=a.tabs;a=a.tabsRouteTarget;var f=a===void 0?"self":a,g=e.findIndex(function(a){return a.isActive()});a=e.map(function(a,b){a.isActive;var c=a.linkProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["isActive","linkProps"]);return c?babelHelpers["extends"]({},a,{linkProps:babelHelpers["extends"]({},c,{routeTarget:f}),selected:b===g}):babelHelpers["extends"]({},a,{selected:b===g})});return i.jsx(c("CometEntityHeaderTabs.react"),{maxTabs:b,menuSize:d,tabs:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ColorUtils",[],(function(a,b,c,d,e,f){"use strict";var g=new RegExp("^[#]{0,1}([\\w]{1,2})?([\\w]{1,2})([\\w]{1,2})([\\w]{1,2})$"),h=function(a,b){if(a==null)return null;a=a.match(g);if(a==null)return null;a=a.slice(1).map(function(a){return parseInt(a.length==1?a+a:a,16)});if(a.length==4){b==="ARGB"&&a.push(a.shift());return"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]/100+")"}return"rgb("+a[0]+","+a[1]+","+a[2]+")"};function a(a){return h(a,"ARGB")}function b(a){return h(a,"RGBA")}f.hexARGBToCSSRGBA=a;f.hexRGBAToCSSRGBA=b}),66);