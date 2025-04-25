import { JSX, lazy, Suspense } from 'react';
import Footer from '@/static/footer/Footer';
import Header from '@/static/header/Header';
import { CircularProgress } from '@heathmont/moon-core-tw';

const TableCountries = lazy(() => import('@components/TableCountries/TableCountries'));

export default function App(): JSX.Element {
  return (
    <>
      <Header/>

      <main className="container mx-auto flex flex-col items-center pb-5 pt-10 py-10 gap-2">
        <Suspense fallback={<CircularProgress className={'animate-spin'} size="lg" value={75} />}>
          <TableCountries/>
        </Suspense>
      </main>

      <Footer/>
    </>
  );
}