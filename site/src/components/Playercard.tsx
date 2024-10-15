interface Player{
    name:string;
    points:number
}
export default function Playercard({name,points}:Player){
    return(
        <div className="w-fit h-fit px-2 grid-cols-1 rounded-2xl border-2  bg-neutral-950 border-white inline-flex gap-x-5">
            <div className="text-2xl font-bold">{name}</div>
            <div className="text-2xl font-bold">{points}</div>
        </div>
    );
}