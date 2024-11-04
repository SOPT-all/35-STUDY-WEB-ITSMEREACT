import ProfileCard, { MemberList } from './components/ProfileCard'; // Default와 Named import 혼합 사용

function App() {
  return (
    <div>
      <MemberList />
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',  
        justifyContent: 'center',  
        padding: '20px'
      }}>
        <ProfileCard name="김다현" role="YB" />
        <ProfileCard name="김건휘" role="OB" />
      </div>
    </div>
  );
}

export default App;
