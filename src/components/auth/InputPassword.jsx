import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed } from "lucide-react";

const PasswordInput = ({ label, id, register, rules, errors, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          {...register(id, rules)}
          {...props}
          id={id}
          type={showPassword ? "text" : "password"}
          className="h-12 px-4 text-white rounded-full bg-primary border-primary placeholder:text-secondary"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute text-white transform -translate-y-1/2 top-1/2 right-4"
        >
          {showPassword ? (
            <EyeClosed className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>
      {errors[id] && <p className="text-sm text-red-500">{errors[id]?.message}</p>}
    </div>
  );
};

export default PasswordInput;
