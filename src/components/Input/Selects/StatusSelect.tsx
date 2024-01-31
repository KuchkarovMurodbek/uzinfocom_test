import Select from "react-select";
import { SelectProps } from "../../../types/Common/types";
import { IconName } from "../../../assets/icons/icons";

type Props = {
  setValue: ({ value, label }: SelectProps) => void;
  value: SelectProps | null;
};
interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export default function StatusSelect({ setValue, value }: Props) {
  const handleSelectFunction = (selectedOption: any) => {
    setValue(selectedOption);
  };

  const options: readonly ColourOption[] = [
    { value: "3", label: "Unknown", color: "#028595" },
    { value: "1", label: "Solved", color: "#1b7f49" },
    { value: "2", label: "Unsolved", color: "#963739" },
  
  ];
  return (
    <div className="">
      <label
        htmlFor="title"
        className="text-primary-blue flex items-center gap-1 mb-1"
      >
        {" "}
        <IconName /> Status:{" "}
      </label>
      <Select
        options={options}
        placeholder=""
        required
        value={value}
        isClearable
        onChange={handleSelectFunction}
        styles={{
          control: (baseStyles: any) => ({
            ...baseStyles,
            background: "#1e2027",
            borderRadius: "6px",
            border: "none",
            ":hover": {
              border: "none",
            },
            boxShadow: "none",
          }),
          menuList: (baseStyles: any) => ({
            ...baseStyles,
            fontSize: "13px",
            background: "#1e2027",
            color: "#fff",
          }),
       
          option: (provided: any, { data }: any) => {
            const textColor = data.color ? data.color : "black";
            return {
              ...provided,
              fontSize: "14px",
              background: "#1e2027",
              ":hover": {
                background: "#16172e",
              },
              color: textColor,
              cursor: "pointer",
            };
          },
          singleValue: (provided: any, { data }: any) => {
            const textColor = data.color ? data.color : 'black';
            return {
              ...provided,
              color: textColor,
            };
          },
        }}
      />
    </div>
  );
}
