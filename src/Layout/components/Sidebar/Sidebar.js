import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('DivScrollContainer-StyledScroll')}>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
                <SuggestedAccounts lable="Suggested accounts" />
                <SuggestedAccounts lable="Following accounts" />
                <div className={cx('DivDiscoverContainer')}>
                    <h2 data-e2e="nav-discover-title" className={cx('H2DiscoverTitle')}>
                        Discover
                    </h2>
                    <ul data-e2e="nav-discover-list" className={cx('UlDiscoverListContainer')}>
                        <a
                            id="sidenav-discover-list-item-0"
                            data-e2e="nav-discover-href"
                            className={cx('StyledLink-StyledTmpLink')}
                            href="/tag/suthatla?lang=en"
                        >
                            <li className={cx('LiDiscoverItemContainer')}>
                                <svg
                                    lassName={cx('StyledNumber')}
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
                                    ></path>
                                </svg>
                                <p className={cx('PText')}>suthatla</p>
                            </li>
                        </a>
                        <a
                            id="sidenav-discover-list-item-1"
                            data-e2e="nav-discover-href"
                            className={cx('StyledLink-StyledTmpLink')}
                            href="/tag/mackedoi?lang=en"
                        >
                            <li className={cx('LiDiscoverItemContainer')}>
                                <svg
                                    className={cx('StyledNumber')}
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
                                    ></path>
                                </svg>
                                <p className={cx('PText')}>mackedoi</p>
                            </li>
                        </a>
                        <a
                            id="sidenav-discover-list-item-2"
                            data-e2e="nav-discover-href"
                            className={cx('StyledLink-StyledTmpLink')}
                            href="/tag/sansangthaydoi?lang=en"
                        >
                            <li className={cx('LiDiscoverItemContainer')}>
                                <svg
                                    className={cx('StyledNumber')}
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
                                    ></path>
                                </svg>
                                <p className={cx('PText')}>sansangthaydoi</p>
                            </li>
                        </a>
                        <a
                            id="sidenav-discover-list-item-3"
                            data-e2e="nav-discover-href"
                            className={cx('StyledLink-StyledTmpLink')}
                            href="/music/Yêu-Đơn-Phương-Là-Gì-MEE-Remix-7090803692152031234?lang=en"
                        >
                            <li className={cx('LiDiscoverItemContainer')}>
                                <svg
                                    className={cx('StyledMusicNote')}
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"
                                    ></path>
                                </svg>
                                <p className={cx('PText')}>
                                    Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media &amp; h0n &amp; BHMedia
                                </p>
                            </li>
                        </a>
                        <a
                            id="sidenav-discover-list-item-4"
                            data-e2e="nav-discover-href"
                            className={cx('StyledLink-StyledTmpLink')}
                            href="/music/Về-Nghe-Mẹ-Ru-7085517305542658842?lang=en"
                        >
                            <li className={cx('LiDiscoverItemContainer')}>
                                <svg
                                    className={cx('StyledMusicNote')}
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"
                                    ></path>
                                </svg>
                                <p className={cx('PText')}>
                                    Về Nghe Mẹ Ru - NSND Bach Tuyet &amp; Hứa Kim Tuyền &amp; 14 Casper &amp; Hoàng Dũng
                                </p>
                            </li>
                        </a>
                        <a
                            id="sidenav-discover-list-item-5"
                            data-e2e="nav-discover-href"
                            className={cx('StyledLink-StyledTmpLink')}
                            href="/music/Thiên-Thần-Tình-Yêu-7045285812895877890?lang=en"
                        >
                            <li className={cx('LiDiscoverItemContainer')}>
                                <svg
                                    className={cx('StyledMusicNote')}
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"
                                    ></path>
                                </svg>
                                <p className={cx('PText')}>Thiên Thần Tình Yêu - RICKY STAR ạnd T.R.I</p>
                            </li>
                        </a>
                        <a
                            id="sidenav-discover-list-item-6"
                            data-e2e="nav-discover-href"
                            className={cx('StyledLink-StyledTmpLink')}
                            href="/tag/7749hieuung?lang=en"
                        >
                            <li className={cx('LiDiscoverItemContainer')}>
                                <svg
                                    lassName={cx('StyledNumber')}
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
                                    ></path>
                                </svg>
                                <p className={cx('PText')}>7749hieuung</p>
                            </li>
                        </a>
                        <a
                            id="sidenav-discover-list-item-7"
                            data-e2e="nav-discover-href"
                            className={cx('StyledLink-StyledTmpLink')}
                            href="/tag/genzlife?lang=en"
                        >
                            <li className={cx('LiDiscoverItemContainer')}>
                                <svg
                                    lassName={cx('StyledNumber')}
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
                                    ></path>
                                </svg>
                                <p className={cx('PText')}>genzlife</p>
                            </li>
                        </a>
                        <a
                            id="sidenav-discover-list-item-8"
                            data-e2e="nav-discover-href"
                            className={cx('StyledLink-StyledTmpLink')}
                            href="/music/Anh-Yêu-Vội-Thế-Mee-Remix-7070861689528290074?lang=en"
                        >
                            <li className={cx('LiDiscoverItemContainer')}>
                                <svg
                                    className={cx('StyledMusicNote')}
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"
                                    ></path>
                                </svg>
                                <p className={cx('PText')}>Anh Yêu Vội Thế (Mee Remix) - LaLa Trần, Mee Media</p>
                            </li>
                        </a>
                        <a
                            id="sidenav-discover-list-item-9"
                            data-e2e="nav-discover-href"
                            className={cx('StyledLink-StyledTmpLink')}
                            href="/music/Vui-Lắm-Nha-TikTok-Remix-1-7053404031963629569?lang=en"
                        >
                            <li className={cx('LiDiscoverItemContainer')}>
                                <svg
                                    className={cx('StyledMusicNote')}
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"
                                    ></path>
                                </svg>
                                <p className={cx('PText')}>Vui Lắm Nha (TikTok Remix 1) - Hương Ly &amp; Jombie</p>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className={cx('DivPlaceholder')}></div>
                <div className={cx('DivFooterContainer')}>
                    <div className={cx('DivLinkContainer')}>
                        <a
                            href="https://www.tiktok.com/about?lang=en"
                            data-e2e="page-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            About
                        </a>
                        <a
                            href="https://newsroom.tiktok.com/?lang=en"
                            data-e2e="page-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Newsroom
                        </a>
                        <a
                            href="https://www.tiktok.com/about/contact?lang=en"
                            data-e2e="page-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Contact
                        </a>
                        <a
                            href="https://careers.tiktok.com?lang=en"
                            data-e2e="page-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Careers
                        </a>
                        <a
                            href="https://www.bytedance.com/?lang=en"
                            data-e2e="page-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            ByteDance
                        </a>
                    </div>
                    <div className={cx('DivLinkContainer')}>
                        <a
                            href="https://www.tiktok.com/forgood?lang=en"
                            data-e2e="program-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            TikTok for Good
                        </a>
                        <a
                            href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&amp;attr_source=tt_official_site&amp;lang=en&amp;refer=tiktok_web"
                            data-e2e="program-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Advertise
                        </a>
                        <a
                            href="https://developers.tiktok.com/?lang=en&amp;refer=tiktok_web"
                            data-e2e="program-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Developers
                        </a>
                        <a
                            href="https://www.tiktok.com/transparency?lang=en"
                            data-e2e="program-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Transparency
                        </a>
                        <a
                            href="https://www.tiktok.com/tiktok-rewards/en?lang=en"
                            data-e2e="program-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            TikTok Rewards
                        </a>
                        <a
                            href="https://www.tiktok.com/browse?lang=en"
                            data-e2e="program-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            TikTok Browse
                        </a>
                        <a
                            href="https://www.tiktok.com/embed?lang=en"
                            data-e2e="program-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            TikTok Embeds
                        </a>
                    </div>
                    <div className={cx('DivLinkContainer')}>
                        <a
                            href="https://support.tiktok.com/en?lang=en"
                            data-e2e="legal-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Help
                        </a>
                        <a
                            href="https://www.tiktok.com/safety?lang=en"
                            data-e2e="legal-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Safety
                        </a>
                        <a
                            href="https://www.tiktok.com/legal/terms-of-service?lang=en"
                            data-e2e="legal-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Terms
                        </a>
                        <a
                            href="https://www.tiktok.com/legal/privacy-policy-row?lang=en"
                            data-e2e="legal-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Privacy
                        </a>
                        <a
                            href="https://www.tiktok.com/creators/creator-portal/en-us/?lang=en"
                            data-e2e="legal-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Creator Portal
                        </a>
                        <a
                            href="https://www.tiktok.com/community-guidelines?lang=en"
                            data-e2e="legal-link"
                            target="_blank"
                            className={cx('ALink-StyledNavLink')}
                        >
                            Community Guidelines
                        </a>
                    </div>
                    <span data-e2e="copyright" className={cx('SpanCopyright')}>
                        © 2023 TikTok
                    </span>
                </div>
            </aside>
            <div className={cx('DivScrollBar')}>
                <div className={cx('DivScrollBarThumb')}></div>
            </div>
        </div>
    );
}

export default Sidebar;
