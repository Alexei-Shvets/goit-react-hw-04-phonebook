import React, { useState } from 'react';
import {
    Form,
    Label,
    Input,
    Button
} from './ContactForm.styled';


//в этот инпут записываются новые значения, которые в дальнейшем рендерятся в лишках(секция контактов)
export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

//при собмите формы, функция собирает значения со всех полей инпута 
const handleSubmit = e => {
    e.preventDefault();
    
    onSubmit({ name, number });
    setName('');
    setNumber('');
};    
    const handleChange = e => {
    const prop = e.currentTarget.name;
    switch (prop) {
        case 'name':
            setName(e.currentTarget.value);
            break;
        case 'number':
            setNumber(e.currentTarget.value);
            break;
        default:
            throw new Error('Error');
    }
};

    return (
    <Form onSubmit={handleSubmit}>
        <Label>
            Name
        <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required />
        </Label>

        <Label>
            Number
        <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"            
            value={number}           
            onChange={handleChange}
            required />
        </Label>
        <Button type="submit">
            Add contact
        </Button>
    </Form>
    );
}
