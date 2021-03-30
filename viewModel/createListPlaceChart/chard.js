export function createChart(canvaNumber) {
    const ctx = document.getElementById(`place__graph${canvaNumber}`).getContext('2d');
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
            legend: {
                display: true,
                labels: {
                    boxWidth: 15,
                    // usePointStyle: true
                }
            },

            // xAxes: [{
            //     ticks: {
            //         max: 5,
            //         min: 0,
            //         stepSize: 0.5
            //     }
            // }]
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