import { useState } from "react"
import imgTime from "./assets/relogio 1.png"
import imgCut from "./assets/ferramenta-de-corte-de-cabelo 1.png"
import imgCalendar from "./assets/calendario.png"
import imgClient from "./assets/clientes 2.png"

export default function App() {

  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [barber, setBarber] = useState("")
  const [schedule, setSchedule] = useState([])

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
        height: "100vh",
      }}>
        <form
        onSubmit={(ev)=>{
          ev.preventDefault()
          if (!name || !date || !barber || !time) {
            alert("Agendamento Inválido")
          } else {
            const info = {
              name,
              date, 
              time,
              barber
            }
            setSchedule(()=> [...schedule, info])
            setName("")
            setDate("")
            setBarber("")
            setTime("")
          }
        }}
        style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        alignItems: "center"
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
            defaultValue="selected">...
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
          style={{
            width: "120px",
            padding: "4px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer"
          }}
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
          gap: "12px",
          justifyContent: "center"
        }}>
          {schedule.map((item, i)=>{
            return(
              <div
              style={{
                height: "120px",
                backgroundColor: "#D9D9D9",
                padding: "8px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
              }} 
              key={i}>
                <ul style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px"
                }}>
                  <li style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}>
                    <img src={imgClient} alt="imgClient" />
                    {item.name}
                  </li>
                  <li style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}>
                    <img src={imgCut} alt="imgCut" />
                    {item.barber}
                  </li>
                  <li style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}>
                    <img style={{width: "14px0", height: "13px"}} src={imgCalendar} alt="imgCalendar" />
                    {item.date}
                    </li>
                  <li style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}>
                    <img src={imgTime} alt="imgTime"/>
                    {item.time}
                    </li>
                </ul>
              </div>
            )
            })}
        </div>
      </div>
    </>
  )
}

//Aplicar expressão regular nos inputs de time e data. Estilizar os inputs. Refatorar