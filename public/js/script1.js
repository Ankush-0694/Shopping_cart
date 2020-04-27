
$(() => {

    // let wishlistIds = []
    $('.btn-danger').click((ev) => {
        let item = $(ev.target).parent().parent().parent();
        let item_nest = $(item).children()[1]
        let item_Id = $(item).attr('id')
        let name = $(item_nest).children()[0]
        item_name = $(name).text()

        let description = $(item_nest).children()[1]
        item_description = $(description).text()

        let img_url = $(item).children()[0]
        item_img_url = $(img_url).attr('src')
        console.log('clicked')



        $.post('/wishlist', {
            item_Id: item_Id,
            item_name: item_name,
            item_description: item_description,
            item_img_url: item_img_url
        })
        // $.ajax({
        //     url: '/home/wishlist',
        //     method: 'POST',
        //     success: JSON.stringify({
        //         listId: item_Id,
        //         name: item_name,
        //         description: item_description,
        //         img_url: item_img_url
        //     })
        // })


        // console.log(item_Id)
        // console.log(item_nest)
        // // console.log(listId)
        // console.log(item_name)
        // console.log(description)
        // console.log(img_url)
    })
})