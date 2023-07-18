import { actionTypes } from "../../Reducers/transactions.reducer";
function CustomButton({text, typeButton, action}) {

    const btn = typeButton === 'static' ? true : false;

    return ( 
        <button 
        onClick={action}
        class={ btn? 'customButton' : 'button' }>
            {text}
        </button>
     );
}

export {CustomButton};