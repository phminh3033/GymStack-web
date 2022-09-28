import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './ContactPage.module.scss';

import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function ContactPage() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <div className={cx('main-heading')}>CÔNG TY CỔ PHẦN GIÁO DỤC THỂ HÌNH GYM STACK</div>
                            <Divider className={cx('divider')} />
                            <div className={cx('sub-heading')}>LIÊN HỆ</div>
                            <div className={cx('contact')}>
                                <p className={cx('content-contact')}>
                                    Chúng tôi luôn sẵn sàng tiếp nhận mọi ý kiến đóng góp và giải đáp những yêu cầu của
                                    bạn. <br />
                                    Hãy liên hệ ngay với chúng tôi
                                </p>
                                <div className={cx('infoWrap')}>
                                    <FontAwesomeIcon className={cx('icon-contact')} icon={faHouse} />
                                    <p className={cx('text-contact')}>Khu II, Đ. 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ</p>
                                </div>
                                <div className={cx('infoWrap')}>
                                    <FontAwesomeIcon className={cx('icon-contact')} icon={faPhone} />
                                    <p className={cx('text-contact')}>0292.xxx.xxxx</p>
                                </div>
                                <div className={cx('infoWrap')}>
                                    <FontAwesomeIcon className={cx('icon-contact')} icon={faEnvelope} />
                                    <p className={cx('text-contact')}>contact@gymstack.edu.vn</p>
                                </div>
                            </div>
                            <div className={cx('map')}>
                                <iframe
                                    title="Can Tho university map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841454343755!2d105.7684266152626!3d10.02993897526891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1664369596151!5m2!1svi!2s"
                                    width="1200"
                                    height="500"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
