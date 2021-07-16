import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InputList from "./InputList.js";
import NamaList from "./Namalist.js";
import Done from "./Done.js";
import Proggres from "./Proggres.js";
import ButtonOption from "./ButtonOption.js";
function App() {
  const [done, setDone] = useState([]);
  const [proggres, setProggres] = useState([]);
  const [item, setItems] = useState([]);
  const [value, setValue] = useState({
    id: 0,
    list: "",
    todo: null,
    done: null,
    proggres: null,
  });
  let arr = item;
  const handleChange = (e) => {
    setValue({
      id: item.length,
      list: e.target.value,
      todo: true,
      done: false,
      proggres: false,
    });
  };
  // menambahkan todolist
  const handleSubmit = () => {
    setItems([...item, value]);
    setValue({});
  };
  // untuk menghapus todo
  const Delete = (id) => {
    let tempItem = [...item];
    tempItem.splice(id, 1);
    setItems([...tempItem]);
  };
  // agar list item masuk ke bagian done
  const Clear = (id) => {
    const listDone = arr.filter((listDone) => listDone.id == id);
    listDone[0].done = true;
    listDone[0].todo = false;
    listDone[0].proggres = false;
    setDone(listDone);
  };
  // mengganti value dari input
  const handleEdit = (e, id) => {
    const editList = arr[id];
    editList.list = e.target.value;
  };
  // untuk menghilangkan tag input
  const submitEdit = (e, list) => {
    e.target.style = `display:none`;
    const doc = e.target.parentElement.parentElement.parentElement;
    doc.querySelector("input.act").classList.remove("act");
    doc.querySelector(".nama-list").classList.toggle("edited");
    doc.querySelector(".edit").style = `display:inline !important`;
    setItems([...item]);
  };
  // untuk menampilkan tag input
  const Edit = (e, id) => {
    e.target.style = `display:none`;
    const list = e.target.parentElement.parentElement.parentElement;
    list.querySelector(".nama-list").classList.toggle("edited");
    list.querySelector("input").classList.toggle("act");
    list.querySelector("#edited").style = `display:inline !important`;
  };

  // untuk memunculkan menu dropdown
  const Option = (e) => {
    const parentDropdown = e.target.parentElement;
    const dropdown = parentDropdown
      .querySelector(".flex-column")
      .classList.toggle("act");
  };
  // untuk memproggres todo item
  const onProggres = (id) => {
    const filterProggres = arr.filter((list) => list.id == id);
    filterProggres[0].proggres = true;
    filterProggres[0].todo = false;
    setProggres(filterProggres);
  };

  return (
    <div className="Todo-list">
      <div className="col-md-3 list">
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
          option={Option}
          proggres={onProggres}
        />
      </div>
      <Proggres
        item={arr}
        option={Option}
        onEdit={Edit}
        onDelete={Delete}
        onClear={Clear}
        submitEdit={submitEdit}
        handleEdit={handleEdit}
        proggres={onProggres}
      />
      <Done item={item} onDelete={Delete} />
    </div>
  );
}

export default App;
