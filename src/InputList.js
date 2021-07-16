import React from "react";

export default function InputList(props) {
  const { onChange, onSubmit, item, onEdit } = props;
  return (
    <div className="row row-input">
      <div className="m-auto">
        <div className="total-selesai d-flex mb-4 justify-content-evenly">
          <p className="align-self-center list-status-paragraf">
            Total Todo :{" "}
            <span className="sts">
              {item.filter((items) => items.todo == true).length}
            </span>
          </p>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control add-todolist"
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
