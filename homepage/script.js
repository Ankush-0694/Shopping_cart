$(() => {
    let cart_btn = $('.btn-danger')
    console.log(cart_btn)
    let j = 0
    let main_card
    for (let i = 0; i < cart_btn.length; i++) {
        let button = cart_btn[i]

        $(button).click((ev) => {
            let cart_item = ev.target
            main_card[j] = $(cart_item).parent().parent().parent()
        })
    }
})