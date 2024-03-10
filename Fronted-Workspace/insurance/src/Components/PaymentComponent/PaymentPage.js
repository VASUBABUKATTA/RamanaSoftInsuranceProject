import React from 'react';
 import {  useLocation,} from 'react-router-dom';


function PaymentPage() {

  const location = useLocation();
  const { state } = location;


  const formData = state?.formData;

  const email = formData?.email;
  const mobileno = formData?.mobileno;

  const name = state?.userDetails?.fullname;
  const address = state?.userDetails?.houseno;

  const premiumAmount = state?.premiumData?.Premium;
 

  const handleClick=()=>{
  const options = {
    key: 'rzp_test_Su4WV4zdBIGTmZ', 
    amount: premiumAmount, // Amount in paise (e.g., 1000 paise = â‚¹10)
    name: 'Ramana Soft Insurance Company',
    description: 'IS A INSURANCE cOMPANY',
    image: 'your_logo_url',
    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    
    prefill: {
      name: name,
      email: email,
      contact: mobileno,
    },
    notes: {
      address: address,
    },
    theme: {
      color: '#F37254',
    },
    
  }

  var pay = new window.Razorpay(options);
    pay.open();

}

  return (
    <div>
      <div>
        <h1 className='text-center text-primary'> Welcome To The Payment Page :</h1>
      </div>
      <div>
        <label className='mt-5 ms-5'>Choose Payment option :</label>
        <input type="radio" name='payment' required className='mx-3'/>razorpay
        <input type="radio" name='payment' required className='mx-3' />UPI
        <input type="radio" name='payment' required className='mx-3' />Other Option
      </div>
      {/* <h1>{premiumData.Premium}</h1> */}

      <div className='text-center mt-3'>
        <button className='btn btn-primary text-center' onClick={handleClick} > Pay </button>
      </div>
    </div>
  )
}

export default PaymentPage

