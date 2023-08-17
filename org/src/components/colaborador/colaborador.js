import "./colaborador.css"
import Cards from "../card/cards"
import hexToRgba from "hex-to-rgba"


const Team=(props)=>{
    //destructuracion 
    const {title,colorfirsly,id}=props.datos
    const {colaboradores,dteCoolaborador, setc,like}=props

    const obj= {backgroundColor: hexToRgba(colorfirsly, 0.6)}

    return <section className="equipo" style={obj}>
        <input 
            type="color"
            className="clor"
            value={colorfirsly}
            onChange={(event)=>{ setc(event.target.value,id)}}

        />
        <h3 style={{borderColor:hexToRgba(colorfirsly, 0.6)}} >{title}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((cards,index)=><Cards datos={cards} key={index} colorfirsly={colorfirsly}
                dteCoolaborador={dteCoolaborador} like={like}/> )
            }
        </div>
    </section>
}

export default Team;