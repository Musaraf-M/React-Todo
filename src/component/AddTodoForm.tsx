import { Button, HStack, Input } from '@chakra-ui/react';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface AddTodoFormProps {
    addTodo: AddTodo
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    };


    return (
        <form>
            {/* <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add Todo</button> */}
            <HStack>
                <Input variant="filled" placeholder="Lets do it !" value={newTodo} onChange={handleChange} />
                <Button colorScheme="pink" type="submit" px="8" onClick={handleSubmit}>Add Todo</Button>
            </HStack>
        </form>
    );
}