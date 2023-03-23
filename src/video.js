import { forwardRef, useImperativeHandle, useRef } from 'react';
import video1 from './videos/video-1.mp4';

import PropTypes from 'prop-types';
import styles from '~/pages/Home/Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const renderVideo = ({ noControls, src, vidButtonRef, videoRef, handleToggleVideo }) => (
    <>
        {noControls ? (
            <div ref={vidButtonRef} className="video video__play-button">
                <video ref={videoRef} src={video1} onClick={handleToggleVideo} width={400}></video>
                <div
                    tabIndex={0}
                    role="button"
                    aria-label="play"
                    aria-pressed="false"
                    className={cx('divPlayIconContainer-StyledDivPlayIconContainer')}
                >
                    <span className={cx('spanIconPlayWrapper')}>
                        <span className={cx('icon-play')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="White"
                                class="bi bi-play-fill"
                                viewBox="0 0 24 24"
                            >
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                            </svg>
                        </span>
                    </span>
                </div>
            </div>
        ) : (
            <video src={video1} controls controlsList="nodownload"></video>
        )}
    </>
);

const Video = (props) => {
    const videoRef = useRef();
    const vidButtonRef = useRef(null);
    const { noControls, src } = props;
    const handlePlay = () => {
        videoRef.current.play();
        // hide overlay play button styles, set by 'video__play-button'
        vidButtonRef.current.classList.add('is-playing');
    };
    const handlePause = () => {
        videoRef.current.pause();
        // show overlay play button styles, set by 'video__play-button'
        vidButtonRef.current.classList.remove('is-playing');
    };
    const handleToggleVideo = () => (videoRef.current.paused ? handlePlay() : handlePause());
    return (
        <>
            {renderVideo({
                noControls,
                src: { video1 },
                vidButtonRef,
                videoRef,
                handleToggleVideo,
            })}
        </>
    );
};

Video.propTypes = {
    noControls: PropTypes.bool,
    videoUrl: PropTypes.string,
};

// export default Video;

// function Video(props, ref) {
//     const videoRef = useRef();
//     useImperativeHandle(ref, () => ({
//         play() {
//             videoRef.current.play();
//         },
//         pause() {
//             videoRef.current.pause();
//         },
//     }));
//     return <video ref={videoRef} src={video1} width={280} />;
// }

export default forwardRef(Video);
