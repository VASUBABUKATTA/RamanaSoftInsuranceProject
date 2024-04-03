import Header from './Header'
import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import p5 from '../Components/images/p5.png'
import PropertyInsuranceService from './Service/PropertyInsuranceService'
import { Modal } from 'react-bootstrap'
import {GoogleLogin} from 'react-google-login';


const clientId = "246541673533-e90kj0pumgndrmt51j27v853d3pkon00.apps.googleusercontent.com";


function Login() {
  // var i = 0 ;

  const [showState , setshowState] = useState(false);
  const clickClose =()=> {
    setshowState(false) ;
    window.location.reload();
  }

  const [userData, setUserData] = useState(null);

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
   // i++;
    // navigate("/login",{state:{i}}) 
    setshowState(true);
    setUserData(res.profileObj);
    console.log(userData);
  }
    const onFailure = (res) => {
     console.log("LOGIN FAILED! res: ", res);
    
  }

    const mystyle=
    {
       height:'450px',
       width:'100%',
      //  border:'2px solid',
       padding:'0px',
    }


    
      const content={
        textAlign:'justify',
        color:'',
        fontSize:'17px',
      }

      const mystyle3=
      {
          border:'2px solid black',
          borderRadius:'10px',
          backgroundColor: '#12CBC4',
          boxShadow:'2px 2px 3px 1px',
          diplay:'flex'
      }
      
   

    const image=
    {
      marginTop:'50px',
      width:'100%',
      height:'100%',
    }

    const footer={
      height:'45px',
     marginTop:'10px',
      borderRadius:'10px',
      backgroundColor:' black',
  	textAlign: 'center',
  	color: 'white',
  	lineHeight: '38px',
    }

    let navigate=useNavigate();

    
    const [values, setValues] = useState({
      mobileno: '',
      password: '',
    });
  
   


    const change=(e)=>
    {
          const {name,value}=e.target;
          setValues({...values,[name]:value});
  
    }
  
    const [data,setData]=useState();
   


    // console.log(data);

    const HandleSubmit=(e)=>
    {
      e.preventDefault();
      console.log("values =>"+JSON.stringify(values));

      async function performLogin(){
      
        const response = await PropertyInsuranceService.login(values);
        //console.log(response)
        const loginResponse = response.data; 
        // setData( loginResponse);
        console.log('Login Response:', loginResponse);
        // i++;
        if (loginResponse === "Login successful!") 
        { 
          
          // setshowState(true);
           navigate("/login",{state:{values:values}}) 
        } 
        else 
        {
          setData( loginResponse);
        }
    }
    performLogin();
      
      //  window.location.reload();
    }

    const handleClick=()=>
    {
      navigate("/property");
    }
   


    return (
      <div>
        <div className='background ' >
    
          {/* Header */}
    <div>
    <div style={{position:'fixed',width:'100%'}}><Header/></div>
    </div>
    
    <div style={mystyle}>
    <div class=" container row text-center" >
                    <div class="col-lg-8 col-md-6  col-sm-6 col-5 my-auto">
            <div className='text-center'>
                <button className='btn btn-primary mx-3 mt-5' onClick={handleClick} >PropertyInsurance</button>
                </div>
                    </div> 
                    <div class="col-lg-4 col-md-6 col-sm-6 col-7 mt-5 text-center"  >
              
              <div style={{marginTop:'100px'}} >
              <div style={mystyle3}>
  <form onSubmit={HandleSubmit} class='form-inline'>
    <div class="form-group mt-4 mx-auto">
      <label class="control-label col-lg-4 col-md-6 col-sm-6 col-12">Mobile No :</label>
      <input className='text-center my-3' type='text' name='mobileno' maxLength={10} style={{ borderRadius: '10px', borderColor: 'cyan' }}  placeholder='mobileno.... Ex: 7698888123.'  required value={values.mobileno} onChange={change} /> <br></br>
    </div>

    <div class="form-group mt-2 mx-auto">
      <label class="control-label col-lg-4 col-md-6 col-sm-6 col-12">Password :</label>
      <input className='text-center my-3' type='password' name='password' style={{ borderRadius: '10px', borderColor: 'cyan' }} placeholder='Password.... Ex: abc@123.' required onChange={change} /> <br></br>
    </div>

    <div>
      {data !== "Login successful!" && <h4 style={{ color: 'red' }}>{data}</h4>}
    </div>

    <div class="d-flex justify-content-center w-100">
      <button className='btn btn-primary text-center my-3 me-2'>Login</button>
      <div id="signInButton" className='my-3 ms-2'>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          issignedIn={true}
        />
      </div>
    </div>
  </form>
</div>


            
           
                    </div> 
            </div>
                    
                </div>

   <div>        
          
          <div class="container-fluid mt-5">
                
                <div class="row mt-5">
          <h3 style={{color:'red'}} class='mt-5 ms-5'>About Property Insurance</h3>
                    <div class="col-lg-8 col-md-8  col-sm-8 col-12">
                 
                    <p style={content} className='ms-5'>
                    &nbsp; &nbsp; &nbsp; &nbsp; Property insurance refers to a type of insurance coverage that protects against financial losses resulting from damage or loss of property.
    
    It provides financial protection for residential, commercial, or industrial properties against perils such as fire, theft, vandalism, natural disasters, and other covered events.
    
    Property insurance policies typically cover the physical structure of the property, as well as the contents inside.
    
    This insurance is essential for property owners as it safeguards their valuable investments and provides financial security in the event of unforeseen damage or loss.
    
    Property insurance not only covers repair or replacement costs but also helps protect against liability claims arising from property-related accidents or injuries.
    
    By having property insurance, individuals and businesses can mitigate risks, minimize financial burdens, and have peace of mind knowing that their property is protected.
    </p>
    
    
    <h3 className=' my-4 ms-5' style={{color:'red'}}>Key Components of Property Insurance Policies:</h3>
        <div>
        <ul className='ms-5 '>
          <li className='my-3'> <h5>Coverage Limits: </h5><p className='ms-5'style={{textAlign:'justify', fontSize:'15px',}}>These represent the maximum amount that an insurance policy will pay out in the event of a claim. Coverage limits should be based on the property's value and potential risks.</p></li>
          <li className='my-3'><h5>Deductibles:</h5> <p className='ms-5' style={{textAlign:'justify', fontSize:'15px',}}>The deductible is the amount the policyholder must pay out-of-pocket before the insurance coverage kicks in. Higher deductibles generally result in lower premiums but can increase the policyholder's financial burden in the event of a claim.</p></li>
          <li className='my-3'><h5>Policy Term: </h5><p className='ms-5' style={{textAlign:'justify', fontSize:'15px',}}>This is the duration of the insurance policy, typically ranging from one to several years, with the option to renew at the end of the term.</p></li>
        </ul>
        </div>
    
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-4 col-12 mt-5">
            <div  className=''>
                <img src={p5} alt="my pic" style={image} ></img>
            </div> 
                    </div> 
    
            <diV>
          <h3 className=' my-4 ms-5' style={{color:'red'}}>Property Insurance Types :</h3>
          <ul className='ms-5 '>
            <li className='my-3'>
              <h5>Homeowners Insurance:</h5>
              <p className='ms-5'style={{textAlign:'justify', fontSize:'15px',}}>This is the most common type of property insurance, providing coverage for single-family homes against a wide range of perils, such as fire, theft, and certain natural disasters.</p>
            </li >
            <li className='my-3'>
              <h5>Renters Insurance:</h5>
              <p className='ms-5'style={{textAlign:'justify', fontSize:'15px',}}>Designed for tenants, renters insurance covers the policyholder's personal property and liability within a rented property.</p>
            </li>
          </ul>
        </diV>        
         </div>
        
            </div>	
            <div>
        	<footer style={footer}>
       <span style={{fontSize:'20px'}} >All Right Reserved 2024 &copy;RamanaSoft Insurance Company </span>
        </footer>
     	 </div>
      
    </div>
   </div>

   </div>  
 <div>


   
   </div>
   
   <Modal show={showState} onHide={clickClose} className='text-center'>
                <Modal.Body>
                  <h4 className='mt-5'> <h1 className='text-primary'>Login Successful</h1> </h4>
                  <button className='btn btn-outline-primary my-5' onClick={clickClose}>Close</button>
                  </Modal.Body>
                
            </Modal>

    </div>
  )
}

export default Login
