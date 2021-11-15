import { getPlace } from "../../../model/server/api.js"

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

loadPlaces()