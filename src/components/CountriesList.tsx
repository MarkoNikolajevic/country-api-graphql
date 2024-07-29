import { useQuery } from '@apollo/client';
import client from '../apollo-client';
import { Country } from '../lib/types';
import { GET_COUNTRIES } from '../lib/query';
import Card from './Card';

export default function CountriesList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES, { client: client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='grid gap-8 md:grid-cols-12'>
      {data.countries.edges.map((country: Country) => (
        <Card key={country.node.id} country={country} />
      ))}
    </div>
  );
}
