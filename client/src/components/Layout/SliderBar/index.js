import React, {useRef, useState, useEffect} from 'react';
import classes from './style.module.scss';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const SliderBar = (props) => {

    const allVideo = useSelector(state => state.allVideo)
        
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
                {allVideo.map((child, index) => (
                    <li key={index}>
                        <Link to={`/detail/${child._id}`} style={{backgroundImage: `url(https://i.ytimg.com/vi/${child.idVideo}/hqdefault.jpg)`}}>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SliderBar
