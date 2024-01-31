import { IconAttemps, IconDislike, IconDoubleArrowDown, IconDoubleArrowUp, IconHard, IconLike, IconName, IconRate, IconTeg, } from "../../../assets/icons/icons";
import { isOrderingFunction, orderingFunction, } from "../../../store/features/contestSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { TContest } from "../../../types/Contest/types";
import BadgeLevel from "../../Badge/BadgeLevel";
type Props = {
  data: TContest[];
};

export default function TableContest({ data }: Props) {
  const { ordering, isOrder } = useAppSelector((state) => state.contestSlice);
  const dispatch = useAppDispatch();

  const Header = [
    { id: 1, title: "ID", ordering: "id", style: "w-[50px]", icon: "" },
    { id: 2, title: "Title", ordering: "title", icon: <IconName /> },
    { id: 3, title: "Tags", ordering: "", icon: <IconTeg /> },
    { id: 4, title: "Difficulty", ordering: "difficulty", icon: <IconHard /> },
    { id: 5, title: "Rating", ordering: "rating", icon: <IconRate /> },
    { id: 6, title: "Attempts", ordering: "solved", icon: <IconAttemps /> },
  ];

  const handleSort = (ordering: string) => {
    dispatch(orderingFunction(ordering));
    dispatch(isOrderingFunction(isOrder));
  };

  return (
    <table className="w-full text-sm text-left rtl:text-right ">
      <thead className="text-sm text-[#d0d2d6]  bg-primary-light-gray font-sans ">
        <tr>
          {Header.map((item) => (
            <th className={`${item.style} px-6 py-3`} key={item.id}>
              <button
                className="flex items-center gap-1"
                onClick={() =>
                  item.ordering !== "" && handleSort(item.ordering)
                }
              >
                {item.icon} {item.title}
                {ordering == "" ? (
                  ""
                ) : item.ordering == ordering && isOrder ? (
                  <IconDoubleArrowDown />
                ) : item.ordering == ordering ? (
                  <IconDoubleArrowUp />
                ) : (
                  ""
                )}
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-primary-gray text-white">
        {data &&
          data.map((item) => (
            <tr className="  " key={item.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <td className="px-6 py-4"><span >
              {item.title}
               {item.hasSolution && <span className="bg-[#182a25] text-[#239557] py-1 px-3 rounded-2xl mt-1 flex items-center gap-1 w-fit" ><IconLike/> Solution</span>}
                </span></td>
              <td className="px-6 py-4 ">
                {item.tags?.map((item) => (
                  <button
                    className="bg-primary-blue text-white rounded-2xl py-1 px-2 text-[12px] mx-0.5"
                    key={item.id}
                  >
                    {item.name}
                  </button>
                ))}
              </td>
              <td className="px-6 py-4">
                <BadgeLevel level={item.difficultyTitle}>
                  {item.difficultyTitle}
                </BadgeLevel>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="flex flex-col text-[14px]">
                  <span className="flex items-center gap-1">
                    <IconLike /> {item.likesCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconDislike /> {item.dislikesCount}
                  </span>
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="bg-[#132b32] text-white py-1 px-2 text-[12px] mx-0.5">
                  <span className="text-[#21955a]">{item.solved}</span>/
                  <span className="text-[#088b9c]">{item.attemptsCount}</span>
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
