/* eslint-disable import/first */
import React,{ lazy,Suspense } from "react"

const MagendDrawer = lazy(() => import('./components/drawer/managed-drawer')) 
const Layout = lazy(() => import("./components/layout/layout")) 
const Search = lazy(() => import("./components/search/search")) 
const MagendModal = lazy(() => import("./components/modal/fcModal"))
 


const App: React.FC = () => {

  
  return (
    <>
      <Suspense fallback={<></>}>
          <Layout />
          <Search />
          <MagendDrawer />
          <MagendModal />
      </Suspense>
    </>
  );
}

export default App;
