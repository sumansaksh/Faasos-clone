async function getData(){
    let res=await fetch(`https://demo8715768.mockable.io/faasos`)
    let data=await res.json()
    console.log(data)
    showData(data)
} 
getData()

function showData(data){
    let midContainer=document.getElementById('mid-container')
      data.forEach((prod)=>{
         // console.log(prod)
        let div=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let div4=document.createElement("div")
        let div5=document.createElement("div")
        let div6=document.createElement("div")
       // if(prod.category=="Fab Wraps starting at 99 each"){
        let img=document.createElement("img")
         img.src=prod.img
         img.style.width="100%"
         let prod_name=document.createElement("p")
         prod_name.innerText=prod.name
         prod_name.style.fontSize="18px"
         prod_name.style.fontWeight="700"
         prod_name.style.color="black"
         prod_name.style.width="75%"
         let prod_price=document.createElement("p")
         let btn_img=document.createElement("img")
         btn_img.src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
         btn_img.style.width="12px"
         btn_img.style.height="12px"
         //btn_img.style.margin="25% 0 0 3%"
        // btn_img.style.border="1px solid red"
         prod_price.innerText="₹" +prod.price
         div5.append(btn_img,prod_price)
         div5.style.display="flex"
         div5.style.justifyContent="space-between"
         div5.style.width="22%"
         div5.style.alignItems="center"
         div5.style.marginTop="-15px"
         div.append(prod_name,div5)
         let prod_desc=document.createElement("p")
         prod_desc.innerText=prod.description
         prod_desc.style.height="16px"
         prod_desc.style.overflow="hidden"
         let readmore=document.createElement('p')
         readmore.innerText="Read More"

         readmore.onclick=()=>{
             window.location.href="productDetailsPage"
         }
         let prod_rating_div=document.createElement("div")
         let prod_rating=document.createElement("p")
         prod_rating="★"+" "+prod.rating
         prod_rating_div.append(prod_rating)
         prod_rating_div.style.backgroundColor="green"
         prod_rating_div.style.color="white"
         prod_rating_div.style.width="20%"
         prod_rating_div.style.padding="6px"
         prod_rating_div.style.borderRadius="2px"
         let addtoCartBtn=document.createElement("button")
         addtoCartBtn.innerText="ADD"
         addtoCartBtn.style.backgroundColor="#FFCA28"
         addtoCartBtn.style.width="85%"
         let custom_text=document.createElement("p")
         custom_text.innerText="customisable"
         custom_text.style.fontSize="10px"
         custom_text.style.lineHeight="0"
         div6.append(addtoCartBtn,custom_text)
         div6.style.textAlign="center"
         div6.style.width="50%"
        // addtoCartBtn.style.width="40%"
         addtoCartBtn.className="addtoCartBtn"

      

    
        
         addtoCartBtn.onclick=function() {
                 console.log("Yes")
              let presentitems=JSON.parse(localStorage.getItem("FaasosCart"));
              let bagcount=0;
              console.log(presentitems);
               presentitems.forEach(function (items) {
                
               if(items.name==prod.name) {
                 bagcount++;
                 //let qty=document.getElementById(qty)
                 //qty.innerText="bagcount"
                }
               }); 
               if(bagcount==1) {
                  alert("Already in Cart");
              } else {
                  addtobag(prod);
                  
               }   
               }

               if(localStorage.getItem("FaasosCart")===null) {
         localStorage.setItem("FaasosCart",JSON.stringify([]))
     }
     function addtobag(p) {
     let products_cart=JSON.parse(localStorage.getItem("FaasosCart"));
     products_cart.push(p);

     localStorage.setItem("FaasosCart",JSON.stringify(products_cart));
         }





         div2.append(prod_rating_div,div6)
         div.style.display="flex"
         div.style.justifyContent="space-between"
         //div.style.alignItems="center"
         div2.style.display="flex"
         div2.style.height="40px"
         div2.style.justifyContent="space-between"
         div3.style.padding="2%"

         div3.append(div,prod_desc ,readmore,div2)
         div4.append(img,div3)
         div4.style.cursor="pointer"
         midContainer.append(div4)
         div4.style.backgroundColor="white"
      //  }
     
      })
}
let qty=document.getElementById("qty")
let kart=JSON.parse(localStorage.getItem("FaasosCart"))
var count=0;
console.log(kart)
function cartData(){
    kart.forEach((item)=>{
        count++
qty.innerHTML=count;
        console.log(item.name)
        let div=document.createElement("div")
        let div2=document.createElement("div")
        let product_name=document.createElement("p")
        product_name.innerText=item.name
        let product_price=document.createElement("p")
        product_price.innerText="₹"+" "+item.price
        let buttonLeft=document.createElement("button")
        buttonLeft.innerText="-"
        buttonLeft.style.width="40px"
        buttonLeft.style.fontSize="16px"
        buttonLeft.style.border="1px solid #FFA000"
        buttonLeft.style.borderRadius="4px 7px 7px 4px"
        let buttonRight=document.createElement("button")
        let itemNo=document.createElement("p")
        itemNo.innerText=""
        buttonRight.innerText="+"
        buttonLeft.style.backgroundColor="white"
        buttonRight.style.backgroundColor="white"
        buttonRight.style.width="40px"
        buttonRight.style.height="40px"
        buttonLeft.style.height="40px"
        buttonRight.style.fontSize="19px"
        buttonRight.style.border="1px solid #FFA000"
        buttonRight.style.borderRadius="7px 4px 4px 7px"
        buttonRight.style.marginLeft="2%"
        div2.append(buttonLeft,itemNo, buttonRight)
        div2.style.display="flex"
        div2.style.width="19%"
        div2.style.marginLeft="2%"

        let cartItem=document.getElementById("cart-item")
        div.append(product_name,div2,product_price)
        product_name.style.width="58%"
        product_price.style.width="17%"
        product_price.style.marginLeft="2%"

        div.style.display="flex"
       // div.style.height="20px"
        div.style.width="100%"
        cartItem.append(div)

        var total=kart.reduce(function(ac,el){ 

            return ac+ Number(el.price)
            },0)
            var total_pr=document.getElementById("total")
          
            total_pr.innerHTML='₹'+""+total
          
    })
}
cartData()

function gotoCart(){
 window.location.href="/cart2.html"
}