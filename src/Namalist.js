import React from "react";

export default function NamaList(props) {
  const { item, onDelete, onClear, onEdit, handleEdit, submitEdit } = props;
  return item.map((data, id) => {
    return (
      <div
        key={id}
        className="col-md-8 d-flex justify-content-between relative align-items-center m-auto mt-4"
      >
        <input
          type="text"
          onChange={(e) => handleEdit(e, id)}
          className="edit-list"
        />
        <h3 className="nama-list">{data.list}</h3>
        <div className="flex clear-delete">
          <button className="btn badge btn-success" onClick={onClear}>
            selesai
          </button>
          <button
            className="btn mx-2 badge btn-warning edited"
            id="edited"
            onClick={submitEdit}
          >
            edited
          </button>
          <button
            className="btn mx-2  badge btn-primary"
            onClick={(e) => {
              onEdit(e, data.id);
            }}
          >
            edit
          </button>
          <button
            className="btn badge btn-danger"
            onClick={() => {
              onDelete(id);
            }}
          >
            hapus
          </button>
        </div>
      </div>
    );
  });
}
