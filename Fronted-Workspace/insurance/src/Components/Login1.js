import React from 'react'
import Header from './Header'

function Login1() {

   const mystyle={
        height:'500px',
        width:'70%',
        border:'2px solid black',
   }

   const mystyle1={
    float:'right',
    height:'500px',
    width:'30%',
    border:'2 px solid black',
   }

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='background'>
        <div className='row'>
        <div className='col-8' >

        </div>
        <div  className='col-4 mt-5 ms-5'>
        <form >
            <input className='text-center my-3' type='text' name='username' placeholder='Username.....'  required/><br></br>
            <input className='text-center my-3' type='password' name='password' placeholder='Password....'  required/><br></br>
            <button className='btn btn-outline-primary w-100px text-center ms-5' >Login</button>
        </form>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Login1
