import {chard} from './chard.js'

chard(-1)


//api
 const getSensors= async() => {
   try {
    const {data}  = await axios.get('http://localhost:3456/sensor')
    console.log(data)

    return data
   } catch (error) {
        console.error(error)
   }
 }

 const getReadings= async() => {
    try {
     const {data}  = await axios.get('http://localhost:3456/reading')
     console.log(data)
 
     return data
    } catch (error) {
         console.error(error)
    }
  }
   


// creating LIs  with chad



const loadList = async() => {
    let ul = document.getElementById('place')
    const sensors = await getSensors()

    for (let index in sensors) {
        let li = document.createElement('li')
        
        li.innerHTML = `<li class="place__list">
                            <span class="place__name">${sensors[index].description}</span>
                            <div class="place__back"  width="723px" height="369px">
                            <canvas class="place__graph" id="place__graph${index}" ></canvas>
                        </div>
                        </li>`

        ul.appendChild(li)

        chard(index)
    } 
}

loadList()