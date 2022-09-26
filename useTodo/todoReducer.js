export const todoReducer = (initialState, action = {}) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...initialState, action.value];

    case "DELETE_TODO":
      const idToDelete = action.value.id;
      return initialState.filter((todo) => todo.id !== idToDelete);

    case "TOGGLE_TODO":
      const idToToggle = action.value.id;
      return initialState.map((todo) => {
        if (todo.id === idToToggle) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
