const Footer = () => {
    return (
        <footer className="py-6 border-t-1">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-lg">&copy; {new Date().getFullYear()} accredian. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
