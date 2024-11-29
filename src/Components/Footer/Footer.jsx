import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer-section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div"
          >
            <h4>For Buisness</h4>
            <a href="/employee">
            Employee</a>
            <a href="/employee">
            Employee</a>
            <a href="/employee">
            Employee</a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="/resources"><p>Resourec Center</p></a>
            <a href="/resources"><p>Resourec Center</p></a>
            <a href="/resources"><p>Resourec Center</p></a>

          </div>

          <div className="sb_footer-links_div">
          <h4>Resources</h4>
          <a href="/resources"><p>Resourec Center</p></a>
          </div>

          <div className="sb_footer-links_div">
          <h4>Resources</h4>
          <a href="/resources"><p>Resourec Center</p></a>
          </div>
          <div className="sb_footer-links_div">
          <h4>Resources</h4>
          <a href="/resources"><p>Resourec Center</p></a>
          </div>
          <div className="sb_footer-links_div">
          <h4>Resources</h4>
          <a href="/resources"><p>Resourec Center</p></a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Comming Soon</h4>
            <div className="socialmedia">
              <p><img src="{fb}" alt="/" /></p>
              <p><img src="{twitter}" alt="/" /></p>
              <p><img src="{linkedin}" alt="/" /></p>
              <p><img src="{instagram}" alt="/" /></p>
            </div>
          </div>
        </div>

        <hr />
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()}  Copyright c 2024. All right reserved.</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/terms"><div><p>Privcy</p></div></a>
            <a href="/terms"><div><p>Security</p></div></a>
            <a href="/terms"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
