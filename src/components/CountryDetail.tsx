import { useQuery } from '@apollo/client';
import client from '../apollo-client';
import { GET_COUNTRY } from '../lib/query';

export default function CountryDetail({
  countryName
}: {
  countryName: string;
}) {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: {
      name: countryName.charAt(0).toUpperCase() + countryName.slice(1)
    },
    client: client
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='container mx-auto py-20'>
      <div className='flex md:flex-row md:gap-36'>
        <img
          src={data.countries.edges[0].node.flag}
          alt={data.countries.edges[0].node.name}
          className='rounded-md object-cover md:w-1/2'
        />
        <div>
          <h2>{data.countries.edges[0].node.name}</h2>
        </div>
      </div>
    </div>
  );
}
