import { useState } from 'react';
import './App.css';
import contactsArr from './contacts.json';

function App() {

const fiveContacts = contactsArr.slice(0, 5);
const randomContact = contactsArr.slice(5)[Math.floor(Math.random()*contactsArr.slice(5).length)];

// React State
const [contacts, setContacts] = useState(fiveContacts)



// React Handler Functions

// Add a random contact
const addRandomContact = () => {
  setContacts([randomContact, ...contacts])
}
//Sort by Name
// updating the state: save sorted array in a variable and replace the current State with this
// when sorting names use localeCompare
const sortByName = () => {
let sortedByName = contacts.sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
  setContacts([...sortedByName])
}
//Sort by Popularity
const sortByPopularity = () => {
  let sortedByPopularity = contacts.sort((a, b) => {
    return b.popularity - a.popularity;
  })
  setContacts([...sortedByPopularity])
}

// // Delete
// const deleteContact = () => {
//   const newContactlist = contacts.filter(contact => {
//     return contact.id !== contactId
//   })
//   setContacts([...newContactlist])
// }

console.log(contacts)
console.log(randomContact)

return (
  <div className="App">
  <h1>IronContacts</h1>
  <button onClick={addRandomContact}>Add Random Contact</button>
  <button onClick={sortByName}>Sort by Name</button>
  <button onClick={sortByPopularity}>Sort by Popularity</button>
    <table>
    <tbody>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </tr>
      
      {contacts.map(contact => {
    return (    <tr key={contact.id}>
          <td><img src={contact.pictureUrl} alt=""/></td> 
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          {contact.wonOscar && <td>:trophy:</td>}
          {contact.wonEmmy && <td>:trophy:</td>}
{/* <button onClick={() => deleteContact(contact.id)}>Delete</button> */}
        </tr>)
      })}
    </tbody>
    </table>
  </div>
  )
}
export default App;