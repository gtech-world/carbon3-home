import React, { FC } from "react";
import classNames from "classnames";

const AButton: FC<AllComponent.AButton> = ({
  href,
  text,
  className,
  transComponent,
  onClick,
  children,
  ...rest
}) => {

  return (
    <a
      href={href || ''}
      className={classNames(
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {text ||children}
    </a>
  );
};

export default AButton;
