import { useState } from "react";
import CommonForm from "../common-form/CommonForm";
import { LoginFormData } from "../../../components/formData/formData";

const initialState = {
    email: '',
    password: ''
}

function Login() {
    const [commonState, setCommonState] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted with data:", commonState);
        // setCommonState(initialState); // Reset the form state after submission
    }

    function handleChange(e) {
        const { name, value } = e.target;
        console.log("Input changed:", name, value);
        setCommonState({
            ...commonState,
            [name]: value
        }
        );
    }

    return (
        <div>
            <h1>Login form Component</h1>
            <CommonForm
                handleSubmit={handleSubmit}
                formControlData={LoginFormData.map(field => ({
                    ...field,
                    value: commonState[field.name] || ""
                }))}
                handleChange={handleChange}
            />
        </div>
    )
}

export default Login;