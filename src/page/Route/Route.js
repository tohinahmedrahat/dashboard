import Application from "../Application/Application";
import Main from "../Main/Main";

const { createBrowserRouter } = require("react-router-dom");
const { default: Drawer } = require("../Drawer/Drawer");


const route = createBrowserRouter([
    {
        path:"/",
        element:<Drawer></Drawer>,
        children:[
            {
                path:"/",
                element: <Main></Main>,
                children:[
                    {
                        path:"/",
                        element: <h1>comming soon</h1>
                    },
                    {
                        path:"/application",
                        element: <Application></Application>
                    },
                    {
                        path:"/workflow",
                        element: <h1>comming soon</h1>
                    },
                    {
                        path:"/preview",
                        element: <h1>comming soon</h1>
                    },
                ]
            }
        ]
    }
])

export default route;