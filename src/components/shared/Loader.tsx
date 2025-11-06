const Loader = ({ size = 50 }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className={`border-4 border-gray-200 border-t-primary rounded-full animate-spin`} style={{ width: size, height: size }}></div>
    </div>
  );
};

export default Loader;
