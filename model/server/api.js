import { login } from "./auth.js"

export const getPlace= async() => {
    try {
     const {data}  = await axios.get('http://localhost:3456/place')
 
     return data.message
    } catch (error) {
         console.error(error)
    }
  }

export const getSensor= async() => {
     try {
          const {data}  = await axios.get('http://localhost:3456/sensor')

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
 
  
export const loginUser = async(email, password) => {
	try {
	 const {data}  = await axios.get(`http://localhost:3456/login`, {
          headers: {
               'password': `${password}`,
               'email': `${email}`
          }
      })

      login(data.message)
	 return data.status
	} catch (error) {
		 console.error(error)
	}
}
 