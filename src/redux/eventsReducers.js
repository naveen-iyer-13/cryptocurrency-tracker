const updatingData = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA':
      return (
        action.details
      )
    default:
      return state
  }
}

export default updatingData
