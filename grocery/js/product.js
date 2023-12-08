
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((completedata)=>{
    // console.log(completedata)
    "";
    let product = completedata.filter((value)=> value.id == id)
    product = product[0]
    
    let data = `<div class="card">  
        <span class="imm">
          <img src="${product.image}" class="card-img-top"
               alt="Product 1 Image"></span>
           <div class="card-body">
               <h5 class="card-title">${product.title}</h5>
               <p class="card-text">${product.title}</p>
               <p class="category"> ${product.category}</p>
               <p class="card-text"><strong>${product.price}</strong> $19.99</p>
               <button  onclick="window.location.href = './productlist.html?id=${product.id}';" >Add to cart</button>
               
           </div>
       </div>`
    document.getElementById("productDetailing").innerHTML = data;
}).catch((error)=>{
    console.log(error)
})