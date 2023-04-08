import { ComponentProps, MouseEventHandler } from 'react';

type Props = {
  label: string;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<'button'>;

export const Button = (props: Props) => {
  const { label, onClick, className } = props;

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
