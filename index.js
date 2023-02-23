
    let left = document.getElementById("left")
    let right = document.getElementById("right")

    let images  = document.querySelectorAll("#SlidingImg>div>img")
    console.log( images)
    let a =0;
    right.addEventListener("click", function(){
       a++

       for(let i of images){
        if(a==0){
            i.style.left = "0px"
        }
        if(a==1){
        i.style.left = "-300px"
        }
        if(a>1){
            a=1
        }
       }
    })
    left.addEventListener("click", function(){
       a--
       for(let i of images){
        if(a==0){
            i.style.left = "0px"
        }
        if(a==1){
        i.style.left = "-240px"
        }
        if(a<0){
            a=0
        }
       }
    })

    
    
let fe_left = document.getElementById("fe-left")
let fe_right = document.getElementById("fe-right");

let fe_images = document.querySelectorAll("#features> div>div>img")

let fe_count =0
fe_right.addEventListener("click", function(){
    fe_count++

    for(let i of fe_images){

        if(fe_count==0){
           i.style.left = "0px"
        }
        if(fe_count==1){
           i.style.left = "-200px"
        }
        if(fe_count==2){
           i.style.left = "-400px"
        }

        if(fe_count==3){
           i.style.left = "-580px"
        }
        
        if(fe_count>3){
           fe_count =3
        }
    }
})
fe_left.addEventListener("click", function(){
    fe_count--

    for(let i of fe_images){

        if(fe_count==0){
           i.style.left = "0px"
        }
        if(fe_count==1){
           i.style.left = "-200px"
        }
        if(fe_count==2){
           i.style.left = "-400px"
        }
        if(fe_count==3){
           i.style.left = "-580px"
        }
        if(fe_count<0){
           fe_count =0
        }
    }
})

    
let lau_main = document.getElementById("lau-main")

let lauchesdata = [
    {
       image: "https://cdn01.pharmeasy.in/dam/products/159115/shelcal-500mg-strip-of-15-tablets-2-1674482021.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 280.98,
       id:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-1-1671740677.jpg?dim=1440x0",
       name :"Pharmeasy Pill Box Organizer",
       price : 432.98,
       id:2
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/F38650/liveasy-foods-roasted-peri-peri-makhana-rich-in-protein-fibre-assists-weight-loss-100-grams-2-1671742787.jpg?dim=700x0&dpr=1&q=100",
       name :"Liveasy Foods Sugarfree Chyav..",
       price : 230.98,
       id:3
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/H98890/liveasy-essentials-paper-cotton-buds-100s-2-1675416986.jpg",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 280.98,
       id:4
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/Q79438/liveasy-foods-sugarfree-chyavanposh-gives-2x-immunity-boosts-energy-900-gms-2-1676691154.jpg",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 180.98,
       id:5
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/J24391/horlicks-mothers-plus-vanilla-refill-500-g-1-1661253083.jpg",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 20.98,
       id:6
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/I46427/dettol-antiseptic-liquid-bottle-of-125-ml-2-1669711369.jpg",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 680.98,
       id:7
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 880.98,
       id:8
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1671741016.jpg",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 280.98,
       id:9
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/A65047/liveasy-essentials-bamboo-cotton-buds-80-sticks-160-swabs-1-1671742385.jpg",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 70.98,
       id:10
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products/064425/ecosprin-75mg-strip-of-14-tablets-1-1647434835.jpg",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 60.98,
       id:11
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/G67452/pharmeasy-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-2-1672137118.jpg",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 780.98,
       id:12
    },
]

let cartdata = JSON.parse(localStorage.getItem("cart"))||[]
display(lauchesdata)
  function display(data){
    for(let i=0; i<data.length; i++){
     
        let div = document.createElement("div");
        
        let image = document.createElement("img")
        image.setAttribute("src",data[i].image)

        let name = document.createElement("h4")
        name.innerText = data[i].name

        let price = document.createElement("h4")
        price.innerText ="₹"+data[i].price

        let btn = document.createElement("button")
        btn.innerText = "Add to cart"

        let current = data[i]
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
                    btn.innerText = "Added"
                    btn.style.opacity ="50%"
                    alert("Product added to a cart")
                }
                else{
                    alert("Product already in cart")
                    btn.innerText = "Added"
                    btn.style.opacity ="50%"
                }
        })

        div.append(image,name,price,btn)
        lau_main.append(div);
  }
  }

let cardiv = document.querySelectorAll("#lau-main >div")

let lau_left = document.getElementById("lau-left")
let lau_right = document.getElementById("lau-right");

  let lau_count = 0;

lau_right.addEventListener("click", function(){
    lau_count++

    for(let i of cardiv){

        if(lau_count==0){
           i.style.left = "0px"
        }
        if(lau_count==1){
           i.style.left = "-230px"
        }
        if(lau_count==2){
           i.style.left = "-480px"
        }
        if(lau_count==3){
           i.style.left = "-700px"
        }
        if(lau_count==4){
            i.style.left = "-940px"
         }
         if(lau_count==5){
            i.style.left = "-1100px"
         }
        
        if(lau_count>5){
           lau_count =5
        }
    }
})
lau_left.addEventListener("click", function(){
    lau_count--

    for(let i of cardiv){

        if(lau_count==0){
           i.style.left = "0px"
        }
        if(lau_count==1){
           i.style.left = "-230px"
        }
        if(lau_count==2){
           i.style.left = "-480px"
        }
        if(lau_count==3){
           i.style.left = "-700px"
        }
        if(lau_count==4){
            i.style.left = "-940px"
         }
         if(lau_count==5){
            i.style.left = "-1100px"
         }
        if(lau_count<0){
           lau_count =0
        }
    }
})

  

  