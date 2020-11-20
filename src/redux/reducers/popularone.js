const initialState = {
    popItemsOne: [],
  };
  
const popularone = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POPULARONE':
        return {
          ...state,
          popItemsOne: action.payload,
        }
        
      default:
        return state;
    }
  };

  export default popularone;