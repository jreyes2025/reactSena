import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListOptions from "../ListOptions/ListOptions"
import Btn from "../boton/Btn"
import { useState } from "react"

const Formulario= (props)=>{
    const [Names,UpdateNames]=useState("")
    const [puesto,Updatepuesto]=useState("")
    const [foto,Updatefoto]=useState("")
    const [team,setTeams]=useState("")
    const [fav,setfav]=useState("")

    const [title,setTitulo]=useState("")
    const [color,setColor]=useState("")

    const {singupColaborador,createTeam}= props

    const drivesend=(event)=>{
        event.preventDefault()
        var dateSend={
            Names: Names,
            puesto: puesto,
            foto: foto,
            team,
            fav


        }
        singupColaborador(dateSend);

    }
    const driveTeam=(e)=>{
        e.preventDefault()
        createTeam({title,colorfirsly:color})
    }

    return <section className="Formulario">
        <form onSubmit={drivesend}>
            <h2>Rellena el formulario para crear el colaborador. </h2>
            <CampoTexto title="Name" placeholder="write name" required={true} valor={Names} setvalor={UpdateNames}/>
            <CampoTexto title ="Puesto" placeholder="write puesto" required valor={puesto} setvalor={Updatepuesto}/>
            <CampoTexto title ="Fotos" placeholder="write link" required valor={foto} setvalor={Updatefoto}/>
            <ListOptions valor={team} setTeams={setTeams} teams={props.teams}/>
            <Btn text="Crear" />
        </form>
        <form onSubmit={driveTeam}>
            <h2>Rellena el formulario para crear el team. </h2>
            <CampoTexto title="titulo" placeholder="write titulo" required={true} valor={title} setvalor={setTitulo}/>
            <CampoTexto title ="color" placeholder="write color hex" required valor={color} setvalor={setColor} type="color"/>
            <Btn text="Register" />
        </form>
    </section>
}

export default Formulario
