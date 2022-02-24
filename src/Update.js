import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function Update(){
    let navigate=useNavigate(); //using usenavigate to navigate to other pages
    const [id,setID]=useState(null);
    useEffect(()=>{
        //we useeffect hook to get data we previously stored in local storage
        setID(localStorage.getItem('ID'));
        setFirstname(localStorage.getItem('First name'));
        setLastname(localStorage.getItem('Last name'));
    },[]);
    const[firstname,setFirstname]=useState('');
    const[lastname,setLastname]=useState('');

    const updateAPIdata=()=>{
        //using axios to sned a put request that will update the data
        //we pass the id to the endpoint,this allows to update the field 
        axios.put(`https://6213c04189fad53b1f002efa.mockapi.io/Users/${id}`,{
            firstname,
            lastname
        }).then(()=>{
            navigate('/Read')
        })
    }

    return(
      //when we submit we are setting as preventdafult to not refresh the whole page 
        <form className='main-form' onSubmit={(e)=>e.preventDefault()}> 
        <div className="mb-3">
            <label for="firstname">Firstname</label>
          <input type="text" className="form-control" id="firstname" placeholder='Firstname'
          value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label for="lastname">Lastname</label>
          <input type="text" className="form-control" id="lastname" placeholder='Lastname'
          value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
        </div>
        <button type="submit" onClick={updateAPIdata} className="btn btn-primary submit1">Submit</button>
      </form>
    )
}