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
   

let ul = document.getElementById('place')


const loadList = async() => {
    const sensors = await getSensors()

    console.log(sensors)
    for (let index in sensors) {
        let li = document.createElement('li')
        
        li.innerHTML = `<li class="place__list">
                            <span class="place__name">${sensors[index].description}</span>
                            <canvas class="place__graph"></canvas>
                        </li>`

        ul.appendChild(li)
    } 
}

loadList()