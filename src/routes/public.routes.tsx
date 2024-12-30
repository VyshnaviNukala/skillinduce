import Home  from '../pages/Home'; // Correct path to Home
import  About from '../pages/About'; // Correct path to About
import  Services  from '../pages/Services'; // Correct path to Services
import  Projects  from '../pages/Projects'; // Correct path to Projects
import  Training  from '../pages/Training'; // Correct path to Training
import  Careers  from '../pages/Careers'; // Correct path to Careers
import  Contact  from '../pages/Contact'; // Correct path to Contact
import  {ApplicationForm } from '../components/careers/ApplicationForm'; // Correct path to ApplicationForm

export const publicRoutes = [
  { path: '/', element: <Home />, protected: false },
  { path: '/about', element: <About />, protected: false },
  { path: '/services', element: <Services />, protected: false },
  { path: '/projects', element: <Projects />, protected: false },
  { path: '/training', element: <Training />, protected: false },
  { path: '/careers', element: <Careers />, protected: false },
  { path: '/application-form', element: <ApplicationForm />, protected: false },
  { path: '/contact', element: <Contact />, protected: false }
];