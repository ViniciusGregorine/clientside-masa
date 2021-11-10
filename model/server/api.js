// import { options } from "./options"

export const getPlace= async() => {
    try {
     const {data}  = await axios.get('http://localhost:3456/place')
 
     return data.message
    } catch (error) {
         console.error(error)
    }
  }
 
export const getReadings= async() => {
     try {
      const {data}  = await axios.get('http://localhost:3456/reading')
      console.log(data)
  
      return data.message 
     } catch (error) {
          console.error(error)
     }
}

export const getReadingsByPlaceId = async(placeId) => {
	try {
	 const {data} = await axios.get(`http://localhost:3456/reading${placeId}`)
	 return data.message 
	} catch (error) {
		 console.error(error)
	}
  }
 
  
export const getJwtToken = async(email, password) => {
	try {
	 const {data}  = await axios.get(`http://localhost:3456/login`, options)
	 console.log(data)
	 return data
      
	} catch (error) {
		 console.error(error)
	}
}
 