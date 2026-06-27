/* ==========================================
SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
".content-section,.project-stats,.cta-section,.navigation-section"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition="all .8s ease";

revealObserver.observe(el);

});


/* ==========================================
SCROLL PROGRESS BAR
========================================== */

const progress=document.createElement("div");

progress.id="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const docHeight=document.documentElement.scrollHeight-window.innerHeight;

const width=(scrollTop/docHeight)*100;

progress.style.width=width+"%";

});


/* ==========================================
BACK TO TOP BUTTON
========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ==========================================
IMAGE LIGHTBOX
========================================== */

const images=document.querySelectorAll(".gallery-card img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

const lightboxImg=lightbox.querySelector("img");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


/* ==========================================
STAT COUNTER
========================================== */

const counters=document.querySelectorAll(".stat-card h3");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=counter.innerText;

const number=parseInt(target);

if(isNaN(number)) return;

let count=0;

const speed=Math.ceil(number/40);

const update=()=>{

count+=speed;

if(count>=number){

counter.innerText=target;

}else{

counter.innerText=count;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================
ACTIVE NAV LINK
========================================== */

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-200;

const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

history.replaceState(null,null,"#"+sec.id);

}

});

});


/* ==========================================
PARALLAX HERO IMAGE
========================================== */

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/50;

const y=(window.innerHeight/2-e.pageY)/50;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});


/* ==========================================
BUTTON RIPPLE
========================================== */

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.className="ripple";

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";
circle.style.top=e.offsetY-diameter/2+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/* ==========================================
CONSOLE MESSAGE
========================================== */

console.log("%cDesigned & Developed by Mohammed Shaik Siddiqui",
"color:#00d9ff;font-size:18px;font-weight:bold;");