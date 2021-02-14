import {Jumbotron} from "reactstrap";
import SignUp from "../SignUpComponent/SignUp";
import SignIn from "../SignInComponent/SignInComponent";
import CardForm from '../CardFormComponent/CardForm'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "../HomeCopmonent/HomeCopmonent";
import CancelButton from "../ButtonComponent/CancelButton";
import {logout, isLogin} from "../../Server/Auth";
import {useHistory} from "react-router";
import styles from './main.module.css'
import Header from "../HeaderComponent/NavbarComponent";
function PrivateRoute ({component: Component, authed, ...rest}) {

    return (
        <Route
            {...rest}
            render={(props) => isLogin()
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}



const Main = ()=> {


    const SignInForm = ()=>{
        return(
            <div>
                <Jumbotron className={styles.jumbotron} >
                    <h2>Sign In</h2>
                </Jumbotron>
                    <div className="container  align-items-center">
                        <CardForm
                            message="Sign In"
                            component={<SignIn/>}
                        />
                     </div>
            </div>
            )
    }

    const SignUpForm = ()=>{
        return(
            <div>
                <Jumbotron className={styles.jumbotron} >
                    <h2>Sign Up</h2>
                </Jumbotron>
                <div className="container  align-items-center">
                    <CardForm
                        message="Sign Up"
                        component={<SignUp />}
                    />
                </div>
            </div>
        )
    }
    const HomePage = ()=> {
        return (
            <div>
               <Header  />
                <Jumbotron className={styles.jumbotron}>
                    <h2>Home</h2>

                </Jumbotron>
                <div className="container  align-items-center">
                    <Home />
                </div>
             </div>
        )
    }

    return (
        <div>
            <main >

                <Switch >
                    <Route  path='/login' component={SignInForm}/>
                    <Route path='/signup' component={SignUpForm}/>
                    <PrivateRoute exact path='/' component={HomePage} />

                </Switch>
            </main>
        </div>
    )
}

export default Main;
