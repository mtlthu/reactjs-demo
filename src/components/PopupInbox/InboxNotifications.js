import classNames from 'classnames/bind';
import styles from './InboxNotifications.module.scss';
import { Fragment, useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function InboxNotifications(props) {
    const [showInbox, setShowInbox] = useState(true);
    const wrapperRef = useRef();
    // console.log(props.focusLockInbox);

    useEffect(() => {
        const handleClosePopup = (e) => {
            console.log(wrapperRef.current);
            console.log(e);
            if (!wrapperRef.current.contains(e.target)) {
                //setShowInbox(!showInbox);
                console.log('show', showInbox);
            }
        };
        document.body.addEventListener('click', handleClosePopup);
        return () => document.body.removeEventListener('click', handleClosePopup);
    }, [showInbox]);
    return (
        <div ref={wrapperRef} className={cx('wrapper')}>
            <div
                role="dialog"
                aria-label="Notifications"
                className={cx('DivHeaderInboxWrapper')}
                // onClick={handleClosePopup}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="8"
                    fill="rgba(255, 255, 255, 1)"
                    // class="tiktok-e0rxz1-StyledArrow e18kkhh48"
                    className={cx('StyledArrow')}
                >
                    {/* <use xlink:href="#tip_arrow_white-99f4b53c"></use> */}
                </svg>
                <div data-e2e="inbox-notifications" className={cx('DivInboxContainer')}>
                    <div className={cx('DivInboxHeaderContainer')}>
                        <h2 id="header-inbox-title" className={cx('H2InboxTitle')}>
                            Notifications
                        </h2>
                        <div
                            data-e2e="inbox-bar"
                            id="header-inbox-bar"
                            role="tablist"
                            aria-labelledby="header-inbox-title"
                            className={cx('DivGroupContainer')}
                        >
                            <button
                                data-e2e="all"
                                id="inbox-tab-0"
                                tabindex="0"
                                role="tab"
                                aria-selected="true"
                                aria-controls="header-inbox-list"
                                className={cx('ButtonGroupItem')}
                            >
                                All activity
                            </button>
                            <button
                                data-e2e="likes"
                                id="inbox-tab-1"
                                tabindex="-1"
                                role="tab"
                                aria-selected="false"
                                aria-controls="header-inbox-list"
                                className={cx('ButtonGroupItem')}
                            >
                                Likes
                            </button>
                            <button
                                data-e2e="comments"
                                id="inbox-tab-2"
                                tabindex="-1"
                                role="tab"
                                aria-selected="false"
                                aria-controls="header-inbox-list"
                                className={cx('ButtonGroupItem')}
                            >
                                Comments
                            </button>
                            <button
                                data-e2e="mentions"
                                id="inbox-tab-3"
                                tabindex="-1"
                                role="tab"
                                aria-selected="false"
                                aria-controls="header-inbox-list"
                                className={cx('ButtonGroupItem')}
                            >
                                Mentions and tags
                            </button>
                            <button
                                data-e2e="followers"
                                id="inbox-tab-4"
                                tabindex="-1"
                                role="tab"
                                aria-selected="false"
                                aria-controls="header-inbox-list"
                                className={cx('ButtonGroupItem')}
                            >
                                Followers
                            </button>
                        </div>
                    </div>
                    <div
                        data-e2e="inbox-list"
                        id="header-inbox-list"
                        tabindex="0"
                        role="tabpanel"
                        aria-labelledby="inbox-tab-0"
                        className={cx('DivInboxContentContainer')}
                    >
                        <div className={cx('DivErrorContainer')}>
                            <svg
                                width="70"
                                data-e2e=""
                                height="70"
                                viewBox="0 0 72 72"
                                fill="rgba(22, 24, 35, .34)"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M34.4961 70.3557C34.7809 70.7422 35.2335 70.971 35.7166 70.971C36.1997 70.971 36.6522 70.7422 36.937 70.3557L45.7854 58.5121H65.6332C67.6978 58.5121 69.376 56.834 69.376 54.7693V4.77091C69.376 2.70629 67.6978 1.02815 65.6332 1.02815H5.79989C3.73527 1.02815 2.05713 2.70629 2.05713 4.77091V54.7693C2.05713 56.834 3.73527 58.5121 5.79989 58.5121H25.6477L34.4961 70.3557ZM5.10829 4.77135C5.10829 4.38996 5.4185 4.07976 5.79989 4.07976H65.6281C66.0095 4.07976 66.3197 4.38996 66.3197 4.77135V54.7749C66.3197 55.1562 66.0095 55.4665 65.6281 55.4665H45.0175C44.5395 55.4665 44.0869 55.6902 43.7971 56.0767L35.7166 66.8981L27.6361 56.0767C27.3513 55.6902 26.8987 55.4614 26.4156 55.4614H5.79989C5.4185 55.4614 5.10829 55.1512 5.10829 54.7698V4.77135Z"
                                ></path>
                                <path d="M49.6956 31.2955H21.7368C20.8926 31.2955 20.2112 30.6141 20.2112 29.7699C20.2112 28.9258 20.8926 28.2443 21.7368 28.2443H49.6956C50.5398 28.2443 51.2212 28.9258 51.2212 29.7699C51.2212 30.6141 50.5398 31.2955 49.6956 31.2955Z"></path>
                            </svg>
                            <p className={cx('PErrorTitle')}>All activity</p>
                            <p className={cx('PErrorDesc')}>Notifications about your account will appear here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InboxNotifications;
