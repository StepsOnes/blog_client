import {$axios} from "../../http/api.js";
import Cookies from "js-cookie";
import {changeAuth} from "../../store/authSlice.js";
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {Card, Row, Col} from "react-bootstrap";
import './Post.css'

const Posts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const { data } = await $axios.get('/post/get/all')
                setPosts(data.posts)

            } catch (err) {
                const { response: {data: {message}} } = await err
                alert(JSON.stringify(message))
            }
        }

        getPosts()
    }, []);




    return (
        <div>
            <h1 className={'mb-3'}>Все статьи</h1>

            <Row className={'gap-4'}>
                {posts.length && (posts.map(post => {
                    return (
                        <Col className={'col-3'} key={post._id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img style={{ height: '200px' }} variant="top" src={post.imgUrl} />
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text className={'post-text__card'}>
                                        {post.text}
                                    </Card.Text>
                                    <Button href={`/post/${post._id}`} variant="primary">Перейти</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }))}
            </Row>
        </div>
    );
}

export default Posts;