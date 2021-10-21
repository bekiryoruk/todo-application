import gql from 'graphql-tag';
import {Todo} from '@/model';


export const todoQuery = gql`{
    todos {
        id
        description
        isDone
    }
}`;

export const todoInsert = gql`
    mutation insertTodo($description: String!) {
        insert_todos(objects: [{description: $description}]) {
            affected_rows
            returning {
                id
                description
                isDone
            }
        }
    }`;

export const todoUpdate = gql`
    mutation updateTodo($todoId: Int!, $description: String, $isDone: Boolean) {
        update_todos(_set: {isDone: $isDone, description: $description}, where: {id: {_eq: $todoId}}) {
            affected_rows
            returning {
                id
                description
                isDone
            }
        }
    }`;

export const todoDelete = gql`
    mutation deleteTodo($todoId: Int!) {
        delete_todos(where: {id: {_eq: $todoId}}) {
            affected_rows
        }
    }`;
