import React from 'react'
import { useNavigate } from 'react-router-dom';



function Header() {



      let navigate=useNavigate();
    const handleClick=()=>
    {
        navigate("/admin");
    }


  return (
    <div className='text-center' >
      <header >
      <div class="d-flex" style={{backgroundColor:'red'}}>

				<div className="ms-5 me-auto" >
        <img class="mx-3 py-2 " src={process.env.PUBLIC_URL+"/p6.jpeg"} alt="my pic" style={{width:'50px',height:'50px',borderRadius:'5px',cursor:'pointer'}}></img>
        <span className='col-3' style={{color:'blue',fontSize:'25px'}}>RamanaSoft Insurance Company</span>
				</div> 

				<div className="ms-auto me-5 ">
        <button style={{cursor:'pointer'}} className='btn btn-primary mt-2' onClick={handleClick}>Admin</button>
				</div> 

			</div>
			
       
      </header>
    </div>
  )
}

export default Header
