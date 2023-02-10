import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from '../03-forms/pages';



import logo from '../logo.svg';

export const Navigation = () => {
    
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to="/register" 
                            className={ ({isActive}) => isActive ? 'nav-active': '' }>Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-basic" 
                            className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-yup" 
                            className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-component" 
                            className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-abstractation" 
                            className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik Abstractations</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                {/* <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="/" element={<Home />} /> */}
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/formik-basic" element={ <FormikBasicPage />} />
                <Route path="/formik-yup" element={ <FormikYupPage /> } />
                <Route path="/formik-component" element={ <FormikComponents /> } />
                <Route path="/formik-abstractation" element={ <FormikAbstraction /> } />
                <Route path="/*" element={<Navigate to="/home" replace/> } />
            </Routes>

        </div>
    </BrowserRouter>
  )
}
