import React from 'react';
//destructuring props
const Car =({count}) => {
    return (
        <div>
            <div>
                <img src={count.img_url} alt="car" />
                <h1>{count.make}</h1>
                <p>{count.model}</p>
                <p>{count.price}</p>
            </div>
        </div>
    );
    

}
export default Car;
 