(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1938:function(e,t,a){e.exports=JSON.parse('{"contextMenu":"Table__contextMenu___3X9tF","defaultTextEditor":"Table__defaultTextEditor___1osDz","tableButton":"Table__tableButton___ctD3_","tableButtonCol":"Table__tableButtonCol___1yDog","tableButtonRow":"Table__tableButtonRow___9LoF1","tableModule":"Table__tableModule___31YtD","cellBackgroundColor":"Table__cellBackgroundColor___1SGZe","cellWrapper":"Table__cellWrapper___2_XaT"}')},2006:function(e,t,a){"use strict";a.r(t);a(34),a(25),a(161),a(297),a(878),a(50),a(127),a(1284),a(26);var n=a(7),l=a.n(n),o=a(5),r=a.n(o),c=a(8),s=a.n(c),i=a(9),u=a.n(i),d=a(3),p=a.n(d),m=a(10),f=a.n(m),b=a(2),h=a.n(b),v=a(12),C=a.n(v),w=a(0),k=a.n(w),E=a(1956),y=a(1957),_=a(116),g=a(879),D=a.n(g),S=a(1997),O=a.n(S),R=a(1999),A=a.n(R),T=a(880),B=a.n(T),j=a(2e3),x=a.n(j),N=a(11),P=a(6),M=a.n(P),F=a(310),H=a.n(F),I=a(1938),L=a.n(I),V=a(618),J=function(e){function t(e){var a;return l()(this,t),a=s()(this,u()(t).call(this,e)),h()(p()(a),"state",{cellData:a.props.defaultValue,open:!0}),h()(p()(a),"close",(function(){a.setState({open:!1}),a.props.onUpdate(a.props.defaultValue)})),h()(p()(a),"refInput",(function(e){a.input=e})),a.updateData=a.updateData.bind(p()(a)),a}return f()(t,e),r()(t,[{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"updateData",value:function(){this.props.onUpdate(this.state.cellData)}},{key:"render",value:function(){var e=this,t=this.state.open?"block":"none";return k.a.createElement("div",{className:L.a.defaultTextEditor,style:{display:t}},k.a.createElement(V.a,{inputRef:this.refInput,defaultValue:this.state.cellData,onChange:function(t){e.setState({cellData:t.currentTarget.value})},onBlur:this.updateData}))}}]),t}(k.a.Component);h()(J,"defaultProps",{defaultValue:""});a(42),a(13),a(45),a(46),a(47),a(48),a(39);var K=a(1286),U=a.n(K),W=a(2002),X=a.n(W),z=a(82),G=a.n(z),Y=a(35);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var q=function(e){function t(){var e,a;l()(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return a=s()(this,(e=u()(t)).call.apply(e,[this].concat(o))),h()(p()(a),"state",{isHovered:!1}),h()(p()(a),"onMouseEnter",(function(){return a.setState({isHovered:!0})})),h()(p()(a),"onMouseLeave",(function(){return a.setState({isHovered:!1})})),h()(p()(a),"getCellStyles",(function(e,t,a){var n=B()(a,"cell","cellBody");return e?a.topRow:t?a.bottomRow:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},n,{},a.cell,{},a.cellBody)})),a}return f()(t,e),r()(t,[{key:"render",value:function(){var e=this.props,t=e.row,a=e.id,n=e.styles,l=e.data,o=e.cell,r=e.tableData,c=this.state.isHovered,s=X()(r).id===t.id,i=U()(r).id===t.id,u=this.getCellStyles(s,i,n),d={};u&&s?d=u.background:u&&i?d=u.background:n&&n.cell&&n.cell.background&&(d=n.cell.background);var p={};c&&d&&d.hoverBackgroundColor&&(p.backgroundColor=d.hoverBackgroundColor),d=G()({},d,p);var m="context-menu-for-".concat(a);return k.a.createElement("div",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,className:L.a.cellWrapper},k.a.createElement(E.b,{className:L.a.tableTd,id:m,collect:function(e){return e},col:l.col,row:t},k.a.createElement(Y.a,{className:L.a.cellBackgroundColor,styles:d}),k.a.createElement(Y.a,{styles:u},o||k.a.createElement("span",null," "))))}}]),t}(w.Component);q.defaultProps={styles:{}};var Q=function(e,t){return D()(e,(function(e){return O()({},e,t)}))},$=function(e,t){return k.a.createElement(J,C()({onUpdate:e},t))},ee=function(e){function t(e){var a;return l()(this,t),a=s()(this,u()(t).call(this,e)),h()(p()(a),"onAfterSaveCell",(function(){var e=H()({tableData:a.state.tableData,columnOrder:a.state.columnOrder});a.props.editorActions.updateModuleContent(a.props.id,{"table-0":{json:e}})})),h()(p()(a),"generateColumns",(function(e){for(var t=[],n=0;n<e.length;n++)if("id"===e[n])t.push(k.a.createElement(y.TableHeaderColumn,{key:e[n],dataField:"id",isKey:!0,hidden:!0},"Product ID"));else{var l=a.props.isEditingContent&&!A()(a.state.headerColumns,e[n]);t.push(k.a.createElement(y.TableHeaderColumn,{columnClassName:A()(a.state.headerColumns,e[n])?"locked-column":"editable-column",editable:l,dataField:e[n].toString(),key:e[n].toString(),dataFormat:a.cellFormatter,formatExtraData:{col:e[n]},customEditor:{getElement:$}},e[n]))}return t})),h()(p()(a),"addColumn",(function(e,t){var n=t&&t.placement?t.placement:"append",l=t&&t.col?t.col:null,o=Date.now(),r=a.state.tableData,c={};c[o]=null;var s=Q(r,c),i=a.state.columnOrder,u=i.indexOf(l);switch(n){case"before":i.splice(u,0,o);break;case"after":i.splice(u+1,0,o);break;case"append":default:i.splice(i.length,0,o)}var d=a.state;d.tableData=s,d.columnOrder=i,a.setState(d,a.onAfterSaveCell)})),h()(p()(a),"removeColumn",(function(e){var t=a.state.tableData,n=D()(t,(function(t){return B()(t,e)})),l=a.state.columnOrder,o=x()(l,e),r=a.state;r.tableData=n,r.columnOrder=o,a.setState(r,a.onAfterSaveCell)})),h()(p()(a),"addRow",(function(e,t){for(var n=t&&t.placement?t.placement:"append",l=t&&t.row&&t.row.id?t.row.id:null,o=a.state.tableData,r={},c=0;c<a.state.columnOrder.length;c++)r[a.state.columnOrder[c]]=null;switch(n){case"before":r.id=l,o.forEach((function(e){e.id>=r.id&&(e.id=(parseInt(e.id,10)+1).toString())})),o.splice(l-1,0,r);break;case"after":r.id=l+1,o.forEach((function(e){e.id>=r.id&&(e.id=(parseInt(e.id,10)+1).toString())})),o.splice(l,0,r);break;case"append":r.id=o.length+1,o.splice(o.length,0,r);break;default:o.splice(o.length,0,r),r.id=o.length+1}var s=a.state;s.tableData=o,a.setState(s,a.onAfterSaveCell)})),h()(p()(a),"removeRow",(function(e){var t=a.state.tableData.filter((function(t){return t.id!==e}));t.forEach((function(t){t.id>=e&&(t.id=(parseInt(t.id,10)-1).toString())})),a.setState({tableData:t},a.onAfterSaveCell)})),h()(p()(a),"handleKeyPress",(function(){})),h()(p()(a),"cellFormatter",(function(e,t,n){var l=a.state.tableData,o=a.props,r=o.id,c=o.styles;return k.a.createElement(q,C()({},a.props,{cell:e,row:t,data:n,styles:c,id:r,tableData:l}))})),h()(p()(a),"trClassFormat",(function(e){return A()(a.state.headerRows,e.id)?"locked-column":null})),a.state={tableData:H()(a.props.content["table-0"].json.tableData),columnOrder:H()(a.props.content["table-0"].json.columnOrder),headerRows:H()(a.props.content["table-0"].json.headerRows),headerColumns:H()(a.props.content["table-0"].json.headerColumns),selectedColumn:null,selectedRow:null},a}return f()(t,e),r()(t,[{key:"setActiveAxis",value:function(e){this.setState({selectedColumn:e.col,selectedRow:e.row.id})}},{key:"linkCellFormatter",value:function(e,t){var a=this;return k.a.createElement("div",{className:"content",href:"#",onKeyPress:function(n){return a.keyboardHandleCellClick(n,e,t)},onClick:function(n){return a.handleCellClick(n,e,t)}},e)}},{key:"render",value:function(){var e=this,t=this.props.isEditingContent,a=this.state,n=a.selectedColumn,l=a.selectedRow,o=a.headerRows,r=this.state,c=r.columnOrder,s=r.tableData,i={mode:"click",blurToSave:!1,afterSaveCell:this.onAfterSaveCell,nonEditableRows:function(){return o||[]}},u="context-menu-for-".concat(this.props.id),d=M()(L.a.container,"overflow-content",h()({},L.a.editing,t));return k.a.createElement("div",{className:d},t&&k.a.createElement(_.Portal,null,k.a.createElement(E.a,{id:u,collect:function(e){return e},onShow:function(t){return e.setActiveAxis(t.detail.data)},className:M()("ignore-react-onclickoutside",L.a.contextMenu)},k.a.createElement(E.c,{data:{key:"remove_row"},onClick:function(){return e.removeRow(l)}},"Remove This Row"),k.a.createElement(E.c,{data:{key:"remove_column"},onClick:function(){return e.removeColumn(n)}},"Remove This Column"),k.a.createElement(E.d,{title:"Add Row..."},k.a.createElement(E.c,{onClick:this.addRow,data:{placement:"before"}},"Above"),k.a.createElement(E.c,{onClick:this.addRow,data:{placement:"after"}},"Below")),k.a.createElement(E.d,{title:"Add Column..."},k.a.createElement(E.c,{onClick:this.addColumn,data:{placement:"before"}},"Before"),k.a.createElement(E.c,{onClick:this.addColumn,data:{placement:"after"}},"After")))),k.a.createElement(y.BootstrapTable,{tableBodyClass:L.a.tableModule,data:s,cellEdit:i,selectRow:{mode:"radio",className:"row-selected",hideSelectColumn:!0,clickToSelectAndEditCell:!0},trClassName:this.trClassFormat,hover:!0},this.generateColumns(c)),t&&k.a.createElement("div",{className:"clearfix"},this.state.tableData.length>0&&k.a.createElement("button",{type:"button","aria-label":"Add Column",className:L.a.tableButtonCol,onClick:function(){return e.addColumn("append")}},k.a.createElement(N.a,null)," ","Add Column"),k.a.createElement("button",{type:"button","aria-label":"Add Row",className:L.a.tableButtonRow,onClick:function(){return e.addRow("append")}},k.a.createElement(N.a,null)," ","Add Row")))}}]),t}(k.a.Component);t.default=ee}}]);
//# sourceMappingURL=https://s3.amazonaws.com/assets.digication.com/reflect-web/TableModule.a91cd5f63dc886e06f6c.chunk.js.map