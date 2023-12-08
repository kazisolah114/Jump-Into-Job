import React, { useEffect, useState } from 'react';
import './FeaturedCompanies.css'
import  Link  from 'next/link';

const FeaturedCompanies = () => {

    const [featuredCompanies, setFeaturedCompanies] = useState([]);
    useEffect(() => {
        fetch('/companies.json')
            .then(res => res.json())
            .then(data => {
                setFeaturedCompanies(data);
            })
    }, [])

    return (
        <div className='featured-company-section'>
            <div className="featured-company-content container companies-tabs-content">
                <div className="featured-companies-header section-header">
                    <h2>Featured companies on Jump Into Job</h2>
                </div>
                <div className="featured-company-content-items">
                    {
                        featuredCompanies.slice(0, 6).map(company => <div key={company.id} className='company-item'>
                            <div className="company-item-content">
                                <div className="company-item-content-banner">
                                    <img src={company.company_banner} alt="" />
                                </div>
                                <div className="company-item-content-main">
                                    <div className='main-items'>
                                        <img src={company.company_logo} alt="" />
                                        <div>
                                            <Link href={""} ><h3>{company.company_name}</h3></Link>
                                            <p>Verified Profile</p>
                                        </div>
                                    </div>
                                    <div className='main-items'>
                                        <p>{company.company_category}</p>
                                        <p>Company Size: {company.company_size}</p>
                                    </div>
                                    <div className='main-items'>
                                        <p className='company_description'>{company.company_description.slice(0, 140)}...</p>
                                    </div>
                                    <div className="company-item-content-footer">
                                        <Link href={""}><button className='company-button company-details-button'>View Details</button></Link>
                                        <Link href={""}><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                    </div>
                                </div>

                            </div>
                        </div>)
                    }
                </div>
                <div className="featured-companies-showmore">
                    <Link href="/companies"><button>Show More Companies</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCompanies;