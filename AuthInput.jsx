export default function AuthInput({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm text-slate-300 mb-2">{label}</label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          bg-slate-800
          border
          border-slate-700
          rounded-xl
          px-4
          py-3
          outline-none
          focus:border-indigo-500
          text-white
        "
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
