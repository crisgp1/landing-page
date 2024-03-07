export default function App() {
  return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">CliquéaloMX</h1>
          <p className="text-2xl text-white mt-3">La nueva forma de comprar tu auto está en construcción</p>
          <p className="text-2xl font-bold text-white mt-8">Consulta nuestro inventario</p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <a href="https://www.mercadolibre.com.mx/perfil/CLIQUEALO+MX" target="_blank" rel="noopener noreferrer" className="border border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              MercadoLibre
            </a>
            <a href="https://www.instagram.com/cliquealo/" target="_blank" rel="noopener noreferrer" className="border border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              Instagram
            </a>
            <a href="https://wa.me/+523315670227" target="_blank" rel="noopener noreferrer" className="border border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
  );
}
