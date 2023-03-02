import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useDispatch, useSelector} from "react-redux";
import {goOut} from "../../store/authSlice.js";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

const NavBarTop = (props) => {
    const { isAuth } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate =  useNavigate();
    const exit = (e) => {
        e.preventDefault()
        dispatch(goOut())
        Cookies.remove('token')

        return navigate('/')
    }

    return (
        <Navbar className={''} bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Test-Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {isAuth ?
                            <>
                                <Nav.Link href="/users">Пользователи</Nav.Link>
                                <Nav.Link href="/post/create">Создать статью</Nav.Link>
                                <Nav.Link href="/post/all">Все Статьи</Nav.Link>
                                <Nav.Link href="/profile">Профиль</Nav.Link>
                                <Nav.Link onClick={exit}>Выйти</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link href="/register">Регистрация</Nav.Link>
                                <Nav.Link href="/login">Авторизация</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarTop;