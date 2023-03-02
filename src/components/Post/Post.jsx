import {Image} from "react-bootstrap";

const Post = ({post}) => {
    return (
        <div>
            <h1 className={'mb-4'}>{post.title}</h1>

            <Image fluid={true} className={'mb-3'} src={post.imgUrl} />

            <p>{post.text}</p>

            <p><strong>Автор - {post.author}</strong></p>
        </div>
    );
}

export default Post;