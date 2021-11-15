import { getPlace } from "../../../model/server/api.js"

async function loadPlaces(){
    let ul = document.getElementById('place__ul')

    const places = await getPlace()
    
    places.forEach(place => {
        let li = document.createElement('li')

        li.innerHTML = `
        <div class="card__wrapper">
        <h2 class="card__tittle">${place.description}</h2>
        <section class="place__description">
            <p>${place.note}</p>
            <div class="place__informations">
            <div class="place_informations__item">material:<p> ${place.material}</p></div> 
                <div class="place_informations__item">altura:<p> ${place.height}</p></div>
                <div class="place_informations__item">largura: <p> ${place.width}</p></div>
                <div class="place_informations__item">comprimento: <p> ${place.length}</p></div>
            </div>
        </section>
        </div>
        `
    
        li.classList.add("card__section")

        ul.appendChild(li)
    
    });
}

loadPlaces()