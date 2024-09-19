let slidetext = document.getElementById('phar1');

window.addEventListener('scroll',function() {
    let value = this.window.scrollY
    console.log(value)
    if (value > 700) {
        slidetext.style.animation = 'slideback 1s ease-out forwards'
    }
    else {
        slidetext.style.animation = 'slide 1s ease-out'
    }
})

let slidetext1 = document.getElementById('phar2');

window.addEventListener('scroll',function() {
    let value = this.window.scrollY
    console.log(value)
    if (value > 1000) {
        slidetext1.style.animation = 'slideback 1s ease-out forwards'
    }
    else {
        slidetext1.style.animation = 'slide 1s ease-out'
    }
})