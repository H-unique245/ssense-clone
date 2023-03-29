import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Spacer, Text } from '@chakra-ui/layout';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Login() {
  const [logUser, setLogUser] = useState({
    email: '',
    password: '',
  });
  const navigate= useNavigate();

  const onChangeInput = e => {
    const { name, value } = e.target;
    setLogUser({ ...logUser, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      let res = await axios.post('https://server-ssense-clone.onrender.com/login', logUser)

      // console.log("res", res.data)
        if(res.status===200){
          alert('Login Successfull !!!');
          localStorage.setItem("Ssense-mail", JSON.stringify(logUser.email))
              navigate("/");
        }
        else if(res.data=== "Email already exists"){
          alert(res.data);
        }
          setLogUser({
            email: '',
            password: '',
          });
  
      }
      catch(err){
        setLogUser({
          email: '',
          password: '',
        });
        alert(`${err.message}\nKindly check details once again!!`);
    }
  };

  return (
    <>
      <Box width="50%" m="auto 150px auto auto" pb="200px" pt="60px">
        <Text fontSize="12px">LOGIN OR <Text as='span' textDecoration={'underline'} _hover={{color:'blue'}} > <Link to="/signup"> CREATE ACCOUNT </Link> </Text></Text>
        <br></br>
        <FormControl>
          <FormLabel fontWeight="200">Enter Email Address</FormLabel>
          <Spacer />
          <Input
            value={logUser.email}
            onChange={e => {
              onChangeInput(e);
            }}
            height="30px"
            borderRadius="0"
            borderColor="black"
            width="50%"
            name="email"
            type="email"
            placeholder="Enter Email ID"
          />
          <Spacer />
          <FormLabel htmlFor="Password" fontWeight="200">
            Password
          </FormLabel>
          <Input
            height="30px"
            borderRadius="0"
            borderColor="black"
            width="50%"
            type="password"
            name="password"
            focusBorderColor="RGBA(0, 0, 0, 0.64)"
            placeholder="Enter password"
            value={logUser.password}
            onChange={e => {
              onChangeInput(e);
            }}
          />
          <Spacer />
          <Button
            mt={4}
            width="50%"
            backgroundColor="black"
            borderRadius="0"
            color="white"
            type="submit"
            onClick={e => {
              handleSubmit(e);
            }}
          >
            Continue
          </Button>
        </FormControl>
      </Box>
    </>
  );
}

export default Login;
