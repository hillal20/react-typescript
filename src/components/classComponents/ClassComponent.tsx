import React from "react";

class ClassComponent extends React.Component<{message: string}, {counter: number}> {

      state  = {
        counter:100,
    }
     decreaseHandler = (e: React.MouseEvent)=> {
        this.setState( (pre: {counter: number}) => ({
                                                    ...pre,
                                                     counter: --pre.counter
                                                     })
                      )
     }
      render(){
        return ( <>
                 <h1>class component</h1>
                 <button onClick={this.decreaseHandler}> decrease </button>
                { this.props.message } :  {this.state.counter}
                 </>
                 )
      }

}

export default ClassComponent;