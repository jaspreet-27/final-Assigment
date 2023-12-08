// fetch("https://fakestoreapi.com/products").then((data)=>{
//     return data.json();
// }).then((completedata)=>{
//     console.log(completedata)
//     let data = "";
//     completedata.map((value)=>{
//         data += ` <div class="card">
//         <h1 class ="title">${value.title}</h1>
//         <img src=${value.image}  alt="pic"  class="image">  
//         <p class ="contentt">${value.description}</p>
//         <p class = "category">${value.category}</p>
//         <p class = " price">${value.price}</p>
//         <button onclick="window.location.href ='./product.html?id=${value.id}'> class="Add-to-cart> View Details</button>
//     </div>`
//     document.getElementById("cards").innerHTML = data; 
//     })
// }).catch((error)=>{
//     console.log(error)
// })
// onclick="window.location.href = './product.html?id=' + id"
//             <button  onclick="window.location.href='./productlist.html'" class="Add-to-cart"> View Details<button>

fetch("https://fakestoreapi.com/products").then((data)=>{
        return data.json();
    }).then((completedata)=>{
        // console.log(completedata)
        let data = "";
        completedata.map((value)=>{

            console.log(value,"value")
            data += ` <div class="card">
            <h1 class ="title">${value.title}</h1>
            <img src=${value.image}  alt="pic"  class="image">
            
            <p class = "category">${value.category}</p>
            <p class = " price">${value.price}</p>
            <button  onclick="window.location.href='./product.html?id=${value.id}'" class="Add-to-cart"> View Details</button>
        </div>`
        document.getElementById("cards").innerHTML = data; 
        })
    }).catch((error)=>{
        console.log(error)
    })