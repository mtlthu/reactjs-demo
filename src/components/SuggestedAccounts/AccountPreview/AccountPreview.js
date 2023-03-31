import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import images from '~/assets/images';

import styles from './AccountPreview.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={images.image3} alt="" />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>quoc nguyen phu</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('lable')}>Followers </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('lable')}>LIKES </span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
