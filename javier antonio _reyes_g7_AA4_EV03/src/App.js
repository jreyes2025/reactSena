
import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/formulario/Formulario';
import Miorg from './components/Miorg/miorg';
import Team from './components/colaborador/colaborador';
import Footer from './components/footer/foore';
import Cards from './components/card/cards';



function App() {
  const [showForm,updateShow]= useState(false)
  const [colaboradores,setColaboradores]=useState([])
  const [teams,setTeams]=useState(  
    //list of teams
  [
    { id:uuid(),
      title:"Programación",
    colorfirsly:"#57C278",
    colorsecondly:"#D9F7E9"
    }
    ,
    {id:uuid(),
      title:"Front End",
    colorfirsly:"#82CFFA",
    colorsecondly:"#E8F8FF"},

    {id:uuid(),title:"Data Science",
    colorfirsly:"#A6D157",
    colorsecondly:"#F0F8E2"},

    {id:uuid(),title:"Devops",
    colorfirsly:"#E06B69",
    colorsecondly:"#FDE7E8"},

    {id:uuid(),title:"UX y Diseño",
    colorfirsly:"#DB6EBF",
    colorsecondly:"#FAE9F5"}

    ,{id:uuid(),title:"Móvil",
    colorfirsly:"#FFBA05",
    colorsecondly:"#FFF5D9"}

    ,{id:uuid(),title:"Innovación y Gestión",
    colorfirsly:"#FF8A29",
    colorsecondly:"#FFEEDF"}
])
  //ternario --> condicion ? SeMuestra : noSemuestra

  const changeShow = ()=>{
    updateShow(!showForm)
  }

 //sing up colaborador
 const singupColaborador =(cards)=>{
 
  //spread operator
  setColaboradores([...colaboradores, cards]) }

  //delete colaborador
  const deleteColaborador=(id)=>{
    console.log("delete", id);
    const nuevosColaboradores=colaboradores.filter((cards)=>cards.id !== id);
    setColaboradores(nuevosColaboradores);
  }

  //create team
  const createTeam=(newTeam)=>{
    setTeams([...teams,{...newTeam,id: uuid()}])
  }
  //like
  /*const like=()=>{
    console.log(like);
    const newLike=colaboradores.map((cards)=>{
      if (cards.id === id) {
        cards.fav = !cards.fav
      }
      return cards
    })
  }*/


  //colorteam
  const setcolor=(color,id)=>{
    const setTeam=teams.map((team)=>{
      if(team.id === id){
        team.colorfirsly = color
      }
      return team
    })
    setTeams(setTeam)
  }




  return (
    <div >
      <Header/>
      {/*showForm === true ? <Formulario teams={teams.map((team)=>team.title)}
      singupColaborador={singupColaborador}
  :<></>*/}

      { showForm && <Formulario teams={teams.map((team)=>team.title)}
      singupColaborador={singupColaborador} createTeam={createTeam}
      /> }
      
      <Miorg changeShow={changeShow} />
      {
        teams.map((team)=>{
          return <Team datos={team} key={team.title} 
          colaboradores={colaboradores.filter(cards => cards.team === team.title)}
          dteCoolaborador={deleteColaborador}
          setc={setcolor} //like={like}
          />
        })
      }
      <Footer/>
      
    </div>
  );
}

export default App;
