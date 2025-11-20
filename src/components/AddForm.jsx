function AddForm({ placeholder, onSubmit, setValue }) {
  return (
    <form className="flex gap-2 w-full" onSubmit={onSubmit}>
      <input
        type="text"
        className="border border-customGrey flex-1 rounded-lg px-4 py-2 text-[16px] focus:outline-customOrange"
        placeholder={placeholder || "Enter task name"}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="px-4 py-2 bg-customGreen text-white text-shadow-sm text-shadow-black rounded-lg hover:opacity-85">
        + Add
      </button>
    </form>
  );
}

export default AddForm;
