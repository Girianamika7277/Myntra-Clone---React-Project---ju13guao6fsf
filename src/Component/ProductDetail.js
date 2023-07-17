import React, { useContext, } from 'react'
import { DataWishlistContext } from '../DataApp'
import { ColorRing } from 'react-loader-spinner'

const ProductDetail = () => {
    const localContext = useContext(DataWishlistContext)
    const { setWishlist, wishlist, data, selectedProduct } = localContext


    const updateWishlistFn = (item) => {
        setWishlist(wishlist => [...wishlist, item])
    }


    return (
        <div>
            <div>
                {selectedProduct ?

                    <div className='flex imageDetailMain'>
                        <div className=' imageTitle'>

                            <div className='flex productDetailImges'>
                                <div className='imageDetailInside'><img src={selectedProduct.otherImages[0]} width='330px' alt='product' /> </div>
                                <div className='imageDetailInside'><img src={selectedProduct.otherImages[1]} width='330px' alt='product' /> </div>
                                <div className='imageDetailInside'><img src={selectedProduct.otherImages[2]} width='330px' alt='product' /> </div>
                                <div className='imageDetailInside'><img src={selectedProduct.otherImages[3]} width='330px' alt='product' /> </div>
                            </div>

                        </div>
                        <div className='imageDescription'>
                            <h2>{selectedProduct.name.toUpperCase()} </h2>
                            <div className='imageDescription_product'>{selectedProduct.description}</div>
                            <div className='line'></div>
                            <div className=' flex  '>
                                <div>
                                    < span className='price'>RS. {selectedProduct.finalPrice}&nbsp;&nbsp;</span></div>
                                <span className='price strickprice'>{selectedProduct.strickPrice}&nbsp;&nbsp;</span>
                                <span className='price discount'> {selectedProduct.discount}% &nbsp;OFF</span>
                            </div>
                            <div className='tax'> inclusive of all taxes</div>

                            <div className=' '>
                                <h2>SIZE</h2>
                                {/* <div className='roundDiv flex  selectedProductscenter justify-center'>{selectedProduct.productSize}</div> */}
                                <div className='productSize'>{selectedProduct.productSize}</div>

                            </div>
                            <div className='flex '>
                                <button className='button' onClick={(e) => updateWishlistFn(selectedProduct)} > Add to wishlist</button>

                            </div>
                        </div>
                    </div>
                    : <div className='flex justify-center'><ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    /></div>
                }
            </div>
        </div>
    )
}

export default ProductDetail