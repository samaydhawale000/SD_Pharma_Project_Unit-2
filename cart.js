
let cartdata = JSON.parse(localStorage.getItem("cart"))||[]

 
let tre_main = document.getElementById("tre-main")
let trendingdata = [
    {
       image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png?dim=256x0",
       name :"Indulekha Bringha Ayurvedi..",
       price : 180.78,
       id:25,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f692f7243b8036ed97d99a7973dd42b3.png?f=png?dim=256x0",
       name :"Navratna Ayurvedic Cool Hair Oil..",
       price : 222.58,
       id:26,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0",
       name :"Ashwagandha gold Capsules..",
       price : 170.12,
       id:27,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/L11927/baidyanath-nagpur-ashwagandharishta-450ml-2-1671744581.jpg?dim=1440x0",
       name :"Dabur Stresscom 120 Caps",
       price : 180.32,
       id:28,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/P03437/charmis-moisturising-cold-cream-58-ml-2-1671742979.jpg?dim=1440x0",
       name :"Everherb (By Pharmeasy)..",
       price : 180.56,
       id:29,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/A33338/dabur-meswak-complete-oral-care-toothpaste-400g-200g-pack-of-2-2-1674196332.jpg?dim=1440x0",
       name :"Wow Skin Science Blemish Care..",
       price : 220.32,
       id:30,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/X39340/venusia-moisturizing-cream-for-dry-sensitive-skin-box-of-100-g-1-1669711377.jpg?dim=1440x0",
       name :"Liveasy Essentials Aloe Vera Ref..",
       price : 80.99,
       id:31,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/156565/saridon-headache-relief-tablet-strip-of-10-tablets-2-1677127042.jpg?dim=1440x0",
       name :"I-Pill Emergency Contraceptive Pill",
       price : 111.45,
       id:33,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/G40689/siddhayu-gokshura-tablet-by-baidyanath-mens-wellness-60-20-tablets-free-pack-of-2-2-1671744387.jpg?dim=1440x0",
       name :"Ahaglow Spf 40 Skin Protect Gel 60gm",
       price : 120.76,
       id:34,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/I48477/sirona-ultra-thin-premium-panty-liners-regular-flow-60-counts-small-2-1652368446.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 100.3,
       id:35,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1661760071.jpg?dim=1440x0",
       name :"Nourrir Protectme Spf 55 Sunscreen..",
       price : 160.09,
       id:36,
       quantity:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/270551/revital-h-men-multivitamin-with-zinc-ginseng-for-immunity-strong-bones-energy-10-capsules-1-1671740959.jpg?dim=1440x0",
       name :"New Photostable Spf55+ Sunscreen..",
       price : 140.78,
       id:37,
       quantity:1
    },
]

displayTrending(trendingdata)
  function displayTrending(data){
    for(let i=0; i<data.length; i++){
     
        let div = document.createElement("div");
        
        let image = document.createElement("img")
        image.setAttribute("src",data[i].image)

        let name = document.createElement("h4")
        name.innerText = data[i].name

        let price = document.createElement("h4")
        price.innerText ="₹"+data[i].price

        let current = data[i]

        let btn = document.createElement("button")
        btn.innerText = "Add to cart"
        let flag = true
            for(let i=0; i<cartdata.length; i++){
                if(cartdata[i].id === current.id){
                    flag = false
                }
            }
            if(flag == false){
               btn.innerText = "Added"
               btn.style.opacity ="40%"
            }

        btn.addEventListener("click", function(){

            let flag = true
            for(let i=0; i<cartdata.length; i++){
                if(cartdata[i].id === current.id){
                    flag = false
                }
            }
                
                if(flag == true){
                    cartdata.push(data[i])
                    localStorage.setItem("cart", JSON.stringify(cartdata))
                    display(cartdata)
                    btn.innerText = "Added"
                    btn.style.opacity ="40%"
                    alert("Product added to a cart")
                }
                else{
                    alert("Product already in cart")
                    btn.innerText = "Added"
                    btn.style.opacity ="40%"
                }
        })

        div.append(image,name,price,btn)
        tre_main.append(div);
  }
  }
  let trediv = document.querySelectorAll("#tre-main >div")

let tre_left = document.getElementById("tre-left")
let tre_right = document.getElementById("tre-right");

  let tre_count = 0;

tre_right.addEventListener("click", function(){
    tre_count++

    for(let i of trediv){

        if(tre_count==0){
           i.style.left = "0px"
        }
        if(tre_count==1){
           i.style.left = "-250px"
        }
        if(tre_count==2){
           i.style.left = "-500px"
        }
        if(tre_count==3){
           i.style.left = "-760px"
        }
        if(tre_count==4){
            i.style.left = "-940px"
         }
         if(tre_count==5){
            i.style.left = "-1160px"
         }
         if(tre_count==6){
            i.style.left = "-1330px"
         }
        
        if(tre_count>6){
           tre_count =6
        }
    }
})
tre_left.addEventListener("click", function(){
    tre_count--

    for(let i of trediv){

        if(tre_count==0){
           i.style.left = "0px"
        }
        if(tre_count==1){
           i.style.left = "-250px"
        }
        if(tre_count==2){
           i.style.left = "-500px"
        }
        if(tre_count==3){
           i.style.left = "-760px"
        }
        if(tre_count==4){
            i.style.left = "-1000px"
         }
         if(tre_count==5){
            i.style.left = "-1200px"
         }
         if(tre_count==6){
            i.style.left = "-1300px"
         }
        if(tre_count<0){
           tre_count =0
        }
    }
})

// ---------------------------------

let cart_div = document.getElementById("cart-div")

let totalvalue = document.getElementById("totalvalue")

let numbers = document.getElementById("numbers")
numbers.innerText = cartdata.length

let sum =0

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
            quantity.innerText = "Qty: " +count
            data[i].quantity = count
            localStorage.setItem("cart", JSON.stringify(cartdata))
            findtotal(cartdata)
            
        })

        let quantity = document.createElement("h4")
        quantity.innerText = "Qty: "+ data[i].quantity
        
        localStorage.setItem("cart", JSON.stringify(cartdata))
        findtotal(cartdata)

        let decre = document.createElement("button")
        decre.innerText = "-"

        decre.addEventListener("click", function(){
            count--
            if(count<1){
                count =1
            }
            if(count>=1){
                quantity.innerText = "Qty: "+ count
                data[i].quantity = count
                localStorage.setItem("cart", JSON.stringify(cartdata))
            }
            findtotal(cartdata)
        })

        let btn = document.createElement("button")
        btn.innerText = "Remove"

        btn.addEventListener("click", function(){
            cartdata = cartdata.filter(function(ele){
                return ele.id !== data[i].id
            })
            localStorage.setItem("cart", JSON.stringify(cartdata))
            findtotal(cartdata)
            display(cartdata)
            alert("Product Removed succesfully")
            numbers.innerText = cartdata.length
        })

        div.append(image,name,text,price,decre,quantity,incre,btn)
        cart_div.append(div)
  }
  }

  
findtotal(cartdata)
function findtotal(data){
    sum=0
  for(let i=0; i<data.length; i++){
      sum = sum+(data[i].price*data[i].quantity)
  }
  totalvalue.innerText = sum
}