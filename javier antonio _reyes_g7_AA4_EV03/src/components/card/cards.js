import "./cards.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"


const Cards =(props)=>{

    const{Names,puesto,foto,team, id, fav }=props.datos
    const {colorfirsly, dteCoolaborador,like}=props

    return <div className="colaborador" >
        <AiFillCloseCircle className="eliminar" onClick={()=>dteCoolaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorfirsly}}>
            <img src={foto} alt={Names}/>

        </div>
        <div className="info">
            <h4>{Names}</h4>
            <h5>{puesto}</h5>
            {
               // fav ? <AiFillHeart color="red" onClick={()=>like(id)}/> : <AiOutlineHeart onClick={()=>like(id)}/>
            }
            
            

        </div>

    </div>
};

export default Cards;