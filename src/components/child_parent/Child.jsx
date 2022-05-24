import React from 'react'

const Child = ({handleParent}) => {
  return (
    <div>
        <div>Child</div>
        <button onClick={(event)=>{handleParent(event)}}>child btn</button>

        <div>
          <select onChange={handleParent} name="" id="">
            <option value="">select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        </div>
  )
}

export default Child