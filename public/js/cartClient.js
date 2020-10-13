$(()=>{
    let username = document.getElementById("username");
        // console.log(username.innerText);
        
    let cartKey = "cart-" + String(username.innerText);
        // console.log(typeof(key) );

    function fetchItems(){
        let items = JSON.parse(localStorage.getItem(cartKey));
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
                            <button type="button" class="btn btn-danger remove-btn mx-2 my-2">REMOVE FROM CART</button>
                        </div>
                    </div>
                </div>
            </div>`
    
            });
        }
        

        $(".container").html(html);
    }

    fetchItems();
    

    // remove item from local storage

    $(document).delegate('.remove-btn', 'click', removeItem);

    function removeItem(e){
        // let username = document.getElementById("username");
        // console.log(username.innerText);
        console.log("clicked");
        
        
        let cart_item = $(e.target).parent().parent().parent().parent();
        let item_id = $(cart_item).attr('id')
        // console.log(item_id);

        let items = JSON.parse(localStorage.getItem(cartKey));
        // console.log(items);

        let remainingItems  = items.filter((item) => item.item_id !== item_id);
        // console.log(remainingItems);

        localStorage.removeItem(cartKey);

        
        localStorage.setItem(cartKey,JSON.stringify(remainingItems));
        

       
        

        

        fetchItems();

    }

})