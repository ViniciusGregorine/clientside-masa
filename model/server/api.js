import { login, getToken, logout } from "./auth.js"

axios.defaults.headers.post['x-acess-token'] = getToken();
axios.defaults.headers.delete['x-acess-token'] = getToken();
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'http://localhost:3456'

const loginPage = 'http://localhost:5500/view/pages/login/login.html'

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

export const postSensor = async(description, situation, gap) => {
     try {
          const {status} = await axios.post('/sensor', {
               description, 
               situation, 
               gap
          })
          return status 
     } catch (error) {
          console.log('erro on post', error)
          
          if(error.response.status === 401) {
               logout()
               location.href = loginPage
          }
     }
}



export const deleteSensor = async (description) => {
     try {
          const {status} = await axios.delete(`/sensor?description=${description}`)
          return status 
          
     } catch (error) {
          console.log('erro on post', error)
          
          if(error.response.status === 401) {
               logout()
               location.href = loginPage
          }
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
          console.log('erro on post', error)
          
          if(error.response.status === 401) {
               logout()
               location.href = loginPage
          }
     }
}

export const postTypeReading = async(description, prefix, min_value, max_value) => {
     try {
          const {status} = await axios.post('/type-reading', {
               description, 
               prefix, 
               min_value,
               max_value
          })
          return status 
     } catch (error) {
          console.log('erro on post', error)
          
          if(error.response.status === 401) {
               logout()
               location.href = loginPage
          }
     }
}

export const deleteEntity = async (rote, description) => {
     try {
          const {status} = await axios.delete(`/${rote}?description=${description}`)
          return status 
          
     } catch (error) {
          console.log('erro on post', error)
          
          if(error.response.status === 401) {
               logout()
               location.href = loginPage
          }
     }
}
 