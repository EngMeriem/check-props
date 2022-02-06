import ProfileComponent from './profile/ProfileComponent';
import myImage from './images/me.png'

function App() {
  const name = "Meriem AYED";
  const bioGraphie = "I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do. I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn all that I can about development. While a student, I studied Mathematics, and I believe that my understanding of problem solving and complex algorithms are also skills that have and will continue to contribute to my overall success as a developer";
  const pro = "Full-Stack JS Developer";
  const handleName=name=>{
    alert(name);
};
  return (
    <div>
        <ProfileComponent fullName={name} profession={pro} bio={bioGraphie} handleName={handleName}>
          <img style={{width:"20%", height:"20%", borderRadius:"50%", border:"4px solid #a67f78"}} src={myImage} alt="Meriem"/>
        </ProfileComponent>
    </div>
  );
}

export default App;
