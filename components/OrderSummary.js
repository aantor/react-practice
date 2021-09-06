/* eslint-disable @next/next/no-img-element */
import tw from 'twin.macro';

export default function OrderSummary() {
  return (
    <section tw='max-w-sm rounded-3xl bg-white flex flex-wrap gap-8 z-20'>
      <div>
        <img
          src='/images/illustration-hero.svg'
          alt=''
          tw='rounded-t-3xl object-cover'
        />
      </div>

      <div tw='px-8 flex flex-col gap-8 mx-auto'>
        <div tw='px-6 space-y-5'>
          <h2 tw='text-center font-bold text-3xl'>Order Summary</h2>
          <p tw='text-gray-500 font-medium text-center'>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>

        <div tw='flex justify-between w-full items-center bg-gray-100 p-6 rounded-2xl'>
          <img src='/images/icon-music.svg' alt='' tw='cursor-pointer' />
          <div tw='flex flex-col text-center'>
            <span tw='block whitespace-nowrap font-bold text-base'>
              Annual Plan
            </span>
            <small tw='block whitespace-normal text-gray-400 text-base font-semibold'>
              $59.99/year
            </small>
          </div>
          <a href='#' tw='underline text-primary-lightBlue font-bold text-sm'>
            Change
          </a>
        </div>
        <div tw='flex flex-col w-full'>
          <button tw='bg-primary-lightBlue text-white py-3 px-6 rounded-xl boxShadow[0 10px 10px rgba(0,0,0,0.3)] hover:opacity-75 transition font-semibold ease-in'>
            Proceed to Payment
          </button>
          <a
            href='#'
            tw='self-center text-base text-gray-400 font-bold pt-4 pb-6 hover:text-gray-600 transition ease-in'
          >
            Cancel Order
          </a>
        </div>
      </div>
    </section>
  );
}
