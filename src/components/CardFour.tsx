import { FaUserDoctor } from 'react-icons/fa6';
const CardFour = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <FaUserDoctor className="fill-primary h-8 w-8 dark:fill-white" />

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            620 doctors
          </h4>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-5">
          0.95%
          <svg
            className="fill-meta-5"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CardFour;
