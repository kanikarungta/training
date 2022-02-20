// import { Component } from "react";

// class Increment extends Component {
//   render () {
//     return (
//       <>
//         <button onClick={() => this.props.incHandler()}>Increment</button>
//       </>
//     )
//   }
// }

function Increment (props) {
  return (
    <>
      <button onClick={() => props.incHandler()}>Increment</button>
    </>
  )
}

export default Increment;
