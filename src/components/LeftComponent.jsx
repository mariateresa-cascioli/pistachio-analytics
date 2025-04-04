import React, { useState } from "react";
import styles from "../css/CentralComponent.module.scss"
import classNames from "classnames";

export const LeftComponent = ({ title }) => {

    return (
        <React.Fragment>
            <div className={styles.description_title}>{title}</div>
            <div className={classNames(styles.description_container)}>
                <div className={classNames(styles.description)}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin ex quis neque sollicitudin bibendum.
                    Pellentesque vulputate turpis eget sem malesuada, at laoreet risus condimentum. Vivamus dapibus dui in mi porttitor, vitae feugiat leo faucibus.
                    Aliquam erat volutpat. Vivamus non arcu eu mauris lobortis ultrices sit amet tristique quam. Sed facilisis bibendum cursus.
                    In massa dolor, lobortis nec quam nec, elementum finibus odio.<br />
                    In laoreet magna ut vehicula aliquam. Praesent sit amet blandit justo.
                    Vestibulum venenatis vestibulum tempor. Pellentesque sit amet eleifend odio, vel ullamcorper odio.
                    Suspendisse sed vulputate lorem. Suspendisse pulvinar porta neque. Vestibulum id lobortis leo.
                    Donec aliquet, augue et rhoncus semper, diam arcu laoreet ante, a laoreet magna ante sit amet elit.<br />
                    Vestibulum volutpat lacinia nunc, ac placerat magna sollicitudin a. Curabitur iaculis feugiat pretium.
                    Maecenas posuere condimentum dignissim. Donec fringilla dictum malesuada. Proin in risus ac arcu auctor tincidunt non dapibus nisi.
                    Etiam nec libero mollis, congue eros sed, cursus turpis. Ut non luctus lorem, at aliquam nibh. Etiam in porta mi.<br />
                    In laoreet magna ut vehicula aliquam. Praesent sit amet blandit justo.
                    Vestibulum venenatis vestibulum tempor. Pellentesque sit amet eleifend odio, vel ullamcorper odio.
                    Suspendisse sed vulputate lorem. Suspendisse pulvinar porta neque. Vestibulum id lobortis leo.
                    Donec aliquet, augue et rhoncus semper, diam arcu laoreet ante, a laoreet magna ante sit amet elit.<br />
                    Vestibulum volutpat lacinia nunc, ac placerat magna sollicitudin a. Curabitur iaculis feugiat pretium.
                    Maecenas posuere condimentum dignissim. Donec fringilla dictum malesuada. Proin in risus ac arcu auctor tincidunt non dapibus nisi.
                    Etiam nec libero mollis, congue eros sed, cursus turpis. Ut non luctus lorem, at aliquam nibh. Etiam in porta mi.<br />
                    In laoreet magna ut vehicula aliquam. Praesent sit amet blandit justo.
                    Vestibulum venenatis vestibulum tempor. Pellentesque sit amet eleifend odio, vel ullamcorper odio.
                    Suspendisse sed vulputate lorem. Suspendisse pulvinar porta neque. Vestibulum id lobortis leo.
                    Donec aliquet, augue et rhoncus semper, diam arcu laoreet ante, a laoreet magna ante sit amet elit.<br />
                    Vestibulum volutpat lacinia nunc, ac placerat magna sollicitudin a. Curabitur iaculis feugiat pretium.
                    Maecenas posuere condimentum dignissim. Donec fringilla dictum malesuada. Proin in risus ac arcu auctor tincidunt non dapibus nisi.
                    Etiam nec libero mollis, congue eros sed, cursus turpis. Ut non luctus lorem, at aliquam nibh. Etiam in porta mi.<br />
                </div>
            </div>
        </React.Fragment>

    );
};