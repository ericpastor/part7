import { useState, useEffect } from 'react'
import axios from 'axios'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}



const useCountry = (name) => {
  const [country, setCountry] = useState(null)
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`

  useEffect(() => {
    (async() => {
    
    try {
      if(name){
      const fetchName = await axios.get(url)
      if(fetchName)
        setCountry({findCountry: true, data: fetchName.data[0]})  }     
    } catch (error) {
      setCountry({ findCountry: false, data: null})
    
    } 
    })()
  }, [name, url])

  return country 
}



const Country = ({ country }) => {
  if (!country){
    return null
  }
  if (!country.findCountry) {
    return <div>not found...</div>
  }
  

  return (
    <div>
      <h3>{country.data.name.common}</h3>
      <div>population {country.data.population}</div> 
      <div>capital {country.data.capital}</div>
      <img src={country.data.flags.png} height='100' alt={`flag of ${country.data.name}`}/> 
    </div>
  )  
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App
