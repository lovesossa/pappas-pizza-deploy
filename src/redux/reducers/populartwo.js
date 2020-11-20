const initialState = {
    popItemsTwo: [],
  };
  
const populartwo = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POPULARTWO':
        return {
          ...state,
          popItemsTwo: action.payload,
        }
        
      default:
        return state;
    }
  };

  export default populartwo;