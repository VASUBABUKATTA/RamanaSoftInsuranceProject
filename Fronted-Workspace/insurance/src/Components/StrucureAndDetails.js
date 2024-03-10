import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  integerRege6,  regexmarketValue, regexpropertyValues } from './RegularExpressions'

import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Modal } from 'react-bootstrap';

export default function StrucureAndDetails() {

  const mystyle=
  {
    color:'blue',
    backgroundColor:'red', 
  }

  const mystyle1={
    color:'red',
    backgroundColor:'black',
    borderRadius:'10px',
  }

//   const mystyle2={
//     width:'80px',
//     marginLeft:"675px",
//   }

//   const mystyle3={
//     marginLeft:'200px',
// width:'100%',

//   }

  let navigate=useNavigate();

  const [showState , setState] = useState(false);
  const clickClose =()=> setState(false);


  const [values,setValues]=useState({
      marketValue:"",
      squareFeet:"",
      pincode:"",
      buildingAge:"",
      effected:"",
      security:"",
      person:""
  });

       // setting state values: 

        const [validationErrors,setValidationErrors]=useState({
          marketValue:"",
          squareFeet:"",
          pincode:"",
          buildingAge:"",
          effected:"",
          security:"",
          person:""
        });

      const onSubmit=(e)=>
      {
          const {name,value}=e.target;
          setValues({...values,[name]:value}); 
          e.preventDefault();

          

        

          // validation1
          if (name === "marketValue") {
            if (!regexmarketValue.test(value)) {
              setValidationErrors({ ...validationErrors, [name]: "Please enter the Value min 100000 and above only " });
            } else {
              setValidationErrors({ ...validationErrors, [name]: "" });
            }
          }

          // validation --2 :
          else if (name === "squareFeet") {
            if (!regexpropertyValues.test(value)) {
              setValidationErrors({ ...validationErrors, [name]: "Please enter the value Min 100 and above" });
            } else {
              setValidationErrors({ ...validationErrors, [name]: "" });
            }
          }

          // validation --3 :

          else if (name === "pincode") {
            if (!/^\d{6}$/.test(value)) {
              setValidationErrors({ ...validationErrors, [name]: "Please enter only integer values only without space." });
            } else {
              setValidationErrors({ ...validationErrors, [name]: "" });
            }
          }

          // validation -- 4 :
          else if (name === "buildingAge") {
            if (value === "1") {
              setValidationErrors({ ...validationErrors, [name]: "Please select any option " });
            } else {
              setValidationErrors({ ...validationErrors, [name]: "" });
            }
          }

          // // validation --- 5:
          //   else if(name === "effected"){
          //     if(value === "1"){
          //       setValidationErrors({...validationErrors,[name]:"please select any option."});
          //     }
          //     else {
          //       setValidationErrors({...validationErrors,[name]: ""});
          //     }
          //   }
            

            // // validation --- 6:
            // else if (name === "security"){
            //   if(value === "1"){
            //     setValidationErrors({...validationErrors,[name]:"pleas select any option. "});
            //   }
            //   else {
            //     setValidationErrors({...validationErrors,[name]:""});
            //   }
            // }

            // // validation --- 7:
            // else if (name === "person"){
            //   if(value === "1"){
            //     setValidationErrors({...validationErrors,[name]:" please select any option"})
            //   }
            //   else {
              
            //     setValidationErrors({...validationErrors,[name]:""});
            //   }
            // }

            // validation for floods :
            else if(name === "effected") 
            {
              if(value === "yes")
              {
                setState(true);
               setValues({...values,value:""}); 
              }
            }

            else if(name === "person")
            {
              if(value === "no" ){
                setState(true);
                setValues({...values,value:""}); 
              }
            }

      }

      const handleClick=(e)=>
  {
    if(regexmarketValue.test(values.marketValue) &&  regexpropertyValues.test(values.squareFeet) && integerRege6.test(values.pincode))
    {
        navigate("/getQuote",{state:{formValues : values}});
      }
    
  }


  return (
    <div>
          <div> <h2 className='text-center' style={mystyle}> PROPERTY DETAILS </h2></div>

          <form  onSubmit={handleClick} class='form-horizatol'  >

            <div className='container'>
            <h3 className='ms-3 my-4 container' style={mystyle1} >Strucure And Details : </h3>
            <div className=' row'>

            <div class="form-group ms-5" >
          <label class="control-label col-lg-4 col-md-4 col-sm-6 col-6" >Current MarketValue :</label><span className='ms-2' >
            <input type="text" name='marketValue' class="form-control" style={{borderRadius:'10px',borderColor:'cyan'}} required className='' value={values.marketValue}  onChange={onSubmit}  placeholder='MIN 100000RS/-'/>  {validationErrors.marketValue && <span className="text-danger">{validationErrors.marketValue}</span>}<br></br>
           </span>
          </div>

          <div class="form-group ms-5" >
          <label class="control-label col-lg-4 col-md-4 col-sm-6 col-6">Square Feet Of The Property :</label><span >
            <input type="text" name='squareFeet' class="form-control" style={{borderRadius:'10px',borderColor:'cyan'}} required className='m-2'  value={values.squareFeet} onChange={onSubmit}/>  {validationErrors.squareFeet && <span className="text-danger">{validationErrors.squareFeet}</span>} <br></br>
            </span>
            </div>

            <div class="form-group ms-5" >
            <label class="control-label col-lg-4 col-md-4 col-sm-6 col-6">Enter pin Code :</label><span >
            <input type="text" name='pincode'  class="form-control" style={{borderRadius:'10px',borderColor:'cyan'}} maxLength={6} required className='m-2'  value={values.pincode} onChange={onSubmit}/>  {validationErrors.pincode && <span className="text-danger">{validationErrors.pincode}</span>} <br></br>
          </span>
          </div>

          <div class="form-group ms-5" >
          <label class="control-label col-lg-4 col-md-4 col-sm-6 col-6"> Age Of The Building :</label> <span >
            <select id='age' required name='buildingAge'  style={{borderRadius:'10px',borderColor:'cyan'}} value={values.buildingAge} onChange={onSubmit} > 
              <option value="">none</option>
              <option value="0 to 5 Years" >0 to 5 Years</option>
              <option value="5 to 10 Years" >5 to 10 Years</option>
              <option value="10 to 15 Years" >10 to 15 Years</option>
              <option value="15 to 20 Years" >15 to 20 Years</option>
              <option value="20 to 25 Years" >20 to 25 Years</option>
            </select> 
            {validationErrors.buildingAge && <span className="text-danger">{validationErrors.buildingAge}</span>}
            </span>  <br></br>
          </div>

          <div class="form-group ms-5" >
          <label class="control-label col-lg-4 col-md-4 col-sm-6 col-12 my-3"> Has Your Property Effected With Floods in Last 5years :</label> <span >
           <select id='effect'  name='effected'  style={{borderRadius:'10px',borderColor:'cyan'}} required value={values.effected} onChange={onSubmit} > 
                <option value="">none</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
           </select>
           {validationErrors.effected && <span className="text-danger">{validationErrors.effected}</span>}
            </span>
          </div>

          <div className='container'>
          <h3 className='ms-3 mt-3' style={mystyle1} >Security Measurement Details:</h3>
        </div>

            </div>
            <div class="form-group ms-5" >
            <label className='ms-5 ' class="control-label col-lg-4 col-md-4 col-sm-6 col-6 my-4">24 by 7 security :</label> <span >
            <select id='security' name='security' style={{borderRadius:'10px',borderColor:'cyan'}} value={values.security} className='ms-3' onChange={onSubmit} required>      
                <option value="">none</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
           </select>
           {validationErrors.security && <span className="text-danger">{validationErrors.security}</span>}
           </span><br></br>
           </div>

 <div class="form-group ms-5" >

 <label className='ms-5' class="control-label col-lg-4 col-md-4 col-sm-6 col-6 mb-4" > Salaeried Person :</label><span >
            <select className='ms-4' id='person' style={{borderRadius:'10px',borderColor:'cyan'}} name='person' value={values.person} onChange={onSubmit} required>      
                 <option value="">none</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
           </select>
           {validationErrors.person && <span className="text-danger">{validationErrors.person}</span>}
            </span>

  </div>

            </div>
<div className='text-center'>
<button className='btn btn-outline-primary mt-5' > Proceed </button>
</div>
          </form>

             <div>
    <Modal show={showState} onHide={clickClose} className='text-center'>
                <Modal.Body>
                  <h4 className='mt-5'>As Per The Terms and Conditions Your Home insurance Rejected </h4>
                  <button className='btn btn-outline-primary my-5' onClick={clickClose}>Close</button>
                  </Modal.Body>
                
            </Modal>
    </div>

  
    </div>
  )
}