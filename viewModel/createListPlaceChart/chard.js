export function createCtx(canva){
    const ctx = document.getElementById(`place__graph${canva}`).getContext('2d');
    return ctx
}

export function createChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [],
            datasets: [{
                label: 'Temperatura',
                backgroundColor: null,
                borderColor: '#ff471a',
                data: []
            },
            {
            label: 'Humidade',
            backgroundColor: null,
            borderColor: '#007ABD',
            data: []
            
            }]
        },

        // Configuration options go here
        options: {}
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