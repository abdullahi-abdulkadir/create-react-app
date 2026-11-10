import { useState } from 'react'
import './App.css'
function App() {
  return (
    <section id="center">
      <head>
        <meta name="description" content="Welcome to my website." />
        <meta property="og:title" content="My Website" />
        <meta property="og:description" content="Welcome to my website." />
        <meta property="og:image" content="https://example.com/image.jpg" />
      </head>
      <header>
        <h1>My Website</h1>
        <p>Welcome to my website</p>
      </header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <body>
        <main>
          <section id="home">
            <h2>Home</h2>
            <p>Welcome to our website.</p>
          </section>

          <section id="about">
            <h2>About Us</h2>
            <p>Learn more about our organization.</p>

            <article>
              <h3>Our Mission</h3>
              <p>Our mission is to provide quality services.</p>
            </article>
          </section>

          <section id="services">
            <h2>Our Services</h2>
            <p>We provide different services.</p>

            <figure>
              <img src="image.jpg" alt="Our service" />
              <figcaption>Our service image</figcaption>
            </figure>
          </section>

          <aside>
            <h2>Related Information</h2>
            <p>Additional information goes here.</p>
          </aside>

          <section id="contact">
            <h2>Contact Us</h2>

            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <button type="submit">Submit</button>
            </form>
          </section>
        </main>

      </body>

      <footer>
        <p>&copy; 2026 My Website. All rights reserved.</p>
        <address>
          Email: <a href="mailto:contact@example.com">contact@example.com</a>
        </address>
      </footer>
    </section>
  );
}

export default App;