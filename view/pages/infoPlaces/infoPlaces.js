import { deletePlace, getPlace, postPlace } from "../../../model/server/api.js"
import { isAuthenticated } from "../../../model/server/auth.js"

function userAdmin(){
    if(isAuthenticated()) {
        return 'admin'
    }
    return 'user'
}

export async function deletePlaceController(description) {
    try {
        console.log(description)
        const status = await deletePlace(description)
        if(status === 200) location.reload();
    }catch (error) {
        console.log('ocorreu um erro')    
    }
}

async function loadPlaces(){
    let ul = document.getElementById('place__ul')

    const places = await getPlace()
    
    places.forEach(place => {
        let li = document.createElement('li')

        li.innerHTML = `
        <div class="card__wrapper">
        <h2 class="card__tittle">${place.description}</h2>
        <p class="card__paragraph card__paragraph--id ${userAdmin()}">Id: ${place.id}</p>
        <button type="button" class="card__trash--button  ${userAdmin()}" value="${place.description}"/>
            <img class="card__trash" src="/view/public/icons/icon-trash.svg" alt="${place.description}"></img>
        </button>
        <div class="card__content">
            <p class="card__paragraph">${place.note}</p>
            <div class="place__informations">
            <div class="card__paragraph">material:<p> ${place.material}</p></div> 
                <div class="card__paragraph">altura:<p> ${place.height}</p></div>
                <div class="card__paragraph">largura: <p> ${place.width}</p></div>
                <div class="card__paragraph">comprimento: <p> ${place.length}</p></div>
            </div>
        </div>
        </div>
        `

        li.classList.add("card__section")
        ul.appendChild(li)    
    });
}

async function submitPlace(){
    const descriptionValue = document.getElementById('description_input').value
    const noteValue = document.getElementById('note_input').value
    const materialValue = document.getElementById('material_input').value
    const heightValue = document.getElementById('height_input').value
    const widthValue = document.getElementById('width_input').value
    const lengthValue = document.getElementById('length_input').value

    try {
        const status = await postPlace(descriptionValue, noteValue, materialValue, heightValue, lengthValue, widthValue)
         if(status === 200) location.reload();
  
    } catch (error) {
        console.log('errorer', error)
    }
}

const btn = document.getElementById('register__button')
btn.addEventListener('click', submitPlace)


// jquery for multiples delete buttons
$(document).on("click", ".card__trash--button", event => {
    deletePlaceController(event.target.alt)
})

loadPlaces()