import Container from 'react-bootstrap/Container';
import NavBarTop from "../NavBarTop/NavBarTop.jsx";


const Main = (props) => {
    return (
        <Container className={'pt-5'}>
            {props.children}
        </Container>
    );
}

export default Main;