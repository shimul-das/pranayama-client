

///////////

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from 'sweetalert2';

const CheckoutForm = ({ itemData, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch(error => {
          console.error(error);
          // Handle error retrieving client secret
        });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log('error', error);
      setCardError(error.message);
    } else {
      setCardError('');
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);

      // Update class information
      const updatedClass = {
        enrolledStudent: itemData.enrolledStudent + 1,
        availableSeats: itemData.availableSeats - 1
      };

      axiosSecure.patch(`/classes/${itemData.classId}`, updatedClass)
        .then(res => {
          console.log('Class updated:', res.data);
          // Handle successful class update
        })
        .catch(error => {
          console.log(error);
          // Handle error updating class
        });

      // Save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        classId: itemData.classId,
        image:itemData.image,
        className: itemData.className,
        instructorName: itemData.instructorName
      };

      axiosSecure.post('/payments', payment)
        .then(res => {
          console.log("data from payment", res.data);
          if (res.data.insertedId) {
            // Display confirmation message
            Swal.fire({
              icon: 'success',
              title: 'Your Payment Successful',
              text: `Your Transaction ID: ${paymentIntent.id}`,
            });
          }
        })
        .catch(error => {
          console.error(error);
          // Handle error saving payment information
        });

      // Delete item from selected class
      axiosSecure
        .delete(`/selectclass/${itemData._id}`)
        .then(res => {
          console.log('Item deleted:', res.data);
          // Handle successful item deletion
        })
        .catch(error => {
          console.log(error);
          // Handle error deleting item
        });
    }
  };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
