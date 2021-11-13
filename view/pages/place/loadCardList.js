import {createChart, addData, addChartLabel, reAddData} from '../../../viewModel/chart/chart.js'
import {getPlace, getReadingsByPlaceId} from '../../../model/server/api.js'

/*
chartByPlaceIds = [
  {
    id: number,
    chart: [{
      type_reading: string,
      ctx: context
    }]
  }
]
*/
let chartByPlaceIds = [] 


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

    chartByPlaceIds.push({id: place.id, chart: []})


    readings.forEach((reading) => {
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

      
      const label = `${reading.type_reading}  (${reading.prefix})`
      addChartLabel(placeChart, label)
      addData(placeChart, dates, values)
      
      chartByPlaceIds[placeIndex]['chart'].push({type_reading: reading.type_reading, ctx: placeChart})

      keyIndex++
    })
  })
}

async function updateChart (){
  chartByPlaceIds.forEach(async chart => { 
    const readings = await getReadingsByPlaceId(chart.id)
    
    readings.forEach((reading) => {
      let dates = []
      let values = []

      chart.chart.forEach(entity => {
          if (entity.type_reading == reading.type_reading){
            reading.values.forEach(element => {
              const formatDate = new Date(element.date).toLocaleDateString('pt-BR') 
              
              dates.push(`${formatDate} - ${element.hour}`)
              values.push(element.value)
            })

             reAddData(entity.ctx, dates, values)
          }
        })
    })
  }) 
}

const asyncUpdate = async () => {
  while(true){
    try{
      await sleep(6000)
      await updateChart()    
    }catch{
          console.log('error on loop');
    }
  }
}

loadList()
asyncUpdate()