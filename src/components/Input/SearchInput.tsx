import { IconName } from "../../assets/icons/icons";


type Props = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
};

////////////////  for only  Search Input
export default function SearchInput({ placeholder, value, setValue }: Props) {
  return (
    <div className="">
       <label htmlFor="title" className="text-primary-blue flex items-center gap-1 mb-1"><IconName />Title</label>
      <input
        id="title"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`py-2 px-3 rounded-md  bg-[#1e2027] text-white  outline-none w-full pl-2`} // Added left padding for the icon
        placeholder={placeholder}
      />
    </div>
  );
}
