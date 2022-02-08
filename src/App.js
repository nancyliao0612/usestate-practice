import React from "react";
import Star from "./Star";

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  function toggleFavorite() {
    setContact((prevState) => {
      return { ...prevState, isFavorite: !prevState.isFavorite };
    });
  }

  return (
    <main>
      <article className="card">
        <img src={require("./images/user.png")} className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;

// import React from "react";
// import Count from "./Count";

// export default function App() {
//   const [count, setCount] = React.useState(0);

//   function add() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function subtract() {
//     setCount((prevCount) => prevCount - 1);
//   }
//   /**
//    * Challenge:
//    * - Create a new component named Count
//    *    - It should receive a prop called `number`, whose value
//    *      is the current value of our count
//    *    - Have the component render the whole div.counter--count
//    *      and display the incoming prop `number`
//    * - Replace the div.counter--count below with an instance of
//    *   the new Count component
//    */
//   return (
//     <div className="counter">
//       <button className="counter--minus" onClick={subtract}>
//         –
//       </button>
//       <Count number={count} />
//       <button className="counter--plus" onClick={add}>
//         +
//       </button>
//     </div>
//   );
// }
