import { Navigate } from 'react-router-dom'
import Welcome from '../components/Welcome/Welcome'
import Login from '../components/Login/Login'
import Test from '../components/test/test'

const routes = [
    {
        path: '/welcome',
        element: <Welcome/>,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/test',
        element: <Test/>,
    },
    {
        path: '/',
        element: <Navigate to="/welcome" />,
    },
]

export default routes