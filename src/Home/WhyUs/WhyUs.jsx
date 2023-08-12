import React from 'react';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className='whyus-section'>
            <div className="whyus-content container">
                <div className="whyus-images">
                    <img src="https://thumbs.dreamstime.com/b/vertical-shot-young-cheerful-mixed-race-female-office-worker-working-laptop-modern-talking-colleague-200820577.jpg" alt="" />
                    <div>
                        <img src="https://media.istockphoto.com/id/635978146/photo/find-new-ways-to-stimulate-your-mind.jpg?s=612x612&w=0&k=20&c=ALL_ZWqBzoLjgjInuc7a-rGc44gmQJZoX7ZmpW8hyJI=" alt="" />
                        <img className='whyus-odd' src="https://media.istockphoto.com/id/598134426/photo/coworkers-in-synch.jpg?s=612x612&w=0&k=20&c=U6d_51KMV53bGW97WZosrLHCHYmsq6WNE5D52ENo8Ic=" alt="" />
                    </div>
                </div>
                <div className="whyus-texts">
                    <h2>Why Job Portal Is A Good Choice For You</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla amet excepturi quo nihil quasi. Lorem ipsum dolor sit amet consectetur</p>
                    <div className="whyus-text-cont">
                        <div>
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/job2.svg" alt="" />
                            <h4>Quality Jobs</h4>
                        </div>
                        <div>
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/companies.svg" alt="" />
                            <h4>Top Companies</h4>
                        </div>
                        <div>
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/job2.svg" alt="" />
                            <h4>No Charge</h4>
                        </div>
                        <div>
                            <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/job2.svg" alt="" />
                            <h4>Remote Jobs</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;