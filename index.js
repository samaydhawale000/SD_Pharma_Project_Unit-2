
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

   //  --------------------------------------
    
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

// ----------------------------
    
let lau_main = document.getElementById("lau-main")

let lauchesdata = [
    {
       image: "https://cdn01.pharmeasy.in/dam/products/159115/shelcal-500mg-strip-of-15-tablets-2-1674482021.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 280.98,
       id:1
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6cd3f7cf650135a0a95f826ce220a475.png?f=png?dim=256x0",
       name :"Pharmeasy Pill Box Organizer",
       price : 432.98,
       id:2
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png?dim=256x0",
       name :"Liveasy Foods Sugarfree Chyav..",
       price : 230.98,
       id:3
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/X21346/colgate-total-240g-120g-x-2-pack-of-2-whole-mouth-health-advanced-health-saver-pack-2-1674196905.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 280.98,
       id:4
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/O88855/fiama-shower-gel-blackcurrant-bearberry-body-wash-for-radiant-glow-250ml-bottle-2-1674205237.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 180.98,
       id:5
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/N06656/durex-air-ultra-thin-condom-3-nos-1-1670314578.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 20.98,
       id:6
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1669349726.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 680.98,
       id:7
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1669655023.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 880.98,
       id:8
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/G40689/siddhayu-gokshura-tablet-by-baidyanath-mens-wellness-60-20-tablets-free-pack-of-2-2-1671744387.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 280.98,
       id:9
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/156565/saridon-headache-relief-tablet-strip-of-10-tablets-2-1677127042.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 70.98,
       id:10
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1671741393.jpg?dim=1440x0",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 60.98,
       id:11
    },
    {
       image: "https://cms-contents.pharmeasy.in/carousel_item/7a381fcb6e9-App_dettol-min.png?dim=1440x0",
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

        let current = data[i]
        let btn = document.createElement("button")
            btn.innerText = "Add to Cart"

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
                    btn.innerText = "Added"
                    btn.style.opacity ="40%"
                    alert("Product added to a cart")
                }
                else{
                    alert("Product already in cart!!")
                    btn.innerText = "Added"
                    btn.style.opacity ="40%"
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
            i.style.left = "-1120px"
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
            i.style.left = "-1120px"
         }
        if(lau_count<0){
           lau_count =0
        }
    }
})

// -----------------------------------

let tre_main = document.getElementById("tre-main")
let trendingdata = [
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/A78012/indulekha-bringha-ayurvedic-hair-oil-100-mlcomb-applicator-bottle-for-men-women-2-1674196201.jpg?dim=1440x0",
       name :"Indulekha Bringha Ayurvedi..",
       price : 180.78,
       id:13
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/Y86033/navratna-ayurvedic-cool-hair-oil-bottle-of-200-ml-2-1654233081.jpg",
       name :"Navratna Ayurvedic Cool Hair Oil..",
       price : 222.58,
       id:14
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/J82705/kapiva-ashwagandha-gold-capsules-helps-in-stress-management-100-ayurvedic-60-n-caps-2-1671743969.jpg?dim=1440x0",
       name :"Ashwagandha gold Capsules..",
       price : 170.12,
       id:15
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/I42242/dabur-stresscom-120-caps-2-1669711034.jpg?dim=700x0&dpr=1&q=100",
       name :"Dabur Stresscom 120 Caps",
       price : 180.32,
       id:16
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/I44880/acne-uv-spf-50-gel-50gm-1-1669711072.jpg?dim=1440x0",
       name :"Everherb (By Pharmeasy)..",
       price : 180.56,
       id:17
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/E01682/wow-skin-science-blemish-care-serum-50-ml-2-1671742206.jpg?dim=700x0&dpr=1&q=100",
       name :"Wow Skin Science Blemish Care..",
       price : 220.32,
       id:18
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/N65859/liveasy-essentials-aloe-vera-refreshing-and-cleansing-face-wipes-20s-2-1671743461.jpg",
       name :"Liveasy Essentials Aloe Vera Ref..",
       price : 80.99,
       id:19
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/192351/i-pill-emergency-contraceptive-pill-2-1672279640.jpg?dim=700x0&dpr=1&q=100",
       name :"I-Pill Emergency Contraceptive Pill",
       price : 111.45,
       id:20
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/V99935/ahaglow-spf-40-skin-protect-gel-60gm-2-1641788908.jpg?dim=700x0&dpr=1&q=100",
       name :"Ahaglow Spf 40 Skin Protect Gel 60gm",
       price : 120.76,
       id:21
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/A65047/liveasy-essentials-bamboo-cotton-buds-80-sticks-160-swabs-1-1671742385.jpg",
       name :"Shelcal 500mg Strip Of 15 Tablets",
       price : 100.3,
       id:22
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/E39028/nourrir-protectme-spf-55-sunscreen-gel-60-g-2-1671743460.jpg?dim=700x0&dpr=1&q=100",
       name :"Nourrir Protectme Spf 55 Sunscreen..",
       price : 160.09,
       id:23
    },
    {
       image: "https://cdn01.pharmeasy.in/dam/products_otc/M56307/new-photostable-spf55-sunscreen-emulgel-50g-2-1671744622.jpg?dim=700x0&dpr=1&q=100",
       name :"New Photostable Spf55+ Sunscreen..",
       price : 140.78,
       id:24
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

// -------------------------------------


let fea_left = document.getElementById("fea-left")
let fea_right = document.getElementById("fea-right");

let fea_div = document.querySelectorAll("#fetured>div>div")

let fea_count =0
fea_right.addEventListener("click", function(){
    fea_count++

    for(let i of fea_div){

        if(fea_count==0){
           i.style.left = "0px"
        }
        if(fea_count==1){
           i.style.left = "-260px"
        }
        if(fea_count==2){
           i.style.left = "-480px"
        }
        if(fea_count==3){
           i.style.left = "-800px"
        }
        if(fea_count==4){
         i.style.left = "-1000px"
       }
       if(fea_count==5){
         i.style.left = "-1200px"
       }
        
        if(fea_count>5){
           fea_count =5
        }
    }
})
fea_left.addEventListener("click", function(){
    fea_count--

    for(let i of fea_div){

      if(fea_count==0){
         i.style.left = "0px"
      }
      if(fea_count==1){
         i.style.left = "-260px"
      }
      if(fea_count==2){
         i.style.left = "-480px"
      }
      if(fea_count==3){
         i.style.left = "-800px"
      }
      if(fea_count==4){
       i.style.left = "-1000px"
     }
     if(fea_count==5){
       i.style.left = "-1200px"
     }
        if(fea_count<0){
           fea_count =0
        }
    }
})
