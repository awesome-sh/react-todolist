import React from 'react'
import styled from 'styled-components';

const TodoTemplateContainer = styled.div`
    width: 500px;
    height: 500px;

    position: relative;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto;

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;

`;

function TodoTemplate({ children }) {
    return (
        <TodoTemplateContainer>{ children }</TodoTemplateContainer>
    )
}

export default TodoTemplate;
