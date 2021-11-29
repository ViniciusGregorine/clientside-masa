import { getSensor, postSensor } from "../../../model/server/api.js"

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


async function submitSensor(){
    console.log('asjdlfj')
    const descriptionValue = document.getElementById('description_input').value
    const situationValue = document.getElementById('situation_input').value
    const gapValue = document.getElementById('gap_input').value

    try {
        const status = await postSensor(descriptionValue, situationValue, gapValue)
         if(status === 200) location.reload();

    } catch (error) {
        console.log('errorer', error)
    }
}

const btn = document.getElementById('register__button')

btn.addEventListener('click', submitSensor)

loadSensor()