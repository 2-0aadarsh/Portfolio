/* eslint-disable react/prop-types */
export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-800 rounded-full h-3">
      <div
        className="bg-purple-500 h-3 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
