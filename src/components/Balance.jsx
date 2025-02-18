import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  const fetchBalance = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/account/balance`, {
        withCredentials: true,
      });
      setBalance(response.data.balance);
    } catch (err) {
      console.error("Fetch balance failed:", err);
    }
  };

  useEffect(() => {
    fetchBalance(); 
  }, []);

  return (
    <div className="flex justify-center mt-4">
      <div className="flex items-center gap-6 text-center bg-white shadow-lg px-6 py-3 rounded-xl border border-gray-200">
        <div className="p-2 text-lg font-semibold text-gray-800">
          💰 Current Balance:{" "}
          <span className="text-cyan-600">Rs.{Math.round(balance)}</span>
        </div>
        <div className="px-1 pb-1">
          <Button
            onClick={() => navigate("/addbalance")}
            label={"➕ Add Balance"}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-full transition duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Balance;
