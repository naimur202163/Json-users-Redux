export const getAllPost = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: "POST_USERS", payload: "result" });
      });
  };
};
