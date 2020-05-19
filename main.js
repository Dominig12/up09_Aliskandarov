"use strict"
const playSlider = ()=>{
    const portfolioItem = document.querySelectorAll(".portfolio-item"),
        arrowRight = document.getElementById("arrow-right"),
        arrowLeft = document.getElementById("arrow-left"),
        allProgects = document.getElementById("all-progects"),
        portfolioDots = document.querySelector(".portfolio-dots");
    let dot = document.querySelectorAll(".dot");


    const addClass = (item, index, classStyle) => {
        item[index].classList.add(classStyle);
    };
    const removeClass = (item, index, classStyle) => {
        item[index].classList.remove(classStyle);
    };


    dot.forEach(elem =>{elem.remove()});
    for(let i=0; i<portfolioItem.length;i++){
        let dotElement = document.createElement("li");
        dotElement.classList.add("dot");
        portfolioDots.append(dotElement);
    }
    dot = document.querySelectorAll(".dot");
    addClass(dot, 0, "dot-active");


    let count = 0;

    function animateSlide(newIndex, oldIndex = count){
        if(newIndex < 0)
            newIndex = dot.length-1;
        if(newIndex > dot.length -1)
            newIndex = 0;
        removeClass(portfolioItem, oldIndex, "portfolio-item-active");
        removeClass(dot, oldIndex, "dot-active");
        addClass(portfolioItem, newIndex, "portfolio-item-active");
        addClass(dot, newIndex, "dot-active");
        count = newIndex;
    }

    document.body.addEventListener("click", (event)=>{
        const target = event.target;
        if(!target.closest(".portfolio-content"))
            return;
        if(target.matches(".dot")){
            let temp_index = 0;
            let i=0;
            dot.forEach(elem =>{
                if(elem === target)
                    temp_index = i;
                i++;
            });
            animateSlide(temp_index);
        }
        if(target.matches("#arrow-left"))
            animateSlide(count-1);
        if(target.matches("#arrow-right"))
            animateSlide(count+1);
    })

    function autoAnimation(){
        animateSlide(count+1, count)
    }
    let isAnimate = setInterval(autoAnimation, 3000);

    document.body.addEventListener("mouseover", (event)=>{
        const target = event.target;
        if(!target.closest(".portfolio-item"))
            return;
        clearInterval(isAnimate);
    })

    document.body.addEventListener("mouseout", (event)=>{
        const target = event.target;
        if(!target.closest(".portfolio-item"))
            return;
        isAnimate = setInterval(autoAnimation, 3000);
    })

}
playSlider();   