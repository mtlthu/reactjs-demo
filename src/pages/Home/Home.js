import { usePrefersReducedMotion } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';

import Video from '~/video';
import video1 from '~/videos/video-1.mp4';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Home({ muted, volume, src, play = true, ...rest }) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [playing, setPlaying] = useState(!prefersReducedMotion);
    const [isMuted, setIsMuted] = useState(true);
    const [editVolume, setEditVolume] = useState(0.5);
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

    const handleMute = () => {
        setIsMuted(!isMuted);
    };
    const handleVolumeChange = (e, newValue) => {
        setEditVolume(parseFloat(newValue / 100));
        setIsMuted(newValue === 0 ? true : false);
    };
    const handleVolumeSeekDown = (e, newValue) => {
        setEditVolume(parseFloat(newValue / 100));
        setIsMuted(newValue === 0 ? true : false);
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
                            <Video ref={videoRef} src={video1} muted={!isMuted} playing={playing} volume={editVolume} />
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

                            <div className={cx('divVoiceControlContainer')}>
                                <div className={cx('divVolumeControlContainer')}>
                                    <div className={cx('divVolumeControlProgress')} onChange={handleVolumeChange}></div>
                                    <div className={cx('divVolumeControlCircle')} onChange={handleVolumeSeekDown}></div>
                                    <div className={cx('divVolumeControlBar')}></div>
                                </div>
                                <div>
                                    {isMuted ? (
                                        <div
                                            data-e2e="video-sound"
                                            tabindex="0"
                                            role="button"
                                            aria-label="Volume"
                                            aria-pressed="true"
                                        >
                                            <svg
                                                width="24"
                                                data-e2e=""
                                                height="24"
                                                viewBox="0 0 48 48"
                                                fill="#fff"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={handleMute}
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"
                                                ></path>
                                            </svg>
                                        </div>
                                    ) : (
                                        <div
                                            data-e2e="video-sound"
                                            tabindex="0"
                                            role="button"
                                            aria-label="Volume"
                                            aria-pressed="false"
                                        >
                                            <svg
                                                width="24"
                                                data-e2e=""
                                                height="24"
                                                viewBox="0 0 48 48"
                                                fill="#fff"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={handleMute}
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M25 10.8685C25 8.47242 22.3296 7.04325 20.3359 8.37236L10.3944 15H6C4.34315 15 3 16.3431 3 18V30C3 31.6568 4.34314 33 6 33H10.3944L20.3359 39.6276C22.3296 40.9567 25 39.5276 25 37.1315V10.8685ZM29.2929 18.1213L35.1716 24L29.2929 29.8787C28.9024 30.2692 28.9024 30.9024 29.2929 31.2929L30.7071 32.7071C31.0976 33.0976 31.7308 33.0976 32.1213 32.7071L38 26.8284L43.8787 32.7071C44.2692 33.0976 44.9024 33.0976 45.2929 32.7071L46.7071 31.2929C47.0976 30.9024 47.0976 30.2692 46.7071 29.8787L40.8284 24L46.7071 18.1213C47.0976 17.7308 47.0976 17.0976 46.7071 16.7071L45.2929 15.2929C44.9024 14.9024 44.2692 14.9024 43.8787 15.2929L38 21.1716L32.1213 15.2929C31.7308 14.9024 31.0976 14.9024 30.7071 15.2929L29.2929 16.7071C28.9024 17.0976 28.9024 17.7308 29.2929 18.1213Z"
                                                ></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* <div
                                    data-e2e="video-sound"
                                    tabindex="0"
                                    role="button"
                                    aria-label="Volume"
                                    aria-pressed="true"
                                    // className={cx('divMuteIconContaine')}
                                >
                                    <svg
                                        width="24"
                                        data-e2e=""
                                        height="24"
                                        viewBox="0 0 48 48"
                                        fill="#fff"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"
                                        ></path>
                                    </svg>
                                </div> */}
                            </div>
                            <p
                                tabindex="0"
                                role="button"
                                aria-label="Report"
                                data-e2e="video-report"
                                className={cx('PReportText')}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-flag"
                                    viewBox="0 0 16 16"
                                    className={cx('SvgIconFlag')}
                                >
                                    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
                                </svg>
                                Report
                            </p>
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
