'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CauseCard from "@/components/CauseCard";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OurCauses = () => {
    const causes = [
        { image: "/images/tournois2022.jpg", percentage: 75, title: "Tournoi de Basket-ball féminin",
            annee: 2021,
            pays: "Bénin",
            lieux:[ "Parakou", "Djougou"] ,
            raised: 5, goal: 10 },
        { image: "/images/tournois2022.jpg", percentage: 75, title: "Tournoi de Basket-ball féminin",
            annee: 2021,
            pays: "Bénin",
            lieux:[ "Parakou", "Djougou"] ,
            raised: 5, goal: 10 },
        { image: "/images/tournois2022.jpg", percentage: 75, title: "Tournoi de Basket-ball féminin",
            annee: 2021,
            pays: "Bénin",
            lieux:[ "Parakou", "Djougou"] ,
            raised: 5, goal: 10 },
        { image: "/images/tournois2022.jpg", percentage: 75, title: "Tournoi de Basket-ball féminin",
            annee: 2021,
            pays: "Bénin",
            lieux:[ "Parakou", "Djougou"] ,
            raised: 5, goal: 10 },
        { image: "/images/tournois2022.jpg", percentage: 75, title: "Tournoi de Basket-ball féminin",
            annee: 2021,
            pays: "Bénin",
            lieux:[ "Parakou", "Djougou"] ,
            raised: 5, goal: 10 },
    ];

    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 640px)").matches);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const autoPlayCarousel = () => {
            if (carouselRef.current) {
                const nextButton = carouselRef.current.querySelector('[data-carousel-next]');
                if (nextButton) {
                    nextButton.click();
                }
            }
        };

        const interval = setInterval(autoPlayCarousel, 5000);

        return () => clearInterval(interval);
    }, []);

    const buttonClass = `absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 rounded-full p-2 ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}`;

    return (
        <section id="event" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-pink-500 font-sue-ellen">Nos Causes</h3>
                        <h2 className="titleMd font-bold text-gray-800">Vous pouvez aider beaucoup de gens<br />en donnant peu.</h2>
                    </div>
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300">
                        FAIRE UN DON
                    </button>
                </div>

                <div className="relative" ref={carouselRef}>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {causes.map((cause, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="p-1">
                                        <CauseCard {...cause} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className={`${buttonClass} left-2`} data-carousel-prev>
                            <ChevronLeft className={`text-gray-800 ${isMobile ? 'w-4 h-4' : 'w-6 h-6'}`} />
                        </CarouselPrevious>
                        <CarouselNext className={`${buttonClass} right-2`} data-carousel-next>
                            <ChevronRight className={`text-gray-800 ${isMobile ? 'w-4 h-4' : 'w-6 h-6'}`} />
                        </CarouselNext>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default OurCauses;