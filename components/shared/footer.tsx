import Image from 'next/image'
import {
  FaFacebookSquare,
  FaPinterest,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="company-socials flex max-md:flex-col gap-4 justify-between items-center my-4">
        <div className="company-logo">
          <Image
            src="/images/logo.svg"
            alt="Company logo"
            width={120}
            height={40}
          />
        </div>
        <div className="social-icons flex gap-4 text-gray-500 max-md:text-4xl! text-2xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <hr className="bg-gray-50" />
      <div className="company-links">
        <div>
          <h3>Our Company</h3>
          <ul>
            <li>How we Work</li>
            <li>Why Insure?</li>
            <li>View Plans</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div>
          <h3>Help Me</h3>
          <ul>
            <li>Faq</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Sales</li>
            <li>Support</li>
            <li>Live Chat</li>
          </ul>
        </div>
        <div>
          <h3>Others</h3>
          <ul>
            <li>Careers</li>
            <li>Press</li>
            <li>Licenses</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
