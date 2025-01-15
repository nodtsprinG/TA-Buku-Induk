import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const LoginBox = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    angkatan: "",
  });
  const [error, setError] = useState("");

  // Toggle agar password bisa di lihat atau disembunyikan
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle untuk perubahan pada input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  // Handle untuk submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => !field)) {
      setError("Semua field harus diisi.");
      return;
    }

    try {
      // Request API untuk login
      const response = await axios.post("http://localhost:8000/api/auth/login", formData);

      if (response.status === 200) {
        // menyimpan token dan data user di local storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        if (response.status === 200) {
          // jika benar akan ke page admin dashboard
          navigate("/admindashboard");
        }
      }
    } catch (error) {
      // jika API error, maka akan memunculkan pemberitahuan
      setError(
        error.response?.data?.message || "Login gagal. Silakan periksa email dan password Anda."
      );
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="border border-slate-300 rounded-[10px] px-6 py-10 flex flex-col justify-center items-center shadow-custom">
          <h1 className="text-2xl font-Quicksand font-bold mb-4">SELAMAT DATANG</h1>

          {/* Input untuk mengisi email */}
          <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-Quicksand">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-full rounded-[10px] placeholder-black py-4 px-6"
            />
          </div>

          {/* Input untuk mengisi password */}
          <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-Quicksand">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-full rounded-[10px] placeholder-black py-4 px-6"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-6 flex items-center"
            >
              {showPassword ? <FaEye className="text-black" /> : <FaEyeSlash className="text-black" />}
            </button>
          </div>

          {/* Memilih tahun ajaran? */}
          <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-Quicksand flex items-center py-4 px-6">
            <select
              name="angkatan"
              value={formData.angkatan}
              onChange={handleChange}
              className="w-full h-full border-collapse outline-none"
            >
              <option value="">Tahun Ajaran</option>
              <option value="2023">2023-2024</option>
              <option value="2022">2022-2023</option>
              <option value="2021">2021-2022</option>
              <option value="2020">2020-2021</option>
            </select>
          </div>

          {/* menampilkan pesan error */}
          {error && <div className="text-red-500">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-bold rounded"
          >
            MASUK
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginBox;
