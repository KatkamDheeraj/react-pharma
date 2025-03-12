import React from 'react'

export default function Home() {
    const heading = {
        color: 'red'
      };
    const back = {
        backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/02/38/08/42/1000_F_238084232_5XhGUddDZezzJxybvVXzfPp8cOKAuqRp.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100vh',
        width: '100%',
        overflow: 'auto',
    };
    const image1 = {
        width:'250px',
        height:'auto',
          
    }
    const image2 = {
        width:'250px',
        height:'auto',      
    }
    const image3 = {
        width:'250px',
        height:'auto',      
    }
  return (
    <div className="class1" style={back}>
        <h1 style={heading} className='heading'>Welcome To Kohinoor Pharma</h1>
       <h3 className='class2'>phone: 9145986839</h3> 
       <a href="http://wa.me/919145986839" className='class3'>Click Here For Whatsapp</a>
       <a href="https://maps.app.goo.gl/mpEnhhWrkYbMHSaR8" className='loc'>Location</a>
       <p className='class4'>At Kohinoor Pharma, we pride ourselves on our commitment to customer satisfaction. Our team of professional pharmacists is always available to answer any questions you may have, whether you're online or offline, providing expert advice and personalized care. With our extensive range of products, you can trust that we have exactly what you need to maintain and improve your health.</p>
       <p className='class5'>"We are offering online and offline medicine delivery from our store! Imagine the convenience of having your prescriptions and health essentials brought straight to your doorstep, or the option to visit us in person for that personalized touch. No more waiting in long lines or making multiple trips to the pharmacy. Our seamless online ordering process ensures that you receive the medications you need with ease and efficiency.</p>
    
            {/* eslint-disable-next-line */}
    <img src="pic1.jpg" alt="Add Photo" style={image1} className='class6'></img>
    {/* eslint-disable-next-line */}
    <img src="pic3.jpg" alt="Add Photo" style={image2} className='class8'></img>
    {/* eslint-disable-next-line */}
    <img src="pic2.jpg" alt="Add Photo" style={image3} className='class7'></img>
    </div>
  )
}
