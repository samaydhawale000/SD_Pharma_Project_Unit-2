let number = document.getElementById("number")
let password = document.getElementById("password");
let tagline = document.getElementById("tagline");
let btn = document.getElementById("btn");




let userdata = JSON.parse(localStorage.getItem("data"))||[]


btn.addEventListener("click", function(){

    let flag =false;
    for(let i=0; i<userdata.length; i++){

        if(number.value ==userdata[i].number &&  password.value ==userdata[i].password){
            flag =true
            }
    }
    if(flag==true){
            tagline.innerText = "Log in Successfull"
            tagline.style.color = "#2596be"
            tagline.style.fontWeight = "600"
            number: number.value =""
            password: password.value =""
            setTimeout(function(){
                location.href = "http://127.0.0.1:5500/index.html"
            },1000)
    }
    else{
        tagline.innerText = "Wrong Information!!, please enter valid information "
        tagline.style.color = "red"
        tagline.style.fontWeight = "600"
        number: number.value =""
        password: password.value =""
        }

})