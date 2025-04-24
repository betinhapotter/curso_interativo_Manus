import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useCourse } from '../contexts/CourseContext';

const Sidebar: React.FC = () => {
  const { user, isAuthenticated, logout, getOverallProgress } = useUser();
  const { modules, isModuleAccessible } = useCourse();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-2xl font-sf-display font-bold text-manus-blue">Curso Manus</h1>
      </div>
      
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-lg">{user?.name.charAt(0) || 'U'}</span>
          </div>
          <div>
            <p className="font-medium">{user?.name || 'Usuário'}</p>
            <p className="text-sm text-gray-400">{user?.email || 'usuario@exemplo.com'}</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          <Link to="/" className="sidebar-link">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </Link>
          
          <div className="pt-4 pb-2">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Módulos
            </p>
          </div>
          
          {modules.map((module) => {
            const isAccessible = isModuleAccessible(module.id);
            
            return (
              <Link
                key={module.id}
                to={isAccessible ? `/modulo/${module.id}` : '#'}
                className={`sidebar-link ${!isAccessible ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={(e) => !isAccessible && e.preventDefault()}
              >
                {!isAccessible && (
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
                {isAccessible && (
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {module.title}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-800">
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-1">Progresso Geral</p>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-manus-blue h-2.5 rounded-full" 
              style={{ width: `${getOverallProgress()}%` }}
            ></div>
          </div>
          <p className="text-right text-xs text-gray-400 mt-1">{getOverallProgress()}%</p>
        </div>
        
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sair
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
