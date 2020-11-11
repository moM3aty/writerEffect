var myText = "Welcome to M3aty challenge",

    i = 0,

    myButton = document.getElementById("button");

myButton.onclick = function () {
    var typeWriter = setInterval(function(){

        document.getElementById("type").textContent += myText[i];
        
        i++;

        if( i > myText.length - 1){

            clearInterval(typeWriter);
        }

    },200);    
    myButton.style.display="none";
}