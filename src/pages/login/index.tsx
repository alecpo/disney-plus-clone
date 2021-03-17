import React from 'react';
import { useForm } from 'react-hook-form';
import DisneyPlusLogo from '../../assets/img/disneypluslogowhite.svg';
import { Logo, LoginMain, Link, Join } from '../../styles/pages/Login';
import {
    Container,
    EmailInput,
    SubmitButton,
    Form,
} from '../../styles/pages/Login';

type LoginForm = {
    email: string;
};

export default function Login() {
    const { register, handleSubmit, watch, errors } = useForm<LoginForm>();
    const onSubmit = (data: LoginForm) => console.log(data);
    return (
        <Container>
            <title>Entre</title>
            <header>
                <Logo src={DisneyPlusLogo} alt="Disney+ logo" />
            </header>
            <LoginMain>
                <h2 className="label">Use o seu e-mail para entrar</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <EmailInput
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        ref={register}
                    />
                    {errors.email && <span>This field is required</span>}
                    <SubmitButton type="submit">continuar</SubmitButton>
                </Form>
                <Join>
                    <div>Não tem Disney+?</div>
                    <Link>Assine</Link>
                </Join>
            </LoginMain>
        </Container>
    );
}
