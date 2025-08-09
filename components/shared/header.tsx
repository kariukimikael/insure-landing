'use client'
import { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
      <header>
        <div className="company-logo">
          <Image
            src="/images/logo.svg"
            alt="Company logo"
            width={100}
            height={50}
          />
        </div>
        <nav>
          {/* Desktop Menu */}
          <div className="desktop-menu">
            <ul>
              <li>How we work</li>
              <li>Blog</li>
              <li>Account</li>
            </ul>
            <Button>View Plans</Button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`mobile-menu hidden max-md:block ${
              isMenuOpen ? 'open' : 'close'
            }`}
          >
            <ul>
              <li>How we work</li>
              <li>Blog</li>
              <li>Account</li>
            </ul>
            <Button>View Plans</Button>
            <div className="nav-pattern">
              <Image
                src="images/bg-pattern-mobile-nav.svg"
                alt="Background Pattern"
                width={600}
                height={200}
                className="absolute left-0 bottom-[60px]"
              />
            </div>
          </div>
        </nav>

        <div className="toggle-button min-md:hidden">
          <Button onClick={toggleMenu} className="menu-toggle">
            {isMenuOpen ? (
              <Image
                src="images/icon-close.svg"
                alt="Close Menu"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src="images/icon-hamburger.svg"
                alt="Open Menu"
                width={30}
                height={30}
              />
            )}
          </Button>
        </div>
      </header>
  )
}

export default Header
