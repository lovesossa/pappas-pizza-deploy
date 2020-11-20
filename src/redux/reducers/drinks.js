const initialState = {
    drinkItems: [],
    isLoaded: false,
  };
  
  const drinks = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DRINKS':
        return {
          ...state,
          drinkItems: action.payload,
          isLoaded: true,
        };
  
      case 'SET_LOADED':
        return {
          ...state,
          isLoaded: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default drinks;