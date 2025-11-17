function AddSubjectForm() {
  return (
    <form className="flex gap-2">
      <input
        type="text"
        className="border border-customGrey flex-1 rounded-lg px-4 py-2 text-[16px]"
      />
      <button className="px-4 py-2 bg-customGreen text-white text-shadow-sm text-shadow-black rounded-lg hover:opacity-85">
        + Add
      </button>
    </form>
  );
}

export default AddSubjectForm;
