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

export const addData = async(chart, label, data) => {
    
    const labelx = label
    labelx.forEach(element => {
        console.log('elemento label: ', element)
        chart.data.labels.push(element);  
    });

    const datay = await data//[2, 4]
        for(let i = 0; i <= datay.length; i ++){
            console.log('gatinha: ', datay)
            chart.data.datasets[0].data.push(datay[i])
        
        }
    
    chart.update();
} 
    


