import { useEffect } from 'react';
import {useSelector , useDispatch} from 'react-redux'
import { fetchChatacter } from '../redux/charaterSlicer';


const Cards = ()=>{

    const dispatch = useDispatch();
    const state = useSelector((state)=>state.cahracter)

    useEffect(() => {
      dispatch(fetchChatacter())
    }, [fetchChatacter])

    useEffect(() => {
        console.log(state);
      }, [state])
    
    return(
        <>
            <h1>Hello from cards</h1>
        </>
    )
}

export default Cards;