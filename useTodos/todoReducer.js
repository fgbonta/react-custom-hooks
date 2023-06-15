export const todoReducer = (initialState = [], action = { type: '' }) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
        //break;
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);
        //break;
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if(todo.id === action.payload){
                    todo.done = !todo.done;
                }
                return todo;
            });
        //break;
        default:
            return initialState;
    }

}