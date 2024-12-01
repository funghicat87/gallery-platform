const Select = ({ options, title, onChange, className}) => {
  return (
    <div className={className}>
      <label className="">{title}</label>
      <select
        onChange={onChange}
        className="w-full p-3 mt-1 pl-5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-main"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.id}</option>
        ))}
      </select>
    </div>
  )
}

export { Select }