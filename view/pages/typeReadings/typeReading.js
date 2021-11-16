import { getTypeReadings } from "../../../model/server/api.js"

async function loadTypeReadings(){
    let ul = document.getElementById('card')

    const typeReadings = await getTypeReadings()
    
    typeReadings.forEach(typeReading => {
        let li = document.createElement('li')

        li.innerHTML = `
        <div class="card__wrapper">
        <h2 class="card__tittle">${typeReading.description}</h2>
        <div class="card__content">
            <div class="card__paragraph">Prefixo da Leitura:<p> ${typeReading.prefix}</p></div> 
                <div class="card__paragraph">valor máximo:<p> ${typeReading.max_value}</p></div>
                <div class="card__paragraph">valor mínimo:<p> ${typeReading.min_value}</p></div>
            </div>
        </div>
        `
    
        li.classList.add("card__section")

        ul.appendChild(li)
    
    });
}

loadTypeReadings()