import React from "react";
import styles from "./Footer.module.css";
import { Twitter } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { YouTube } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_row}>
          <div className={styles.footer_half}>
            <div className={styles.footer_section_header}>Stay in the loop</div>
            <div className={styles.footer_section_text}>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </div>
            <form className={styles.mailing}>
              <div className={styles.mailing_container}>
                <div className={styles.mailing_input_main}>
                  <div className={styles.mailing_input}>
                    <div className={styles.input_wrapper}>
                      <input
                        className={styles.input}
                        aria-invalid="false"
                        placeholder="You email address"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <button className={styles.signup_button}>Sign up</button>
              </div>
            </form>
          </div>
          <div className={styles.footer_half}>
            <div className={styles.footer_section_header}>
              Join the community
            </div>
            <div className={styles.joinLinks}>
              <a className={styles.joinLinkWrapper}>
                <div className={styles.joinLink}>
                  <GitHub className={styles.link} />
                </div>
              </a>
              <a className={styles.joinLinkWrapper}>
                <div className={styles.joinLink}>
                  <Twitter className={styles.link} />
                </div>
              </a>
              <a className={styles.joinLinkWrapper}>
                <div className={styles.joinLink}>
                  <Instagram className={styles.link} />
                </div>
              </a>
              <a className={styles.joinLinkWrapper}>
                <div className={styles.joinLink}>
                  <YouTube className={styles.link} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.footer_bottom_half}>
            <p>© 2018 - 2022 Ozone Networks, Inc</p>
          </div>
          <div className={styles.footer_bottom_half}>
            <div>
              <a className={styles.bottom_link} href="/">
                Privacy Policy
              </a>
              <a className={styles.bottom_link} href="/">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
