import React,{useState} from 'react'

const LoginForm = () => {
    const [credentials, setCredentials] = useState({});
    
    
    const handleFormValue= ({target:{name,value}}) => {setCredentials({...credentials, [key]:value})
        //console.log(e.target.value);
    }
  return (
    <div>
        LoginForm
        <div>
            <input type="text" name="user" value={credentials.user}onChange={handleFormValue}></input>
            <input type="text" name= "password" value={credentials.password} onChange={handleFormValue}></input>
            <button onClick={() => submitForm()}>Login</button>
        </div>
    </div>
  )
}

export default LoginForm