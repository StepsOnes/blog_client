import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {$axios} from "../../http/api.js";
import {useNavigate} from "react-router-dom";


const PostCreate = (props) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [img, setImg] = useState('')
    const navigate = useNavigate()


    const createPost = async (event) => {
        event.preventDefault()

        try {
            const { data } = await $axios.post('/post/add', {
                title,
                text,
                imgUrl: img
            })

            alert(data.message)

            navigate('/')

        } catch (err) {
            const { response: {data: {message}} } = await err
            alert(JSON.stringify(message))
        }
    }

    return (
        <div>
            <h1 className={'mb-3'}>Создать Статью</h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Название</Form.Label>
                    <Form.Control type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Текст</Form.Label>
                    <Form.Control as="textarea" rows={3} value={text} onChange={(event) => setText(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Картинка</Form.Label>
                    <Form.Control type="text" value={img} onChange={(event) => setImg(event.target.value)} />
                </Form.Group>
                <Button onClick={createPost} variant="primary"  type="submit">
                    Отправить
                </Button>
            </Form>
        </div>
    );
}

export default PostCreate;