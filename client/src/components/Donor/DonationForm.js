// import React, { useState } from 'react';

// function DonationForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your code to handle the form submission here
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-4">
//       <h3 className="text-lg font-medium mb-4">Make a Donation</h3>
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//           Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//           Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
//           Amount (USD)
//         </label>
//         <input
//           id="amount"
//           type="number"
//           value={amount}
//           onChange={(event) => setAmount(event.target.value)}
//           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>
//       <div className="mt-6">
//         <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
//           Donate Now
//         </button>
//       </div>
//     </form>
//   );
// }

// export default DonationForm;








// import React from 'react';
// import { useEffect } from 'react';

// function PaymentForm() {

//   return (
//     <div class="flex flex-col items-center mt-8">
//   <ul role="tablist" class="flex">
//     <li>
//       <a data-toggle="pill" href="#credit-card" class="text-gray-700 hover:text-gray-900 font-medium py-2 px-3 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">Credit Card</a>
//     </li>
//     <li>
//       <a data-toggle="pill" href="#paypal" class="text-gray-700 hover:text-gray-900 font-medium py-2 px-3 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">Paypal</a>
//     </li>
//     <li>
//       <a data-toggle="pill" href="#net-banking" class="text-gray-700 hover:text-gray-900 font-medium py-2 px-3 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">Net Banking</a>
//     </li>
//   </ul>
//   <div class="w-full max-w-sm mt-8">
//     <div id="credit-card" class="tab-pane fade show active pt-3">
//       <form role="form" onSubmit={(e) => e.preventDefault()} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div class="mb-4">
//           <label for="username" class="block text-gray-700 font-bold mb-2">Card Owner</label>
//           <input type="text" name="username" id="username" placeholder="Card Owner Name" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//         </div>
//         <div class="mb-4">
//           <label for="cardNumber" class="block text-gray-700 font-bold mb-2">Card number</label>
//           <div class="relative">
//             <input type="text" name="cardNumber" id="cardNumber" placeholder="Valid card number" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//             <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//               <span class="text-gray-500">
//                 <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
//                   <path d="M22 4H6a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 6h16v8l-8 4-8-4V6z" fill="currentColor"/>
//                 </svg>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div class="mb-4 flex">
//           <div class="w-1/2 mr-2">
//             <label for="expirationMonth" class="block text-gray-700 font-bold mb-2">Expiration Date</label>
//             <div class="flex">
//               <input type="number" placeholder="MM" name="expirationMonth" id="expirationMonth" required class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
// <input type="number" placeholder="YY" name="expirationYear" id="expirationYear" required class="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
// </div>
// </div>
// <div class="w-1/2 ml-2">
// <label for="cvv" class="block text-gray-700 font-bold mb-2">CVV</label>
// <input type="text" name="cvv" id="cvv" placeholder="CVV" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
// </div>
// </div>
// <div class="mb-6">
// <label for="amount" class="block text-gray-700 font-bold mb-2">Amount</label>
// <input type="text" name="amount" id="amount" placeholder="Enter Amount" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
// </div>
// <button type="submit" class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay Now</button>
// </form>
// </div>
// <div id="paypal" class="tab-pane fade pt-3">
// <p class="text-gray-700">You will be redirected to the PayPal website to complete your purchase.</p>
// </div>
// <div id="net-banking" class="tab-pane fade pt-3">
// <p class="text-gray-700">You can select from any of the banks listed below:</p>
// <ul class="list-disc pl-5">
// <li class="text-gray-700">HDFC Bank</li>
// <li class="text-gray-700">ICICI Bank</li>
// <li class="text-gray-700">State Bank of India</li>
// <li class="text-gray-700">Kotak Mahindra Bank</li>
// </ul>
// </div>

//   </div>
// </div>

// );
// }

// export default PaymentForm;





import React, { useState } from 'react';
import { FaCreditCard, FaPaypal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import MpesaPayment from './MpesaPayment';


function PaymentForm() {
  const [selectedOption, setSelectedOption] = useState('credit-card');
  // const history = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionDesc, setTransactionDesc] = useState("");
  const [currency, setCurrency] = useState("KES");
  const [resultMessage, setResultMessage] = useState("");
  

  function handleSubmit(event) {
    event.preventDefault();
    const transaction = { phoneNumber, amount, transactionDesc, currency };
    fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction)
    })
    .then(response => response.json())
    .then(data => {
      setResultMessage(`Payment successful. Transaction ID: ${data.transactionId}`);
      setPhoneNumber("");
      setAmount("");
      setTransactionDesc("");
    })
    .catch(error => {
      console.error('Error:', error);
      setResultMessage('An error occurred. Please try again.');
    });
  }
  



  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === 'paypal') {
        window.location.href = 'https://www.paypal.com/signin'; 
      }
      // else if (option === 'net-banking') {
      //   history('/mpesa-transactions'); 
      // }
     
  };




  return (
    <div className="flex flex-col items-center mt-8">
 <ul role="tablist" className="flex">
    <li>
      <button
        type="button"
        role="tab"
        className={` rounded-lg text-gray-700 font-medium py-2 px-3 focus:outline-none transition duration-150 ease-in-out ${
          selectedOption === 'credit-card'
            ? 'bg-yellow-400 text-gray-900'
            : 'text-gray-600 hover:text-gray-900 hover:scale-105'
        }`}
        onClick={() => handleOptionChange('credit-card')}
      >
        <FaCreditCard className="inline-block mr-1" />
        Credit Card
      </button>
    </li>
    <li>
      <button
        type="button"
        role="tab"
        className={`rounded-lg text-gray-700 font-medium py-2 px-3 focus:outline-none transition duration-150 ease-in-out ${
          selectedOption === 'paypal'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-gray-900 hover:scale-105'
        }`}
        onClick={() => handleOptionChange('paypal')}
      >
        <FaPaypal className="inline-block mr-1" />
        Paypal
      </button>
    </li>
    <li>
      <button 
        className={`image-btn focus:outline-none transition duration-150 ease-in-out ${selectedOption === 'net-banking'
    
        ? ''
        : 'hover:scale-105'
    } `}
        onClick={() => handleOptionChange('net-banking')}
      >
      </button>
    </li>
  </ul>
      <div className="w-full max-w-sm mt-8">
        {selectedOption === 'credit-card' && (
          <form
            role="form"
            onSubmit={(e) => e.preventDefault()}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Card Owner
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Card Owner Name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                Card number
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="Valid card number"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <span
className="fa fa-credit-card text-gray-400 text-lg"
aria-hidden="true"
></span>
<span className="sr-only">Credit Card Icon</span>
</div>
</div>
<div className="mb-4 flex -mx-2">
<div className="px-2 w-1/2">
<label
               htmlFor="cardExpiry"
               className="block text-gray-700 font-bold mb-2"
             >
Expiration Date
</label>
<input
               type="text"
               name="cardExpiry"
               id="cardExpiry"
               placeholder="MM / YY"
               required
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             />
</div>
<div className="px-2 w-1/2">
<label
               htmlFor="cardCvc"
               className="block text-gray-700 font-bold mb-2"
             >
CVC
</label>
<input
               type="text"
               name="cardCvc"
               id="cardCvc"
               placeholder="CVC"
               required
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             />
</div>
</div>
<div className="mt-8">
<button
             type="submit"
             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           >
Submit
</button>
</div>
</div>
</form>

)}


{selectedOption === 'paypal' && (
<div id="paypal" class="tab-pane fade pt-3">
<p class="text-gray-700">You will be redirected to the PayPal website to complete your donation.</p>
</div>
)}


{selectedOption === 'net-banking' && (
 <div className="">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
      <div className="flex justify-center">
  <h2 className="text-xl font-bold mb-4 mpesa">M-PESA Payment</h2>
</div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="phone-number" className="block font-medium mb-2">
              Phone Number:
            </label>
            <input
              id="phone-number"
              type="tel"
              pattern="[0-9]{10}"
              required
              className="border border-gray-300 rounded-md w-full p-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block font-medium mb-2">
              Amount:
            </label>
            <div className="flex items-center">
              <input
                id="amount"
                type="number"
                min="1"
                step="any"
                required
                className="border border-gray-300 rounded-md p-2 mr-2 w-3/4"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <select
                className="border border-gray-300 rounded-md p-2 w-1/4"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="KES">KES</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="transaction-desc" className="block font-medium mb-2">
              Transaction Description:
            </label>
            <input
              id="transaction-desc"
              type="text"
              required
              className="border border-gray-300 rounded-md w-full p-2"
              value={transactionDesc}
              onChange={(e) => setTransactionDesc(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4">
            Submit Payment
          </button>
        </form>
        {resultMessage && <p className="mt-4">{resultMessage}</p>}
      </div>
    </div>
    )}
</div>
</div>

);
}

export default PaymentForm;