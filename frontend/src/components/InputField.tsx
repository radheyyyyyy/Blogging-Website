type props={
    n:string,
    placeholder:string,
    onChange:any,
    type:any
}

export function InputField({n,placeholder,onChange,type}:props){
    return(
        <div>
            <label className='font-bold'>{n}</label>
            <input type={type} name={n} className='mt-2 mb-3 rounded border-2 border-gray-400 p-1 w-full' placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}