import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <main className="mt-12 overflow-x-hidden">
      <section className="hero-section">
        <div className="mobile-image">
          <img src="images/image-intro-mobile.jpg" alt="image intro" />
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-patterns_overlay">
            <div className="left-bg_pattern"></div>
            <div className="right-bg_pattern"></div>
          </div>
          <div className="text-wrapper">
            <div className="line"></div>
            <h1>
              Humanizing <br /> your insurance
            </h1>
            <p>
              Get your life insurance coverage easier and faster. We blend our
              expertise <br className="max-md:hidden" /> and technology to help
              you find the plan that&apos;s right for you. Ensure you{' '}
              <br className="max-md:hidden" /> and your loved ones are protected
            </p>
            <Button>View Plans</Button>
          </div>
          <div className="image-wrapper">
            <img src="images/image-intro-desktop.jpg" alt="image intro" />
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="line"></div>
        <h2>We&apos;re different</h2>
        <div className="features-wrapper">
          <div className="feature-card">
            <img src="images/icon-snappy-process.svg" alt="snappy process" />
            <h3>Snappy Process</h3>
            <p>
              Our application process can be completed in minutes, not hours.
              Don&apos;t get stuck filling in tedious forms.
            </p>
          </div>
          <div className="feature-card">
            <img src="images/icon-affordable-prices.svg" alt="affordable prices" />
            <h3>Affordable Prices</h3>
            <p>
              We don&apos;t want you worrying about high monthly costs. Our
              prices may be low, but we still offer the best coverage possible.
            </p>
        </div>
          <div className="feature-card">
            <img src="images/icon-people-first.svg" alt="people first" />
            <h3>People First</h3>
            <p>
              Our plans aren&apos;t full of conditions and clauses to prevent
              payouts. We make sure you&apos;re covered when you need it.
            </p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-wrapper">
          <div className="about-content">
            <h1>Find out more <br className='max-md:hidden' /> about how we work</h1>
            <Button>How we work</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
