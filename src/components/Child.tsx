interface abc{
    name:string,
    age:number
}
const Child:React.FC<abc>=({name,age})=>{
    return(
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>

        </div>
    )
}
export default Child;