import React from 'react';
import {Link } from "react-router-dom";
 
const CreateAbonneButton = ()=> {
return (
    
     <React.Fragment>
        
     <Link to="/addAbonne" className="btn btn-info btn-dark ">
         Create Abonne
     </Link>
     </React.Fragment>  
);

};
export default CreateAbonneButton;