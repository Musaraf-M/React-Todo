type Todo = {
    text: string;
    id: string;
};



type AddTodo = (newTodo: string) => void;

type DeleteTodo = (Todo: string) => void;