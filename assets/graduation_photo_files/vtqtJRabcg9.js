;/*FB_PKG_DELIM*/

__d("ProfileCometProfileMediaViewMenuItem_profile.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometProfileMediaViewMenuItem_profile",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometProfilePictureViewMenuItem_profile"},{args:null,kind:"FragmentSpread",name:"ProfileCometProfileVideoViewMenuItem_profile"},{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"profile_photo",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"ProfileVideo",kind:"LinkedField",name:"profile_video",plural:!1,selections:a,storageKey:null}],type:"Profile",abstractKey:"__isProfile"}}();e.exports=a}),null);
__d("ProfileCometProfilePictureEditMenu_profile.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureEditMenu_profile",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometProfileMediaViewMenuItem_profile"},{alias:null,args:null,kind:"ScalarField",name:"profile_picture_is_silhouette",storageKey:null},{alias:null,args:null,concreteType:"ProfileVideo",kind:"LinkedField",name:"profile_video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("ProfileCometProfilePictureEditMenu_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureEditMenu_user",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometStoryViewMenuItem_user"},{args:null,kind:"FragmentSpread",name:"useProfileCometCreateAvatarProfilePictureConfig_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometProfilePictureEditMenu_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"shouldUseFXIMProfilePicEditor"}],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureEditMenu_viewer",selections:[{condition:"shouldUseFXIMProfilePicEditor",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"useFXIMProfilePictureEditDialog_viewer"}]}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("ProfileCometProfilePictureViewMenuItem_profile.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureViewMenuItem_profile",selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"profile_photo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometPhotoViewerPlaceholderPassthroughProps_photo"}],storageKey:null},{alias:"profilePic160",args:[{kind:"Literal",name:"height",value:160},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:160}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("ProfileCometProfilePictureViewMenu_profile.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureViewMenu_profile",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometProfileMediaViewMenuItem_profile"},{alias:null,args:null,kind:"ScalarField",name:"profile_picture_is_silhouette",storageKey:null}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("ProfileCometProfilePictureViewMenu_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureViewMenu_user",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometStoryViewMenuItem_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometProfileVideoViewMenuItem_profile.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometProfileVideoViewMenuItem_profile",selections:[{alias:null,args:null,concreteType:"ProfileVideo",kind:"LinkedField",name:"profile_video",plural:!1,selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],storageKey:null}],storageKey:null}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("ProfileCometStoryViewMenuItem_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometStoryViewMenuItem_user",selections:[{args:null,kind:"FragmentSpread",name:"useProfileCometStoryStatus_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometCreateAvatarProfilePictureDialogQuery$Parameters",["ProfileCometCreateAvatarProfilePictureDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometCreateAvatarProfilePictureDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometCreateAvatarProfilePictureDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useProfileCometCreateAvatarProfilePictureConfig_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useProfileCometCreateAvatarProfilePictureConfig_user",selections:[{alias:null,args:null,concreteType:"Avatar",kind:"LinkedField",name:"user_avatar",plural:!1,selections:[{alias:null,args:null,concreteType:"AvatarStaticConfig",kind:"LinkedField",name:"static_config",plural:!1,selections:[{alias:null,args:null,concreteType:"AirbenderConfigDiscreteChoicePair",kind:"LinkedField",name:"choice_pairs",plural:!0,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"category_id",storageKey:null},action:"THROW",path:"user_avatar.static_config.choice_pairs.category_id"},{alias:null,args:null,kind:"ScalarField",name:"choice_id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometFramesEditDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7171624742909540"}),null);
__d("ProfileCometFramesEditDialogQuery$Parameters",["ProfileCometFramesEditDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometFramesEditDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometFramesEditDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometProfilePictureFrameSelectorContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="24071126045835278"}),null);
__d("ProfileCometProfilePictureFrameSelectorContainerQuery$Parameters",["ProfileCometProfilePictureFrameSelectorContainerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometProfilePictureFrameSelectorContainerQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometProfilePictureFrameSelectorContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometProfileMediaViewMenuItem.react",["CometRelay","ProfileCometProfileMediaViewMenuItem_profile.graphql","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("ProfileCometProfilePictureViewMenuItem.react").__setRef("ProfileCometProfileMediaViewMenuItem.react")),l=c("deferredLoadComponent")(c("requireDeferredForDisplay")("ProfileCometProfileVideoViewMenuItem.react").__setRef("ProfileCometProfileMediaViewMenuItem.react"));function a(a){var c;a=a.profile;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometProfileMediaViewMenuItem_profile.graphql"),a);return((c=a.profile_photo)==null?void 0:c.id)!=null?j.jsx(k,{profile:a},(c=a.profile_photo)==null?void 0:c.id):j.jsx(l,{profile:a},(c=a.profile_video)==null?void 0:c.id)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureFrameSelectorContainer.entrypoint",["JSResourceForInteraction","ProfileCometProfilePictureFrameSelectorContainerQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h=15,i=468;a={getPreloadProps:function(a){var b=a.frameID;b=b===void 0?"":b;var e=a.profileID;e=e===void 0?"":e;a=a.query;a=a===void 0?"":a;return{queries:{queryReference:{parameters:c("ProfileCometProfilePictureFrameSelectorContainerQuery$Parameters"),variables:{count:h,frameID:b,framePreviewSize:i,id:e,is_actors_profile:e==="",is_workplace:!0,query:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("ProfileCometProfilePictureFrameSelectorContainer.react").__setRef("ProfileCometProfilePictureFrameSelectorContainer.entrypoint")};g["default"]=a}),98);
__d("ProfileCometFramesEditDialog.entrypoint",["JSResourceForInteraction","NestedRelayEntryPointBuilderUtils","ProfileCometFramesEditDialogQuery$Parameters","ProfileCometProfilePictureFrameSelectorContainer.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.frameID!=null?a.frameID:a.routeProps!=null&&a.routeProps.frameID!=null?a.routeProps.frameID:"",e=a.profileID!=null?a.profileID:"",f=a.entrypoint!=null?a.entrypoint:a.routeProps!=null&&a.routeProps.entrypoint!=null?a.routeProps.entrypoint:null;a=a.routeProps!=null&&a.routeProps.query!=null?a.routeProps.query:"";return{entryPoints:{contentEntryPoint:d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:c("ProfileCometProfilePictureFrameSelectorContainer.entrypoint"),entryPointParams:{frameID:b,profileID:e,query:a}})},extraProps:{entrypoint:f},queries:{queryReference:{parameters:c("ProfileCometFramesEditDialogQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("ProfileCometFramesEditDialog.react").__setRef("ProfileCometFramesEditDialog.entrypoint")};g["default"]=a}),98);
__d("ProfileCometAddFrameMenuItem.react",["fbt","ix","CometCardedDialogLoadingStateLegacy.react","CometMenuItem.react","ProfileCometContext","ProfileCometFramesEditDialog.entrypoint","ProfileCometProfilePictureEditStrings","fbicon","react","useCometEntryPointDialog","useProfileCometEngagementEventsClickCallback","useProfileEngagementClickCallback","useProfileEngagementImpression"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react"));b=j;var l=b.useCallback,m=b.useContext,n=b.useRef;function a(a){var b=a.onClose,e=a.onSave;a=m(c("ProfileCometContext"));a=a.profileID;var f=function(){return k.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:b,size:"medium",title:d("ProfileCometProfilePictureEditStrings").ADD_FRAME_TO_PROFILE,withCloseButton:!0})};n(null);a=c("useCometEntryPointDialog")(c("ProfileCometFramesEditDialog.entrypoint"),{profileID:a},"button",f);var g=a[0];f=a[1];var j=a[2];a=a[3];var o=l(function(){return g({onClose:b,onSave:e})},[b,e,g]),p={profile_item_subtype:"add_a_frame",profile_item_type:"profile_photo_edit_menu",profile_product_bucket:"profile_core",profile_surface:"profile_photo"},q=c("useProfileCometEngagementEventsClickCallback")({feature_item:"add_frame",feature_surface:null,profile_feature:"profile_picture",profile_section:"profile_header"}),r=c("useProfileEngagementImpression")(p),s=c("useProfileEngagementClickCallback")(p,o);p=l(function(){s(),q()},[s,q]);return k.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("493185"),20),onClick:p,onHoverIn:f,onHoverOut:j,onPressIn:a,primaryText:h._("__JHASH__iGMVXNKXJSM__JHASH__"),ref:r})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometCreateAvatarProfilePictureConstants",[],(function(a,b,c,d,e,f){"use strict";a="avatar_profile_picture";f.ENTRYPOINT_FOR_AVATAR_EDITOR=a}),66);
__d("ProfileCometCreateAvatarProfilePictureDialog.entrypoint",["JSResourceForInteraction","ProfileCometCreateAvatarProfilePictureDialogQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.routeProps!=null&&a.routeProps.avatarConfig!=null?a.routeProps.avatarConfig:(a=a.avatarConfig)!=null?a:[];return{queries:{queryReference:{parameters:c("ProfileCometCreateAvatarProfilePictureDialogQuery$Parameters"),variables:{avatar_config:a}}}}},root:c("JSResourceForInteraction")("ProfileCometCreateAvatarProfilePictureDialog.react").__setRef("ProfileCometCreateAvatarProfilePictureDialog.entrypoint")};g["default"]=a}),98);
__d("ProfileCometCreateAvatarProfilePictureUtils",["gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("gkx")("5282")}function b(){return c("gkx")("4421")}g.SHOULD_PASS_AVATAR_PROFILE_PICTURE_NON_ADOPTERS_PARAM_CHECK=a;g.SHOULD_PASS_AVATAR_PROFILE_PICTURE_EDIT_PARAM_CHECK=b}),98);
__d("ProfileCometCreateAvatarProfilePictureMenuItem.react",["fbt","ix","CometCardedDialogLoadingStateLegacy.react","CometMenuItem.react","ProfileCometCreateAvatarProfilePictureConstants","ProfileCometCreateAvatarProfilePictureDialog.entrypoint","ProfileCometCreateAvatarProfilePictureUtils","ProfileCometProfilePictureEditStrings","XCometAvatarEditorControllerRouteBuilder","fbicon","goForceFullPageRedirectTo","react","useCometEntryPointDialog","useProfileCometEngagementEventsClickCallback","useProfileCometEngagementEventsImpression"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useCallback;function a(a){var b=a.avatarConfig,e=a.onClose;a=b.length===0&&d("ProfileCometCreateAvatarProfilePictureUtils").SHOULD_PASS_AVATAR_PROFILE_PICTURE_NON_ADOPTERS_PARAM_CHECK()||b.length>0;var f=function(){return k.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:e,size:"medium",title:d("ProfileCometProfilePictureEditStrings").CREATE_AVATAR_PROFILE_PICTURE,withCloseButton:!0})};f=c("useCometEntryPointDialog")(c("ProfileCometCreateAvatarProfilePictureDialog.entrypoint"),{avatarConfig:b},"button",f);var g=f[0],j=f[1],m=f[2];f=f[3];var n={feature_item:"create_an_avatar_profile_picture",feature_surface:null,profile_feature:"profile_picture",profile_section:"profile_header"},o=c("useProfileCometEngagementEventsImpression")(n),p=c("useProfileCometEngagementEventsClickCallback")(n),q=c("XCometAvatarEditorControllerRouteBuilder").buildURL({entry_point:d("ProfileCometCreateAvatarProfilePictureConstants").ENTRYPOINT_FOR_AVATAR_EDITOR});n=l(function(){b.length===0?c("goForceFullPageRedirectTo")(q):(p(),g({avatarConfig:b,onClose:e}))},[b,q,p,e,g]);return a===!0?k.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("1704747"),20),onClick:n,onHoverIn:j,onHoverOut:m,onPressIn:f,primaryText:h._("__JHASH__prxqiVeqkYE__JHASH__"),ref:o}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometStoryViewMenuItem.react",["fbt","ix","CometMenuItem.react","CometRelay","ProfileCometStoryViewMenuItem_user.graphql","fbicon","react","useProfileCometStoryStatus"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||d("react");function a(a){a=a.user;a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometStoryViewMenuItem_user.graphql"),a);a=c("useProfileCometStoryStatus")(a);a=a.storyUrl;return a==null?null:l.jsx(c("CometMenuItem.react"),{href:a,icon:d("fbicon")._(i("912341"),20),prefetchQueriesOnHover:!0,primaryText:h._("__JHASH__pD-SexnSFoT__JHASH__"),testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useProfileCometCreateAvatarProfilePictureConfig",["CometRelay","useProfileCometCreateAvatarProfilePictureConfig_user.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=(a=d("CometRelay").useFragment(h!==void 0?h:h=b("useProfileCometCreateAvatarProfilePictureConfig_user.graphql"),a))==null?void 0:(a=a.user_avatar)==null?void 0:(a=a.static_config)==null?void 0:a.choice_pairs;return a!=null?a.map(function(a){var b=a.category_id;a=a==null?void 0:a.choice_id;return babelHelpers["extends"]({category_id:b},a!=null&&{choice_id:a})}):[]}g["default"]=a}),98);
__d("ProfileCometProfilePictureEditMenu.react",["ix","CometMenu.react","CometMenuItem.react","CometRelay","ProfileCometAddFrameMenuItem.react","ProfileCometContext","ProfileCometCreateAvatarProfilePictureMenuItem.react","ProfileCometProfileMediaViewMenuItem.react","ProfileCometProfilePictureEditMenu_profile.graphql","ProfileCometProfilePictureEditMenu_user.graphql","ProfileCometProfilePictureEditMenu_viewer.graphql","ProfileCometProfilePictureEditStrings","ProfileCometStoryViewMenuItem.react","cr:2312","fbicon","gkx","qex","react","useFxGrowthIdentitySyncingFalcoEventLogger","useProfileCometCreateAvatarProfilePictureConfig","useProfileCometEngagementEventsClickCallback"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l,m=l||(l=d("react")),n=l.useContext,o="fb_profile_photo";function a(a){var e,f=a.includeViewOption;f=f===void 0?!1:f;var g=a.onClose,l=a.profile,p=a.user;a=a.viewer;l=d("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometProfilePictureEditMenu_profile.graphql"),l);p=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometProfilePictureEditMenu_user.graphql"),p);a=d("CometRelay").useFragment(k!==void 0?k:k=b("ProfileCometProfilePictureEditMenu_viewer.graphql"),a);var q=c("useProfileCometCreateAvatarProfilePictureConfig")(p),r=n(c("ProfileCometContext"));r=r.profileID;r=b("cr:2312")(r,"TIMELINE",g,void 0,a,o);var s=r[0];a=r[1];var t=r[2],u=r[3];r=r[4];var v=l.profile_picture_is_silhouette===!0,w=l.profile_video!=null;w=w?!1:(w=c("qex")._("1483"))!=null?w:!1;e=(e=c("gkx")("6958"))!=null?e:!1;var x=v?d("ProfileCometProfilePictureEditStrings").ADD_PHOTO:d("ProfileCometProfilePictureEditStrings").DIALOG_TITLE;e&&(x=d("ProfileCometProfilePictureEditStrings").CHOOSE_PROFILE_PICTURE);var y=c("useProfileCometEngagementEventsClickCallback")({feature_item:"profile_picture_item",feature_surface:null,profile_feature:"profile_picture",profile_section:"profile_header"}),z=c("useFxGrowthIdentitySyncingFalcoEventLogger")();return m.jsxs(c("CometMenu.react"),{withArrow:!0,children:[m.jsx(c("ProfileCometStoryViewMenuItem.react"),{user:p}),!v&&f?m.jsx(c("ProfileCometProfileMediaViewMenuItem.react"),{profile:l}):null,m.jsx(c("CometMenuItem.react"),{icon:v?d("fbicon")._(h("550099"),20):d("fbicon")._(h("481807"),20),onClick:function(){y(),z({entry_point:o,event_name:"fb_profile_picture_clicked",flow_type:"photo_editing"}),s()},onHoverIn:t,onHoverOut:u,onPressIn:r,primaryText:x,ref:a,testid:void 0}),w?m.jsx(c("ProfileCometAddFrameMenuItem.react"),{onClose:g}):null,m.jsx(c("ProfileCometCreateAvatarProfilePictureMenuItem.react"),{avatarConfig:q,onClose:g})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureViewMenu.react",["CometMenu.react","CometRelay","ProfileCometProfileMediaViewMenuItem.react","ProfileCometProfilePictureViewMenu_profile.graphql","ProfileCometProfilePictureViewMenu_user.graphql","ProfileCometStoryViewMenuItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||d("react");function a(a){var e=a.profile;a=a.user;e=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometProfilePictureViewMenu_profile.graphql"),e);a=d("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometProfilePictureViewMenu_user.graphql"),a);var f=e.profile_picture_is_silhouette===!0;return k.jsxs(c("CometMenu.react"),{withArrow:!0,children:[k.jsx(c("ProfileCometStoryViewMenuItem.react"),{user:a}),f?null:k.jsx(c("ProfileCometProfileMediaViewMenuItem.react"),{profile:e})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureViewMenuItem.react",["fbt","ix","CometMenuItem.react","CometRelay","ProfileCometProfilePictureViewMenuItem_profile.graphql","fbicon","react","useCometPhotoViewerPlaceholderPassthroughProps"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||d("react");function a(a){var e;a=a.profile;a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometProfilePictureViewMenuItem_profile.graphql"),a);e=c("useCometPhotoViewerPlaceholderPassthroughProps")({photo:a.profile_photo,placeholderImageSrc:(e=a.profilePic160)==null?void 0:e.uri});a=(a=a.profile_photo)==null?void 0:a.url;return a==null?null:l.jsx(c("CometMenuItem.react"),{href:a,icon:d("fbicon")._(i("1030605"),20),passthroughProps:babelHelpers["extends"]({},e),primaryText:h._("__JHASH__J4XiSrQvaRN__JHASH__"),testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfileVideoViewMenuItem.react",["fbt","ix","CometMenuItem.react","CometRelay","ProfileCometProfileVideoViewMenuItem_profile.graphql","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||d("react");function a(a){a=a.profile;a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometProfileVideoViewMenuItem_profile.graphql"),a);a=(a=a.profile_video)==null?void 0:(a=a.associated_video)==null?void 0:a.url;return a==null?null:l.jsx(c("CometMenuItem.react"),{href:a,icon:d("fbicon")._(i("1030605"),20),primaryText:h._("__JHASH__xrBs7wV0cm___JHASH__"),testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);