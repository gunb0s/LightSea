import React from "react";
import styles from "./Filter.module.css";
import { FilterList } from "@material-ui/icons";
import { ArrowBack } from "@material-ui/icons";
import { ExpandLess, AttachMoney, KeyboardArrowDown } from "@material-ui/icons";

const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <header className={styles.header}>
            <button className={styles.header_button}>
              <div className={styles.header_label}>
                <FilterList className={styles.filtericon} /> Filter
              </div>
              <div className={styles.leftArrow}>
                <ArrowBack />
              </div>
            </button>
          </header>
          <div className={styles.status}>
            <div className={styles.status_main}>
              <button className={styles.status_btn}>
                <span>Status</span>
                <ExpandLess className={styles.expandless} />
              </button>
              <div className={styles.status_body}>
                <div className={styles.status_body_wrapper}>
                  <div className={styles.status_body_main}>
                    <div className={styles.status_main_btn}>Buy Now</div>
                    <div className={styles.status_main_btn}>On Auction</div>
                    <div className={styles.status_main_btn}>New</div>
                    <div className={styles.status_main_btn}>Has Offers</div>
                    <div className={styles.status_main_btn}>Buy with Card</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.status_main}>
              <button className={styles.status_btn}>
                <span>Price</span>
                <ExpandLess className={styles.expandless} />
              </button>
              <div className={styles.status_body}>
                <div className={styles.status_body_wrapper}>
                  <div className={styles.price_body_main}>
                    <div className={styles.price_input_wrapper}>
                      <div className={styles.price_dollar_wrapper}>
                        <div className={styles.price_dollar}>
                          <AttachMoney className={styles.dollar} />
                        </div>
                      </div>
                      <input
                        className={styles.price_currency}
                        style={{ cursor: "pointer" }}
                        defaultValue="United States Dollar (USD)"
                      />
                      <div className={styles.price_arrow}>
                        <KeyboardArrowDown />
                      </div>
                    </div>
                    <div className={styles.price_range}>
                      <div className={styles.rangeWrapper}>
                        <section className={styles.range1}>
                          <div className={styles.range2}>
                            <div className={styles.range3}>
                              <div className={styles.range}></div>
                              <input
                                className={styles.range_input}
                                type="text"
                                placeholder="Min"
                                autoComplete="off"
                                autoCapitalize="off"
                              />
                            </div>
                          </div>
                        </section>
                      </div>
                      <div className={styles.to}>to</div>
                      <div className={styles.rangeWrapper}>
                        <section className={styles.range1}>
                          <div className={styles.range2}>
                            <div className={styles.range3}>
                              <div className={styles.range}></div>
                              <input
                                className={styles.range_input}
                                type="text"
                                placeholder="Max"
                                autoComplete="off"
                                autoCapitalize="off"
                              />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.chains}>
            <div className={styles.status_main}>
              <button className={styles.status_btn}>
                <span>Chains</span>
                <ExpandLess className={styles.expandless} />
              </button>
              <div></div>
            </div>
          </div>
          <div className={styles.onsalein}>
            <div className={styles.status_main}>
              <button className={styles.status_btn}>
                <span>On Sale In</span>
                <ExpandLess className={styles.expandless} />
              </button>
              <div></div>
            </div>
          </div>
          <div className={styles.element}>
            <div className={styles.status_main}>
              <button className={styles.status_btn}>
                <span>Element</span>
                <ExpandLess className={styles.expandless} />
              </button>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
