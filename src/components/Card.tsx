import { Link } from '@tanstack/react-router';
import { Country } from '../lib/types';

export default function Card({ country }: { country: Country }) {
  return (
    <Link
      to='/country/$countryName'
      params={{
        countryName: country.node.name.toLowerCase()
      }}
      className='rounded-md shadow-lg md:col-span-4 lg:col-span-3'
    >
      <img
        src={country.node.flag}
        alt={country.node.name}
        className='h-40 w-full rounded-t-md object-cover'
      />
      <div className='p-6'>
        <h2 className='mb-4 text-lg font-bold'>{country.node.name}</h2>
        <p className='font-medium'>
          Population:{' '}
          <span className='font-light'>
            {country.node.population.toLocaleString()}
          </span>
        </p>
        <p className='font-medium'>
          Capital: <span className='font-light'>{country.node.capital}</span>
        </p>
        <p className='font-medium'>
          Region: <span className='font-light'>{country.node.region}</span>
        </p>
      </div>
    </Link>
  );
}
