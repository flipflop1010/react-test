import React, { useEffect } from 'react'

const DropdownChecked = () => {

    const [options,setOptions]=React.useState()
    const [value,setValue]=React.useState()
    const selectRef=React.useRef()

    useEffect(()=>{
        setTimeout(() => {
            setOptions([1,2,3,4,5])
        }, 3000);
    },[])

    const onSelectChange=(event)=>{
       setValue(event.target.value)
    }

  return (
    <div>
        <select name="" id="" value={value} onChange={onSelectChange}>
            <option value="">--select--</option>
            {options && options.map(opt=>(<option key={opt}>{opt}</option>))}
        </select>
    </div>
  )
}

export default DropdownChecked