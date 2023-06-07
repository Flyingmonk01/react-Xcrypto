import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <div>
                <h1>Contact Us</h1>
            </div>

            <form >
                <div>
                    <label>Name</label>
                    <input type="text" placeholder='Abc' required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder='Abc@xyz.com' required />
                </div>
                <div>
                    <label>Meassage</label>
                    <input type="text" placeholder='Your query please...' required />
                </div>

                <button type='submit'>Send</button>

            </form>
        </main>
    </div>
  )
}

export default Contact