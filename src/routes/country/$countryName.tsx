import { createFileRoute } from '@tanstack/react-router';
import CountryDetail from '../../components/CountryDetail';

export const Route = createFileRoute('/country/$countryName')({
  component: CountryDetailPage
});

function CountryDetailPage() {
  const { countryName } = Route.useParams();
  return <CountryDetail countryName={countryName} />;
}
