import Subject from "./Subject";

const Shoppingcart = ({ shoppingcart }) => {
  // const isExist = shoppingcart.find(item => item.id == Subject.id);
  // if (isExist) {
  //   alert("Already is in Cart");
  // } else {
  //   const newShopingcart = [...shoppingcart, subject];
  // }


  return (
    <div>
      <h2>Shopping Cart: </h2>

      {/* {
        shoppingcart.map((subject) => (
          <li> {subject.course_name} </li>
        ))
      } */}

    </div>
  );
};

export default Shoppingcart;