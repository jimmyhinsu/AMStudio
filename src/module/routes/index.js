import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../home";
import About from "../about";
import Team from "../team";
import Contact from "../contact";
import Testimonial from "../testimonial";
import Gallerygrid from "../gallerygrid";
import Mansory from "../mansory";
import Services from "../services";



const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/testimonial",
                element: <Testimonial />
            },
            {
                path: "/gallerygrid",
                element: <Gallerygrid />
            },
            {
                path: "/mansory",
                element: <Mansory />
            },
            {
                path: "/services",
                element: <Services />
            }
        ]
    }
])

export default router;