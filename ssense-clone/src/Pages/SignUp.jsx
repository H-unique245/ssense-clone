import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spacer,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const SignUp = () => {
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    // console.log(e.target)
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleRegister = e => {
    e.preventDefault();
    axios
      .post('https://server-ssense-clone.onrender.com/user', user)
      .then(res => {
        console.log(setUser);
        setTimeout(() => {
          Navigate('/login');
        }, 3000);
        setUser({
          email: '',
          password: '',
        });
        alert('Signup Successfull !!!');
      })
      .catch(e => {
        console.log('e', e);

        alert('Please Enter 8 Digit Password');
      });
  };
  return (
    <>
      <Box width="50%" m="auto 150px auto auto" pb="120px" pt="60px">
        <Text fontSize="12px" m="1rem">
          {' '}
          CREATE AN ACCOUNT
        </Text>

        <FormControl>
          {/* Email...................... */}
          <FormLabel htmlFor="email" fontSize="14px" fontWeight="200">
            Email
          </FormLabel>
          <Input
            value={user.email}
            onChange={e => {
              handleChange(e);
            }}
            height="30px"
            borderRadius="0"
            borderColor="black"
            width="60%"
            name="email"
            type="email"
            placeholder="Enter Email ID"
          />
          <Spacer />
          {/* Password ................................ */}
          <br></br>
          <FormLabel htmlFor="text" fontSize="14px" fontWeight="200">
            Password
          </FormLabel>
          <Input
            height="30px"
            borderRadius="0"
            borderColor="black"
            width="60%"
            type="password"
            name="password"
            focusBorderColor="RGBA(0, 0, 0, 0.64)"
            placeholder="Enter password"
            value={user.password}
            onChange={e => {
              handleChange(e);
            }}
          />
          <Spacer />

          <Button
            mt={4}
            width="60%"
            backgroundColor="black"
            borderRadius="0"
            color="white"
            type="submit"
            onClick={e => {
              handleRegister(e);
            }}
          >
            Continue
          </Button>
        </FormControl>
        <Box
          w="60%"
          mt="2rem"
          mb="2rem"
          fontSize="11px"
          lineHeight="18px"
          fontWeight="400"
          fontFamily="sans-serif"
        >
          <Text as="p">
            When you create an SSENSE account, we collect your email and other
            personal data to enhance your shopping experience and, subject to
            your agreement, to provide you with exclusive email updates,
            promotions and notifications. We may also use third party search
            engines and social media platforms to deliver our updates,
            promotions and notifications to you.
          </Text>
          <Spacer />
          <Text as="p">You may unsubscribe at any time.</Text>
          <Spacer />
          <Text as="p">
            {' '}
            To find out more, please visit our Privacy Policy.
          </Text>
        </Box>
      </Box>
    </>
  );
};
export default SignUp;
