import React from "react";

export default function InputList(props) {
  const { onChange, onSubmit, item, onEdit } = props;
  return (
    <div className="row row-input">
      <div className="col-md-8 m-auto mt-4">
        <div className="total-selesai d-flex justify-content-evenly">
          <p>
            Total List : <span>{item.length}</span>
          </p>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan todolist anda"
            aria-describedby="basic-addon2"
            onChange={onChange}
          />
          <span
            className="input-group-text"
            id="basic-addon2"
            onClick={onSubmit}
          >
            tambah
          </span>
        </div>
      </div>
    </div>
  );
}
