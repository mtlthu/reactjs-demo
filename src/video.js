import { forwardRef, useImperativeHandle, useRef } from 'react';
import video1 from './videos/video-1.mp4';

function Video(props, ref) {
    const { muted, volume } = props;
    const videoRef = useRef();
    let mutedParam = '';
    let volumeParam = '';
    if (muted) {
        mutedParam = 'muted';
    }

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
        volume,
    }));
    return <video muted={mutedParam} volume ref={videoRef} src={video1} width={400} />;
}

export default forwardRef(Video);
