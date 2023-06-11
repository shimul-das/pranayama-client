import { useEffect, useState } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

//   const fetchPaymentHistory = async () => {
//     try {
//       const response = await axiosSecure.get('/paymenthistory'); 
//       const sortedHistory = response.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort payment history by date descending
//       setPaymentHistory(sortedHistory);
//     } catch (error) {
//       console.log(error);
//     }
//   };
const fetchPaymentHistory = async () => {
    try {
      const response = await axiosSecure.get('/paymenthistory');
      if (Array.isArray(response.data)) {
        const sortedPaymentHistory = response.data.sort((a, b) => {
          // Customize the sorting logic based on your requirements
          return new Date(b.date) - new Date(a.date);
        });
        setPaymentHistory(sortedPaymentHistory);
      }
    } catch (error) {
      console.error(error);
    }
  };  
  

  return (
<div className="container mx-auto py-8">
  <h1 className="text-2xl font-bold mb-4">Payment History</h1>
  <table className="min-w-full border border-gray-300">
    <thead className="bg-gray-100">
      <tr>
        <th className="py-2 px-4 border-b">#</th>
        <th className="py-2 px-4 border-b">Email</th>
        <th className="py-2 px-4 border-b">Transaction ID</th>
        <th className="py-2 px-4 border-b">Price</th>
        <th className="py-2 px-4 border-b">Date</th>
        <th className="py-2 px-4 border-b">Class ID</th>
        <th className="py-2 px-4 border-b">Class Name</th>
        <th className="py-2 px-4 border-b">Instructor Name</th>
        <th className="py-2 px-4 border-b">Image</th>
      </tr>
    </thead>
    <tbody>
      {paymentHistory.map((payment, index) => (
        <tr key={payment._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <td className="py-2 px-4 border-b">{index + 1}</td>
          <td className="py-2 px-4 border-b">{payment.email}</td>
          <td className="py-2 px-4 border-b">{payment.transactionId}</td>
          <td className="py-2 px-4 border-b">${payment.price}</td>
          <td className="py-2 px-4 border-b">{new Date(payment.date).toLocaleDateString()}</td>
          <td className="py-2 px-4 border-b">{payment.classId}</td>
          <td className="py-2 px-4 border-b">{payment.className}</td>
          <td className="py-2 px-4 border-b">{payment.instructorName}</td>
          <td className="py-2 px-4 border-b">
            <img src={payment.image} alt="Class Image" className="w-20 h-20 object-cover rounded-full" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default PaymentHistory;

