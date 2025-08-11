import './App.css'
import { User } from './components/context/User'
import { UserContextProvider } from './components/context/UserContext'
// import { Box } from './components/context/Box'
// import { ThemeContextProvider } from './components/context/ThemeContext'
//import { Container } from './components/Container'
// import { Button } from './components/Button'
// import { Input } from './components/Input'
// import { Heading } from './components/Heading'
// import { Oscar } from './components/Oscar'
// import { Status } from './components/Status'
// import { Greet } from './components/Greet'
// import { Person } from './components/Person'
//import { PersonList } from './components/PersonList'
//import { LoggedIn } from './components/state/LoggedIn'
//import { User } from './components/state/User'

function App() {

  // const PersonName = {
  //   first: 'Shahid',
  //   last: 'Ansari'
  // }

  // const personList = [
  //   {first: 'Alex', last: 'William',},
  //   {first: 'harvey', last: 'William',},
  //   {first: 'John', last: 'William',},
  // ]


  return (
    <>
      <div className="bg-gray-100">
        {/* <Greet name='React' version={19} isLoggedIn={true}/>
        <Person name={PersonName}/> 
        */}
        {/* <PersonList data={personList}/>  */}
        {/* <Status status='loading'/>
        <Heading>Pleasholder test</Heading>
        <Oscar>
          <Heading> Oscar goes to techno india!</Heading>
        </Oscar> */}
        {/* <Button 
          handleClick={(event, id) => {
            console.log('Button Click!', event, id)
          }}
        />
        <Input handleChange={(event) => console.log(event)}/> */}
        {/* <Container styles={{ border: '1px solid black', padding: '1rem' }}/> */}
        {/* <LoggedIn/> */}
        {/* <User/> */}
        {/* <ThemeContextProvider>
          <Box/>
        </ThemeContextProvider> */}
        <UserContextProvider>
          <User/>
        </UserContextProvider>

      </div>
    </>
  )
}

export default App
