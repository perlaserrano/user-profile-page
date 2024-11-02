

const Footer = () => {
  return (
    <footer className="mt-8 p-4 text-center">
      <div className="mb-4">
        <p className="text-sm font-inter  ">Diseñado por <a className=" text-pink-500" href="https://www.linkedin.com/in/rosangelica-feliz-saldivar-5969381b6/">Rosangelica Saldivar</a> , Desarrollado por <a className=" text-pink-500" href="https://www.linkedin.com/in/perla-serrano-257b9217b/"> Perla Serrano</a></p>
        <p className="text-xs font-inter  ">© 2024 Todos los derechos reservados.</p>

      </div>

      <div className="flex justify-center space-x-6 mb-4">
        {/* Facebook Icon */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
            <path d="M22 12a10 10 0 1 0-11.66 9.92v-7.02h-2.72V12h2.72V9.63c0-2.7 1.6-4.2 4.05-4.2 1.17 0 2.4.2 2.4.2v2.6h-1.35c-1.33 0-1.74.83-1.74 1.68V12h3.04l-.49 2.9h-2.55v7.02A10.02 10.02 0 0 0 22 12z"/>
          </svg>
        </a>
        
        {/* LinkedIn Icon */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
            <path d="M20.45 20.45h-3.27v-5.37c0-1.28-.46-2.15-1.62-2.15-.88 0-1.4.59-1.63 1.16-.09.22-.11.52-.11.82v5.54h-3.27s.04-9 0-9.94h3.27v1.41a3.17 3.17 0 0 1 2.88-1.6c2.1 0 3.68 1.37 3.68 4.3v6.83zM7.07 8.94c-1.12 0-1.85-.75-1.85-1.74s.74-1.74 1.9-1.74c1.12 0 1.86.75 1.86 1.74s-.74 1.74-1.9 1.74zm-1.64 11.5h3.27V10.5H5.43v9.94zM21.99 3H2.01C1.45 3 1 3.45 1 4v16c0 .55.45 1 1 1h19.98c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"/>
          </svg>
        </a>

        {/* Instagram Icon */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.4-.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm-6.4 2.2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
          </svg>
        </a>
      </div>

    </footer>
  );
};

export default Footer;
