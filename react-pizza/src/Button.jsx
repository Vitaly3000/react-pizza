import classnames from 'classnames';

const Button = (props) => {
  return (
    <button
      className={classnames('button', { 'button--outline': props.outline })}>
      {props.children}
    </button>
  );
};
export default Button;
