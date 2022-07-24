import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../store/postSlice";



const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state=>state);
    useEffect(() => {
        dispatch(getPost());
    
    }, [dispatch]);

    useEffect(() => {
        console.log(posts)
      }
    , [posts])
    
   
  
    return (
        <div>
            <h1>Posts</h1>

        </div>
    );
};

export default Posts;