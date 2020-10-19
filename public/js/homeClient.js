
// $(() => {

//     // let wishlistIds = []
//     $('.btn-danger').click((ev) => {
//         let item = $(ev.target).parent().parent().parent();
//         let item_nest = $(item).children()[1]
//         let item_Id = $(item).attr('id')
//         let name = $(item_nest).children()[0]
//         item_name = $(name).text()

//         let description = $(item_nest).children()[1]
//         item_description = $(description).text()

//         let img_url = $(item).children()[0]
//         item_img_url = $(img_url).attr('src')
//         console.log('clicked')



//         $.post('/wishlist', {
//             item_Id: item_Id,
//             item_name: item_name,
//             item_description: item_description,
//             item_img_url: item_img_url
//         })
//         // $.ajax({
//         //     url: '/home/wishlist',
//         //     method: 'POST',
//         //     success: JSON.stringify({
//         //         listId: item_Id,
//         //         name: item_name,
//         //         description: item_description,
//         //         img_url: item_img_url
//         //     })
//         // })


//         // console.log(item_Id)
//         // console.log(item_nest)
//         // // console.log(listId)
//         // console.log(item_name)
//         // console.log(description)
//         // console.log(img_url)
//     })
// })


$(() => {

    
    $('.wishlist-btn').click(addItemTowishlist);
    $('.cart-btn').click(addItemToCart);

    function addItemTowishlist(e){
       let wishlistItem = addItem(e);
    //    console.log(wishlistItem );
       addwishlistItemToLocalStorage(wishlistItem);
    }

    function addItemToCart(e){
        let cartItem = addItem(e);
        addcartItemToLocalStorage(cartItem);
    }


    function addItem(e){
        // console.log(e.target);
        let item = $(e.target).parent().parent().parent();

        let item_nest = $(item).children()[1]

        let item_id = $(item).attr('id')

        let name = $(item_nest).children()[0]
        // ITEM NAME
        let item_name = $(name).text()

        let description = $(item_nest).children()[1]
        // ITEM DESC
        let item_description = $(description).text()

        let img_url = $(item).children()[0]
        // ITEM IMG URl
        let item_img_url = $(img_url).attr('src')

        // console.log(item_description);

        let itemObject = {
            item_id : item_id,
            name: item_name,
            description: item_description,
            img_url: item_img_url
        }
        return itemObject;
        // addToLocalStorage(wishlist_item);

    }

    function addwishlistItemToLocalStorage(wishlist_item){
        // console.log(wishlist_item);
        console.log("ehyy");

        let username = document.getElementById("username");
        // console.log(username.innerText);
        let wishlistKey = "wishlist-" + String(username.innerText);
        // console.log(key);
        

        
        let allItem = JSON.parse(localStorage.getItem(wishlistKey));


        if(allItem == null){
            allItem =[];
        }

        let size = allItem.length;
        let i;

        for(i=0;i<size;i++){
            if(allItem[i].item_id === wishlist_item.item_id){
                alertify.alert('Item Already Exist!');
                break;
            }    
        }

        if(i==size){
            allItem.push(wishlist_item);
            localStorage.setItem(wishlistKey,JSON.stringify(allItem));
        }

        
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
})







