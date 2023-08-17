import "./miorg.css"


const Miorg = (props)=>{
    // estado- hooks
    //useState
    //useState()
    // const [namevariable, funtionupdate]= useState(ValorInitial)
    //const [name, changename ]=useState(true)
    //const driveClick=()=>{
       // console.log("show event");
       // changename(!name)
    //}


    return <section className="orgSection">
        <h3 className="title"> Mi organización</h3>
        <img src="/img/add.png" alt="add.png" onClick={props.changeShow}/>
    </section>
}

export default Miorg;