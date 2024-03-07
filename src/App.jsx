export default function App() {
  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="text-center m-5">
          <h1 className="text-4xl font-bold">CliquéaloMX</h1>
          <p className="text-lg mt-5">La nueva forma de comprar tu auto en construcción</p>
          <p className="text-lg mt-2">Consulta nuestro inventario</p>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 mt-8 m-5">
            <a href="https://www.mercadolibre.com.mx/perfil/CLIQUEALO+MX" target="_blank" rel="noopener noreferrer" className="border border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full md:w-auto">
              MercadoLibre
            </a>
            <a href="https://www.instagram.com/cliquealo/" target="_blank" rel="noopener noreferrer" className="border border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full md:w-auto">
              Instagram
            </a>
            <a href="https://wa.me/+523315670227" target="_blank" rel="noopener noreferrer" className="border border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full md:w-auto">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
  );
}
