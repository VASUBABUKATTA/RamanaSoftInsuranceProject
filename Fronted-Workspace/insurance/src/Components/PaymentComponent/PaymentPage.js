import React,{useEffect, useState} from 'react';
 import {  useLocation,} from 'react-router-dom';
  import p4 from '../images/p4.jpeg'
import PropertyInsuranceService from '../Service/PropertyInsuranceService';

function PaymentPage() {

  const location = useLocation();
  const { state } = location;

  const formData = state?.formData;
  const premiumData = state?.premiumData;

  // data from signup page :
  const email = formData?.email;
  const mobileno = formData?.mobileno;
  const userName=formData?.name;
  const userPassword = formData?.password;

  // data from filldetails page :
  const name = state?.userDetails?.fullname;
  const address = state?.userDetails?.currentaddress;
  const salutation = state?.userDetails?.gender;
  const pancard=state?.userDetails?.pancard;
  const dob = state?.userDetails?.dob;
 const  propertypincode = state?.userDetails?.propertypincode;
 const propertyhouseNo=state?.userDetails?.propertyhouseNo;
 const propertystreetNo = state?.userDetails?.propertystreetNo;
 const   pincode = state?.userDetails?.pincode;
 const  houseno = state?.userDetails?.houseno;
 const  streetno = state?.userDetails?.streetno;

// data from premium page:
  const year = premiumData?.year;
  const premium = premiumData?.Premium;

  // data from structure and details page :
const marketValue = state?.marketValue;
const security = state?.security;
const buildingAge = state?.buildingAge;
const squareFeet = state?.squareFeet;
const userpincode = state?.pincode;
const effected = state?.effected;
const person = state?.person;

//  const startingCustomerId = location.state?.startingCustomerId;

 
const [signUpDetails, setSignUpDetails] = useState([]);

useEffect(() => {
  if (mobileno) {
    PropertyInsuranceService.getCustomerIdByMobileNo(mobileno).then((res) => {
      setSignUpDetails(res.data);
    });
  }
}, [mobileno]);
 
  const amount = premium * 100;

  const [disabled, setDisabled] = useState(true);
 
  const [data,setData]=useState({

    payment:'',

  });
  const [details] = useState({
      paymentId:"",
      year : year,
      premium : premium ,
      customerId:"",
  })

  const [values]=useState({
    marketValue:marketValue,
    squareFeet:squareFeet,
    pincode:userpincode,
    buildingAge:buildingAge,
    effected:effected,
    security:security,
    person:person,
    customerId:"",
    paymentId:"",
});
 
const [feilds] = useState({
  name: userName,
  mobileno: mobileno,
  email: email,
  password: userPassword,
  customerId:"",
});
const [dataValues] = useState({
  gender: salutation,
  fullname: name,
  pancard: pancard,
  dob: dob,
  propertypincode: propertypincode,
  propertyhouseNo: propertyhouseNo,
  propertystreetNo: propertystreetNo,
  currentaddress: address,
  pincode: address === 'yes' ? propertypincode : pincode,
  houseno: address === 'yes' ? propertyhouseNo : houseno,
  streetno: address === 'yes' ? propertystreetNo : streetno,
  customerId:"",
  paymentId:"",
});

const signUpRows = signUpDetails.map((details) => (
  <tr key={details.id}>
   {details.customerId}
  </tr>
));

  const handleChange = (e) => {

    const { name, value } = e.target;
   
    setData({ ...data, [name]: value });

    setDisabled(e.target.value === "razorpay" ? false : true);
     
  };

  const signUpRowsAsString = signUpRows.map(row => row.props.children); 
 
  details.customerId = signUpRowsAsString.join(', '); 
  dataValues.customerId = signUpRowsAsString.join(', ');
  values.customerId = signUpRowsAsString.join(', ');

 

  const handleClick=()=>{
     const var4= 'https://api.razorpay.com/v1/payments/qr_codes/qr_FuZIYx6rMbP6gs';
  const options = {
    key: 'rzp_test_Su4WV4zdBIGTmZ', 
    entity:var4,
    amount: amount, // Amount in paise (e.g., 1000 paise = â‚¹10)
    name: 'Ramana Soft Insurance Company',
    description: 'IS A INSURANCE COMPANY',
    image: p4,
    handler: function (response) 
    {
        alert(response.razorpay_payment_id);

        const pamentdata=response.razorpay_payment_id;

        details.paymentId=pamentdata.toString();
        dataValues.paymentId=pamentdata.toString();
        values.paymentId=pamentdata.toString();

      console.log("details =>"+JSON.stringify(details));

      console.log("details =>"+JSON.stringify(details));
      console.log("feilds =>"+JSON.stringify(feilds));
      console.log("dataVales =>"+JSON.stringify(dataValues));
      console.log("values =>"+JSON.stringify(values));

    PropertyInsuranceService.createPaymentData(details);
    // PropertyInsuranceService.createCustomer(feilds);
      PropertyInsuranceService.createfillDetails(dataValues);
      PropertyInsuranceService.createDetails(values)
      
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
        <h1 className='text-center'style={{backgroundColor:'red',color:'blue'}}> Welcome To The Payment Page :</h1>
      </div>
      <div>
        <label className='mt-5 ms-5'>Choose Payment option :</label>
        <input type="radio" name='payment' value='razorpay' required className='mx-3' onChange={handleChange}/>razorpay
        <input type="radio" name='payment' value='' required className='mx-3' onChange={handleChange}/>UPI
        <input type="radio" name='payment' value='' required className='mx-3' onChange={handleChange}/>Other Option
      </div>
     <div>

     <div className='text-center mt-3'>
                   <button className='btn btn-primary text-center' disabled={disabled} onClick={handleClick} > Pay </button>
                   </div>
     </div>  
   
    </div>
  )
}

export default PaymentPage

