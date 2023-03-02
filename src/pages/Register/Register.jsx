import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Auth from "../../services/auth.services.js";
import {useEffect, useState} from "react";
import {$axios} from "../../http/api.js";
import { useNavigate } from "react-router-dom";
import {changeAuth} from "../../store/authSlice.js";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
const Register = (props) => {
    const { isAuth } = useSelector(state => state.auth)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth]);


    const register = async (event) => {
        event.preventDefault()
        // await Auth.main(name, password, '/register')

        try {
            const { data } = await $axios.post('/auth/register', {
                username: name,
                password: password
            })

            Cookies.set('token', data.token, {expires: 10})
            dispatch(changeAuth(true))
            alert('Вы Зарегистрированы')
        } catch (err) {
            const { response: {data: {message}} } = await err
            alert(JSON.stringify(message))
        }
    }

    return (
        <div>
            <h1>Регистрация</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Никнейм</Form.Label>
                    <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                <Button onClick={register} variant="primary"  type="submit">
                    Отправить
                </Button>
            </Form>
        </div>
    );
}

export default Register;