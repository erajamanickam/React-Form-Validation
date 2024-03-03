import React, { useState } from 'react';
import { FaRegUser, FaEnvelope, FaMobileAlt, FaThumbsUp } from "react-icons/fa";


const Login = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
    });
    const [error, setError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        // console.log('formData', formData)
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const error = {};
        const regex = /^[^@$]+@[^@$]+\.[^@$]{2,}$/i;

        if (!formData.name.trim()) {
            error.name = "Name is required";
        }

        if (!formData.email.trim()) {
            error.email = "Email is required";
        } else if (!regex.test(formData.email)) {
            error.email = "Invalid Email address";
        }

        if (!formData.mobile.trim()) {
            error.mobile = "Mobile is required";
        } else if (formData.mobile.length < 4) {
            error.mobile = "Mobile must be more than 4 characters";
        } else if (formData.mobile.length > 16) {
            error.mobile = "Mobile cannot be more than 16 characters";
        }

        setError(error);

        if (Object.keys(error).length === 0) {
            setIsSubmit(true);
            // console.log('Form submitted:', formData);
            setResult('Form Submitted');
            setFormData('')
        } else {
            setError(error);
        }

    }


    return (
        <main>
            <section className="flex flex-col items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                <div>
                <div className="flex justify-center">
                    <div className="border border-white rounded-3xl py-2 mb-3 px-3 relative bg-[linear-gradient(264.28deg,_#e1e1e133_0%,_#dd413c_103%)]">
                    <p class="text-white">UI Element</p>
                    </div>
                </div>
                    <h1 className="text-5xl text-center font-bold bg-gradient-to-l from-[#aaa] to-[#fff] bg-clip-text text-transparent mb-7">React From Validation</h1>
                </div>
                <div className="form-container bg-opacity-50 backdrop-blur-lg p-6 rounded-lg border border-white">
                    <h2 className="text-white text-center font-bold">Register</h2>
                    <form className="w-72" onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label htmlFor="name" className="text-white">Name</label>
                            <div className="input-with-icon relative">
                                <span className="icon absolute top-1/4 right-0 transform -translate-y-1/2 text-white"><FaRegUser className='text-white' /></span>
                                <input type="text" onChange={handleChange} name="name" className="block w-full bg-transparent border-b border-white text-white focus:outline-none" />
                                {error.name && <span style={{ color: 'red' }}>{error.name}</span>}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="text-white">Email</label>
                            <div className="input-with-icon relative">
                                <span className="icon absolute top-1/4 right-0 transform -translate-y-1/2 text-white"><FaEnvelope className='text-white' /></span>
                                <input type="text" onChange={handleChange} name="email" className="block w-full bg-transparent border-b border-white text-white focus:outline-none" />
                                {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="mobile" className="text-white">Mobile</label>
                            <div className="input-with-icon relative">
                                <span className="icon absolute top-1/4 right-0 transform -translate-y-1/2 text-white"><FaMobileAlt className='text-white' /></span>
                                <input type="text" onChange={handleChange} name="mobile" className="block w-full bg-transparent border-b border-white text-white focus:outline-none" />
                                {error.mobile && <span style={{ color: 'red' }}>{error.mobile}</span>}
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <button type="reset" onClick={() => setResult('')} className="block mr-4 w-full py-2 px-4 bg-transparent text-white rounded-lg font-bold transition duration-300 border border-white hover:bg-opacity-50 focus:outline-none">Reset</button>
                            <button type="submit" className="block w-full py-2 px-4 bg-white text-black rounded-lg font-bold transition duration-300 border border-white hover:bg-opacity-50 focus:outline-none">Submit</button>
                        </div>

                        <p className='text-center text-green flex justify-center text-green-400 font-bold mt-2'>{result}</p>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;
