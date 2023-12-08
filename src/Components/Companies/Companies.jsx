"use client"
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import  Link  from 'next/link';

const Companies = () => {

    const [companies, setCompanies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Industries');
    useEffect(() => {
        fetch('companies.json')
            .then(res => res.json())
            .then(data => {
                if (selectedCategory === 'All Industries') {
                    setCompanies(data)
                } else {
                    const filtered = data.filter(company => company.company_category === selectedCategory);
                    setCompanies(filtered)
                }

            })
    }, [selectedCategory])

    const handleCategoryChange = (event) => {
        setSelectedCategory(event)
    }
    console.log(selectedCategory)
    return (
        <div className='companies'>
            <div className="section-header companies-header">
                <h2>Browse For Companies</h2>
                <p>Lorem aliasg elit. Saepe, alias. Atqudolor?</p>
            </div>
            <div className="companies-content container">

                <Tabs className="companies-tabs">
                    <TabList className="companies-tablist">
                        <Tab onClick={() => handleCategoryChange('All Industries')} className={`${selectedCategory == 'All Industries' ? 'default-category' : ''}`}>All Industries</Tab>
                        <Tab onClick={() => handleCategoryChange('Technology and IT')} className={`${selectedCategory == 'Technology and IT' ? 'default-category' : ''}`}>Technology & IT</Tab>
                        <Tab onClick={() => handleCategoryChange('Retail and Consumer Goods')}  className={`${selectedCategory == 'Retail and Consumer Goods' ? 'default-category' : ''}`}>Retails and Consumer Goods</Tab>
                        <Tab onClick={() => handleCategoryChange('Finance and Banking')} className={`${selectedCategory == 'Finance and Banking' ? 'default-category' : ''}`}>Finance and Banking</Tab>
                        <Tab onClick={() => handleCategoryChange('Healthcare Pharmaceuticals')} className={`${selectedCategory == 'Healthcare Pharmaceuticals' ? 'default-category' : ''}`}>Healthcare and Pharmaceuticals</Tab>
                        <Tab onClick={() => handleCategoryChange('Manufacturing and Industrial')} className={`${selectedCategory == 'Manufacturing and Industrial' ? 'default-category' : ''}`}>Manufacturing and Industrial</Tab>
                        <Tab onClick={() => handleCategoryChange('Energy and Utilities')} className={`${selectedCategory == 'Energy and Utilities' ? 'default-category' : ''}`}>Energy and Utilities</Tab>
                        <Tab onClick={() => handleCategoryChange('Media and Entertainment')} className={`${selectedCategory == 'Media and Entertainment' ? 'default-category' : ''}`}>Media and Entertainment</Tab>
                        <Tab onClick={() => handleCategoryChange('Real Estate and Property')} className={`${selectedCategory == 'Real Estate and Property' ? 'default-category' : ''}`}>Real Estate and Property</Tab>
                        <Tab onClick={() => handleCategoryChange('Travel and Hospitality')} className={`${selectedCategory == 'Travel and Hospitality' ? 'default-category' : ''}`}>Travel and Hospitality</Tab>
                        <Tab onClick={() => handleCategoryChange('Automotive')} className={`${selectedCategory == 'Automotive' ? 'default-category' : ''}`}>Automotive</Tab>
                        <Tab onClick={() => handleCategoryChange('Education and E-learning')} className={`${selectedCategory == 'Education and E-learning' ? 'default-category' : ''}`}>Education and E-learning</Tab>
                        <Tab onClick={() => handleCategoryChange('Agriculture and Food Production')} className={`${selectedCategory == 'Agriculture and Food Production' ? 'default-category' : ''}`}>Agriculture and Food Production</Tab>
                        <Tab onClick={() => handleCategoryChange('Construction and Engineering')} className={`${selectedCategory == 'Construction and Engineering' ? 'default-category' : ''}`}>Construction and Engineering</Tab>
                        <Tab onClick={() => handleCategoryChange('Transportation and Logistics')} className={`${selectedCategory == 'Transportation and Logistics' ? 'default-category' : ''}`}>Transportation and Logistics</Tab>
                        <Tab onClick={() => handleCategoryChange('Telecommunications')} className={`${selectedCategory == 'Telecommunications' ? 'default-category' : ''}`}>Telecommunications</Tab>
                        <Tab onClick={() => handleCategoryChange('Other')} className={`${selectedCategory == 'Other' ? 'default-category' : ''}`}>Other</Tab>
                    </TabList>

                    <div>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href={""}><h3>{company.company_name}</h3></Link>
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
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href={""}><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href={""}><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href={""}><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href={""}><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href={""}><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href={""}><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href={""}><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href={""}><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href={""}><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href={""}><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href={""}><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href={""}><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href={""}><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href={""}><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href={""}><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href={""}><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href={""}><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href=""><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href=""><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href=""><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href=""><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href=""><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href=""><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href=""><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href=""><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href=""><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href=""><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href=""><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href=""><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href=""><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href=""><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href=""><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href=""><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href=""><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href=""><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>
                        <TabPanel className="companies-tabs-content">
                            {
                                companies.map(company => <div key={company.id} className='company-item'>
                                    <div className="company-item-content">
                                        <div className="company-item-content-banner">
                                            <img src={company.company_banner} alt="" />
                                        </div>
                                        <div className="company-item-content-main">
                                            <div className='main-items'>
                                                <img src={company.company_logo} alt="" />
                                                <div>
                                                    <Link href=""><h3>{company.company_name}</h3></Link>
                                                    <p>Verified Profile</p>
                                                </div>
                                            </div>
                                            <div className='main-items'>
                                                <p>{company.company_category}</p>
                                                <p>Company Size: {company.company_size}</p>
                                            </div>
                                            <div className='main-items'>
                                                <p className='company_description'>{company.company_description.slice(0, 250)}...</p>
                                            </div>
                                            <div className="company-item-content-footer">
                                                <Link href=""><button className='company-button company-details-button'>View Details</button></Link>
                                                <Link href=""><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </TabPanel>

                    </div>
                </Tabs>

            </div>
        </div>
    );
};

export default Companies;