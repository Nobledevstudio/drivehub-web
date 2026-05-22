import AuthLayout from "../../components/auth/AuthLayout"
import AuthLeft from "../../components/auth/AuthLeft"
import LoginForm from "../../components/auth/LoginForm"

const Login :React.FC = () => {
  return (
    <div>
        <AuthLayout
         left={<AuthLeft 
            title="Welcome Back to"
            description="Sign in to continue to your account and explore premium car listings."
            />}
         right={<LoginForm/>}
         />
    </div>
  )
}

export default Login