
import "./CampoTexto.css"

const CampoTexto=(props)=>{
    
    //are bring of formulario 
    const placeholderModificado= `${props.placeholder}...`
    //destructuracion
    const {type="text"}=props

    const driveChange = (e)=>{
        props.setvalor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.title.toUpperCase()}</label>
        <input placeholder={placeholderModificado} 
        required={props.required}
        value={props.valor}
        onChange={driveChange}
        type={type}
        />
    </div>
}

export default CampoTexto