import React from 'react'
import '../styles/Tile.css'

/**
 * @param {obj} param - takes the props object 
 * @returns User Ineterface
 */
export default function Tile({data}) {
  return (
    <div id="indiv-tile-holder">
        <img src={data.otherImages[0]} alt="" />
        <div id="details-wrapper">
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <div className='flex'>
                <h3>Rs. {data.finalPrice}</h3>
                <p className='strike'>{data.strickPrice}</p>
                <p>({data.discount}% OFF)</p>
            </div>
        </div>
    </div>
  )
}
