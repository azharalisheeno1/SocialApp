import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostlistofContext } from "../Store/Post-List-Store";

export default function Post({singlepost}){

 const {deletepost}= useContext(PostlistofContext)

return(<>
  
  <div className="card" style={{width:"35rem", marginBottom:"20px"}}>
  {/* <img src="..." className="card-img-top" alt="..."> */}
  <div className="card-body ">
    <h5 className="card-title  bg-primary p-2 border rounded text-white">{singlepost.title} 
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletepost(singlepost.id)}>
    <MdDelete /> 
    <span className="visually-hidden">unread messages</span> 
  </span>
    </h5> 
    <div>
    <p className="card-text">{singlepost.body}</p>
    {singlepost.tags.map((tag)=>  <span key={tag} className="badge text-bg-primary m-2">{tag}</span>)}
    </div>
    <div className="alert alert-primary mt-3" role="alert">
    This Post is Reacted By {singlepost.reactions} Peoples
</div>
  </div>
</div>
  </>)
}