import { useState } from 'react';
import './style.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';


const Login = ()=>{

    const {  login } = useContext(AuthContext);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
    e.preventDefault();
    console.log('submit', {email, password});
    login(email, password);
    }

  return (
    <div className="App">
        <form className='formLogin' onSubmit={handleSubmit}>
            <label>tela de login</label>
                <p id='msg'></p>
                <input type="email" name="email" id="email"  placeholder='Digite seu email' onChange={(event)=>{
                    setEmail(event.target.value);
                }}/>
                <input type="password" name="password" id="password"  placeholder='Digite sua senha'  onChange={(event)=>{
                    setPassword(event.target.value);
                }}/>
            <button type="submit">Entrar</button>
        </form>
    </div>
  );
}
export default Login;
