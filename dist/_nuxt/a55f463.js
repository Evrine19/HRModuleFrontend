/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{293:function(t,e,r){var content=r(356);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("941a74bc",content,!0,{sourceMap:!1})},354:function(t,e,r){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e){t.exports=function(t,e,i,s,r,o){var n,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(n=t,a=t.default);var c,l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId=r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):s&&(c=s),c){var d=l.functional,h=d?l.render:l.beforeCreate;d?(l._injectStyles=c,l.render=function(t,e){return c.call(e),h(t,e)}):l.beforeCreate=h?[].concat(h,c):[c]}return{esModule:n,exports:a,options:l}}},function(t,e,i){var s=i(0)(i(2),null,!1,null,null,null);s.options.__file="src/PrettyCheckbox.vue",t.exports=s.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(3),r={name:"pretty-checkbox",input_type:"checkbox",model:s.model,props:s.props,data:s.data,computed:s.computed,watch:s.watch,mounted:s.mounted,methods:s.methods,render:s.render};e.default=r},function(t,e,i){var s=i(0)(i(4),i(5),!1,null,null,null);s.options.__file="src/PrettyInput.vue",t.exports=s.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"pretty-input",model:{prop:"modelValue",event:"change"},props:{type:String,name:String,value:{},modelValue:{},trueValue:{},falseValue:{},checked:{},disabled:{},required:{},indeterminate:{},color:String,offColor:String,hoverColor:String,indeterminateColor:String,toggle:{},hover:{},focus:{}},data:function(){return{m_checked:void 0,default_mode:!1}},computed:{_type:function(){return this.$options.input_type?this.$options.input_type:this.type?this.type:"checkbox"},shouldBeChecked:function(){return void 0!==this.modelValue?"radio"===this._type?this.modelValue===this.value:this.modelValue instanceof Array?this.modelValue.includes(this.value):this._trueValue?this.modelValue===this.trueValue:"string"==typeof this.modelValue||!!this.modelValue:void 0===this.m_checked?this.m_checked="string"==typeof this.checked||!!this.checked:this.m_checked},_disabled:function(){return"string"==typeof this.disabled||!!this.disabled},_required:function(){return"string"==typeof this.required||!!this.required},_indeterminate:function(){return"string"==typeof this.indeterminate||!!this.indeterminate},_trueValue:function(){return"string"==typeof this.trueValue?this.trueValue:!!this.trueValue},_falseValue:function(){return"string"==typeof this.falseValue?this.falseValue:!!this.falseValue},_toggle:function(){return"string"==typeof this.toggle||!!this.toggle},_hover:function(){return"string"==typeof this.hover||!!this.hover},_focus:function(){return"string"==typeof this.focus||!!this.focus},classes:function(){return{pretty:!0,"p-default":this.default_mode,"p-round":"radio"===this._type&&this.default_mode,"p-toggle":this._toggle,"p-has-hover":this._hover,"p-has-focus":this._focus,"p-has-indeterminate":this._indeterminate}},onClasses:function(){var t={state:!0,"p-on":this._toggle};return this.color&&(t["p-"+this.color]=!0),t},offClasses:function(){var t={state:!0,"p-off":!0};return this.offColor&&(t["p-"+this.offColor]=!0),t},hoverClasses:function(){var t={state:!0,"p-is-hover":!0};return this.hoverColor&&(t["p-"+this.hoverColor]=!0),t},indeterminateClasses:function(){var t={state:!0,"p-is-indeterminate":!0};return this.indeterminateColor&&(t["p-"+this.indeterminateColor]=!0),t}},watch:{checked:function(t){this.m_checked=t},indeterminate:function(t){this.$refs.input.indeterminate=t}},mounted:function(){this.$vnode.data&&!this.$vnode.data.staticClass&&(this.default_mode=!0),this._indeterminate&&(this.$refs.input.indeterminate=!0),this.$el.setAttribute("p-"+this._type,"")},methods:{updateInput:function(t){if("radio"!==this._type){this.$emit("update:indeterminate",!1);var e=t.target.checked;if(this.m_checked=e,this.modelValue instanceof Array){var i=[].concat(function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(this.modelValue));e?i.push(this.value):i.splice(i.indexOf(this.value),1),this.$emit("change",i)}else this.$emit("change",e?!this._trueValue||this.trueValue:!!this._falseValue&&this.falseValue)}else this.$emit("change",this.value)}}}},function(t,e,i){var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.classes},[e("input",{ref:"input",attrs:{type:this._type,name:this.name,disabled:this._disabled,required:this._required},domProps:{checked:this.shouldBeChecked,value:this.value},on:{change:this.updateInput}}),this._v(" "),e("div",{class:this.onClasses},[this._t("extra"),this._v(" "),e("label",[this._t("default")],2)],2),this._v(" "),this._toggle?e("div",{class:this.offClasses},[this._t("off-extra"),this._v(" "),this._t("off-label")],2):this._e(),this._v(" "),this._hover?e("div",{class:this.hoverClasses},[this._t("hover-extra"),this._v(" "),this._t("hover-label")],2):this._e(),this._v(" "),this._indeterminate?e("div",{class:this.indeterminateClasses},[this._t("indeterminate-extra"),this._v(" "),this._t("indeterminate-label")],2):this._e()])};s._withStripped=!0,t.exports={render:s,staticRenderFns:[]}}])},355:function(t,e,r){"use strict";r(293)},356:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:static;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:"";width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc(-108% + 1em);background-color:transparent}.pretty .state label:before{border-color:#bdc3c7}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@-webkit-keyframes zoom{0%{opacity:0;transform:scale(0)}}@keyframes zoom{0%{opacity:0;transform:scale(0)}}@-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@-webkit-keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@-webkit-keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{transform:scale(1)}.pretty.p-default .state label:after{transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:.14286em}.pretty.p-default.p-thick .state label:after{transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc(-108% + 1em);left:0;z-index:0;text-align:center;line-height:normal;transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:"";border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc(-116% + 1em);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover,.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state.p-off,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain.p-toggle .state label:before,.pretty.p-plain input:checked~.state label:before{content:none}.pretty.p-plain.p-plain .icon{transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth.p-default input:checked+.state label:after,.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:"";transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty.p-toggle .state.p-primary label:after,.pretty input:checked~.state.p-primary label:after{background-color:#428bca!important}.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg,.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-primary-o label:before,.pretty input:checked~.state.p-primary-o label:before{border-color:#428bca}.pretty.p-toggle .state.p-primary-o label:after,.pretty input:checked~.state.p-primary-o label:after{background-color:transparent}.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg,.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty.p-toggle .state.p-info label:after,.pretty input:checked~.state.p-info label:after{background-color:#5bc0de!important}.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg,.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-info-o label:before,.pretty input:checked~.state.p-info-o label:before{border-color:#5bc0de}.pretty.p-toggle .state.p-info-o label:after,.pretty input:checked~.state.p-info-o label:after{background-color:transparent}.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg,.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty.p-toggle .state.p-success label:after,.pretty input:checked~.state.p-success label:after{background-color:#5cb85c!important}.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg,.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-success-o label:before,.pretty input:checked~.state.p-success-o label:before{border-color:#5cb85c}.pretty.p-toggle .state.p-success-o label:after,.pretty input:checked~.state.p-success-o label:after{background-color:transparent}.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg,.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty.p-toggle .state.p-warning label:after,.pretty input:checked~.state.p-warning label:after{background-color:#f0ad4e!important}.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg,.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-warning-o label:before,.pretty input:checked~.state.p-warning-o label:before{border-color:#f0ad4e}.pretty.p-toggle .state.p-warning-o label:after,.pretty input:checked~.state.p-warning-o label:after{background-color:transparent}.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg,.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}.pretty.p-toggle .state.p-danger label:after,.pretty input:checked~.state.p-danger label:after{background-color:#d9534f!important}.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg,.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-danger-o label:before,.pretty input:checked~.state.p-danger-o label:before{border-color:#d9534f}.pretty.p-toggle .state.p-danger-o label:after,.pretty input:checked~.state.p-danger-o label:after{background-color:transparent}.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg,.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc(-135% + 1em)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state:before,.pretty .state label:after,.pretty .state label:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}#sc-style-switcher{position:fixed;top:20%;right:0;width:220px;transform:translateX(272px);transition:all .28s cubic-bezier(.55,0,.1,1);background:#fff;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:0 0 0 4px;padding:24px;z-index:1200}#sc-style-switcher:before{content:"";position:absolute;top:0;left:0;width:20px;height:2.5rem;background:#fff;z-index:20}@media (max-width:959px){#sc-style-switcher{width:180px;transform:translateX(232px)}}#sc-style-switcher.active{transform:translateX(0)}#sc-style-switcher .sc-sSw-toggle{color:#00838f;font-size:24px;font-size:1.5rem;position:absolute;left:-3rem;top:0;width:3rem;height:2.5rem;border-radius:.25rem 0 0 .25rem;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}#sc-style-switcher .sc-sSw-toggle .mdi{height:2.25rem}#sc-style-switcher .sc-sSw-theme-switcher{margin-top:-16px!important}#sc-style-switcher .sc-sSw-theme-switcher,#sc-style-switcher .sc-sSw-theme-switcher li{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;justify-content:space-between}#sc-style-switcher .sc-sSw-theme-switcher li{margin-top:16px;opacity:.4;transition:opacity .14s ease;position:relative}#sc-style-switcher .sc-sSw-theme-switcher li:after{content:"";position:absolute;top:0;left:50%;margin-left:-12px;display:block;font-family:"Material Design Icons";font-size:24px;font-size:1.5rem;color:#fff;line-height:1}#sc-style-switcher .sc-sSw-theme-switcher li a{display:flex;width:64px;height:1.5rem}@media (max-width:959px){#sc-style-switcher .sc-sSw-theme-switcher li a{width:48px}}#sc-style-switcher .sc-sSw-theme-switcher li a span{width:50%}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-default span:first-child{background:#00acc1}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-default span:last-child{background:#e53935}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-a span:first-child{background:#1e88e5}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-a span:last-child{background:#43a047}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-b span:first-child{background:#3949ab}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-b span:last-child{background:#d81b60}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-c span:first-child{background:#757575}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-c span:last-child{background:#039be5}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-d span:first-child{background:#8e24aa}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-d span:last-child{background:#43a047}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-e span:first-child{background:#e53935}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-e span:last-child{background:#3949ab}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-f span:first-child{background:#546e7a}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-f span:last-child{background:#f4511e}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-g span:first-child{background:#5e35b1}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-g span:last-child,#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-h span:first-child{background:#6d4c41}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-h span:last-child{background:#00acc1}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-dark span:first-child{background:#006064}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-dark span:last-child{background:#424242}#sc-style-switcher .sc-sSw-theme-switcher li.active,#sc-style-switcher .sc-sSw-theme-switcher li:hover{opacity:1}#sc-style-switcher .sc-sSw-theme-switcher li.active:after{content:"\\f12c"}',""]),t.exports=o},376:function(t,e,r){"use strict";r.r(e);r(29),r(30),r(31),r(19),r(17),r(23);var o=r(7),n=r(4),c=r(354);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={name:"ScStyleSwitcher",components:{PrettyCheck:r.n(c).a},data:function(){return{sSwitchActive:!1,themes:["theme-default","theme-a","theme-b","theme-c","theme-d","theme-e","theme-f","theme-g","theme-h","theme-dark"],scrollToActive:!1,accordionMode:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)(["vxAppTheme","vxSidebarMainAccordionMode","vxSidebarMainScrollToActive"])),watch:{vxSidebarMainScrollToActive:function(t){this.scrollToActive=t},vxSidebarMainAccordionMode:function(t){this.accordionMode=t},$route:function(){this.sSwitchActive&&(this.sSwitchActive=!1)}},mounted:function(){var t=this;this.$nextTick((function(){t.accordionMode=t.vxSidebarMainAccordionMode,t.scrollToActive=t.vxSidebarMainScrollToActive}))},methods:{changeTheme:function(t){this.$store.commit("setAppTheme",t)},scrollToActiveToggle:function(t){this.$store.commit("sidebarMainScrollToActiveToggle",t)},accordionModeToggle:function(t){this.$store.commit("sidebarMainAccordionModeToggle",t)}}},h=(r(355),r(2)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{active:t.sSwitchActive},attrs:{id:"sc-style-switcher"}},[r("a",{staticClass:"sc-sSw-toggle",attrs:{id:"sc-style-switcher-toggle",href:"javascript:void(0)"},on:{click:function(e){e.stopPropagation(),t.sSwitchActive=!t.sSwitchActive}}},[r("i",{staticClass:"mdi mdi-tune"})]),t._v(" "),r("p",{staticClass:"sc-text-semibold uk-margin-top-remove uk-margin-bottom"},[t._v("\n\t\tThemes\n\t")]),t._v(" "),r("ul",{staticClass:"sc-sSw-theme-switcher"},t._l(t.themes,(function(e){return r("li",{key:e,class:{active:t.vxAppTheme===e}},[r("a",{staticClass:"sc-sSw-theme-switch",class:["sc-sW-"+e],attrs:{href:"javascript:void(0)"},on:{click:function(r){return r.stopPropagation(),t.changeTheme(e)}}},[r("span",{staticClass:"sc-sSw-theme-switch-color-1"}),t._v(" "),r("span",{staticClass:"sc-sSw-theme-switch-color-2"})])])})),0),t._v(" "),r("p",{staticClass:"sc-text-semibold uk-margin-large-top uk-margin-bottom"},[t._v("\n\t\tMain Menu\n\t")]),t._v(" "),r("div",{staticClass:"uk-flex uk-flex-middle uk-margin-small-bottom"},[r("PrettyCheck",{staticClass:"p-icon",on:{change:t.scrollToActiveToggle},model:{value:t.scrollToActive,callback:function(e){t.scrollToActive=e},expression:"scrollToActive"}},[r("i",{staticClass:"icon mdi mdi-check",attrs:{slot:"extra"},slot:"extra"}),t._v("\n\t\t\tScroll to active\n\t\t")])],1),t._v(" "),r("div",{staticClass:"uk-flex uk-flex-middle"},[r("PrettyCheck",{staticClass:"p-icon",on:{change:t.accordionModeToggle},model:{value:t.accordionMode,callback:function(e){t.accordionMode=e},expression:"accordionMode"}},[r("i",{staticClass:"icon mdi mdi-check",attrs:{slot:"extra"},slot:"extra"}),t._v("\n\t\t\tAccordion mode\n\t\t")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);