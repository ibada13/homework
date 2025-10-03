import  { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import Button from "./ui/Button";

import debounce from "lodash.debounce";
type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function Cta() {
const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", date: "", message: "" });
const [errors, setErrors] = useState<Errors>({});
const [submitting, setSubmitting] = useState(false);
const [success, setSuccess] = useState(false);


useEffect(() => {
if (typeof window === "undefined") return;
const saved = localStorage.getItem("ctaForm");
if (saved) {
try { setForm(JSON.parse(saved) as FormData); } catch {}
}
}, []);


const saveToLocal = debounce((data: FormData) => {
if (typeof window === "undefined") return;
try { localStorage.setItem("ctaForm", JSON.stringify(data)); } catch {}
}, 300);


useEffect(() => {
saveToLocal(form);
}, [form]);


function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
const key = e.target.name as keyof FormData;
const value = e.target.value;
setForm(prev => ({ ...prev, [key]: value }));
}


function validate() {
const err: Errors = {};
if (!form.name.trim()) err.name = "Required";
if (!form.email.trim()) err.email = "Required";
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Invalid email";
return err;
}


async function handleSubmit(e: FormEvent<HTMLFormElement>) {
e.preventDefault();
const v = validate();
setErrors(v);
if (Object.keys(v).length) return;
setSubmitting(true);
setSuccess(false);
await new Promise(r => setTimeout(r, 900));
setSubmitting(false);
setSuccess(true);
setForm({ name: "", email: "", phone: "", date: "", message: "" });
localStorage.removeItem("ctaForm");
}
  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-bg from-20% via-black to-bg w-full flex flex-col items-center justify-around p-6">
      <div className="max-w-xl w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        <p className="text-sfg uppercase font-semibold text-4xl text-center">Claim Your Free Session</p>
        <p className="text-gray-400 text-center mt-8">
          We help you <span className="text-ssfg">launch</span>, <span className="text-ssfg">rise</span>, and <span className="text-ssfg">stand out</span>—with <span className="text-ssfg">clarity</span>, <span className="text-ssfg">confidence</span>, and <span className="text-ssfg">impact</span>.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Name</span>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 p-3 rounded-xl text-secondary nded-lg bg-white/5 border border-white/10 focus:outline-none" />
            {errors.name && <span className="text-sm text-red-400 mt-1">{errors.name}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Email</span>
            <input name="email" value={form.email} onChange={handleChange} className="mt-1 p-3 rounded-xl text-secondary ounded-lg bg-white/5 border border-white/10 focus:outline-none" />
            {errors.email && <span className="text-sm text-red-400 mt-1">{errors.email}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Phone (optional)</span>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="mt-1 p-3 rounded-xl  text-secondary ounded-lg bg-white/5 border border-white/10 focus:outline-none" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Preferred Date</span>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="text-secondary mt-1 p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Tell us what you'd like help with</span>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="text-secondary mt-1 p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none" />
          </label>

          <div className="flex flex-col items-center gap-4 pt-2 w-full">
            <Button  className="bg-sfg px-12 py-5 hover:bg-black hover:curosr-pointer" content={submitting ? "Booking..." : "Book Now"}  />
            {success && <span className="text-sm font-bold text-emerald-300 ">Booked — we'll email you shortly.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
