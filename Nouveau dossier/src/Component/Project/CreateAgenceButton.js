import React from 'react';
import {Link } from "react-router-dom";
 
const CreateAgenceButton = ()=> {
return (
    
     <React.Fragment>
        
     <Link to="/addAgence" className="btn btn-info btn-dark">
         Create Agence
     </Link>
     </React.Fragment>

    
);

};
export default CreateAgenceButton;