import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ToastSuccess= (message)=> {
    return (
        toast.success(message, {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    )
}

export const ToastWarning= (message)=> {
    return (
        toast.warning(message, {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    )
}

export const ToastDanger= (message)=> {
    return (
        toast.error(message, {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    )
}