const getSensors= () => (
    fetch('http://localhost:3456/sensor')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((err) => {
      console.error('Error: ', err)
  })

)

getSensors()