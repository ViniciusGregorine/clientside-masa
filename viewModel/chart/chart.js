export function createChart(canvaNumber) {
    const ctx = document.getElementById(`place__graph${canvaNumber}`).getContext('2d');
    var chart = new Chart(ctx, {

        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [],
            datasets: [{
                label: '',
                fill: false,
                borderColor:  '#475966',
                data: []
            }]
        },

        // Configuration options go here
        options: {
   
            responsive: true,

            scales: { 
                xAxes: [{
                    ticks: {
                        textAlign: 'right',
                        autoSkip: true,
                        maxTicksLimit: 5,
                        maxRotation: 0,
                        minRotation: 0,       
                    }
                }]
            }
        }
    })
    return chart
}

export const addData = async(chart, label, data) => {
    label.forEach(element => {
        chart.data.labels.push(element);  
    });

    data.forEach(element => {
        chart.data.datasets[0].data.push(element) 
    });

    chart.update();
} 

export const reAddData = async(chart, label, data) => {
    chart.data.labels = []
    chart.data.datasets[0].data = []

    label.forEach(element => {
        chart.data.labels.push(element);  
    });

    data.forEach(element => {
        chart.data.datasets[0].data.push(element) 
    });

    chart.update();
} 

export const addChartLabel = async(chart, labelName) => {
    chart.data.datasets[0].label = labelName
    chart.update()
}

// lixo
export const applyXFilter = async(chart) => {
    let quanty = 6

    labels.sort()

    const tals = labels.map((element, index)=>{
        return element < quanty
    })

    chart.data.labels.push()

    console.log("chard test", tals)

    chart.update()
}