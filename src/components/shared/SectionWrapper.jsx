/* eslint-disable react/prop-types */
const SectionWrapper = ({
  id,
  children,
  title,
  subtitle,
  fullWidth = false,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`${
        fullWidth ? "!px-0" : "max-w-7xl mx-auto px-6 md:px-16"
      } py-20 ${className}`}
    >
      {(title || subtitle) && (
        <div className={`text-center ${fullWidth ? "px-6" : ""} mb-8`}>
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;
