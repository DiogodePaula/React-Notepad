import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import api from '../../api';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const AuthStr = 'Bearer'.concat(token);

    async function handleStoreAuth () {
        const auth = await api.post('/login', {email,password});

        if (auth.response.data.token) {
            setToken(auth.data.token);
            setUser(auth.data.user);
            console.log(user);
            console.log(token);
        }
    }

    async function handleStoreNotepad(){
        api.get(api,{headers:{ Authorization: AuthStr }})
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))

        api.post('/cards', {title, content, date, hour})
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }

    return(
        <>
        <div style={{ padding:'50px'}}>
            <Form style={{ width: '450px', padding:'30px', margin: 'auto', textAlign:'center',
            border:'1px solid black', borderRadius:'20px' }}>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <Button onClick={handleStoreAuth}>Cadastrar</Button>
            </Form>

            <Form style={{ width: '450px', padding:'30px', margin: 'auto', textAlign:'center',
            border:'1px solid black', borderRadius:'20px', marginTop:'2em' }}>
            <FormGroup>
                <Label for="exampleTitle">Titulo</Label>
                <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleContente">Conteúdo</Label>
                <Input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">Data</Label>
                <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleHour">Hora</Label>
                <Input
                type="time"
                value={hour}
                onChange={(e) => setHour(e.target.value)} />
            </FormGroup>
            <Button onClick={handleStoreNotepad}>Cadastrar</Button>
            </Form>
        </div>
        </>
    )
}