"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[411],{620:(e,s,n)=>{n.d(s,{Z:()=>p});n(2791);var a=n(71),o=n(6355),l=n(2178),t=n(4740),i=n(7689),c=n(6448),r=n(7264),d=n(6591),m=n(184);const p=function(e){let{pokemons:s}=e;const n=(0,t.T)(),p=(0,i.s0)(),u=(0,i.TH)();return(0,m.jsx)("div",{className:"pokemon-card-grid-container",children:(0,m.jsx)("div",{className:"pokemon-card-grid",children:s&&s.length>0&&(null===s||void 0===s?void 0:s.map((e=>(0,m.jsxs)("div",{className:"pokemon-card",children:[(0,m.jsx)("div",{className:"pokemon-card-list",children:u.pathname.includes("/pokemon")||u.pathname.includes("/search")?(0,m.jsx)(o.wEH,{className:"plus",onClick:()=>n((0,r.T)(e))}):(0,m.jsx)(o.Xm5,{className:"trash",onClick:async()=>{await n((0,l.Af)(e)),n((0,c.fz)("Pokemon Removed Successfully."))}})}),(0,m.jsx)("div",{className:"pokemon-card-compare",children:(0,m.jsx)(a.pIN,{onClick:()=>{n((0,l.a$)(e)),n((0,c.fz)("".concat(e.name," has been added to compare queue.")))}})}),(0,m.jsx)("h3",{className:"pokemon-card-title",children:e.name}),(0,m.jsx)("img",{src:e.image,alt:"",className:"pokemon-card-image",loading:"lazy",onClick:()=>{n((0,c.vF)(d.X$.description)),n((0,l.H4)(void 0)),p("/pokemon/".concat(e.id))}}),(0,m.jsx)("div",{className:"pokemon-card-types",children:e.types.map(((e,s)=>{const n=Object.keys(e);return(0,m.jsxs)("div",{className:"pokemon-card-types-type",children:[(0,m.jsx)("img",{src:e[n[0]].image,alt:"pokemon type",className:"pokemon-card-types-type-image",loading:"lazy"}),(0,m.jsx)("h6",{className:"pokemon-card-types-type-text",children:n[0]})]},s)}))})]},e.id))))})})}},8411:(e,s,n)=>{n.r(s),n.d(s,{default:()=>C});var a=n(2791),o=n(5328),l=n(7689),t=n(5294),i=n(4740),c=n(620),r=n(7244),d=n(4333);const m=(0,r.hg)("pokemon/randomPokemon",(async e=>{try{const s=e.map((e=>t.Z.get(e.url))),n=(await Promise.all(s)).map((e=>{let{data:s}=e;const n=s.types.map((e=>{let{type:{name:s}}=e;return{[s]:d.U[s]}})),a=s.sprites.other.dream_world.front_shiny||s.sprites.other.dream_world.front_default||s.sprites.front_shiny||s.sprites.front_default;return a?{name:s.name,id:s.id,image:a,types:n}:null}));return n.filter((e=>null!==e))}catch(s){console.error(s)}}));var p=n(4248),u=n(184);const h=function(){const[e,s]=(0,a.useState)(!1),n=(0,i.T)(),o=(0,i.C)((e=>{let{pokemon:s}=e;return s}));return(0,a.useEffect)((()=>{(async()=>{const e=o.currentPokemon.evolution.map((e=>{let{pokemon:s}=e;return s}));await n(m(e)),s(!0)})()}),[n,o.currentPokemon]),(0,u.jsx)("div",{className:"page",children:e?(0,u.jsx)(c.Z,{pokemons:o.randomPokemons}):(0,u.jsx)(p.Z,{})})};const v=function(){const e=(0,i.C)((e=>{let{pokemon:{currentPokemon:s}}=e;return s}));return(0,u.jsx)("div",{className:"pokemon-locations",children:(0,u.jsx)("ul",{className:"pokemon-locations-list",children:null===e||void 0===e?void 0:e.encounters.map((e=>(0,u.jsx)("li",{className:"pokemon-location",children:e},e)))})})};const j=function(){const e=(0,i.C)((e=>{let{pokemon:{currentPokemon:s}}=e;return s}));return(0,u.jsxs)("div",{className:"page capable-moves",children:[(0,u.jsx)("h1",{className:"capable-moves-title",children:"Abilities"}),(0,u.jsx)("ul",{className:"capable-moves-list ability",children:null===e||void 0===e?void 0:e.pokemonAbilities.abilities.map((e=>(0,u.jsx)("li",{className:"move",children:e},e)))}),(0,u.jsx)("h1",{className:"capable-moves-title",children:"Moves"}),(0,u.jsx)("ul",{className:"capable-moves-list",children:null===e||void 0===e?void 0:e.pokemonAbilities.moves.map((e=>(0,u.jsx)("li",{className:"move",children:e},e)))})]})};var x=n(7264),k=n(6448),f=n(6591);function y(e){let{data:s}=e;const n=(0,i.T)();(0,a.useEffect)((()=>{document.querySelectorAll("progress").forEach((e=>{e.style.width="10rem"}))}),[]);const o=(e,s)=>{const n=new Set;return e.forEach((e=>{d.U[e][s].forEach((e=>{n.has(e)||n.add(e[0].toUpperCase()+e.slice(1))}))})),Array.from(n)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"details",children:[(0,u.jsx)("h1",{className:"name",children:null===s||void 0===s?void 0:s.name}),(0,u.jsxs)("h3",{children:["Type: ",null===s||void 0===s?void 0:s.types.join(" - ")]}),(0,u.jsxs)("h3",{children:["Evolution: ",null===s||void 0===s?void 0:s.evolutionLevel]}),(0,u.jsx)("button",{onClick:()=>n((0,k.vF)(f.X$.evolution)),children:"See next evolution"})]}),(0,u.jsx)("div",{className:"stats",children:(0,u.jsx)("ul",{children:null===s||void 0===s?void 0:s.stats.map((e=>(0,u.jsxs)("li",{children:[e.name,": ",e.value,(0,u.jsx)("progress",{max:100,value:e.value})]},e.name)))})}),(0,u.jsxs)("div",{className:"battle-stats",children:[(0,u.jsxs)("ul",{children:[(0,u.jsxs)("li",{children:[(0,u.jsx)("span",{children:"Strengths:"}),(0,u.jsx)("span",{children:o(null===s||void 0===s?void 0:s.types,"strength").join(", ")})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("span",{children:"Weakness:"}),(0,u.jsx)("span",{children:o(null===s||void 0===s?void 0:s.types,"weakness").join(", ")})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("span",{children:"Resistant:"}),(0,u.jsx)("span",{children:o(null===s||void 0===s?void 0:s.types,"resistance").join(", ")})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("span",{children:"Vulnerable:"}),(0,u.jsx)("span",{children:o(null===s||void 0===s?void 0:s.types,"vulnerable").join(", ")})]})]}),(0,u.jsx)("button",{onClick:()=>n((0,x.T)(s)),className:"add-pokemon",children:"Add Pokemon"})]})]})}function N(e){let{image:s}=e;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"circle-container",children:(0,u.jsxs)("div",{className:"outer-circle",children:[(0,u.jsx)("div",{className:"inner-circle",children:(0,u.jsx)("img",{src:s,alt:""})}),(0,u.jsxs)("div",{className:"lines",children:[(0,u.jsx)("div",{className:"line line-1"}),(0,u.jsx)("div",{className:"line line-2"})]})]})})})}const g=function(){const e=(0,i.C)((e=>{let{pokemon:{currentPokemon:s}}=e;return s}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(y,{data:e}),e&&(0,u.jsx)(N,{image:e.image})]})};var b=n(2178);const C=(0,o.Z)((function(){const e=(0,l.UO)(),s=(0,i.T)(),n=(0,i.C)((e=>{let{app:{currentPokemonTab:s}}=e;return s})),o=(0,i.C)((e=>{let{pokemon:{currentPokemon:s}}=e;return s}));(0,a.useEffect)((()=>{s((0,k.vF)(f.X$.description))}),[s]);const c=(0,a.useCallback)(((e,s,n)=>e.evolves_to.length?(n.push({pokemon:{...e.species,url:e.species.url.replace("pokemon-species","pokemon")},level:s}),c(e.evolves_to[0],s+1,n)):n.push({pokemon:{...e.species,url:e.species.url.replace("pokemon-species","pokemon")},level:s})),[]),r=(0,a.useCallback)((e=>{const s=[];return c(e,1,s),s}),[c]),[d,m]=(0,a.useState)(!0),x=(0,a.useCallback)((async n=>{const{data:a}=await t.Z.get("".concat(f.fM,"/").concat(e.id)),{data:o}=await t.Z.get(a.location_area_encounters),{data:{evolution_chain:{url:l}}}=await t.Z.get("".concat(f.Op,"/").concat(a.id)),{data:i}=await t.Z.get(l),c={abilities:a.abilities.map((e=>{let{ability:s}=e;return s.name})),moves:a.moves.map((e=>{let{move:s}=e;return s.name}))},d=[],p=r(i.chain);let u;u=p.find((e=>{let{pokemon:s}=e;return s.name===a.name})).level,o.forEach((e=>{d.push(e.location_area.name.toUpperCase().split("-").join(" "))}));const h=await a.stats.map((e=>{let{stat:s,base_stat:n}=e;return{name:s.name,value:n}}));s((0,b.H4)({id:a.id,name:a.name,types:a.types.map((e=>{let{type:{name:s}}=e;return s})),image:a.sprites.other.dream_world.front_shiny||a.sprites.other.dream_world.front_default,stats:h,encounters:d,evolutionLevel:u,evolution:p,pokemonAbilities:c})),m(!1)}),[e.id,s,r]);return(0,a.useEffect)((()=>{x()}),[e.id,x]),(0,u.jsx)(u.Fragment,{children:!d&&o?(0,u.jsxs)(u.Fragment,{children:[n===f.X$.description&&(0,u.jsx)(g,{}),n===f.X$.evolution&&(0,u.jsx)(h,{}),n===f.X$.locations&&(0,u.jsx)(v,{}),n===f.X$.moves&&(0,u.jsx)(j,{})]}):(0,u.jsx)(p.Z,{})})}))}}]);
//# sourceMappingURL=411.4fd64457.chunk.js.map