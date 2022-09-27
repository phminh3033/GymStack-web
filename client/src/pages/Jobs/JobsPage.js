import React from 'react';
import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './JobsPage.module.scss';

const cx = classNames.bind(styles);

export default function JobsPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row', 'row-jobPage')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <h1 className={cx('heading')}>Cơ hội việc làm</h1>
                            <p className={cx('content')}>
                                GymStack tin rằng mỗi người đều có những tiềm năng vô hạn để trở nên giỏi giang. Vấn đề
                                là họ không áp dụng đúng phương pháp để việc học hiệu quả hơn. Vì vậy GymStack mong muốn
                                giúp cho những người gặp khó khăn trong việc luyện tập nói chung và rèn luyện sức khỏe
                                cá nhân nói riêng được tiếp cận các phương pháp, kinh nghiệm luyện tập thông minh để trở
                                nên hoàn thiện hơn từng ngày.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('grid', 'wide')}>
                    <h1 className={cx('heading')}>Việc làm đang mở tại GymStack</h1>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-6', 'm-12', 'c-12')}>
                            <div className={cx('wrap-job')}>
                                <div>
                                    <h4 className={cx('job-heading')}>Nhân viên Marketing</h4>
                                    <p className={cx('job-content')}>Mức lương: 5.000.000đ - 10.000.000đ</p>
                                </div>
                                <div className={cx('job-action')}>Ứng tuyển</div>
                            </div>
                        </div>
                        <div className={cx('col', 'l-6', 'm-12', 'c-12')}>
                            <div className={cx('wrap-job')}>
                                <div>
                                    <h4 className={cx('job-heading')}>Chăm sóc khách hàng</h4>
                                    <p className={cx('job-content')}>Mức lương: 5.000.000đ - 7.000.000đ</p>
                                </div>
                                <div className={cx('job-action')}>Ứng tuyển</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-6', 'm-12', 'c-12')}>
                            <div className={cx('wrap-job')}>
                                <div>
                                    <h4 className={cx('job-heading')}>Thiết kế Đồ họa</h4>
                                    <p className={cx('job-content')}>Mức lương: 5.000.000đ - 7.000.000đ</p>
                                </div>
                                <div className={cx('job-action')}>Ứng tuyển</div>
                            </div>
                        </div>
                        <div className={cx('col', 'l-6', 'm-12', 'c-12')}>
                            <div className={cx('wrap-job')}>
                                <div>
                                    <h4 className={cx('job-heading')}>Copywriter</h4>
                                    <p className={cx('job-content')}>Mức lương: 3.000.000đ - 5.000.000đ</p>
                                </div>
                                <div className={cx('job-action')}>Ứng tuyển</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
