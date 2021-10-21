import gql from 'graphql-tag';

const todoAdd = gql`
  mutation insertTodo($description: String!) {
    insert_todos(objects: [{ description: $description }]) {
      affected_rows
      returning {
        id
        description
        isDone
      }
    }
  }
`;

export default todoAdd;
