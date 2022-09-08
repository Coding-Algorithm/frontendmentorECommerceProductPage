import Image from 'next/image'
import React, { FC, JSXElementConstructor, useState } from 'react'
import { useSelector } from 'react-redux'
import { productImages } from './ProductImages'

const Main = () => {

    const cart = useSelector((state) => {

    })

    const [mainImage, setMainImage] = useState<string>("one")

interface Props {
    text: String;
    ok?: boolean;
    i?: number;
    fn?: (bob: String) => string;
    image: File
}

    return (
        <div className='mainWrapper'>
            <div className='mainWrapperTwo'>
                <div className='mainLeft'>
                    {/* Main Image */}
                    <div className='mainImageWrapper'>
                        <Image
                            src={productImages[mainImage]}
                            alt="Main Image"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className='thumbNailsWrapper'>
                        {
                            Object.keys(productImages).map((index): JSX.Element =>
                                <div key={index} className={`thumbNail ${mainImage === index && "activeImage"}`}>
                                    <Image
                                        className='thumbImage'
                                        height={800}
                                        src={productImages[index]}
                                        alt="product1-thumbnail"
                                        onClick={() => setMainImage(index)}
                                    />
                                </div>)
                        }
                    </div>
                </div>
 
                <div className='mainRight'>
                    <div className='sneakerDetails'>

                    <h3 className='sneakerComp'>SNEAKER COMPANY</h3>

                    <h1 className='sneakerName'>Fall Limited Edition Sneakers</h1>

                    <p className='sneakerDesc'>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
                        they’ll withstand everything the weather can offer. $125.00 50% $250.00 0 Add to cart
                    </p>

                    <h3 className='sneakerPrice'>
                        $125.00 <span className='sneakerDiscount'>50%</span>
                    </h3>
                    </div>

                    <div className='cartWrapper'>
                            <div className='numControl'>
                                    <span className='minus'>
                                        -
                                    </span>
                                    <p>
                                        3
                                    </p>
                                    <span className='plus'>
                                        +
                                    </span>
                            </div>
                            <div className='cartButton'>
                                Add to cart
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main