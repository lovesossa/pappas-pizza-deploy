const initialState = {
    offersItems: [],
  };
  
const offers = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_OFFERS':
        return {
          ...state,
          offersItems: action.payload,
        }
        
      default:
        return state;
    }
  };

  export default offers;