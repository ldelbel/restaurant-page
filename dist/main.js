(()=>{"use strict";let e=document.getElementById("content");e.appendChild((()=>{const e=document.createElement("nav");return e.className="nav",e.textContent="ForLife",e})()),e.appendChild((()=>{const e=document.createElement("section");e.className="first-section";const t=document.createElement("h1");t.className="slogan",t.innerHTML="Eating healthier has never been easier!";const n=document.createElement("div");return n.className="main-img",e.appendChild(t),e.appendChild(n),e})()),e.appendChild((()=>{const e=document.createElement("section");e.className="about-section";const t=document.createElement("p");return t.innerHTML="ForLife is a salad-based restaurant with many different delicious\noptions to improve your health with zero sacrifice. We have amazing\nprotein options, for vegetarians and non-vegeterians as well.\nEverything is fresh, high-quality and absolutely friendly to your\nbody. Our variety and our sauces will definitely blow your mind!",e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("section");e.className="tabs-section";const t=document.createElement("div");t.className="tab-wrap";const n=document.createElement("input");n.setAttribute("type","radio"),n.className="tab",n.id="tab1",n.name="tabGroup1",n.checked=!0;const a=document.createElement("input");a.setAttribute("type","radio"),a.className="tab",a.id="tab2",a.name="tabGroup1",a.checked=!0;const d=document.createElement("label");d.setAttribute("for","tab1"),d.innerHTML="Menu";const c=document.createElement("label");c.setAttribute("for","tab2"),c.innerHTML="Contact";const i=document.createElement("div");return i.className="tab__content",t.appendChild(n),t.appendChild(d),t.appendChild(a),t.appendChild(c),t.appendChild(i),i.appendChild((()=>{let e=document.createElement("div");e.className="cards-content";for(let t=1;t<10;t++){let n=document.createElement("div");n.className="card"+t;let a=document.createElement("div");a.className="cd__img"+t;let d=document.createElement("div");d.id="cd__caption"+t,n.appendChild(a),n.appendChild(d),e.appendChild(n)}return e})()),e.appendChild(t),e})());let t=document.getElementById("cd__caption1"),n=document.getElementById("cd__caption2"),a=document.getElementById("cd__caption3"),d=document.getElementById("cd__caption4"),c=document.getElementById("cd__caption5"),i=document.getElementById("cd__caption6"),o=document.getElementById("cd__caption7"),l=document.getElementById("cd__caption8"),r=document.getElementById("cd__caption9");t.innerHTML="Mexican Salad",n.innerHTML="Buddha Bowl",a.innerHTML="Caesar Salad",d.innerHTML="Poke Salad",c.innerHTML="Shrimp Bowl",i.innerHTML="Italian Salad",o.innerHTML="Tropical Fruit Punch",l.innerHTML="Red Berries Bowl",r.innerHTML="Veggie Burguer"})();