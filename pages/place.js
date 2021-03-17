import {chard} from './chard.js'
import {getPlace, getReadings} from '../server/api.js'

// creating LIs  with chad

const loadList = async() => {
    let ul = document.getElementById('place')
    const places = await getPlace()

    for (let index in places) {
        let li = document.createElement('li')
        
        li.innerHTML = `<li class="place__list">
                            <span class="place__name">${places[index].description}</span>
                            <div class="place__back"  width="723px" height="369px">
                            <canvas class="place__graph" id="place__graph${index}" ></canvas>
                        </div>
                        </li>`

        ul.appendChild(li)

        let arrayTemp = [] 
        let arrayDate = []
        let arrayHumi = []
        
        getReadings()
          .then(value => value.forEach(element => {
            arrayTemp.push(element.value_temperature)
            arrayDate.push(element.date)
            arrayHumi.push(element.value_humidity)
    
            chard(index, arrayTemp, arrayHumi, arrayDate)
          })
          .then(
            console.log(a)
          )
          )
          .catch(err => console.log(err))

        
    } 
}

loadList()