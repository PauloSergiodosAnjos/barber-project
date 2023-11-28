import { useState } from "react"

export default function App() {

  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [barber, setBarber] = useState("")

  const handleName = (ev)=>{
    const newName = ev.target.value
    setName(newName)
  }
  const handleDate = (ev)=>{
    const newData = ev.target.value
    setDate(newData)
  }
  const handleTime = (ev)=>{
    const newTime = ev.target.value
    setTime(newTime)
  }
  const handleBarber = (ev)=>{
    const newBarber = ev.target.value
    setBarber(newBarber)
  }


  return(
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
        height: "100vh"
      }}>
        <form style={{
        display: "flex",
        flexDirection: "column",
        }}>
          <input
          type="text" 
          id="name" 
          placeholder="Nome" 
          value={name} 
          onChange={handleName} 
          style={{
            width: "267px",
            height: "40px",
            padding: "12px",
            marginTop: "12px"
        }}/>
          <input 
          type="text" 
          id="date" 
          placeholder="Data: dd/mm" 
          value={date}
          onChange={handleDate}
          style={{
            width: "267px",
            height: "40px",
            padding: "12px"
        }}/>
          <input 
          type="text" 
          id="time" 
          placeholder="Horário: xx:xx" 
          value={time}
          onChange={handleTime}
          style={{
            width: "267px",
            height: "40px",
            padding: "12px"
        }}/>
          <select 
          name="barbers" 
          id="barbers" 
          value={barber}
          onChange={handleBarber}
          style={{
            width: "267px",
            height: "40px"
        }}>
            <option 
            value=""
            selected="selected">...
            </option>
            <option 
            value="Kennedy">Kennedy
            </option>
            <option 
            value="Wender">Wender
            </option>
            <option 
            value="Paulo">Paulo
            </option>
          </select>
          <button 
          id="save"
          >
          Salvar
          </button>
        </form>
        <div 
        style={{
          borderRadius: "7px",
          marginTop: "163px",
          width: "1337px",
          height: "330px",
          backgroundColor: "white",
          padding: "36px 45px",
          marginBottom: "20px",
          flexWrap: "wrap",
          display: "flex",
          gap: "12px"
        }}>

        </div>
      </div>
    </>
  )
}