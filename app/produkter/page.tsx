export default function ProductCard() {
    return(
        <div className="bg-white rounded-2xl shadow-md p-6">
            <img
            src="/images/spice.jpg"
            alt="Kryddor"
            className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Biryani krydda</h3>
            <p className="text-gray-600">Autentisk kryddblandning</p>
            <p className="font-bold mt-2">89 KR</p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">Lägg i varukorg</button>

        </div>
    );
}