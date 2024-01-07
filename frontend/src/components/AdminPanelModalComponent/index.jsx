import React, { useContext, useState } from "react";
import "./index.scss";
import { fetchContext } from "../../contexts/FetchContext";

function AdminPanelModalComponent({ setIsOpen, cb, id, data }) {
  const { getBlogsData } = useContext(fetchContext);
  const [title, setTitle] = useState(data ? data.title : "");
  const [text, setText] = useState(data ? data.text : "");

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    if (id) {
      await cb(id, { title, text });
    } else {
      await cb({ title, text });
    }
    await getBlogsData();
    handleClose();
  };

  return (
    <div className="panel-modal">
      <div className="panel-modal__context">
        <div htmlFor="panel-modal__label">Title</div>
        <div
          className="panel-modal__title"
          onInput={(e) => setTitle(e.currentTarget.innerText)}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {data && data.title}
        </div>
        <div className="panel-modal__label">Text</div>
        <div
          className="panel-modal__text"
          onInput={(e) => setText(e.currentTarget.innerText)}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {data && data.text}
        </div>
        <div className="panel-modal__submit btn" onClick={handleSubmit}>
          Submit
        </div>
        <div className="panel-modal__close" onClick={handleClose}>
          &#x2716;
        </div>
      </div>
    </div>
  );
}

export default AdminPanelModalComponent;
