import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { regexEmail, regexMobileNo, regexPassword, regexUsername } from './RegularExpressions';



function GetQuote() 
{
  const location = useLocation();
  const { state } = location;
 


  const marketValue = state?.formValues?.marketValue ;

  const security=state?.formValues?.security;

   const buildingAge = state?.formValues?.buildingAge;

   const squareFeet = state?.formValues?.squareFeet;

  

  // const [value,setValue]=useState();
  const [Premium,setPremium]=useState();
  const [year,setYear]=useState();
  

  const caliculate1=()=>
  {
    setYear(1);
    if(security === "yes")
    {
      let baseRate = 0.001;
    
    if(buildingAge === "0 to 5 Years") 
     {baseRate-=0.0001;}
    
  else if(buildingAge === "5 to 10 Years")  
  {baseRate-=0.0002;}
    

  else if(buildingAge === "10 to 15 Years")
  {baseRate-=0.0003;}
   
  else if(buildingAge === "15 to 20 Years")
  {baseRate-=0.0004;}

  else if(buildingAge === "20 to 25 Years")
  {baseRate-=0.0005;}

  setPremium(Math.floor((marketValue*baseRate)*10));
  // setValue(marketValue);
  console.log(baseRate);
    }
    else {
      let baseRate = 0.002;
    
    if(buildingAge === "0 to 5 Years") 
     {baseRate-=0.0001;}
    
  else if(buildingAge === "5 to 10 Years")  
  {baseRate-=0.0002;}
    

  else if(buildingAge === "10 to 15 Years")
  {baseRate-=0.0003;}
   
  else if(buildingAge === "15 to 20 Years")
  {baseRate-=0.0004;}

  else if(buildingAge === "20 to 25 Years")
  {baseRate-=0.0005;}

  setPremium(Math.floor((marketValue*baseRate)*10));
  // setValue(marketValue);
  console.log(baseRate);
    }
}
  const caliculate2=()=>
  {
    setYear(2);

    if(security === "yes")
    {
      let baseRate = 0.001;
    
    if(buildingAge === "0 to 5 Years") 
     {baseRate-=0.0001;}
    
  else if(buildingAge === "5 to 10 Years")  
  {baseRate-=0.0002;}
    

  else if(buildingAge === "10 to 15 Years")
  {baseRate-=0.0003;}
   
  else if(buildingAge === "15 to 20 Years")
  {baseRate-=0.0004;}

  else if(buildingAge === "20 to 25 Years")
  {baseRate-=0.0005;}

  setPremium(Math.floor((marketValue*baseRate)*10)*2-100);
  // setValue(marketValue);
  console.log(baseRate);
    }
    else {
      let baseRate = 0.002;
    
    if(buildingAge === "0 to 5 Years") 
     {baseRate-=0.0001;}
    
  else if(buildingAge === "5 to 10 Years")  
  {baseRate-=0.0002;}
    

  else if(buildingAge === "10 to 15 Years")
  {baseRate-=0.0003;}
   
  else if(buildingAge === "15 to 20 Years")
  {baseRate-=0.0004;}

  else if(buildingAge === "20 to 25 Years")
  {baseRate-=0.0005;}

  setPremium(Math.floor((marketValue*baseRate)*10)*2-100);
  // setValue(marketValue);
  console.log(baseRate);
    
      }
    
  }
  
  const caliculate3=()=>
  {
    setYear(3);
    
    if(security === "yes")
    {
      let baseRate = 0.001;
    
    if(buildingAge === "0 to 5 Years") 
     {baseRate-=0.0001;}
    
  else if(buildingAge === "5 to 10 Years")  
  {baseRate-=0.0002;}
    

  else if(buildingAge === "10 to 15 Years")
  {baseRate-=0.0003;}
   
  else if(buildingAge === "15 to 20 Years")
  {baseRate-=0.0004;}

  else if(buildingAge === "20 to 25 Years")
  {baseRate-=0.0005;}

  setPremium(Math.floor((marketValue*baseRate)*10)*3-200);
  // setValue(marketValue);
  console.log(baseRate);
    }
    else {
      let baseRate = 0.002;
    
    if(buildingAge === "0 to 5 Years") 
     {baseRate-=0.0001;}
    
  else if(buildingAge === "5 to 10 Years")  
  {baseRate-=0.0002;}
    

  else if(buildingAge === "10 to 15 Years")
  {baseRate-=0.0003;}
   
  else if(buildingAge === "15 to 20 Years")
  {baseRate-=0.0004;}

  else if(buildingAge === "20 to 25 Years")
  {baseRate-=0.0005;}

  setPremium(Math.floor((marketValue*baseRate)*10)*3-200);
  // setValue(marketValue);
  console.log(baseRate);
    
  }
  }
  
  const caliculate4=()=>
  {
    setYear(4);
    
    if(security === "yes")
    {
      let baseRate = 0.001;
    
    if(buildingAge === "0 to 5 Years") 
     {baseRate-=0.0001;}
    
  else if(buildingAge === "5 to 10 Years")  
  {baseRate-=0.0002;}
    

  else if(buildingAge === "10 to 15 Years")
  {baseRate-=0.0003;}
   
  else if(buildingAge === "15 to 20 Years")
  {baseRate-=0.0004;}

  else if(buildingAge === "20 to 25 Years")
  {baseRate-=0.0005;}

  setPremium(Math.floor((marketValue*baseRate)*10)*4-300);
  // setValue(marketValue);
  console.log(baseRate);
    }
    else {
      let baseRate = 0.002;
    
    if(buildingAge === "0 to 5 Years") 
     {baseRate-=0.0001;}
    
  else if(buildingAge === "5 to 10 Years")  
  {baseRate-=0.0002;}
    

  else if(buildingAge === "10 to 15 Years")
  {baseRate-=0.0003;}
   
  else if(buildingAge === "15 to 20 Years")
  {baseRate-=0.0004;}

  else if(buildingAge === "20 to 25 Years")
  {baseRate-=0.0005;}

  setPremium(Math.floor((marketValue*baseRate)*10)*4-300);
  // setValue(marketValue);
  console.log(baseRate);

  }
  }

  const caliculate5=()=>
  {
    setYear(5);
    
    if(security === "yes")
    {
      let baseRate = 0.001;
    
    if(buildingAge === "0 to 5 Years") 
     {baseRate-=0.0001;}
    
  else if(buildingAge === "5 to 10 Years")  
  {baseRate-=0.0002;}
    

  else if(buildingAge === "10 to 15 Years")
  {baseRate-=0.0003;}
   
  else if(buildingAge === "15 to 20 Years")
  {baseRate-=0.0004;}

  else if(buildingAge === "20 to 25 Years")
  {baseRate-=0.0005;}

  setPremium(Math.floor((marketValue*baseRate)*10)*5-400);
  // setValue(marketValue);
  console.log(baseRate);
    }
    else {
      let baseRate = 0.002;
    
    if(buildingAge === "0 to 5 Years") 
     {baseRate-=0.0001;}
    
  else if(buildingAge === "5 to 10 Years")  
  {baseRate-=0.0002;}
    

  else if(buildingAge === "10 to 15 Years")
  {baseRate-=0.0003;}
   
  else if(buildingAge === "15 to 20 Years")
  {baseRate-=0.0004;}

  else if(buildingAge === "20 to 25 Years")
  {baseRate-=0.0005;}

  setPremium(Math.floor((marketValue*baseRate)*10)*5-400);
  // setValue(marketValue);
  console.log(baseRate);

    }
  }

  

  const [showModal, setShowModal] = useState(false);
  const [showstate , setState] = useState(false);

  const handleClose = () => setShowModal(false);
  const clickClose =()=> setState(false);

  const handleSignUp = () => {
    if(year === 1 || year === 2 || year === 3 || year === 4 || year === 5)
    {
      setShowModal(true);
    }
      else{
        setState(true);
      }
  };

  

   const [feilds, setFeilds] = useState({
    name: '',
    mobileno: '',
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    mobileno: '',
    email: '',
    password: '',
  });

  const change=(e)=>
  {
        const {name,value}=e.target;
       setFeilds({...feilds,[name]:value});

        // validation name:
        if(name === "name"){
          if(!regexUsername.test(value))
          {
            setValidationErrors({ ...validationErrors, [name]: "UserName must be 3 or more charecters ex: abc" });
          } else {
            setValidationErrors({ ...validationErrors, [name]: "" });
          }
        }

        // validation for mobile no :
        if(name === "mobileno"){
          if(!regexMobileNo.test(value))
          {
            setValidationErrors({ ...validationErrors, [name]: "Phone must start with 6,7,8,9 series with  10 digits" });
          } else {
            setValidationErrors({ ...validationErrors, [name]: "" });
          }
          }

          // validation for email :
          if(name === "email"){
            if(!regexEmail.test(value))
            {
              setValidationErrors({ ...validationErrors, [name]: "Please enter valid email ex: example@gmail.com" });
            } else {
              setValidationErrors({ ...validationErrors, [name]: "" });
            }
          }

          // validation for password :
          if(name === "password")
          {
            if(!regexPassword.test(value))
            {
              setValidationErrors({ ...validationErrors, [name]: "password minimum 8 charectersand should have 1 uppercase letter, 1 special symbol and 1 digit ex: abcdDe@121" });
            } else {
              setValidationErrors({ ...validationErrors, [name]: "" });
            }
          }

  }

 

  // navigating signup page :
  const navigate=useNavigate();

  const handleClick=()=>{

    if(regexUsername.test(feilds.name) && regexMobileNo.test(feilds.mobileno) && regexEmail.test(feilds.email) && regexPassword.test(feilds.password))
      {
        navigate("/fill", { state: { formData: feilds, premiumData: { year, Premium } ,  marketValue ,buildingAge , security , squareFeet } })
      }
  }


  return (
    <div>
      <div className='container'>
        <h1 className='mt-4 text-center' style={{borderRadius:'15px',color:'blue',backgroundColor:'red' }}> Premium Details </h1>
        {/* <h3 className='mt-2 mx-5 p-2 text-center '> Your Property Value :  {marketValue} </h3> */}
      </div>
      <div >
        <h3 className='container  mt-4 mb-5' style={{textDecoration:'underline',color:'red',textDecorationColor:'black'}}>Select No Of Years :</h3>
        <div className='container'>
        <div className='d-flex' >
          <div className='mx-auto ' >
        <button className='btn btn-outline-primary  '  onClick={caliculate1} >1 Year </button>
        </div>
        <div className='mx-auto ' >
        <button className='btn btn-outline-success '   onClick={caliculate2}>2 Years </button>
        </div>
        <div className='mx-auto ' >
        <button className='btn btn-outline-danger '     onClick={caliculate3}>3 Years </button>
        </div>
        <div className='mx-auto ' >
        <button className='btn btn-outline-warning '   onClick={caliculate4}>4 Years </button>
        </div>
        <div className='mx-auto ' >
        <button className='btn btn-outline-info '      onClick={caliculate5}>5 Years </button>
        </div>
        </div>
      </div>
      </div>
   
    <div className='container my-5'>
      <table className='text-center table table-striped table-bordered' >
          <thead>
            <tr>
            <th>Property Value </th>
            <th>SquareFeet</th>
              <th>Age Of The Building</th>
              <th>Security</th>
              <th>No Of Years</th>
              <th>Premium Amount</th>
           
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{marketValue}</td>
              <td>{squareFeet}</td>
              <td>{buildingAge}</td>
              <td>{security}</td>
              <td>{year}</td>
              <td>{Premium}</td>
              
            </tr>
          </tbody>
      </table>
    </div>
    
    <div className='container text-center my-5'>

      <button className='btn btn-primary'type='button' onClick={handleSignUp}>Proceed</button>

    </div>

    <div>
    <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton  >
                    <Modal.Title ><h3 className='text-center'>Enter Your Details:</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>         
      <form onSubmit={handleClick}>
      <label htmlFor='name' className='form-label me-3' >FullName:</label>
        <input className='text-center my-3' type='text' name='name' placeholder='FullName.....'  required value={feilds.name} style={{borderRadius:'10px',borderColor:'cyan'}}  onChange={change} /> {validationErrors.name && <h6 className="text-danger">{validationErrors.name}</h6>}   <br></br>

        <label htmlFor='mobile' className='form-label me-3'>MobileNo:</label>
        <input className='text-center my-3' type='text'  name='mobileno' placeholder='MobileNo.....' maxLength={10} value={feilds.mobileno} required style={{borderRadius:'10px',borderColor:'cyan'}} onChange={change} />  {validationErrors.mobileno && <h6 className="text-danger">{validationErrors.mobileno}</h6>}  <br></br>

        <label htmlFor='email' className='form-label me-5' >Email:</label>
        <input className='text-center my-3' type='text' name='email' placeholder='Email.......' required value={feilds.email}  style={{borderRadius:'10px',borderColor:'cyan'}} onChange={change} />  {validationErrors.email && <h6 className="text-danger">{validationErrors.email}</h6>}  <br></br>
        
        <label htmlFor='password' className='form-label me-3'> Password:</label>
        <input className='text-center my-3' type='password' name='password' placeholder='Password.....' required  value={feilds.password} style={{borderRadius:'10px',borderColor:'cyan'}} onChange={change}/>   {validationErrors.password && <h6 className="text-danger">{validationErrors.password}</h6>} <br></br>

        <input type='submit' value="SignUp" className='text-bg-primary' style={{border:'green',fontSize:'20px'}} ></input>
        
      </form>
                </Modal.Body>
            </Modal>
    </div>

    <div>
           <Modal show={showstate} onHide={clickClose} className='text-center' >
                <Modal.Body>
                  <h4 className='mt-5'>Please Select Any one Of The Year Premium</h4>
                  <button className='btn btn-outline-primary my-5' onClick={clickClose} >Close</button>
                </Modal.Body>
               
            </Modal>
    </div>

    </div>
  );
}

export default GetQuote;
