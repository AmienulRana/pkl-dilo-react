import React from "react";
import ButtonOption from "./ButtonOption.js";
export default function NamaList(props) {
  const {
    item,
    onDelete,
    onClear,
    onEdit,
    handleEdit,
    submitEdit,
    option,
    proggres,
  } = props;
  return item.map((data, id) => {
    if (data.todo === true) {
      return (
        <div
          key={id}
          className="d-flex justify-content-between relative align-items-center m-auto mt-4"
        >
          <input
            type="text"
            onChange={(e) => handleEdit(e, id)}
            className="edit-list"
          />
          <h3 className="nama-list">{data.list}</h3>
          <ButtonOption
            onDelete={onDelete}
            onClear={onClear}
            onEdit={onEdit}
            submitEdit={submitEdit}
            option={option}
            proggres={proggres}
            data={data}
          />
        </div>
      );
    }
  });
}
