'use client';

import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ImageWithPopup = ({ src, alt, width, height, className }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`cursor-pointer ${className}`}
                />
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={900}
                    className="w-full h-auto"
                />
            </DialogContent>
        </Dialog>
    );
};

const Gallery = () => {
    return (
        <div className="bg-yellow-400 text-slate-800">
            <div className="max-w-6xl mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="md:pr-8 flex flex-col gap-3 justify-center">
                        <div>
                            <h2 className="text-pink-500 font-sue-ellen mb-2">Nos Réalisations</h2>
                            <h1 className="titleMd font-bold mb-4">
                                Retour en images sur nos projets
                            </h1>
                            <p className="mb-6">
                                Découvrez quelques-uns des projets les plus marquants réalisés par l'association <strong>Let's Do It Together</strong>. Nous nous efforçons de faire une différence dans la vie des enfants et des communautés à travers des initiatives ciblées.
                            </p>
                            <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
                                PLUS D'IMAGES
                            </button>
                        </div>
                        <ImageWithPopup
                            src="/images/img1.jpg"
                            alt="Groupe d'enfants souriants"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 gap-4">
                        <ImageWithPopup
                            src="/images/img2.jpg"
                            alt="Garçon souriant en chemise à carreaux"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <ImageWithPopup
                            src="/images/img3.jpg"
                            alt="Garçon souriant en chemise à carreaux"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <ImageWithPopup
                            src="/images/img4.jpg"
                            alt="Fille en robe colorée"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <ImageWithPopup
                            src="/images/img3.jpg"
                            alt="Fille souriante en robe rouge"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <div className="bg-yellow-400 p-4 rounded-lg flex flex-col items-center justify-center">
                            <div className="flex gap-2 mb-2">
                                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Éducation</span>
                                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Santé</span>
                                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Sport</span>
                            </div>
                            <h3 className="text-xs md:text-lg font-bold">Plus d'un sourire à la fois...</h3>
                        </div>
                        <ImageWithPopup
                            src="/images/img3.jpg"
                            alt="Groupe d'enfants souriants"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
