import * as React from 'react'
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import styled from 'styled-components'

// Define types for board item element properties
type BoardItemProps = {
    index: number
    item: any
}

// Define types for board item element style properties
// This is necessary for TypeScript to accept the 'isDragging' prop.
type BoardItemStylesProps = {
    isDragging: boolean
}

// Create style for board item element
const BoardItemEl = styled.div<BoardItemStylesProps>`
  padding: 8px;
  background-color: ${(props) => props.isDragging ? '#d3e4ee' : '#c6c4c4'};
  border-radius: 4px;
  transition: background-color .25s ease-out;
  color: black;

  &:hover {
    background-color: #c6c4c452;
  }

  & + & {
    margin-top: 4px;
  }
`

export const BoardItem = (props: BoardItemProps) => {
    return (
        <Draggable /* key={}*/  draggableId={props.item.id} index={props.index}>
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                <BoardItemEl
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                >
                    {props.item.content}
                </BoardItemEl>
            )}
        </Draggable>
    );
}