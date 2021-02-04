import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION } from './../actions';

export const initialState = {
    total: 100,
    operation: "+",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    console.log(num1, num2)
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
        console.log('add 1')
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
        console.log('apply number from reducer', action.payload)
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
        case('CLEAR_DISPLAY'):
            return (
                {
                    ...state,
                    total: 0
                }
            )
        default:
            return state;
    }
}

export default reducer;