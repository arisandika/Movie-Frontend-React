import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api/auth';

const Navbar = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = async () => {
        await logout();
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <nav className="p-4 bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg">React Google Auth</h1>
                <div>
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 text-white rounded"
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate('/')}
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
