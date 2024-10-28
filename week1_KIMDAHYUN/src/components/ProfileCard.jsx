import PropTypes from 'prop-types';

// ProfileCard 컴포넌트 정의 및 export
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

// MemberList 컴포넌트 정의 및 export
export function MemberList() {
  return (
    <div>
      <h2>나리스 스터디원</h2>
      <ul>
        <li>김다현 (YB)</li>
        <li>김건휘 (OB)</li>
        <li>김가현 (YB)</li>
        <li>이윤지 (YB)</li>
        <li>한수정 (YB)</li>
        <li>박채연 (OB)</li>
      </ul>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

// ProfileCard default export로 내보내기
export default ProfileCard;
