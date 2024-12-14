export default function Footer() {
  return (
    <footer className="bg-red-700 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0">
          <p className="text-xl font-bold">Malbec BBQ</p>
          <p className="mt-2">MalbecBBQ@gmail.com</p>
          <p>@MalbecBBQ</p>
        </div>
        <p className="text-sm text-gray-200">&copy; 2024 Malbec BBQ | Diseño MOGG</p>
      </div>
    </footer>
  );
}
