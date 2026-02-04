
import Link from "next/link";

export default function HamburgerPage() {
    return (
        <main className="min-h-screen bg-[#eff5ef] px-4 py-12">
            <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-10">

                {/* Rubrik och undertext*/}
                <div className="flex-1 text-left flex flex-col gap-6">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Fredriks Hamburgare
                    </h1>
                    <p className="text-gray-600 text-lg">  
                        Gott på några minuter, enkelt att göra till en fredagkväll!
                        Passar till en middag för 2 personer.
                    </p>

                    {/* Ingredienser */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Hamburgare</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>500g Nötfärs</li>
                            <li>250g Fläskfärs</li>
                            <li>1/2 Gul Lök</li>
                            <li>Salt & Peppar</li>
                            <li>Vitlökspulver</li>
                            <li>Lökpulver</li>
                            <li>Paprikapulver</li>
                            <li>Klick smör till stekning</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Karamelliserad Lök</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>1 Gul lök</li>
                            <li>Sirap/Socker</li>
                            <li>Vitpeppar</li>
                            <li>Salt</li>
                            <li>Klick smör till stekning</li>
                        </ul>
                    </div>

                    {/* Tillbehör */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Tillbehör</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Tomat</li>
                            <li>Sallad</li>
                            <li>Bacon</li>
                            <li>Hamburgarbröd</li>
                            <li>Gurka/Pickles</li>
                        </ul>
                    </div>

                    {/* Instruktioner */}
                    <div className="mt-8 text-left">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Instruktioner</h2>
                        <ol className="list-decimal list-inside text-gray-600 space-y-2">
                            <li>Blanda nötfärsen med peppar, vitlökspulver, lökpulver, paprikapulver, salt och ägg till biffar.</li>
                            <li>Skiva löken och stek den i smör, sirap, socker, vitpeppar och salt.</li>
                            <li>Stek löken tills den mjuknat och fått färg. Lägg åt sidan och stek sedan stek baconet krispigt och lägg åt sidan. </li>
                            <li>Skiva tomaten och andra tillbehör. Lägg också dessa åt sidan.</li>
                            <li>Lägg en klick smör i stekpannan och lägg i hamburgarna när smöret smält. Stek den i ca 2minuter på varje sida.</li>
                            <li>Ta fram ditt bröd och sätt ihop din hamburgare, Klart!</li>
                        </ol>
                    </div>

                    {/* Back button */}
                    <div className="mt-6">
                        <div className="mt-6">
                            <Link
                                href="/"
                                className="inline-block rounded-2xl bg-white border border-gray-300 px-8 py-3 font-semibold shadow-md text-gray-700 hover:bg-gray-100 transition"
                            >
                                Back to menu
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Höger: Bilder */}
                <div className="flex-1 flex flex-col items-center justify-center gap-6">
                    <img
                        src="/images/hamburger.jpg"
                        alt="Hamburgare"
                        className="rounded-2xl shadow-md object-cover max-h-[300px] w-full"
                    />
                    <img
                        src="/images/karamelliserad_lok.jpg"
                        alt="Karamelliserad lök"
                        className="rounded-2xl shadow-md object-cover max-h-[300px] w-full"
                    />
                    <img
                        src="/images/tomato.png"
                        alt="tomater"
                        className="rounded-2xl shadow-md object-cover max-h-[300px] w-full"
                    />
                </div>
            </div>
        </main>
    );
}
