webpackJsonp([0xc46c79842792],{90:function(t,e,a){t.exports=a.p+"static/calpoly.4b9de429.jpg"},91:function(t,e,a){t.exports=a.p+"static/chumash.e1cf9951.jpg"},98:function(t,e,a){t.exports=a.p+"static/uu.3394723f.jpg"},48:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var c=a(1),s=n(c),l=a(91),i=n(l),p=a(98),f=n(p),m=a(90),d=n(m),h=a(71),g=n(h),b={chumash:i.default,uu:f.default,campus:d.default},y=function(t){function e(a){u(this,e);var n=r(this,t.call(this,a));return n.state={selected:"chumash",img:b.chumash},n.updateImage=n.updateImage.bind(n),n}return o(e,t),e.prototype.updateImage=function(){function t(t){this.setState({selected:t.currentTarget.getAttribute("value"),img:b[t.currentTarget.getAttribute("value")]})}return t}(),e.prototype.render=function(){function t(){var t=this;return s.default.createElement("div",{className:g.default.map},s.default.createElement("button",{value:"chumash",onClick:function(){function e(e){return t.updateImage(e)}return e}(),className:g.default.mapButton},"Chumash"),s.default.createElement("button",{value:"uu",onClick:function(){function e(e){return t.updateImage(e)}return e}(),className:g.default.mapButton},"University Union"),s.default.createElement("button",{value:"campus",onClick:function(){function e(e){return t.updateImage(e)}return e}(),className:g.default.mapButton},"Cal Poly Campus"),s.default.createElement("div",null,s.default.createElement("img",{src:this.state.img,alt:"Map of "+this.state.selected,className:g.default.mapImage})))}return t}(),e}(c.Component);e.default=y,t.exports=e.default},71:function(t,e){t.exports={map:"src-pages----map-module---map---1MAWO",mapButton:"src-pages----map-module---mapButton---1Zh5_",mapImage:"src-pages----map-module---mapImage---sAKhK"}}});
//# sourceMappingURL=component---src-pages-map-jsx-c2e4b7f00cb3a844f9cb.js.map