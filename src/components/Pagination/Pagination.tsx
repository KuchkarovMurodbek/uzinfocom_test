import ReactPaginate from "react-paginate";
import { IconArrowLeft, IconArrowRight } from "../../assets/icons/icons";
type Props = {
  pageSize?: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

const Pagination = ({
  pageSize = 10,
  setCurrentPage,
  currentPage
}: Props) => {
  return (
    <>
      <ReactPaginate
        className="flex flex-row justify-start items-center gap-2 bg-primary-light-gray rounded-xl"
        pageClassName="text-center  w-9 h-9  rounded-md"
        pageLinkClassName="w-full h-full rounded-md flex justify-center items-center"
        activeLinkClassName="bg-primary-blue text-white rounded-full"
        nextLabel={<IconArrowRight />}
        previousLabel={<IconArrowLeft />}
        disabledClassName="pointer-events-none cursor-not-allowed"
        previousLinkClassName="w-full h-full flex justify-center items-center"
        nextLinkClassName="w-full h-full flex justify-center items-center"
        previousClassName="  w-10 h-9 rounded-md"
        nextClassName="  w-10 h-9 rounded-md"
        pageCount={pageSize}
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
        initialPage={currentPage-1}
      />
    </>
  );
};

export default Pagination;