import React, { useEffect, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import {  integerRege6, regexHouseNo, regexPanCard, regexStreet, regexUsername } from './RegularExpressions';



function FilldetailsPage() 
{


  const location = useLocation();
  const { state } = location;

  const i = location.state?.i;
  // Access form data  from state
  const formData = state?.formData;
  const premiumData = state?.premiumData;
  

  const marketValue = state?.marketValue;
  const buildingAge = state?.buildingAge;
  const security = state?.security;
  const squareFeet = state?.squareFeet;
  const pincode = state?.pincode;
  const person = state?.person;
  const effected = state?.effected;

  // customer Id:
  const startingCustomerId = location.state?.startingCustomerId;

  const [data, setData] = useState(
    {
      gender:"",
      fullname:"",
      pancard:"",
      dob:"",
      propertypincode:"",
      propertyhouseNo:"",
      propertystreetNo:"",
      currentaddress:"",
      pincode:"",
      houseno:"",
      streetno:"",
      paymentId: '',
    }
  );


  const [validationErrors,setValidationErrors]=useState(
    {
      currentaddress:'',
      fullname:'',
      pancard:'',
      dob:'',
      propertypincode:'',
      propertyhouseNo:'',
      propertystreetNo:'',
      pincode:'',
      houseno:'',
      streetno:'',
  }
  );



  // Date Checking :
  const today = new Date();
  const minDate = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());
  // const maxDate = new Date(today.getFullYear()-100,today.getMonth(), today.getDate());

  const minDateFormatted = minDate.toISOString().split('T')[0];


  const handleChange = (e) => {
    const { name, value } = e.target;
    const uppercaseValue = ['fullname', 'pancard'].includes(name) ? value.toUpperCase() : value;
    
  setData({ ...data, [name]: uppercaseValue });

     // validation name:
     if(name === "fullname"){
      if(!regexUsername.test(value))
      {
        setValidationErrors({ ...validationErrors, [name]: "Name must be 3 or more Charecters " });
      } else {
        setValidationErrors({ ...validationErrors, [name]: "" });
      }
    }

    // validation for pancard id :
     if(name === "pancard"){
      if(!regexPanCard.test(value))
      {
        setValidationErrors({ ...validationErrors, [name]: "Enter Valid Pancard No " });
      } else {
        setValidationErrors({ ...validationErrors, [name]: "" });
      }
    }

    

       

      // validation for pincode :
      if(name === "propertypincode"){
        if(!integerRege6.test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter 6 digits of pin" });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }

      // validation for house no:
      if(name === "propertyhouseNo"){
        if(!regexHouseNo.test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter valid flat No" });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }

        // validation for street no:
      if(name === "propertystreetNo"){
        if(!regexStreet.test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter valid street no " });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }


      // permanent Address :
      // validation for pincode :
      if(name === "pincode"){
        if(!integerRege6.test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter 6 digits of pin" });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }

      // validation for house no:
      if(name === "houseno"){
        if(!regexHouseNo.test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter valid flat No" });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }

        // validation for street no:
      if(name === "streetno"){
        if(!regexStreet.test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter valid street no " });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }
  };


  const renderContent = () => {
    if (data.currentaddress === 'no') {
    return <div>
           <h3 className='mt-3  'style={{color:'red',backgroundColor:'black', borderRadius: '10px'}}>Current Address Details :</h3>
          <div className='ms-5'>
          <div class="form-group">
          <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3">Pincode :</label>
          <input type='text' name='pincode' class="form-control"  maxLength={6} value={data.pincode} required style={{ borderRadius: '10px', borderColor: 'cyan',marginLeft:'' }} className='mt-3'  onChange={handleChange}/>  {validationErrors.pincode && <span className="text-danger">{validationErrors.pincode}</span>} <br></br>
        </div>
        <div class="form-group">
        <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" >House No :</label>
        <input type='text' name='houseno' class="form-control"  value={data.houseno} required style={{ borderRadius: '10px', borderColor: 'cyan',marginLeft:'' }} className='mt-3' onChange={handleChange} />  {validationErrors.houseno && <span className="text-danger">{validationErrors.houseno}</span>} <br></br>
        </div>
        <div class="form-group">
        <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" >Street:</label>
        <input type='text' name='streetno' class="form-control"  value={data.streetno} required style={{ borderRadius: '10px', borderColor: 'cyan' ,marginLeft:''}} className='mt-3' onChange={handleChange} /> {validationErrors.streetno && <span className="text-danger">{validationErrors.streetno}</span>} <br></br>
        </div>
        </div>
    </div>;
  }
  
};

useEffect(() => {
  const savedFormData = sessionStorage.getItem('formData');
  if (savedFormData) {
    setData(JSON.parse(savedFormData));
  }
}, []);



  let navigate=useNavigate();

  const handleSubmit =(e)=>
  {
    e.preventDefault(); 

     

  if(data.currentaddress === "yes" && regexUsername.test(data.fullname) && regexPanCard.test(data.pancard) && integerRege6.test(data.propertypincode) && regexHouseNo.test(data.propertyhouseNo) && regexStreet.test(data.propertystreetNo))
  {
    navigate("/payment",{state:{marketValue,security,squareFeet,buildingAge,pincode,person,effected,startingCustomerId,formData,premiumData,userDetails : data}});

    
  }
  else if(data.currentaddress === "no" && regexUsername.test(data.fullname) && regexPanCard.test(data.pancard) && integerRege6.test(data.propertypincode) && regexHouseNo.test(data.propertyhouseNo)  && regexStreet.test(data.propertystreetNo) && integerRege6.test(data.pincode) && regexHouseNo.test(data.houseno) && regexStreet.test(data.streetno)){
   
    navigate("/payment",{state:{marketValue,security,squareFeet,buildingAge,pincode,person,effected,startingCustomerId,formData,premiumData , userDetails : data}});

    
  }
  // Save form data to session storage
  sessionStorage.setItem('formData', JSON.stringify(data));

  // console.log("data =>"+JSON.stringify(data));
  //  PropertyInsuranceService.createfillDetails(data);
   
  }

  const handleClick =()=>{
    navigate("/property",{state:{i}});
  }


  return (
    <div class=" ">
			 <h1 style={{ color: 'blue', backgroundColor: 'red', borderRadius: '10px', position: '', width: '100%' }} className='text-center'> 
        Fill The Details :
      </h1>
    <div class="row ">
      <div class="col-lg-4 col-md-4  col-sm-6 col-12 ">
      <h3 className='my-3  ms-2 ' style={{backgroundColor:'black', borderRadius: '10px',color:'red'}}>Property Details :</h3>
          <div className='ms-5 my-4' >

            <h6 ><p>Current MarketValue : <span style={{color:'blue'}}>{marketValue}</span></p></h6>
            <h6><p >SquareFeet Of The Building : <span style={{color:'blue'}}> {squareFeet}</span></p></h6>
            <h6><p>Age Of The Building  :  <span style={{color:'blue'}}>{buildingAge}</span></p></h6>
            <h6><p>Security  : <span style={{color:'blue'}}> {security}</span></p></h6>

          </div>
          <h3 className='my-3  ms-2' style={{backgroundColor:'black', borderRadius: '10px',color:'red'}}>Premium Details :</h3>
          <div className='ms-5 my-4' >

                <h6><p>No Of Years  :  <span style={{color:'blue'}}> {premiumData?.year}</span></p></h6>
                <h6><p>Premium Amount  : <span style={{color:'blue'}}> {premiumData?.Premium}</span></p></h6>
                {/* {startingCustomerId} */}
          </div>
<div className='text-center'>
  <button className='btn btn-primary text-center' onClick={handleClick}>Edit</button>
</div>
{/* {i} */}
      </div> 
      

      

      <div class="col-lg-8 col-md-8 col-sm-6 col-12 ">
            <div>
            <form  onSubmit={handleSubmit} class='form-horizatol' >

                <h3 className='mt-3 ' style={{color:'red',backgroundColor:'black', borderRadius: '10px'}}>Enter PanCard Details :</h3>
                    <div className='ms-5' >
    <div class="form-group" >
    <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" >FullName (as per PanCard) :</label>
                <select id='salutation' name='gender' value={data.gender}   required style={{ borderRadius: '10px', borderColor: 'cyan' }} className='mt-3' onChange={handleChange}>
                <option value=''>none</option>
                <option value='Mr'>Mr</option>
                <option value='Mrs'>Mrs</option>
                <option value='Ms'>Ms</option>
                </select>
                <input type='text' name='fullname' maxLength={20}   value={data.fullname.toUpperCase()}  required style={{ borderRadius: '10px', borderColor: 'cyan' }}  onChange={handleChange}  />   {validationErrors.fullname && <span className="text-danger">{validationErrors.fullname}</span>}  <br></br> 
    </div>
    <div class="form-group">
    <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" >PanCard No:</label>
                <input type='text' name='pancard' class="form-control"  className='mt-3' value={data.pancard.toUpperCase()} required style={{ borderRadius: '10px', borderColor: 'cyan'}}   onChange={handleChange} />   {validationErrors.pancard && <span className="text-danger">{validationErrors.pancard}</span>}  <br></br>
    </div>
    <div class="form-group">
    <label class="control-label  col-lg-3 col-md-3 col-sm-6 col-3" >Dtae Of Birth</label>
                <input type='date' name='dob' class="form-control" min="1924-01-01" max={minDateFormatted}  value={data.dob} required style={{ borderRadius: '10px', borderColor: 'cyan' }} className='mt-3'  onChange={handleChange} />  {validationErrors.dob && <span className="text-danger">{validationErrors.dob}</span>} <br></br>
     </div>         
      <div class="form-group"> 
      <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" >Email :</label>
                <input type='text' name='email' class="form-control" required style={{ borderRadius: '10px', borderColor: 'cyan' }} className='mt-3' value={formData?.email || ''}  onChange={handleChange} ></input>  <br></br>
      </div>
      <div class="form-group">
      <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" >Mobile No :</label>
                <input type='text' name='mobno'class="form-control" required style={{ borderRadius: '10px', borderColor: 'cyan' }} className='mt-3' value={formData?.mobileno || ''}  onChange={handleChange} /><br></br>
      </div>      
                </div>

                <h3 className='mt-3 'style={{color:'blue'}}>Property Details :</h3>

        <h3 className='mt-3 'style={{color:'red',backgroundColor:'black', borderRadius: '10px'}}>Property Address Details :</h3>
<div className='ms-5'>
<div class="form-group">
<label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" >Pincode :</label>
<input type='text' name='propertypincode' class="form-control" value={data.propertypincode} maxLength={6} required style={{ borderRadius: '10px', borderColor: 'cyan',marginLeft:'' }} className='mt-3'  onChange={handleChange} />  {validationErrors.propertypincode && <span className="text-danger">{validationErrors.propertypincode}</span>} <br></br>
  </div>
  <div class="form-group">     
  <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" >House No:</label><input type='text' name='propertyhouseNo' class="form-control" value={data.propertyhouseNo} required style={{ borderRadius: '10px', borderColor: 'cyan',marginLeft:'' }} className='mt-3'  onChange={handleChange} />     {validationErrors.propertyhouseNo && <span className="text-danger">{validationErrors.propertyhouseNo}</span>}  <br></br>
   </div>
   <div class="form-group">     
   <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" >Street :</label><input type='text' name='propertystreetNo' class="form-control" value={data.propertystreetNo} required style={{ borderRadius: '10px', borderColor: 'cyan' ,marginLeft:''}} className='mt-3'  onChange={handleChange} />  {validationErrors.propertystreetNo && <span className="text-danger">{validationErrors.propertystreetNo}</span>}   <br></br>
    </div>
    <div class="form-group">
    <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" > Above is Current Address :</label>
        <select id='address' required name='currentaddress' class="form-control" style={{ borderRadius: '10px', borderColor: 'cyan',marginLeft:'' }} className='mt-3' onChange={handleChange} > 
              <option value="">none</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
         </select><br></br>
         </div>
         </div> 

<div>

      {renderContent()}

</div>

<div className='text-center'>
          <button className='btn btn-outline-primary mt-3 '  >Make Payment</button>
    </div>

                </form>
                
            </div>
      </div> 
    

    </div>

    <div>
    
    </div>
    
  </div>	
  )
}

export default FilldetailsPage
