import ProfileCard from './components/ProfileCard';

function App() {
  const members = [
    { name: "김다현", role: "YB" },
    { name: "김건휘", role: "OB" },
    { name: "김가현", role: "YB" },
    { name: "이윤지", role: "YB" },
    { name: "박채연", role: "OB" },
    { name: "한수정", role: "YB" }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap',  
      justifyContent: 'center',  
      padding: '20px'
    }}>
      {members.map((member, index) => (
        <ProfileCard key={index} name={member.name} role={member.role} />
      ))}
    </div>
  );
}

export default App;
