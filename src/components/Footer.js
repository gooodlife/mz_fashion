import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="wrapper style1 align-center">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/mercy_koco"
                target="_blank"
                className="icon brands style2 fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/shalom.mercy.5/"
                target="_blank"
                className="icon brands style2 fa-facebook-f"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mercy_koco/"
                target="_blank"
                className="icon brands style2 fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mercy-shalom-56147519b/"
                target="_blank"
                className="icon brands style2 fa-linkedin-in"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                className="icon style2 fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <p>&copy; Untitled.</p>
        </div>
      </footer>
    );
  }
}
