import React,{useState} from 'react'
import './LoginForm.css'

const LoginForm = ({userLogged}) => {
  const [credentials, setCredentials] = useState({}); //user:"", password:"" (primera forma)
  

  const credentialHarcoded = {user:'usuario', password: 'password'}
  
  
  const handleFormValue= ({target:{name,value}}) => {setCredentials({...credentials, [key]:value})
      //console.log(e.target.value);
  }

  const submitForm= ()=>{
    const { user, password} =credentialHarcoded;
    if (credentials.user=== user && credential.password===password){
      userLogged(true)
    }
  }

  return (
    <div>
        LoginForm
        <div className="form">
            <input 
            type="text" 
            name="user" 
            value={credentials.user || ""} //se toma el segundo valor si el primero es null o undefined, (segunda forma)
            onChange={handleFormValue}/>
            <input 
            type="password" 
            name= "password" 
            value={credentials.password || ""} 
            onChange={handleFormValue}/>
            <button onClick={() => submitForm()}>Login</button>
        </div>
    </div>
  )
}

export default LoginForm;