const initialState = {
    sauseItems: [],
  };
  
const addsause = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SAUSE':
        return {
          ...state,
          sauseItems: action.payload,
        }
        
      default:
        return state;
    }
  };

  export default addsause;