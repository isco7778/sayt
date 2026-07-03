import React from 'react'
import "./Pages.css"
function Sale() {
  return (
    <>
           <h1>Clothes & Shoes on Sale: Up to 40% Off</h1>
    <p>Explore popular sneakers and classic sportswear at our latest clothes and shoes sale. Gear up for the gym in workout shoes and clothes, or update your casual wardrobe with popular track jackets, hoodies and t-shirts for men, women and kids. We have sporty layers and</p>
    <div className="main">
        <div className="card">
            <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/d6fe67e346c2403e8751abd4b2568bd3_9366/Italy_26_Home_Fan_Jersey_Blue_JY7588_23_hover_model.jpg" alt="" />
            <p>$25</p>
            <br />
            <p>$50 original orice -50%</p>
            <h4>Italy 26 Home Fan Jersey</h4>
            <h5>Man Performance</h5>
            <h6>Rarely on Sale</h6>
        </div>
        <div className="card">
            <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/7599807b08b24719966db51358393b80_9366/Kaptir_4.0_Shoes_Beige_JR8480_02_standard_hover.jpg" alt="" />
            <p>$45</p>
            <br />
            <p>$90 original orice -50%</p>
            <h4>Kaptir 4.0 Shoes</h4>
            <h5>Originals</h5>
            <h6>8 colors</h6>
        </div>
        <div className="card">
           <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/38e8ab91d5664213adb1760c9590df12_9366/GAZELLE_BOLD_SHOES_Beige_IH4201_02_standard_hover.jpg" alt="" />
            <p>$96</p>
            <br />
            <p>$120 original orice -20%</p>
            <h4>Gazelle Bold Shoes</h4>
            <h5>Originals</h5>
            <h6>25 colors</h6>
        </div>
        <div className="card">
           <img className='img' src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/2d810b8a2aea4411bdf1bb3ac90f8289_9366/Lite_Racer_Adapt_7.0_Shoes_White_IE6326_02_standard_hover.jpg" alt="" />
            <p>$42</p>
            <br />
            <p>$70 original orice -40%</p>
            <h4>Lite Racer Adapt 7.0 Shoes</h4>
            <h5>Originals</h5>
            <h6>5 colors</h6>
        </div>
     
    </div>
    </>
  )
}

export default Sale