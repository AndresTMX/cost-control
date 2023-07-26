import { CustomButton } from "../CustomButton";

function Modal({children}) {

    return ( 
        <div class="d-flex flex-column justify-content-center align-items-center bg-light p-3 rounded-2 shadow ">
         {children}
        </div>
     );
}

export {Modal};