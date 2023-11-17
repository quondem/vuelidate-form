(function(){"use strict";var e={4210:function(e,t,r){var a=r(6369),i=r(4951),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[e.success?t("div",{staticClass:"success"},[e._v("Новый клиент успешно создан")]):[t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"name"}},[e._v("Имя*")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form__input",class:{invalid:e.$v.name.$dirty&&!e.$v.name.required||e.$v.name.$dirty&&!e.$v.name.minLength},attrs:{name:"name",type:"text"},domProps:{value:e.name},on:{blur:[e.$v.name.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.name=t.target.value.trim())}}}),e.$v.name.$error?[e.$v.name.required?t("p",{staticClass:"form__error"},[e._v("Введите более двух символов")]):t("p",{staticClass:"form__error"},[e._v("Введите имя")])]:e._e()],2),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"surname"}},[e._v("Фамилия*")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.surname,expression:"surname",modifiers:{trim:!0}}],staticClass:"form__input",class:{invalid:e.$v.surname.$dirty&&!e.$v.surname.required||e.$v.surname.$dirty&&!e.$v.surname.minLength},attrs:{name:"surname",type:"text"},domProps:{value:e.surname},on:{blur:[e.$v.surname.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.surname=t.target.value.trim())}}}),e.$v.surname.$error?[e.$v.surname.required?t("p",{staticClass:"form__error"},[e._v("Введите более двух символов")]):t("p",{staticClass:"form__error"},[e._v(" Введите фамилию ")])]:e._e()],2),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"patronymic"}},[e._v("Отчество")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.patronymic,expression:"patronymic",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"patronymic",type:"text"},domProps:{value:e.patronymic},on:{input:function(t){t.target.composing||(e.patronymic=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"birthDate"}},[e._v("Дата рождения*")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.birthDate,expression:"birthDate",modifiers:{trim:!0}}],staticClass:"form__input",class:{invalid:e.$v.birthDate.$dirty&&!e.$v.birthDate.required},attrs:{name:"birthDate",type:"date"},domProps:{value:e.birthDate},on:{blur:[e.$v.birthDate.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.birthDate=t.target.value.trim())}}}),e.$v.birthDate.$error?[e.$v.birthDate.required?e._e():t("p",{staticClass:"form__error"},[e._v(" Введите дату рождения ")])]:e._e()],2),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"phone"}},[e._v("Телефон*")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.phone,expression:"phone",modifiers:{trim:!0}}],staticClass:"form__input",class:{invalid:e.$v.phone.$dirty&&!e.$v.phone.required||e.$v.phone.$dirty&&!e.$v.phone.minLength||e.$v.phone.$dirty&&!e.$v.phone.numeric},attrs:{name:"phone",type:"phone"},domProps:{value:e.phone},on:{blur:[e.$v.phone.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.phone=t.target.value.trim())}}}),e.$v.phone.$error?[e.$v.phone.required?t("p",{staticClass:"form__error"},[e._v("Введите корректный телефон")]):t("p",{staticClass:"form__error"},[e._v("Введите телефон")])]:e._e()],2),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"sex"}},[e._v("Пол")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sex,expression:"sex",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"sex",type:"text"},domProps:{value:e.sex},on:{input:function(t){t.target.composing||(e.sex=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"clientType"}},[e._v("Группа клиентов*")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.clientType,expression:"clientType"}],staticClass:"form__multiselect",class:{invalid:e.$v.clientType.$dirty&&!e.$v.clientType.required},attrs:{name:"clientType",multiple:""},on:{blur:e.$v.clientType.$touch,change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.clientType=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"vip"}},[e._v("VIP")]),t("option",{attrs:{value:"problem"}},[e._v("Проблемные")]),t("option",{attrs:{value:"omc"}},[e._v("ОМС")])]),e.$v.clientType.$error?[e.$v.clientType.required?e._e():t("p",{staticClass:"form__error"},[e._v(" Выберите группу ")])]:e._e()],2),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"doctor"}},[e._v("Лечащий врач")]),e.doctor?e._e():t("div",{staticClass:"form__placeholder"},[e._v("Выберите врача:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.doctor,expression:"doctor"}],staticClass:"form__multiselect",attrs:{name:"doctor",placeholder:"Выберите врача"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.doctor=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"ivanov"}},[e._v("Иванов")]),t("option",{attrs:{value:"zaharov"}},[e._v("Захаров")]),t("option",{attrs:{value:"chernisheva"}},[e._v("Чернышева")])])]),t("div",{staticClass:"form__group-sms"},[t("label",{staticClass:"form__label",attrs:{for:"sms"}},[e._v("Не отправлять СМС")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sms,expression:"sms",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"sms",type:"checkbox"},domProps:{checked:Array.isArray(e.sms)?e._i(e.sms,null)>-1:e.sms},on:{change:function(t){var r=e.sms,a=t.target,i=!!a.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);a.checked?o<0&&(e.sms=r.concat([s])):o>-1&&(e.sms=r.slice(0,o).concat(r.slice(o+1)))}else e.sms=i}}})]),t("h2",{staticClass:"form__title"},[e._v("Адрес")]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"index"}},[e._v("Индекс")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.index,expression:"index",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"index",type:"text"},domProps:{value:e.index},on:{input:function(t){t.target.composing||(e.index=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"country"}},[e._v("Страна")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.country,expression:"country",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"country",type:"text"},domProps:{value:e.country},on:{input:function(t){t.target.composing||(e.country=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"region"}},[e._v("Область")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.region,expression:"region",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"region",type:"text"},domProps:{value:e.region},on:{input:function(t){t.target.composing||(e.region=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"city"}},[e._v("Город*")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.city,expression:"city",modifiers:{trim:!0}}],staticClass:"form__input",class:{invalid:e.$v.city.$dirty&&!e.$v.city.required||e.$v.city.$dirty&&!e.$v.city.minLength},attrs:{name:"city",type:"text"},domProps:{value:e.city},on:{blur:[e.$v.city.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.city=t.target.value.trim())}}}),e.$v.city.$error?[e.$v.city.required?t("p",{staticClass:"form__error"},[e._v("Введите более двух символов")]):t("p",{staticClass:"form__error"},[e._v("Введите город")])]:e._e()],2),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"street"}},[e._v("Улица")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.street,expression:"street",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"street",type:"text"},domProps:{value:e.street},on:{input:function(t){t.target.composing||(e.street=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"house"}},[e._v("Дом")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.house,expression:"house",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"house",type:"text"},domProps:{value:e.house},on:{input:function(t){t.target.composing||(e.house=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("h2",{staticClass:"form__title"},[e._v("Паспорт")]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"documentType"}},[e._v("Тип документа*")]),e.documentType?e._e():t("div",{staticClass:"form__placeholder"},[e._v(" Выберите документ: ")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.documentType,expression:"documentType"}],staticClass:"form__multiselect",class:{invalid:e.$v.documentType.$dirty&&!e.$v.documentType.required},attrs:{name:"documentType",placeholder:"Выберите врача"},on:{blur:e.$v.documentType.$touch,change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.documentType=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"ivanov"}},[e._v("Паспорт")]),t("option",{attrs:{value:"zaharov"}},[e._v("Свидетельство о рождении")]),t("option",{attrs:{value:"chernisheva"}},[e._v("Вод. удостоверение")])]),e.$v.documentType.$error?[e.$v.documentType.required?e._e():t("p",{staticClass:"form__error"},[e._v(" Выберите документ ")])]:e._e()],2),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"series"}},[e._v("Серия")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.series,expression:"series",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"series",type:"text"},domProps:{value:e.series},on:{input:function(t){t.target.composing||(e.series=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"number"}},[e._v("Номер")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.number,expression:"number",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"number",type:"text"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"issuedBy"}},[e._v("Кем выдан")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.issuedBy,expression:"issuedBy",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{name:"issuedBy",type:"text"},domProps:{value:e.issuedBy},on:{input:function(t){t.target.composing||(e.issuedBy=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"form__group"},[t("label",{staticClass:"form__label",attrs:{for:"issuedDate"}},[e._v("Дата выдачи*")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.issuedDate,expression:"issuedDate",modifiers:{trim:!0}}],staticClass:"form__input",class:{invalid:e.$v.issuedDate.$dirty&&!e.$v.issuedDate.required},attrs:{name:"issuedDate",type:"date"},domProps:{value:e.issuedDate},on:{blur:[e.$v.issuedDate.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.issuedDate=t.target.value.trim())}}}),e.$v.issuedDate.$error?[e.$v.issuedDate.required?e._e():t("p",{staticClass:"form__error"},[e._v(" Введите дату выдачи ")])]:e._e()],2),t("button",{staticClass:"form__button"},[e._v("Отправить")])]],2)])},o=[],n=r(5795),u={name:"form-test",data(){return{success:!1,name:"",surname:"",patronymic:"",birthDate:"",phone:"",sex:"",clientType:[],doctor:"",sms:!1,index:"",country:"",region:"",city:"",street:"",house:"",documentType:"",series:"",number:"",issuedBy:"",issuedDate:""}},validations:{name:{required:n.C1,minLength:(0,n.Ei)(2)},surname:{required:n.C1,minLength:(0,n.Ei)(2)},birthDate:{required:n.C1},phone:{required:n.C1,minLength:(0,n.Ei)(10),numeric:n.uR},clientType:{required:n.C1},city:{required:n.C1,minLength:(0,n.Ei)(2)},documentType:{required:n.C1},issuedDate:{required:n.C1}},methods:{async submitForm(){console.log(this.$v),this.$v.$touch();const e=await this.$v.$invalid;e?alert("Введите все поля"):this.success=!0}}},l=u,m=r(1001),c=(0,m.Z)(l,s,o,!1,null,null,null),v=c.exports;a.ZP.config.productionTip=!1,a.ZP.config.devtools=!0,a.ZP.use(i.ZP),new a.ZP({render:e=>e(v)}).$mount("#app")}},t={};function r(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,a,i,s){if(!a){var o=1/0;for(m=0;m<e.length;m++){a=e[m][0],i=e[m][1],s=e[m][2];for(var n=!0,u=0;u<a.length;u++)(!1&s||o>=s)&&Object.keys(r.O).every((function(e){return r.O[e](a[u])}))?a.splice(u--,1):(n=!1,s<o&&(o=s));if(n){e.splice(m--,1);var l=i();void 0!==l&&(t=l)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[a,i,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,s,o=a[0],n=a[1],u=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in n)r.o(n,i)&&(r.m[i]=n[i]);if(u)var m=u(r)}for(t&&t(a);l<o.length;l++)s=o[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(m)},a=self["webpackChunkform"]=self["webpackChunkform"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(4210)}));a=r.O(a)})();
//# sourceMappingURL=app.37507c07.js.map