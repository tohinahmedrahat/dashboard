import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mt-10 flex justify-around  items-center text-center'>
            <Link className="focus:bg-[#00635B] focus:text-white py-10 shadow-md shadow-slate-700 w-full" to="/">Program Details</Link>
            <Link className="focus:bg-[#00635B] focus:text-white py-10 shadow-md shadow-slate-700 w-full" to="/application">Application Form</Link>
            <Link className="focus:bg-[#00635B] focus:text-white py-10 shadow-md shadow-slate-700 w-full" to="/workflow">Workflow</Link>
            <Link className="focus:bg-[#00635B] focus:text-white py-10 shadow-md shadow-slate-700 w-full" to="/preview">Preview</Link>
        </div>
    );
};

export default Navbar;