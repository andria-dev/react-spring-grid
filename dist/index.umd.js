!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("use-measure"),require("react"),require("react-spring")):"function"==typeof define&&define.amd?define(["exports","use-measure","react","react-spring"],t):t(e.reactSpringGrid={},e.useMeasure,e.react,e.reactSpring)}(this,function(e,t,r,n){t=t&&t.hasOwnProperty("default")?t.default:t;var i="default"in r?r.default:r;function a(e){var t=e.renderer,r=e.data,i=e.style,a=n.useSpring({left:e.x+"px",top:e.y+"px"});return react(t,{data:r,style:Object.assign({},i,a)})}e.Grid=function(e){var s=e.items,o=e.keys,u=e.renderer,p=e.wrapper;void 0===p&&(p="section");var c=e.style,d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["items","keys","renderer","wrapper","style"]),f=n.useTransition(s,o,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}}),l=r.useRef(null),y=t(l).width,h=s.length||-s[0].width,g=0,m=0;return i.createElement(p,Object.assign({ref:l,style:Object.assign({},c,{position:"relative"})},d),f.map(function(e,t){var r=e.item;return h+=r.width,r.height>m&&(m=r.height),t+1<s.length&&h+s[t+1].width>y&&(g+=m,m=0),i.createElement(a,{key:e.key,renderer:u,data:r,style:e.props,x:h,y:g})}))},e.Item=a});
//# sourceMappingURL=index.umd.js.map
