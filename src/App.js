import React from 'react'
import Header from './Components/HeaderComponent/Header'
import Navigation from './Components/NavigationComponent/Navigation'
import ProductsPurchase from './Components/ProductsPurchaseComponent/ProductsPurchase'
import PurchasePlanList from './Components/PurchasePlanListComponent/PurchasePlanList'
import './home.css'
const App = () => {

  return (
    <>
      <Header />
      <Navigation />
      <ProductsPurchase />
      <PurchasePlanList />
    </>
  )
}

export default App

