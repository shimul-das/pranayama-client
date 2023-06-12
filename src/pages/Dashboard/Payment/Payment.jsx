




import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
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
                    <h2><span className="font-bold">Item ID:</span> <span className="text-orange-500">{itemId}</span></h2>
                    <p><span className="font-bold">Class Name:</span> {itemData.className}</p>
                    <p><span className="font-bold">Course Price:</span> <span className="badge badge-secondary font-bold">{itemData.price}$</span></p>
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
