import Breadcrumb from '../components/Breadcrumb';
import ListTable from '../components/ListTable';
import TableOne from '../components/TableOne';
import TableThree from '../components/TableThree';
import TableTwo from '../components/TableTwo';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
        <ListTable />
      </div>
    </>
  );
};

export default Tables;
