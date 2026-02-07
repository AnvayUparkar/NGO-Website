export const Skeleton = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
}) => {
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
  };

  return (
    <div
      className={`skeleton ${variants[variant]} ${className}`}
      style={{
        width: width || (variant === 'circular' ? '40px' : '100%'),
        height: height || (variant === 'circular' ? '40px' : variant === 'text' ? '1rem' : '100px'),
      }}
      aria-label="Loading..."
      role="status"
    />
  );
};
