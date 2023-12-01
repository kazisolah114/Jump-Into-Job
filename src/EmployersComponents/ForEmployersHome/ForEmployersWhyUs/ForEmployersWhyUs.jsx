import React from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../UserContext/UserContext';

const ForEmployersWhyUs = () => {
    const {userData} = useUserContext()
    return (
        <div className='whyus-section'>
            <div className="whyus-content container">
                <div className="whyus-images">
                    <img src="https://img.freepik.com/free-photo/front-distanced-view-young-beautiful-lady-grey-shirt-talking-discussing-something-with-young-man-inside-office-during-daytime-building-job-activity_140725-15733.jpg?w=360&t=st=1693581041~exp=1693581641~hmac=1873ad2bae465c0bf918ae7f1e4ce5a3a808bf78b009c3544e37d294bba6ef43" alt="" />
                    <div>
                        <img src="https://media.istockphoto.com/id/635978146/photo/find-new-ways-to-stimulate-your-mind.jpg?s=612x612&w=0&k=20&c=ALL_ZWqBzoLjgjInuc7a-rGc44gmQJZoX7ZmpW8hyJI=" alt="" />
                        <img className='whyus-odd' src="https://media.istockphoto.com/id/598134426/photo/coworkers-in-synch.jpg?s=612x612&w=0&k=20&c=U6d_51KMV53bGW97WZosrLHCHYmsq6WNE5D52ENo8Ic=" alt="" />
                    </div>
                </div>
                <div className="whyus-texts">
                    <h2>Why Job Portal Is A Good Choice For Your Company?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla amet excepturi quo nihil quasi. Lorem ipsum dolor sit amet consectetur</p>
                    <div className="whyus-text-cont">
                        <div>
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/job2.svg" alt="" />
                            <h4>No Charge</h4>
                        </div>
                        <div>
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/companies.svg" alt="" />
                            <h4>Verified Candidates</h4>
                        </div>
                        <div>
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/job2.svg" alt="" />
                            <h4>Remote workers</h4>
                        </div>
                        <div>
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/job2.svg" alt="" />
                            <h4>Quality Candidates</h4>
                        </div>
                    </div>
                    <div className="whyus-btn">
                        {userData ?
                        <Link to="/foremployers/postjobs"><button>Post a Job <HiArrowSmRight></HiArrowSmRight></button></Link>
                        :
                        <Link to="/foremployers/register"><button>Create Account <HiArrowSmRight></HiArrowSmRight></button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForEmployersWhyUs;