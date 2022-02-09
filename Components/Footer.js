import React from 'react';

function Footer() {
  return (
  <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200 text-gray-600'>
    <div className='space-y-4 text-xs text-gray-900 '>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
    </div>

    <div className='space-y-4 text-xs text-gray-900'>
        <h5 className='font-bold'>Community</h5>
        <p>Founders</p>
        <p>Support Afghan Refugees</p>
        <p>Support International Brotherhood</p>
        <p>Cultural Diversity</p>
        <p>Donate to Cancer Victims</p>
    </div>

    <div className='space-y-4 text-xs text-gray-900'>
        <h5 className='font-bold'>HOST</h5>
        <p>Try hosting</p>
        <p>AirCover: protection for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
    </div>

    <div className='space-y-4 text-xs text-gray-900'>
        <h5 className='font-bold'>JOIN US</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
    </div>

  </div>
  );
}

export default Footer;
