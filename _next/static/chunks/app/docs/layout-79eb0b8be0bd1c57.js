(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[499],{4506:(e,r,t)=>{"use strict";t.r(r),t.d(r,{CollapsibleSidebar:()=>P,Sidebar:()=>w,SidebarCollapseTrigger:()=>F,SidebarFolder:()=>T,SidebarFolderContent:()=>_,SidebarFolderLink:()=>A,SidebarFolderTrigger:()=>z,SidebarFooter:()=>S,SidebarHeader:()=>k,SidebarItem:()=>M,SidebarPageTree:()=>D,SidebarSeparator:()=>Q,SidebarViewport:()=>C});var n=t(5155),a=t(9946);let l=(0,a.A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),s=(0,a.A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),i=(0,a.A)("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);var d=t(5547),o=t(5695),c=t(2115),u=t(522),h=t(3259),m=t(9688),x=t(5675),f=t(5455),p=t(8758),v=t(263),b=t(3243),g=t(8693);let y=(0,b.F)("relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0",{variants:{active:{true:"bg-fd-primary/10 text-fd-primary",false:"transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"}}}),j=(0,c.createContext)(null),N=(0,c.createContext)(null);function P(e){let{collapsed:r}=(0,v.c)(),[t,a]=(0,c.useState)(!1),l=(0,c.useRef)(0),s=(0,c.useRef)(0);(0,h.T)(r,()=>{a(!1),s.current=Date.now()+150});let i=(0,c.useCallback)(e=>{"touch"===e.pointerType||s.current>Date.now()||(window.clearTimeout(l.current),a(!0))},[]),d=(0,c.useCallback)(e=>{"touch"!==e.pointerType&&(window.clearTimeout(l.current),l.current=window.setTimeout(()=>{a(!1),s.current=Date.now()+150},Math.min(e.clientX,document.body.clientWidth-e.clientX)>100?0:500))},[]);return(0,n.jsx)(w,{...e,onPointerEnter:r?i:void 0,onPointerLeave:r?d:void 0,"data-collapsed":r,className:(0,m.QP)("md:transition-all",r&&"md:-me-(--fd-sidebar-width) md:translate-x-[calc(var(--fd-sidebar-offset)*-1)] rtl:md:translate-x-(--fd-sidebar-offset)",r&&t&&"z-50 md:translate-x-0",r&&!t&&"md:opacity-0",e.className),style:{"--fd-sidebar-offset":"calc(var(--fd-sidebar-width) - 20px)"}})}function w(e){let{defaultOpenLevel:r=0,prefetch:t=!0,inner:a,...l}=e,s=(0,c.useMemo)(()=>({defaultOpenLevel:r,prefetch:t,level:1}),[r,t]);return(0,n.jsx)(j.Provider,{value:s,children:(0,n.jsx)(d.Pg,{id:"nd-sidebar",blockScrollingWidth:768,...l,className:(0,m.QP)("fixed top-[calc(var(--fd-banner-height)+var(--fd-nav-height))] z-30 bg-fd-card text-sm md:sticky md:h-(--fd-sidebar-height)","max-md:inset-x-0 max-md:bottom-0 max-md:bg-fd-background/80 max-md:text-[15px] max-md:backdrop-blur-lg max-md:data-[open=false]:invisible",l.className),style:{...l.style,"--fd-sidebar-height":"calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))"},children:(0,n.jsx)("div",{...a,className:(0,m.QP)("flex size-full max-w-full flex-col pt-2 md:ms-auto md:w-(--fd-sidebar-width) md:border-e md:pt-4",null==a?void 0:a.className),children:l.children})})})}function k(e){return(0,n.jsx)("div",{...e,className:(0,m.QP)("flex flex-col gap-2 px-4 empty:hidden",e.className),children:e.children})}function S(e){return(0,n.jsx)("div",{...e,className:(0,m.QP)("flex flex-col border-t px-4 py-3 empty:hidden",e.className),children:e.children})}function C(e){return(0,n.jsx)(x.FK,{...e,className:(0,m.QP)("h-full",e.className),children:(0,n.jsx)(x.Gl,{className:"p-4",style:{maskImage:"linear-gradient(to bottom, transparent, white 12px)"},children:e.children})})}function Q(e){let{level:r}=q();return(0,n.jsx)("p",{...e,className:(0,m.QP)("inline-flex items-center gap-2 mb-2 px-2 text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0",e.className),style:{paddingInlineStart:L(r),...e.style},children:e.children})}function M(e){let{icon:r,...t}=e,a=(0,o.usePathname)(),s=void 0!==t.href&&(0,f.$)(t.href,a,!1),{prefetch:i,level:d}=q();return(0,n.jsxs)(u.A,{...t,"data-active":s,className:(0,m.QP)(y({active:s}),t.className),prefetch:i,style:{paddingInlineStart:L(d),...t.style},children:[(0,n.jsx)(O,{level:d,active:s}),null!=r?r:t.external?(0,n.jsx)(l,{}):null,t.children]})}function T(e){let{defaultOpen:r=!1,...t}=e,[a,l]=(0,c.useState)(r);return(0,h.T)(r,e=>{e&&l(e)}),(0,n.jsx)(p.Nt,{open:a,onOpenChange:l,...t,children:(0,n.jsx)(N.Provider,{value:(0,c.useMemo)(()=>({open:a,setOpen:l}),[a]),children:t.children})})}function z(e){let{level:r}=q(),{open:t}=E();return(0,n.jsxs)(p.R6,{...e,className:(0,m.QP)(y({active:!1}),"w-full"),style:{paddingInlineStart:L(r),...e.style},children:[(0,n.jsx)(O,{level:r}),e.children,(0,n.jsx)(s,{"data-icon":!0,className:(0,m.QP)("ms-auto transition-transform",!t&&"-rotate-90")})]})}function A(e){let{open:r,setOpen:t}=E(),{prefetch:a,level:l}=q(),i=(0,o.usePathname)(),d=void 0!==e.href&&(0,f.$)(e.href,i,!1);return(0,n.jsxs)(u.A,{...e,"data-active":d,className:(0,m.QP)(y({active:d}),"w-full",e.className),onClick:e=>{e.target.hasAttribute("data-icon")?(t(e=>!e),e.preventDefault()):t(e=>!d||!e)},prefetch:a,style:{paddingInlineStart:L(l),...e.style},children:[(0,n.jsx)(O,{level:l,active:d}),e.children,(0,n.jsx)(s,{"data-icon":!0,className:(0,m.QP)("ms-auto transition-transform",!r&&"-rotate-90")})]})}function _(e){let r=q();return(0,n.jsx)(p.Ke,{...e,className:(0,m.QP)("relative",e.className),children:(0,n.jsxs)(j.Provider,{value:(0,c.useMemo)(()=>({...r,level:r.level+1}),[r]),children:[(0,n.jsx)("div",{className:"absolute w-px inset-y-0 bg-fd-border start-3"}),e.children]})})}function F(e){var r;let{collapsed:t,setCollapsed:a}=(0,v.c)();return(0,n.jsx)("button",{type:"button","aria-label":"Collapse Sidebar","data-collapsed":t,...e,onClick:()=>{a(e=>!e)},children:null!==(r=e.children)&&void 0!==r?r:(0,n.jsx)(i,{})})}function E(){let e=(0,c.useContext)(N);if(!e)throw Error("Missing sidebar folder");return e}function q(){let e=(0,c.useContext)(j);if(!e)throw Error("<Sidebar /> component required.");return e}function D(e){let{root:r}=(0,g.t)();return(0,c.useMemo)(()=>{var t;let{Separator:a,Item:l,Folder:s}=null!==(t=e.components)&&void 0!==t?t:{};return(0,n.jsx)(c.Fragment,{children:function e(r,t){return r.map((r,i)=>{if("separator"===r.type)return a?(0,n.jsx)(a,{item:r},i):(0,n.jsxs)(Q,{className:(0,m.QP)(0!==i&&"mt-8"),children:[r.icon,r.name]},i);if("folder"===r.type){let a=e(r.children,t+1);return s?(0,n.jsx)(s,{item:r,level:t,children:a},i):(0,n.jsx)(I,{item:r,children:a},i)}return l?(0,n.jsx)(l,{item:r},r.url):(0,n.jsx)(M,{href:r.url,external:r.external,icon:r.icon,children:r.name},r.url)})}(r.children,1)},r.$id)},[e.components,r.$id])}function I(e){var r;let{item:t,...a}=e,{defaultOpenLevel:l,level:s}=q(),i=(0,g.L)();return(0,n.jsxs)(T,{defaultOpen:(null!==(r=t.defaultOpen)&&void 0!==r?r:l>=s)||i.includes(t),children:[t.index?(0,n.jsxs)(A,{href:t.index.url,external:t.index.external,...a,children:[t.icon,t.name]}):(0,n.jsxs)(z,{...a,children:[t.icon,t.name]}),(0,n.jsx)(_,{children:a.children})]})}function L(e){return"calc(var(--spacing) * ".concat((e>1?e:0)*2+2,")")}function O(e){let{level:r,active:t}=e;return r<=1?null:(0,n.jsx)("div",{className:(0,m.QP)("absolute w-px inset-y-2 z-[2] start-3",t&&"bg-fd-primary")})}},4921:(e,r,t)=>{Promise.resolve().then(t.bind(t,1053)),Promise.resolve().then(t.bind(t,5061)),Promise.resolve().then(t.bind(t,5453)),Promise.resolve().then(t.bind(t,5403)),Promise.resolve().then(t.bind(t,5395)),Promise.resolve().then(t.bind(t,8532)),Promise.resolve().then(t.bind(t,1339)),Promise.resolve().then(t.bind(t,8693)),Promise.resolve().then(t.bind(t,7424)),Promise.resolve().then(t.bind(t,4506)),Promise.resolve().then(t.bind(t,4657)),Promise.resolve().then(t.t.bind(t,6874,23))},5453:(e,r,t)=>{"use strict";t.d(r,{RootToggle:()=>h});var n=t(5155);let a=(0,t(9946).A)("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);var l=t(2115),s=t(6874),i=t(5695),d=t(9688),o=t(5455),c=t(263),u=t(408);function h(e){let{options:r,placeholder:t,...h}=e,[x,f]=(0,l.useState)(!1),{closeOnRedirect:p}=(0,c.c)(),v=(0,i.usePathname)(),b=(0,l.useMemo)(()=>r.findLast(e=>e.urls?e.urls.has(v.endsWith("/")?v.slice(0,-1):v):(0,o.$)(e.url,v,!0)),[r,v]),g=()=>{p.current=!1,f(!1)},y=b?(0,n.jsx)(m,{...b}):t;return(0,n.jsxs)(u.AM,{open:x,onOpenChange:f,children:[y?(0,n.jsxs)(u.Wv,{...h,className:(0,d.QP)("flex flex-row items-center gap-2.5 rounded-lg ps-2 pe-4 py-1.5 hover:bg-fd-accent/50 hover:text-fd-accent-foreground",h.className),children:[y,(0,n.jsx)(a,{className:"size-4 text-fd-muted-foreground"})]}):null,(0,n.jsx)(u.hl,{className:"w-(--radix-popover-trigger-width) overflow-hidden p-0",children:r.map(e=>{var r;return(0,n.jsx)(s,{href:e.url,onClick:g,...e.props,className:(0,d.QP)("flex w-full flex-row items-center gap-2 px-2 py-1.5",b===e?"bg-fd-accent text-fd-accent-foreground":"hover:bg-fd-accent/50",null===(r=e.props)||void 0===r?void 0:r.className),children:(0,n.jsx)(m,{...e})},e.url)})})]})}function m(e){return(0,n.jsxs)(n.Fragment,{children:[e.icon,(0,n.jsxs)("div",{className:"flex-1 text-start",children:[(0,n.jsx)("p",{className:"text-sm font-medium",children:e.title}),e.description?(0,n.jsx)("p",{className:"text-xs text-fd-muted-foreground",children:e.description}):null]})]})}},7424:(e,r,t)=>{"use strict";t.d(r,{Navbar:()=>h,NavbarSidebarTrigger:()=>m});var n=t(5155),a=t(9946);let l=(0,a.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),s=(0,a.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var i=t(9688),d=t(7936),o=t(263),c=t(5061),u=t(5547);function h(e){let{open:r}=(0,o.c)(),{isTransparent:t}=(0,c.h)();return(0,n.jsx)("header",{id:"nd-subnav",...e,className:(0,i.QP)("sticky top-(--fd-banner-height) z-30 flex h-14 flex-row items-center border-b border-fd-foreground/10 px-4 backdrop-blur-lg transition-colors",(!t||r)&&"bg-fd-background/80",e.className),children:e.children})}function m(e){let{open:r}=(0,o.c)();return(0,n.jsx)(u.x2,{...e,className:(0,i.QP)((0,d.r)({color:"ghost",size:"icon"}),e.className),children:r?(0,n.jsx)(l,{}):(0,n.jsx)(s,{})})}}},e=>{var r=r=>e(e.s=r);e.O(0,[118,43,874,74,532,397,820,441,684,358],()=>r(4921)),_N_E=e.O()}]);