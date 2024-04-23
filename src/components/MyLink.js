export const MyLink = ({ children, ...rest }) => {
  return (
    <a
      className="my-btn bg-green-600 border-green-700 hover:bg-green-500"
      {...rest}
    >
      {children}
    </a>
  );
};
