import React,{useState} from 'react';
// const string="bombon"

const ComponenteFuncion = () => {
    // const [person, setPerson] =useState({
    //     name: "Anahi",
    //     rol: "Frontend",
    //     age: 23,
    // })
    const [age, setAge] = useState(20)

    return(
        <>
        <h2 className=
        "app">Hola desde un componente de funcion nombre: {age}</h2>
        <button onClick={(event)=>{setAge(age+1)}}>Click </button>
        </>
    )
}

export default ComponenteFuncion