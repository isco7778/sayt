import React from 'react'
import "./Pages.css"
function Men() {
  return (
    <>
    <h1>Men's Sneakers and Activewear</h1>
    <p>Kickstart your fitness routine with the latest men's sneakers and activewear to help you realize your goals. From running shoes that <br />   energize your stride to workout clothes that keep you cool, dry and focused on your effort. Strength, cardio or skill focus, explore the best</p>
    <div className="main">
        <div className="card">
            <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/2d4ec1a64fa749fd8868307049af637f_9366/ADIZERO_EVO_SL_EXO_Shoes_Blue_KI4765_02_standard_hover.jpg" alt="" />
            <p>$150</p>
            <br />
            <h4>ADIZERO EVO SL EXO Shoes</h4>
            <h5>Man Performance</h5>
            <h6>5 colors</h6>
        </div>
        <div className="card">
            <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/36eb03640ad54e949b2840d1d75891b6_9366/SAMBA_OG_SHOES_Brown_IH6843_02_standard_hover.jpg" alt="" />
            <p>$110</p>
            <br />
            <h4>Samba OG Shoes</h4>
            <h5>Originals</h5>
            <h6>28 colors</h6>
        </div>
        <div className="card">
           <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/6dd922ee1daf493ea380b7c047e03821_9366/BW_Army_Shoes_White_JH7834_02_standard_hover.jpg" alt="" />
            <p>$120</p>
            <br />
            <h4>BW Army Shoes</h4>
            <h5>Originals</h5>
            <h6>8 colors</h6>
        </div>
        <div className="card">
           <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec595635a2994adea094a8bf0117ef1a_9366/Samba_OG_Shoes_White_B75806_02_standard_hover.jpg" alt="" />
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

export default Men