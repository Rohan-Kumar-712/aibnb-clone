import React from 'react';
import Image from "next/image";

function Banner() {
    return (
        <div className='relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h[800px]'>
            <Image 
                src="https://links.papareact.com/0fm"
                layout = "fill" objectFit = "cover"
            />
            <div>
                <p>Not sure where to go? P</p>
            </div>
        </div>
    );
}


export default Banner;