import React, { useCallback } from 'react'

function SaveDismissButtons({props}) {

  const {state,setState} = props;
  const saveChanges = useCallback(() => {
    console.log(state)

    setState({ type: "list-view", id: state.id });
  });

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "200px",
      marginTop: "30px",
    }}
  >
    <button>Dismiss</button>
    <div
      onClick={() => {
        saveChanges();
      }}
    >
      Save
    </div>
  </div>
  )
}

export default SaveDismissButtons