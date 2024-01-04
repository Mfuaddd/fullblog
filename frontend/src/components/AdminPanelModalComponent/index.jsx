import React from "react";

function AdminPanelModalComponent() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  c
  return (
    <div className="panel-modal">
      <form action="">
        <label for="panel-title">Title</label>
        <input
          type="text"
          name="panel-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="panel-text">Text</label>
        <textarea
          name="panel-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default AdminPanelModalComponent;
