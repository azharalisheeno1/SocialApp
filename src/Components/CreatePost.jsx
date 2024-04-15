// import { useContext, useRef } from 'react'
import styles from './CreatePost.module.css'
// import { PostlistofContext } from '../Store/Post-List-Store';
import { Form, redirect } from 'react-router-dom';
function CreatePost(){

// const {addPost}= useContext(PostlistofContext)


return(<>
  
  <Form method='POST' className={styles.createpost} >

  <div className="mb-2">
    <label htmlFor="userID" className="form-label fs-5 ">UserID</label>
    <input type="text" name="userId" className="form-control" placeholder='Enter Your UserID' id="userID" />
  </div>


  <div className="mb-2">
    <label htmlFor="Heading" className="form-label fs-5" >Post Title</label>
    <input type="text" name="title" className="form-control "  placeholder='Enter Post Title' id="Heading" />
  </div>
 
  <div className="mb-2">
    <label htmlFor="body"  className="form-label fs-5 ">Post Content</label> <br />
    <input type="text" style={{width:"780px",padding:"10px"}} placeholder='Enter Your Content Here' name="body"  id="" />
 
  </div>
 
 
  <div className="mb-2">
    <label htmlFor="reactions" className="form-label fs-5 ">Number Of Reactions</label>
    <input type="number"  name="reactions" placeholder='How Many People Reacted To This Post..' className="form-control " id="reactions" />
  </div>
 
  <div className="mb-2">
    <label htmlFor="tags" className="form-label fs-5 ">Enter Your Hashtags</label>
    <input type="text" placeholder='Enter Hashtags' name="tags" className="form-control " id="tags" />
  </div>
 
  <button type="submit" className="btn btn-primary btn-lg w-50 mt-3">Post</button>

</Form>
  </>)
}


// Asyn Funtion
export async function CreatepostAction(data){
  // Async Method is Being Used Here
const formData= await data.request.formData();
const postData=Object.fromEntries(formData);
postData.tags=postData.tags.split(" ");
console.log(postData);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then((post)=> console.log( post));
 
  return redirect("/");
  
}


export default CreatePost;