import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/Storecontext";

const Fooditem = ({ id, name, price, description, image }) => {
  const {
    cartItems = {},
    addToCart,
    removeFromCart,
  } = useContext(StoreContext); // Added fallback for cartItems

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)} // Added id parameter to removeFromCart
              src={assets.remove_icon_red}
              alt="remove from cart"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add more"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;

//   return (
//     <div className="food-item">
//       <div className="food-item-image-container">
//         <img className="food-item-image" src={image} alt="" />
//         {!itemCount ? (
//           <img
//             className="add"
//             onClick={() => setItemCount((prev) => prev + 1)}
//             src={assets.add_icon_white}
//           />
//         ) : (
//           <div className="food-item-counter">
//             <img
//               onClick={() => setItemCount((prev) => prev - 1)}
//               src={assets.remove_icon_red}
//               alt=""
//             />
//             <p>{itemCount}</p>
//             <img
//               onClick={() => setItemCount((prev) => prev + 1)}
//               src={assets.add_icon_green}
//               alt=""
//             />
//           </div>
//         )}
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   );
// };

// export default Fooditem;
