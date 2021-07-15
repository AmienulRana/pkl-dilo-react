import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InputList from "./InputList.js";
import NamaList from "./Namalist.js";

function App() {
  const [item, setItems] = useState([]);
  const [value, setValue] = useState({
    id: 0,
    list: "",
  });
  const handleChange = (e) => {
    setValue({
      id: item.length,
      list: e.target.value,
    });
  };
  const handleSubmit = () => {
    setItems([...item, value]);
  };
  const Delete = (id) => {
    let tempItem = [...item];
    tempItem.splice(id, 1);
    setItems([...tempItem]);
  };
  const Clear = (e) => {
    const namaList = e.target.parentElement.parentElement;
    const nama = namaList.querySelector(".nama-list");
    nama.classList.toggle("selesai");
  };
  const handleEdit = (e, id) => {
    const editList = item
      .filter((dataList) => dataList.id === id)
      .map((list) => {
        setValue({
          id: list.id,
          list: e.target.value,
        });
      });
  };
  const submitEdit = (e, list) => {
    const doc = document;
    doc.querySelector("input.act").classList.remove("act");
    doc.querySelector(".nama-list").classList.toggle("edited");
    doc.querySelector("button#edited").style = `display:none !important`;
    doc.querySelector("button.edit").style = `display:inline !important`;
    setItems([...item, value]);
  };
  console.log(item);
  const Edit = (e, id) => {
    e.target.style = `display:none`;
    const list = e.target.parentElement.parentElement;
    list.querySelector(".nama-list").classList.toggle("edited");
    list.querySelector("input").classList.toggle("act");
    list.querySelector("button#edited").style = `display:inline !important`;
    // setValue(editList);
  };
  return (
    <div className="Todo-list">
      <InputList
        item={item}
        onEdit={Edit}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <NamaList
        item={item}
        onEdit={Edit}
        onDelete={Delete}
        onClear={Clear}
        handleEdit={handleEdit}
        submitEdit={submitEdit}
      />
    </div>
  );
}

export default App;
