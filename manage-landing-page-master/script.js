const circleOne = document.querySelector('.circle-one').addEventListener('click', displayOne)
const circleTwo = document.querySelector('.circle-two').addEventListener('click', displayTwo)
const circleThree = document.querySelector('.circle-three').addEventListener('click', displayThree)
const circleFour = document.querySelector('.circle-four').addEventListener('click', displayFour)
const testItemOne = document.querySelector('.test-item-one')
const testItemTwo = document.querySelector('.test-item-two')
const testItemThree = document.querySelector('.test-item-three')
const testItemFour = document.querySelector('.test-item-four')



function displayOne() {
    testItemOne.classList.add('display-testimonial')

    //remove from other testimonials
    testItemTwo.classList.remove('display-testimonial')
    testItemThree.classList.remove('display-testimonial')
    testItemFour.classList.remove('display-testimonial')
}

function displayTwo() {
    testItemTwo.classList.add('display-testimonial')

    testItemOne.classList.remove('display-testimonial')
    testItemThree.classList.remove('display-testimonial')
    testItemFour.classList.remove('display-testimonial')
}

function displayThree() {
    testItemThree.classList.add('display-testimonial')


    testItemTwo.classList.remove('display-testimonial')
    testItemOne.classList.remove('display-testimonial')
    testItemFour.classList.remove('display-testimonial')
}

function displayFour() {
    testItemFour.classList.add('display-testimonial')


    testItemTwo.classList.remove('display-testimonial')
    testItemThree.classList.remove('display-testimonial')
    testItemOne.classList.remove('display-testimonial')
}

