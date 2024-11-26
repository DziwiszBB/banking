import React from "react"
import HeaderBox from "@/components/ui/HeaderBox"
import TotalBalanceBox from "@/components/ui/TotalBalanceBox"
import RightSideBar from "@/components/ui/RightSideBar"


const Home = () => {
  const loggedIn = {firstName: 'Pete', lastName: 'BB', email: 'contact@BB.pro'}
  return (
  <section className='home'>
    <div className="home-content">
      <header className="home-header">
       <HeaderBox
       type="greeting"
       title="Welcome"
       user={loggedIn?.firstName || 'Guest'}
      subtext="Acces and manage your account and transactions efficiently."/>
      
      <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}/>

      </header>
      TU BEDA RECENT TRANSACTIONS
    </div>
    <RightSideBar user={loggedIn}
    transactions={[]}
    banks={[
      { currentBalance: 780.5 } as Bank & Account,
      { currentBalance: 340.12 } as Bank & Account,
    ]}/>
  </section>
  )
}

export default Home
