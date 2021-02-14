import {inputContent} from "../../shared/inputContent";
import {Col, Label, Row} from "reactstrap";
import {Input} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import ConfirmedButton from "../ButtonComponent/ConfirmButton";
import { postSignUp} from "../../Server/Auth";
import {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {ToastSuccess, ToastDanger} from "../Toastmessage/ToastMessage";
import {ToastContainer} from "react-toastify";
import {useHistory} from "react-router";

const SignupSchema = yup.object().shape({
    firstname: yup.string().required().min(2, ' most be more 2 character'),
    lastname: yup.string().required().min(2),
    email: yup.string().required(),
    password: yup.string().required().min(6).max(12),
});
const SignUp = () => {
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const history = useHistory();

    const onSubmit = (data) => {
        const user = {
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.email,
            email: data.email,
            password: data.password
        }
        const body = JSON.stringify(user);

        postSignUp(body)
            .then(res => {
                    res.json();
                    if (res.status === 200) {
                        ToastSuccess("User register successfully!")
                        setTimeout(()=> {
                            history.push('/login')
                        }, 4000)

                       // resetForm();
                    } else if (res.status === 500) {
                        ToastDanger("A user with the given username is already registered")
                    }
                }
            ).catch(err => ToastDanger(err))

        buttonDisable();
    };

/*    const resetForm = () => {
        setTimeout(() => {
            window.location.reload();
        }, 3000)

    }*/
    const [disableButton, setButtonDisable] = useState(false);
    const buttonDisable = () => {
        setButtonDisable(true);
        setTimeout(() => {
            setButtonDisable(false)
        }, 4000);


    }
    return (
        <div className="container">

            <div className="col-12 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {inputContent.SIgnUpInput.map((input, key) => {
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
                                    {errors[input.name] && <span>{errors[input.name]?.message}</span>}
                                </Col>
                            </Row>
                        )
                    })
                    }
                    <Row>
                        <Col md={{size: 7, offset: 4}}>
                            <ConfirmedButton
                                disabled={disableButton}
                                type="submit"
                            > Sign up</ConfirmedButton>
                        </Col>

                    </Row>
                </form>
                <Row style={{marginTop: 40}}>
                    <Col md={{size: 8}}>
                        <a href="/" to='/'> I already have an account. Sing in</a>
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

export default SignUp;