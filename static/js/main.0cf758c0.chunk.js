(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,function(e,_,t){},,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Output_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_Keys_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_index_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(6),_index_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_8__),App=function(_React$Component){Object(C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(){var e;return Object(C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(e=_super.call(this)).buttonPressed=function(_){e.setState((function(e){return{results:e.results+_}}))},e.state={results:""},e.buttonPressed=e.buttonPressed.bind(Object(C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.buttonEval=e.buttonEval.bind(Object(C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.buttonDelete=e.buttonDelete.bind(Object(C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.buttonClear=e.buttonClear.bind(Object(C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(C_Users_hp_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"buttonEval",value:function buttonEval(){this.setState((function(prevState){return{results:""===prevState.results?"":eval(prevState.results).toString()}}))}},{key:"buttonDelete",value:function(){this.setState((function(e){return{results:e.results.length<=1?"":e.results.slice(0,-1)}}))}},{key:"buttonClear",value:function(){this.setState({results:0})}},{key:"render",value:function(){var e={height:65,width:65,color:"white",backgroundColor:"#12CBC4",borderRadius:"20%",margin:3};return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"main"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Output_js__WEBPACK_IMPORTED_MODULE_6__.a,{results:this.state.results}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:""},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{style:e,name:"C",onClick:this.buttonDelete},"C"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{style:e,name:"AC",onClick:this.buttonClear},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{style:e,name:"=",onClick:this.buttonEval},"=")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Keys_js__WEBPACK_IMPORTED_MODULE_7__.a,{buttonPressed:this.buttonPressed}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},function(e,_,t){"use strict";var a=t(0),s=t.n(a);t(6);_.a=function(e){return s.a.createElement("div",null,s.a.createElement("input",{style:{height:70,width:200,fontSize:45,border:"none"},tpye:"text",placeholder:"0",value:e.results,disabled:!0}))}},function(e,_,t){"use strict";var a=t(2),s=t(3),r=t(5),n=t(4),l=t(0),o=t.n(l),u=(t(6),function(e){Object(r.a)(t,e);var _=Object(n.a)(t);function t(){var e;return Object(a.a)(this,t),(e=_.call(this)).buttonPressed=function(_){e.props.buttonPressed(_.target.name)},e}return Object(s.a)(t,[{key:"render",value:function(){var e={height:65,width:65,color:"white",backgroundColor:"#12CBC4",margin:3,borderRadius:"50%"},_={height:65,width:"65px",color:"white",backgroundColor:"#12CBC4",margin:3,borderRadius:"20%"},t={height:65,width:"65px",color:"white",backgroundColor:"#12CBC4",margin:3,marginBottom:5,borderRadius:"20%"};return o.a.createElement("container",null,o.a.createElement("div",null,o.a.createElement("button",{style:e,name:"1",onClick:this.buttonPressed},"1"),o.a.createElement("button",{style:e,name:"2",onClick:this.buttonPressed},"2"),o.a.createElement("button",{style:e,name:"3",onClick:this.buttonPressed},"3")),o.a.createElement("div",null,o.a.createElement("button",{style:e,name:"4",onClick:this.buttonPressed},"4"),o.a.createElement("button",{style:e,name:"5",onClick:this.buttonPressed},"5"),o.a.createElement("button",{style:e,name:"6",onClick:this.buttonPressed},"6")),o.a.createElement("div",null,o.a.createElement("button",{style:e,name:"7",onClick:this.buttonPressed},"7"),o.a.createElement("button",{style:e,name:"8",onClick:this.buttonPressed},"8"),o.a.createElement("button",{style:e,name:"9",onClick:this.buttonPressed},"9")),o.a.createElement("div",null,o.a.createElement("button",{style:e,name:"0",onClick:this.buttonPressed},"0"),o.a.createElement("button",{style:_,name:"+",onClick:this.buttonPressed},"+"),o.a.createElement("button",{style:_,name:"-",onClick:this.buttonPressed},"-")),o.a.createElement("div",null,o.a.createElement("button",{style:t,name:"*",onClick:this.buttonPressed},"*"),o.a.createElement("button",{style:t,name:"/",onClick:this.buttonPressed},"/"),o.a.createElement("button",{style:t,name:".",onClick:this.buttonPressed},".")))}}]),t}(o.a.Component));_.a=u},function(e,_,t){e.exports=t(13)},function(e,_,t){"use strict";t.r(_);var a=t(0),s=t.n(a),r=t(8),n=t.n(r),l=t(9);n.a.render(s.a.createElement(l.a,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.0cf758c0.chunk.js.map