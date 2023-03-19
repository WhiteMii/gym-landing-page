import { IClass, SelectedPage } from "@/types/types";

type Props = {
  classEl: IClass;
  setSelectedPage: (value: SelectedPage) => void;
};

const Class = ({ classEl, setSelectedPage }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{classEl.name}</p>
        <p className="mt-5">{classEl.description}</p>
      </div>
      <img alt={`${classEl.image}`} src={classEl.image} />
    </li>
  );
};

export default Class;
