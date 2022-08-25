import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Slider.module.scss';

//React library
import Carousel from 'react-bootstrap/Carousel';



//Component
import images from '../../assets/images';

const cx = classNames.bind(styles);

export default function Slider() {
    return (
        <div className={cx('wrapper')}>
            <Carousel fade variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={images.slider1}
                    alt="First slide"
                    />
                    <Carousel.Caption className={cx('heading')}>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={images.slider2}
                    alt="Second slide"
                    />
                    <Carousel.Caption className={cx('heading')}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={images.slider1}
                    alt="Third slide"
                    />
                    <Carousel.Caption className={cx('heading')}>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
      );
}