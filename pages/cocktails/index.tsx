import React from 'react';
import dynamic from 'next/dynamic';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import BookingModal from '../../components/booking-modal';

const SearchPage = dynamic(() => import('../../components/search-page'), {
  ssr: false,
});

export default function Page() {


  return (
    <div>
      <Nav />

      <SearchPage />

      <Footer />
      <BookingModal />
    </div>
  );
}
