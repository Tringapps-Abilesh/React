import React from 'react'
import { useForm } from 'react-hook-form'
import "./App.css"

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const handleRegistration = (data) => console.log(data)
  const handleError = (errors) => {}

  const registerOptions = {
    name: { required: 'Name is required'},
    email: { required: 'Email is required' },
    password: {
      required: 'Password is required',
      minLength: {
        value: 10,
        message: 'Password must have atleast 10 characters',
      },
    },
  }

  return (
    <div className='app'>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div>
          <label>Name</label>
          <input
            name='name'
            type='text'
            {...register('name', registerOptions.name)}
          />
          {errors?.name && errors.name.message}
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            {...register('email', registerOptions.email)}
          />
            {errors?.email && errors.email.message}
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            {...register('password', registerOptions.password)}
          />
            {errors?.password && errors.password.message}
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App
