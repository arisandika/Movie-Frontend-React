import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputField = ({ label, id, register, rules, errors, ...props }) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      {...register(id, rules)}
      {...props}
      className="h-12 px-4 text-white rounded-full bg-primary border-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-theme"
    />
    {errors[id] && (
      <p className="text-[12px] text-red-500">{errors[id]?.message}</p>
    )}
  </div>
);

export default InputField;
