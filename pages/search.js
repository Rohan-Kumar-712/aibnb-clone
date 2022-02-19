import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { format } from "date-fns";

function Search() {
  const router = useRouter();

  //ES-6 Destructuring
  const {location, startDate, endDate, noOfGuests} = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
        <Header />

        <main className='flex'>
            <section className='flex-grow pt-10 pl-8'>
                <p className='text-s'>300+ Stays - {range} - for {noOfGuests} Guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

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