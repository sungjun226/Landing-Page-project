const languageSelctor = document.querySelector('.language');

// hover로 해도 됐을듯 ㅎㅎ..
languageSelctor.addEventListener('mouseover', () => {
    const languageButton = document.querySelector('.select-language');
    languageButton.style.color = '#6fb39c';
})


languageSelctor.addEventListener('mouseleave', () => {
    const languageButton = document.querySelector('.select-language');
    languageButton.style.color = 'black'
})

const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value > 99) {
        navBar.style.backgroundColor = 'white'
        languageSelctor.style.opacity = 0
       
    } else {
        navBar.style.backgroundColor = '#faf4e1'
        languageSelctor.style.opacity = 1
    }
});


const slideObject = document.querySelector('#card1')

window.addEventListener('scroll' , () => {
    let value = window.scrollY    
    if (value > 1100) {
        slideObject.style.animation = 'slideback1 1s ease forwards'
        
    } else {
        slideObject.style.animation = 'slide1 1s ease'
    }

})

const slideObject1 = document.querySelector('#card2')

window.addEventListener('scroll' , () => {
    let value = window.scrollY    
    console.log(value)
    if (value > 1700) {
        slideObject1.style.animation = 'slideback2 1s ease forwards'
        
    } else {
        slideObject1.style.animation = 'slide2 1s ease'
    }
})

const getCard1Button = document.querySelector('.card1-button')

getCard1Button.addEventListener('click' , () => {
    const getCard1H1 = document.querySelector('.card1-title')
    getCard1H1.textContent = '바보바보'
    document.querySelector('.card1-img').setAttribute('src','./img/멍청이.webp')
    document.querySelector('.card1-p').textContent = 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ죄송합니다'
})

const getCard2Button = document.querySelector('.card2-button')

getCard2Button.addEventListener('click' , () => {
    const getCard1H1 = document.querySelector('.card2-title')
    getCard1H1.textContent = '멍청이멍청이멍청이'
})