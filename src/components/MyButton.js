export const MyButton = ({ children, ...rest }) => {
  return (
    <button
      className="my-btn bg-cyan-600 border-cyan-700  hover:bg-cyan-500"
      {...rest}
    >
      {children}
    </button>
  );
};
