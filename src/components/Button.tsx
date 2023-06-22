interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger" | "warning";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
