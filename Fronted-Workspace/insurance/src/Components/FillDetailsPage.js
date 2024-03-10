import React, { useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import {  integerRege6, regexHouseNo, regexPanCard, regexStreet, regexUsername } from './RegularExpressions';
import { Modal } from 'react-bootstrap';

function FilldetailsPage() 
{


  const location = useLocation();
  const { state } = location;

  // Access form data  from state
  const formData = state?.formData;
  const premiumData = state?.premiumData;
  

  const marketValue = state?.marketValue;
  const buildingAge = state?.buildingAge;
  const security = state?.security;
  const squareFeet = state?.squareFeet;

  
  const [showstate , setState] = useState(false);


  const clickClose =()=> setState(false);

  const [data, setData] = useState(
    {
      address:'',
      fullname:'',
      pancard:'',
      dob:'',
      pin:'',
      houseNo:'',
      street:'',
        pincode:'',
        houseno:'',
        streetno:''
    }
  );


  const [validationErrors,setValidationErrors]=useState(
    {
      address:'',
      fullname:'',
      pancard:'',
      dob:'',
      pin:'',
      houseNo:'',
      street:'',
      pincode:'',
      houseno:'',
      streetno:'',
  }
  );

//   let year;

  // Date Checking :
  const today = new Date();
  const minDate = new Date(today.getFullYear() - 19, today.getMonth(), today.getDate());

  const minDateFormatted = minDate.toISOString().split('T')[0];


  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setData({ ...data, [name]: value });

    // validation name:
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
        setValidationErrors({ ...validationErrors, [name]: "Enter Pancard No" });
      } else {
        setValidationErrors({ ...validationErrors, [name]: "" });
      }
    }

    

       

      // validation for pincode :
      if(name === "pin"){
        if(!integerRege6.test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter 6 digits of pin" });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }

      // validation for house no:
      if(name === "houseNo"){
        if(!regexHouseNo.test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter valid flat No" });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }

        // validation for street no:
      if(name === "street"){
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
    if (data.address === 'no') {
    return <div>
           <h3 className='mt-3  'style={{color:'red',backgroundColor:'black', borderRadius: '10px'}}>Current Address Details :</h3>
          <div className='ms-5'>
          <div class="form-group">
          <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for="">Pincode :</label>
          <input type='text' name='pincode' class="form-control"  maxLength={6} value={data.pincode} required style={{ borderRadius: '10px', borderColor: 'cyan',marginLeft:'' }} className='mt-3'  onChange={handleChange}/>  {validationErrors.pincode && <span className="text-danger">{validationErrors.pincode}</span>} <br></br>
        </div>
        <div class="form-group">
        <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for="">House No :</label>
        <input type='text' name='houseno' class="form-control"  value={data.houseno} required style={{ borderRadius: '10px', borderColor: 'cyan',marginLeft:'' }} className='mt-3' onChange={handleChange} />  {validationErrors.houseno && <span className="text-danger">{validationErrors.houseno}</span>} <br></br>
        </div>
        <div class="form-group">
        <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for="">Street:</label>
        <input type='text' name='streetno' class="form-control"  value={data.streetno} required style={{ borderRadius: '10px', borderColor: 'cyan' ,marginLeft:''}} className='mt-3' onChange={handleChange} /> {validationErrors.streetno && <span className="text-danger">{validationErrors.streetno}</span>} <br></br>
        </div>
        </div>
    </div>;
  }
  
};



  let navigate=useNavigate();

  const handleSubmit =(e)=>
  {
    e.preventDefault(); 

  if(data.address === "yes" && regexUsername.test(data.fullname) && regexPanCard.test(data.pancard) && integerRege6.test(data.pin) && regexHouseNo.test(data.houseNo) && regexStreet.test(data.street))
  {
   
    navigate("/payment",{state:{marketValue,security,squareFeet,buildingAge,formData,premiumData}});

  }
  else if(data.address === "no" && regexUsername.test(data.fullname) && regexPanCard.test(data.pancard) && integerRege6.test(data.pin) && regexHouseNo.test(data.houseNo) && integerRege6.test(data.pincode) && regexHouseNo.test(data.houseno) && regexStreet.test(data.streetno)){
   
    
    navigate("/payment",{state:{marketValue,security,squareFeet,buildingAge,formData,premiumData , userDetails : data}});
  }
  else
  {setState(true);}
   
  }

  


  return (
    <div class=" ">
			 <h1 style={{ color: 'blue', backgroundColor: 'red', borderRadius: '10px', position: '', width: '100%' }} className='text-center'> 
        Fill The Details :
      </h1>
    <div class="row ">
      <div class="col-lg-4 col-md-4  col-sm-6 col-12 ">
      <h3 className='my-3 text-primary ms-2 ' style={{backgroundColor:'cyan', borderRadius: '10px'}}>Property Details :</h3>
          <div className='ms-5 my-4' >

            <h6 ><p>Current MarketValue : {marketValue}</p></h6>
            <h6><p >SquareFeet Of The Building : {squareFeet}</p></h6>
            <h6><p>Age Of The Building  : {buildingAge}</p></h6>
            <h6><p>Security  : {security}</p></h6>

          </div>
          <h3 className='my-3 text-primary ms-2' style={{backgroundColor:'cyan', borderRadius: '10px'}}>Premium Details :</h3>
          <div className='ms-5 my-4' >

                <h6><p>No Of Years  : {premiumData?.year}</p></h6>
                <h6><p>Premium Amount  : {premiumData?.Premium}</p></h6>

          </div>

      </div> 
      

      

      <div class="col-lg-8 col-md-8 col-sm-6 col-12 ">
            <div>
            <form  onSubmit={handleSubmit} class='form-horizatol' >

                <h3 className='mt-3 ' style={{color:'red',backgroundColor:'black', borderRadius: '10px'}}>Enter PanCard Details :</h3>
                    <div className='ms-5' >
    <div class="form-group" >
    <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for="">FullName :</label>
                <select id='salutation' name='salutation'    required style={{ borderRadius: '10px', borderColor: 'cyan' }} className='mt-3' onChange={handleChange}>
                <option value=''>none</option>
                <option value='Mr'>Mr</option>
                <option value='Mrs'>Mrs</option>
                <option value='Ms'>Ms</option>
                </select>
                <input type='text' name='fullname'   value={data.fullname}  required style={{ borderRadius: '10px', borderColor: 'cyan' }}  onChange={handleChange}  />   {validationErrors.fullname && <span className="text-danger">{validationErrors.fullname}</span>}  <br></br> 
    </div>
    <div class="form-group">
    <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for="">PanCard No:</label>
                <input type='text' name='pancard' class="form-control"  className='mt-3' value={data.pancard}  required style={{ borderRadius: '10px', borderColor: 'cyan'}}   onChange={handleChange} />   {validationErrors.pancard && <span className="text-danger">{validationErrors.pancard}</span>}  <br></br>
    </div>
    <div class="form-group">
    <label class="control-label  col-lg-3 col-md-3 col-sm-6 col-3" for="">Dtae Of Birth</label>
                <input type='date' name='dob' class="form-control" max={minDateFormatted}  value={data.dob} required style={{ borderRadius: '10px', borderColor: 'cyan' }} className='mt-3'  onChange={handleChange} />  {validationErrors.dob && <span className="text-danger">{validationErrors.dob}</span>} <br></br>
     </div>         
      <div class="form-group"> 
      <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for="">Email :</label>
                <input type='text' name='email' class="form-control" required style={{ borderRadius: '10px', borderColor: 'cyan' }} className='mt-3' value={formData?.email || ''}  onChange={handleChange} ></input>  <br></br>
      </div>
      <div class="form-group">
      <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for="">Mobile No :</label>
                <input type='text' name='mobno'class="form-control" required style={{ borderRadius: '10px', borderColor: 'cyan' }} className='mt-3' value={formData?.mobileno || ''}  onChange={handleChange} /><br></br>
      </div>      
                </div>

                <h3 className='mt-3 'style={{color:'blue'}}>Property Details :</h3>

        <h3 className='mt-3 'style={{color:'red',backgroundColor:'black', borderRadius: '10px'}}>Property Address Details :</h3>
<div className='ms-5'>
<div class="form-group">
<label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for="">Pincode :</label>
<input type='text' name='pin' class="form-control" value={data.pin} maxLength={6} required style={{ borderRadius: '10px', borderColor: 'cyan',marginLeft:'' }} className='mt-3'  onChange={handleChange} />  {validationErrors.pin && <span className="text-danger">{validationErrors.pin}</span>} <br></br>
  </div>
  <div class="form-group">     
  <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for="">House No:</label><input type='text' name='houseNo' class="form-control" value={data.houseNo} required style={{ borderRadius: '10px', borderColor: 'cyan',marginLeft:'' }} className='mt-3'  onChange={handleChange} />     {validationErrors.houseNo && <span className="text-danger">{validationErrors.houseNo}</span>}  <br></br>
   </div>
   <div class="form-group">     
   <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for="">Street :</label><input type='text' name='street' class="form-control" value={data.street} required style={{ borderRadius: '10px', borderColor: 'cyan' ,marginLeft:''}} className='mt-3'  onChange={handleChange} />  {validationErrors.street && <span className="text-danger">{validationErrors.street}</span>}   <br></br>
    </div>
    <div class="form-group">
    <label class="control-label col-lg-3 col-md-3 col-sm-6 col-3" for=""> Above is Current Address :</label>
        <select id='address' required name='address' class="form-control" style={{ borderRadius: '10px', borderColor: 'cyan',marginLeft:'' }} className='mt-3' onChange={handleChange} > 
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
    <div>
           <Modal show={showstate} onHide={clickClose} className='text-center' >
                <Modal.Body>
                  <h4 className='mt-5'>Please Fill The Details Properly</h4>
                  <button className='btn btn-outline-primary my-5' onClick={clickClose} >Close</button>
                </Modal.Body>
               
            </Modal>
    </div>
    </div>
    
  </div>	
  )
}

export default FilldetailsPage
