import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Login() {

    const mystyle=
    {
       height:'560px',
       width:'100%',
      //  border:'2px solid',
       padding:'0px',
    }

    const mystyle1=
    {
      float:'left',
        height:'580px',
        width:'70%',
        // border:'2px solid black',
    }

    const mystyle2=
    {
      disply:'inline',
      float:'right',
      height:'580px',
        width:'28%',
        // border:'2px solid black',

    }

    
      const content={
        textAlign:'justify',
        color:'',
        fontSize:'20px',
      }

      const mystyle3=
      {
          marginTop:'150px',
          marginLeft:'20px',
          marginRight:'50px',
          padding:'50px',
          textAlign:'center',
          border:'2px solid black',
          borderRadius:'10px',
          backgroundColor:'#12CBC4',
          boxShadow:'2px 2px 3px 1px',
      }
      
      const mystyle4=
    {
      float:'left',
        height:'600px',
        width:'70%',
        // border:'2px solid black',
    }

    const mystyle5=
    {
      disply:'inline',
      float:'right',
      height:'900px',
      width:'28%',
      // border:'2px solid black',
    }

    const image=
    {
      marginTop:'50px',
      width:'100%',
      height:'100%',
    }


    let navigate=useNavigate();

    const[credentials,setCredentials]=useState({
      username:"",
      password:""
    })

    const [validationErrors,setValidationErrors]=useState({
      username:"",
      password:""
    })

    const Handler=(e)=>
    {
      const name=e.target.name;
      const value=e.target.value;
      setCredentials({...credentials,[name]:value});

      // perform validatio :
      // validation ---1 :
      if(name === "username"){
        if(/[A-Za-z. ]{6,20}$/.test(value)){
          setValidationErrors({...validationErrors,[name]:"Please enter valid username "});
        } else {
          setValidationErrors({...validationErrors,[name]:""});
        }
      }

      // validation---2 :

      else if(name === "password"){
        if(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{10,30}$/.test(value)){
          setValidationErrors({...validationErrors,[name]:"password must have 1 uppercase, atleast 1 special symbol and atleast 1 digit"});
        }
        else {
          setValidationErrors({...validationErrors,[name]:""});
        }
      }
    }
    
    const HandleSubmit=()=>
    {
      if(credentials.username==="vasu" && credentials.password==="1955@1A")
      {
          navigate("/login");
      }
      else{
          alert("invalid credentials");
         }

    }

    const handleClick=()=>
    {
      navigate("/property");
    }

  return (
    <div>
      <div><Header/></div>
      <div className='background' style={mystyle}>
      <div style={mystyle1}>
            <div className='container text-center'>
            <button className='btn btn-primary ms-3 mt-5' onClick={handleClick} >PropertyInsuranceDetails</button>
            </div>
      </div>
      <div className='container' style={mystyle2}>
        
      <form  style={mystyle3}>
        <input className='text-center my-3' type='text' name='username' placeholder='Username.....' value={credentials.username} onChange={Handler} required/>  {validationErrors.username && <span className='text-danger'>{validationErrors.username}</span>}  <br></br>
        <input className='text-center my-3' type='password' name='password' placeholder='Password....' value={credentials.password} onChange={Handler} required/> {validationErrors.password && <span className='text-danger'>{validationErrors.password}</span>}   <br></br>
        <button className='btn btn-outline-primary w-100px text-center ' onClick={HandleSubmit}>Login</button>
      </form>

      </div>
      </div> 

        <div style={mystyle4} >
             <h3 style={{color:'red'}} className='m-4 ms-5'>About Property Insurance</h3>
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
      <li className='my-3'> <h5>Coverage Limits: </h5><p className='ms-5'style={{textAlign:'justify', fontSize:'20px',}}>These represent the maximum amount that an insurance policy will pay out in the event of a claim. Coverage limits should be based on the property's value and potential risks.</p></li>
      <li className='my-3'><h5>Deductibles:</h5> <p className='ms-5' style={{textAlign:'justify', fontSize:'20px',}}>The deductible is the amount the policyholder must pay out-of-pocket before the insurance coverage kicks in. Higher deductibles generally result in lower premiums but can increase the policyholder's financial burden in the event of a claim.</p></li>
      <li className='my-3'><h5>Policy Term: </h5><p className='ms-5' style={{textAlign:'justify', fontSize:'20px',}}>This is the duration of the insurance policy, typically ranging from one to several years, with the option to renew at the end of the term.</p></li>
    </ul>
    </div>

    <diV>
      <h3 className=' my-4 ms-5' style={{color:'red'}}>Property Insurance Types :</h3>
      <ul className='ms-5 '>
        <li className='my-3'>
          <h5>Homeowners Insurance:</h5>
          <p className='ms-5'style={{textAlign:'justify', fontSize:'20px',}}>This is the most common type of property insurance, providing coverage for single-family homes against a wide range of perils, such as fire, theft, and certain natural disasters.</p>
        </li >
        <li className='my-3'>
          <h5>Renters Insurance:</h5>
          <p className='ms-5'style={{textAlign:'justify', fontSize:'20px',}}>Designed for tenants, renters insurance covers the policyholder's personal property and liability within a rented property.</p>
        </li>
      </ul>
    </diV>
        </div>

        <div style={mystyle5}>
            <img src={process.env.PUBLIC_URL+"/p5.png"} alt="my pic" style={image} ></img>
        </div> 


    </div>
  )
}

export default Login
