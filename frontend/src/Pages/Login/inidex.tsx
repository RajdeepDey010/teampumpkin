import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import pathLogo from '../../../public/assets/speedoLogo.svg'

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-green-200 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <div className="flex justify-center mb-6">
          <img src={pathLogo} alt="Logo"/>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="Example@email.com" className="w-full" />
          </div>
          <div className="mb-6">
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" placeholder="At least 8 characters" className="w-full" />
          </div>
          <Link to='/'>
            <Button type="submit" className="w-full bg-black text-white">
              Sign in
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;