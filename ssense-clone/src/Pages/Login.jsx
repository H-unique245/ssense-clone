import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Spacer, Text } from '@chakra-ui/layout'
import axios from "axios"
import React, { useState } from 'react'
import { Navigate } from 'react-router'
import Footer from '../Components/Footer'

function Login() {
    const [logUser,setLogUser]= useState({
        email: "",
        password: ""
    })

    const onChangeInput = (e) => {
        // console.log(e.target)
        const { name, value } = e.target;
        setLogUser({ ...logUser, [name]: value });
        // console.log("user",user)
      };
 
      const handleSubmit=(e)=>{
      e.preventDefault();
      axios
      .post("https://server-ssense-clone.onrender.com/login", logUser
        // email: user.email,
        // password: user.password,
      ).then((res)=>{
        setTimeout(() => {
            Navigate("/");
          }, 1000);
          setLogUser({
            email: "",
            password: "",
          });
        alert("login successfull")
        console.log(res)})
        .catch((err)=>{
            alert("Login Failed !!!")
          
            Navigate("/signup");
            console.log(err)})
      }

  return (
    <>
    <Box width="50%" m="auto 150px auto auto" pb="200px" pt="60px" >
        <Text fontSize="12px">LOGIN OR CREATE ACCOUNT</Text>
        <br></br>
    <FormControl>
        <FormLabel fontWeight="200" >Enter Email Address</FormLabel>
        <Spacer />
        <Input value={logUser.email}   onChange={(e) => {
                onChangeInput(e);
              }} height="30px"  borderRadius="0" borderColor="black" width="50%" name="email" type="email" placeholder='Enter Email ID'/>
        <Spacer/>
        <FormLabel htmlFor="Password" fontWeight="200"  >Password</FormLabel>
            <Input
             height="30px"
             borderRadius="0" borderColor="black" width="50%"
              type="password"
              name="password"
              focusBorderColor="RGBA(0, 0, 0, 0.64)"
              placeholder="Enter password"
              value={logUser.password}
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
            <Spacer />
        <Button
            mt={4}
            width="50%"
            backgroundColor='black'
            borderRadius="0"
            color="white"
            type='submit'
            onClick={(e) => {
                handleSubmit(e);
              }}
          >
            Continue
          </Button>

    </FormControl>  
     </Box>

     <Footer />
     </>
  )
}

export default Login
