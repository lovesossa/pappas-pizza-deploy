const initialState = {
    snackItems: [],
    isLoaded: false,
  };
  
  const snacks = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SNACKS':
        return {
          ...state,
          snackItems: action.payload,
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
  
  export default snacks;
  