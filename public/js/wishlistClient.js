$(()=>{
    // console.log("bhello");
    let username = document.getElementById("username");
        // console.log(username.innerText);
        
    let wishlistKey = "wishlist-" + String(username.innerText);
        // console.log(typeof(key));

    function fetchItems(){
        let items = JSON.parse(localStorage.getItem(wishlistKey));
        // console.log(items);   
        let html = '';
        //this give warning and error when items is null. check it and solve it
        if(items!==null){
            items.forEach((item)=>{
            
                html +=`<div class="card mb-3" style="max-width: 800px;" id=${item.item_id}>
                            <div class="row">
                                <div class="col-sm-4 text-center">
                                    <img src="${item.img_url}" class="card-img" alt="...">
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.name}</h5>
                                        <p class="card-text">${item.description}</p>
                                        <button type="button" class="btn btn-primary cart-btn mx-2 my-2">ADD TO CART</button>
                                        <button type="button" class="btn btn-danger remove-btn mx-2 my-2">REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>`
    
            });
        }
        

        $(".container").html(html);
    }

    fetchItems();

    // adding that item to cart

    $('.cart-btn').click(addItemToCart);
    function addItemToCart(e){
        let cartItem = addItem(e);
        // console.log(cartItem);
        addcartItemToLocalStorage(cartItem);
    }

    function addItem(e){
        console.log("clicked");
        // console.log(e.target);
        let item = $(e.target).parent().parent().parent().parent();
        // console.log(item);

        let item_id = $(item).attr('id');

        let name = $(e.target).parent().children()[0]
        let item_name = $(name).text()


        let description = $(e.target).parent().children()[1]
        let item_description = $(description).text()


        let img_url = $(e.target).parent().parent().parent().children()[0];
        img_url = $(img_url).children()[0];
        let item_img_url = $(img_url).attr('src')

        let itemObject = {
            item_id : item_id,
            name: item_name,
            description: item_description,
            img_url: item_img_url
        }
        return itemObject;
        // addToLocalStorage(wishlist_item);

    }

    function addcartItemToLocalStorage(cart_item){
        let username = document.getElementById("username");
        // console.log(username.innerText);
        let cartKey = "cart-" + String(username.innerText);
        // console.log(key);
        

        
        let allItem = JSON.parse(localStorage.getItem(cartKey));


        if(allItem == null){
            allItem =[];
        }

        let size = allItem.length;
        let i;

        for(i=0;i<size;i++){
            if(allItem[i].item_id === cart_item.item_id){
                alert("item Exists");
                break;
            }    
        }

        if(i==size){
            allItem.push(cart_item);
            localStorage.setItem(cartKey,JSON.stringify(allItem));
        }


    }

    // remove item from local storage

    $(document).delegate('.remove-btn', 'click', removeItem);

    function removeItem(e){
        // let username = document.getElementById("username");
        // console.log(username.innerText);
        console.log("clicked");
        
        
        let wishlist_item = $(e.target).parent().parent().parent().parent();
        let item_id = $(wishlist_item).attr('id')
        // console.log(item_id);

        let items = JSON.parse(localStorage.getItem(wishlistKey));
        // console.log(items);

        let remainingItems  = items.filter((item) => item.item_id !== item_id);
        // console.log(remainingItems);

        localStorage.removeItem(wishlistKey);
       
        localStorage.setItem(wishlistKey,JSON.stringify(remainingItems));

        fetchItems();

    }












// let element = document.getElementsByClassName("container");
// console.log(element);
// console.log(element.className);
// console.log(html);
// $(".container").append("hey");

// $("button").click(function(){
//     $("p").append("<b>Appended text</b>");
//     console.log("hyey");
//   });


// console.log(element);

// element.innerHTML = html;
})