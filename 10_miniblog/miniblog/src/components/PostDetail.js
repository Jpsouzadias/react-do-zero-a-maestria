import styles from './PostDetail.module.css';

import {Link} from 'react-router-dom';

const PostDetail = ({post}) => {
  return (
    <div>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.createdBy}</p>
        <div>
            {post.tagsArray.maps((tag) => {
                <p key={tag}>
                    <span>#</span>
                    {tag}
                </p>
            })};
        </div>
        <Link to={`/post/${post.id}`} className='btn btn-outline'>
            ler
        </Link>
    </div>
  )
}

export default PostDetail;