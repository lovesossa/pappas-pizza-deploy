const initialState = {
    desertItems: [],
    isLoaded: false,
  };
  
  const deserts = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DESERTS':
        return {
          ...state,
          desertItems: action.payload,
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
  
  export default deserts;