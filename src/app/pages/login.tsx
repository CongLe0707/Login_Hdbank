import { FaUser, FaLock } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { TbLogin } from "react-icons/tb";
import '../login/login.css';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#DCDCDC] relative px-4">

      {/* Logo HDBank */}
      <img
        src="/images/logo-hdbank.png"
        alt="HDBank Logo"
        style={{ width: "300px", height: "auto" }}
        className="fixed top-2 left-0 w-24 sm:w-32 lg:w-48 z-50 -mt-12 -ml-8 logo-custom"
      />

      {/* Căn giữa toàn bộ */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4">

          {/* Ảnh minh họa */}
          <div className="hidden md:flex w-[60%] justify-end pr-10 -ml-8">
            <img
              src="/images/login-bg2.png"
              alt="Illustration"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>

          {/* Form đăng nhập */}
          <div className="w-50 max-w-sm py-7 px-6 rounded-xl shadow-md relative z-10 text-white bg-[#DD0000] login-form">

            {/* Tiêu đề */}
            <div className="mb- text-white">
              <div className="text-sm font-semibold text-center ">
                Chào mừng bạn đến với
              </div>
              <div className="flex items-center justify-center">
                <hr style={{ borderTopWidth: '2px' }} className="flex-grow border-t border-white mx-2 -mt-[9px]" />
                <span className="text-lg font-bold whitespace-nowrap">Tài khoản sinh lời</span>
                <hr style={{ borderTopWidth: '2px' }} className="flex-grow border-t border-white mx-2 -mt-[9px]" />
              </div>
            </div>

            {/* Form */}
            <form className="space-y-3">
              {/* Form tài khoản */}
              <div>
                <label htmlFor="username" className="block text-sm mb-1">
                  Tên đăng nhập
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FaUser />
                  </span>
                  <input
                    autoComplete="off"
                    id="username"
                    type="text"
                    placeholder="Nhập Username / Email"
                    className="w-full pl-10 pr-3 py-2 rounded-md bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none"
                  />
                </div>
              </div>
              {/* Form mật khẩu */}
              <div>
                <label htmlFor="password" className="block text-sm mb-1">
                  Mật khẩu
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FaLock />
                  </span>
                  <input
                    autoComplete="off"
                    id="password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    className="w-full pl-10 pr-10 py-2 rounded-md bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                    <FiEyeOff />
                  </span>
                </div>
              </div>

              {/* Nút nhấn đăng nhập */}
              <button
                type="submit"
                className="w-full bg-[#ffcb05] text-base hover:bg-yellow-400 text-black py-2 rounded-md flex items-center justify-center gap-2">
                <TbLogin />
                Đăng Nhập
              </button>

              <div className="text-right text-sm text-white cursor-pointer">
                Hướng Dẫn Xác Thực Vân Tay
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
