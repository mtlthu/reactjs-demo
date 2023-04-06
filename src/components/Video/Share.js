import styles from './Share.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Share() {
    return (
        <div
            tabindex="-1"
            className={cx('DivContainer')}
            // style="background-color: rgb(255, 255, 255); padding-right: 4px; left: -25px;"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="rgba(255, 255, 255, 1)"
                verticalPropKey="bottom"
                className={cx('StyledTopArrow')}
                //style="left: 36px;"
            >
                {/* <use xlink:href="#tip_arrow_white-99f4b53c"></use> */}
            </svg>
            <div data-e2e="feed-share-group" className={cx('DivShareWrapper')}>
                <a
                    id="icon-element-embed"
                    mode="1"
                    href="#"
                    data-e2e="video-share-embed"
                    aria-label="Embed"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                            fill="#161823"
                            fill-opacity="0.75"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.313 7.96568C12.3665 7.65966 12.658 7.45498 12.964 7.50851C13.27 7.56203 13.4747 7.8535 13.4211 8.15951L12.0506 15.9952C11.997 16.3012 11.7056 16.5059 11.3996 16.4523C11.0936 16.3988 10.8889 16.1073 10.9424 15.8013L12.313 7.96568ZM16.2402 8.77448C15.96 8.48453 15.5058 8.48453 15.2256 8.77448C14.9454 9.06443 14.9454 9.53454 15.2256 9.82449L17.454 12.1307L15.2262 14.4364C14.946 14.7263 14.946 15.1964 15.2262 15.4864C15.5063 15.7763 15.9606 15.7763 16.2407 15.4864L19.4551 12.1598C19.4704 12.1439 19.4704 12.1182 19.4551 12.1023L19.2233 11.8623L19.2201 11.8586L19.2158 11.854L16.2402 8.77448ZM8.88972 15.4867C8.59977 15.7766 8.12966 15.7766 7.83971 15.4867L5.4207 13.0677L4.76017 12.4071L4.51191 12.1589C4.49603 12.143 4.49603 12.1173 4.51191 12.1014L7.83853 8.77477C8.12848 8.48482 8.59859 8.48482 8.88854 8.77477C9.17849 9.06472 9.17849 9.53482 8.88854 9.82478L6.58318 12.1301L8.88972 14.4367C9.17967 14.7266 9.17967 15.1967 8.88972 15.4867Z"
                            fill="white"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Embed</span>
                </a>
                <a
                    id="icon-element-message"
                    mode="1"
                    href="#"
                    data-e2e="video-share-message"
                    aria-label="Send to friends"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                            fill="#FE2C55"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.7913 7.1875C18.6796 6.99413 18.4733 6.875 18.25 6.875H5.75001C5.50258 6.875 5.27845 7.02097 5.17839 7.24727C5.07834 7.47356 5.1212 7.73758 5.28771 7.9206L8.55021 11.5065C8.72305 11.6965 8.9945 11.7614 9.23456 11.6702L13.7656 9.94799C13.8184 9.92795 13.8423 9.93624 13.8527 9.94039C13.871 9.94765 13.8971 9.96649 13.9177 10.0013C13.9382 10.0361 13.9421 10.0681 13.9396 10.0876C13.9382 10.0987 13.9339 10.1237 13.8909 10.1602L10.1707 13.3155C9.97902 13.4782 9.90339 13.7398 9.97878 13.9796L11.4038 18.5124C11.4781 18.749 11.6853 18.9192 11.9317 18.9463C12.1781 18.9734 12.4173 18.8522 12.5413 18.6375L18.7913 7.81251C18.9029 7.61913 18.9029 7.38088 18.7913 7.1875Z"
                            fill="white"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Send to friends</span>
                </a>
                <a
                    id="icon-element-facebook"
                    mode="1"
                    href="https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&amp;display=popup&amp;sdk=joey&amp;u=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-e2e="video-share-facebook"
                    aria-label="Share to Facebook"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
                            fill="white"
                        ></path>
                        <path
                            d="M24 1C11.2964 1 1 11.2964 1 24C1 35.4775 9.40298 44.9804 20.3846 46.7205L20.3936 30.6629H14.5151V24.009H20.3936C20.3936 24.009 20.3665 20.2223 20.3936 18.5363C20.4206 16.8503 20.7542 15.2274 21.6288 13.7487C22.9722 11.4586 25.0639 10.3407 27.6335 10.0251C29.7432 9.76362 31.826 10.0521 33.9087 10.3407C34.0529 10.3587 34.125 10.3767 34.2693 10.4038C34.2693 10.4038 34.2783 10.6472 34.2693 10.8005C34.2603 12.4053 34.2693 16.0839 34.2693 16.0839C33.2685 16.0659 31.6096 15.9667 30.5096 16.138C28.6884 16.4175 27.6425 17.5806 27.6064 19.4108C27.5704 20.8354 27.5884 24.009 27.5884 24.009H33.9988L32.962 30.6629H27.5974V46.7205C38.597 44.9984 47.009 35.4775 47.009 24C47 11.2964 36.7036 1 24 1Z"
                            fill="#0075FA"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Share to Facebook</span>
                </a>
                <a
                    id="icon-element-whatsapp"
                    mode="1"
                    href="https://wa.me/?text=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-e2e="video-share-whatsapp"
                    aria-label="Share to WhatsApp"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
                            fill="#25D366"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M30.9028 25.6129C30.5802 25.4515 28.9944 24.6713 28.6988 24.5635C28.4031 24.4559 28.1881 24.4021 27.9731 24.7249C27.758 25.0478 27.1399 25.7744 26.9517 25.9897C26.7636 26.2049 26.5754 26.2319 26.2529 26.0704C25.9303 25.909 24.891 25.5684 23.659 24.4694C22.7002 23.6141 22.0528 22.5579 21.8647 22.235C21.6765 21.9121 21.8446 21.7375 22.0061 21.5767C22.1512 21.4321 22.3287 21.2 22.4899 21.0116C22.6512 20.8233 22.705 20.6887 22.8125 20.4735C22.92 20.2582 22.8663 20.0699 22.7855 19.9085C22.7049 19.747 22.0599 18.1593 21.7911 17.5134C21.5293 16.8845 21.2634 16.9697 21.0654 16.9598C20.8774 16.9504 20.6622 16.9484 20.4472 16.9484C20.2322 16.9484 19.8827 17.0291 19.587 17.352C19.2914 17.6749 18.4581 18.4553 18.4581 20.0428C18.4581 21.6306 19.6139 23.1643 19.7752 23.3795C19.9365 23.5949 22.0496 26.8528 25.2853 28.2499C26.0548 28.5823 26.6557 28.7807 27.1241 28.9293C27.8968 29.1749 28.5999 29.1402 29.1557 29.0572C29.7754 28.9646 31.064 28.277 31.3328 27.5235C31.6016 26.7699 31.6016 26.1242 31.521 25.9897C31.4404 25.8551 31.2253 25.7744 30.9028 25.6129ZM25.0178 33.6472H25.0134C23.0881 33.6465 21.1998 33.1292 19.5524 32.1517L19.1606 31.9191L15.0998 32.9844L16.1837 29.0251L15.9286 28.6191C14.8546 26.9109 14.2873 24.9365 14.2881 22.9091C14.2905 16.9934 19.1037 12.1805 25.022 12.1805C27.8879 12.1815 30.5817 13.299 32.6076 15.3271C34.6333 17.3551 35.7482 20.0509 35.7471 22.9178C35.7447 28.8339 30.9315 33.6472 25.0178 33.6472ZM34.1489 13.7858C31.7117 11.3458 28.4706 10.0014 25.0173 10C17.902 10 12.111 15.7906 12.1082 22.908C12.1073 25.1832 12.7017 27.4039 13.8313 29.3617L12 36.0509L18.8432 34.2559C20.7287 35.2843 22.8516 35.8264 25.0121 35.827H25.0174H25.0174C32.132 35.827 37.9234 30.0359 37.9263 22.9184C37.9276 19.4691 36.5861 16.2258 34.1489 13.7858Z"
                            fill="white"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Share to WhatsApp</span>
                </a>
                <a
                    id="icon-element-copy"
                    mode="1"
                    href="#"
                    data-e2e="video-share-copy"
                    aria-label="Copy link "
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                            fill="#FE2C55"
                        ></path>
                        <path
                            d="M11.3028 15.2151C10.4934 16.0245 9.30444 16.016 8.6442 15.3557C7.98397 14.6955 7.97544 13.5065 8.78485 12.6971C9.06049 12.4215 9.06049 11.9745 8.78485 11.6989C8.5092 11.4232 8.06229 11.4232 7.78665 11.6989C6.49952 12.9861 6.36369 15.0716 7.646 16.354C8.92832 17.6363 11.0138 17.5005 12.301 16.2133L13.3248 15.1895C14.4068 14.1075 14.6713 12.4803 13.9787 11.2183C13.7911 10.8765 13.3621 10.7515 13.0203 10.9391C12.6786 11.1267 12.5536 11.5557 12.7412 11.8975C13.1094 12.5685 12.9986 13.5192 12.3266 14.1913L11.3028 15.2151ZM12.6972 8.7849C13.5066 7.97548 14.6956 7.984 15.3558 8.64425C16.016 9.30451 16.0246 10.4935 15.2152 11.3029C14.9395 11.5785 14.9395 12.0255 15.2152 12.3011C15.4908 12.5768 15.9377 12.5768 16.2134 12.3011C17.5005 11.0139 17.6363 8.92838 16.354 7.64603C15.0717 6.36368 12.9862 6.49951 11.699 7.78668L10.6752 8.8105C9.59325 9.89253 9.3287 11.5197 10.0213 12.7817C10.2089 13.1235 10.6379 13.2485 10.9797 13.0609C11.3214 12.8733 11.4464 12.4442 11.2588 12.1025C10.8906 11.4315 11.0014 10.4808 11.6734 9.80873L12.6972 8.7849ZM13.0336 12.6277C13.0186 12.3531 12.9459 12.0887 12.8178 11.8554C12.7737 11.7749 12.7493 11.6889 12.743 11.6029C12.7493 11.6889 12.7736 11.7749 12.8178 11.8554C12.9459 12.0888 13.0186 12.3531 13.0336 12.6277ZM13.2629 15.1276L12.2391 16.1514C10.9813 17.4093 8.95136 17.5356 7.70785 16.2921C7.11888 15.7031 6.83721 14.9377 6.8375 14.1615C6.8372 14.9377 7.11887 15.7031 7.70785 16.2921C8.95136 17.5357 10.9813 17.4093 12.2391 16.1515L13.2629 15.1277C13.8201 14.5704 14.1544 13.8662 14.2473 13.1452C14.1544 13.8661 13.8201 14.5704 13.2629 15.1276ZM8.90341 12.2276C8.89633 12.3759 8.8362 12.522 8.723 12.6352C8.28443 13.0738 8.07511 13.623 8.07481 14.147C8.07512 13.623 8.28444 13.0739 8.723 12.6353C8.83621 12.5221 8.89635 12.3759 8.90341 12.2276ZM12.6354 8.72306C13.4748 7.88361 14.7193 7.88401 15.4176 8.58241C15.6813 8.84604 15.8454 9.18748 15.9025 9.55557C15.8454 9.18746 15.6813 8.846 15.4176 8.58236C14.7193 7.88396 13.4748 7.88356 12.6354 8.72301L11.6116 9.74684C11.1715 10.1869 10.9613 10.7444 10.9635 11.2737C10.9613 10.7445 11.1715 10.187 11.6116 9.74689L12.6354 8.72306ZM11.2573 12.4817C11.244 12.6856 11.13 12.8786 10.9376 12.9842C10.6382 13.1485 10.2623 13.039 10.098 12.7396C9.88489 12.3514 9.76492 11.927 9.73407 11.4947C9.76493 11.9269 9.8849 12.3513 10.098 12.7396C10.2623 13.039 10.6382 13.1485 10.9376 12.9842C11.13 12.8786 11.244 12.6856 11.2573 12.4817ZM15.1103 11.9351C15.1348 12.0466 15.1903 12.1526 15.277 12.2393C15.5185 12.4808 15.91 12.4808 16.1515 12.2393C16.7 11.6908 17.0333 10.9955 17.1317 10.2827C17.0333 10.9955 16.6999 11.6908 16.1515 12.2392C15.91 12.4807 15.5185 12.4807 15.277 12.2392C15.1903 12.1526 15.1348 12.0466 15.1103 11.9351Z"
                            fill="white"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Copy link </span>
                </a>
                <a
                    id="icon-element-twitter"
                    mode="1"
                    href="https://twitter.com/intent/tweet?refer_source=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc&amp;text=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-e2e="video-share-twitter"
                    aria-label="Share to Twitter"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24.0002 47.001C36.7028 47.001 47.0002 36.7035 47.0002 24.001C47.0002 11.2984 36.7028 1.00098 24.0002 1.00098C11.2977 1.00098 1.00024 11.2984 1.00024 24.001C1.00024 36.7035 11.2977 47.001 24.0002 47.001Z"
                            fill="#1DA1F2"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M38.2029 13.5327C37.3894 14.0824 35.5215 14.8813 34.6003 14.8813V14.8829C33.5484 13.7237 32.0675 13 30.4252 13C27.2353 13 24.6488 15.7287 24.6488 19.0925C24.6488 19.5598 24.7001 20.0157 24.795 20.4529H24.794C20.4671 20.3331 15.7348 18.0452 12.886 14.1294C11.1344 17.3277 12.6501 20.8848 14.6378 22.1809C13.9574 22.235 12.7049 22.0982 12.1153 21.4913C12.0758 23.6142 13.0434 26.4269 16.5714 27.4473C15.8919 27.8329 14.6892 27.7223 14.1662 27.6402C14.3497 29.4322 16.7285 31.775 19.3297 31.775C18.4026 32.9063 14.9144 34.9582 11 34.3054C13.6584 36.0118 16.7568 37 20.0362 37C29.3556 37 36.5929 29.0322 36.2034 19.2027C36.2019 19.1919 36.2019 19.1811 36.2009 19.1693C36.2019 19.144 36.2034 19.1187 36.2034 19.0925C36.2034 19.0619 36.2009 19.0331 36.2 19.0035C37.0484 18.3914 38.1868 17.3087 39 15.8836C38.5284 16.1577 37.1134 16.7064 35.7968 16.8426C36.6418 16.3615 37.8937 14.7858 38.2029 13.5327Z"
                            fill="white"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Share to Twitter</span>
                </a>
                <a
                    id="icon-element-linkedin"
                    mode="1"
                    href="https://www.linkedin.com/sharing/share-offsite?url=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-e2e="video-share-linkedin"
                    aria-label="Share to LinkedIn"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="24" cy="24" r="24" fill="#0A66C2"></circle>
                        <path
                            d="M25.2775 21.8588C25.5235 21.4456 25.8234 21.067 26.1692 20.7329C26.6685 20.2507 27.2585 19.8724 27.9051 19.6199C28.5518 19.3675 29.2421 19.246 29.936 19.2625C31.0487 19.2625 32.1351 19.3862 33.1478 19.8886C34.6419 20.6251 35.3363 21.9324 35.6888 23.4765C35.9239 24.6175 36.0298 25.7813 36.0044 26.946C36.0044 29.7685 36.0044 32.5909 36.0044 35.416C36.0044 35.6633 35.9387 35.7317 35.6914 35.729C34.242 35.729 32.7979 35.7159 31.3433 35.729C31.0803 35.729 31.0119 35.6659 31.0145 35.4029C31.025 32.7251 31.025 30.0482 31.0145 27.3722C31.0217 26.806 30.9679 26.2407 30.854 25.686C30.5252 24.1867 29.5835 23.5002 28.0553 23.6527C26.527 23.8053 25.6879 24.6891 25.4827 26.3384C25.4319 26.7652 25.4073 27.1948 25.409 27.6247C25.409 30.2183 25.409 32.8093 25.409 35.4029C25.409 35.6659 25.3354 35.7317 25.0776 35.729C23.6177 35.7159 22.1578 35.729 20.6979 35.729C20.4586 35.729 20.4033 35.6607 20.4033 35.4292C20.4033 30.2735 20.4033 25.1196 20.4033 19.9675C20.4033 19.7044 20.4849 19.6571 20.7242 19.6571C22.1105 19.6571 23.4967 19.6702 24.883 19.6571C25.146 19.6571 25.1986 19.7386 25.1933 19.978C25.1802 20.5935 25.1933 21.209 25.1933 21.8193L25.2775 21.8588Z"
                            fill="#FDFEFE"
                        ></path>
                        <path
                            d="M17.2574 27.6825C17.2574 30.2525 17.2574 32.825 17.2574 35.395C17.2574 35.658 17.2022 35.7316 16.9312 35.729C15.474 35.7159 14.0141 35.729 12.5542 35.729C12.3254 35.729 12.2517 35.6817 12.2517 35.437C12.2517 30.2744 12.2517 25.1108 12.2517 19.9464C12.2517 19.736 12.2938 19.6544 12.5148 19.6571C13.9948 19.6676 15.4749 19.6676 16.9549 19.6571C17.218 19.6571 17.2443 19.7491 17.2443 19.9675C17.2548 22.54 17.2574 25.1126 17.2574 27.6825Z"
                            fill="#FDFDFE"
                        ></path>
                        <path
                            d="M11.8755 14.5541C11.8755 13.9811 12.0456 13.4211 12.3642 12.9449C12.6829 12.4688 13.1357 12.0979 13.6654 11.8794C14.195 11.6608 14.7776 11.6045 15.3393 11.7174C15.901 11.8303 16.4165 12.1075 16.8206 12.5137C17.2246 12.92 17.4989 13.437 17.6088 13.9993C17.7186 14.5616 17.659 15.1439 17.4376 15.6723C17.2162 16.2008 16.8429 16.6516 16.365 16.9676C15.8871 17.2836 15.3261 17.4507 14.7532 17.4476C13.9896 17.44 13.2597 17.1322 12.7212 16.5907C12.1827 16.0493 11.8789 15.3177 11.8755 14.5541Z"
                            fill="#FDFDFE"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Share to LinkedIn</span>
                </a>
                <a
                    id="icon-element-reddit"
                    mode="1"
                    href="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-e2e="video-share-reddit"
                    aria-label="Share to Reddit"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 24C5.3736 24 0 18.6264 0 12C0 5.3736 5.3736 0 12 0C18.6264 0 24 5.3736 24 12C24 18.6264 18.6264 24 12 24Z"
                            fill="#FF4500"
                        ></path>
                        <path
                            d="M14.5765 14.4872C13.9304 14.4872 13.4036 13.9552 13.4036 13.3027C13.4036 12.6502 13.9304 12.1182 14.5765 12.1182C15.2226 12.1182 15.7494 12.6502 15.7494 13.3027C15.7494 13.9552 15.2226 14.4872 14.5765 14.4872ZM14.7837 16.431C13.9822 17.2381 12.4491 17.3018 11.9989 17.3018C11.5486 17.3018 10.0133 17.2381 9.21409 16.431C9.09478 16.3105 9.09478 16.1173 9.21409 15.9968C9.33341 15.8763 9.52476 15.8763 9.64408 15.9968C10.1484 16.5061 11.2267 16.6879 11.9989 16.6879C12.7688 16.6879 13.8494 16.5061 14.3537 15.9968C14.473 15.8763 14.6643 15.8763 14.7837 15.9968C14.9007 16.1173 14.9007 16.3105 14.7837 16.431ZM8.24381 13.3027C8.24381 12.6502 8.7706 12.1182 9.4167 12.1182C10.0628 12.1182 10.5896 12.6502 10.5896 13.3027C10.5896 13.9552 10.0628 14.4872 9.4167 14.4872C8.7706 14.4872 8.24381 13.9552 8.24381 13.3027ZM19.5 12.1182C19.5 11.202 18.7661 10.4608 17.8588 10.4608C17.4154 10.4608 17.0146 10.6382 16.7197 10.9269C15.5986 10.1085 14.052 9.581 12.3298 9.51962L13.0772 5.96615L15.5198 6.49133C15.5491 7.11881 16.0579 7.61898 16.686 7.61898C17.3343 7.61898 17.8588 7.08926 17.8588 6.43449C17.8588 5.77972 17.3343 5.25 16.686 5.25C16.2244 5.25 15.8305 5.52055 15.6391 5.91159L12.9106 5.32503C12.8341 5.30911 12.7553 5.32275 12.69 5.36595C12.6247 5.40914 12.5797 5.47508 12.5639 5.55237L11.7445 9.45141C11.74 9.47415 11.7445 9.49461 11.7445 9.51735C9.99077 9.56282 8.4149 10.0925 7.27578 10.9224C6.98086 10.6359 6.5824 10.4608 6.14115 10.4608C5.2339 10.4608 4.5 11.2043 4.5 12.1182C4.5 12.7912 4.89847 13.3709 5.47028 13.6301C5.44552 13.7938 5.43201 13.962 5.43201 14.1325C5.43201 16.6834 8.37213 18.75 11.9989 18.75C15.6256 18.75 18.5657 16.6834 18.5657 14.1325C18.5657 13.9643 18.5522 13.7983 18.5275 13.6346C19.097 13.3755 19.5 12.7957 19.5 12.1182Z"
                            fill="white"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Share to Reddit</span>
                </a>
                <a
                    id="icon-element-telegram"
                    mode="1"
                    href="https://t.me/share/url?text=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc&amp;url=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-e2e="video-share-telegram"
                    aria-label="Share to Telegram"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                            fill="#37AEE2"
                        ></path>
                        <path
                            d="M15.0708 25.1038L18.2549 33.5766C18.2549 33.5766 18.6529 34.3681 19.0782 34.3681C19.5035 34.3681 25.8443 28.0272 25.8443 28.0272L32.8947 14.9343L15.1822 22.9151L15.0708 25.1038Z"
                            fill="#C8DAEA"
                        ></path>
                        <path
                            d="M19.2945 27.2772L18.6827 33.5219C18.6827 33.5219 18.428 35.4351 20.4158 33.5219C22.4035 31.6087 24.3117 30.1328 24.3117 30.1328"
                            fill="#A9C6D8"
                        ></path>
                        <path
                            d="M15.1297 25.4063L8.5796 23.3553C8.5796 23.3553 7.79723 23.0492 8.04968 22.3583C8.10199 22.2161 8.20661 22.0937 8.51819 21.8838C9.96922 20.9108 35.378 12.1319 35.378 12.1319C35.378 12.1319 36.0967 11.9001 36.5198 12.0532C36.7131 12.1232 36.8382 12.2041 36.9405 12.4949C36.9792 12.5998 36.9996 12.8272 36.9974 13.0502C36.9951 13.212 36.9746 13.3607 36.9587 13.5969C36.8041 15.9977 32.1735 33.914 32.1735 33.914C32.1735 33.914 31.896 34.9614 30.9044 34.9985C30.5428 35.0116 30.1039 34.9417 29.5785 34.5066C27.6294 32.8951 20.8974 28.5439 19.41 27.5884C19.3258 27.5337 19.3031 27.4638 19.2872 27.396C19.2667 27.2954 19.3804 27.1708 19.3804 27.1708C19.3804 27.1708 31.1046 17.1522 31.4162 16.1004C31.4412 16.0195 31.3502 15.978 31.2274 16.013C30.4496 16.2885 16.9491 24.4836 15.4595 25.3888C15.373 25.4412 15.1297 25.4063 15.1297 25.4063Z"
                            fill="white"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Share to Telegram</span>
                </a>
                <a
                    id="icon-element-email"
                    mode="1"
                    href="mailto:?body=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc&amp;subject=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-e2e="video-share-email"
                    aria-label="Share to Email"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                            fill="#0DBEF3"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.6327 14.8957C12.4779 14.8957 11.5417 15.8318 11.5417 16.9866V31.0131C11.5417 32.1679 12.4779 33.104 13.6327 33.104H34.3675C35.5223 33.104 36.4584 32.1679 36.4584 31.0131V16.9866C36.4584 15.8318 35.5223 14.8957 34.3675 14.8957H13.6327ZM33.7214 17.3809L24.0001 24.1142L14.2788 17.3809C13.9321 17.1407 13.4584 17.3889 13.4584 17.8106V19.0944L24.0001 26.396L34.5418 19.0944V17.8106C34.5418 17.3889 34.0681 17.1407 33.7214 17.3809Z"
                            fill="white"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Share to Email</span>
                </a>
                <a
                    id="icon-element-line"
                    mode="1"
                    href="https://lineit.line.me/share/ui?text=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc&amp;url=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-e2e="video-share-line"
                    aria-label="Share to Line"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24 47.001C36.7026 47.001 47 36.7035 47 24.001C47 11.2984 36.7026 1.00098 24 1.00098C11.2975 1.00098 1 11.2984 1 24.001C1 36.7035 11.2975 47.001 24 47.001Z"
                            fill="#00B900"
                        ></path>
                        <path
                            d="M40.0001 22.4324C40.0001 15.2729 32.8228 9.44822 23.9999 9.44822C15.1782 9.44822 8 15.2729 8 22.4324C8 28.8509 13.6922 34.2263 21.3811 35.2427C21.9022 35.355 22.6114 35.5863 22.7908 36.0316C22.9522 36.4362 22.8963 37.0699 22.8423 37.4784C22.8423 37.4784 22.6546 38.6075 22.6141 38.848C22.5445 39.2525 22.2927 40.43 23.9999 39.7105C25.7078 38.9909 33.2145 34.2848 36.5713 30.421H36.5707C38.8895 27.8783 40.0001 25.2978 40.0001 22.4324Z"
                            fill="white"
                        ></path>
                        <path
                            d="M20.7494 18.9727H19.6271C19.4551 18.9727 19.3152 19.1123 19.3152 19.2837V26.2556C19.3152 26.4273 19.4551 26.5666 19.6271 26.5666H20.7494C20.9215 26.5666 21.0611 26.4273 21.0611 26.2556V19.2837C21.0611 19.1123 20.9215 18.9727 20.7494 18.9727Z"
                            fill="#00B900"
                        ></path>
                        <path
                            d="M28.4738 18.9727H27.3515C27.1794 18.9727 27.0399 19.1123 27.0399 19.2837V23.4257L23.845 19.1111C23.8377 19.1 23.8294 19.0896 23.8208 19.0795L23.8187 19.0776C23.8125 19.0706 23.8064 19.0644 23.7999 19.0583C23.7981 19.0565 23.7963 19.0549 23.7941 19.0531C23.7889 19.0482 23.7834 19.0436 23.7776 19.0393C23.7751 19.0368 23.7723 19.035 23.7696 19.0328C23.7641 19.0292 23.7588 19.0252 23.7533 19.0218C23.7503 19.0197 23.7472 19.0178 23.7438 19.0163C23.7383 19.0129 23.7328 19.0095 23.7272 19.0068C23.7239 19.0052 23.7208 19.0034 23.7174 19.0022C23.7116 18.9994 23.7058 18.9967 23.6996 18.9945C23.696 18.9933 23.6929 18.9921 23.6895 18.9908C23.6834 18.9887 23.6773 18.9865 23.6708 18.985C23.6674 18.9838 23.6638 18.9832 23.6601 18.9819C23.6539 18.9807 23.6481 18.9792 23.6423 18.9779C23.638 18.9773 23.6334 18.9767 23.6291 18.9764C23.6236 18.9752 23.6181 18.9749 23.6125 18.9743C23.6073 18.9737 23.6021 18.9737 23.5966 18.9733C23.5926 18.9733 23.5895 18.9727 23.5855 18.9727H22.4635C22.2915 18.9727 22.1516 19.1123 22.1516 19.2837V26.2556C22.1516 26.4273 22.2915 26.5666 22.4635 26.5666H23.5855C23.7579 26.5666 23.8975 26.4273 23.8975 26.2556V22.1148L27.0963 26.435C27.1184 26.4663 27.1457 26.4917 27.1754 26.512C27.1764 26.5126 27.1776 26.5135 27.1785 26.5144C27.1849 26.5184 27.1914 26.5224 27.1978 26.5261C27.2009 26.5279 27.2037 26.5292 27.2067 26.5307C27.2113 26.5335 27.2165 26.5359 27.2214 26.5381C27.2267 26.5402 27.2313 26.5424 27.2368 26.5445C27.2398 26.5457 27.2429 26.547 27.246 26.5479C27.2533 26.5506 27.2601 26.5528 27.2671 26.5549C27.2687 26.5549 27.2702 26.5555 27.2717 26.5559C27.2972 26.5626 27.3239 26.5666 27.3515 26.5666H28.4738C28.6462 26.5666 28.7854 26.4273 28.7854 26.2556V19.2837C28.7854 19.1123 28.6462 18.9727 28.4738 18.9727Z"
                            fill="#00B900"
                        ></path>
                        <path
                            d="M18.0433 24.821H14.9939V19.2843C14.9939 19.1123 14.8543 18.9727 14.6825 18.9727H13.5599C13.3879 18.9727 13.2483 19.1123 13.2483 19.2843V26.2549V26.2555C13.2483 26.3393 13.2817 26.415 13.3354 26.4709C13.3366 26.4724 13.3379 26.4739 13.3397 26.4755C13.3412 26.477 13.3428 26.4782 13.3443 26.4798C13.4004 26.5337 13.4759 26.5669 13.5596 26.5669H13.5599H18.0433C18.2154 26.5669 18.3543 26.427 18.3543 26.2549V25.1326C18.3543 24.9606 18.2154 24.821 18.0433 24.821Z"
                            fill="#00B900"
                        ></path>
                        <path
                            d="M34.6715 20.7186C34.8435 20.7186 34.9825 20.5793 34.9825 20.4069V19.2846C34.9825 19.1126 34.8435 18.9727 34.6715 18.9727H30.1881H30.1875C30.1034 18.9727 30.0277 19.0064 29.9715 19.0607C29.9703 19.062 29.9688 19.0629 29.9679 19.0641C29.966 19.0659 29.9645 19.0678 29.963 19.0696C29.9096 19.1254 29.8765 19.2009 29.8765 19.2843V19.2846V26.2552V26.2555C29.8765 26.3393 29.9099 26.415 29.9636 26.4709C29.9648 26.4724 29.9663 26.4742 29.9679 26.4755C29.9691 26.477 29.9709 26.4785 29.9725 26.4798C30.0283 26.5334 30.1041 26.5669 30.1875 26.5669H30.1881H34.6715C34.8435 26.5669 34.9825 26.427 34.9825 26.2552V25.1326C34.9825 24.9609 34.8435 24.821 34.6715 24.821H31.6223V23.6426H34.6715C34.8435 23.6426 34.9825 23.503 34.9825 23.3309V22.2086C34.9825 22.0366 34.8435 21.8967 34.6715 21.8967H31.6223V20.7186H34.6715Z"
                            fill="#00B900"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Share to Line</span>
                </a>
                <a
                    id="icon-element-pinterest"
                    mode="1"
                    href="https://pinterest.com/pin/create/button/?desc=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc&amp;media=https%3A%2F%2Flf16-tiktok-web.ttwstatic.com%2Fobj%2Ftiktok-web-common-sg%2Fmtact%2Fstatic%2Fimages%2Fshare_img.png&amp;url=https%3A%2F%2Fwww.tiktok.com%2F%40bee.hin%2Fvideo%2F7214055762211949829%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-e2e="video-share-pinterest"
                    aria-label="Share to Pinterest"
                    className={cx('AShareLink')}
                >
                    <svg
                        width="26"
                        data-e2e=""
                        height="26"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.0173 3C12.4102 3 3 12.3947 3 23.9827C3 32.8766 8.53541 40.4753 16.3542 43.5321C16.1639 41.8742 16.0082 39.3183 16.4234 37.5049C16.8039 35.8643 18.8797 27.074 18.8797 27.074C18.8797 27.074 18.257 25.8133 18.257 23.9655C18.257 21.0469 19.9522 18.8709 22.0626 18.8709C23.8616 18.8709 24.7265 20.2179 24.7265 21.824C24.7265 23.6201 23.5848 26.3141 22.9794 28.8183C22.4777 30.9079 24.0345 32.6176 26.093 32.6176C29.8294 32.6176 32.7009 28.6801 32.7009 23.0156C32.7009 17.9901 29.0856 14.4844 23.9135 14.4844C17.9283 14.4844 14.4168 18.9572 14.4168 23.5855C14.4168 25.3816 15.1087 27.3158 15.9736 28.3692C16.1466 28.5765 16.1639 28.7664 16.112 28.9737C15.9563 29.6299 15.5931 31.0633 15.5239 31.3569C15.4374 31.7368 15.2125 31.8232 14.8146 31.6332C12.1853 30.4071 10.542 26.5905 10.542 23.4992C10.542 16.8849 15.3509 10.8059 24.4324 10.8059C31.7149 10.8059 37.3887 15.9868 37.3887 22.9293C37.3887 30.1653 32.822 35.9852 26.4909 35.9852C24.3632 35.9852 22.3566 34.8799 21.682 33.5674C21.682 33.5674 20.6268 37.574 20.3673 38.5584C19.9003 40.389 18.6202 42.6686 17.7553 44.0674C19.7273 44.6719 21.8031 45 23.9827 45C35.5897 45 44.9999 35.6053 44.9999 24.0173C45.0345 12.3947 35.6243 3 24.0173 3Z"
                            fill="#E60019"
                        ></path>
                    </svg>
                    <span className={cx('SpanShareText')}>Share to Pinterest</span>
                </a>
                <a
                    data-e2e="share-arrow"
                    aria-label="More share options"
                    href="#"
                    class="tiktok-1idlm02-AShareArrow e15mchsh1"
                >
                    <svg
                        width="24"
                        data-e2e=""
                        height="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.8788 33.1213L7.58586 18.8284C7.19534 18.4379 7.19534 17.8047 7.58586 17.4142L10.4143 14.5858C10.8048 14.1953 11.438 14.1953 11.8285 14.5858L24.0001 26.7574L36.1716 14.5858C36.5622 14.1953 37.1953 14.1953 37.5859 14.5858L40.4143 17.4142C40.8048 17.8047 40.8048 18.4379 40.4143 18.8284L26.1214 33.1213C24.9498 34.2929 23.0503 34.2929 21.8788 33.1213Z"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Share;
