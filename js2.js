window.addEventListener('scroll', function (){
    if (window.scrollY > 100){
        document.getElementById("").style.backgroundColor = "white";
        document.getElementById("section1").autofocus=true;
    }
    else if (window.scrollY === 0){
        document.getElementById("section1").style.backgroundColor = "initial";
    }


});