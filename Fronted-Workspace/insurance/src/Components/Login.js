import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { regexPassword, regexUsername } from './RegularExpressions'
import { Modal } from 'react-bootstrap'

function Login() {

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
          backgroundColor:'#12CBC4',
          boxShadow:'2px 2px 3px 1px',
      }
      
   

    const image=
    {
      marginTop:'50px',
      width:'100%',
      height:'100%',
    }

    

    let navigate=useNavigate();

    const [showstate , setState] = useState(false);

    const clickClose = ()=> setState(false);

    const [values, setValues] = useState({
      name: '',
      password: '',
    });
  
    const [validationErrors, setValidationErrors] = useState({
      name: '',
      password: '',
    });

   
  const change=(e)=>
  {
        const {name,value}=e.target;
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

          // validation for password :
          if(name === "password")
          {
            if(!regexPassword.test(value))
            {
              setValidationErrors({ ...validationErrors, [name]: "password minimum 8 charecters 1 upper speacial symbol and1 digit ex: AbcDefg@121" });
            } else {
              setValidationErrors({ ...validationErrors, [name]: "" });
            }
          }

  }
    

    

    const HandleSubmit=()=>
    {
      if(regexUsername.test(values.name) && regexPassword.test(values.password))
      {
        navigate("/login")
      }
      else 
      {
        alert("Invalid Username or Password ")
      }

    }

    const handleClick=()=>
    {
      navigate("/property");
    }


  return (
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
        <form   onSubmit={HandleSubmit}  class='form-inline 'style={mystyle3}  >

        <div class="form-group mt-4 " >
          <label class="control-label col-lg-4 col-md-6 col-sm-6 col-12 mx-auto">UserName :</label>
              <input className='text-center my-3' type='text' name='name'  style={{borderRadius:'10px',borderColor:'cyan'}} placeholder='Name.... Ex: abc .'  required value={values.name}   onChange={change} /> {validationErrors.name && <h6 className="text-danger">{validationErrors.name}</h6>}   <br></br>
        </div>

        <div class="form-group mt-2" >
          <label class="control-label col-lg-4 col-md-6 col-sm-6 col-12">Password :</label>
              <input className='text-center my-3' type='password' name='password'  style={{borderRadius:'10px',borderColor:'cyan'}} placeholder='Password.... Ex: AbcDefg@123.' required  onChange={change}/>   {validationErrors.password && <h6 className="text-danger">{validationErrors.password}</h6>} <br></br>
        </div>

              <button className='btn btn-primary w-100px text-center mt-3 mb-3'>Login</button>

        </form>
				</div> 
        </div>
				
			</div>
      
      <div class="container-fluid mt-5">
			
			<div class="row mt-5">
      <h3 style={{color:'red'}} class='mt-5 ms-5'>About Property Insurance</h3>
				<div class="col-lg-8 col-md-8  col-sm-8 col-12">
             
                <p style={content} className='ms-5'>
                Property insurance refers to a type of insurance coverage that protects against financial losses resulting from damage or loss of property.

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
            <img src={process.env.PUBLIC_URL+"/p5.png"} alt="my pic" style={image} ></img>
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
  
</div>



    {/* popup message : */}

    <div>
    <Modal show={showstate} onHide={clickClose} className='text-center'>
                <Modal.Body>
                  <h4> Invalid Username or Password  </h4>
                  <button className='btn btn-outline-primary' onClick={clickClose}>close</button>
                </Modal.Body>  
            </Modal>
    </div>



    </div>
  )
}

export default Login
