import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap',  
      justifyContent: 'center',  
      padding: '20px'
    }}>
      <ProfileCard name="김다현" role="YB" />
      <ProfileCard name="김건휘" role="OB" />
      <ProfileCard name="김가현" role="YB" />
      <ProfileCard name="이윤지" role="YB" />
      <ProfileCard name="박채연" role="OB" />
      <ProfileCard name="한수정" role="YB" />
    </div>
  );
}

export default App;
