import React from 'react';
import { Check } from 'lucide-react';

const dons =
    [
        'Dons de nourriture',
        'Fourniture et équipement sportif',
        'Aide financière',
        'Aide matérielle',
        'Dons de vêtements',
        'Dons de jouets']

const AboutUs = () => {
    return (
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Colonne de gauche */}
                    <div className="md:w-1/2">
                        <h3 className="text-pink-500 font-sue-ellen mb-2">À Propos de Nous</h3>
                        <h2 className="titleMd  text-gray-800 mb-4">Aider les Gens,<br />Notre Principal Objectif</h2>
                        <p className="text-gray-600 mb-4">
                            L'association <strong>Let's Do It Together</strong> est une organisation à but non lucratif dédiée à promouvoir le basketball féminin et à apporter des moments de joie aux enfants orphelins, talibés et en situation difficile au Bénin, en Afrique et en France. Notre mission est de créer des opportunités et des souvenirs inoubliables à travers le sport, en particulier le basketball.
                        </p>
                        <button className="bg-pink-500 text-lg text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300">
                            EN SAVOIR PLUS
                        </button>
                    </div>

                    {/* Colonne de droite */}
                    <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
                        <h4 className="text-xl titleMd  text-gray-800 mb-4">
                            Comment Vous Pouvez Aider ?
                        </h4>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {
                                dons && dons.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="bg-green-400 rounded-full m-1 flex justify-center items-center h-8 w-8">
                                        <Check className="text-green-800 " size={20} />
                                    </div>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                        <button className="w-full bg-white text-pink-500 border border-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition duration-300">
                            FAIRE UN DON MAINTENANT
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
