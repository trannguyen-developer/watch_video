import React from 'react';

import classes from './styles.module.scss'

const Watch = props => {
    return(
        <div className={classes.watch} style={props.style}>
            <div className={classes.title}>
                Hướng dẫn React Router cơ bản
            </div>
            <div className={classes.video}>
                <iframe height="506" src="https://www.youtube.com/embed/egXSGnZe7dc?autoplay=1&autohide=0&cc_load_policy=1&modestbranding=1&fs=0&showinfo=0&title=0&rel=0&iv_load_policy=3&mute=0&loop=1"   
sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"  frameborder="0" allowfullscreen></iframe>
            </div>
            <div className={classes.description}>
                <h4>Mô tả</h4>
                <p>
                    Thank you for listening, I hope you will have a good time here
                </p>
            </div>
        </div>
    )
}

export default Watch