import ContactAddForm from './components/Phonebook/ContactAddForm';
import ContactList from './components/Phonebook/ContactList';
import Filter from './components/Phonebook/Filter';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactAddForm  />
      <h2>Contacts</h2>
      <Filter />  
      <ContactList />
    </div>
  );
}

export default App;