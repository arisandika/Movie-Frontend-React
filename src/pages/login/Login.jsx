import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { login, loginWithGoogle } from "@/api/auth";
import AuthLayout from "@/components/layouts/AuthLayout";
import InputField from "@/components/auth/InputField";
import PasswordInput from "@/components/auth/InputPassword";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { token } = await login(data);
      localStorage.setItem("authToken", token);
      navigate("/");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      setError("password", { type: "manual", message: errorMessage });
    }
  };

  return (
    <AuthLayout title="Sign In">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4">
          <InputField
            id="email"
            label="Email Address"
            register={register}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            errors={errors}
            placeholder="What's your email"
          />
          <PasswordInput
            id="password"
            label="Password"
            register={register}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
            errors={errors}
            placeholder="Type your password"
          />
          <div className="text-end">
            <Link
              to="/forgot-password"
              className="text-sm text-secondary hover:text-secondary/80"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <Button
            type="submit"
            className="w-full h-12 font-bold text-black rounded-full bg-secondary hover:bg-secondary/80"
          >
            Sign In
          </Button>
          <Link to="/sign-up" className="block">
            <Button
              type="button"
              className="w-full h-12 font-bold rounded-full bg-tertiary text-secondary hover:bg-tertiary/80"
            >
              Create new Account
            </Button>
          </Link>
          <div className="px-4">
            <Separator className="bg-secondary/20" />
          </div>
          <Button
            type="button"
            onClick={loginWithGoogle}
            className="w-full h-12 font-bold rounded-full bg-theme text-secondary hover:bg-theme/80"
          >
            <img
              src="/assets/svg/icons/google.svg"
              alt="Google"
              className="w-4 h-4 mr-2"
            />
            Sign In with Google
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
