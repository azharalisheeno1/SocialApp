import styles from './PostList.module.css'
// import SpannerLoading from './SpannerLoading'
import Post from "./Post"
// import { useContext } from 'react'
// import {PostlistofContext } from '../Store/Post-List-Store'
import Message from './Message'
import { useLoaderData } from 'react-router-dom'


 function PostList(){
//  const {postlistofreducer}= useContext(PostlistofContext);
 const PostlistLoaderRouter= useLoaderData(Postloader)

return(<>

  <div className={styles.Postlist}>
    {/* {fatchdata && <SpannerLoading></SpannerLoading>} */}
    {  PostlistLoaderRouter.length===0 && <Message ></Message>}
    { PostlistLoaderRouter.map(singlepost=> <Post key={singlepost.id} singlepost={singlepost}/>)}
  

  </div>
  </>)
}

export const Postloader=()=>{
  
    return fetch('https://dummyjson.com/posts')
          .then(res => res.json())
          .then((data)=>{
            return data.posts;

          }); 
}


export default PostList;

