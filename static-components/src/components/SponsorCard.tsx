import { ReactNode } from "react";

export default function SponsorCard({
    Image,
}: {
    Image?: ReactNode;
}) {
    return (
        <>
        {Image}
        <div className="card card-side card-bordered h-[20vh] bg-base-100">
            
        </div>
        </>
    );
}