"use client";

import Image from "next/image";

const DocumentsPage = () => {
    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/new-note.png"
                height="300"
                alt="New note"
            />
        </div>
     );
}
 
export default DocumentsPage;