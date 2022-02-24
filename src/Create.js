import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Create() {
    let navigate=useNavigate();
    const[firstname,setFirstname]=useState('');
    const[lastname,setLastname]=useState('');
    //we use axios to send post request which will create the data
    const postdata=()=>{
        axios.post(`https://6213c04189fad53b1f002efa.mockapi.io/Users`,
        {
            firstname,
            lastname
        }).then(()=>{
            navigate('/Read')
        })
    }
    //after creating when we click submit it will redirect to read,we are setting this this using usenavigate
    return(
        <form className='main-form' onSubmit={(e)=>e.preventDefault()}>
        <div className="mb-3">
            <label for="firstname">Firstname</label>
          <input type="text" className="form-control" id="firstname" placeholder='Firstname'
          onChange={(e)=>setFirstname(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label for="lastname">Lastname</label>
          <input type="text" className="form-control" id="lastname" placeholder='Lastname'
          onChange={(e)=>setLastname(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary submit" onClick={postdata}>Submit</button>
      </form>
    )}

export default Create