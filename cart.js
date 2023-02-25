
let cartdata = JSON.parse(localStorage.getItem("cart"))||[]

let cart_div = document.getElementById("cart-div")

let totalvalue = document.getElementById("totalvalue")

let numbers = document.getElementById("numbers")
numbers.innerText = cartdata.length

let sum =0
totalvalue.innerText=sum

display(cartdata)

  function display(data){
    cart_div.innerHTML = ""

    for(let i=0; i<data.length; i++){
     
        let count = 1

        let div = document.createElement("div");
        
        let image = document.createElement("img")
        image.setAttribute("src",data[i].image)

        let name = document.createElement("h4")
        name.innerText = data[i].name

        let text = document.createElement("p")
        text.innerText = "Lorem ipsum, in graphical and textual context, refers"

        let price = document.createElement("h4")
        price.innerText ="₹"+data[i].price

        let incre = document.createElement("button")
        incre.innerText = "+"
        
        incre.addEventListener("click", function(){
            count++
            quantity.innerText = "Qty: " + count
        })

        let quantity = document.createElement("h4")
        quantity.innerText = "Qty: "+ count
      

        let decre = document.createElement("button")
        decre.innerText = "-"

        decre.addEventListener("click", function(){
            count--
            if(count<1){
                count =1
            }
            if(count>=1){
                quantity.innerText = "Qty: "+ count
               
            }
        })

        let btn = document.createElement("button")
        btn.innerText = "Remove"

        btn.addEventListener("click", function(){
            cartdata = cartdata.filter(function(ele){
                return ele.id !== data[i].id
            })

            localStorage.setItem("cart", JSON.stringify(cartdata))
            display(cartdata)
            alert("Product Removed succesfully")
            numbers.innerText = cartdata.length
        })

        div.append(image,name,text,price,decre,quantity,incre,btn)
        cart_div.append(div)
  }
  }

 

 



