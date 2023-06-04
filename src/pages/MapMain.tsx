import React from 'react'
const MapMain = () => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459241.6791316529!2d50.5875762!3d25.94095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e48524e6a47a211%3A0x2e9450e2dbda1046!2sBahrain!5e0!3m2!1sen!2sge!4v1684061351250!5m2!1sen!2sge"
        width="600"
        height="450"
        loading="lazy"
      />
    </div>
  )
}

export default MapMain
