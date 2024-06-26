"use client"
import {useState} from "react";
import {Input} from "@/components/UI/input";
import {Search} from "lucide-react";




export default function SearchBar({className}:{className:string}) {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <div className = {`relative py-3  flex items-center justify-center w-72 ${className} `}>
            <Input
                disabled={true}
                onBlur={()=>{setIsActive(false)}}
                onFocus={()=>{setIsActive(true); }}
                type ={'search'}
                className={'bg-blue-200 border-blue-300 text-center focus:placeholder-transparent'}
                placeholder={'Szukaj po tagach'}
            />
            {!isActive && <Search className={'absolute top-1/2 -translate-y-1/2 left-1 text-muted-foreground'}/>}
        </div>
    )
}