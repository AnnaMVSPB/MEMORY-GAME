import Scroll from "../ Scroll";


const initialState = {
  Scroll,
  arr: [],

}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DOWNLOAD_PAGE':
      const arr = [...Scroll]
      let j, temp;
      for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
      return {
        ...state,
        Scroll: arr

      };
    case 'CHANGE_STATUS':
      let arrScroll
      let arrScroll2
      const copyScroll = [...state.Scroll]
      copyScroll.forEach(el => {
        if (el.id === action.payload) {
          el.st = true
        }
      })
      state.arr.push(action.payload)
      if (state.arr.length === 2) {
        arrScroll = copyScroll.filter(el => el.st === true && el.st2 === true)
        if (arrScroll[0].name === arrScroll[1].name) {
          copyScroll.map(el => {
            if (el.id === arrScroll[0].id || el.id === arrScroll[1].id) {
              el.st2 = false
              state.arr = []
            }

          })
          // } else {
          //   
          // }
        }
      }
      if (state.arr.length === 3) {
        let copyCopy=[...state.arr]
        let copyArr = copyCopy.slice(0, 2)
        console.log('copy',copyArr)
        arrScroll2 = copyScroll.filter(el => el.id === copyArr[0] || el.id === copyArr[1]
        )
        console.log(arrScroll2)
        copyScroll.map(el => {
              if (el.id === arrScroll2[0].id || el.id === arrScroll2[1].id) {
                el.st = false
                state.arr = copyCopy.slice(2)

                console.log('конец', state.arr)
              }
            })
      }

      return {
        ...state,
        Scroll: copyScroll
      };
    // case 'COMPARISON_OF_SQUARES':


    default:
      return state;
  }
}

export default reducer;
