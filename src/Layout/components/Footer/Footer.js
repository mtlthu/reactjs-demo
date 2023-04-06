import { useState } from 'react';

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div id="creator-center-footer">
            <div className={cx('footer-container')}>
                <footer className={cx('footer-content-wrapper')}>
                    <div className={cx('tiktok-logo')}>
                        <div className={cx('logo-container jsx-997609344')}>
                            <img
                                src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg"
                                title="TikTok"
                                className={cx('logo-icon')}
                            />
                            <img
                                src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg"
                                title="TikTok"
                                className={cx('logo-text')}
                            />
                        </div>
                        {/* <strong>TikTok</strong> */}
                    </div>
                    <div className={cx('footer-content-column')}>
                        <h4>Company</h4>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://www.tiktok.com/about?lang=en">
                                <h5>About</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://newsroom.tiktok.com/">
                                <h5>Newsroom</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://www.tiktok.com/about/contact?lang=en">
                                <h5>Contact</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://careers.tiktok.com">
                                <h5>Careers</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://www.bytedance.com/">
                                <h5>ByteDance</h5>
                            </a>
                        </span>
                    </div>
                    <div className={cx('footer-content-column')}>
                        <h4>Programs</h4>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://www.tiktok.com/forgood">
                                <h5>TikTok for Good</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a
                                className={cx('item-sub-column')}
                                href="https://www.tiktok.com/business/?attr_source=tt_official_site&amp;attr_medium=tt_official_site_guidance&amp;refer=tiktok_web"
                            >
                                <h5>Advertise</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://developers.tiktok.com/?refer=tiktok_web">
                                <h5>Developers</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://www.tiktok.com/tiktok-rewards/en">
                                <h5>TikTok Rewards</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://www.tiktok.com/browse">
                                <h5>TikTok Browse</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://www.tiktok.com/embed">
                                <h5>TikTok Embeds</h5>
                            </a>
                        </span>
                    </div>
                    <div className={cx('footer-content-column')}>
                        <h4>Support</h4>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://support.tiktok.com/en">
                                <h5>Help Center</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://www.tiktok.com/safety?lang=en">
                                <h5>Safety Center</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a
                                className={cx('item-sub-column')}
                                href="https://www.tiktok.com/creators/creator-portal/en-us/"
                            >
                                <h5>Creator Portal</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a
                                className={cx('item-sub-column')}
                                href="https://www.tiktok.com/community-guidelines?lang=en"
                            >
                                <h5>Community Guidelines</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://www.tiktok.com/transparency?lang=en">
                                <h5>Transparency</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a className={cx('item-sub-column')} href="https://www.tiktok.com/accessibility">
                                <h5>Accessibility</h5>
                            </a>
                        </span>
                    </div>
                    <div className={cx('footer-content-column')}>
                        <h4>Legal</h4>
                        <span className={cx('spanStyle')}>
                            <a
                                className={cx('item-sub-column')}
                                href="https://www.tiktok.com/legal/terms-of-service?lang=en"
                            >
                                <h5>Terms of Use</h5>
                            </a>
                        </span>
                        <span className={cx('spanStyle')}>
                            <a
                                className={cx('item-sub-column')}
                                href="https://www.tiktok.com/legal/privacy-policy-row?lang=en"
                            >
                                <h5>Privacy Policy</h5>
                            </a>
                        </span>
                    </div>
                </footer>
                <div className={cx('footer-bottom-wrapper')}>
                    <div className={cx('language-selection')}>
                        <p>
                            <span>English</span>
                        </p>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 48 48"
                            fill="#B0B0B4"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M24.7125 32.0323C24.3109 32.5525 23.5252 32.5505 23.1263 32.0282L14.4015 20.6071C13.8988 19.949 14.368 19 15.1962 19H32.7385C33.569 19 34.0375 19.9537 33.53 20.6111L24.7125 32.0323Z"
                            ></path>
                        </svg>
                        <select className={cx('language-selection-form')}>
                            <option value="ar">العربية</option>
                            <option value="bn-IN">বাঙ্গালি (ভারত)</option>
                            <option value="ceb-PH">Cebuano (Pilipinas)</option>
                            <option value="cs-CZ">Čeština (Česká republika)</option>
                            <option value="de-DE">Deutsch</option>
                            <option value="el-GR">Ελληνικά (Ελλάδα)</option>
                            <option selected="" value="en">
                                English
                            </option>
                            <option value="es">Español</option>
                            <option value="fi-FI">Suomi (Suomi)</option>
                            <option value="fil-PH">Filipino (Pilipinas)</option>
                            <option value="fr">Français</option>
                            <option value="he-IL">עברית (ישראל)</option>
                            <option value="hi-IN">हिंदी</option>
                            <option value="hu-HU">Magyar (Magyarország)</option>
                            <option value="id-ID">Bahasa Indonesia (Indonesia)</option>
                            <option value="it-IT">Italiano (Italia)</option>
                            <option value="ja-JP">日本語（日本）</option>
                            <option value="jv-ID">Basa Jawa (Indonesia)</option>
                            <option value="km-KH">ខ្មែរ (កម្ពុជា)</option>
                            <option value="ko-KR">한국어 (대한민국)</option>
                            <option value="ms-MY">Bahasa Melayu (Malaysia)</option>
                            <option value="my-MM">မြန်မာ (မြန်မာ)</option>
                            <option value="nl-NL">Nederlands (Nederland)</option>
                            <option value="pl-PL">Polski (Polska)</option>
                            <option value="pt-BR">Português (Brasil)</option>
                            <option value="ro-RO">Română (Romania)</option>
                            <option value="ru-RU">Русский (Россия)</option>
                            <option value="sv-SE">Svenska (Sverige)</option>
                            <option value="th-TH">ไทย (ไทย)</option>
                            <option value="tr-TR">Türkçe (Türkiye)</option>
                            <option value="uk-UA">Українська (Україна)</option>
                            <option value="ur">اردو</option>
                            <option value="vi-VN">Tiếng Việt (Việt Nam)</option>
                            <option value="zh-Hans">简体中文</option>
                            <option value="zh-Hant-TW">繁體中文</option>
                        </select>
                    </div>
                    <div className={cx('copyright')}>© 2023 TikTok</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
