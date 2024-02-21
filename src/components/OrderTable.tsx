import ProductOne from '../images/product/product-01.png';
import ProductTwo from '../images/product/product-02.png';

const OrderTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Orders
        </h4>
      </div>
      <input
        type="text"
        placeholder="Type to search the product..."
        className=" mx-5 w-3/4 mb-10 border  ml-10 rounded-md  bg-transparent p-2 pl-3 focus:outline-none"
      />
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Supplier Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Product image</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Product</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Quantity</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-black dark:text-white">Jack Dorsey</p>
            <p className="text-sm text-meta-3">+254700000000</p>

          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <img src={ProductOne}></img>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">Wheelbarrow</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">3</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">Ordered</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-black dark:text-white">Jack Dorsey</p>
            <p className="text-sm text-meta-3">+254700000000</p>

          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <img src={ProductTwo}></img>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">Fertiliser</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">3</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm  text-meta-1">Pending</p>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
