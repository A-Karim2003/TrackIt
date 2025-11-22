function EditItemInput({ onSubmit, onCancel, onChange, value }) {
  return (
    <input
      className="border border-customOrange rounded-xl py-1 px-2 outline-0"
      type="text"
      value={value}
      autoFocus
      onBlur={() => onCancel()}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        e.key === "Enter" && onSubmit();
        e.key === "Escape" && onCancel();
      }}
    />
  );
}

export default EditItemInput;
