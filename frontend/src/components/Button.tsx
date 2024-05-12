
type props={
    click:string
    onclick:any
}

export function Button({click,onclick}:props){
    return(
        <div>
            <button className='hover:font-normal hover:p-2 font-light w-full bg-black rounded text-white p-1 font-sans mt-1' onClick={onclick}>{click}</button>
        </div>
    )
}