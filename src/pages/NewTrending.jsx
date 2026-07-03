import React from 'react'
import "./Pages.css"
function NewTrending() {
  return (
    <>
     <h1>New Arrivals: Shoes, Clothing & More</h1>
    <p>Get a fresh start with new shoes and new clothes at adidas. Be the first to catch the latest arrivals in all the trending colors and styles.</p>
    <div className="main">
        <div className="card">
            <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a996b7ef21640218d52a6ac149827e2_9366/SAMBA_OG_X_LIBERTY_LONDON_SHOES_White_IH6978_01_02_hover_standard.jpg" alt="" />
            <p>$150</p>
            <br />
            <h4>ADIZERO EVO SL EXO Shoes</h4>
            <h5>Man Performance</h5>
            <h6>5 colors</h6>
        </div>
        <div className="card">
            <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/d2752ce688794cd5b1644593c41527fc_9366/Samba_Jane_Shoes_White_JR1402_02_standard_hover.jpg" alt="" />
            <p>$110</p>
            <br />
            <h4>Samba OG Shoes</h4>
            <h5>Originals</h5>
            <h6>28 colors</h6>
        </div>
        <div className="card">
           <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/0f183f7b034147fc9dfb9bbabbe10a8f_9366/SAMBA_OG_SHOES_White_IH6628_02_standard_hover.jpg" alt="" />
            <p>$120</p>
            <br />
            <h4>BW Army Shoes</h4>
            <h5>Originals</h5>
            <h6>8 colors</h6>
        </div>
        <div className="card">
           <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/94a2b80eb1b943a787bf7737ba21243d_9366/HYPERBOOST_EDGE_Running_Shoes_White_KI1911_02_standard_hover.jpg" alt="" />
            <p>$200</p>
            <br />
            <h4> HYPERBOOST EDGE Running Shoes </h4>
            <h5>Men Performance</h5>
            <h6>2 colors</h6>
        </div>
     
    </div>
    </>
  )
}

export default NewTrending