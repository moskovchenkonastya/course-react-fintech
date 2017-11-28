export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const REORDER_NOTE = 'REORDER_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETE_ALL_NOTES = 'DELETE_ALL_NOTES'

export default (state = [], action) => {
    switch(action.type) {
        
      case ADD_NOTE:
          return [...state, action.note];
        
      case REMOVE_NOTE:
        const i = state.findIndex((cur) => (cur.id === action.id));
        state.splice(i, 1);
        return state;

      case REORDER_NOTE:
        return state.map(cur => {
          if (cur.id === action.fromId) {
            const i = state.findIndex(cur => cur.id === action.toId);
            return state[i];
          }
          if (cur.id === action.toId) {
            const i = state.findIndex(cur => cur.id === action.fromId);
            return state[i];
          }
          return cur;
        });
        
      case UPDATE_NOTE:
        const i = state.findIndex(cur => cur.id === action.note.id);
        if (i !== -1) {
          return [...state.slice(0, i), action.note, ...state.slice(i + 1)];
        }
        return state; 

      case DELETE_ALL_NOTES:
        return [];

      default:
        return state;
    }
}