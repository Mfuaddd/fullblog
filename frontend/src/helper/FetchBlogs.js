export const deleteBlogByID = async (id) => {
  await fetch(`http://localhost:3100/blogs/${id}`, { method: "DELETE" });
};

export const AddBlog = async (data) => {
  console.log(data);
  await fetch("http://localhost:3100/blogs/", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
};

export const EditBlogByID = async (id, data) => {
  await fetch(`http://localhost:3100/blogs/${id}`, {
    method: "PUT",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
};
