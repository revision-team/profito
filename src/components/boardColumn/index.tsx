///
// src/components/board-column.tsx
///
import React, {useContext} from 'react'
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'
import styled from 'styled-components'

// Import BoardItem component
import { BoardItem } from 'components/boardItem'

import { AddTodo, AddTodoType } from "store/actions"
import { Store } from "store"

// Define types for board column element properties
type BoardColumnProps = {
    key: string,
    column: any,
    items: any,
}

// Define types for board column content style properties
// This is necessary for TypeScript to accept the 'isDraggingOver' prop.
type BoardColumnContentStylesProps = {
    isDraggingOver: boolean
}

// Create styles for BoardColumnWrapper element
const BoardColumnWrapper = styled.div`
  flex: 1;
  padding: 8px;
  background-color: #d5d5d5;
  border-radius: 4px;

  & + & {
    margin-left: 12px;
  }
`

// Create styles for BoardColumnTitle element
const BoardColumnTitle = styled.h2`
  font: 14px sans-serif;
  margin-bottom: 12px;
  background-color: red;
`

// Create styles for BoardColumnContent element
const BoardColumnContent = styled.div<BoardColumnContentStylesProps>`
  min-height: 20px;
  width: 20vw;
  background-color: ${props => props.isDraggingOver ? '#aecde0' : null};
  border-radius: 4px;
`
const AddTodoButton = styled.div`
    background-color: green;
    
    &: hover:{
        background-color: red;
    }
`;



// Create and export the BoardColumn component
export const BoardColumn: React.FC<BoardColumnProps> = (props) => {
    const { dispatch } = useContext(Store);

    const Add = ()=>{
        dispatch(AddTodo({column: props.column, todo: "Test"} as AddTodoType));
    };

    const BoardColumnAction = (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <BoardColumnContent
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
        >
            <AddTodoButton onClick={Add}>
                <h3>Add TODO</h3>
            </AddTodoButton>
            {/* All board items belong into specific column. */}
            {props.items.map((item: any, index: number) => <BoardItem key={item.id} item={item} index={index} />)}
            {provided.placeholder}

        </BoardColumnContent>
    );

    return (
        <BoardColumnWrapper>
            {/* Title of the column */}
            <BoardColumnTitle>
                {props.column.title}
            </BoardColumnTitle>

            <Droppable droppableId={props.column.id}>
                {BoardColumnAction}
            </Droppable>

        </BoardColumnWrapper >
    )
}