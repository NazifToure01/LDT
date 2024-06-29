'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { Facebook, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

const VolunteerCard = ({ name, image, linkedinLink }) => (
    <div className="flex flex-col items-center">
        <Image src={image} alt={name} width={200} height={200} className="rounded-lg mb-2 object-cover" />
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <div className="flex space-x-2">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={16} />
            </a>
            <Facebook size={16} />
            <Twitter size={16} />
        </div>
    </div>
);

const MeetOurVolunteers = () => {
    const volunteers = [
        { name: "Arielle Kouke", image: "/images/arielle.jpg", linkedinLink: "https://www.linkedin.com/in/arielle-kouke" },
        { name: "Keira Knightley", image: "/images/volontaire.jpg", linkedinLink: "https://www.linkedin.com/in/ilimath-amouda-244042135/" },
        { name: "Jack Sparrow", image: "/images/volontaire.jpg", linkedinLink: "#" },
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
        <section id="volunteers" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-pink-500 font-sue-ellen">Notre Équipe</h3>
                        <h2 className="titleMd font-bold text-gray-800">Rencontrez Nos Volontaires</h2>
                    </div>
                </div>

                <div className="relative" ref={carouselRef}>
                    <Carousel>
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {volunteers.map((volunteer, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="p-1">
                                        <VolunteerCard {...volunteer} />
                                    </div>
                                </CarouselItem>
                            ))}
                            <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="bg-yellow-400 rounded-lg p-6 flex flex-col justify-center items-center text-center h-full">
                                    <div className="bg-white rounded-full p-3 mb-4">
                                        <Image src="/images/logo.png" alt="Icône de volontaire" width={24} height={24} />
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-shippori-bold mb-2">Devenez Volontaire</h3>
                                    <p className="mb-4 text-lg">Contribuez à faire une différence dans la vie des enfants et des communautés.</p>
                                    <button className="bg-slate-700 text-white px-6 py-1 rounded-full hover:bg-slate-600 transition-colors">
                                        REJOIGNEZ-NOUS
                                    </button>
                                </div>
                            </CarouselItem>
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

export default MeetOurVolunteers;