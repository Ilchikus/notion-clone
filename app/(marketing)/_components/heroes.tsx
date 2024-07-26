import Image from "next/image";

export const Heroes = () => {
    return ( 
        <div>
            <Image 
            src="/bg.svg" 
            alt="BG" 
            className="w-full dark:hidden"
            width={1630}
            height={410} />
            <Image 
            src="/bg-dark.svg" 
            alt="BG" 
            className="w-full hidden dark:block"
            width={1630}
            height={410} />
        </div>
     );
}