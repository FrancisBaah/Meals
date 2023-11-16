import React, { useContext, useEffect } from 'react'
import Layout from './Layout'
import { MealContext} from '../context/MealContext';

const MyFavorites = () => {
  const { strCategory, favorites, getMenuList, myFavorite } = useContext(MealContext)
  useEffect(() => {
    const path = `/filter.php?c=${strCategory}`;
    getMenuList(path);
  }, [strCategory, favorites]);
  return (
    <Layout>
      <div className='category'>
       {myFavorite}</div>
    </Layout>
  )
}

export default MyFavorites