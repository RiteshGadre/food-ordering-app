

const Footer = () => {
  return (
    <div className="w-full bg-[#31363F] text-white px-3 py-3 flex justify-between flex-wrap">
      <div className="copyright">
        <h1>Food Villa</h1>
        <p>© 2024 Bundl Technologies Pvt. Ltd</p>
      </div>

      <div className="company">
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Team</li>
          <li>Food One</li>
          <li>Food Gennie</li>
        </ul>
      </div>

      <div className="contat">
        <ul>
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
      </div>

      <div className="legal">
        <ul>
          <li>Terms & conditions</li>
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
          <li>Investor Relations</li>
        </ul>
      </div>
      <div className="we-deliver-to">
        <ul>
          <li>Banglore</li>
          <li>Gurgaon</li>
          <li>Hyderabad</li>
          <li>Delhi</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
