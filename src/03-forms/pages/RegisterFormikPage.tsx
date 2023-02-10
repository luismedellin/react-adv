import { Form, Formik } from 'formik';
import { FormEvent } from 'react';
import { MyTextInput } from '../components';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={ Yup.object({
                    name: Yup.string()
                        .required('Enter a name').min(2, 'Ingrese dos caracteres').max(15, 'solo 15 caracteres'),
                    email: Yup.string()
                        .required('Enter a email').email('Formato de correo invalido'),
                    password1: Yup.string()
                        .required('Enter a password1').min(6, 'Ingrese mínimo 6 caracteres'),
                    password2: Yup.string()
                        .required('Enter a password2').min(6, 'Ingrese mínimo 6 caracteres')
                        .oneOf([ Yup.ref('password1') ], 'Contraseñas deberían coincidir')
                }) }
            >
                { ({handleReset}) => (
                    <Form>
                        <MyTextInput 
                            label="Nombre"
                            name="name"
                            placeholder="Luis"
                        />

                        <MyTextInput 
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="luis@gmail.com"
                        />

                        <MyTextInput 
                            label="Password"
                            name="password1"
                            type="password"
                        />

                        <MyTextInput 
                            label="Repeat Password"
                            name="password2"
                            type="password"
                        />

                        <button type="submit">Guardar</button>
                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
