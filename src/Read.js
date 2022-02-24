import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';

function Read() {
    const setData=(data)=>{
        let {id,firstname,lastname}=data;
        localStorage.setItem('ID',id);
        localStorage.setItem('First name',firstname);
        localStorage.setItem('Last name',lastname);
    }
    const getData=()=>{
        axios.get(`https://6213c04189fad53b1f002efa.mockapi.io/Users`)
        .then((getData)=>{
            setAPIdata(getData.data);
        })
    }

    const onDelete=(id)=>{
        axios.delete(`https://6213c04189fad53b1f002efa.mockapi.io/Users/${id}`)
        .then(()=>{
            getData();
        })
    }
    //we are using getdata for getting the data after deleting 

    const[APIdata,setAPIdata]=useState([]);
    //using axios get request which will get the data from the api
    useEffect(()=>{
        axios.get(`https://6213c04189fad53b1f002efa.mockapi.io/Users`)
        .then((response)=>{
            setAPIdata(response.data);
        })
    },[])
    
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {APIdata.map((data)=>{
                    return(
                        <tr>
                            <th scope="row">{data.id}</th>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <Link to='/Update'>
                            <td><button className="btn btn-primary" onClick={()=>setData(data)}>Update</button></td></Link>
                            <td><button className="btn btn-danger" onClick={()=>onDelete(data.id)}>Delete</button></td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}
export default Read
