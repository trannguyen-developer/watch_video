import React, {useRef, useState, useEffect} from 'react';
import classes from './style.module.scss';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const SliderBar = (props) => {
    const listSlider = useRef()
    const [numberProduct, setNumberProduct] = useState(0)
    
    // tua 3 san pham tren slider
    const clickHandleArrowLeft = () => {
        setNumberProduct(numberProduct + 3)
    }
    
    // lui 3 san pham tren slider
    const clickHandleArrowRight = () => {
        setNumberProduct(numberProduct - 3)
    }

    //  hien thi slider tu 0 den 10 san pham (4 + 6)
    useEffect(() => {
        // hien thi 4 san pham
        if(numberProduct > 0) {
            setNumberProduct(0)
        }
        // 6 san pham an
        if(numberProduct < - 6) {
            setNumberProduct(- 6)
        }
    }, [numberProduct])

    return(
        <div className={`${classes['slider-bar']} ${props.className}`}>
            <div className={classes.arrow}>
                <div className={`${classes['arrow-icon']} ${classes['arrow-icon-left']}`} onClick={clickHandleArrowLeft}>
                    <NavigateBefore />
                </div>
                <div className={`${classes['arrow-icon']} ${classes['arrow-icon-right']}`} onClick={clickHandleArrowRight}>
                    <NavigateNext />
                </div>
            </div>
            {/* list 10 product */}
            <ul className={classes['list-slider']} style={{transform: `translateX(${numberProduct*25}%)`}} ref={listSlider}>
                <li>
                    <Link to={"/detail"} style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}>
                    </Link>
                </li>
                <li>
                    <Link to={"/detail"} style={{backgroundImage: 'url(https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg)'}}>
                    </Link>
                </li>
                <li>
                    <Link to={"/detail"} style={{backgroundImage: 'url(https://i.ytimg.com/vi/j5-yKhDd64s/hq720.jpg)'}}>
                    </Link>
                </li>
                <li>
                    <Link to={"/detail"} style={{backgroundImage: 'url(https://i.ytimg.com/vi/DXqXG621OUI/hq720.jpg)'}}>
                    </Link>
                </li>
                <li>
                    <Link to={"/detail"} style={{backgroundImage: 'url(https://i.ytimg.com/vi/XGGWhOUYObc/hq720.jpg)'}}>
                    </Link>
                </li>
                <li>
                    <Link to={"/detail"} style={{backgroundImage: 'url(https://i.ytimg.com/vi/50VNCymT-Cs/hq720.jpg)'}}>
                    </Link>
                </li>
                <li>
                    <Link to={"/detail"} style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}>
                    </Link>
                </li>
                <li>
                    <Link to={"/detail"} style={{backgroundImage: 'url(https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg)'}}>
                    </Link>
                </li>
                <li>
                    <Link to={"/detail"} style={{backgroundImage: 'url(https://i.ytimg.com/vi/j5-yKhDd64s/hq720.jpg)'}}>
                    </Link>
                </li>
                <li>
                    <Link to={"/detail"} style={{backgroundImage: 'url(https://i.ytimg.com/vi/DXqXG621OUI/hq720.jpg)'}}>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SliderBar
