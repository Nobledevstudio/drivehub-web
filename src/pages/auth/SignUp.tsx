import AuthLayout from "../../components/auth/AuthLayout"
import AuthLeft from "../../components/auth/AuthLeft"
import SignUpForm from "../../components/auth/SignUpForm"

const SignUp = () => {
  return (
    <div>
        <AuthLayout
         left={<AuthLeft 
            title="Create Your"
            text="account"
            description="Join our community and start exploring the best car deals."
            />}
         right={<SignUpForm/>}
         />
    </div>
  )
}

export default SignUp