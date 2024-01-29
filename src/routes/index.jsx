import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LayoutHomePage from '../layout/layout_home_page'
import HomePage from '../pages/home.page'
import TestError from '../test_Error'
import LayoutStor from '../layout/layoutStor'
import FurnitureAndTools from '../pages/page_of_stor/pageOne'
import Kitchen_and_home_appliances from '../pages/page_of_stor/pageTwo'
import PageWomensFashion from '../pages/page_of_stor/pageThree'
import PageMensFashion from '../pages/page_of_stor/pageFour'
import PageChildrensFashion from '../pages/page_of_stor/pageFive'
import PageSupermarket from '../pages/page_of_stor/pageSex'
import PageToysAndChildrensProducts from '../pages/page_of_stor/pageSeven'
import PageComputersAndOfficeSupplies from '../pages/page_of_stor/pageNine'
import PageElectronicsAndTelevisions from '../pages/page_of_stor/pageEight'
import PageAccessoriesAndSmartPhones from '../pages/page_of_stor/pageTen'
import PageShoppingCar from '../pages/page.shoppingCar'

export  const routes = createBrowserRouter([
    {
        path:"/",
        element: <LayoutHomePage/>,
        errorElement: <TestError/>,
        children:[
            {
                path:"",
                element: <HomePage/>,

            }
        ]
    },

    {
        path:"/",
        element: <LayoutStor/>,
        errorElement: <TestError/>,
        children: [
        {
            path:"/FurnitureAndTools",
            element:<FurnitureAndTools/>
        
        },
        {
            path:"/Kitchen_and_home_appliances",
            element:<Kitchen_and_home_appliances/>
        
        },
        {
            path:"/PageWomensFashion",
            element:<PageWomensFashion/>
        },
        {
            path:"/PageMensFashion",
            element:<PageMensFashion/>
        },
        {
            path:"/PageChildrensFashion",
            element:<PageChildrensFashion/>
        },
        {
            path:"/PageSupermarket",
            element:<PageSupermarket/>
        },
        {
            path:"/PageToysAndChildrensProducts",
            element:<PageToysAndChildrensProducts/>
        },
        {
            path:"/pageElectronicsAndTelevisions",
            element:<PageElectronicsAndTelevisions/>
        },
        {
            path:"/PageComputersAndOfficeSupplies",
            element:<PageComputersAndOfficeSupplies/>
        },
        {
            path:"/PageAccessoriesAndSmartPhones",
            element: <PageAccessoriesAndSmartPhones/>
        },
        {
            path:"/pageShoppingCar",
            element: <PageShoppingCar/>
        }
                ]
    }

])
