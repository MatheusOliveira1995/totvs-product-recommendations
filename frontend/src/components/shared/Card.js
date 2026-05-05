export const Card = (props) => {
  const { children, ...rest } = props;

  return (
    <div
      className="max-w-md mx-auto p-4 rounded-lg shadow-md bg-white"
      {...rest}
    >
      {children}
    </div>
  );
};
