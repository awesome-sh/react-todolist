import React from 'react';
import styled from 'styled-components';

import { TodoProvider } from './TodoContext';

import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = styled.div`
  body {
    background: #eee;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle>
        <TodoTemplate>
          <TodoHeader />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </GlobalStyle>
    </TodoProvider>
  );
}

export default App;
