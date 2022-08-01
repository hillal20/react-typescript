





export const tasksReducer = (state: {count: number }, action: {type: string})=> {

    switch(action.type){
      case "add count":
      return {count: state.count++};
      default:
      return state;
    }

}