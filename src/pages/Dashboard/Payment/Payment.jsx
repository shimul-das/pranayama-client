// import { loadStripe } from "@stripe/stripe-js";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import CheckoutForm from "./CheckoutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import useCart from "../../../hooks/useCart";
// import { useParams } from "react-router-dom";

// // TODO: provide publishable Key
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const Payment = () => {
//     const { itemId } = useParams();
//     console.log(itemId)
//     const [cart] = useCart();
//     const total = cart.reduce((sum, item) => sum + item.price, 0);
//     const price = parseFloat(total.toFixed(2))
//     return (
//         <div>
//             <h1 className="text-3xl m-10 font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
//                 Payment System
//             </h1>
//             <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
//             <Elements stripe={stripePromise}>
//                 <CheckoutForm cart={cart} price={price}></CheckoutForm>
//             </Elements>
//         </div>
//     );
// };

// export default Payment;


// import { loadStripe } from "@stripe/stripe-js";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import CheckoutForm from "./CheckoutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import useCart from "../../../hooks/useCart";
// import { useParams } from "react-router-dom";

// // TODO: provide publishable Key
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

// const Payment = () => {
//   const {itemId} = useParams();
//   console.log(itemId);

//   return (
//     <div>
//       <h1 className="text-3xl m-10 font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
//         Payment System
//       </h1>
//       <h2 className="text-3xl">Item ID: {itemId}</h2>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm  />
//       </Elements>
//     </div>
//   );
// };

// export default Payment;




import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

 // Import your axiosSecure instance

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { itemId } = useParams();
    const [itemData, setItemData] = useState(null);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        // Fetch item data when the component mounts
        fetchItemData();
    }, []);

    const fetchItemData = async () => {
        try {
            const response = await axiosSecure.get(`/selectclass/${itemId}`);
            setItemData(response.data);
        } catch (error) {
            console.error(error);
            // Handle error fetching item data
        }
    };

    return (
        <div>
            <h1 className="text-3xl m-10 font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                Payment System
            </h1>
            {itemData ? (
                <div>
                    <h2 className="text-3xl">Item ID: {itemId}</h2>
                    <p>Class Name: {itemData.className}</p>
                    <p>Course Price: {itemData.price}$</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm itemData={itemData} price={itemData.price}/>
            </Elements>
                </div>
            ) : (
                <p>Loading item data...</p>
            )}
        </div>
    );
};

export default Payment;
