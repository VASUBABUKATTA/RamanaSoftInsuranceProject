import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function GetQuote() 
{
  const location = useLocation();
  const { state } = location;


  const marketValue = state?.formValues?.marketValue ;
  const security=state?.formValues?.security;
  const buildingAge=state?.formValues?.buildingAge;



  const [Premium,setPremium]=useState();
  const [year,setYear]=useState();

  const caliculate1=()=>
  {
    if(buildingAge === "0 to 5 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.001)+100);
      setYear(1);
    }
    else {
      setPremium(Math.floor(marketValue*0.0012)+100);
      setYear(1);
    }
  }
  else if(buildingAge === "5 to 10 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.001)+70);
      setYear(1);
    }
    else {
      setPremium(Math.floor(marketValue*0.0012)+70);
      setYear(1);
    }
  }

  else if(buildingAge === "10 to 15 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.001)+60);
      setYear(1);
    }
    else {
      setPremium(Math.floor(marketValue*0.0012)+60);
      setYear(1);
    }
  }

  else if(buildingAge === "15 to 20 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.001)+50);
      setYear(1);
    }
    else {
      setPremium(Math.floor(marketValue*0.0012)+50);
      setYear(1);
    }
  }

  else if(buildingAge === "20 to 25 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.001)+20);
      setYear(1);
    }
    else {
      setPremium(Math.floor(marketValue*0.0012)+20);
      setYear(1);
    }
  }

}
  const caliculate2=()=>
  {
    if(buildingAge === "0 to 5 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0008)+100);
      setYear(2);
    }
    else {
      setPremium(Math.floor(marketValue*0.0009)+100);
      setYear(2);
    }
  }
  else if(buildingAge === "5 to 10 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.008)+70);
      setYear(2);
    }
    else {
      setPremium(Math.floor(marketValue*0.0009)+70);
      setYear(2);
    }
  }

  else if(buildingAge === "10 to 15 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0008)+60);
      setYear(2);
    }
    else {
      setPremium(Math.floor(marketValue*0.0009)+60);
      setYear(2);
    }
  }

  else if(buildingAge === "15 to 20 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0008)+50);
      setYear(2);
    }
    else {
      setPremium(Math.floor(marketValue*0.0009)+50);
      setYear(2);
    }
  }

  else if(buildingAge === "20 to 25 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0008)+20);
      setYear(2);
    }
    else {
      setPremium(Math.floor(marketValue*0.0009)+20);
      setYear(2);
    }
  }
  }
  
  const caliculate3=()=>
  {
    if(buildingAge === "0 to 5 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0007)+100);
      setYear(3);
    }
    else {
      setPremium(Math.floor(marketValue*0.0008)+100);
      setYear(3);
    }
  }
  else if(buildingAge === "5 to 10 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0007)+70);
      setYear(3);
    }
    else {
      setPremium(Math.floor(marketValue*0.0008)+70);
      setYear(3);
    }
  }

  else if(buildingAge === "10 to 15 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0007)+60);
      setYear(3);
    }
    else {
      setPremium(Math.floor(marketValue*0.0008)+60);
      setYear(3);
    }
  }

  else if(buildingAge === "15 to 20 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0007)+50);
      setYear(3);
    }
    else {
      setPremium(Math.floor(marketValue*0.0008)+50);
      setYear(3);
    }
  }

  else if(buildingAge === "20 to 25 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0007)+20);
      setYear(3);
    }
    else {
      setPremium(Math.floor(marketValue*0.0008)+20);
      setYear(3);
    }
  }
    
  }
  
  const caliculate4=()=>
  {
    if(buildingAge === "0 to 5 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0006)+100);
      setYear(4);
    }
    else {
      setPremium(Math.floor(marketValue*0.0007)+100);
      setYear(4);
    }
  }
  else if(buildingAge === "5 to 10 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0006)+70);
      setYear(4);
    }
    else {
      setPremium(Math.floor(marketValue*0.0007)+70);
      setYear(4);
    }
  }

  else if(buildingAge === "10 to 15 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0006)+60);
      setYear(4);
    }
    else {
      setPremium(Math.floor(marketValue*0.0007)+60);
      setYear(4);
    }
  }

  else if(buildingAge === "15 to 20 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0006)+50);
      setYear(4);
    }
    else {
      setPremium(Math.floor(marketValue*0.0007)+50);
      setYear(4);
    }
  }

  else if(buildingAge === "20 to 25 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0006)+20);
      setYear(4);
    }
    else {
      setPremium(Math.floor(marketValue*0.0007)+20);
      setYear(4);
    }
  }
      
  }

  const caliculate5=()=>
  {
    if(buildingAge === "0 to 5 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0004)+100);
      setYear(5);
    }
    else {
      setPremium(Math.floor(marketValue*0.0005)+100);
      setYear(5);
    }
  }
  else if(buildingAge === "5 to 10 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0004)+70);
      setYear(5);
    }
    else {
      setPremium(Math.floor(marketValue*0.0005)+70);
      setYear(5);
    }
  }

  else if(buildingAge === "10 to 15 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0004)+60);
      setYear(5);
    }
    else {
      setPremium(Math.floor(marketValue*0.0005)+60);
      setYear(5);
    }
  }

  else if(buildingAge === "15 to 20 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0004)+50);
      setYear(5);
    }
    else {
      setPremium(Math.floor(marketValue*0.0005)+50);
      setYear(5);
    }
  }

  else if(buildingAge === "20 to 25 Years")
    {
    if(security === "yes")
    {
      setPremium(Math.floor(marketValue*0.0004)+20);
      setYear(5);
    }
    else {
      setPremium(Math.floor(marketValue*0.0005)+20);
      setYear(5);
    }
  }
  }


  


  return (
    <div>
      <div className='container'>
        <h1 className='mt-4 text-center text-bg-primary' style={{borderRadius:'15px'}}> Premium Details </h1>
        {/* <h3 className='mt-2 mx-5 p-2 text-center '> Your Property Value :  {marketValue} </h3> */}
      </div>
      <div>
        
        <div className='mb-3 mt-5' >
        <button className='btn btn-primary ' style={{marginRight:'100px',marginLeft:'100px'}}  onClick={caliculate1}>1 Year </button>
        <button className='btn btn-success ' style={{marginRight:'100px',marginLeft:'100px'}}  onClick={caliculate2}>2 Years </button>
        <button className='btn btn-danger '  style={{marginRight:'100px',marginLeft:'100px'}} onClick={caliculate3}>3 Years </button>
        <button className='btn btn-warning ' style={{marginRight:'100px',marginLeft:'100px'}}  onClick={caliculate4}>4 Years </button>
        <button className='btn btn-info '    style={{marginRight:'100px',marginLeft:'100px'}}  onClick={caliculate5}>5 Years </button>
        </div>

      </div>

    <div className='container my-5'>
      <table className='text-center table table-striped table-bordered' >
          <thead>
            <tr>

              <th>Age Of The Building</th>
              <th>Property Value </th>
              <th>Security</th>
              <th>Years</th>
              <th>Premium Amount</th>
           
            </tr>
          </thead>
          <tbody>
            <tr>
  
              <td>{buildingAge}</td>
              <td>{marketValue}</td>
              <td>{security}</td>
              <td>{year}</td>
              <td>{Premium}</td>
              
            </tr>
          </tbody>
      </table>
    </div>

      

    </div>
  );
}

export default GetQuote;
