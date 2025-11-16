function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div
          className="absolute inset-0 border-4 border-transparent rounded-full animate-spin"
          style={{
            borderTopColor: "#44c1b3",
            borderRightColor: "#44c1b3",
          }}
        ></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
