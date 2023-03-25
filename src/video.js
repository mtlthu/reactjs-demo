import { forwardRef, useImperativeHandle, useRef } from 'react';
import { usePrefersReducedMotion } from '@chakra-ui/react';
import video1 from './videos/video-1.mp4';

import PropTypes from 'prop-types';
import styles from '~/pages/Home/Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Video(props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));
    return <video ref={videoRef} src={video1} width={400} />;
}

export default forwardRef(Video);
