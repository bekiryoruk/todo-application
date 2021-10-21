import gql from 'graphql-tag';

const todoList = gql`
  {
    todos {
      id
      description
      isDone
    }
  }
`;

export default todoList;
