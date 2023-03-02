import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {$axios} from "../../http/api.js";
import Post from "../../components/Post/Post.jsx";
import data from "bootstrap/js/src/dom/data.js";

const PostPage = (props) => {
    const { id } = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        const getPost = async () => {
            const { data } = await $axios.get(`/post//get/one/${id}`)
            setPost(data.post)
            console.log(data.post)
        }

        getPost()
        console.log(id)
    }, []);


    return (
        <Post post={post} />
    );
}

export default PostPage;