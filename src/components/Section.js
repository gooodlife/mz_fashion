import React, { Component, Fragment } from 'react';


export default class Section extends Component {
    render() {
      
        return (
          <React.Fragment>
            <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
              <div className="content">
                <h1 className="head">MZ Clothing</h1>
                <h5 className="head5">
                  <i>A high-fashion brand for every classy woman</i>
                </h5>
                <p className="major">
                  "At MZ Clothing we provide a premium,elegant and unique outfit
                  for women with a very high taste in fashion.A one way stop
                  shop for every classy woman"
                </p>
                <ul className="actions stacked">
                  <li>
                    <a
                      href="#first"
                      className="button big wide smooth-scroll-middle"
                    >
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
              <div id="image" className="image">
                <img src="images/arize.jpg" alt="" />
              </div>
            </section>
            <section
              className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
              id="first"
            >
              <div id="secondPage" className="content">
                <h2 className="head2">A PEEK AT OUR COLLECTIONS</h2>
                <p id="firstparagraph">
                  this is a master piece of our MZ 2020 red-rose women beach
                  wear
                </p>
                <h3 id="path">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  id ante sed ex pharetra lacinia sit amet vel massa. Donec
                  facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce
                  lorem lectus, pharetra pretium massa et, hendrerit vestibulum
                  odio lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Morbi id ante sed ex pharetra
                  lacinia sit amet vel massa. Donec facilisis laoreet nulla eu
                  bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra
                  pretium massa et, hendrerit vestibulum odio lorem ipsum dolor
                  sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Morbi id ante sed ex pharetra lacinia sit amet vel
                  massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex
                  risus. Fusce lorem lectus, pharetra pretium massa et,
                  hendrerit vestibulum odio lorem ipsum dolor sit amet.
                </h3>
              </div>
              <div className="image">
                <img src="images/coll.jpeg" alt="" />
              </div>
            </section>
            <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
              <div className="content">
                <h2 id="spring">SPRING/FALL COLLECTION 2019</h2>
                <p id="lorem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  id ante sed ex pharetra lacinia sit amet vel massa. Donec
                  facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce
                  lorem lectus, pharetra pretium massa et, hendrerit vestibulum
                  odio lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Morbi id ante sed ex pharetra
                  lacinia sit amet vel massa. Donec facilisis laoreet nulla eu
                  bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra
                  pretium massa et, hendrerit vestibulum odio lorem ipsum dolor
                  sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Morbi id ante sed ex pharetra lacinia sit amet vel
                  massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex
                  risus. Fusce lorem lectus, pharetra pretium massa et,
                  hendrerit vestibulum odio lorem ipsum dolor sit amet.
                </p>
                <ul className="actions stacked">
                  <li>
                    <a href="#" className="button">
                      Learn More
                    </a>
                  </li>
                </ul>
              </div>
              <div className="image">
                <img src="images/index.png" alt="" />
              </div>
            </section>

            <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
              <div id="thirdPage" className="content">
                <h2 id="header3">SUMMER COLLECTION 2019</h2>
                <p id="thirdparagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  id ante sed ex pharetra lacinia sit amet vel massa. Donec
                  facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce
                  lorem lectus, pharetra pretium massa et, hendrerit vestibulum
                  odio lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Morbi id ante sed ex pharetra
                  lacinia sit amet vel massa. Donec facilisis laoreet nulla eu
                  bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra
                  pretium massa et, hendrerit vestibulum odio lorem ipsum dolor
                  sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Morbi id ante sed ex pharetra lacinia sit amet vel
                  massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex
                  risus. Fusce lorem lectus, pharetra pretium massa et,
                  hendrerit vestibulum odio lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="image">
                <img src="images/street.jpg" alt="" />
              </div>
            </section>
            <section className="wrapper style1 align-center">
              <div className="inner">
                <h2 id="mz">MZ Clothing Premium Designs</h2>
                <p id="fifthParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  id ante sed ex pharetra lacinia sit amet vel massa. Donec
                  facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce
                  lorem lectus, pharetra pretium massa et, hendrerit vestibulum
                  odio lorem ipsum.
                </p>
              </div>

              <div className=" scrollmenu gallery style2 medium lightbox onscroll-fade-in">
                <article>
                  <a href="images/fashion6.jpg" className="image">
                    <img src="images/fashion6.jpg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Ipsum Dolor</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>

                <article>
                  <a href="images/fashion1.jpg" className="image">
                    <img src="images/fashion1.jpg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Feugiat Lorem</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="images/fashion2.jpg" className="image">
                    <img src="images/fashion2.jpg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Magna Amet</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="images/fashion9.jpg" className="image">
                    <img src="images/fashion9.jpg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Sed Tempus</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="images/fashion11.jpeg" className="image">
                    <img src="images/fashion11.jpeg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Ultrices Magna</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="images/fashion18.jpg" className="image">
                    <img src="images/fashion18.jpg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Sed Tempus</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="images/fashion12.jpg" className="image">
                    <img src="images/fashion12.jpg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Ipsum Lorem</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="images/fashion21.jpeg" className="image">
                    <img src="images/fashion21.jpeg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Magna Risus</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="images/fashion14.jpg" className="image">
                    <img src="images/fashion14.jpg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Tempus Dolor</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="images/fashion15.jpg" className="image">
                    <img src="images/fashion15.jpg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Sed Etiam</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="images/faashion19.jpg" className="image">
                    <img src="images/fashion19.jpg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Magna Lorem</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="images/fashion20.jpg" className="image">
                    <img src="images/fashion20.jpg" alt="" />
                  </a>
                  <div className="caption">
                    <h3>Ipsum Dolor</h3>
                    <p>
                      Lorem ipsum dolor amet, consectetur magna etiam elit.
                      Etiam sed ultrices.
                    </p>
                    <ul className="actions fixed">
                      <li>
                        <span className="button small">Details</span>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </section>
            <section className="wrapper style1 align-center">
              <div className="inner">
                <h2 id="lastHeader">MORE ABOUT OUR DESIGNS</h2>
                <p id="lastParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  id ante sed ex pharetra lacinia sit amet vel massa. Donec
                  facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce
                  lorem lectus, pharetra pretium massa et, hendrerit vestibulum
                  odio lorem ipsum.
                  <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Morbi id ante sed ex pharetra lacinia sit amet vel
                  massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex
                  risus. Fusce lorem lectus, pharetra pretium massa et,
                  hendrerit vestibulum odio lorem ipsum.
                </p>
                <div className="items style1 medium onscroll-fade-in">
                  <section>
                    <span className="icon solid style2 major fa-desktop"></span>
                    <h3>Aliquam</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi dui turpis, cursus eget orci amet aliquam congue
                      semper. Etiam eget ultrices risus nec tempor elit.
                    </p>
                  </section>
                  <section>
                    <span className="icon solid style2 major fa-sync-alt"></span>

                    <h3>Elit</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi dui turpis, cursus eget orci amet aliquam congue
                      semper. Etiam eget ultrices risus nec tempor elit.
                    </p>
                  </section>
                  <section>
                    <span className="icon solid style2 major fa-hashtag"></span>
                    <h3>Morbi</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi dui turpis, cursus eget orci amet aliquam congue
                      semper. Etiam eget ultrices risus nec tempor elit.
                    </p>
                  </section>
                  <section>
                    <span className="icon solid style2 major fa-bolt"></span>
                    <h3>Turpis</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi dui turpis, cursus eget orci amet aliquam congue
                      semper. Etiam eget ultrices risus nec tempor elit.
                    </p>
                  </section>
                  <section>
                    <span className="icon solid style2 major fa-envelope"></span>
                    <h3>Ultrices</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi dui turpis, cursus eget orci amet aliquam congue
                      semper. Etiam eget ultrices risus nec tempor elit.
                    </p>
                  </section>
                  <section>
                    <span className="icon solid style2 major fa-leaf"></span>
                    <h3>Risus</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi dui turpis, cursus eget orci amet aliquam congue
                      semper. Etiam eget ultrices risus nec tempor elit.
                    </p>
                  </section>
                </div>
              </div>
            </section>

            <section className="wrapper style1 align-center">
              <div className="inner medium">
                <h2>Get in touch</h2>
                <form method="post">
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                  </div>
                  <ul className="actions special">
                    <li>
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        value="Send Message"
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </section>
            <section className="wrapper style1 align-center">
              <div className="inner medium">
                <h2>Get in touch</h2>
                <form method="post">
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                  </div>
                  <ul className="actions special">
                    <li>
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        value="Send Message"
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </section>
          </React.Fragment>
        );
    }
}
