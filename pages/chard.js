export const chard = (canva) => {

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