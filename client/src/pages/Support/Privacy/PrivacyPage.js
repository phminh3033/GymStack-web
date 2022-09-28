import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PrivacyPage.module.scss';

import Divider from '@mui/material/Divider';

const cx = classNames.bind(styles);

export default function PrivacyPage() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <div className={cx('main-heading')}>CÔNG TY CỔ PHẦN GIÁO DỤC THỂ HÌNH GYM STACK</div>
                            <Divider className={cx('divider')} />
                            <div className={cx('sub-heading')}>CHÍNH SÁCH BẢO MẬT</div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>
                                    I. CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN CỦA KHÁCH HÀNG
                                </div>
                                <p className={cx('content')}>
                                    <strong>
                                        1.1. Công Ty thu thập thông tin của Khách Hàng với các mục đích bao gồm nhưng
                                        không giới hạn như sau:
                                    </strong>
                                    <ul className={cx('content')}>
                                        <li>
                                            (i) Xử lý các vấn đề liên quan đến việc Khách Hàng sử dụng dịch vụ hoặc truy
                                            cập vào Trang Điện Tử;
                                        </li>
                                        <li>(ii) Phục vụ cho các dịch vụ chăm sóc khách hàng;</li>
                                        <li>(iii) Cải thiện trải nghiệm Dịch Vụ dựa trên dữ liệu tìm kiếm;</li>
                                        <li>
                                            (iv) Để xác định danh tính của Khách Hàng cho các mục đích ngăn ngừa và phát
                                            hiện gian lận;
                                        </li>
                                        <li>
                                            (v) Để thực hiện nghiên cứu về hành vi của người dùng và thống kê số lượng
                                            người dùng;
                                        </li>
                                        <li>(vi) Các mục đích khác được quy định theo pháp luật hiện hành.</li>
                                    </ul>
                                </p>
                                <p className={cx('content')}>
                                    <strong>1.2. Thông tin của Khách Hàng được Công Ty thu thập:</strong>
                                </p>
                                <p className={cx('content')}>
                                    <strong>1.2.1 Thông tin do Khách Hàng cung cấp:</strong>
                                    <p className={cx('content')}>
                                        Khách hàng có thể cung cấp cho chúng tôi những thông tin của mình bằng cách điền
                                        vào các mẫu đăng ký trên Trang Điện Tử hoặc thông qua việc liên lạc với chúng
                                        tôi qua điện thoại, thư điện tử hoặc thông qua các hình thức khác, bao gồm nhưng
                                        không giới hạn bởi những thông tin cá nhân như: họ tên, ngày tháng năm sinh,
                                        giới tính, địa chỉ cư trú, số điện thoại di động, thư điện tử của Khách Hàng, và
                                        bất kỳ loại thông tin nào khác dưới bất kỳ hình thức nào.
                                    </p>
                                </p>
                                <p className={cx('content')}>
                                    <strong>1.2.2 Thông tin được Công Ty thu thập:</strong>
                                    <p className={cx('content')}>
                                        Đối với mỗi lượt truy cập của Khách Hàng vào Trang Điện Tử hoặc bất kỳ trang
                                        điện tử nào có sử dụng/cung cấp Dịch Vụ của Công Ty, Công Ty có thể tự động thu
                                        thập những thông tin sau:
                                        <ul className={cx('content')}>
                                            <li>
                                                (i) Thông tin về thiết bị, bao gồm nhưng không giới hạn các thông tin kỹ
                                                thuật, bao gồm địa chỉ IP được dùng để kết nối máy tính của Khách Hàng
                                                với mạng Internet, thông tin truy cập, loại và phiên bản trình duyệt,
                                                thiết lập múi giờ, tên máy chủ, phần mở rộng và phiên bản của ứng dụng
                                                trình duyệt, hệ thống và cơ sở hoạt động, thông tin kết nối di động,
                                                nhận dạng thiết bị riêng biệt;
                                            </li>
                                            <li>
                                                (ii) Lịch sử thông tin truy cập của Khách Hàng, bao gồm nhưng không giới
                                                hạn các lượt ghé thăm hay các đoạn lưu thông tin có thể nhận dạng trình
                                                duyệt, định vị tài nguyên thống nhất (URL) mà luồng nhấp chuột dẫn đến,
                                                thông qua hoặc từ Trang điện tử (bao gồm ngày và giờ); dịch vụ mà Khách
                                                Hàng đã tìm kiếm; thời gian phản hồi từ Trang Điện Tử, lỗi tải về, độ
                                                dài những lần ghé thăm những trang nhất định, thông tin tương tác đối
                                                với trang điện tử (như việc rê, nhấp và di chuyển chuột), ngôn ngữ trình
                                                duyệt, phương pháp được sử dụng để duyệt trang từ xa và mọi số điện
                                                thoại/ địa chỉ thư điện tử được dùng để liên hệ với dịch vụ chăm sóc
                                                khách hàng của Công Ty theo bất kỳ cách nào;
                                            </li>
                                            <li>
                                                (iii) Thông tin về địa điểm bao gồm nhưng không giới hạn các thông tin
                                                về vị trí cụ thể của Khách Hàng như các tín hiệu được gửi từ (các) thiết
                                                bị mà Khách Hàng đang sử dụng để xác định vị trí cụ thể của Khách Hàng;
                                            </li>
                                            <li>
                                                (iv) Các thông tin lưu trữ cục bộ: Công Ty có thể thu thập và lưu trữ
                                                các thông tin được lưu trên các thiết bị của Khách Hàng đang sử dụng các
                                                cơ chế như thông tin về các trang điện tử của trình duyệt hay hệ thống
                                                lưu trữ tạm thời của Trang Điện Tử.
                                            </li>
                                        </ul>
                                    </p>
                                </p>
                                <p className={cx('content')}>
                                    <strong>1.2.3 Thông tin lưu trữ (Cookies):</strong>
                                    <p className={cx('content')}>
                                        Chúng tôi có thể sử dụng cookies (tập tin văn bản nhỏ mà chúng tôi và các nhà
                                        điều hành các trang điện tử khác lưu trữ trên máy tính hoặc thiết bị của Khách
                                        Hàng khi Khách Hàng truy cập vào Trang Điện Tử) và các công nghệ tương tự khác
                                        để lưu trữ dữ liệu vì mục đích cung cấp cho Khách Hàng trải nghiệm tốt hơn,
                                        nhanh hơn, an toàn hơn và được cá nhân hóa khi Khách Hàng sử dụng Dịch Vụ hoặc
                                        truy cập vào Trang Điện Tử. Cookies cho phép chúng tôi nhận biết Khách Hàng mỗi
                                        khi Khách Hàng truy cập lại Trang Điện Tử, lưu trữ thông tin về các sự quan tâm
                                        ưu tiên của Khách Hàng, đề xuất các dịch vụ phù hợp cho Khách Hàng, và cải thiện
                                        trải nghiệm người dùng về hiệu suất Trang Điện Tử. Các dữ liệu đó cũng cho phép
                                        chúng tôi tạo các thống kê số lượt người truy cập Trang Điện Tử và cách thức mà
                                        họ đã sử dụng Trang Điện Tử và mạng internet.
                                    </p>
                                    <p className={cx('content')}>
                                        Để làm rõ, các cookies nêu trên có thể bao gồm cả cookies được cài đặt bởi bên
                                        thứ ba (Google, Youtube, Facebook hoặc Instagram) để thu thập trải nghiệm người
                                        dùng và phân tích sở thích của Khách Hàng một cách độc lập, và Trang Điện Tử
                                        hoàn toàn không có khả năng đọc, ghi lên và/ hoặc truy cập chúng. Khách Hàng có
                                        thể quản lý và xóa cookies thông qua cài đặt trình duyệt hoặc thiết bị của Khách
                                        Hàng. Để biết thêm thông tin về cách thực hiện, hãy truy cập tài liệu trợ giúp
                                        của trình duyệt hoặc thiết bị của Khách Hàng.
                                    </p>
                                </p>
                                <p className={cx('content')}>
                                    <strong>1.3. Việc chia sẻ thông tin của Khách Hàng:</strong>
                                    <p className={cx('content')}>
                                        Công Ty có thể chia sẻ và cho phép chia sẻ dữ liệu cá nhân của Khách Hàng với
                                        các bên thứ ba và các bên liên kết của Công Ty cho bất kỳ mục đích nào nêu trên,
                                        bao gồm nhằm tạo điều kiện cho Khách Hàng sử dụng Dịch Vụ, hoàn thành giao dịch
                                        với Khách Hàng và mối quan hệ của chúng tôi với Khách Hàng, tiếp thị và thực
                                        hiện bất kỳ yêu cầu, quy định pháp luật và yêu cầu khác mà Công Ty nhận thấy là
                                        cần thiết. Khi chia sẻ dữ liệu cá nhân của Khách Hàng, Công Ty sẽ nỗ lực đảm bảo
                                        rằng các bên thứ ba và các bên liên kết của Công Ty sẽ bảo vệ dữ liệu cá nhân
                                        của Khách Hàng tránh khỏi sự truy cập, thu thập, sử dụng, tiết lộ, xử lý trái
                                        phép hoặc các rủi ro tương tự và chỉ lưu trữ dữ liệu cá nhân của Khách Hàng
                                        trong trường hợp họ cần dữ liệu cá nhân của Khách Hàng để thực hiện các mục đích
                                        nêu trên.
                                    </p>
                                </p>
                                <p className={cx('content')}>
                                    <strong>1.4. Việc tiết lộ thông tin của Khách Hàng:</strong>
                                    <p className={cx('content')}>
                                        Khách Hàng xác nhận và chấp thuận rằng Công Ty có quyền tiết lộ thông tin cá
                                        nhân của Khách Hàng cho bên thứ ba trong các trường hợp sau:
                                        <ul className={cx('content')}>
                                            <li>
                                                (i) Công Ty tiến hành mua hoặc bán bất kỳ doanh nghiệp hoặc tài sản nào
                                                mà trong những trường hợp đó chúng tôi có thể tiết lộ thông tin cá nhân
                                                cho những người bán, người mua tiềm năng cũng như các bên thứ ba khác
                                                liên quan đến doanh nghiệp hoặc tài sản đó khi cần thiết.
                                            </li>
                                            <li>
                                                (ii) Công Ty có trách nhiệm tiết lộ bất kỳ cơ quan pháp lý, cơ quan quản
                                                lý nhà nước, cơ quan chính phủ, cơ quan thuế hoặc cơ quan thực thi pháp
                                                luật hoặc bất kỳ cơ quan khác hoặc các chủ sở hữu có thẩm quyền liên
                                                quan nếu Công Ty có cơ sở hợp lý để tin rằng việc tiết lộ thông tin cá
                                                nhân của Khách Hàng là cần thiết để thực hiện bất kỳ nghĩa vụ, yêu cầu
                                                hoặc thỏa thuận, bất kể là tự nguyện hoặc bắt buộc, được xem như là kết
                                                quả của việc hợp tác theo lệnh, điều tra và/hoặc yêu cầu theo thẩm quyền
                                                của bất kỳ các cơ quan này. Trong phạm vi phát luật cho phép, trong mọi
                                                trường hợp, Khách Hàng đồng ý không thực hiện bất kỳ hành động và/hoặc
                                                từ bỏ quyền thực hiện bất kỳ hành động nào chống lại Công Ty liên quan
                                                đến việc tiết lộ thông tin cá nhân trong những trường hợp này.
                                            </li>
                                        </ul>
                                    </p>
                                </p>
                                <p className={cx('content')}>
                                    <strong>1.5. Thời gian lưu trữ thông tin cá nhân:</strong>
                                    <p className={cx('content')}>
                                        Chúng tôi sẽ lưu trữ các thông tin cá nhân do Khách Hàng cung cấp trên các hệ
                                        thống nội bộ của chúng tôi trong quá trình cung cấp dịch vụ cho Khách Hàng hoặc
                                        cho đến khi hoàn thành mục đích thu thập hoặc khi Khách Hàng có yêu cầu hủy các
                                        thông tin đã cung cấp.
                                    </p>
                                </p>
                                <p className={cx('content')}>
                                    <strong>1.6. Đơn vị thu thập và quản lý thông tin:</strong>
                                    <p className={cx('content')}>
                                        Tên đơn vị: CÔNG TY CỔ PHẦN GIÁO DỤC THỂ HÌNH GYM STACK
                                    </p>
                                    <p className={cx('content')}>
                                        Thành lập và hoạt động theo Giấy chứng nhận đăng ký doanh nghiệp số 0305xxxxxx
                                        do Sở Kế hoạch và Đầu tư thành phố Hồ Chí Minh cấp lần đầu ngày xx tháng xx năm
                                        20xx
                                    </p>
                                    <p className={cx('content')}>
                                        Địa chỉ trụ sở chính: Khu II, Đ. 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ
                                    </p>
                                    <p className={cx('content')}>Điện thoại: 0292.xxx.xxxx</p>
                                    <p className={cx('content')}>Thư điện tử: contact@gymstack.edu.vn</p>
                                </p>
                            </div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>
                                    II. CAM KẾT BẢO MẬT THÔNG TIN CÁ NHÂN CỦA KHÁCH HÀNG
                                </div>
                                <p className={cx('content')}>
                                    2.1. Chúng tôi có biện pháp thích hợp về kỹ thuật và an ninh để ngăn chặn truy cập
                                    trái phép hoặc trái pháp luật hoặc mất mát, tiêu hủy hoặc thiệt hại cho thông tin
                                    của Khách Hàng. Khi thu thập dữ liệu trên Trang Điện Tử, chúng tôi thu thập chi tiết
                                    cá nhân của Khách Hàng trên máy chủ với hệ thống tường lửa đảm bảo an toàn. Chúng
                                    tôi duy trì các biện pháp bảo vệ vật lý và điện tử trong mối liên kết với việc thu
                                    thập, lưu trữ và tiết lộ thông tin của Khách Hàng.
                                </p>
                                <p className={cx('content')}>
                                    2.2. Chúng tôi khuyến cáo Khách Hàng không nên cung cấp thông tin thanh toán với bất
                                    kỳ ai dưới bất kỳ hình thức nào, chúng tôi không chịu trách nhiệm về những tổn thất
                                    mà Khách Hàng có thể gánh chịu từ việc trao đổi thông tin của Khách Hàng nói trên.
                                </p>
                                <p className={cx('content')}>
                                    2.3. Khách Hàng cần lưu ý rằng không có phương thức truyền tin qua internet hoặc
                                    phương pháp lưu trữ điện tử nào là an toàn tuyệt đối. Mặc dù việc bảo mật không thể
                                    được đảm bảo tuyệt đối, chúng tôi sẽ luôn nỗ lực bảo mật của thông tin của Khách
                                    Hàng và liên tục kiểm tra và tăng cường các biện pháp bảo mật thông tin của chúng
                                    tôi. Trong trường hợp hệ thống máy chủ lưu trữ của chúng tôi bị tấn công hoặc xâm
                                    nhập mạng dẫn đến mất mát, tiêu hủy hoặc thiệt hại cho thông tin của Khách Hàng,
                                    chúng tôi sẽ (i) thông báo sự cố đến cơ quan chức năng trong một khoảng thời gian
                                    theo luật định để tiến hành điều tra, và (ii) thông báo kịp thời đến Khách Hàng.
                                </p>
                            </div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>III. CẬP NHẬT VÀ NGÔN NGỮ CỦA CHÍNH SÁCH BẢO MẬT</div>
                                <p className={cx('content')}>
                                    3.1. Khách Hàng đồng ý rằng chúng tôi có quyền sửa đổi, thay đổi các điều khoản
                                    trong Chính Sách Bảo Mật này vào bất cứ thời điểm nào mà không cần thông báo trước.
                                    Các sửa đổi sẽ được cập nhật trên Trang Điện Tử và có hiệu lực kể từ ngày quyết định
                                    về việc sửa đổi Chính Sách Bảo Mật có hiệu lực. Việc Khách Hàng tiếp tục sử dụng
                                    Trang Điện Tử sau khi Chính Sách Bảo Mật sửa đổi được công bố và áp dụng đồng nghĩa
                                    với việc Khách Hàng chấp nhận Chính Sách Bảo Mật được chỉnh sửa đó.
                                </p>
                                <p className={cx('content')}>
                                    3.2. Theo quy định pháp luật, ngôn ngữ được ưu tiên sử dụng và tham chiếu là tiếng
                                    Việt. Trong trường hợp có sự mâu thuẫn trong cách giải thích giữa bản tiếng Việt và
                                    các ngôn ngữ khác thì bản tiếng Việt sẽ được ưu tiên tham chiếu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
