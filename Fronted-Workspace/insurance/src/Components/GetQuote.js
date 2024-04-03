import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { regexEmail, regexMobileNo, regexPassword, regexUsername } from './RegularExpressions';
import PropertyInsuranceService from './Service/PropertyInsuranceService';




function GetQuote() 
{
  const location = useLocation();
  const { state } = location;
 
  



  const marketValue = state?.formValues?.marketValue ;

  const security=state?.formValues?.security ;

   const buildingAge = state?.formValues?.buildingAge;

   const squareFeet = state?.formValues?.squareFeet;
   const pincode = state?.formValues?.pincode;
   const person = state?.formValues?.person;
   const effected = state?.formValues?.effected;

  

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

  const [data,setData] = useState("");
  const [login,setLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showstate , setState] = useState(false);


  // useEffect(() => {
  //   const storedYear = sessionStorage.getItem('year');
  //   const storedPremium = sessionStorage.getItem('Premium');
  //   setYear(storedYear ? parseInt(storedYear, 10) : null);
  //   setPremium(storedPremium ? parseInt(storedPremium, 10) : null);
  // }, []);
  
  let startingCustomerId = parseInt(localStorage.getItem('customerId')) || 11110;

 
   const [feilds, setFeilds] = useState({
    name: '',
    mobileno: '',
    email: '',
    password: '',
    paymentId: '',
    customerId:"",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    mobileno: '',
    email: '',
    password: '',
  });

   const [values, setValues] = useState({
      mobileno: '',
      password: '',
      email: '',
    });
  
  const change=(e)=>
  {
        const {name,value}=e.target;
       setFeilds({...feilds,[name]:value});

       setValues({...values,[name]:value});

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
              setValidationErrors({ ...validationErrors, [name]: "password  1 uppercase letter, 1 special symbol and 1 digit minlength 8" });
            } else {
              setValidationErrors({ ...validationErrors, [name]: "" });
            }
          }

          sessionStorage.setItem(name, value);
  }

  useEffect(() => {
    // Retrieve feilds data from sessionStorage
    const storedName = sessionStorage.getItem('name');
    const storedMobileNo = sessionStorage.getItem('mobileno');
    const storedEmail = sessionStorage.getItem('email');
    const storedPassword = sessionStorage.getItem('password');

    // Update feilds state with sessionStorage data if available
    if (storedName) {
        setFeilds((prevFeilds) => ({ ...prevFeilds, name: storedName }));
    }
    if (storedMobileNo) {
        setFeilds((prevFeilds) => ({ ...prevFeilds, mobileno: storedMobileNo }));
    }
    if (storedEmail) {
        setFeilds((prevFeilds) => ({ ...prevFeilds, email: storedEmail }));
    }
    if (storedPassword) {
        setFeilds((prevFeilds) => ({ ...prevFeilds, password: storedPassword }));
    }
}, []);


var j = location.state?.i;
var i=0;
  const handleSignUp = () =>
   {

    if((year === 1 || year === 2 || year === 3 || year === 4 || year === 5 )&& i === 0 && j === undefined )
    {
      i++;
       console.log(i);
        setShowModal(true);
      }
        
      else if (j>0){

        if(year === 1 || year === 2 || year === 3 || year === 4 || year === 5 )
        {
          
        i=j;
         setShowModal(false);

          navigate("/fill", { state: { formData: feilds, premiumData: { year, Premium } ,  marketValue ,buildingAge , security , squareFeet ,pincode,person,effected,i,startingCustomerId} })
        }
        else {
          setState(true);
        }
      }
     
      else {
        setState(true);
      }
    
  };
  const [customer,setCustomer] = useState("");
  const [signUpDetails, setSignUpDetails] = useState([]);

  useEffect(() => {
    if (values.mobileno) {
      PropertyInsuranceService.getCustomerIdByMobileNo(values.mobileno)
        .then((res) => {
          setSignUpDetails(res.data);   
    });
  }
  });
  
  const signUpRows = signUpDetails.map((details) => (
    <tr key={details.id}>
     {details.email}
    </tr>
  ));
  const signUpRowsAsString = signUpRows.map(row => row.props.children); 
  values.email = signUpRowsAsString.join(', ');

  // console.log(feilds);
  const handleClose = () => setShowModal(false);
  const clickClose =()=> setState(false);
  const clickClosebutton =()=> setLogin(false);

  // navigating signup page :
  const navigate=useNavigate();

  const handleClick=(e)=>{

    e.preventDefault();
    
    console.log(i);


    if(regexUsername.test(feilds.name) && regexMobileNo.test(feilds.mobileno) && regexEmail.test(feilds.email) && regexPassword.test(feilds.password))
      {
       
      PropertyInsuranceService.checkMobileNumber(feilds.mobileno).then((res)=>{
        console.log(res.data);
        setData(res.data);
        
        if(data === "Mobile number is not exists")
     {
         i++;
   
        console.log(i);
        navigate("/fill", { state: { formData: feilds, premiumData: { year, Premium } ,  marketValue ,buildingAge , security , squareFeet ,pincode,person,effected,i,startingCustomerId} })
     
        console.log("feilds =>"+JSON.stringify(feilds));
        PropertyInsuranceService.createCustomer(feilds);

      }
      })

    
      
      }

  }

// i++;
  
  const handleClicksignup =(e)=>
      {
        e.preventDefault();
        
        async function performLogin(){
        
          const response = await PropertyInsuranceService.login(values);
          //console.log(response)
          const loginResponse = response.data; 
          //  setCustomer(loginResponse);
          console.log('Login Response:', loginResponse);
       
          i++;
            console.log(i);

          if (loginResponse === "Login successful!") 
          { 
         
            
            // setshowState(true);
            //  navigate("",{state:{values:values}})
        
            navigate("/fill", { state: { formData: values, premiumData: { year, Premium } ,  marketValue ,buildingAge , security , squareFeet ,pincode,person,effected,i,startingCustomerId} })
            
          } 
          else 
          {
            
             setCustomer(loginResponse);
          }
      }
      performLogin();
      }

  return (
    <div>
      <div className='container'>
        <h1 className='mt-4 text-center' style={{borderRadius:'15px',color:'blue',backgroundColor:'red' }}> Premium Details </h1>
        
      </div>
      <div >
        <h3 className='container  mt-4 mb-5' style={{textDecoration:'underline',color:'red',textDecorationColor:'black'}}>Select No Of Years :</h3>
        <div className='container'>
        <div className='d-flex ms-3' >
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
    {/* {i}{console.log(j)}{j}{startingCustomerId} */}
  {/* {values.email} */}
{/* {i}{j} */}
    <div className='container text-center my-5'>

      {/* <button className='btn btn-primary me-5'type='button' onClick={PreviewStep}>Edit</button> */}

      <button className='btn btn-primary 'type='button' onClick={handleSignUp}>Proceed</button>

    </div>
  
    <div>
    <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton  >
                    <Modal.Title ><h3 className='text-center'>Enter Your Details:</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>         
      <form onSubmit={handleClick}>
      <label htmlFor='name' className='form-label me-3' >FullName:</label>
        <input className='text-center my-3' type='text' name='name' maxLength={20} placeholder='FullName.....'  required value={feilds.name} style={{borderRadius:'10px',borderColor:'cyan'}}  onChange={change} /> {validationErrors.name && <h6 className="text-danger">{validationErrors.name}</h6>}   <br></br>

        <label htmlFor='mobile' className='form-label me-3'>MobileNo:</label>
        <input className='text-center my-3' type='text'  name='mobileno' placeholder='MobileNo.....' maxLength={10} value={feilds.mobileno} required style={{borderRadius:'10px',borderColor:'cyan'}} onChange={change} />  {validationErrors.mobileno && <h6 className="text-danger">{validationErrors.mobileno}</h6>}  <br></br>

        <label htmlFor='email' className='form-label me-5' >Email:</label>
        <input className='text-center my-3' type='text' name='email' placeholder='Email.......' required value={feilds.email}  style={{borderRadius:'10px',borderColor:'cyan'}} onChange={change} />  {validationErrors.email && <h6 className="text-danger">{validationErrors.email}</h6>}  <br></br>
        
        <label htmlFor='password' className='form-label me-3'> Password:</label>
        <input className='text-center my-3' type='password' name='password' placeholder='Password.....' required  value={feilds.password} style={{borderRadius:'10px',borderColor:'cyan'}} onChange={change}/>   {validationErrors.password && <h6 className="text-danger">{validationErrors.password}</h6>} <br></br>

        {data === "Mobile number exists" && <h5 style={{ color: 'red' }}>{data}</h5>}

        <input type='submit' value="SignUp" className='text-bg-primary mb-3' style={{border:'green',fontSize:'20px'}} ></input>
      
      </form>

      <div>
           <span className="login-link text-primary " style={{cursor:'pointer'}} onClick={() =>{
             setShowModal(false) ;
             setLogin(true);
             }}>switch to login...</span> 
      </div>


                </Modal.Body>
            </Modal>
    </div>

    <div>
            <Modal show={login} onHide={clickClosebutton} className='text-center' >
           <Modal.Header closeButton  >
                    <Modal.Title ><h3 className='text-center'>Enter Your Details:</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={handleClicksignup}>
                <div class="form-group mt-4">
      <label class="control-label col-lg-4 col-md-6 col-sm-6 col-12">Mobile No :</label>
      <input className='text-center my-3' type='text' name='mobileno' maxLength={10} style={{ borderRadius: '10px', borderColor: 'cyan' }}  placeholder='mobileno.... Ex: 7698888123.'  required value={values.mobileno} onChange={change} /> <br></br>
    </div>

    <div class="form-group mt-2">
      <label class="control-label col-lg-4 col-md-6 col-sm-6 col-12">Password :</label>
      <input className='text-center my-3' type='password' name='password' style={{ borderRadius: '10px', borderColor: 'cyan' }} placeholder='Password.... Ex: abc@123.' required onChange={change} /> <br></br>
    </div>
    <div class="d-flex justify-content-center w-100">

    {customer !== "Login successful!" && <h4 style={{ color: 'red' }}>{customer}</h4>}

    </div>

    <div>
      <button className='btn btn-primary text-center my-3 me-2'>Login</button>
      </div>
      <div>
           <span className="login-link text-primary my-3" style={{cursor:'pointer'}} onClick={() =>{
             setLogin(false);
             setShowModal(true) ;
             }}>switch to signup....</span> 
      </div>
  
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
