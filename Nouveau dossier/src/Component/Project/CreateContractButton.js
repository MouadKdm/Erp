import React from 'react';
import {Link } from "react-router-dom";
 
const CreateContractButton = ()=> {
return (
    
     <React.Fragment>
        
     <Link to="/addContrat" className="btn btn-lg btn-info">
         Create Contrat
     </Link>
     </React.Fragment>

    
);

};
export default CreateContractButton;