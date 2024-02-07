import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@hooks/authHooks';
import Input from '@components/Input';
import FormRowVertical from '@components/FormRowVertical';
import Button from '@components/Button';
import Form from '@components/Form';
import Heading from '@components/Heading';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleSignUp } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleSignUp(email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Heading as='h1'>Sign Up</Heading>
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
          <Button type='submit'>Sign Up</Button>
        </FormRowVertical>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </Form>
    </>
  );
};

export default SignUp;
