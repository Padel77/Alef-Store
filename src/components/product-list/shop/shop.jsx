import React from 'react'
import Filter from '../filter-side/sidebar'
import Product from '../product/product'
import {  useSelector } from 'react-redux';
import { NavLink ,useParams} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Shop = () => {

  const { id } = useParams();
  const category = useSelector((state) => state.categories.find((cat)=>cat._id === id));

  const { t } = useTranslation();
  return (
    <>
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/home" className="nav-link">{t('product-list.shop.home')}</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/category" className="nav-link">{t('product-list.shop.store')}</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <NavLink to="#" className="nav-link">{category.name}</NavLink>
            {/* {category.name} */}
          </li>
        </ol>
      </nav>

      <div className="heading d-flex flex-column align-items-center mb-5">
        <div>
          <h1>{category.name}</h1>
        </div>
        <div className="small"></div>
      </div>
      
      <div className="container" >
        <div className="row gx-lg-4" >
          <Filter />
          <div className="row row-cols-md-2 row-cols-lg-3  row-cols-1 col-9 px-5" style={{ alignContent: 'flex-start' }}>
          <Product />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop ;
