import { deleteEntity, getTypeReadings, postTypeReading } from "../../../model/server/api.js"
import { userAdmin } from "../../../viewModel/userLogin.js";

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
            <p class="card__paragraph card__paragraph--id ${userAdmin()}">Id: ${typeReading.id}</p>
            <button type="button" class="card__trash--button  ${userAdmin()}" value="${typeReading.description}"/>
            <img class="card__trash" src="/view/public/icons/icon-trash.svg" alt="${typeReading.description}"></img>
        </button>
        </div>
        `
    
        li.classList.add("card__section")

        ul.appendChild(li)
    
    });
}

async function submitTypeReading(){
    const descriptionValue = document.getElementById('description_input').value
    const prefixValue = document.getElementById('prefix_input').value
    const minValue = document.getElementById('min_input').value
    const maxValue = document.getElementById('max_input').value

    try {
        const status = await postTypeReading(descriptionValue, prefixValue, minValue, maxValue)
         if(status === 200) location.reload();
  
    } catch (error) {
        console.log('errorer', error)
    }
}

export async function deleteTypeReadingController(description) {
    try {
        const status = await deleteEntity('type-reading', description)
        if(status === 200) location.reload();
    }catch (error) {
        console.log('ocorreu um erro')    
    }
}

$(document).on("click", ".card__trash--button", event => {
    deleteTypeReadingController(event.target.alt)
})

const btn = document.getElementById('register__button')
btn.addEventListener('click', submitTypeReading)



loadTypeReadings()