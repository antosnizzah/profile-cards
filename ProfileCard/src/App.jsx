import './App.css'
import Personal from './components/profile'
// import Placeholder from './components/Placeholder'

function App() {
  const profilePicture = "https://i.pinimg.com/564x/73/95/64/73956466c18ee1d8cd484b7e339ea2f8.jpg"
  const profilePicture2 = "https://i.pinimg.com/736x/8a/e6/7d/8ae67d96d791814a4d231510ff9daf1a.jpg"
  const profilePicture3 = "https://i.pinimg.com/564x/ae/99/a9/ae99a99a9f62bdb81bbeb9425f732968.jpg"
 
  const name = "antony"
  const name2 = "ann "
  const name3 = "samuel"
  
  const moreDetails = {
    age: 25,
    bio: "I am a software engineer"
  }
  const moreDetails2 = {
    age: 17,
    bio: "I am a dancer by proffession"
  }
  const moreDetails3 = {
    age: 23,
    bio: "I am a it writer"
  }

  return (
    <>
      <Personal name={name} moreDetails={moreDetails} profilePicture={profilePicture} />
      <Personal name={name2} moreDetails={moreDetails2} profilePicture={profilePicture2} />
      <Personal name={name3} moreDetails={moreDetails3} profilePicture={profilePicture3} />
    </>
  )
}

export default App

