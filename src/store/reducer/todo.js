const initialState = {
    list: [
        {
            id: 1,
            name: 'Sapato',
        }, {
            id: 2,
            name: 'Camisa',
        }, {
            id: 3,
            name: 'Calça',
        }, {
            id: 4,
            name: 'Cinto',
        }
    ],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                list: [...state.list, action.payload],
            };
        default:
            return state;
    }
}