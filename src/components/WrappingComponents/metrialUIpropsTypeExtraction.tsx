import React from "react";
import WrappingComponent from "./WrappingComponents";

const MaterialUIComponent = (props: React.ComponentProps<typeof WrappingComponent>)=>{

    return <div>
            material ui component
            props extracted : {props.variant} - {props.count} - {props.aria}
         </div>
}


export default MaterialUIComponent;