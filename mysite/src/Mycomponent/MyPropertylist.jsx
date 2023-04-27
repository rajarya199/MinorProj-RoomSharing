import React from 'react'
import picI from '/src/images/roomin.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MyPropertylist = ({item}) => {
  const handledelete = async () => {
    try {
      const res = await axios.delete('http://localhost:5000/api/properties/' +item._id)
      window.location.reload(true);
    } catch (err) {}
  }
  return (
    <div>
 <div className=" col-lg-3 card mt-3 mb-3  bs" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={`/uploads/${item.img[0]}`} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">{item.category} for rent in {item.province}</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price: {item.price}</li>
          <li className="list-group-item">Location: {item.district}</li>
          <li className="list-group-item">Property Type: {item.category}</li>
        </div>
        <Link to={`/property/${item._id}`}  className="btn btn-success  mb-1 ">View </Link>
        <div className='row '>
        <Link to={`/BookingDetails/${item._id}`} className="btn btn-success mt-1 mb-1 " style={{width:'168px',marginLeft:'14px'}}>Bookings </Link>
        <button onClick={handledelete} type="button" className="btn btn-danger  mt-1 mb-1" style={{width:'168px',marginLeft:'5px'}}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default MyPropertylist
