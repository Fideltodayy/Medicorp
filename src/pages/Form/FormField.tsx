function FormField({ name, label, ...rest }) {
  return (
    <div >
      <label
        // {
        //   name === "firstName" ? 
        //     { 
        //       labelClassContents="mb-2.5 block text-black dark:text-white", 
        //       inputClassContents="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        //     } 
        //   : null
        // } 
        htmlFor={name} className="mb-2.5 block text-black dark:text-white">{label}</label>
      <input  id={name} name={name} {...rest} className="mb-2.5 block text-black dark:text-white" />
    </div>
  );
}

export default FormField;
