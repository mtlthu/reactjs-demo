import { useState } from 'react';

import images from '~/assets/images';
import Video from '~/components/Video/Video';
import listVideos from '~/assets/videos/';
import styles from './Following.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Following() {
    const [videos] = useState([
        {
            url: listVideos.video1,
            channel: 'DanceCrew',
            image: images.image1,
            follow: false,
            description: 'Video by Lara Jameson from Pexels',
            song: 'Bounce - Ruger',
            likes: 250,
            messages: 120,
            shares: 40,
        },
        {
            url: 'https://res.cloudinary.com/codelife/video/upload/v1633232725/tiktok-clone/tiktok1_np37xq.mp4',
            channel: 'Happyfeet',
            image: images.image2,
            follow: false,
            description: '#happyfeetlegwork videos on TikTok',
            song: 'Kolo sound - Nathan',
            likes: 250,
            messages: 120,
            shares: 40,
        },
        {
            url: 'https://res.cloudinary.com/codelife/video/upload/v1633232726/tiktok-clone/tiktok3_scmwvk.mp4',
            channel: 'thiskpee',
            image: images.image3,
            follow: false,
            description: 'The real big thug boys💛🦋 The real big thug boys💛🦋 ',
            song: 'original sound - KALEI KING 🦋',
            likes: 250,
            messages: 120,
            shares: 40,
        },
    ]);
    return (
        <div className={cx('wrapper')}>
            <div>
                {videos.map(({ url, channel, image, description, song, likes, messages, shares }) => (
                    <Video
                        key={url}
                        url={url}
                        channel={channel}
                        image={image}
                        description={description}
                        song={song}
                        likes={likes}
                        messages={messages}
                        shares={shares}
                    />
                ))}
            </div>
            <div className={cx('DivBottomContainer')}>
                <div className={cx('DivPromotionContainer')}>
                    <button className={cx('ButtonGetAppText')}>Get app</button>
                    <div className={cx('DivExpandContainer')}>
                        <div className={cx('DivXMarkWrapper')}>
                            <svg
                                width="20"
                                data-e2e=""
                                height="20"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"
                                ></path>
                            </svg>
                        </div>
                        <div className={cx('DivExpandWrapper')}>
                            <div data-e2e="pwa-pc" className={cx('DivItemContainer')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
                                    <use xlinkHref="#pc-210dd828"></use>
                                </svg>
                                <span className={cx('SpanText')}>Get TikTok for desktop</span>
                            </div>
                            <div className={cx('DivSplit')}></div>
                            <div data-e2e="pwa-mobile" className={cx('DivItemContainer')}>
                                <svg
                                    width="21"
                                    data-e2e=""
                                    height="21"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M8 7C8 4.23858 10.2386 2 13 2H35C37.7614 2 40 4.23858 40 7V41C40 43.7614 37.7614 46 35 46H13C10.2386 46 8 43.7614 8 41V7ZM13 6C12.4477 6 12 6.44772 12 7V41C12 41.5523 12.4477 42 13 42H35C35.5523 42 36 41.5523 36 41V7C36 6.44772 35.5523 6 35 6H13ZM18 10C18 9.44772 18.4477 9 19 9H29C29.5523 9 30 9.44772 30 10V12C30 12.5523 29.5523 13 29 13H19C18.4477 13 18 12.5523 18 12V10ZM24 39C25.6569 39 27 37.6569 27 36C27 34.3431 25.6569 33 24 33C22.3431 33 21 34.3431 21 36C21 37.6569 22.3431 39 24 39Z"
                                    ></path>
                                </svg>
                                <span className={cx('SpanText')}>Get TikTok App</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button aria-label="Scroll to the top" className={cx('ButtonIconContainer')}>
                    <svg
                        width="16"
                        data-e2e=""
                        height="16"
                        viewBox="0 0 48 48"
                        fill="#FFF"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.1086 20.3412C23.1028 19.2196 24.8972 19.2196 25.8914 20.3412L42.8955 39.5236C44.2806 41.0861 43.1324 43.5 41.004 43.5L6.99596 43.5C4.86764 43.5 3.71945 41.0861 5.10454 39.5235L22.1086 20.3412Z"
                        ></path>
                        <path d="M4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5L40.5 4.5C42.1569 4.5 43.5 5.84315 43.5 7.5C43.5 9.15685 42.1569 10.5 40.5 10.5L7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5Z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Following;
