import ProductThree from '../images/product/product-03.png';
import { apiGetSuppliers } from '../services/TestService';
const ListTable = () => {
  try {
    const response = apiGetSuppliers();
    console.log("Get suppliers",response);
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Suppliers List
        </h4>
      </div>

      <div className="grid grid-cols-8 border-t border-stroke  px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Supplier</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Image</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Product</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Quantity</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Order</p>
        </div>
      </div>

      <div className="grid grid-cols-8 border-t border-stroke  px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            
            <p className="text-sm text-black dark:text-white">
              John Doe
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <img src={ProductThree}></img>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">Wheelbarrow</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">22</p>
        </div>
        <div className="col-span-2 flex items-center">
          <button className=" rounded-sm border-2 text-sm text-meta-3">View and place</button>
        </div>
      </div>
      <div className="grid grid-cols-8 border-t border-stroke  px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            
            
            
            <p className="text-sm text-black dark:text-white">Jane Doe</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
        <img src={ProductThree}></img>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">Fertilizers</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">34</p>
        </div>
        <div className="col-span-2 flex items-center">
        <button className=" rounded-sm border-2 text-sm text-meta-3">View and place</button>
        </div>
      </div>
      <div className="grid grid-cols-8 border-t border-stroke  px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        
            
            <p className="text-sm text-black dark:text-white">
              June Due
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
        <img src={ProductThree}></img>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">Wheelbarrow</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">64</p>
        </div>
        <div className="col-span-2 flex items-center">
        <button className=" rounded-sm border-2 text-sm text-meta-3">View and place</button>
        </div>
      </div>
      <div className="grid grid-cols-8 border-t border-stroke  px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            
            
            <p className="text-sm text-black dark:text-white">John Doh</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
        <img src={ProductThree}></img>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">Fertilizers</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">72</p>
        </div>
        <div className="col-span-2 flex items-center">
        <button className=" rounded-sm border-2 text-sm text-meta-3">View and place</button>
        </div>
      </div>
    </div>
  );
};

export default ListTable;
