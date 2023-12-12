import React,{useContext,createContext, useState,useEffect} from 'react'


export const jobContext = createContext();
export const useJobContext = ()=> useContext(jobContext);



function JobContext({children}) {
    const [allJobs, setAllJobs] = useState([]);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/circular`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.data);
                setAllJobs(data.data);

                // If you want to use filteredJobs for filtering logic later on,
                // you might want to keep it separate initially
                // setFilteredJobs(data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Handle errors appropriately (e.g., show an error message to the user)
            });
    }, []);
  return (
    <jobContext.Provider value={{allJobs, setAllJobs}}>
        {children}
    </jobContext.Provider>
  )
}

export default JobContext