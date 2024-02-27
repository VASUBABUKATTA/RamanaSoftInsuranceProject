import React from 'react'
import { useNavigate } from 'react-router-dom';



function Header() {

    const mystyle={
        border:'2px solid black',
        height:'60px',
        width:'100%',
        fontColor:'red',
        borderRadius:'20px',
        fontSize:'30px',
        FontWeight:'10px',
        backgroundColor:'red',
        curser:'pointer',
    }
    const mystyle1={
        paddingRight:'20px',
        float:'right',
        curser:'pointer',
    }

    const image={
      width:'50px',
      height:'50px',
      borderRadius:'10px',
    }

      let navigate=useNavigate();
    const handleClick=()=>
    {
        navigate("/admin");
    }


  return (
    <div >
      <header className='m-2' style={mystyle}>
        <span style={{paddingLeft:'10px'}}> 
         <a href='#' style={{textDecoration:'none'}} className='ms-5 mt-2'>
          <img src={process.env.PUBLIC_URL+"/p4.jpeg"} alt="my pic" style={image}></img>RamanaSoft Insurance Company
        </a>
         </span>
        <button style={mystyle1} className='btn btn-primary mt-2 me-4' onClick={handleClick}>Admin</button>
      </header>
    </div>
  )
}

export default Header
