

const InputBox = ({placeholder ,label}) => {
  return (
    <div className="flex flex-col">
      <label className="flex mb-1 font-medium">{label}</label>
      <input className="border border-black p-2 rounded-lg"placeholder={label} type="text" required/>
    </div>
  )
}

export default InputBox