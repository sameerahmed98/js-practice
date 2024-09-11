const mainContainer = document.querySelector('#root')

const divCreation = {
    type: 'div',
    attributes: {
        class: 'main-wrapper',
        id: 'header'
    }
}

const creatingHeadingElement = {
    type: 'h1',
    attributes: {
        class: 'main-heading'
    },
    innerText: "Hello! I'm Header"
}

function creatingElements(domElements, container){
    const createdElement = document.createElement(domElements.type)

    for (const attribute in domElements.attributes) {
        createdElement.setAttribute(attribute, domElements.attributes[attribute])
    }

    if(domElements.innerText){
        createdElement.innerText = domElements.innerText
    }

    container.appendChild(createdElement)
    return createdElement
}

const createdDiv = creatingElements(divCreation, mainContainer)

creatingElements(creatingHeadingElement, createdDiv)