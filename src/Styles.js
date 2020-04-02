import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff094; 
    font-family: 'Raleway', sans-serif;
    height: 100%;
    position:absolute;
    top: 0
    left:0;
    overflow-y: hidden;
  }
`;

export const ColumnList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    align-items: start;
    padding: 5px 0;
    overflow-x: auto;
    overflow-y: hidden;
    `;

export const ColumnComponent = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    
    margin: 0px 5px;
    padding: 15px 10px 10px;
    background-color: #fffadf;
    border-radius: 3px;
    min-width: 300px;
    max-width: 300px;
    max-height: 650px;
    box-shadow: 0px 1px 7px rgba(0,0,0,0.2);
    box-sizing: border-box;
`;

export const TaskListWrap = styled.div`
  padding: 2px;
  width: 100%;
  overflow-y: auto;
`;

export const AddColumnForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff8cd;    
    box-shadow: 0px 0px 3px rgba(0,0,0,0.1);
`;

export const AddColumnInput = styled.input`
    border: 2px solid transparent;
    box-sizing: border-box;
    background: transparent;
    width: 240px;
    line-height: 24px;
    font-size: 16px;
    padding: 3px;
    padding-left: 5px;
    cursor: pointer;
    &:hover {
        background-color: #dbd274;
        &::placeholder {
            color: #000;
        }
    }
    &:focus {
        outline: none;
        cursor: text;;
        background-color: #fff8cd;
        border: 2px solid #ffc000;
    }
`;

export const AddColumnButton = styled.button`
    border: none;
    background: transparent;
    color: #555;
    cursor: pointer;
    width: 30px;
    &:hover, &:focus {
        background-color: #dbd274;
        color: #000;
        outline-color: #ffc000;
    }
`;

export const ColumnTitleWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: space-between;
    border: none;
    margin-bottom: 10px;
    width: 100%;
    max-width: 100%;
    margin-left: 5px;    
    position: relative;
`;

export const ColumnTitleButton = styled.button`
    box-sizing: border-box;
    border: none;
    border-radius: 2px;
    color: #555;
    background-color: #fffadf;
    cursor: pointer;
    width: 20px;
    line-height: 20px;
    &:hover {
        background-color: #fff094;
        color: #000;
        }
`;

export const ColumnTitleTextarea = styled.textarea`
    box-sizing: border-box;
    padding: 2px;
    flex-grow: 1;
    resize: none;
    background-color: #fffadf;
    font-size: 18px;
    cursor: pointer;
    overflow: hidden;
    font-family: 'Raleway', sans-serif;
    &:focus {
      outline: none;
      border: 1px solid #ffc000;
      cursor: text;
    }
`;

export const ColumnTitleText = styled.span`
    display: inline-block;
    word-wrap: break-word;
    word-break: break-all;
    box-sizing: border-box;
    border: 1px solid transparent;
    padding: 2px;
    flex-grow: 1;
    font-size: 18px;
`;

export const TaskWrap = styled.div`
    position:relative;
    background-color: ${props => props.isDragging ? '#dbd274' : '#fffadf'};    
    box-shadow: 3px 5px 10px rgba(0,0,0,0.15);
    border-radius: 2px;
    margin-bottom:10px;    
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    &:hover {
        button {
            display: flex;
        }
    }
    &.editTask:before {
          content: '';
          position:fixed;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.7);
          z-index: 10;
        }
`;

export const TaskTextarea = styled.textarea`
    position:relative;
    box-sizing: border-box;
    flex-grow: 1;
    resize: none;
    background-color: transparent;
    font-size: 14px;
    padding: 3px 3px 3px 5px;
    overflow: hidden;
    max-width:100%;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    line-height: 16px;
    z-index: 31;
    &:enabled, &:focus {
        outline: none;
        background-color: #fff;
        border: 1px solid #ffc000;
        border-radius: 1px;   
        cursor: text; 
        
    }    
`;

export const TaskTitle = styled.span`
    width: 100%;
    word-wrap: break-word;
    word-break: break-all;
    display: inline-block;
    font-size: 14px;
    border: 1px solid transparent;
    padding: 3px 3px 3px 5px;
    line-height: 16px;
`;

export const TaskButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 38px;    
    padding: 3px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 31;
    &.edit {
      left: 100%;
      flex-direction: column;
      justify-content: start;
      padding: 0;
      & button {
        display: flex;
      }
    }
`;

export const TaskButton = styled.button`
    justify-content: center;
    align-items: center;
    display: none;
    box-sizing: border-box;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    background-color: #d1b0008c;
    width: 49%;
    height: 18px;
    color: #000;
    &:hover {
        color: #000;
        background-color: #ffc000;
    }
    &:active {
    outline: none;
    }
`;

export const AddTaskWrap = styled.div`
    width: 100%;
    text-align: center;
`;

export const AddTaskButton = styled.button`
    border: none;
    cursor: pointer;
    line-height: 28px;
    color: #555;
    background-color: transparent;
    width: 140px;
    border-radius: 2px;
    font-size: 14px;
    &:hover {
        background-color: #fff094;
        color: #000;
    }    
    &:focus {
      outline: none;
    }
`;

export const AddTaskFormWrap = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const AddTaskFormTextarea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    height: 48px;
    padding: 3px;
    flex-grow: 1;
    border: 1px solid #ffc000;
    resize: none;
    background-color: #fff;
    font-size: 14px;
    overflow: hidden;
    font-family: 'Raleway', sans-serif;
    &:focus {
      outline: none;
    }
`;

export const AddTaskFormButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background-color: transparent;
    font-size: 14px;
    line-height: 24px;
    color: #555;
    margin: 3px 2px 0;
    padding: 3px 7px;
    &:hover {
        color: #000;
        background-color: #fff094;
    }    
    &:focus {
      outline: none;
    }
`;
