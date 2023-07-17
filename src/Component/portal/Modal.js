import React, { useContext } from 'react'
// import ReactDom from 'react-dom'
import './Modal.css'
import { DataWishlistContext } from '../../DataApp'
import { Link } from 'react-router-dom'

const Modal = (props) => {
  const localContext = useContext(DataWishlistContext)
  const { wishlist } = localContext

  const { open, setIsOpen } = props
  const items = wishlist.length

  const totalprice = wishlist.reduce((a, b) => {
    return a + Number(b.strickPrice)
  }, 0)
  const finalprice = wishlist.reduce((a, b) => (a + Number(b.finalPrice)), 0)

  const discount = totalprice - finalprice


  if (!open) return null;
  //   ReactDom.createPortal
  return (
    <div className=' modal_fullpage'>

      <div className=' modaal'>

        <button onClick={() => setIsOpen(false)}>X</button>
        <div className='flex'>
          <div className=' modalDetail '>
            {
              wishlist.map((item, index) => (
                <>
                  <div className='flex'>
                    <div>{index + 1}</div>
                    <div className='imageDetailInside'><img src={item.otherImages[0]} width='150px' alt='product' /> </div>
                    <div>
                      <h2>{item.name.toUpperCase()} </h2>
                      {/* <div>{item.product}</div> */}

                      <p>{item.description}</p>
                      {/* <h2>{item.price}/-</h2> */}
                      <div className=' flex  '>
                        <div>
                          < span className='Mprice'>RS. {item.finalPrice}&nbsp;&nbsp;</span></div>
                        <span className='Mprice Mstrickprice'>{item.strickPrice}&nbsp;&nbsp;</span>
                        <span className='Mprice Mdiscount'> {item.discount}% &nbsp;OFF</span>
                      </div>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
          <div className='priceDiv' >
            <h5>PRICE DETAILS ({items} item)</h5>
            <div className='flex space-between'>

              <div>Total MRP -</div>
              <div> {totalprice}/-</div>
            </div>

            <div className='flex space-between'>
              <div >Discount - &nbsp;</div>
              <div><span className='Mdiscount'>{discount}/-</span></div>
            </div>
            {/* <div>Final MRP - &nbsp;&nbsp;</div> */}
            <div className='flex space-between'>

              <div>Convenience Fee - </div>
              <div> <span className='text-linethrough'>99</span><span className='green'> FREE</span> </div>
            </div>
            <div className='flex space-between'>
              <div>Total Amount -  </div>
              <div>&nbsp;<span>{finalprice}/-</span></div>
            </div>
            <Link to='/checkout'><button className='buttonM' onClick={() => setIsOpen(false)}>Buy</button></Link>
          </div>
        </div>
      </div>

    </div>
    // document.getElementById('portal')
  )
}

export default Modal