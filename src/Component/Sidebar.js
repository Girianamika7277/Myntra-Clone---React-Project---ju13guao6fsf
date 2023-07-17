import React, { useContext, useState } from 'react'
// import Pdata from '../Movieslist'
import Data from '../Data'
import { DataWishlistContext } from '../DataApp'


const Sidebar = (props) => {
  const [check, setCheck] = useState(true)

  const localContext = useContext(DataWishlistContext)

  // const[CheckedBox,setCheckedBox]=useState(false)

  const { data, setData, searchData } = localContext
  console.log('dataVal - ', Data)


  const UpdateGenderfn = (e) => {
    if (check) {
      setCheck(false)
    } else {
      setCheck(true)
    }

    console.log('gender - ', e.target.value, 'typeof', typeof (e.target.value))
    const result = Data.filter((item) => {
      return item.gender === e.target.value
    })
    setData(result)
    console.log("filter - ", result)
  }
  const CheckboxFn1 = (e) => {

    console.log('checkbox1 - ', e.target.value)
    const result = Data.filter((item) => {
      return item.cat === e.target.value
    })

    setData(result)
    // console.log("filter - ", result)
  }

  const CheckboxFn2 = (e) => {

    // console.log('checkbox2 - ', e.target.value)
    const result = Data.filter((item) => {
      return item.cat === " "
    })
    setData(result)
    // console.log("filter - ", result)

  }

  if (searchData.length > 0) {
    // console.log('searchdata.......')
    setData(searchData)
  }

  else if (data.length === 0) {
    // console.log('orignal.......')

    setData(Data)
  }
  return (
    <div className='sidebarmain'>


      {/* checked='checked' */}
      <div className='gender' >
      <h4>Gender</h4>
        <input type="radio" name="gender" onChange={UpdateGenderfn} value="M" checked={check} />
        <label for="gender"> Male  </label> <br />
        <input type="radio" name="gender" onChange={UpdateGenderfn} value="F" />
        <label for="gender"> Female  </label> <br />
        {/* <input type="radio" name="gender" onChange={UpdateGenderfn} value="boys" />
        <label for="gender"> Boys  </label> <br />
        <input type="radio" name="gender" onChange={UpdateGenderfn} value="girls" />
        <label for="gender"> Girls  </label> <br /> */}
      </div>
      <div className='categories'>
      <h4>Categories</h4>

        <input type="checkbox" onChange={CheckboxFn1} id="shirt" name="shirt" value="W" />
        <label for="shirt"> Shirt</label><br />
        <input type="checkbox" onChange={CheckboxFn2} id="sleepShirt" name="sleepShirt" value=" " />
        <label for="sleepShirt"> Folded Sleeves</label><br />
        {/* <input type="checkbox" onChange={CheckboxFn}  id="dogShirt" name="dogShirt" value="dogShirt"/>
<label for="dogShirt">Latest</label><br/> */}
      </div>



    </div>
  )
}

export default Sidebar