import { useState } from "react";
import { IconArrowDown } from "../../assets/icons/icons";

type Props = {
  pageSize: number;
  setPageSize: (value: number) => void;
};
interface MenuItem {
  id: number;
  size: number;
}
export default function PageSize({ pageSize, setPageSize }: Props) {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const menuItems: MenuItem[] = [
    { id: 0, size: 10 },
    { id: 1, size: 20 },
    { id: 2, size: 30 },
  ];

  return (
    <div className="relative inline-block text-left">
      {isDropdownOpen && (
        <div className="absolute -top-32  right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-primary-light-gray shadow-lg ">
          <div className="" role="none">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPageSize(item.size)}
                className={`text-white block px-6 py-2 text-sm ${ item.size == pageSize ? "bg-primary-blue" : "" }`}
              >
                {item.size}/Page
              </button>
            ))}
          </div>
        </div>
      )}
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary-light-gray px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          {pageSize}/Page
          <IconArrowDown />
        </button>
      </div>
    </div>
  );
}
