export const getPlace= async() => {
    try {
     const {data}  = await axios.get('http://localhost:3456/place')
     console.log(data)
 
     return data
    } catch (error) {
         console.error(error)
    }
  }
 
export const getReadings= async() => {
     try {
      const {data}  = await axios.get('http://localhost:3456/reading')
      console.log(data)
  
      return data
     } catch (error) {
          console.error(error)
     }
}

export const getReadingsByPlaceId = async(placeId) => {
	try {
	 const {data}  = await axios.get(`http://localhost:3456/reading${placeId}`)
	 console.log(data)
 
	 return data
	} catch (error) {
		 console.error(error)
	}
  }
 