import React from 'react'
import "./Pages.css"
function KIds() {
  return (
    <>
    
     <h1>Kids' Shoes and Clothes</h1>
    <p>Kids love to run and play. Explore our latest collection of kids' shoes and clothes to support busy kids. From everyday hoodies and tees to <br /> kids' gym clothes that keep them on the move indoors and out, we have the trending styles and technologies to keep kids smiling from</p>
    <div className="main">
        <div className="card">
            <img className='img' src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f08113e137154ad1b560b175943b5eac_9366/FIFA_World_Cup_26tm_Historical_Pro_Ball_Set_Multicolor_KB1812_HM1.jpg" alt="" />
            <p>$2500</p>
            <br />
            <h4>FIFA World Cup 26™ Historical Pro Ball Set</h4>
            <h5> Performance</h5>
            
        </div>
        <div className="card">
            <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2564db734674535a463385a27124493_9366/FIFA_World_Cup_26tm_Trionda_Pro_Ball_White_JD8021_HM3_hover.jpg" alt="" />
            <p>$170</p>
            <br />
            <h4>FIFA World Cup 26™ Trionda Pro Ball</h4>
            <h5>Performance</h5>
            <h6>Best Seller</h6>
        </div>
        <div className="card">
           <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/02497fa31ace4fc6910b662ec8d08705_9366/FIFA_World_Cup_26tm_Trionda_Competition_Ball_White_JD8031_01_03_hover_standard.jpg" alt="" />
            <p>$65</p>
            <br />
            <h4>FIFA World Cup 26™ Trionda Pro Ball</h4>
            <h5>Performance</h5>
            <h6>Best Seller</h6>
        </div>
        <div className="card">
           <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/95953c2379d140dfa3f9cdad323a8621_9366/SAMBA_OG_SHOES_Green_JP9512_02_standard_hover.jpg" alt="" />
            <p>$70</p>
            <br />
            <h4>Samba OG Shoes</h4>
            <h5> Kids Originals</h5>
            <h6>2 colors</h6>
        </div>
     
    </div>
    </>
  )
}

export default KIds