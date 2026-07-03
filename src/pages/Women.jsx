import React from 'react'
import "./Pages.css"
function Women() {
  return (
    <>
     <h1>Women's Sneakers and Activewear</h1>
    <p>Stay focused on your fitness with the latest in women's sneakers and activewear to keep you looking and feeling your best. From workout <br /> clothes that keep you cool, dry and focused on your effort to lace running shoes that energize every stride, we have the trending training</p>
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
           <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbbb66a7abae47019b4e36fbaf872df7_9366/Samba_Jane_Shoes_Black_IH9207_HM4_hover.jpg" alt="" />
            <p>$100</p>
            <br />
            <h4>Samba OG Shoes</h4>
            <h5>Originals</h5>
            <h6>28 colors</h6>
        </div>
     
    </div>
    </>
  )
}

export default Women