import axios from 'axios'
export const getDetails = (details) => {
  return {
    type: 'GET_DATA',
    details: details
  }
}

export const getData = () => {
  return (dispatch) =>{
    axios('https://api.coinmarketcap.com/v1/ticker/').then((res) => {
      // console.log(res);
      dispatch(getDetails(res.data))
    })
  }

}

// export const refetchData = () => {
//   return (dispatch) => setInterval(dispatch(getData()), 100)
// }
