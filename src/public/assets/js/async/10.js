(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{47:function(t,a,o){"use strict";o.r(a);var e=o(8).a.get("group"),s={name:"AddGroupComponent",data:function(){return{group:{name:"",comment:""},error:""}},methods:{storeGroup:function(t){var a=this;t.preventDefault();var o=this;o.error="",e.create(this.group).then(function(t){o.$parent.groups.push(t.data.data),o.group={},$("#modal-add-group").modal("toggle"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove()}).catch(function(t){var o=t.response.data.errors;a.error=o[Object.keys(o)[0]][0]})}}},r=o(7),n=Object(r.a)(s,function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"modal fade",attrs:{id:"modal-add-group",tabindex:"-1",role:"dialog","aria-labelledby":"modal-popout","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-dialog-popout",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("form",{attrs:{method:"post"},on:{submit:t.storeGroup}},[o("div",{staticClass:"block block-themed block-transparent mb-0"},[t._m(0),t._v(" "),o("div",{staticClass:"block-content"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"group-name"}},[t._v("Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.group.name,expression:"group.name"}],staticClass:"form-control",attrs:{type:"text",id:"group-name",placeholder:"Enter Title.."},domProps:{value:t.group.name},on:{input:function(a){a.target.composing||t.$set(t.group,"name",a.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"group-comment"}},[t._v("Comment")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.group.comment,expression:"group.comment"}],staticClass:"form-control",attrs:{id:"group-comment",cols:"30",rows:"5"},domProps:{value:t.group.comment},on:{input:function(a){a.target.composing||t.$set(t.group,"comment",a.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("div",{staticClass:"w-100 text-danger"},[t._v(t._s(t.error))]),t._v(" "),o("button",{staticClass:"btn btn-alt-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),t._m(1)])])])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"block-header bg-primary-dark"},[a("h3",{staticClass:"block-title"},[this._v("Create new group")]),this._v(" "),a("div",{staticClass:"block-options"},[a("button",{staticClass:"btn-block-option",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("i",{staticClass:"si si-close"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-alt-success",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-check"}),this._v(" Create\n                    ")])}],!1,null,"65bb6c6d",null);a.default=n.exports}}]);