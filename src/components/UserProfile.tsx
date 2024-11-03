
import { Header } from './Header';
import { Genres } from './Genres';
import { Books } from './Books';
import { Profile } from './Profile';
import Footer from './Footer';

export const UserProfile = () => {
  return (
    <div className='flex flex-col items-center p-4 relative'>
      <Header />
      <Profile />
      <Genres />
      <Books />
      <Footer />
    </div>

  )
};
