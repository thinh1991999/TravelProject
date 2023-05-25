import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import httpService from "../../services/httpService";
import { validateImage } from "../../share/ultils";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setUser } from "../../store/slices/globalSlice";
import { User } from "../../interfaces/global";

const Left = ({ data, setIsReset }: { data?: User; setIsReset:Function }) => {
  const disptach = useAppDispatch();
  // const user = useAppSelector((state) => state.global.user);
  const token = useAppSelector((state) => state.global.token);

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.FormEvent) => {
    if (!token) return;
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      const file = files[0];
      if (validateImage(file.type)) {
        console.log(file);

        const form = new FormData();
        form.append("image", file);
        setLoading(true);
        httpService
          .updateAvatar(form, token)
          .then((res) => {
            const { message, user } = res.data;
            disptach(setUser(user));
            setIsReset(true);
            setLoading(false);
            toast.success(message);
          })
          .catch((err) => {
            toast.error("Something error");
          });
      } else {
        toast.error("File must be an image");
      }
      target.value = "";
    }
  };

  return (
    <div className="md:pr-10">
      <div className="py-10 shadow-box flex justify-center flex-col items-center">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
          <img
            src={data?.profilePic}
            alt=""
            className="w-full h-full object-cover shadow-xl"
          />
        </div>
        {loading ? (
          <button
            type="button"
            className="btn btn-primary btn-loading min-w-[150px] mt-3"
          >
            <TailSpin height={30} width={30} color="#ccc" />
          </button>
        ) : (
          <button className="mt-3 min-w-[150px]">
            <label htmlFor="avatar" className="cursor-pointer btn btn-primary ">
              Update photo
            </label>
          </button>
        )}

        <input
          type="file"
          id="avatar"
          onChange={(e) => handleChange(e)}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default Left;
