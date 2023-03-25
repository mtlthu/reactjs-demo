import { usePrefersReducedMotion } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';

import Video from '~/video';
import video1 from '~/videos/video-1.mp4';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Home({ src, play = true, ...rest }) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [playing, setPlaying] = useState(!prefersReducedMotion);
    const videoRef = useRef();

    useEffect(() => {
        if (!videoRef.current) return;

        if (!play) {
            setPlaying(false);
            videoRef.current.pause();
        } else {
            setPlaying(true);
            videoRef.current.play();
        }
    }, [play]);

    const togglePlaying = (event) => {
        event.preventDefault();

        if (!playing) {
            setPlaying(true);
            videoRef.current.play();
        } else {
            setPlaying(false);
            videoRef.current.pause();
        }
    };

    return (
        <div className={cx('wrapper')}>
            <a href="/@maithilethu">
                <div>
                    <span>
                        <img
                            className={cx('user-avatar')}
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6cce65b73a19a3c3a58c2a0f3605eff1~c5_100x100.jpeg?x-expires=1679630400&x-signature=CuxLhE9vW2Ik5EwpboBi71G7xnc%3D"
                            alt=""
                        />
                    </span>
                </div>
            </a>
            <div>
                <div>
                    <div className={cx('nickname')}>
                        <a href="/@maithilethu">
                            <strong>maithilethu</strong>
                        </a>
                        <a href="/@maithilethu">Mai Thị Lệ Thu</a>
                        <button className={cx('follow-btn')}>Follow</button>
                    </div>
                    <div className={cx('divWrapper')}>
                        <span>Pháo hoa tuyệt đẹp </span>
                        <a href="/tag/phaohoa">
                            <strong>#phaohoa</strong>
                        </a>
                        <a href="/tag/tet">
                            <strong>#tet</strong>
                        </a>
                        <a href="/tag/tetmaiman">
                            <strong>#tetmaiman</strong>
                        </a>
                        <a href="/tag/tetdpngmoivuilays">
                            <strong>#TetDongMoiVui</strong>
                        </a>
                    </div>

                    <h4>
                        <a aria-label="Watch more videos with music nhạc nền  - Thanh Sam" href="">
                            <svg
                                fill="rgba(22, 24, 35, 1)"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                            >
                                <use xlinkHref="#svg-music-note"></use>
                            </svg>
                            nhạc nền - Thanh Sam
                        </a>
                    </h4>
                </div>
                <div className={cx('divVideoWrapper')}>
                    <div className={cx('divVideoCardContainer')}>
                        <div className={cx('divVideoPlayerContainer')}>
                            <Video ref={videoRef} noControls src={video1} vidButtonRef />
                            <div
                                tabIndex={0}
                                role="button"
                                aria-label="play"
                                aria-pressed="false"
                                className={cx('divPlayIconContainer-StyledDivPlayIconContainer')}
                            >
                                <span className={cx('spanIconPlayWrapper')}>
                                    {playing ? (
                                        <span className={cx('icon-play')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                fill="White"
                                                class="bi bi-play-fill"
                                                viewBox="0 0 24 24"
                                                onClick={togglePlaying}
                                            >
                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                            </svg>
                                        </span>
                                    ) : (
                                        <span className={cx('icon-pause')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                fill="White"
                                                class="bi bi-pause-fill"
                                                viewBox="0 0 24 24"
                                                onClick={togglePlaying}
                                            >
                                                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                                            </svg>
                                        </span>
                                    )}
                                </span>
                            </div>
                            <div
                                role="button"
                                aria-label="Pause"
                                aria-pressed="false"
                                className={cx('divVoiceControlContainer ')}
                            >
                                <div
                                    role="button"
                                    aria-label="Volume"
                                    aria-pressed="false"
                                    className={cx('divMuteIconContainer')}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 48 48"
                                        fill="#fff"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M25 10.8685C25 8.47242 22.3296 7.04325 20.3359 8.37236L10.3944 15H6C4.34315 15 3 16.3431 3 18V30C3 31.6568 4.34314 33 6 33H10.3944L20.3359 39.6276C22.3296 40.9567 25 39.5276 25 37.1315V10.8685ZM29.2929 18.1213L35.1716 24L29.2929 29.8787C28.9024 30.2692 28.9024 30.9024 29.2929 31.2929L30.7071 32.7071C31.0976 33.0976 31.7308 33.0976 32.1213 32.7071L38 26.8284L43.8787 32.7071C44.2692 33.0976 44.9024 33.0976 45.2929 32.7071L46.7071 31.2929C47.0976 30.9024 47.0976 30.2692 46.7071 29.8787L40.8284 24L46.7071 18.1213C47.0976 17.7308 47.0976 17.0976 46.7071 16.7071L45.2929 15.2929C44.9024 14.9024 44.2692 14.9024 43.8787 15.2929L38 21.1716L32.1213 15.2929C31.7308 14.9024 31.0976 14.9024 30.7071 15.2929L29.2929 16.7071C28.9024 17.0976 28.9024 17.7308 29.2929 18.1213Z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('divActionItemContainer')}>
                        <button
                            type="button"
                            aria-label="Like video727.6K likes"
                            aria-pressed="false"
                            className={cx('buttonActionItem')}
                        >
                            <span className={cx('spanIconWrapper')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                    class="bi bi-heart-fill"
                                    viewBox="0 0 16 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                    />
                                </svg>
                            </span>
                            <strong data-e2e="like-count">727.6K</strong>
                        </button>
                        <button
                            type="button"
                            aria-label="Like video727.6K likes"
                            aria-pressed="false"
                            className={cx('buttonActionItem')}
                        >
                            <span className={cx('spanIconWrapper')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                    class="bi bi-chat-dots-fill"
                                    viewBox="0 0 16 24"
                                >
                                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                            </span>
                            <strong data-e2e="like-count">727.6K</strong>
                        </button>
                        <button
                            type="button"
                            aria-label="Like video727.6K likes"
                            aria-pressed="false"
                            className={cx('buttonActionItem')}
                        >
                            <span className={cx('spanIconWrapper')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                    <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                                </svg>
                            </span>
                            <strong data-e2e="like-count">727.6K</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
