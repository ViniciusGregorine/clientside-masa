import {createChart, addData, addChartLabel, reAddData} from './chard.js'
import {getPlace, getReadingsByPlaceId} from '../../model/server/api.js'

let contexts = []
let placeId = []


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const loadList = async() => {
  let keyIndex = 0

  let ul = document.getElementById('place')

  const places = await getPlace()

  document.getElementById('place').style.height = '100%'



  places.forEach(async (place, placeIndex) => {
    let li = document.createElement('li')

    li.innerHTML = `
      <div style="height: 6px;"></div>
        <span class="place__name">${place.description}</span>    
      <div style="height: 3px;"></div>`

    li.classList.add("place__list")

    ul.appendChild(li)
    const readings = await getReadingsByPlaceId(place.id)
    placeId.push(place.id)


    readings.forEach((reading, index) => {
      let div = document.createElement('div')
      div.innerHTML = `
      <canvas class="place__graph" id="place__graph${keyIndex}" key="${keyIndex}"></canvas>`
      
      div.classList.add('place__back')
      li.appendChild(div)

      const placeChart = createChart(keyIndex)
      
      
      let dates = []
      let values = []
      
      reading.values.forEach(element => {
        const formatDate = new Date(element.date).toLocaleDateString('pt-BR') 
        
        dates.push(`${formatDate} - ${element.hour}`)
        values.push(element.value)
      })

      contexts.push(placeChart)

      const label = `${reading.type_reading}  (${reading.prefix})`
      addChartLabel(placeChart, label)
      addData(placeChart, dates, values)

      keyIndex++
    })
  })

}

async function updateChart (){
  let ctxIndex = 0
  
  placeId.forEach(async id => { 
    const readings = await getReadingsByPlaceId(id)
    
    readings.forEach((reading, index) => {
      let dates = []
      let values = []
      
      reading.values.forEach(element => {
        const formatDate = new Date(element.date).toLocaleDateString('pt-BR') 
        

        dates.push(`${formatDate} - ${element.hour}`)
        values.push(element.value)

      })
       reAddData(contexts[ctxIndex], dates, values)
      ctxIndex++
    })
  }) 
}
const asyncUpdate = async () => {
  while(true){
    try{
      await sleep(8000)
      await updateChart()    
}catch{
      console.log('error on loop');
    }
  }
}

loadList()
asyncUpdate()