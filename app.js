var outer = document.getElementById("outer-box");
var inner = document.getElementById("inner-box");
var text = document.getElementsByClassName("text-decoration");

function toggle(){
    var current = document.body.style.backgroundColor;
    if(current == "white")
    {
        document.body.style.backgroundColor = "black";
        inner.style.backgroundColor = "white";
        outer.style.borderColor = "white";
        text[0].style.color = "white";
        inner.style.left = "11px";
    }
    else{
        document.body.style.backgroundColor = "white";
        inner.style.backgroundColor = "black";
        outer.style.borderColor = "black";
        text[0].style.color = "black";
        inner.style.left = "0px";
    }
}

outer.addEventListener("click",toggle); 