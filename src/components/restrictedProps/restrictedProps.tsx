import React from "react";

type  restrictedProp = {
    id : number,
    name? : string 
}
const RestrictedProps = ({id,name}: restrictedProp)=> {

    return <><h2>restricted props {id}-{name} </h2></>
}

export default RestrictedProps;