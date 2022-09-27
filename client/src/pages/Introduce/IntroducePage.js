import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './IntroducePage.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function IntroducePage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-introduce')}>
                <div className={cx('introduce-text')}>
                    <p className={cx('introduce-heading')}>
                        SỨ MỆNH CỦA CHÚNG TÔI LÀ MANG LẠI SỨC KHOẺ, NIỀM HẠNH PHÚC <br /> VÀ HY VỌNG CHO CỘNG ĐỒNG
                        FITNESS VIỆT NAM
                    </p>
                </div>
            </div>
            <div className={cx('doYouKnow')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <div className={cx('main-heading', 'heading')}>BẠN CÓ BIẾT?</div>
                            <p className={cx('content')}>
                                Ngoài kia có rất nhiều bạn làm sai nghề, tư duy an phận và bị chôn chân với một công
                                việc không đủ vui, không đủ sống, các bạn ấy gặp hết khủng hoảng tuổi này tới tuổi kia.
                                Tuổi 22 đang ngỡ ngàng không biết mình nên làm nghề gì. Tuổi 28 thì bàng hoàng không
                                biết lương như mình thì lập gia đình và nuôi dạy con cái làm sao. Tuổi 40 nuối tiếc
                                thanh xuân của mình liệu có phải đã phí hoài không nhỉ...
                            </p>

                            <div className={cx('heading')}>TẦM NHÌN</div>
                            <p className={cx('content')}>
                                Trở thành công ty công nghệ sức khỏe có vị thế vững vàng trên thị trường, với các sản
                                phẩm hỗ trợ rèn luyện sức khỏe chất lượng, thông minh và hiệu quả. GymStack sẽ nổi tiếng
                                bởi chất lượng sản phẩm vượt trội và được cộng đồng tin tưởng chứ không phải vì tiếp thị
                                tốt.
                            </p>
                            <div className={cx('heading')}>GIÁ TRỊ CỐT LÕI</div>
                            <p className={cx('content')}>
                                <strong>Sự tử tế:</strong> Tử tế trong chính cộng đồng GymStack với nhau và tử tế với
                                người dùng là kim chỉ nam phấn đấu. Đã làm sản phẩm là phải chất lượng và chứng minh
                                được hiệu quả, bất kể là sản phẩm miễn phí hay giá rẻ. Làm ra phải thấy muốn để người
                                thân mình dùng.
                            </p>
                            <p className={cx('content')}>
                                <strong>Tư duy số: </strong>Sản phẩm làm ra không phải là để vừa lòng đội ngũ GymStack.
                                Sản phẩm làm ra với mục tiêu cao nhất là người dùng thấy dễ học, được truyền cảm hứng tự
                                tập luyện, động lực tập tới bài tập cuối cùng và người dùng có thể tự tin với vóc dáng
                                của mình bằng nổ lực của bản thân.
                            </p>
                            <p className={cx('content')}>
                                <strong>Luôn đổi mới và không ngừng học:</strong> Học từ chính đối thủ, học từ những
                                công ty công nghệ sức khỏe tốt trên thế giới và luôn luôn lắng nghe mọi góp ý từ phía
                                người dùng.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('whatToSale')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <div className={cx('content')}>
                                <h3 className={cx('heading')}>BẠN NHẬN ĐƯỢC GÌ TỪ GYMSTACK?</h3>
                                <div className={cx('grid')}>
                                    <div className={cx('gridItem')}>
                                        <h4 className={cx('gridItem-heading')}>1. Sự nhiệt tình</h4>
                                        <p className={cx('gridItem-content')}>
                                            Các thành viên tích cực giải đáp nếu có bất kỳ thắc mắc nào về bài tập, lịch
                                            tập cũng như các kiến thức cần thiết về dinh dưỡng và sức khỏe.
                                        </p>
                                    </div>
                                    <div className={cx('gridItem')}>
                                        <h4 className={cx('gridItem-heading')}>2. Tính chủ động</h4>
                                        <p className={cx('gridItem-content')}>
                                            Muốn đạt được tỷ lệ cơ thể cùng vóc dáng mong ước thì chỉ còn cách là tự chủ
                                            động học hỏi và không ngừng tập luyện cùng các thành viên khác trong cộng
                                            đồng.
                                        </p>
                                    </div>
                                    <div className={cx('gridItem')}>
                                        <h4 className={cx('gridItem-heading')}>3. Tính cộng đồng</h4>
                                        <p className={cx('gridItem-content')}>
                                            Cùng với các con người trong cộng đồng, giúp thúc đẩy tạo động lực cho nhau
                                            rèn luyện sức khỏe.
                                        </p>
                                    </div>
                                    <div className={cx('gridItem')}>
                                        <h4 className={cx('gridItem-heading')}>4. Làm điều quan trọng</h4>
                                        <p className={cx('gridItem-content')}>
                                            Chỉ luyện tập và tập trung làm những điều quan trọng để đạt được mục tiêu
                                            trong thời gian ngắn nhất.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('strategy')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <h3 className={cx('heading')}>CHIẾN LƯỢC PHÁT TRIỂN</h3>
                            <div className={cx('textContent')}>
                                <h4 className={cx('textContent-heading')}>1. Tập trung vào khách hàng</h4>
                                <p className={cx('textContent-content')}>
                                    Khi tập luyện phần đông học viên dễ bị mất định hướng, dễ nản khi gặp khó khăn mà
                                    không ai giúp đỡ, nhiều khi thấy làm giống hệt video rồi mà không hiệu quả... Tại
                                    GymStack, chúng tôi thấu hiểu những khó khăn của các bạn, chúng tôi nỗ lực tạo ra
                                    giáo trình, hệ thống bài tập và đặc biệt hơn cả là cộng đồng giúp đỡ lẫn nhau, hệ
                                    thống hỗ trợ các bạn tối đa trong quá trình tập luyện.
                                </p>
                            </div>
                            <div className={cx('textContent')}>
                                <h4 className={cx('textContent-heading')}>2. Chăm sóc khách hàng bền vững</h4>
                                <p className={cx('textContent-content')}>
                                    Việc tập luyện sẽ trở nên rất dễ dàng khi khách hàng sử dụng hiệu quả và truyền tai
                                    nhau về sản phẩm. Thành công về mặt doanh số không quan trọng bằng việc người tập
                                    đánh giá cao sản phẩm sau đó tiếp tục sử dụng, thậm chí còn giới thiệu cho người
                                    thân và bạn bè.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('action')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <div className={cx('wrap-btn')}>
                                <div className={cx('action-btn')}>
                                    <Link to="/careers" className={cx('text-btn')}>
                                        Cơ hội việc làm
                                    </Link>
                                </div>
                                <div className={cx('action-btn')}>
                                    <Link to="/support" className={cx('text-btn')}>
                                        Hỗ trợ
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
