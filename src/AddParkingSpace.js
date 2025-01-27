import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@mui/material';
import back from './icons/Back.png';
import './App.css';

function AddParking() {
  const buttonStyle = {
    borderRadius: '25px',
    borderColor: 'white',
    color: 'white',
    fontSize: '25px',
    alignText: 'center',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    width: '150px',
    marginLeft: '100px',
    marginRight: '200px',
    textTransform: 'none',
    marginBottom: '10px',
  };

  const backButtonStyle = {
    position: 'absolute',
    left: '20px',
    top: '20px',
  };

  const inputStyle = {
    fontSize: '20px',
    fontFamily: 'verdana',
    fontWeight: 'bold',
    width: '605px', // Set the desired width
  };


  const handleAdd = () => {
    // Implement logic for adding parking space
    console.log('Add button clicked');
  };

  const handleCancel = () => {
    // Implement logic for canceling the operation
    console.log('Cancel button clicked');
  };

  return (
    <div className="App">
      <Link to="/admin">
        <img src={back} alt="Back" style={backButtonStyle} />
      </Link>
      <h1 className="main-title">ParCIT</h1>

      <p className="left">Add Parking Spaces</p>

      <div className="outside-container">
        <div className="content-section">
          <p>Name:</p>
          <Input disableUnderline style={inputStyle} />
        </div>

        <div className="content-section">
          <p>
            Capacity:
            
          </p><Input disableUnderline style={inputStyle} />
        </div>

        <div className="content-section">
          <p>
            Location:
          </p><Input disableUnderline style={inputStyle} />
        </div>
        <div className="content-section">
          <p>
            Vehicle Type:
          </p><Input disableUnderline style={inputStyle} />
        </div>
      </div>
      <div className="button-addcancel">
        <Link to="/parkingspaces">
          <Button variant="outlined" style={buttonStyle} onClick={handleAdd}>
            Add
          </Button>

        <Button variant="outlined" style={buttonStyle} onClick={handleCancel}>
          Cancel
        </Button>
        </Link>

      </div>
    </div>
  );
}

export default AddParking;
