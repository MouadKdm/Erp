import React from 'react';
import {Link } from "react-router-dom";
 
const CreateCarteButton = ()=> {
return (
    
     <React.Fragment>
        
     <Link to="/addCarte" className="btn btn-lg btn-info">
         Carte Banquaire
     </Link>
     </React.Fragment>

    
);

};
export default CreateCarteButton;