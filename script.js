const ratingEl = document.querySelector('.rating')
const thanks = document.querySelector('.thanks')
const ratings = document.querySelectorAll('.ratings')
const submit = document.querySelector('.submit')
const displayRating = document.querySelector('.display-rating')




submit.addEventListener('click', ()=>{
    
})

    ratings.forEach(ratingR =>{
        ratingR.addEventListener('click', ()=>{
            ratingR.classList.toggle('active')

            submit.addEventListener('click', ()=>{
                if(ratingR.classList.contains('active')){
                    ratingEl.classList.remove('active')
                    thanks.classList.add('active')
                    displayRating.innerHTML = ratingR.innerHTML
                }
            })
        })
      
    })
