import {createChart, addData, applyXFilter} from './chard.js'
import {getPlace, getReadingsByPlaceId} from '../../model/server/api.js'

// creating LIs  with chad

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const loadList = async() => {
    let ul = document.getElementById('place')
    
    const places = await getPlace()

    // guambiarra para o loading do chart 
    document.getElementById('place').style.height = '100%'

    for (let index in places) {
        let li = document.createElement('li')

        li.innerHTML = `
                            <div style="height: 6px;"></div>
                            <span class="place__name">${places[index].description}</span>

                            <div class="place__back" >
                              <canvas class="place__graph" id="place__graph${index}" key="${index}"></canvas>
                            </div>
                            <div style="height: 3px;"></div>
                            <!-- <nav class="place__filter">
                            <button class="place__button" onclick="applyXFilter(placeChart)">Hoje</button>
                            <button class="place__button">3 meses</button>
                            </nav> -->
                        `

        li.classList.add("place__list")
        ul.appendChild(li)
      
        const placeChart = createChart(index)
   

        let arrayTemp = [] 
        let arrayDate = []
        let arrayHumi = []
        
      
        try {
          const readings = await getReadingsByPlaceId(places[index].id)
            readings.forEach(element => {
              arrayTemp.push(element.value_temperature)

              const formatDate = element.date.toString()

              arrayDate.push(`${formatDate} - ${element.hour}`)
                arrayHumi.push(element.value_humidity)
            })
        } catch (error) {
          console.log(error)
           throw new Error(error)
        }

        arrayDate = arrayDate.sort()
  
        addData(placeChart, arrayDate,  arrayTemp, arrayHumi) 
      
        applyXFilter(placeChart)

    } 
}

loadList()
// while (true){
//   loadList()
//   await sleep(2000)
//   }
