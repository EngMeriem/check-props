import React from 'react';
import PropTypes from 'prop-types'; 
import defaultImage from '../images/defaultImage.bmp'

function ProfileComponent({children, fullName, profession, bio, handleName}) {
    
    return (
        <div style={{margin:"auto", textAlign:'center', backgroundColor:"#e1dcd9", height:'100vh'}}>
            <div>{children}</div>
            <h1 style={{color:"#a67f78"}}>{fullName}</h1>
            <h2 style={{color:"#8f8681"}}>{profession}</h2>
            <p style={{color:"#32435f", width:"70%", margin:"auto",padding:10, marginBottom:20, border:'2px solid #8f8681'}}> {bio}</p>  
            <button style={{backgroundColor:"#8f8681", color:"#fff", borderRadius:5, width:200, height:50, border:'3px solid #fff',fontSize:'1.5rem',fontWeight:'bold'}} onClick={()=>handleName(fullName)}>Click Me!</button>
        </div>
    );
};

ProfileComponent.defaultProps = {
    fullName: 'Unknown User',
    profession: 'Unknown profession',
    bio:'Unknown biographie',
    children: <img style={{width:"20%", height:"20%", borderRadius:"50%", border:"4px solid #a67f78"}}src={defaultImage} alt='Default'/>,
    handleName: ()=>alert('Unknown User')
};

ProfileComponent.propTypes = {
    fullName: PropTypes.string,
    children: PropTypes.node.isRequired ,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName : PropTypes.func.isRequired
};

export default ProfileComponent
