import {create} from 'zustand';
import axios from 'axios';

const ProductStore = create((set) =>({
    BrandList : null,
    BrandListRequest : async()=>{
        let res = await axios.get(`/api/v1/ProductBrandList`);
        if(res.data['status'] === 'success'){
            set({BrandList : res.data['data']});
        }
    },

    CategoryList : null,
    CategoryListRequest : async()=>{
        let res = await axios.get(`/api/v1/ProductCategoryList`);
        if(res.data['status'] === 'success'){
            set({CategoryList : res.data['data']});
        }
    },

    SliderList : null,
    SliderListRequest : async()=>{
        let res = await axios.get(`/api/v1/ProductSliderList`);
        if(res.data['status'] === 'success'){
            set({SliderList : res.data['data']});
        }
    },

    
    ProductListByRemark : null,
    ProductListByRemarkRequest : async(remark)=>{
        let res = await axios.get(`/api/v1/ProductListByRemark/${remark}`);
        // debugger;
        if(res.data['status'] === 'success'){
            
            set({ProductListByRemark : res.data['data']});
        }
    },


}))

export default ProductStore;