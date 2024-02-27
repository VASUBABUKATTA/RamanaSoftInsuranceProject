import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { integerRege, integerRege6 } from './RegularExpressions'

export default function StrucureAndDetails() {

  const mystyle=
  {
    color:'red',
    backgroundColor:'cyan', 
  }

  const mystyle1={
    color:'red',
    backgroundColor:'black',
    borderRadius:'10px',
  }

  const mystyle2={
    width:'80px',
    marginLeft:"675px",
  }

  const mystyle3={
    marginLeft:'200px',
width:'100%',

  }

  let navigate=useNavigate();


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

        

          // validation1
          if (name === "marketValue") {
            if (!/^\d+$/.test(value)) {
              setValidationErrors({ ...validationErrors, [name]: "Please enter only integer values only without space." });
            } else {
              setValidationErrors({ ...validationErrors, [name]: "" });
            }
          }

          // validation --2 :
          else if (name === "squareFeet") {
            if (!/^\d+$/.test(value)) {
              setValidationErrors({ ...validationErrors, [name]: "Please enter only integer values only without space." });
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
                alert("You Are Not Eligiable For Insurance");
               setValues({...values,value:""}); 
              }
            }

            else if(name === "person")
            {
              if(value === "no" ){
                alert("You Are Not Eligiable For Insurance");
                setValues({...values,value:""}); 
              }
            }

      }

      const handleClick=()=>
  {
    if(integerRege.test(values.marketValue) &&  integerRege.test(values.squareFeet) && integerRege6.test(values.pincode))
    {
      navigate("/getQuote",{state:{formValues : values}});
    }

    else if (integerRege.test(values.marketValue) >= 100000)
    {
      alert(" Current marketValue should have minimum 100000.Rs/- ");
    }
  }


  return (
    <div>
      <h2 className='text-center' style={mystyle}> PROPERTY DETAILS </h2>
        <div className='container' >
          <h3 className='ms-5 my-4 row' style={mystyle1} >Strucure And Details : </h3>
        </div>
        <form action=""  onSubmit={handleClick} >
<div className='mx-5 ' >
        <div className='col-4 ' style={mystyle3}><br></br>
            <label>Current MarketValue Of The Property :</label><span style={{marginLeft:'151px'}}>
            <input type="text" name='marketValue' required className='' value={values.marketValue}  onChange={onSubmit}  placeholder='MIN 100000RS/-'/>  {validationErrors.marketValue && <span className="text-danger">{validationErrors.marketValue}</span>}<br></br>
           </span>
            <label>Square Feet Of The Property :</label><span style={{marginLeft:'205px'}}>
            <input type="text" name='squareFeet' required className='m-2'  value={values.squareFeet} onChange={onSubmit}/>  {validationErrors.squareFeet && <span className="text-danger">{validationErrors.squareFeet}</span>} <br></br>
            </span>
            <label>Enter pin Code :</label><span style={{marginLeft:'300px'}}>
            <input type="text" name='pincode' required className='m-2'  value={values.pincode} onChange={onSubmit}/>  {validationErrors.pincode && <span className="text-danger">{validationErrors.pincode}</span>} <br></br>
          </span>
            <label> Age Of The Building :</label> <span style={{marginLeft:'265px'}}>
            <select id='age' required name='buildingAge' value={values.buildingAge} onChange={onSubmit} > 
              <option value="">none</option>
              <option value="0 to 5 Years" >0 to 5 Years</option>
              <option value="5 to 10 Years" >5 to 10 Years</option>
              <option value="10 to 15 Years" >10 to 15 Years</option>
              <option value="15 to 20 Years" >15 to 20 Years</option>
              <option value="20 to 25 Years" >20 to 25 Years</option>
            </select> 
            {validationErrors.buildingAge && <span className="text-danger">{validationErrors.buildingAge}</span>}
            </span>  <br></br>
            <label className='my-2'>Has Your Property Effected With Floods in Last 5years :</label> <span style={{marginLeft:'30px'}}>
           <select id='effect' required name='effected' value={values.effected} onChange={onSubmit} > 
                <option value="">none</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
           </select>
           {validationErrors.effected && <span className="text-danger">{validationErrors.effected}</span>}
            </span>
          </div>

  </div>

          <div className='container'>
          <h3 className='ms-5 mt-3' style={mystyle1} >Security Measurement Details:</h3>
        </div>
          <div className='container row '>
            <div  style={mystyle3}>
            <label className='ms-5 mt-4'>24 by 7 security :</label> <span style={{marginLeft:'275px'}}>
            <select id='security' name='security' value={values.security} className='ms-3' onChange={onSubmit} required>      
                <option value="">none</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
           </select>
           {validationErrors.security && <span className="text-danger">{validationErrors.security}</span>}
           </span><br></br>
            <label className='ms-5 mt-3' >Are You a Salaeried Person :</label><span style={{marginLeft:'194px'}}>
            <select className='ms-4' id='person' name='person' value={values.person} onChange={onSubmit} required>      
                 <option value="">none</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
           </select>
           {validationErrors.person && <span className="text-danger">{validationErrors.person}</span>}
            </span>
            </div>
            <button className='btn btn-outline-primary mt-5' style={mystyle2}  > Proceed </button>
          </div>
          </form>
    </div>
  )
}
