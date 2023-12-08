
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


fetch("https://fakestoreapi.com/products").then((data) => {
    return data.json();
}).then((completedata) => {
    // console.log(completedata)
    "";
    completedata.map((value)=>{
    // product = product[0]

    let data =
        `<div class="item-details">
    <img src="${value.image}" alt="Product Image">
    <div class="item-info">
      <h4>${value.title}</h4>
      <p class="item-price">${value.price}</p>
    </div>
    <button>remove</button>
    <button>+</button>
    <input type="number" class="item-quantity" value="2" min="1">
    <button>-</button>  
    
    <button onclick="window.location.href = './invoice.html';" class="btn btn-primary">Proceed to
    Checkout</button>
    
  </div>`
    document.getElementById("item-id").innerHTML = data;
    });
}).catch((error) => {
    console.log(error)
})
