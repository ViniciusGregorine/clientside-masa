export function createChart(canvaNumber) {
    const ctx = document.getElementById(`place__graph${canvaNumber}`).getContext('2d');
    console.log('context', ctx)
    var chart = new Chart(ctx, {

        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [],
            datasets: [{
                label: 'Temperatura',
                fill: false,
                borderColor: '#FF3833',
                data: []
            },
            {
            label: 'Humidade',
            fill: false,
            borderColor: '#475966',
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

export const addData = async(chart, label, data1, data2) => {
    
    label.forEach(element => {
        chart.data.labels.push(element);  
    });

    data1.forEach(element => {
        chart.data.datasets[0].data.push(element) 
    });

    data2.forEach(element => {
        chart.data.datasets[1].data.push(element) 
    });

    chart.update();
} 

export const applyXFilter = async(chart) => {
    let labels = chart.data.labels
    let quanty = 6

    labels.sort()

    const tals = labels.map((element, index)=>{
        return element < quanty
    })

    chart.data.labels.push()

    console.log("chard test", tals)

    chart.update()
}