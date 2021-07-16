import React from "react";

export default function ButtonOption(props) {
  const {
    onDelete,
    onClear,
    onEdit,
    submitEdit,
    option,
    proggres,
    data,
  } = props;
  return (
    <div className="dropdown">
      <button className="btn option badge" type="button" onClick={option}>
        option
      </button>
      <div className="dropdown  flex-column">
        <span
          className="edited"
          id="edited"
          onClick={(e) => submitEdit(e, data.id)}
        >
          edited
        </span>
        <span className="edit" onClick={(e) => onEdit(e, data.id)}>
          edit
        </span>
        <span className="btn-proggres" onClick={() => proggres(data.id)}>
          proggres
        </span>
        <span onClick={(e) => onClear(data.id)}>done</span>
        <span
          onClick={() => {
            onDelete(data.id);
          }}
        >
          delete
        </span>
      </div>
    </div>
  );
}
