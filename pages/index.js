import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RestaurantsList from '../components/RestaurantsList';

export default function Home({restaurants}) {
  return (
    <div className='container'>
      <div className='container'>
        <RestaurantsList restaurants={restaurants} />
      </div>
    </div>
  )
}
export async function getStaticProps() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();
  return {
    props: {
      restaurants,
    },
  }
}