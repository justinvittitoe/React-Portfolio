import {useState, useEffect } from 'react';
import { validateEmail } from '../utils/validateEmail';
import Swal from 'sweetalert2';

function Contact() {
   const [name, setName] = useState('');
   const [email,setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    message: ''
   });
   const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
   })
   const [result, setResult] = useState("");

    useEffect(()=> {
        const newErrors = {
            name: touched.name && name.trim() === '' ? 'Name is required' : '',
            email: touched.email && email.trim() === ''? 'Email is required' : '',
            message: touched.message && message.trim() === '' ? 'Message is required' : ''
        }
        setErrorMessage(newErrors)
        // set a timer to clear the error messages after 3 seconds
        const timer = setTimeout(()=> {
            setErrorMessage({
                name: '',
                email: '',
                message: ''
            });
        }, 3000)
        // Cleanup the timer when the component unmounts or dependencies change
        return () => clearTimeout(timer);
    }, [name,email,message, touched]);

    

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    const handleFocus = (e) => {
        const { name } = e.target;
        setErrorMessage((prevTouched) => ({
            ...prevTouched, [name]: true,
        }))
    }

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }
    };
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
   
        //check if email is valid and their is a name in the name feild
        if(!validateEmail(email) || !name) {
            alert('Error missing a valid email address or name');
            return;
        }
        if (!message) {
            alert('Error missing a message');
            return;
        }
        const formData = new FormData(e.target);
        formData.append("access_key", "07b08d43-2862-4e7a-b3ed-b03dd107a9f8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }).then((res) => res.json);

        const data = await response.json()
        if(res.success) {
            Swal.fire({
                title: "Good job!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }

        setResult(data.success ? "Success!" : "Error")
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <div className='content'>
                <h2 className='text-center mb-6'>Contact Information</h2>
                <div className='max-w-md mx-auto'>
                    <ul className='space-y-4'>
                        <li className="flex items-center"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            Colorado Springs
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                            BS Financial Management
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <a href="mailto:justinvittitoe7@gmail.com">justinvittitoe7@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
                        
            <div className='content'>
                <form className='max-w-lg mx-auto space-y-4' onSubmit={handleFormSubmit}>
                    <h2 className='text-center'>Contact Form</h2>
                    <div className="input-box">
                        <label>Full Name</label>
                        <input
                            className='bg-white rounded-lg text-black w-full h-12 px-4 py-2'
                            value={name}
                            name='name'
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder='Name'
                            type='text'
                        />
                        {errorMessage.name && <p className="text-red-400 text-sm mt-1">{errorMessage.name}</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            className='bg-white rounded-lg text-black w-full h-12 px-4 py-2'
                            value={email}
                            name='email'
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder='Email'
                            type='email'
                        />
                        {errorMessage.email && <p className="text-red-400 text-sm mt-1">{errorMessage.email}</p>}
                    </div>
                    <div>
                        <label className='pb2'>Message</label>
                        <textarea
                            className='bg-white rounded-lg text-black w-full h-32 px-4 py-2 resize-none'
                            value={message}
                            name='message'
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder='Message'
                        />
                        {errorMessage.message && <p className="text-red-400 text-sm mt-1">{errorMessage.message}</p>}
                    </div>
                    <button type="submit" className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors'>
                        Submit
                    </button>
                </form>
            </div>
        </div>        
    );
}


export default Contact;