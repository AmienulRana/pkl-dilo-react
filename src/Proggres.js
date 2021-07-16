import React from "react";
import ButtonOption from "./ButtonOption.js";
export default function Proggres(props) {
  const {
    onDelete,
    onClear,
    onEdit,
    submitEdit,
    item,
    option,
    data,
    handleEdit,
    proggres,
  } = props;
  return (
    <div className="col-md-3 col-proggres">
      <p className="list-status-paragraf  text-center">
        Proggres Todo :{" "}
        <span className="sls">
          {item.filter((items) => items.proggres == true).length}
        </span>
      </p>
      {item.map((proggres, id) => {
        if (proggres.proggres == true) {
          return (
            <div
              key={id}
              className="d-flex mt-4 list-proggres  justify-content-between align-items-center"
            >
              <input
                type="text"
                onChange={(e) => handleEdit(e, id)}
                className="edit-list"
              />
              <h3 className="nama-list ">{proggres.list}</h3>
              <ButtonOption
                onDelete={onDelete}
                onClear={onClear}
                onEdit={onEdit}
                submitEdit={submitEdit}
                proggres={proggres}
                option={option}
                data={proggres}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
