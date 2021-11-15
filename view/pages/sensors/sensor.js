import { getSensor } from "../../../model/server/api.js"

async function loadSensor(){
    let ul = document.getElementById('card')

    const sensor = await getSensor()
    
    sensor.forEach(sensor => {
        let li = document.createElement('li')

        const device = () =>  sensor.device === 1 ? 'ligado' : 'desligado'
        const formatDate = new Date(sensor.installation_date).toLocaleDateString('pt-BR') 

        li.innerHTML = `
        <div class="card__wrapper">
       
            <h2 class="card__tittle">${sensor.description}</h2>
            <div class="card__content">
                <p class="card__paragraph">${formatDate}</p>
                <p class="card__paragraph">${device()}</p>
                <p class="card__paragraph">${sensor.situation}</p>
                <p class="card__paragraph">${sensor.second_gap}</p>
            </div>
        </div>
        `
    
        li.classList.add("card__section")

        ul.appendChild(li)
    });
}

loadSensor()