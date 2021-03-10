export const chard = (canva, data, data2, label) => {

    var ctx = document.getElementById(`place__graph${canva}`).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: label,
            datasets: [{
                label: 'Temperatura',
                backgroundColor: null,
                borderColor: '#ff471a',
                data: data
            },
            {
            label: 'Humidade',
            backgroundColor: null,
            borderColor: '#007ABD',
            data: data2
            
            }]
        },

        // Configuration options go here
        options: {}
    })
     function updateGraph(data, label) {
        chart.data.datasets[0].data.push(data);
        chart.data.labels.push(label);
    
        chart.update();
    }
   
}

