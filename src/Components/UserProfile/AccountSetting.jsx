"use client"
import React, { useState } from 'react';
import './UserProfile.css';

const AccountSetting = () => {

    const data = Array.from({ length: 10 }, (_, index) => `Data ${index + 1}`); // Example data array
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderItems = () => {
    return currentItems.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(
        <li
          key={i}
          className={i === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

    return (
        <div>
      <ul>
        {renderItems()}
      </ul>
      <div style={styles.paginationContainer}>
        <ul style={styles.pagination}>
          {renderPageNumbers()}
        </ul>
      </div>
    </div>
    );
};

// Basic styles (customize as needed)
const styles = {
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    pagination: {
      listStyle: 'none',
      display: 'flex',
      padding: '0',
      margin: '0',
      cursor: 'pointer',
    },
    active: {
      background: '#007bff',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: '4px',
      margin: '0 4px',
    },
  };

export default AccountSetting;
