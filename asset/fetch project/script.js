// fetch is a window object
// fetch is used to perform a request
// fetch method returns a promise
// the promise is either fulfilled or rejected


const apiurl = "https://fakestoreapi.com/products"
fetch(apiurl)
    .then((Response) =>{
        // console.log(Response.json());
        return Response.json();

    })
.then((fetchedData) =>{
    console.log(fetchedData)

    let shoppingdata = "";

    fetchedData.map((singleData) => {
        shoppingdata +=  `
         <img src=${singleData.image} alt="" class"card-image">
                <h4>${singleData.title}title</h4>
                <p>${singleData.description}description</p>
                <p>${singleData.categories}categories</p>

                <div>
                    <p> ${singleData.price}price</p>
                    <p>${singleData.rating.rate} - ${singleData.rating.rate}rating</p>
                </div>

            </div>
`
    })

    document.getElementById("shop-container").innerHTML =shoppingdata;

}).catch((error) =>{
    console.log(error);
})