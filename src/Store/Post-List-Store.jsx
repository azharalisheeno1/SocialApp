import {createContext, useReducer,useState,useEffect} from "react";

export const PostlistofContext= createContext({
  //  these Are Called API Desiging Or Contract Designing.
  postlistofreducer:[],
    addPost:()=>{}, 
    // fatchdata:false,
   deletepost:()=>{}
  });

const PostListReducer=(currPostList,action)=>{
  let newPOstListFromReducerfun=currPostList;
  if(action.type==="DELETE_POST"){
    newPOstListFromReducerfun=currPostList.filter(post=>post.id !==action.payload.postID); 
  } 
  
  else  if(action.type==="ADD_INITIAL_POST"){
    newPOstListFromReducerfun=  action.payload.posts;
  } 
  
  else  if(action.type==="ADD_POST"){
    newPOstListFromReducerfun=[action.payload,...currPostList]
  }
  
  return newPOstListFromReducerfun;
}

const PostListProvider=({children})=>{
  const [postlistofreducer,dispatchpostlistB]=useReducer(PostListReducer,[]);
  // const [fatchdata,setFatchdata]=useState(false);
 

    const addPost=(post)=>{
      dispatchpostlistB({
        type:"ADD_POST",
        payload:post  }) };


    // const addInitialPosts=(posts)=>{
    //   dispatchpostlistB({
    //     type:"ADD_INITIAL_POST",
    //     payload:{
    //     posts
    //     },  }) };






    const deletepost=(postID)=>{
      dispatchpostlistB({
        type: 'DELETE_POST',
        payload:{
          postID
        }
      })

    }


 return  <PostlistofContext.Provider value={{postlistofreducer,addPost,deletepost}}>{children} </PostlistofContext.Provider>;
}

export default PostListProvider;

