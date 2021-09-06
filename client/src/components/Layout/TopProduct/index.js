import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles.js'

const TopProduct = () => {
    const classes = useStyles();
    const [chooseTopItem, setChooseTopItem] = useState(0)
    
    const handleClickChooseTop = (index) => {
        setChooseTopItem(index)
    }
    
    const chooseTopArr = ['Hôm nay', 'Tuần', 'Tháng']
    const renderChooseTop = chooseTopArr.map((child, index) => <li onClick={()=>handleClickChooseTop(index)} className={chooseTopItem === index ? classes.active : ''} key={index}>{child}</li>)
    return (
        <div className={classes.topProduct}>
            <Typography className={classes.title}>
                Top Video hay
            </Typography>
            <ul className={classes.chooseTop}>
                {renderChooseTop}
            </ul>
            <ul className={classes.listProduct}>
                <li>
                    <div>
                        <a href="#" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></a>
                    </div>
                    <div className={classes.nameProduct}>
                        <p>SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO</p>
                        <span>View: 677,445</span>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="#" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></a>
                    </div>
                    <div className={classes.nameProduct}>
                        <p>SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO</p>
                        <span>View: 677,445</span>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="#" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></a>
                    </div>
                    <div className={classes.nameProduct}>
                        <p>SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO</p>
                        <span>View: 677,445</span>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="#" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></a>
                    </div>
                    <div className={classes.nameProduct}>
                        <p>SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO OFFICIAL MUSIC VIDEO OFFICIAL MUSIC VIDEO OFFICIAL MUSIC VIDEO </p>
                        <span>View: 677,445</span>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="#" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></a>
                    </div>
                    <div className={classes.nameProduct}>
                        <p>SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO</p>
                        <span>View: 677,445</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TopProduct
