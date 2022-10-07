const API_URL = process.env.REACT_APP_API_KEY

export default {
  login: async user => {
    await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    async response => await response.json()
    async (data) =>{
      console.log('success: ', data.message)
      return await data
    }
  }
}