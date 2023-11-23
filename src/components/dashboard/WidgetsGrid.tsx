import { IoCarOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
export const WidgetsGrid = () => {
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title="Contador"
        subtitle="Productos agragados"
        label="Contador"
        icon={<IoCarOutline size={70} className="text-blue-600" />}
      />
    </div>
  );
};
