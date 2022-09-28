import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './TermsPage.module.scss';

import Divider from '@mui/material/Divider';

const cx = classNames.bind(styles);

export default function TermsPage() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <div className={cx('main-heading')}>CÔNG TY CỔ PHẦN GIÁO DỤC THỂ HÌNH GYM STACK</div>
                            <Divider className={cx('divider')} />
                            <div className={cx('sub-heading')}>ĐIỀU KHOẢN SỬ DỤNG</div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>A. ĐIỀU KHOẢN VÀ ĐIỀU KIỆN CHUNG</div>
                                <div className={cx('heading')}>I. GIỚI THIỆU</div>
                                <p className={cx('content')}>
                                    1.1. “Cộng đồng”: có nghĩa là bất kỳ hoặc toàn bộ cộng đồng thể dục thể hình được
                                    vận hành bởi Công Ty hoặc các bên liên quan của Công Ty mà Khách Hàng được cấp quyền
                                    sử dụng Dịch Vụ.
                                </p>
                                <p className={cx('content')}>
                                    1.2. “Dịch vụ”: có nghĩa là dịch vụ trung tâm thể dục thể hình rèn luyện sức khỏe
                                    và/hoặc dịch vụ huấn luyện viên cá nhân được cung cấp bởi Công Ty hoặc các bên có
                                    liên quan của Công Ty tại bất kỳ hoặc toàn bộ Câu Lạc Bộ.
                                </p>
                                <p className={cx('content')}>
                                    1.3. “Thành viên”: có nghĩa là cá nhân đăng ký hoặc ký kết hợp đồng thành viên với
                                    Công Ty.
                                </p>
                                <p className={cx('content')}>
                                    1.4. “Trang Điện Tử”: có nghĩa là trang điện tử gymstack.com.vn thuộc quyền quản lý,
                                    vận hành và duy trì của Công Ty nhằm mục đích phục vụ cho hoạt động kinh doanh của
                                    Công Ty trong lĩnh vực rèn luyện sức khỏe, trung tâm thể dục thể hình.
                                </p>
                            </div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>
                                    II. TUÂN THỦ ĐIỀU KHOẢN VÀ ĐIỀU KIỆN SỬ DỤNG TRANG ĐIỆN TỬ
                                </div>
                                <p className={cx('content')}>
                                    2.1. Điều Khoản Và Điều Kiện dành cho Khách Hàng này điều chỉnh việc truy cập và sử
                                    dụng Trang Điện Tử của Khách Hàng. Bằng việc truy cập và sử dụng Trang Điện Tử,
                                    Khách Hàng được xem là đã đồng ý chịu sự ràng buộc của các Điều Khoản Và Điều Kiện
                                    dành cho Khách Hàng. Trong trường hợp Khách Hàng không đồng ý với các quy định của
                                    Điều Khoản Và Điều Kiện này, Khách Hàng vui lòng không truy cập, sử dụng Trang Điện
                                    Tử.
                                </p>
                                <p className={cx('content')}>
                                    2.2. Công Ty có thể sửa đổi Điều Khoản Và Điều Kiện dành cho Khách Hàng tùy từng
                                    thời điểm mà không cần thông báo trước cho Khách Hàng. Các sửa đổi sẽ có hiệu lực
                                    ngay khi Công Ty đăng tải bản cập nhật của các Điều Khoản Và Điều Kiện dành cho
                                    Khách Hàng lên Trang Điện Tử. Việc Khách Hàng tiếp tục truy cập và sử dụng Trang
                                    Điện Tử sau khi Điều Khoản Và Điều Kiện dành cho Khách Hàng được cập nhật sẽ được
                                    xem là Khách Hàng đã đồng ý chịu sự ràng buộc của Điều Khoản Và Điều Kiện sau khi
                                    được sửa đổi. Trong trường hợp Khách Hàng không đồng ý với các nội dung thay đổi,
                                    Khách Hàng có thể ngừng truy cập và chấm dứt sử dụng Trang Điện Tử. Khách Hàng vui
                                    lòng kiểm tra thường xuyên mục Điều Khoản Và Điều Kiện khi truy cập Trang Điện Tử để
                                    được cập nhật các quy định mới nhất của Công Ty dành cho Khách Hàng.
                                </p>
                                <p className={cx('content')}>
                                    2.3. Mọi quyền sở hữu trí tuệ, bao gồm nhưng không hạn chế quyền đối với các thông
                                    tin và nội dung được công bố và sử dụng trên Trang Điện Tử này đều thuộc sở hữu của
                                    Công Ty hoặc các bên được Công Ty cấp phép sử dụng. Toàn bộ nội dung và hình thức
                                    của Trang Điện Tử được bảo hộ bởi pháp luật sở hữu trí tuệ Việt Nam và pháp luật sở
                                    hữu trí tuệ quốc tế.
                                </p>
                                <p className={cx('content')}>
                                    2.4. Công Ty có toàn quyền giới hạn một số tính năng hoặc phạm vi truy cập/ sử dụng
                                    của Khách Hàng đối với một phần hoặc toàn bộ Trang Điện Tử hoặc Dịch Vụ mà không cần
                                    thông báo trước.
                                </p>
                                <p className={cx('content')}>
                                    2.5. Nghiêm cấm sử dụng bất kỳ phần nào của Trang Điện Tử với mục đích thương mại
                                    hoặc nhân danh bất kỳ đối tác thứ ba nào nếu không được Công Ty cho phép trước bằng
                                    văn bản.
                                </p>
                            </div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>III. QUYỀN RIÊNG TƯ</div>
                                <p className={cx('content')}>
                                    Công Ty coi trọng việc bảo mật thông tin của Khách Hàng. Để bảo vệ quyền lợi của
                                    Khách Hàng, Công Ty cung cấp Chính Sách Bảo Mật tại Trang Điện Tử để giải thích chi
                                    tiết các hoạt động bảo mật của Công Ty. Vui lòng tham khảo Chính Sách Bảo Mật tại
                                    (gymstack.com.vn/privacy) quy định về việc Công Ty thu thập và sử dụng thông tin do
                                    Khách Hàng cung cấp qua Trang Điện Tử liên quan đến việc sử dụng Dịch Vụ của Khách
                                    Hàng (“Thông Tin Khách Hàng”). Điều Khoản Và Điều Kiện này có liên quan mật thiết
                                    với Chính Sách Bảo Mật. Bằng cách sử dụng Dịch Vụ hoặc cung cấp thông tin trên Trang
                                    Điện Tử, Khách Hàng đồng ý cho phép Công Ty thu thập, lưu trữ và sử dụng các Thông
                                    Tin Khách Hàng như được quy định trong Chính Sách Bảo Mật. Để làm rõ, Công Ty không
                                    có nghĩa vụ phải chi trả bất kỳ khoản phí hay lợi ích nào cho Khách Hàng hoặc bất kỳ
                                    cá nhân, tổ chức nào khác cho việc khai thác, sử dụng các Thông Tin Khách Hàng, và
                                    bất kỳ việc khai thác, sử dụng nào như vậy sẽ không bị xem là xâm phạm quyền sở hữu
                                    trí tuệ hay bất kỳ quyền nào khác của bất kỳ cá nhân, tổ chức nào hay vi phạm bất kỳ
                                    quy định pháp luật nào.
                                </p>
                            </div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>IV. GIỚI HẠN TRÁCH NHIỆM VÀ BỒI THƯỜNG</div>
                                <p className={cx('content')}>
                                    4.1. Các Điều Khoản Và Điều Kiện này được lập ra phù hợp và tuân thủ với quy định
                                    của pháp luật. Khách hàng khi truy cập và sử dụng Trang Điện Tử được xem là đã đọc,
                                    hiểu rõ và đồng ý với các Điều Khoản Và Điều Kiện này và đồng ý rằng Công Ty không
                                    chịu trách nhiệm cho bất kỳ thiệt hại hoặc mất mát nào dưới bất kỳ hình thức nào,
                                    bất kể phát sinh trực tiếp hay gián tiếp, từ việc áp dụng các Điều Khoản Và Điều
                                    Kiện này.
                                </p>
                                <p className={cx('content')}>
                                    4.2. Khách Hàng đồng ý tự chịu trách nhiệm đối với mọi vấn đề, trách nhiệm, thiệt
                                    hại phát sinh từ việc sử dụng Trang Điện Tử của Khách hàng, bao gồm nhưng không giới
                                    hạn ở việc đăng ký sử dụng Dịch Vụ trên Trang Điện Tử và sử dụng Dịch Vụ, trừ trường
                                    hợp có bằng chứng cụ thể chứng minh các vấn đề, trách nhiệm, thiệt hại đó phát sinh
                                    do lỗi cố ý hoặc bất cẩn của chúng tôi. Chúng tôi không chịu trách nhiệm cho bất kỳ
                                    vấn đề, trách nhiệm, thiệt hại nào phát sinh do Khách Hàng hoặc bất kỳ bên thứ ba
                                    nào không tuân thủ các quy định của Điều Khoản Và Điều Kiện này hoặc các quy định
                                    của pháp luật có liên quan, hoặc các vấn đề, trách nhiệm, thiệt hại phát sinh từ các
                                    nguyên nhân vượt quá tầm kiểm soát hợp lý của chúng tôi.
                                </p>
                                <p className={cx('content')}>
                                    4.3. Khách Hàng đồng ý bồi thường cho Công Ty đối với mọi thiệt hại, tổn thất phát
                                    sinh do việc không tuân thủ của Khách Hàng hoặc những người có liên quan với Khách
                                    Hàng đối với Điều Khoản Và Điều Kiện này và các quy định, quy tắc nêu trên.
                                </p>
                            </div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>V. ĐIỀU KHOẢN SỬ DỤNG</div>
                                <p className={cx('content')}>
                                    5.1. Tại thời điểm đăng ký sử dụng Dịch Vụ, Khách Hàng phải từ đủ mười tám (18) tuổi
                                    trở lên.
                                </p>
                                <p className={cx('content')}>
                                    5.2. Để đăng ký sử dụng Dịch Vụ trên Trang Điện Tử, Khách Hàng được yêu cầu cung cấp
                                    một số thông tin cá nhân bao gồm nhưng không giới hạn họ tên, ngày tháng năm sinh,
                                    địa chỉ cư trú, số điện thoại di động, thư điện tử của Khách Hàng. Trong mọi trường
                                    hợp, Khách Hàng phải tự chịu trách nhiệm về tính hợp pháp, chính xác và trung thực
                                    của các thông tin do Khách Hàng cung cấp cho Công Ty, và Công Ty không có nghĩa vụ
                                    xác minh các thông tin đó.
                                </p>
                                <p className={cx('content')}>
                                    5.3. Khách Hàng không được thực hiện bất kỳ hành vi nào dưới bất kỳ hình thức nào
                                    gây xâm hại hoặc có thể gây xâm hại đến Trang Điện Tử hoặc Công Ty hoặc bất kỳ Khách
                                    Hàng nào khác hoặc thông tin của các Khách Hàng đó, bao gồm nhưng không giới hạn ở
                                    các hành vi sau đây:
                                </p>
                                <p className={cx('content')}>
                                    <ol className={cx('sub-content')}>
                                        <li>
                                            Sử dụng bất kỳ phần nào của Trang Điện Tử dưới bất kỳ hình thức nào cho mục
                                            đích thương mại hoặc vì mục đích vụ lợi cá nhân khác mà không có sự đồng ý
                                            của Công Ty hoặc Trang Điện Tử bằng văn bản;
                                        </li>
                                        <li>
                                            Sử dụng bất kỳ chương trình, công cụ hoặc hình thức khác để can thiệp vào hệ
                                            thống hoặc làm thay đổi cấu trúc dữ liệu của Trang Điện Tử;
                                        </li>
                                        <li>
                                            Phát tán, truyền bá, cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại
                                            hay xâm nhập vào dữ liệu hệ thống của Trang Điện Tử hoặc Công Ty;
                                        </li>
                                        <li>
                                            Cản trở hoạt động hoặc sự vận hành của Trang Điện Tử dưới bất kỳ hình thức
                                            nào.
                                        </li>
                                    </ol>
                                </p>
                            </div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>VI. LUẬT ÁP DỤNG VÀ QUYỀN TÀI PHÁN</div>
                                <p className={cx('content')}>
                                    6.1. Điều Khoản Và Điều Kiện này và bất kỳ tranh chấp hoặc khiếu kiện nào phát sinh
                                    từ hoặc liên quan đến Điều Khoản Và Điều Kiện này sẽ được giải thích và điều chỉnh
                                    theo luật pháp của Việt Nam.
                                </p>
                                <p className={cx('content')}>
                                    6.2. Bất kỳ tranh chấp, tranh cãi, khiếu nại hoặc sự bất đồng dưới bất cứ hình thức
                                    nào phát sinh từ hoặc liên quan đến các Điều Khoản Và Điều Kiện này hoặc việc sử
                                    dụng Trang Điện Tử sẽ được giải quyết trước tiên bằng hình thức thương lượng, hòa
                                    giải. Trong trường hợp tranh chấp không giải quyết được bằng thỏa thuận, tranh chấp
                                    đó sẽ được giải quyết bằng trọng tài tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC)
                                    bên cạnh Phòng Thương mại và Công nghiệp Việt Nam theo Quy tắc tố trụng trọng tài
                                    của VIAC, số lượng trọng tài viên là một, được chỉ định theo quy tắc của VIAC và
                                    ngôn ngữ trọng tài là tiếng Việt. Địa điểm tổ chức trọng tài là Thành phố Hồ Chí
                                    Minh.
                                </p>
                            </div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>B. QUY ĐỊNH VỀ SỬ DỤNG DỊCH VỤ</div>
                                <div className={cx('heading')}>
                                    HƯỚNG DẪN ĐĂNG KÝ SỬ DỤNG DỊCH VỤ TRÊN TRANG ĐIỆN TỬ
                                </div>
                                <p className={cx('content')}>
                                    Bước 1: Khách Hàng truy cập vào Trang Điện Tử và chọn mục [“Đăng nhập”].
                                </p>
                                <p className={cx('content')}>
                                    Bước 2: Khách Hàng có thể đăng nhập bằng 2 cách: Sử dụng tài khoản Google hoặc đăng
                                    ký tài khoản trực tiếp trên Trang Điện Tử. Để đăng ký tài khoản Khách Hàng chọn mục
                                    [“Đăng ký"] ngay dưới nút “Đăng nhập” và điền các thông tin theo yêu cầu.
                                </p>
                                <p className={cx('content')}>
                                    Bước 3: Sau khi điền đầy đủ các thông tin theo yêu cầu và bấm vào nút “Đăng ký”. Vui
                                    lòng kiểm tra kỹ thông tin trước khi chọn nút “Đăng ký”. Khách Hàng đăng nhập tài
                                    khoản vừa đăng ký và có thể sử dụng dịch vụ của chúng tôi trên Trang Điện Tử.
                                </p>
                            </div>
                            <div className={cx('chapter')}>
                                <div className={cx('heading')}>C. TRUNG TÂM HỖ TRỢ KHÁCH HÀNG</div>
                                <p className={cx('content')}>
                                    Trong trường hợp Khách Hàng có thắc mắc hoặc cần hỗ trợ, Khách Hàng có thể liên hệ
                                    với chúng tôi bằng cách:
                                </p>
                                <p className={cx('content')}>
                                    <ol className={cx('sub-content')}>
                                        <li>Liên hệ qua đường dây nóng: 0292.xxx.xxxx</li>
                                        <li>Liên hệ qua địa chỉ thư điện tử: contact@gymstack.edu.vn</li>
                                        <li>
                                            Liên hệ trực tiếp tại địa chỉ: Khu II, Đ. 3/2, Xuân Khánh, Ninh Kiều, Cần
                                            Thơ
                                        </li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
