import Image from 'next/image';
import { Play } from 'lucide-react';
import {VideoPlayer} from "@/components/VideoPlayer";

const Hero = () => {
    return (
        <section className="relative min-h-screen">
            <Image
                src="/images/background.jpg"
                alt="Enfants souriants"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between px-4 py-8 lg:py-24 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto w-full flex flex-col h-full">
                    <div className="text-white mb-8">
                        <p className="text-xl sm:text-2xl font-sue-ellen mb-2 font-light">Ensemble, Nous Pouvons...</p>
                        <h1 className=" titleMd text-3xl max-w-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            Organiser le bonheur pour les enfants à travers le basketball
                        </h1>
                        <div className="inline-block bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full text-sm">
                            POUR LES ENFANTS EN DIFFICULTÉ
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <a
                            href="/#event"
                            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300">
                            FAIRE UN DON
                        </a>
                        <a
                            href="/#event"
                            className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                            DÉCOUVRIR
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-auto">
                        <div className="bg-green-500 p-4 rounded-lg">
                            <h3 className="text-lg font-bold text-white mb-2">Promotion du basketball féminin</h3>
                            <p className="text-white text-[15px] md:text-lg text-base font-work-sans mb-4">Nous organisons des tournois pour promouvoir le basketball féminin et créer des opportunités pour les jeunes filles.</p>
                            <a
                                href="/#about"
                                className="bg-white text-green-500 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition duration-300">
                                EN SAVOIR PLUS
                            </a>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h3 className="text-lg font-bold text-white mb-2">Devenez bénévole</h3>
                            <p className="text-white text-[15px] md:text-lg text-base font-work-sans  mb-4">Rejoignez-nous pour organiser des moments de joie avec les enfants orphelins, talibés et en situation difficile.</p>
                            <a
                                href="/#contact"
                                className="bg-white text-gray-700 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition duration-300">
                                REJOINDRE L'ASSOCIATION
                            </a>
                        </div>
                        <div className="relative rounded-lg overflow-hidden h-48 sm:h-auto">
                            <Image
                                src="/images/odd_roure.png"
                                alt="Volunteer"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-white bg-opacity-80 p-3 rounded-full hover:bg-opacity-100 transition duration-300">
                                    <VideoPlayer />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;