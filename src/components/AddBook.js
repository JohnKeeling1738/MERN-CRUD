import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        price: '',
        author:''
    })
    const [checked, setChecked] = useState(false)
    const handleChange = (e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    };

    const sendRequest = async()=>{
        await axios.post("https://mern-crud1738.herokuapp.com/books",{
            name:String(inputs.name),
            author:String(inputs.author),
            description:String(inputs.description),
            price:Number(inputs.price),
            available:Boolean(checked),
        }).then((res) => res.data);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs,checked);
        sendRequest().then(()=>history('/books'))
    }
  return (
      <form onSubmit={handleSubmit}>
          <Box 
          display = "flex" 
          flexDirection="column" 
          justifyContent={'center'} 
          maxWidth={700}
          alignItems={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={10}>
          <FormLabel>Name</FormLabel>
          <TextField 
          value = {inputs.name} 
          onChange ={handleChange}
          margin = "normal" 
          fullWidth variant='outlined' 
          name='name'/>
          <FormLabel>Author</FormLabel>
          <TextField
          value = {inputs.author} 
          onChange ={handleChange} 
          margin = "normal" fullWidth variant='outlined' name='author'/>
          <FormLabel>Description</FormLabel>
          <TextField 
          value = {inputs.description} 
          onChange ={handleChange}
          margin = "normal" fullWidth variant='outlined' name='description'/>
          <FormLabel>Price</FormLabel>
          <TextField
          value = {inputs.price} 
          onChange ={handleChange}
           type = "number"
           margin = "normal" 
           fullWidth variant='outlined' 
           name='price'/>           
            <FormControlLabel control={<Checkbox checked={checked} onChange ={()=>setChecked(!checked)} />} label="Available" />
          <Button variant = "contained" type= 'submit'>Add Book</Button>
          </Box>
      </form>
  )
}

export default AddBook