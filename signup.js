
let number = document.getElementById("number")
let password = document.getElementById("password");
let tagline = document.getElementById("tagline");
let btn = document.getElementById("btn");


let userdata = JSON.parse(localStorage.getItem("data"))||[]

btn.addEventListener("click", function(){

    if(number.value=="" || password.value==""){
    tagline.innerText = "Please enter valid Information"
    tagline.style.color = "red"
    tagline.style.fontWeight = "600"
    number: number.value =""
    password: password.value =""
    }
    else{
        let obj = {
            number: number.value,
            password: password.value
        }
        userdata.push(obj)
        localStorage.setItem("data", JSON.stringify(userdata))
        number: number.value =""
        password: password.value =""
    
        tagline.innerText = "Successfully Sign up"
        tagline.style.color = "#2596be"
        tagline.style.fontWeight = "600"

        setTimeout(function(){
            location.href = "http://127.0.0.1:5500/login.html"
        },1000)
    }
    

})


