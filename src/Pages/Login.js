import { useFormik} from "formik"
import * as Yup from 'yup'
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import H1 from "../Components/H1"
import Input from "../Components/Input"

import { getUser } from "../API/User"

import { UserContext } from "../Context/User"

const Login = () =>{

    const navigate = useNavigate()

    const {setUser} = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            email: 'jean@gmail.com',
            password: 'JFred?99'
        },
        onSubmit: async value => {
            const dataUser = await getUser()
            setUser(dataUser.results[0])
            navigate('/Profile')
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('email required').email('invalid email'),
            password: Yup.string().required('password required').matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&?*])(?=.{8,})/,'the password must have at least one upper case, one lower case, one number and one special character'),
        }),
        validateOnChange:false
    })

    return(
        <>
            <H1>Login</H1>

            <form onSubmit={formik.handleSubmit}>

                <Input
                    type='email'
                    name='email'
                    placeholder='email...'
                    value={formik.values.email}
                    handleChange={formik.handleChange}
                    disabled={formik.isSubmitting}
                    error={formik.errors.email}
                />

                <Input
                    type='password'
                    name='password'
                    placeholder='password...'
                    value={formik.values.password}
                    handleChange={formik.handleChange}
                    disabled={formik.isSubmitting}
                    error={formik.errors.password}
                />

                
                <button type="submit" disabled={formik.isSubmitting}>Submit</button>
                
            </form>
                    
        </>
    )
}

export default Login

