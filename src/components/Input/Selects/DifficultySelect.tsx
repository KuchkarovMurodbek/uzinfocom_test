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

export default function DifficultySelect({ setValue, value }: Props) {
  const handleSelectFunction = (selectedOption: any) => {
    setValue(selectedOption);
  };

  const options: readonly ColourOption[] = [
    { value: "1", label: "Beginner", color: "#028595" },
    { value: "2", label: "Basic", color: "#1b7f49" },
    { value: "3", label: "Normal", color: "#2c3e98" },
    { value: "4", label: "Medium", color: "#2c3e98" },
    { value: "5", label: "Advanced", color: "#a3662d" },
    { value: "6", label: "Hard", color: "#963739" },
    { value: "7", label: "Extremal", color: "#fff" },
  ];
  return (
    <div className="">
      <label
        htmlFor="title"
        className="text-primary-blue flex items-center gap-1 mb-1"
      >
        {" "}
        <IconName /> Difficulty:{" "}
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
