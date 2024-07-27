import React from 'react';
import { ArrowLeft, Clock, MapPin, Calendar, Share2 } from 'lucide-react';

const FullArticlePage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white">
            {/* Back Button */}
            <a
                href="/#event"
                className="flex items-center text-pink-500 mb-6 hover:text-pink-600 transition duration-300">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour aux activités
            </a>

            {/* Article Header */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Tournoi de Basket-ball : Un succès retentissant à Parakou et Djougou</h1>

            <div className="flex items-center space-x-4 mb-6 text-gray-600">
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">15 min de lecture</span>
                </div>
                <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">Bénin</span>
                </div>
                <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">24 Juillet 2021</span>
                </div>
            </div>

            {/* Main Image */}
            <img src="/images/odd_roure.png" alt="Basketball tournament overview" className="w-[800px] h-[400px] object-cover rounded-lg mb-8" />

            {/* Article Content */}
            <div className="prose max-w-none mb-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                    sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
                    nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>

                <h2>L'impact sur la communauté</h2>
                <p>Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
                    metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
                    lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.</p>
                <div className="flex justify-start items-center">
                    <img src="/images/odd_roure.png" alt="Community engagement"
                         className=" w-[600px] h-[300px]  my-6 object-cover rounded-lg"/>
                </div>

                <h2>Les moments forts du tournoi</h2>
                <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare
                    nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis
                    sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus,
                    vitae facilisis libero dolor a purus.</p>

                <ul>
                    <li>Match d'ouverture spectaculaire</li>
                    <li>Performance exceptionnelle de l'équipe junior</li>
                    <li>Démonstration de dunks par des joueurs professionnels</li>
                </ul>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                <img src="/images/odd_roure.png" alt="Community engagement"
                     className=" w-[300px] h-[200px]  my-6 object-cover rounded-lg"/>
                <img src="/images/odd_roure.png" alt="Community engagement"
                     className=" w-[300px] h-[200px]  my-6 object-cover rounded-lg"/>
                <img src="/images/odd_roure.png" alt="Community engagement"
                     className=" w-[300px] h-[200px]  my-6 object-cover rounded-lg"/>
            </div>

            {/* Conclusion */}
            <div className="prose max-w-none mb-8">
                <h2>Conclusion</h2>
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.</p>
            </div>

            {/* Share Button */}
            <button className="flex items-center bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300">
                <Share2 className="w-5 h-5 mr-2" />
                Partager cet article
            </button>
        </div>
    );
};

export default FullArticlePage;