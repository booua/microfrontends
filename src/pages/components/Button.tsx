'use client';

import React, { type FC, type ReactNode } from 'react';
import { cn } from 'utils/cn';

import { CircularLoader } from './CircularLoader';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  outline?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  outline = false,
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  children,
  onClick,
  className,
  type = 'button',
}) => {
  const baseStyles =
    'flex items-center justify-center font-medium rounded-full transition-colors duration-200';

  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    primary: outline
      ? 'border border-primary text-primary hover:bg-primary hover:text-white'
      : 'bg-primary text-white hover:bg-primary-dark',
    secondary: outline
      ? 'border border-secondary text-secondary hover:bg-secondary hover:text-white'
      : 'bg-secondary text-white hover:bg-secondary-dark',
    danger: outline
      ? 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
      : 'bg-red-600 text-white hover:bg-red-700',
    success: outline
      ? 'border border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
      : 'bg-green-600 text-white hover:bg-green-700',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    disabled && disabledStyles,
    className,
  );

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <CircularLoader />
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <span className="mr-2">{Icon}</span>
          )}
          {children}
          {Icon && iconPosition === 'right' && (
            <span className="mr-2">{Icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
