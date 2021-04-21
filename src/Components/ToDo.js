import React ,{useState} from 'react'
import add from '../ACTIONS/add'
import {useSelector,useDispatch} from 'react-redux'

const ToDo = (props) => {
    const [data,setData] = useState('')

    const todolist = useSelector(state=> state.todo)
    const dispatch = useDispatch()
    return (
        <div>
            <ul>
            {
                todolist.map(item=><li>{item}</li>)
            }
            </ul>
            <input type="text" onChange={(e)=>setData(e.target.value)} />
            <button onClick={()=>dispatch(add(data))}>ADD</button>
        </div>
    )
}


export default ToDo
