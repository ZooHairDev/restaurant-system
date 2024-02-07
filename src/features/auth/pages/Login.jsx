import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@hooks/authHooks';

import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';
import Heading from '@components/Heading';
import FormRowVertical from '@components/FormRowVertical';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Heading as='h1'>Login</Heading>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label='Email address'>
          <Input
            type='text'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
        </FormRowVertical>
        <FormRowVertical label='Password'>
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button type='submit'>Login</Button>
        </FormRowVertical>
        <p>
          Don&apos;t have an account? <Link to='/signup'>Sign up</Link>
        </p>
      </Form>
    </>
  );
};

export default Login;
