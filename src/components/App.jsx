//импорты библиотек
import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

//куски секций и компонентов
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

//стилистика общего контейнера и заголовков
import { Container, Title, SecondTitle } from './App.styled';

function App() {
    const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
);
    const [filter, setFilter] = useState('');

useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);
    
//эта функция предотвращает запись в список одинаковых имен контактов
const onAddContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    //метод some() позволяет проверить соответствует ли по крайней мере 
    //один элемент в массиве условию, заданному в передаваемой функции
    if (
    contacts.some(
        contact => contact.name.toLowerCase() === normalizedName)
    ) {
    Notify.failure(`${name} is already in contacts`);
    return;
    }

const contact = {
    id: nanoid(),
    name,
    number,
    };
    setContacts(prev => [...prev, contact]);
};
    
//функция ручного удаления айтема(контакт)
const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
};
    
const handleFilter = e => {
    setFilter(e.currentTarget.value.trim());
};
    
const filteredContacts = useMemo(() => {
    return contacts.length
    ? contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
        })
    : [];
}, [contacts, filter]);

    return (
        <Fragment>
            <Container>
                <Title>Phonebook</Title>                
                    <ContactForm onSubmit={onAddContact} />                
                <SecondTitle>Contacts</SecondTitle>                                   
                    <Filter handleFilter={handleFilter}
                    value={filter} />
                    <ContactList contacts={filteredContacts}
                    handleDelete={handleDelete}/>                
            </Container>
        </Fragment>
    );
}

export default App;