"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[777],{7777:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var t=r(5671),o=r(3144),u=r(136),i=r(7277),s=r(7375),a=r(4673),l=r(2791),c=r(9439),f={selectedPage:"Paginator_selectedPage__ZNuxp"},p=r(184),g=function(n){var e=n.totalItemsCount,r=n.pageSize,t=n.currentPage,o=n.onPageChanged,u=n.portionSize,i=void 0===u?10:u,s=Math.ceil(e/r);s>=1e4&&(s=1e4);for(var a=[],g=1;g<=s;g++)a.push(g);var h=Math.ceil(s/i),d=(0,l.useState)(1),v=(0,c.Z)(d,2),P=v[0],w=v[1],y=(P-1)*i+1,m=P*i;return(0,p.jsxs)("div",{className:f.paginator,children:[P>1&&(0,p.jsx)("button",{onClick:function(){w(P-1)},children:"PREV"}),a.filter((function(n){return n>=y&&n<=m})).map((function(n){return(0,p.jsxs)("span",{onClick:function(){return o(n)},className:t===n?f.selectedPage:"",children:[" ",n," "]},n)})),h>P&&(0,p.jsx)("button",{onClick:function(){return w(P+1)},children:"NEXT"})]})},h="users_userPhoto__L0EJl",d=r(1087),v=function(n){var e=n.user,r=n.unfollow,t=n.follow,o=n.followingInProgress;return(0,p.jsxs)("div",{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:(0,p.jsx)(d.OL,{to:"/profile/"+e.id,children:(0,p.jsx)("img",{className:h,src:e.photos.small?e.photos.small:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"})})}),(0,p.jsx)("div",{children:e.followed?(0,p.jsx)("button",{disabled:o.some((function(n){return n===e.id})),onClick:function(){r(e.id)},children:"Unfollow"}):(0,p.jsx)("button",{disabled:o.some((function(n){return n===e.id})),onClick:function(){t(e.id)},children:"Follow"})})]}),(0,p.jsx)("span",{children:(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:e.name}),(0,p.jsx)("div",{children:e.status})]})})]})},P=function(n){var e=n.totalUsersCount,r=n.pageSize,t=n.currentPage,o=n.users,u=n.onPageChanged,i=n.unfollow,s=n.follow,a=n.followingInProgress;return(0,p.jsxs)("div",{children:[(0,p.jsx)(g,{totalItemsCount:e,pageSize:r,currentPage:t,onPageChanged:u}),(0,p.jsx)("div",{children:o.map((function(n){return(0,p.jsx)(v,{user:n,unfollow:i,follow:s,followingInProgress:a},n.id)}))})]})},w=r(9012),y=r(7781),m="NOT_FOUND";var x=function(n,e){return n===e};function j(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?x:t,u=r.maxSize,i=void 0===u?1:u,s=r.resultEqualityCheck,a=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),l=1===i?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:m},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(a):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return m}return{get:t,put:function(e,o){t(e)===m&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(i,a);function c(){var e=l.get(arguments);if(e===m){if(e=n.apply(null,arguments),s){var r=l.getEntries(),t=r.find((function(n){return s(n.value,e)}));t&&(e=t.value)}l.put(arguments,e)}return e}return c.clearCache=function(){return l.clear()},c}function C(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function k(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var u,i=0,s={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(s=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=s,c=l.memoizeOptions,f=void 0===c?r:c,p=Array.isArray(f)?f:[f],g=C(t),h=n.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(p)),d=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:h,dependencies:g,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),d};return o}var b=k(j),z=b((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),S=function(n){return n.usersPage.pageSize},F=function(n){return n.usersPage.totalUsersCount},I=function(n){return n.usersPage.currentPage},U=function(n){return n.usersPage.isFetching},E=function(n){return n.usersPage.followingInProgress},_=function(n){(0,u.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return(n=e.call.apply(e,[this].concat(u))).onPageChanged=function(e){var r=n.props;(0,r.getUsers)(e,r.pageSize)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;(0,n.getUsers)(e,r)}},{key:"render",value:function(){return(0,p.jsxs)(p.Fragment,{children:[this.props.isFetching?(0,p.jsx)(w.p,{isFetching:this.props.isFetching}):null,(0,p.jsx)(P,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),r}(l.Component),N=(0,y.qC)((0,s.$j)((function(n){return{users:z(n),pageSize:S(n),totalUsersCount:F(n),currentPage:I(n),isFetching:U(n),followingInProgress:E(n)}}),{follow:a.ZN,unfollow:a.fv,setCurrentPage:a.D4,getUsers:a.Rf}))(_)}}]);
//# sourceMappingURL=777.850fdcea.chunk.js.map