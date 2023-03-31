import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AccountPreview from './AccountPreview/';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={images.image1} alt="" />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            <strong>maithilethu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('name')}>Mai Thị Lệ Thu</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
