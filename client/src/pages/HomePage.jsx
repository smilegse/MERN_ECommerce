import React, { useEffect } from 'react';
import Layout from '../components/layout/layout';
import SliderSkeleton from '../skeleton/slider-skeleton';
import FeaturesSkeleton from '../skeleton/features-skeleton';
import CategoriesSkeleton from '../skeleton/categories-skeleton';
import ProductsSkeleton from '../skeleton/products-skeleton';
import BrandsSkeleton from '../skeleton/brands-skeleton';

import ProductStore from '../store/ProductStore';
import FeatureStore from '../store/FeatureStore';

import Brands from '../components/product/brands';
import Slider from '../components/product/slider';
import Categories from '../components/product/categories';
import Products from '../components/product/products';
import Features from '../components/features/features'

const HomePage = () => {

    const {BrandListRequest,CategoryListRequest,SliderListRequest,ProductListByRemarkRequest} = ProductStore();
    const {FeatureListRequest} = FeatureStore();

    useEffect(()=>{
        (async()=>{
            await SliderListRequest();
            await FeatureListRequest();
            await CategoryListRequest();
            await ProductListByRemarkRequest('new');
            await BrandListRequest();
        })()
    },[]);

    return (
        <Layout>
            <Slider/>
            <Features/>
            <Categories/>
            <Products/>
            <Brands/>
            <BrandsSkeleton/>
        </Layout>
    );
};

export default HomePage;