import { useState, useRef } from "react";
import { IoCheckmark } from "react-icons/io5";

export default function CheckOut() {
  const refClick: any = useRef<HTMLButtonElement>(null);
  function handleClick() {
    refClick.current?.click();
  }
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section className="checkOut">
      <div className="container">
        <div className="my-20 text-black/20">
          Account / <span className="text-black">CheckOut</span>
        </div>
        <div className="content flex justify-between my-20">
          <div className="left flex flex-col gap-5">
            <h2 className="text-3xl font-semibold mb-10">Billing Details</h2>

            <div className="input flex flex-col gap-3 text-black/50">
              <label>First Name</label>
              <input className="bg-[#F5F5F5] py-2 w-[450px]" type="text" />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Company Name</label>
              <input className="bg-[#F5F5F5] py-2 w-[450px]" type="text" />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Street Address</label>
              <input className="bg-[#F5F5F5] py-2 w-[450px]" type="text" />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Apartment, floor, etc. (optional)</label>
              <input className="bg-[#F5F5F5] py-2 w-[450px]" type="text" />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Town/City</label>
              <input className="bg-[#F5F5F5] py-2 w-[450px]" type="text" />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Phone Number</label>
              <input className="bg-[#F5F5F5] py-2 w-[450px]" type="text" />
            </div>
            <div className="input flex flex-col gap-3 text-black/50">
              <label>Email Address</label>
              <input className="bg-[#F5F5F5] py-2 w-[450px]" type="text" />
            </div>
            <div className="checkbox relative flex items-center gap-3">
              <input
                type="checkbox"
                ref={refClick}
                onClick={() =>
                  isChecked == false ? setIsChecked(true) : setIsChecked(false)
                }
                className="appearance-none size-5 border-2 rounded-md checked:text-white checked:bg-red-600 outline-none"
              />
              {isChecked && (
                <IoCheckmark
                  onClick={handleClick}
                  className="text-white p-0 absolute left-[2px]"
                />
              )}
              <label>
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
          <div className="right">
            
          </div>
        </div>
      </div>
    </section>
  );
}
