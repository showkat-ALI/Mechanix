import React from 'react';
import anime from 'animejs/lib/anime.es.js';


const Expert = ({expart}) => {
    const{img,name,expertize}= expart
    // anime({
    //     targets: '.expart-container',
    //     rotate: '7turn',
    //     backgroundColor: '#FFF',
    //     duration: 600
    //   });

    return (
        <div className="col-lg-4 col-12 col-md-6 expart-container">
            <div className="">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{expertize}</p>
            </div>
        </div>
    );
};

export default Expert;