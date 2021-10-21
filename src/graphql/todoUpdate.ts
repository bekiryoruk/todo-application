import gql from 'graphql-tag';

const todoUpdate = gql`
  mutation updateTodo($todoId: Int!, $description: String, $isDone: Boolean) {
    update_todos(
      _set: { isDone: $isDone, description: $description }
      where: { id: { _eq: $todoId } }
    ) {
      affected_rows
      returning {
        id
        description
        isDone
      }
    }
  }
`;
export default todoUpdate;
