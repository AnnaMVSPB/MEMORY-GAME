import Scroll from "../ Scroll";


const initialState = {
  Scroll,
  arr: [],
  cards: [],
  counter:0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHOICE_QUANTITY':
      let copyScrollNumberc = [...Scroll]
      const arrCopyScrollNumberc = copyScrollNumberc.slice(-action.payload / 2)
      return {
        ...state,
        cards: arrCopyScrollNumberc
      }
    case 'DOWNLOAD_PAGE':
      const arr = [...state.cards]
      let j, temp;
      let num = 0
      let cardArr = []
      arr.forEach((el, i) => {
        num += 1
        cardArr.push({
          id: num,
          img: el,
          name: i,
          st: false,
          st2: true,
        })
        num += 1
        cardArr.push({
          id: num,
          img: el,
          name: i,
          st: false,
          st2: true,
        })
      })
      for (let i = cardArr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = cardArr[j]
        cardArr[j] = cardArr[i]
        cardArr[i] = temp
      }
      return {
        ...state,
        cards: cardArr
      };
    case 'CHANGE_STATUS':
      let arrScroll
      let arrScroll2
      
      const copyScroll = [...state.cards]
      copyScroll.forEach(el => {
        if (el.id === action.payload.id) {
          el.st = true
        state.counter +=1
        }
      })
      state.arr.push(action.payload)
      if (state.arr.length === 2) {
        arrScroll = [...state.arr]
        if (arrScroll[0].name === arrScroll[1].name) {
          copyScroll.forEach(el => {
            if (el.id === arrScroll[0].id || el.id === arrScroll[1].id) {
              el.st2 = false
              state.arr = []
            }
          })
        }
      }
      if (state.arr.length === 3) {
        let copyCopy = [...state.arr]
        let copyArr = copyCopy.slice(0, 2)
        arrScroll2 = copyScroll.filter(el => el.id === copyArr[0].id || el.id === copyArr[1].id
        )
        copyScroll.forEach(el => {
          if (el.id === arrScroll2[0].id || el.id === arrScroll2[1].id) {
            el.st = false
            state.arr = copyCopy.slice(2)
          }
        })
      }
      return {
        ...state,
        cards: copyScroll,
      };
    default:
      return state;
  }
}

export default reducer;
