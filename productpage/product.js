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
          console.log(prod)
        let div=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let div4=document.createElement("div")
       // if(prod.category=="Fab Wraps starting at 99 each"){
        let img=document.createElement("img")
         img.src=prod.img
         img.style.width="100%"
         let prod_name=document.createElement("p")
          prod_name.innerText = prod.name
          prod_name.setAttribute("class", "prod_name");
          let prod_price = document.createElement("p");
          prod_price.innerHTML = `<i class="far fa-square"></i>` + " &#8377; "+ prod.price;
          div.append(prod_name, prod_price)
          div.setAttribute("class","prod-name-price")
          let prod_desc=document.createElement("p")
          prod_desc.innerText = prod.description;
          let read_more=document.createElement("p")
          read_more.innerText = 'Read More';
          prod_desc.setAttribute("class","prod-desc")
          let prod_rating_div = document.createElement("div");
          prod_rating_div.setAttribute("class","prod-rating-div")
         let prod_rating=document.createElement("p")
         prod_rating.innerHTML =` <i class="fas fa-star"></i>`+""+prod.rating
          prod_rating_div.append(prod_rating)
      

          let addtoCartBtn = document.createElement("div");
          addtoCartBtn.setAttribute("class", "addtoCart");
        

          addtoCartBtn.innerHTML = `<div class="add">ADD</div> 
         <p>Customisable<p>`
        //  addtoCartBtn.style.backgroundColor="#FFCA28"

        //   addtoCartBtn.className = "addtoCartBtn";
        
      //   if(localStorage.getItem("displayitem")===null) {
          //    localStorage.setItem("displayitem",JSON.stringify([]))
          //}

          
          
         addtoCartBtn.onclick=function() {
                 console.log("Yes")
                 let presentitems=JSON.parse(localStorage.getItem("FaasosCart"));
              let bagcount=0;
              console.log(presentitems);
              presentitems.forEach(function (items) {
                
                  if(items.name==prod.name) {
                      bagcount++;
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
    

    
    

    div2.append(prod_rating_div,addtoCartBtn)
    div.style.display="flex"
         div.style.justifyContent="space-between"
         div2.style.display="flex"
         div2.style.justifyContent="space-between"
         div3.style.padding="2%"

         div3.append(div,prod_desc,read_more,div2)
         div4.append(img,div3)
         midContainer.append(div4)
         div4.style.backgroundColor="white"
         //  }
         
         
      })
    
}

function gotoCart(){
 window.location.href="cart.html"
}