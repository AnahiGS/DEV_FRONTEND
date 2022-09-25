import React from 'react';


class ComponenteClase extends React.Component {
    state = {
        name: "Anahi",
        rol: "",
        age: 23,
    }
    handleClick =(event) =>{
        this.setState({
            ...this.setState,
            age: this.state.age+1||0,
        })
    }
    renderJsx =() =>{
        return (
            <div>
                <h3>Hola desde un función</h3>
            </div>
        )
    }
    handlerChange =(event) =>{
        this.setState({
            ...this.state,
            rol: event.target.value
        })
    }
    render( ){
        return (
            <div className="app">
                <h2>Esto es un componente de clase</h2>
                <h3>{this.state.name}</h3>
                <p>Rol:<span>{this.state.rol}</span></p>
                <span>Age: {this.state.age}</span>
                <button onClick={this.handleClick}>Aumentar</button>
                <button onClick={()=>{
                    this.setState({
                        ...this.setState,
                        age: this.state.age-1||0,
                    })
                }}>Disminuir</button>
                {
                this.renderJsx()
                }
                <div>
                    <input type="text" placeholder="Escribe algo" onChange={this.handlerChange}/>
                    <p>{this.state.rol}</p>
                </div>
            </div>
        )
    }
}

export default ComponenteClase