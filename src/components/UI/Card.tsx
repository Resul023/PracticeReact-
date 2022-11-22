import "./Card.scss";
interface ICardInterfaceProps {
  className: string;
  children: JSX.Element[];
}
export const Card = (props: ICardInterfaceProps) => {
  const { className, children } = props;
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};
