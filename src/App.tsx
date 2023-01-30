import { useCallback, useState } from "react";
import TodoList from "./components/TodoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import TodoItem from "./interface";
import { v4 } from "uuid";

function App() {
  //State and Prop
  //State là dữ liệu nội tại của component hiện tại
  //Prop là các dữ liệu được truyền từ element cha
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  //Trả về một array. Với 2 element.
  //Element thứ 1 là biến để lưu trữ state có tên là todoList
  //Element thứ 2 là một method để cập nhật list này

  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e: any) => {
    setTextInput(e.target.value); //Nội dung người dùng nhập vào input
  }, []);
  //Sử dụng useCallBack biến onTextInputChange và onAddBtnClick sẽ không bị khởi tạo lại sau mỗi lần add

  const onAddBtnClick = useCallback(() => {
    //thêm text input vào danh sách todoList
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false },
      ...todoList,
    ]);
    setTextInput("");
  }, [textInput]);
  //Thêm biến textInput vào Array thứ 1 sẽ khởi tạo lại textInput có sự thay đổi giá trị

  const onCheckBtnClick = useCallback((id: string) => {
    setTodoList((prevState: TodoItem[]) =>
      prevState.map((todo: TodoItem) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);

  const onDeleteBtnClick = useCallback((id: String) => {
    setTodoList((item: TodoItem[]) => item.filter((todo: TodoItem) =>{
      return todo.id != id;
    } ))
  }, []);

  return (
    <>
      <h3>Danh sách cần làm</h3>
      <TextField
        value={textInput}
        onChange={onTextInputChange}
        name="add-todo"
        placeholder="Thêm việc cần làm..."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance={"primary"}
            onClick={onAddBtnClick}
          >
            Thêm
          </Button>
        }
      ></TextField>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} onDeleteBtnClick={onDeleteBtnClick}></TodoList>
    </>
  );
}

export default App;
