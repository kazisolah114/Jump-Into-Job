import React from 'react'
import { HiOutlineCursorClick } from 'react-icons/hi'
function DefaultJobDetails() {
  return (
    <div className='default-job-details job-details'>
    <div className="default-job-details-img">
        <img src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?w=1060&t=st=1691861591~exp=1691862191~hmac=972b280150a5093294a8636690684d858e166b77a44957ee43b427187a9271cd" alt="" />
    </div>
    <div className="default-job-details-text">
        <h2>Start Your Career Today In The Top Companies!</h2>
        <p>Are you looking for a job? You can increase the chance of getting your desired job by subscribing to our Weekly Job alerts! Every week you will find be notified about a job that matches your previous searches.</p>
        <button className='default-job-details-subscribe'>Subscribe Now <HiOutlineCursorClick/></button>
    </div>
</div>
  )
}

export default DefaultJobDetails