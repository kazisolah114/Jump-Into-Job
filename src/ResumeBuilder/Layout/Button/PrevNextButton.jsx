import React from 'react'

function PrevNextButton({props}) {
    const {setCurrentStep}= props;
  return (
    <div className="resume-prev-next-buttons">
    <button className='prev-button' onClick={() => setCurrentStep(currentStep => currentStep - 1)}>Previous</button>
    <button className='next-button' onClick={() => setCurrentStep(currentStep => currentStep + 1)}>Next</button>
</div>
  )
}

export default PrevNextButton