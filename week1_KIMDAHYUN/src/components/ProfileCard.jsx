import PropTypes from 'prop-types'; 

function ProfileCard({ name, role }) {
  return (
    <div style={{
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '15px', 
      borderRadius: '10px',
      width: '200px',
      textAlign: 'center',  
      backgroundColor: '#f9f9f9',
    }}>
      <h2 style={{ fontSize: '1.2em', marginBottom: '10px' }}>{name}</h2>
      <p style={{ color: '#555', fontSize: '0.9em' }}>역할: {role}</p>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired, 
  role: PropTypes.string.isRequired 
};

export default ProfileCard;
