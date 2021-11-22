import { getPlace, postPlace } from "../../../model/server/api.js"

async function loadPlaces(){
    let ul = document.getElementById('place__ul')

    const places = await getPlace()
    
    places.forEach(place => {
        let li = document.createElement('li')

        li.innerHTML = `
        <div class="card__wrapper">
        <h2 class="card__tittle">${place.description}</h2>
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


loadPlaces()