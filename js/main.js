
// Check Locla Color
if(localStorage.getItem("color") !== null){
    document.querySelector(".about-us img").src=`https://via.placeholder.com/500x400/${localStorage.getItem("color").slice(1)}?text=`;
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color"));
    document.querySelectorAll(".color-list li").forEach((h)=>{
        h.classList.remove("active");
        if(localStorage.getItem("color") === h.dataset.color){
            h.classList.add("active");
        }
    })
    
}

localStorage.getItem("bgOpt");
// Change the Setting Box
document.querySelector(".setting-toggle").onclick=function(){
    document.querySelector(".fa-gear").classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
}

// Setting Colors
let colorLi=document.querySelectorAll(".color-list li");

colorLi.forEach(e=>{
    e.addEventListener("click",(s)=>{
        localStorage.setItem("color",s.target.dataset.color);
        document.documentElement.style.setProperty("--main-color",localStorage.getItem("color"));
        document.querySelector(".about-us img").src=`https://via.placeholder.com/500x400/${localStorage.getItem("color").slice(1)}?text=`;
        
        handleActive(s);
        
    })
})


var backgroundImageGet=localStorage.getItem("bacgroundImg-option");
let bgRemSer;
if(backgroundImageGet !== null){
    if(backgroundImageGet === true){
        bgStatue = true;
    }else{
        bgStatue = false;
    }
    let bacgroundImgALl=document.querySelectorAll(".setting-bg span");
    activeRemoveAll(bacgroundImgALl);
    if(backgroundImageGet === "true"){
        document.querySelector(".setting-bg .yes").classList.add("active");

    }else{
        document.querySelector(".setting-bg .no").classList.add("active");

        
    }
}
var bgStatue="true";

// Setting Background
let bgChoice=document.querySelectorAll(".setting-bg span");

bgChoice.forEach((e)=>{
    e.addEventListener("click",(s)=>{
        
        handleActive(s);
        if(s.target.dataset.imgbg === "yes"){
            bgStatue=true;
            localStorage.setItem("bacgroundImg-option",true);
            imgss();
        }else{
            bgStatue=false;
            localStorage.setItem("bacgroundImg-option",false);
            clearInterval(bgRemSer);

            
        }
    })
    
})

// Image Change 
let img=["d5e319","7ba2ad","3332ba","8515eb","3332ba",];
let bg=document.querySelector(".full");


if(bgStatue === "true"){
    function imgss(){
        bgRemSer= setInterval(()=>{
            let random=Math.floor(Math.random() * img.length);
            bg.style.backgroundImage="url('https://via.placeholder.com/1920x1080/"+img[random]+"?text=')";
            
        },10000)
    
}
}

imgss();



// Progress when it come to skills IDK Repeat again
let ourSkills=document.querySelector(".our-skills");

window.onscroll=function(){
    // IDK 
    let skillsOffsetTop=ourSkills.offsetTop;

    // The height of the Our Skills
    let skillsOffsetHegiht=ourSkills.offsetHeight;

    // Window Height
    let windowHegiht=this.innerHeight;

    // Cureent Scroll Now
    let windowScrollTop=this.pageYOffset;
    
    if(windowScrollTop > (skillsOffsetTop + skillsOffsetHegiht - windowHegiht)){
        let allSkills=document.querySelectorAll(".box-progress .stat span");
        allSkills.forEach(element =>{
            element.style.width=element.dataset.progress;
        })
    }
}



// Our Gallery
let allGallery=document.querySelectorAll(".gallery .imgs img");

allGallery.forEach(imgs=>{
    imgs.addEventListener("click",()=>{
        let overlay =document.createElement("div");
        overlay.className="popup-overlay";
        document.querySelector(".gallery").appendChild(overlay);
        let popBox=document.createElement("div");
        popBox.className="popBox";
        let popImage=document.createElement("img");
        popImage.src=imgs.src="https://via.placeholder.com/600x300?text";

        popBox.appendChild(popImage);
        document.body.appendChild(popBox);

        // Creat the X to close
        let x=document.createElement("span");
        x.className="close";
        x.innerHTML="X";

        popBox.appendChild(x);

        imgs.src=imgs.src="https://via.placeholder.com/225?text";

    })

})


document.addEventListener("click",e=>{
    if(e.target.className === "close"){
            e.target.parentNode.remove();
            document.querySelector(".popup-overlay").remove();
    }
})


// فكره اخذا كل الاقسام دينمك وخلبهم يدخلو داخل النفجيشن بولت وا
let allSection=document.querySelectorAll('body > div');
for(let i =2 ;i<allSection.length;i++){
    let div =document.createElement("div");
    div.classList.add("bullte");
    div.setAttribute("data-section",`.${allSection[i].className}`);
    let childDiv=document.createElement("div");
    childDiv.classList.add("tooltip");
    childDiv.innerHTML=`${allSection[i].className.charAt(0).toUpperCase()}${allSection[i].className.slice(1)}`;
    div.appendChild(childDiv);
    document.querySelector(".nav-bullets").appendChild(div);

}


// Select all Buttles
let allButtle=document.querySelectorAll(".nav-bullets .bullte");
let allNav=document.querySelectorAll(".full .list li a");




function clickButtle(buttle){
    buttle.forEach(element=>{ 
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:"smooth"
            });
            
        })
    })
    
}

clickButtle(allButtle);
clickButtle(allNav);



// Option Bullets 
let allChoice=document.querySelectorAll(".setting-box .option-color .buttl span");
var optionbuttle=true;
let bulletLocal=localStorage.getItem("buttle-option");
if(bulletLocal !== null){
    if(bulletLocal === true){
        optionbuttle =true;
    }else{

        optionbuttle =false;
        
    }
    activeRemoveAll(allChoice);
    if(bulletLocal === "true"){
        document.querySelector(".nav-bullets").style.display="block";
        document.querySelector(".setting-box .option-color .buttl .yes").classList.add("active");
    }else{
        document.querySelector(".nav-bullets").style.display="none";
        document.querySelector(".setting-box .option-color .buttl .no").classList.add("active");
        
    }
}

allChoice.forEach(element=>{
    element.addEventListener("click", e=>{
        if(e.target.dataset.buttle === "yes"){
            document.querySelector(".nav-bullets").style.display="block";
            localStorage.setItem("buttle-option",true);

        }else{
            document.querySelector(".nav-bullets").style.display="none";
            localStorage.setItem("buttle-option",false);
    

        }
    })
})


// Navbar Static
// all the think that why it the active in the yes but when i rest all the active but action no
let navOitonCho=document.querySelectorAll(".option-color .nav span");
let navOption= "true";
let navlocal=localStorage.getItem("nav");

if(navlocal !== null){
    if(navlocal === true){
        navOption= true;
    }else{
        navOption= false;
    }
    activeRemoveAll(navOitonCho);
    if(navlocal === "true"){
        document.querySelector(".full  .container").classList.add("staic");
        document.querySelector(".option-color .nav .yes").classList.add("active");
    }else{
        document.querySelector(".full  .container").classList.remove("staic");
        document.querySelector(".option-color .nav .no").classList.add("active");
    }
}



navOitonCho.forEach(elments=>{
    elments.addEventListener("click",e=>{
        if(e.target.dataset.buttle === "yes"){
            document.querySelector(".full  .container").classList.add("staic");
            localStorage.setItem("nav",true);
        }else{
            document.querySelector(".full  .container").classList.remove("staic");
            localStorage.setItem("nav",false);
        }
    })
})

// Handle Active State
function handleActive(e){
    e.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");
    })
    e.target.classList.add("active");

}

// Remove Active All 
function activeRemoveAll(e){
    e.forEach(el=>{
        el.classList.remove("active");
    })
}


// Reset Button
document.querySelector(".rest-local").onclick=function(){
    localStorage.removeItem("color");
    localStorage.removeItem("bacgroundImg-option");
    localStorage.removeItem("buttle-option");
    localStorage.removeItem("nav");

    window.location.reload();
}

// NavBar in Mobile
let nav=document.querySelector(".nav");
let closeBtn=document.querySelector(".nav .close-btn");
let listMobile=document.querySelector(".nav .list");
closeBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    listMobile.classList.toggle("open");
    closeBtn.classList.toggle("open");
    window.onclick= function(e){
        
        if(e.target !== closeBtn && e.target !== listMobile){
                if(closeBtn.classList.contains("open")){
                    listMobile.classList.toggle("open");
                    closeBtn.classList.toggle("open");
                }
                

            
        }
    }
    
})

// Time CopyRight
let time =new Date();
document.querySelector("footer span").innerHTML +=time.getFullYear();