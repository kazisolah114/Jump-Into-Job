import React from 'react'
import { FaPlus } from 'react-icons/fa6'

function AddMoreButton({children,handleAddMore}) {

  return (
    
    <div className="add-more-education">
    <button
      onClick={() => handleAddMore()}
      style={{
        cursor: "pointer" ,
        opacity: 1 
      }}
    >
      <FaPlus /> {children}
    </button>
  </div>
  )
}

export default AddMoreButton