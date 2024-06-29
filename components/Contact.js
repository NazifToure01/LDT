import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div id="contact" className="min-h-screen bg-slate-700 text-white p-8 lg:px-0 flex items-center justify-center">
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
                {/* Left Section */}
                <div className="md:w-1/2">
                    <h2 className="text-sm mb-2 font-sue-ellen">Comment Nous Aidons</h2>
                    <h1 className=" titleMd font-bold mb-4">Rejoignez La Communauté Pour Offrir Une Éducation Aux Enfants</h1>
                    <p className="mb-4">
                        L'association <strong>Let's Do It Together</strong> s'efforce de fournir des opportunités éducatives et de soutien aux enfants en situation difficile. Nous croyons en l'importance de l'éducation pour créer un avenir meilleur.
                    </p>
                    <div className="relative h-48 mb-4">
                        <Image
                            src="/images/outils.jpg"
                            alt="Enfants dans une salle de classe"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
                        FAIRE UN DON
                    </button>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2">
                    <div className="bg-slate-600 p-6 rounded-lg">
                        <h2 className="text-2xl titleMd mb-4">Devenez Bénévole</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Nom Complet*"
                                className="w-full p-2 bg-slate-700 rounded"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Adresse Email*"
                                className="w-full p-2 bg-slate-700 rounded"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Numéro de Téléphone*"
                                className="w-full p-2 bg-slate-700 rounded"
                                required
                            />
                            <textarea
                                placeholder="Message*"
                                className="w-full p-2 bg-slate-700 rounded h-24"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-white text-slate-800 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
                            >
                                SOUMETTRE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
