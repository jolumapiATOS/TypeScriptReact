import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Redux/store'
import { useEffect } from 'react';
import { signUp } from '../Redux/features/signUpSlice';


const Navbar:any = (props: any) => {

    const dispatch = useDispatch();
    
    useEffect(()=> {
        const token = localStorage.getItem('Auth');
         if(token){
            dispatch(signUp("Authenticated"))
         } else {
            dispatch(signUp("Not Auth"))
         }
    })
    const user = useSelector( (state: RootState) => { return state.signUp.value  } )
    
    return ( 
        <nav id="navbar-for-real" className="navbar navbar-expand-lg navbar-dark">
            <div  id="navbar-for-real" className="container-fluid">
                <p data-testid="testing-navbar" className="paragraph"> { props.online } | { user } </p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  mx-5" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link-for-navbar" to="/posts"> posts </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link-for-navbar" to="/entry"> new entry </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link-for-navbar" to="/entries"> entries </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link-for-navbar" to="/SignUp"> Sign Up </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;