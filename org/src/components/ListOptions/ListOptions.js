import "./ListOptions.css"
//metho map -> arreglo.map((team, index)=>{return <option></option>})
const ListOptions = (props)=>{


    const manejarCambio = (e)=>{
        props.setTeams(e.target.value)

    }

    return <div className="List-options">
        <label>Teams</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Select teams</option>
            {props.teams.map((team, index)=>{
                return <option key={index} value={team}>{team}</option>
            })}



        </select>
    </div>
}


export default ListOptions