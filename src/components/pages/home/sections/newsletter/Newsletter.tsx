import { useState } from 'react'
import './Newsletter.css'
import Counter from './Counter';

export default function Newsletter(){

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [error, setError] = useState<string | false>(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        if(emailRegex.test(e.currentTarget.value)) return void setError(false);
        setError("Whoops, make sure it's an email")
    }

    return (
        <section className="newsletter">
            <Counter />
            <h2>Stay up-to-date with what we're doing</h2>
            <form action="">
                <div className="input-container" data-error={error}>
                    <input type="email" placeholder='Enter your email address' onChange={handleChange}/>
                </div>
                <button className='primary'>Contact us</button>
            </form>
        </section>
    )
}