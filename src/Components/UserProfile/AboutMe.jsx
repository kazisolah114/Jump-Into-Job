import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../UserContext/UserContext';
import { FaUserCircle } from "react-icons/fa";

const AboutMe = () => {
    const { userData } = useUserContext();

    const [avatar, setAvatar] = useState(null);
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [country, setCountry] = useState('');
    const [city, setCity] = useState(''); 
    const [state, setState] = useState(''); 
    const [street, setStreet] = useState(''); 
    const [postal_code, setPostalCode] = useState('');  

    const [updatedProfileData, setUpdatedProfileData] = useState([])

    const handleUpdateUserProfile = async (event) => {
        // event.preventDefault();
        const updateUserProfile =new FormData();
        // updateUserProfile.append('avatar', avatar)
        updateUserProfile.append('country', country);
        updateUserProfile.append('city', city);
        updateUserProfile.append('state', state);
        updateUserProfile.append('street', street);
        updateUserProfile.append('postal_code', postal_code);
        updateUserProfile.append('_method', 'PUT');

        const userProfileResponse = await fetch('https://unitechholdingsltd.com/api/v1/profile/update', {
            method: 'POST',
            headers: {

                'Conte-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': `Bearer ${userData?.data?.access_token}`
            },
            body: updateUserProfile
        })
    
        const updatedData = await userProfileResponse.json();
        if (updatedData) {
            console.log("Data is updated", updatedData);
            setUpdatedProfileData(updatedData)
           
        } else {
            console.log("Something is wrong with updating your data", updatedData)
        }
    }


    useEffect(() => {
        fetch('https://unitechholdingsltd.com/api/v1/profile', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${userData?.data?.access_token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        
    }, [])
    

    return (
        <div className='user-profile-about-me'>
            <h2>Contact Information</h2>
            <form action="" onSubmit={handleUpdateUserProfile}>
                <div className="about-me-personal">
                    <div className='about-me-personal-header'>
                        <FaUserCircle></FaUserCircle>
                        <div>
                            <h4>{userData?.data?.user?.email}</h4>
                            <p>{userData?.data?.user?.user_type}</p>
                        </div>
                    </div>
                    <div className='about-me-inputs'>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" placeholder='Your First Name' id="first_name" name="firstName" value={userData?.data?.user?.first_name} readOnly />
                    </div>
                    <div className='about-me-inputs'>
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" placeholder='Your Last Name' id="last_name" name="lastName" value={userData?.data?.user?.last_name} readOnly />
                    </div>
                </div>
                <div className="about-me-address">
                    <h3>Location</h3>
                    <div className='about-me-inputs'>
                        <label htmlFor="countryid">Country</label>
                        <input type="text" placeholder='Your Country' id="countryid" name="country" defaultValue={updatedProfileData?.profile?.country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className='about-me-inputs'>
                        <label htmlFor="streetid">Stress Address</label>
                        <input type="text" placeholder='Your Street Address' id="streetid" defaultValue={updatedProfileData?.profile?.street} name="street" onChange={(e) => setStreet(e.target.value)} />
                    </div>
                    <div className='about-me-inputs'>
                        <label htmlFor="cityid">City</label>
                        <input type="text" placeholder='Your City' id="cityid" name="city" defaultValue={updatedProfileData?.profile?.city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className='about-me-inputs'>
                        <label htmlFor="stateid">State</label>
                        <input type="text" placeholder='Your State' id="stateid" name="state" defaultValue={updatedProfileData?.profile?.state} onChange={(e) => setState(e.target.value)} />
                    </div>
                    <div className='about-me-inputs'>
                        <label htmlFor="postal">Postal Code</label>
                        <input type="text" placeholder='Your Postal Code' id="postal" defaultValue={updatedProfileData?.profile?.postal_code} name="postal_code" onChange={(e) => setPostalCode(e.target.value)} />
                    </div>
                    <input type="submit" value="Save" className='save-user-info-btn' />
                </div>
            </form>
        </div>
    );
};

export default AboutMe;