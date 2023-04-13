import React from "react";

const Todolist = ({ todolist, deleteHandler, editHandler }) => {
  return (
    <div>
      {todolist.map((todo, index) => (
        <div key={index}>
          <h3
            style={{
              marginTop: "10px",
              color: "skyblue",
              fontWeight: "bolder",
            }}
          >
            {" "}
            {todo} &nbsp;
            <button
              style={{
                color: "white",
                backgroundColor: "skyblue",
                borderColor: "skyblue",
                borderRadius: "10px",
              }}
              onClick={() => deleteHandler(index)}
            >
              Delete
            </button>
            &nbsp;&nbsp;
            <button
              style={{
                color: "white",
                backgroundColor: "skyblue",
                borderColor: "skyblue",
                borderRadius: "10px",
              }}
              onClick={() => editHandler(index)}
            >
              Edit
            </button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
