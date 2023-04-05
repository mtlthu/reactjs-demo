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
        <div>
            {videos.map(({ url, channel, image, follow, description, song, likes, messages, shares }) => (
                <Video
                    key={url}
                    url={url}
                    channel={channel}
                    image={image}
                    follow={follow}
                    description={description}
                    song={song}
                    likes={likes}
                    messages={messages}
                    shares={shares}
                />
            ))}
        </div>
    );
}

export default Following;
