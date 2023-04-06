import Footer from '~/Layout/components/Footer/Footer';
import styles from './Upload.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Upload() {
    return (
        <>
            <div className={cx('layout')}>
                <div className={cx('layout')}>
                    <div className={cx('upload-container')}>
                        <div className={cx('uploader')}>
                            <div className={cx('upload')}>
                                <div className={cx('before-upload-stage')} type="file" accept="video/*">
                                    <div className={cx('upload-card')}>
                                        <input type="file" accept="video/*" className={cx('before-upload-input')} />
                                        <div className={cx('text-main')}>
                                            <img
                                                src="//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
                                                className={cx('cloud-icon')}
                                                type="file"
                                                accept="video/*"
                                            />
                                        </div>
                                        <div className={cx('text-main')}>
                                            <span>Select video to upload</span>
                                        </div>
                                        <div className={cx('text-sub')}>
                                            <span>Or drag and drop a file</span>
                                            <p>Long videos can be split into multiple parts to get more exposure</p>
                                        </div>
                                        <div className={cx('text-sub')}></div>
                                        <div className={cx('text-video-info')}>
                                            <div>
                                                <span>MP4 or WebM</span>
                                            </div>
                                            <div>
                                                <span>720x1280 resolution or higher</span>
                                            </div>
                                            <div>
                                                <span>Up to 30 minutes</span>
                                            </div>
                                            <div>
                                                <span>Less than 2 GB</span>
                                            </div>
                                        </div>
                                        <div className={cx('file-select-button')}>
                                            <div className={cx('wide-file-select-button')}>
                                                <button className={cx('btn_selectFile')}>
                                                    <div className={cx('div_selectFile')}>
                                                        <input
                                                            type="file"
                                                            accept="video/*"
                                                            className={cx('before-upload-input')}
                                                        />
                                                        <div className={cx('text')}>Select file</div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Upload;
