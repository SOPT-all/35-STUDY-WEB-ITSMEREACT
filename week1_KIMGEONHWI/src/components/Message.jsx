const Message = ({ isLoggedIn }) => {
  return <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>;
};

export default Message;
