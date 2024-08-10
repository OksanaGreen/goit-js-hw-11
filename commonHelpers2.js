import{i as s,S as p}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function f(r){const i="https://pixabay.com/api/",o=new URLSearchParams({key:"45354989-e1e4081af194e4d3149ed2a9d ",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${i}?${o}`;return fetch(n).then(e=>e.json()).then(e=>e.hits).catch(e=>console.log(e))}function m({webformatURL:r,largeImageURL:i,tags:o,likes:n,views:t,comments:e,downloads:a}){return`<li class="gallery-item">
    <a class="gallery-link" href= ${i}>  
        <img class="gallery-image"
            src= "${r}"
            alt = "${o}"
        />
    </a>
    <div class="container"><h3 class="header">Likes
        <p class="views">${n}</p>
    </h3>
    <h3 class="header">Views
    <p class="views">${t}</p>
    </h3>
    <h3 class="header">Comments
    <p class="views">${e}</p>
    </h3>
    <h3 class="header">Downloads
    <p class="views">${a}</p>
    </h3>
    </div>
    
</li>`}function g(r){return r.map(m).join("")}const l=document.querySelector(".form");document.querySelector("#search");const c=document.querySelector(".gallery");l.addEventListener("submit",u);function u(r){r.preventDefault();const i=r.currentTarget.elements.input.value.trim();if(c.innerHTML="",!i){s.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topCenter"});return}h(),f(i).then(o=>{if(d(),o.length===0){s.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});return}const n=g(o);c.innerHTML=n,new p(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(o=>{d(),o.name==="TypeError"&&o.message.includes("Failed to fetch")?s.error({title:"Network Error",message:"Unable to connect. Please check your internet connection and try again.",position:"topCenter"}):s.error({title:"Error",message:`Error: ${o.message}`,position:"topCenter"})}),l.reset()}function h(){const r=document.createElement("div");r.className="loader",l.insertAdjacentElement("afterend",r)}function d(){const r=document.querySelector(".loader");r&&r.remove()}
//# sourceMappingURL=commonHelpers2.js.map
