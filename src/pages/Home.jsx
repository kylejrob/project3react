import React from "react";
import '../style.css';

function Home() {
  return (
    <div>
    <header>
      <a href="/" className="Logo">PROJECT3</a>
      <nav>
          <ul>
              <li><a href="#">Log In</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/scores">High Scores</a></li>
          </ul>
      </nav>
  </header>

  <div className="wrapper">
      <section className="hero">
          <div className="inner">
              <div className="clipper">
      <h1>GO PROJECT3</h1>
          </div>

      <div className="anim-panel">
          <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
          <a href="/game" className="read-btn primary">Play now</a>
      </div>
      </div>
  </section>
  <section className="siderbar">
      <div className="inner">
          <div className="clipper">
              <h2>Featured</h2>
          </div>
          <div className="anim-panel">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit neque quas! Consequuntur exercitationem, aperiam dicta perspiciatis maiores natus dolores fugit distinctio est at sed, officiis libero temporibus odit sequi.</p>
              <a href="#" className="read-btn">Read more</a>
          </div>
      </div>
  </section>
  <section className="subscribe">
      <div className="inner">
          <div className="clipper">
              <h2>Subscribe</h2>
          </div>

          <div className="anim-panel">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ad enim aliquid molestias quia possimus deleniti veniam a fugiat incidunt. Tempore tenetur dignissimos doloremque. Et praesentium accusamus ducimus totam aliquid!</p>
              <input type="text" name="email" placeholder="Email Address" />
              <button className="cta">Subscribe Now</button>
          </div>
      </div>
  </section>

  <section className="high-scores">
          <div className="inner">
              <div className="clipper">
                  <h2>High Scores</h2>
              </div>

              <div className="anim-panel">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ad enim aliquid molestias quia possimus deleniti veniam a fugiat incidunt. Tempore tenetur dignissimos doloremque. Et praesentium accusamus ducimus totam aliquid!</p>
                  <a href="/scores" className="read-btn">Click for scores</a>
              </div>
          </div>
      </section>
</div>
</div>

/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script> */

/* <script>

  let t1 = new TimelineMax();

  t1.staggerFrom('section', 2, {
      opacity: 0,
      scale: .5,
      ease: Power2.easeOut
  }, .2)

  t1.staggerFrom('h1, h2', .5, {
      opacity: 0,
      y: -40,
      ease: Power2.easeInOut
  }, 0.2, "-=2")

</script> */

  );
}

export default Home;
