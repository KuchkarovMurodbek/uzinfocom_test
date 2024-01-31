import { useState } from "react";
import {
  IconDoubleArrowDown,
  IconDoubleArrowUp,
  IconRate,
} from "../../assets/icons/icons";
import SearchInput from "../../components/Input/SearchInput";
import PageSize from "../../components/Pagination/PageSize";
import Pagination from "../../components/Pagination/Pagination";
import TableContest from "../../components/Table/Contest/TableContest";
import Button from "../../components/Button/Button";
import StatusSelect from "../../components/Input/Selects/StatusSelect";
import DifficultySelect from "../../components/Input/Selects/DifficultySelect";
import BooleanSelect from "../../components/Input/Selects/BooleanSelect";
import useFetch from "../../hooks/useFetch";
import { SelectProps } from "../../types/Common/types";
import { TContest } from "../../types/Contest/types";
import { useAppSelector } from "../../store/hook";
import { sortFunction } from "../../service/sortService";

type Props = {};

export default function Contest({}: Props) {
  /// for sorting
  const { ordering, isOrder } = useAppSelector((state) => state.contestSlice);
  ////for filter
  const [search, setSearch] = useState<string>("");
  const [difficulty, setDifficulty] = useState<SelectProps | null>(null);
  const [status, setStatus] = useState<SelectProps | null>(null);
  const [checker, setSetChecker] = useState<SelectProps | null>(null);
  const [checkInput, setSetCheckInput] = useState<SelectProps | null>(null);
  const [solution, setSetSolution] = useState<SelectProps | null>(null);
  const [partialSolution, setSetPartialSolution] = useState<SelectProps | null>( null );

  /// for pagination
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  /// for button to open additional filters
  const [show, setShow] = useState<boolean>(false);

  //// fetch data using custom hook
  const { data, pagesCount } = useFetch<TContest>( "problems",
    {
      title: search,
      page: String(page),
      page_size: String(pageSize),
      difficulty: difficulty?.value ? difficulty.value : "",
      status: status?.value ? status.value : "",
      has_checker: checker?.value ? checker.value : "",
      has_check_input: checkInput?.value ? checkInput.value : "",
      has_solution: solution?.value ? solution.value : "",
      partial_solvable: partialSolution?.value ? partialSolution.value : "",
      ordering: sortFunction(isOrder, ordering),
    }
  );
  return (
    <>
      <div className="w-full h-fit py-2 sm:py-10 bg-primary-gray my-5 rounded-lg flex flex-col gap-5 justify-center px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-[#9c9fa5] flex gap-2 items-center">
            <IconRate />
            Filter
          </h1>
          <Button
            bgColor="bg-primary-blue"
            onClick={() => setShow((prev) => !prev)}
          >
            {" "}
            {show ? <IconDoubleArrowUp /> : <IconDoubleArrowDown />}{" "}
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <SearchInput
            value={search}
            setValue={setSearch}
            placeholder="Search"
          />
          <p className="text-white">
            {" "}
            Title: <br />
            Tags:
          </p>
          <DifficultySelect value={difficulty} setValue={setDifficulty} />
          <StatusSelect value={status} setValue={setStatus} />
        </div>
        {show && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <BooleanSelect
              value={checker}
              setValue={setSetChecker}
              title="Checker"
            />
            <BooleanSelect
              value={checkInput}
              setValue={setSetCheckInput}
              title="Check Inputs"
            />
            <BooleanSelect
              value={solution}
              setValue={setSetSolution}
              title="Solution"
            />
            <BooleanSelect
              value={partialSolution}
              setValue={setSetPartialSolution}
              title="Partial Solvable:"
            />
          </div>
        )}
      </div>
      {data.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <TableContest data={data} />
        </div>
      ) : (
        <div className="bg-primary-light-gray text-white flex justify-center items-center h-[300px] w-full">Data Not Found</div>
      )}

      <div className=" flex flex-col-reverse gap-2 sm:flex-row  justify-between text-white my-10">
        <div className="hidden sm:block"></div>
        <div>
          <Pagination
            currentPage={page}
            setCurrentPage={setPage}
            pageSize={pagesCount ? pagesCount : 0}
          />
        </div>
        <div>
          <PageSize pageSize={pageSize} setPageSize={setPageSize} />
        </div>
      </div>
    </>
  );
}
