"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
    const { user } = useUser();
    return ( 
        <div className="h-full p-8 flex flex-col items-center justify-center space-y-6">
            <Image
                src="/new-note.png"
                height="300"
                width="500"
                alt="New note"
                className="dark:hidden"
            />
            <Image
                src="/new-note-dark.png"
                height="300"
                width="500"
                alt="New note"
                className="hidden dark:block"
            />
            <h2 className="text-lg font-medium">

                Welcome to {user?.firstName}&apos;s Notion
            </h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2"/>
                Create a note
            </Button>
        </div>
     );
}
 
export default DocumentsPage;