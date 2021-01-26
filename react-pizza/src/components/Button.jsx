import classnames from 'classnames';

const Button = ({ className, outline, children }) => {
  return (
    <button
      className={classnames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};
export default Button;
