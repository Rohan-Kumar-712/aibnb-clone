import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Search() {
  return (
    <div>
        <Header />

        <main className='flex'>
            <section className='flex-grow pt-10 pl-8'>
                <p className='text-s'>300+ Stays for 5 Number of Guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in London</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-900 whitespace-nowrap'>
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Type of Place</p>
                    <p className="button">Price</p>
                    <p className="button">Room Services</p>
                    <p className="button">More Facilities</p>
                </div>
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default Search;