import Image from 'next/image'
import React, { FC, JSXElementConstructor, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productImages } from './ProductImages'
import { cartActions } from './store/cartSlice'

const Main = () => {
    type itemProps = {
        id: string,
        price: number,
        quantity: number,
        totalPrice: number,
        name: string
    }

    type itemsList = itemProps[]

    type stateProps = {
        cart: {
            itemsList: itemsList
        }
    }

    const cartItems = useSelector((state: stateProps): itemsList =>
        state.cart.itemsList)


    const cart = useSelector((state: stateProps) =>
        state.cart)

    const [mainImage, setMainImage] = useState<string>("one")

    const dispatch = useDispatch()

    const addToCart = (id: string, price: number, name: string) => {
        dispatch(cartActions.addToCart({ id, name, price }))
    }

    const decreaseCart = (id: string) => {
        dispatch(cartActions.decreaseCart(id))
    }

    const isAdded = cartItems.length > 0



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
                            <span className='minus' onClick={() => decreaseCart('2')}>
                                -
                            </span>
                            <p>
                                1
                            </p>
                            <span className='plus' onClick={() => addToCart("2", 125, "Autumn Limited Edition")}>
                                +
                            </span>
                        </div>
                        <div className={`cartButton ${isAdded ? "bg-white text-black" : "bg-orange text-white"}`} onClick={() => { isAdded ? alert("Product has been added to cart ") : addToCart("2", 125, "Autumn Limited Edition") }}>
                            {isAdded && "Added to Cart"}
                            {!isAdded && "Add to Cart"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
