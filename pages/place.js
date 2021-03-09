const chard = (canva) => {

    var ctx = document.getElementById(`place__graph${canva}`).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['23:59', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Temperature',
                backgroundColor: '#007bbd79',
                borderColor: '#007ABD',
                data: [0, 10, 5, 10, 20, 15, 15]
            }]
        },

        // Configuration options go here
        options: {}
    })

    function updateGraph() {
        chart.data.datasets[0].data.push(100);
        chart.data.labels.push('new label');

        chart.update();
    }
}

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
let ul = document.getElementById('place')


const loadList = async() => {
    const sensors = await getSensors()

    console.log(sensors)
    for (let index in sensors) {
        let li = document.createElement('li')
        
        li.innerHTML = `<li class="place__list">
                            <span class="place__name">${sensors[index].description}</span>
                            <div class="place__back"  width="723px" height="369px">
                            <canvas class="place__graph0" id="place__graph${index}" ></canvas>
                        </div>
                        </li>`

        ul.appendChild(li)

        chard(index)
    } 
}

loadList()

getReadings()