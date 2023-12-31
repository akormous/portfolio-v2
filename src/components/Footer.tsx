import { H1, H2, H3 } from "./typography/heading";
import socials from "../data/socials.json";

export function Footer() {
    return (
    <>
    <div className="flex flex-col items-center h-full py-20 bg-transparent">
        <div className="flex flex-row my-8"> 
        {socials.map((s) => (
            <a href={s.href} key={s.name} target="_blank">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mx-4 hover:fill-indigo-700"
            fill="white"
            viewBox="0 0 30 30">
                <path d={s.icon} />
            </svg>
            </a>
        ))}
        </div>
        
        <p className="text-white">Akshat Chauhan © {new Date().getFullYear()}</p>
    </div>

    </>);
}