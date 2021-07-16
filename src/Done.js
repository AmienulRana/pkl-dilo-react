import React from "react";

export default function Done(props) {
  const { item, onDelete } = props;
  return (
    <div className="col-md-3 col-selesai">
      <p className="list-status-paragraf text-center">
        Todo Selesai :{" "}
        <span className="sls">
          {item.filter((done) => done.done == true).length}
        </span>
      </p>
      {item.map((listDone, id) => {
        if (listDone.done === true) {
          return (
            <div
              key={id}
              className="d-flex align-items-center justify-content-between"
            >
              <h3 className="nama-list selesai">{listDone.list}</h3>
              <span onClick={() => onDelete(listDone.id)} className="close">
                <ion-icon name="close"></ion-icon>
              </span>
            </div>
          );
        }
      })}
    </div>
  );
}
