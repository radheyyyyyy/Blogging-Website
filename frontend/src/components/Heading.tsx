type props={
    title: string,
}

export function Heading({title}: props) {
    return(
        <div className='font-extrabold text-2xl font-sans ml-6'>
            {title}
        </div>
    )
}