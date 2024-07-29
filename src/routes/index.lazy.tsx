import { createLazyFileRoute } from '@tanstack/react-router';
import CountriesList from '../components/CountriesList';

export const Route = createLazyFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <main className='container mx-auto my-12'>
      <CountriesList />
    </main>
  );
}
