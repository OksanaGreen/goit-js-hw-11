import{i,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function d(r){const n="https://pixabay.com/api/",o=new URLSearchParams({key:"42978821-e3c6f538b5791c0a766c3ba19",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${n}?${o}`;return fetch(s).then(e=>e.json()).then(e=>e.hits).catch(e=>console.log(e))}function f({webformatURL:r,largeImageURL:n,tags:o,likes:s,views:t,comments:e,downloads:a}){return`<li class="gallery-item">
    <a class="gallery-link" href= ${n}>  
        <img class="gallery-image"
            src= "${r}"
            alt = "${o}"
        />
    </a>
    <div class="container"><h3 class="header">Likes
        <p class="views">${s}</p>
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
    
</li>`}function p(r){return r.map(f).join("")}const c=document.querySelector(".form");document.querySelector("#search");const l=document.querySelector(".gallery");c.addEventListener("submit",h);function h(r){r.preventDefault();const n=r.currentTarget.elements.input.value.trim();if(l.innerHTML="",!n){i.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topCenter"});return}g(),d(n).then(o=>{if(u(),o.length===0){i.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});return}const s=p(o);l.innerHTML=s,new m(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(o=>{u(),o.name==="TypeError"&&o.message.includes("Failed to fetch")?i.error({title:"Network Error",message:"Unable to connect. Please check your internet connection and try again.",position:"topCenter"}):i.error({title:"Error",message:`Error: ${o.message}`,position:"topCenter"})}),c.reset()}function g(){const r=document.createElement("div");r.className="loader",c.insertAdjacentElement("afterend",r)}function u(){const r=document.querySelector(".loader");r&&r.remove()}
//# sourceMappingURL=commonHelpers2.js.map
