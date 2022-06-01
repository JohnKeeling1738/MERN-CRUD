import React from 'react'
import {Button} from '@mui/material'
import './Book.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"


const Book = (props) => {
    const history = useNavigate()
    const {_id,name,author,description,price} =props.book;
    const deleteHandler =async()=>{

        await axios
        .delete(`http://localhost:5000/books/${_id}`)
        .then((res)=>res.data)
        .then(()=>history("/"))
        .then(()=>history("/books"));
    }
  return (
    <div className='card'>
        <article>By {author}</article>
        <h3>{name}</h3>
        <price>{description}</price>
        <h2>Rs {price}</h2>
        <Button LinkComponent={Link} to ={`/books/${_id}`}>Update</Button>
        <Button onClick={deleteHandler}>Delete</Button>
    </div>
  )
}

export default Book