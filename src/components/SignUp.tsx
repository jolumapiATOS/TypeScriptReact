import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Redux/store'
import { signUp } from '../Redux/features/signUpSlice'

const SignUp = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector((state: RootState) => state.signUp.value )
    const dispatch = useDispatch();

    const handleSubmit = () => {
         fetch('https://node-server-for-upgrade.herokuapp.com/user/new', {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({ name, password })
         }).then((res)=>{
            if(res.ok) {
                alert("Succesfully created");
                return res.json()
            } else {
                alert("Not working")
            }
         }).then((data)=>{
               dispatch( signUp("Authenticated") )
               localStorage.setItem("Auth", data.jwt);
         })
    }

    return ( 
        <div className="container-sign-up">
            <input value={name} onChange={ (e) => { setName(e.target.value) } } type="name" />
            <input value={password} onChange={ (e) => { setPassword(e.target.value) } } type="password" />
            <button className="btn btn-primary" onClick={ handleSubmit }  >Submit</button>
        </div>
     );
}
 
export default SignUp;