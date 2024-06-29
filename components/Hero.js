import Image from 'next/image';
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen">
            <Image
                src="/images/hero-image.jpg"
                alt="Enfants souriants"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between px-4 py-8 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto w-full flex flex-col h-full">
                    <div className="text-white mb-8">
                        <p className="text-xl sm:text-2xl font-sue-ellen mb-2 font-light">Ensemble, Nous Pouvons...</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            Organiser le bonheur pour les enfants à travers le basketball
                        </h1>
                        <div className="inline-block bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full text-sm">
                            POUR LES ENFANTS EN DIFFICULTÉ
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300">
                            FAIRE UN DON
                        </button>
                        <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                            DÉCOUVRIR
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-auto">
                        <div className="bg-green-500 p-4 rounded-lg">
                            <h3 className="text-lg font-bold text-white mb-2">Promotion du basketball féminin</h3>
                            <p className="text-white text-sm mb-4">Nous organisons des tournois pour promouvoir le basketball féminin et créer des opportunités pour les jeunes filles.</p>
                            <button className="bg-white text-green-500 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition duration-300">
                                EN SAVOIR PLUS
                            </button>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h3 className="text-lg font-bold text-white mb-2">Devenez bénévole</h3>
                            <p className="text-white text-sm mb-4">Rejoignez-nous pour organiser des moments de joie avec les enfants orphelins, talibés et en situation difficile.</p>
                            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition duration-300">
                                REJOINDRE L'ASSOCIATION
                            </button>
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
                                    <Play size={20} className="text-pink-500" />
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