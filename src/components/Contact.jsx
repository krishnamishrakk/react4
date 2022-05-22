import React from 'react'

const Contact = () => {
  let name="@krishnamishra"
  return (
    <>
    <h1>Contact Us📲 </h1>
    <div className='cont' >
      <br />
      <br />
      <div>
          <br />
      📞   Phone Number: <a href="tel:+91-9294854345">+91 9294854345</a>
      <br />
      <br />
          📧 E-Mail: <a href="mailto : krishm9294@gmail.com">krishm9294@gmail.com</a>
      <br /><br />
    <img src="data:image/png;base64,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" width={"40vw"} alt="" id='im' />Twitter:<a href="https://www.twitter.com/Krishna19121204">twitter.com/Krishna19121204</a>
      <br />
<img src="https://akns-images.eonline.com/eol_images/Entire_Site/2016411/rs_600x600-160511133826-600_Instagram_NewLogo-.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top" width={"40vw"} alt="" id='im' />
      Instagram: <a href="https://www.instagram.com/krishna_mishra__kk/">instagram.com/krishna_mishra__kk</a><br />
      <br />
      
      </div>
     
     
      

    </div>
    <br /> <h3 >{name}</h3>
    </>
  )
}

export default Contact