import {useState, useEffect } from 'react';
import { validateEmail } from '../utils/validateEmail';

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
    
    const handleFormSubmit = (e) => {
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
            alert(`Thank you ${name} for reaching out!`)

            setName('');
            setEmail('');
            setMessage('')
    };

    return (
        <div>
            <div className='content'>
                        <div className="flex items-center justify-around">
                            
                            
                        </div>    
                        <div className='gird-cols-2 mr-10'>
                                <h2>Personal Info</h2>
                                <ul className=''>
                                    
                                    <li className="mt-5 mb-10 flex items-center"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                        Colorado Springs
                                        </li>
                                    <li className="mt-5 mb-10 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>
                                        BS Finacial Managment
                                        </li>
                                    <li className="mt-5 mb-10 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                        justinvittitoe7@gmail.com
                                    </li>
                                </ul>
                                
                            </div>
                            
                        </div>
            <br className=''></br>            
            <div className='content'>
                <h2 className='text-center'>Email me</h2>
                <form className='inline-grid justify-around' onSubmit={handleFormSubmit}>
                    <input
                    className='bg-white rounded-xl text-black w-100 h-10 m-5 p-3'
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder='Name'
                    type='text'
                    />
                    {errorMessage.name && <p className="error-text">{errorMessage.name}</p>}
                    <input
                    className='bg-white rounded-xl text-black h-10 m-5 p-3'
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder='Email'
                    type='email'
                    />
                    {errorMessage.email && <p className="error-text">{errorMessage.email}</p>}
                    <textarea
                    className='bg-white rounded-xl text-black h-30 m-5 p-3'
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder='Message'
                    type='message'
                    />
                    {errorMessage.message && <p className="error-text">{errorMessage.message}</p>}
                    <button className='submit'>Submit</button>
                </form>
                {/* {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
                )} */}
            </div>
            </div>        
    );
}


export default Contact;