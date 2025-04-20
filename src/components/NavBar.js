const NavBar = ({ emitData }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4">
      <div className="text-2xl font-bold text-main-primary">Logo</div>
      <div className="flex space-x-4">
        <button
          onClick={() => emitData("step1")}
          className="text-gray-700 hover:text-main-primary"
        >
          Step 1
        </button>
        <button
          onClick={() => emitData("step2")}
          className="text-gray-700 hover:text-main-primary"
        >
          Step 2
        </button>
      </div>
    </div>
  );
};
export default NavBar;
