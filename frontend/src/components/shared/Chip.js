export const Chip = (props) => {
  const { label } = props;

  return (
    <span className="rounded-full bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5">
      {label}
    </span>
  );
};
