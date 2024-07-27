
import Image from 'next/image';
import Link from 'next/link'

const CauseCard = ({ image, percentage, title, pays, goal, lieux, annee }) => {

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="filter brightness-75"
                />
                <div className="absolute top-2 left-2 bg-pink-500 text-white px-2 py-1 rounded">
                    5 min
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                    {title.length > 20 ? title.slice(0, 20) + "..." : title}
                </h3>
                <div className="flex flex-col justify-between text-sm">
                    <div>
                        Pays: <span
                        className="bg-green-500 text-white px-2 py-[0.5px] rounded-full text-[10px]">{pays}</span>
                    </div>
                    <div>
                        Villes : {lieux &&
                        lieux.map((lieu, index) => (
                            <span key={index}
                                  className="bg-blue-500 text-white px-2 py-[0.5px] mx-1 rounded-full text-[10px]">
                                {lieu}
                            </span>
                        ))
                    }
                    </div>
                    <div>
                        Année: <span
                        className="bg-pink-500 text-white px-2 py-[0.5px] rounded-full text-[10px]">{annee}</span>
                    </div>
                </div>
                <div className="mt-4 px-5 flex justify-center items-center w-full bg-gray-700 my-3 text-white py-1 rounded-full hover:bg-gray-600 transition duration-300">
                    <Link
                        className="text-white w-full text-center"
                        href="/detailedarticle">
                        LIRE LA SUITE
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CauseCard;
