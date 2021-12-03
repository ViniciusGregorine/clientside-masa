import { deleteEntity, getSensor, postSensor } from "../../../model/server/api.js"
import { userAdmin } from "../../../viewModel/userLogin.js";

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
            <p class="card__paragraph card__paragraph--id ${userAdmin()}">Id: ${sensor.id}</p>
            <button type="button" class="card__trash--button  ${userAdmin()}" value="${sensor.description}"/>
                <img class="card__trash" src="/view/public/icons/icon-trash.svg" alt="${sensor.description}"></img>
            </button>
            <div class="card__content">
                <p class="card__paragraph">${formatDate}</p>
               <!-- <p class="card__paragraph">${device()}</p> -->
                <p class="card__paragraph">${sensor.situation}</p>
                <p class="card__paragraph">Espaçamento entre leituras: ${sensor.second_gap}s</p>
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

async function deleteSensorController(description) {
    try {
        console.log(description)
        const status = await deleteEntity('sensor', description)
        if(status === 200) location.reload();
    }catch (error) {
        console.log('ocorreu um erro')    
    }
}

$(document).on("click", ".card__trash--button", event => {
    deleteSensorController(event.target.alt)
})


loadSensor()