const Footer = () => {
    return (
    <footer className='bg-gradient-to-t justify-items-end to-[#AA0A0A] to-[#4D0202]  flex flex-col text-white items-center justify-center border-t-1 border-slate-300 border-opacity-50 w-screen py-2'>
        Copyright &copy; 2024
        <ul className='flex text-center gap-5 py-4 text-sm'>
        <li >
            <a href='#home'>Home</a>
        </li>
        <li>
            <a href='#about'>About Me</a>
        </li>
        <li>
            <a href='#projects'>Projects</a>
        </li>
        <li>
            <a href='#contact'>Contact Me</a>
        </li>
        </ul>
        <h1 className="flex gap-1">Made with<svg className="h-6 w-6 text-slate-100 animate-pulse "  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>        by Julian</h1>
        

    </footer>
    );
};

export default Footer;