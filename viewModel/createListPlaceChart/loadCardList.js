import {createChart, createCtx, addData} from './chard.js'
import {getPlace, getReadings} from '../../model/server/api.js'

// creating LIs  with chad

const loadList = async() => {
    let ul = document.getElementById('place')
    const places = await getPlace()

    for (let index in places) {
        let li = document.createElement('li')

        li.innerHTML = `<li class="place__list">
                            <span class="place__name">${places[index].description}</span>
                            <div class="place__back" >
                            <canvas class="place__graph" id="place__graph${index}" ></canvas>
                        </div>
                        </li>`

        ul.appendChild(li)

        const one = createChart(createCtx(index))
        console.log(one)

        let arrayTemp = [] 
        let arrayDate = []
        let arrayHumi = []
        
      
        try {
           const readings = await getReadings()
           readings.forEach(element => {
            arrayTemp.push(element.value_temperature)
            arrayDate.push(element.hour)
            arrayHumi.push(element.value_humidity)    
          })
        } catch (error) {
          console.log(error)
           throw new Error(error)
        }
  
        addData(one, arrayDate,  arrayTemp, arrayHumi) 
    } 
}

loadList()