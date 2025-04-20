





//this is toggled password

function toggleButton(){
    const showPassword = document.getElementById("password");

    if(showPassword.type == "password"){
        showPassword.type = "text";

    }else{
        showPassword.type = "password";
    }
}


//working with toggle bars
const Bars = document.getElementById("showBars");
const bars = document.getElementById("bar");


Bars.addEventListener("click", () =>{

    const navBar = document.querySelector("nav");
   
    if(navBar.style.display === "block"){

        navBar.style.display = "block";
       
        

    }else{
        
        navBar.style.display = "none";
        
    }
})
