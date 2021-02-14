import {inputContent} from "../../shared/inputContent";
import {Col, Label, Row} from "reactstrap";
import {Input} from "@material-ui/core";
import {useForm} from "react-hook-form";
import ConfirmedButton from "../ButtonComponent/ConfirmButton";
import {postSignIn} from "../../Server/Auth";
import {useHistory} from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ToastSuccess, ToastDanger} from "../Toastmessage/ToastMessage";

const SignIn = () => {
    const {register, handleSubmit} = useForm();
    const history= useHistory();

    const onSubmit = (data) => {
        const user = {
            username: data.email,
            password: data.password
        }
        const body = JSON.stringify(user);
        postSignIn(body)

            .then(response => {
                    if (response.ok) {
                        return response;
                    } else {
                        const error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;

                        throw error;

                    }
                },
                error => {
                    ToastDanger(error)
                })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    // If login was successful, set the token in local storage
                    localStorage.setItem('auth', response.token);
                    ToastSuccess("Welcome to my app")
                    setTimeout(()=>{
                        history.push('/')
                    }, 3000)


                } else {
                    const error = new Error('Error ' + response.status);
                    error.response = response;

                    ToastDanger(error)
                }
            })
            .catch(error => ToastDanger("Unauthorized")  )

    };

    return (
        <div className="container">

            <div className="col-12 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {inputContent.signInInput.map((input, key) => {
                        return (
                            <Row key={key} className="form-group">
                                <Label htmlFor={input.title} md={3}>{input.title}</Label>
                                <Col md={8}>
                                    <Input
                                        name={input.name}
                                        className="form-control"
                                        placeholder={input.title}
                                        type={input.type}
                                        inputRef={register}
                                        fullWidth
                                    />
                                </Col>
                            </Row>
                        )
                    })
                    }
                    <Row>
                        <Col md={{size: 7, offset: 4}}>
                            <ConfirmedButton
                                type="submit"
                            > Sign up</ConfirmedButton>
                        </Col>

                    </Row>
                </form>
                <Row style={{marginTop: 40}}>
                    <Col md={{size: 8}}>
                        <a href="/signup"> I don't have an account. Sing up</a>
                    </Col>
                </Row>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}

                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </div>
    )

}

export default SignIn;