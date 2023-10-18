;/*FB_PKG_DELIM*/

__d("CometNewsfeedKeyCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f,g){"use strict";a=c("createKeyCommandWidget")();g["default"]=a}),98);
__d("CometPageLayoutWithComplementaryContent.react",["BaseRow.react","BaseRowItem.react","CometMediaViewerFullscreenContext","CometRouteRenderType","CometScrollView.react","MWChatVisibilityOverrideContext","gkx","react","stylex","useMWShouldCurrentRouteOverrideChatVisibility","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useContext,l=c("gkx")("708253"),m=c("gkx")("1217157");b={chatSliver:{backgroundColor:"x1jx94hy",boxShadow:"x13tw4yp",display:"x78zum5",height:"xtp0wl1",top:"xxzkxad",width:"x1dmp6jm",zIndex:"x1vjfegm","@media (max-width: 899px)_display":"x1daaz14",$$css:!0},container:{height:"x3igimt",maxHeight:"xedcshv",overflowX:"x6ikm8r",overflowY:"x10wlt62","@media (max-width: 900px)_flexDirection":"x10o2a94",$$css:!0},containerFullScreenInPushView:{minHeight:"xg6iff7",$$css:!0},containerInPushView:{minHeight:"x1us19tq",$$css:!0},containerNotInPushView:{minHeight:"xat3117",$$css:!0},contentAreaInPushView:{height:"x1dr59a3","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},contentAreaInPushViewUsesParentHeight:{height:"x5yr21d","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},contentAreaNotInPushView:{height:"xtp0wl1","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},defaultBackground:{backgroundColor:"x2bj2ny",$$css:!0},rightRail:{height:"x3igimt",maxHeight:"xmz0i5r","@media (max-width: 900px)_maxWidth":"x1dqk2q1","@media (max-width: 900px)_minHeight":"x1mr1erl",$$css:!0},rightRailFixed:{backgroundColor:"x2bj2ny",maxHeight:"x85a59c",minHeight:"x1t2pt76","@media (max-width: 900px)_maxHeight":"x12slza2","@media (max-width: 900px)_maxWidth":"x1dqk2q1","@media (max-width: 900px)_minHeight":"x1mnsmir",$$css:!0},rightRailInner:{backgroundColor:"x2bj2ny",height:"x3igimt",maxWidth:"xxc7z9f",minWidth:"x1gvwcb","@media (max-width: 900px)_minWidth":"xusdqos",$$css:!0},rightRailOuter:{height:"x5yr21d",maxHeight:"x85a59c","@media (max-width: 900px)_height":"xhz6iuk","@media (max-width: 900px)_maxHeight":"x1wrh7m5",$$css:!0},rightRailOuterNoMaxHeight:{height:"x5yr21d","@media (max-width: 900px)_height":"xhz6iuk","@media (max-width: 900px)_maxHeight":"x1wrh7m5",$$css:!0},shadowBar:{backgroundColor:"x2bj2ny",borderBottom:"x3lcxq5",minHeight:"x1e3jx5v",position:"x7wzq59",top:"x13vifvy",zIndex:"x1vjfegm",$$css:!0},shadowBarContentAreaResponsiveness:{display:"x1s85apg","@media (max-width: 900px)_display":"xhnf9zx",$$css:!0},shadowBarRightRailResponsiveness:{"@media (max-width: 900px)_display":"xzd29fr",$$css:!0}};e={shadowBar:{backgroundColor:"x2bj2ny",borderBottomWidth:"x1co6499",borderBottomStyle:"x1q0q8m5",borderBottomColor:"x80vd3b",minHeight:"x1e3jx5v",position:"x7wzq59",top:"x13vifvy",zIndex:"x1vjfegm",$$css:!0}};var n=c("gkx")("4855")?babelHelpers["extends"]({},b,e):b;function a(a){var b=a.children;b=b===void 0?null:b;var e=a.hideContainerBackground;e=e===void 0?!1:e;var f=a.isRightRailFixed;f=f===void 0?!1:f;var g=a.rightRail;g=g===void 0?null:g;var i=a.showChatSliverOverride;i=i===void 0?!0:i;var o=a.showShadowBar;o=o===void 0?!0:o;a=a.useParentHeight;a=a===void 0?!1:a;var p=d("CometRouteRenderType").useIsPushView(),q=c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT")&&l,r=c("useMWShouldCurrentRouteOverrideChatVisibility")();r=d("MWChatVisibilityOverrideContext").useMWChatVisibilityOverride(r);var s=k(c("CometMediaViewerFullscreenContext"));i=i&&q&&r;return j.jsxs(c("BaseRow.react"),{align:"start",xstyle:[n.container,!e&&n.defaultBackground,s&&p&&n.containerFullScreenInPushView,!s&&(p||a)&&n.containerInPushView,!p&&!a&&n.containerNotInPushView],children:[p&&!m?j.jsx("div",{className:(h||(h=c("stylex")))(o&&n.shadowBar,o&&n.shadowBarContentAreaResponsiveness)}):null,j.jsx(c("BaseRowItem.react"),{expanding:!0,role:"main",xstyle:a?n.contentAreaInPushViewUsesParentHeight:p?n.contentAreaInPushView:n.contentAreaNotInPushView,children:b}),g!=null&&!s&&j.jsxs(c("BaseRowItem.react"),{role:"complementary",xstyle:f?n.rightRailFixed:n.rightRail,children:[p&&!m?j.jsx("div",{className:(h||(h=c("stylex")))(o&&n.shadowBar,o&&n.shadowBarRightRailResponsiveness)}):null,j.jsxs(c("BaseRow.react"),{xstyle:a?n.rightRailOuterNoMaxHeight:n.rightRailOuter,children:[j.jsx(c("BaseRowItem.react"),{xstyle:n.rightRailInner,children:f?j.jsx(c("CometScrollView.react"),{"data-testid":void 0,showsHorizontalScrollIndicator:!1,children:g}):g}),i?j.jsx("div",{className:(h||(h=c("stylex")))(n.chatSliver)}):null]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometOnOutsideClick.react",["react","useOnOutsideClick"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");function a(a){var b=a.children;a=a.onOutsideClick;a=c("useOnOutsideClick")(a);return b(a)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryMenuOriginalStoryIDContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometHeroUserTimingUtils",["URLSearchParams","UserTimingUtils","performanceNow"],(function(a,b,c,d,e,f,g){"use strict";var h;f=new(c("URLSearchParams"))(window.location.search);f=f.get("user_timing_filters");var i=f!=null?new RegExp(f,"i"):null;function a(a){d("UserTimingUtils").measureStart(a)}function j(a,b,c){(i==null||i.test(c))&&d("UserTimingUtils").measureModern(a,b)}function b(a,b){var d=(h||(h=c("performanceNow")))();j(String.fromCodePoint(9883)+" "+a+"[effect]",{end:d,start:d-b},"ReactPostCommit")}function e(a,b,c){j(String.fromCodePoint(9883)+" "+a+"[layout]",{end:b+c,start:b},"ReactCommit")}g.measureStart=a;g.measureModern=j;g.measureReactPostCommit=b;g.measureReactCommit=e}),98);
__d("CometFeedStoryDropdownMenuLoggerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({nodeID:null});g["default"]=b}),98);
__d("CometPhotoViewerContainerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext();g["default"]=b}),98);
__d("ContributionBoardFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("4349");b=d("FalcoLoggerInternal").create("contribution_board",a);e=b;g["default"]=e}),98);
__d("PagesTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setConnectionClass=function(a){this.$1.connection_class=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setEventLocation=function(a){this.$1.event_location=a;return this};c.setEventTarget=function(a){this.$1.event_target=a;return this};c.setLogSource=function(a){this.$1.log_source=a;return this};c.setNavAttributionIDV2Key=function(a){this.$1.nav_attribution_id_v2_key=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setRawClientTime=function(a){this.$1.raw_client_time=a;return this};c.setSessionid=function(a){this.$1.sessionid=a;return this};c.setTags=function(a){this.$1.tags=b("GeneratedLoggerUtils").serializeVector(a);return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={connection_class:!0,event:!0,event_location:!0,event_target:!0,log_source:!0,nav_attribution_id_v2_key:!0,page_id:!0,raw_client_time:!0,sessionid:!0,tags:!0};f["default"]=a}),66);
__d("PagesLoggerEventEnum",[],(function(a,b,c,d,e,f){a=Object.freeze({CLICK:"click",CREATE:"create",DELETE:"delete",DRAG:"drag",HOVER:"hover",IMPRESSION:"impression",RECEIVE_REQUEST:"receive_request",RECEIVE_RESPONSE:"receive_response",SAVE:"save",SCROLL:"scroll",SEND_REQUEST:"send_request",SEND_RESPONSE:"send_response",UNSAVE:"unsave",UPDATE:"update"});f["default"]=a}),66);
__d("PagesLogger",["PagesLoggerEventEnum","PagesTypedLogger"],(function(a,b,c,d,e,f){var g="extra_data_",h={log:function(a,c,d,e,f,h){e===void 0&&(e=null);f===void 0&&(f=[]);var i={},j=h||{};Object.keys(j||{}).forEach(function(a){var b=j[a];(b instanceof Array||b instanceof Object)&&(b=JSON.stringify(b));i[g+a]=b});new(b("PagesTypedLogger"))().setPageID(a).setEvent(c).setEventTarget(d).setEventLocation(e).setLogSource("pages_logger").setTags(f).updateExtraData(i).log()},registerLogOnClick:function(a,c,d,e,f,g){e===void 0&&(e=null),f===void 0&&(f=[]),g===void 0&&(g={}),a.addEventListener("click",function(){h.log(c,b("PagesLoggerEventEnum").CLICK,d,e,f,g)})}};e.exports=h}),null);
__d("RelayEventLogger",["err","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h=new Map(),i="client:root:viewer",j='client:root:viewer:__CometNewsFeed_viewer_news_feed_comet_news_feed(orderby:["TOP_STORIES"])',k='__CometNewsFeed_viewer_news_feed_comet_news_feed(orderby:["TOP_STORIES"])';function a(a,b){var e=[],f={get:function(){return[].concat(e)},log:function(a){if(a.name==="store.publish"){var f=a.source,g=!1;if(f.has(i)){var h=f.get(i);g=h==null||d("relay-runtime").Record.getValue(h,k)===null}(g||f.has(j))&&(a.stack=c("err")("<trace>").stack)}e.push(a);while(e.length>b)e.shift()}};h.set(a,f);return f}function b(a){return h.get(a)}g.create=a;g.get=b}),98);