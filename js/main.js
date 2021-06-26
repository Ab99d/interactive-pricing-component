let slider = document.querySelector('[type=range]')
let sliderDiv = document.querySelector('.slider')
let circle = document.querySelector('[data="test"]')
let h2price = document.getElementById('price')
let PageViews = document.getElementById('pageviews')
const swicher = document.querySelector('label')
const swicherInput = document.querySelector('label input')
const sliderBall = document.querySelector('.sliderB')
const monthPlan = document.getElementById('month-plan')

let arrNum = [8, 12, 16, 20, 24]

slider.oninput = () => {
    let num = Number(slider.value)
    if(swicherInput.checked === true) {
        const multNum = arrNum.map(x => x *= (1 - 0.25) * 12)
        switch (num) {
            case 0:
                h2price.innerHTML = `$${multNum[0]}.00`
                PageViews.textContent = `10K`
                break;
            case 25:
                h2price.innerHTML = `$${multNum[1]}.00`
                PageViews.textContent = `50K`
                break;
            case 50:
                h2price.innerHTML = `$${multNum[2]}.00`
                PageViews.textContent = `100K`
                break;
            case 75:
                h2price.innerHTML = `$${multNum[3]}.00`
                PageViews.textContent = `500K`
                break;
            case 100:
                h2price.innerHTML = `$${multNum[4]}.00`
                PageViews.textContent = `1M`
        }
    }else {
        switch (num) {
            case 0:
                h2price.innerHTML = `$${arrNum[0]}.00`
                PageViews.textContent = `10K`
                break;
            case 25:
                h2price.innerHTML = `$${arrNum[1]}.00`
                PageViews.textContent = `50K`
                break;
            case 50:
                h2price.innerHTML = `$${arrNum[2]}.00`
                PageViews.textContent = `100K`
                break;
            case 75:
                h2price.innerHTML = `$${arrNum[3]}.00`
                PageViews.textContent = `500K`
                break;
            case 100:
                h2price.innerHTML = `$${arrNum[4]}.00`
                PageViews.textContent = `1M`
        }
    }
    sliderDiv.style.width = `${num}%`;
}

function multiplyNum() {

    let theNum = Number(h2price.textContent.slice(1))    
    if(swicherInput.checked === true) {
        monthPlan.textContent = `/ year`
        swicher.classList.toggle('on')
        sliderBall.classList.toggle('sliderBall')
        if (theNum > 72) return
        let discountOn = theNum *= (1 - 0.25)
        h2price.innerHTML = `$${discountOn * 12}.00`;
    }else {
        discountOn = '';
        monthPlan.textContent = `/ month`
        swicher.classList.toggle('on')
        sliderBall.classList.toggle('sliderBall')
        let num1 = Number(slider.value)
        switch (num1) {
            case 0:
                h2price.innerHTML = `$${arrNum[0]}.00`
                break;
            case 25:
                h2price.innerHTML = `$${arrNum[1]}.00`
                break;
            case 50:
                h2price.innerHTML = `$${arrNum[2]}.00`
                break;
            case 75:
                h2price.innerHTML = `$${arrNum[3]}.00`
                break;
            case 100:
                h2price.innerHTML = `$${arrNum[4]}.00`
        }
    }
}
