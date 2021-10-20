const slider = document.getElementById("range");
const price = document.getElementById("price");
const pageno = document.getElementById("pageno");
const switch1 = document.getElementById("switch1");
const switch2 = document.getElementById("switch2");

price.innerHTML = '$'+slider.value+".00" +'<span>/month</span>';
pageno.innerHTML = "100K PAGEVIEWS";

slider.oninput= function(){
    price.innerHTML = '$'+this.value+'.00' + '<span>/month</span>';
    pageno.innerHTML = Math.round(this.value*6.25)+"K"+" PAGEVIEWS";
    var x = slider.value*3.2;
    console.log(x);
    var bg = 'linear-gradient(90deg,hsl(174, 77%, 80%)'+ x + '%, rgb(214,214,214)' + x + '%)';
    slider.style.background = bg;
    console.log(bg);
}

switch1.addEventListener("click" , function(){
    switch1.classList.remove("show");
    switch2.classList.add("show");
    price.innerHTML = '$'+slider.value*10+".00" +'<span>/month</span>';
    pageno.innerHTML = Math.round(slider.value*6.25*10)+"K"+" PAGEVIEWS";

    slider.oninput= function(){
        price.innerHTML = '$'+this.value*10+'.00' + '<span>/month</span>';
        pageno.innerHTML = Math.round(this.value*6.25*10)+"K"+" PAGEVIEWS";
        var x = slider.value*3;
        console.log(x);
        var bg = 'linear-gradient(90deg,hsl(174, 77%, 80%)'+ x + '%, rgb(214,214,214)' + x + '%)';
        slider.style.background = bg;
    }   
});


switch2.addEventListener("click" , function(){
    switch2.classList.remove("show");
    switch1.classList.add("show");
    price.innerHTML = '$'+slider.value+".00" +'<span>/month</span>';
    pageno.innerHTML = Math.round(slider.value*6.25)+"K"+" PAGEVIEWS";

    slider.oninput= function(){
        price.innerHTML = '$'+this.value+'.00' + '<span>/month</span>';
        pageno.innerHTML = Math.round(this.value*6.25)+"K"+" PAGEVIEWS";
        var x = slider.value*3.2;
        console.log(x);
        var bg = 'linear-gradient(90deg,hsl(174, 77%, 80%)'+ x + '%, rgb(214,214,214)' + x + '%)';
        slider.style.background = bg;
    }
});
