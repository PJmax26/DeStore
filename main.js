let snicks_box = document.querySelector('.snicks_box')
let hoodies_box = document.querySelector('.hoodies_box')

let snicks_hero = document.querySelector('.hero-1')
let hoodies_hero = document.querySelector('.hero-2')

let closeBtn = document.querySelector('.close_btn')
let menuBtn = document.querySelector('.menu_btn')
let navBar = document.querySelector('.nav__links')

let collectionBtn = document.querySelectorAll('.aside__btn')
let collection_products = document.querySelector('.collection_container')
let product = document.querySelectorAll('.collection_product')

let bagsbtn = document.querySelector('#bags')
let snickersbtn = document.querySelector('#snickers')
let hoodiesbtn = document.querySelector('#hoodies')
let allbtn = document.querySelector('#all')

collectionBtn.forEach((item) => {

    // getting click events of all the navigation butons
    // checking to see whcich bottom was clicked, to display the prefered typr of items
    item.addEventListener('click', function(){

        // displaying all the items
        if(item.id == 'all'){
            product.forEach((i) => {
                i.style.display = 'block'
            })

            const btnList = [bagsbtn, snickersbtn, hoodiesbtn]

            item.classList.add('live')
            btnList.forEach((i) =>{
                i.classList.remove('live')
            })
        }

        else if(item.id == 'bags'){

            // displaying all the items with id of bag
            product.forEach((i) => {
                if(i.id == 'bag'){
                    i.style.display = 'block'
                }
                else{
                    i.style.display = 'none'
                }
            })

            const btnList = [allbtn, snickersbtn, hoodiesbtn]

            item.classList.add('live')
            btnList.forEach((i) =>{
                i.classList.remove('live')
            })
        }

        else if(item.id == 'snickers'){

            // displaying all the items with id of snickers
            product.forEach((i) => {
                if(i.id == 'snickers'){
                    i.style.display = 'block'
                }
                else{
                    i.style.display = 'none'
                }
            })

            const btnList = [allbtn, bagsbtn, hoodiesbtn]

            item.classList.add('live')
            btnList.forEach((i) =>{
                i.classList.remove('live')
            })
        }

        else if(item.id == 'hoodies'){

            // displaying all the items with id of hoodies
            product.forEach((i) => {
                if(i.id == 'hoodies'){
                    i.style.display = 'block'
                }
                else{
                    i.style.display = 'none'
                }
            })

            const btnList = [allbtn, bagsbtn, snickersbtn]

            item.classList.add('live')
            btnList.forEach((i) =>{
                i.classList.remove('live')
            })
        }
    })
})

// hero section toggling

snicks_box.addEventListener('click', function(){
    snicks_hero.style.display = 'flex'
    hoodies_hero.style.display = 'none'

    if(hoodies_box.className.includes('active')){
        hoodies_box.classList.remove('active')
        snicks_box.classList.add('active')
    }
})

hoodies_box.addEventListener('click', function(){
    snicks_hero.style.display = 'none'
    hoodies_hero.style.display = 'flex'

    if(snicks_box.className.includes('active')){
        snicks_box.classList.remove('active')
        hoodies_box.classList.add('active')
    }
})

// closing nav menu
closeBtn.addEventListener('click', function(){
    navBar.style.left = '-100%';
})

// opening nav menu
menuBtn.addEventListener('click', function(){
    navBar.style.left = 0;
})