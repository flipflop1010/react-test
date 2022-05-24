import { data } from 'jquery'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NumberAction from '../../redux/number_object/NumberAction'

const CrudWithUseEffect = () => {

    const state_number = useSelector(state => state.state_number)
    const dispatch=useDispatch()
    const inpRef = React.useRef()
    const inpRef2 = React.useRef()

    console.log(state_number);

    const onAdd = (event) => {
       

        dispatch(NumberAction.add(inpRef2.current.value))
        inpRef.current.value = ''
        inpRef2.current.value = ''
    }
    const onUpdate = (event) => { 
        
        dispatch(NumberAction.update(inpRef.current.value,inpRef2.current.value))
        inpRef.current.value = ''
        inpRef2.current.value = ''
    }
    const onDelete = (event) => {
        dispatch(NumberAction.update(inpRef.current.value))
        inpRef.current.value = ''
        inpRef2.current.value = ''
     }

    return (
        <div>

            <div>
                <input ref={inpRef} type="text" placeholder="id (for update,delete)" />
                <input ref={inpRef2} type="text" placeholder="value" />
            </div>
            <div>

                <button onClick={onAdd}>add</button>
                <button onClick={onUpdate}>update</button>
                <button onClick={onDelete}>delete</button>
            </div>

            <div style={{ margin: "auto", marginTop: "30px", border: "1px solid black", width: "200px" }}>
                <ul>

                    {state_number.number.map((n,index) => (
                        <li>{JSON.stringify(n)}</li>
                ))}
                </ul>
            </div>

        </div>
    )
}

export default CrudWithUseEffect