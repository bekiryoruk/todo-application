import gql from 'graphql-tag';

const todoDelete = gql`
  mutation deleteTodo($todoId: Int!) {
    delete_todos(where: { id: { _eq: $todoId } }) {
      affected_rows
    }
  }
`;

export default todoDelete;
