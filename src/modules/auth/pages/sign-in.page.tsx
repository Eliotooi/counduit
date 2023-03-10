import { FC } from 'react'
import { Container } from '../../../common/components/container/container.components'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../../common/components/input/input.components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '../../../common/components/button/button.component'
import { toast } from 'react-toastify'
import { useAuth } from '../hooks/use-auth'

interface SignInPageProps {}

interface SignInFromValues {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
})

export const SignInPage: FC<SignInPageProps>=()=>{
  const {signIn} = useAuth()

  const { register, handleSubmit, formState } = useForm<SignInFromValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema)
  })
 
  const navigate = useNavigate()

  const onSubmit = async (values: SignInFromValues) =>{
    try{
      await signIn(values)
      navigate('/')
    }catch(e){
      toast.error('Somsing went wrong. Please, try again later')
    }
  }

  return(
    <Container>
      <h1 className='text-4xl text-center mb-3'>Sign in</h1>
      <p className='text-center mb-4'>
        <Link to='/sign-up'>Need an account?</Link>
      </p>
      <form 
        className='max-w-xl mx-auto flex flex-col gap-4' 
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <ul className='list-disc pl-10'>
          {(Object.keys(formState.errors) as(keyof  typeof formState.errors)[]).map((field)=>(
            <li 
              key={`error-${field}`}
              className='text-conduit-red font-bold '
            >
              {formState.errors[field]!.message}
            </li>
          ))}
        </ul>
        <Input 
          placeholder='Email' 
          type='email' 
          {...register('email')}
        />
        <Input 
        placeholder='Password' 
        type='password' 
        {...register('password')}
        />
        <div className='flex justify-end'>
          <Button 
            btnStyle='GREEN' 
            size='LG'
            type='submit'
            disabled={formState.isSubmitting}
          >
            Sign in
          </Button>
        </div>
      </form>
    </Container>
  )
}