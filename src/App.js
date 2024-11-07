import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';


export default class App extends Component {
 
  render() {
    return (
      <div>
       <Navbar/>
       <marquee behavior="scroll" direction="left" scrollamount="5">
  📰 <strong>Top News:</strong>
  
  **Stolen Cheese Headed to Russia?** A supplier claims stolen £300,000 cheddar may be on its way to Russia. Business based on trust. |
  
  **LEGO Shop Briefly Hijacked by Crypto Scam** No, LEGO isn't going crypto. But you might want to change your password! |
  
  **Learner Drivers Buying Scam Tests for £200** DVSA reports learner drivers are paying £200 for fake tests as waiting times soar. |
  
  **Meta Revives Face Scanning to Fight Scams** Facebook and Instagram are testing facial recognition tools to restore hacked accounts. |
  
  **900 Million Views of Scammy Ads on Facebook** Scammy ads flooded Facebook and Instagram with 900 million views. Concerns rise. |
  
  **Fake NHS Dentist Site Scams Desperate Patients** Bogus NHS site scams users by collecting sensitive info like passport numbers. |
  
  **Fake AI Halloween Parade Listing Causes Confusion** An SEO agency owner claims it was a mistake after an AI-made Halloween event misled revelers in Dublin. |
  
  **Google’s New Alliance to Outsmart Scams** Google teams up with anti-scam groups to create a data hub for tackling online fraud. |
  
  **FCC Rejects Trump’s Call to Revoke CBS License** FCC stands firm, rejecting Trump’s request to revoke CBS license over edited Harris interview. |
  
  **Google Messages Boosts Scam Detection** Google Messages enhances its spam detection to help users avoid tricky scams.
</marquee>

       <News/>
      
       <Footer/>
      </div>
    )
  }
}

