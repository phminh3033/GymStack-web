import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './HomePage.module.scss';

import Grow from '@mui/material/Grow';

//Component
import images from '../../assets/images';
import Slider from '../../components/Slider/Slider';
import Post from '../../components/Post/Post';
import Parallax from '../../components/Parallax/Parallax';

const cx = classNames.bind(styles);

export default function HomePage() {
    return (
        <>
            <Slider />
            <div className={cx('wrapper')}>
                <div className={cx('grid', 'wide')}>
                    <Grow in>
                        <div className={cx('row', 'row-post')}>
                            <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                                <div className={cx('column', 'introduce')}>
                                    <h1 className={cx('heading')}>CHÚNG TÔI LÀ GYM STACK</h1>
                                    <p className={cx('description')}>
                                        Là thương hiệu về sức khỏe lớn nhất Việt Nam, Gym Stack được xây dựng để mang
                                        lại hạnh phúc và tạo ra những khoảnh khắc viên mãn cho bạn trong cuộc sống bằng
                                        việc cung cấp các dịch vụ phát triển sức khỏe thể chất, dinh dưỡng và tinh thần
                                        toàn diện.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                                <div className={cx('column')}>
                                    <img
                                        className={cx('image-post')}
                                        src={images.homePage1}
                                        alt="HLV luôn đồng hành cùng bạn"
                                    />
                                    <h2 className={cx('title-post')}>HLV luôn đồng hành cùng bạn</h2>
                                    <p className={cx('description')}>
                                        Các huấn luyện viên đạt chuẩn NASM của chúng tôi sẽ cùng bạn thiết lập chương
                                        trình tập luyện & chế độ dinh dưỡng phù hợp với thể trạng của bạn. Đồng thời,
                                        các HLV cá nhân sẽ hướng dẫn bạn từng bước để chinh phục mục tiêu hình thể đã
                                        đặt ra.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                                <div className={cx('column')}>
                                    <img
                                        className={cx('image-post')}
                                        src={images.homePage2}
                                        alt="Cộng đồng truyền cảm hứng cho bạn trở nên tốt hơn nữa!"
                                    />
                                    <h2 className={cx('title-post')}>
                                        Cộng đồng truyền cảm hứng cho bạn trở nên tốt hơn nữa!
                                    </h2>
                                    <p className={cx('description')}>
                                        Cùng hàng ngàn hội viên lan toả lối sống lành mạnh ngay hôm nay! Đã đến lúc bạn
                                        nên thử những điều mới mẻ, hướng tới cuộc sống hứng khởi và tự tin toả sáng.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grow>

                    <Grow in>
                        <div className={cx('row', 'row-post')}>
                            <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                                <div className={cx('column')}>
                                    <img
                                        className={cx('image-post')}
                                        src={images.homePage3}
                                        alt="Lớp tập nhóm không giới hạn"
                                    />
                                    <h2 className={cx('title-post')}>Lớp tập nhóm không giới hạn</h2>
                                    <p className={cx('description')}>
                                        Tận hưởng niềm vui bất tận với hơn 50 lớp tập nhóm bản quyền từ Lesmills như
                                        Body Combat, Body Jam, RPM, SH’Bam và các chương trình độc quyền do California
                                        thiết kế. Các phiên bản mới được cập nhật liên tục mỗi tháng.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                                <div className={cx('column')}>
                                    <img
                                        className={cx('image-post')}
                                        src={images.homePage4}
                                        alt="Tinh hoa Yoga Ấn Độ nguyên bản"
                                    />
                                    <h2 className={cx('title-post')}>Tinh hoa Yoga Ấn Độ nguyên bản</h2>
                                    <p className={cx('description')}>
                                        Cùng hàng ngàn hội viên lan toả lối sống lành mạnh ngay hôm nay! Đã đến lúc bạn
                                        nên thử những điều mới mẻ, hướng tới cuộc sống hứng khởi và tự tin toả sáng.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                                <div className={cx('column', 'introduce')}>
                                    <h1 className={cx('heading')}>
                                        NGÀY CÀNG HOÀN THIỆN & MANG LẠI TRẢI NGHIỆM TỐT NHẤT
                                    </h1>
                                    <p className={cx('description')}>
                                        Thực hành chuẩn xác Yoga với sự hướng dẫn của các bậc thầy Yoga Ấn Độ. Đạt đến
                                        trạng thái cân bằng hoàn hảo bằng cách xây dựng sức mạnh, độ linh hoạt và sự
                                        uyển chuyển cơ thể trong khi thư giãn hoàn toàn mọi giác quan và giải phóng tâm
                                        trí.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grow>
                </div>
            </div>
            <Post />
            <Parallax />
        </>
    );
}
