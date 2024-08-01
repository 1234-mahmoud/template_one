import React from 'react'
import '../style/footer.css'
export default function Footer() {
  return (
    <div className='footer'>
      &copy; {new Date().getFullYear()} <span>Leon</span> All Right Reserved
    </div>
  )
}
