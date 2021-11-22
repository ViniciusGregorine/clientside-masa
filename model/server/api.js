import { login } from "./auth.js"

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://localhost:3456'

export const getPlace= async() => {
    try {
     const {data}  = await axios.get('/place')
 
     return data.message
    } catch (error) {
         console.error(error)
    }
  }

export const getSensor= async() => {
     try {
          const {data}  = await axios.get('/sensor')

          return data.message
     } catch (error) {
          console.error(error)
     }
}

export const getTypeReadings= async() => {
     try {
      const {data}  = await axios.get('/type-reading')
      console.log(data)
  
      return data.message 
     } catch (error) {
          console.error(error)
     }
}

export const getReadings= async() => {
     try {
      const {data}  = await axios.get('/reading')
      console.log(data)
  
      return data.message 
     } catch (error) {
          console.error(error)
     }
}

export const getReadingsByPlaceId = async(placeId) => {
	try {
	 const {data} = await axios.get(`/reading${placeId}`)
	 return data.message 
	} catch (error) {
		 console.error(error)
	}
  }
 
  
export const loginUser = async(email, password) => {
	try {
	     const {data}  = await axios.get(`/login`, {
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

export const postPlace = async(description, note, material, height, length, width) => {
     try {
          const {status} = await axios.post('/place', {
               description, 
               note, 
               material, 
               height, 
               length, 
               width
          })
          return status 
     } catch (error) {
          console.log('erro no post ', error)
     }
}
 