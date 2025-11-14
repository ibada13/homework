

import { useEffect, useState } from "react";
import Button from "./ui/Button";
import debounce from "lodash.debounce";
import { z } from "zod";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
  services: string[];
};

type Errors = Partial<Record<keyof FormDataType, string>>;

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email({ message: "Invalid email" }),
  phone: z
    .string()
    .regex(/^\+\d+$/, { message: "Phone must start with + and contain only numbers" })
    .optional(),
  date: z.string().optional(),
  message: z.string().min(10, { message: "This Field Is Required Must be At Least 10 chars." }),
  services: z.array(z.string()).min(1, { message: "Select at least one service" }),
});

export default function Cta() {

const services = [
  "Business Development",
  "Website Creation",
  "Marketing",
  "Creative & Production",
  "Event Management",
  "Other"
];

  const [form, setForm] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
    services: ["Other"],
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ctaForm");
    if (saved) {
      const parsed = JSON.parse(saved);
      setForm({
        name: parsed.name || "",
        email: parsed.email || "",
        phone: parsed.phone || "",
        date: parsed.date || "",
        message: parsed.message || "",
        services: Array.isArray(parsed.services) ? parsed.services : [],
      });
    }
  }, []);

  const saveToLocal = debounce((data: FormDataType) => {
    try {
      localStorage.setItem("ctaForm", JSON.stringify(data));
    } catch {}
  }, 300);

  const handleChange = (key: keyof FormDataType, value: string | string[]) => {
    setForm(prev => {
      const updated = { ...prev, [key]: value };
      saveToLocal(updated);
      return updated;
    });
  };

  const handleServiceToggle = (service: string) => {
    setForm(prev => {
      const updatedServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      const updated = { ...prev, services: updatedServices };
      saveToLocal(updated);
      return updated;
    });
  };

  const handleAction = async (formData: FormData) => {
    const selectedServices = form.services.length > 0 ? form.services : ["other"];
    const data: FormDataType = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      date: formData.get("date")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      services: selectedServices,
    };

    const result = formSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Errors = {};
      result.error.issues.forEach(issue => {
        const key = issue.path[0] as keyof FormDataType;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    setSuccess(false);
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess(true);

    setForm({ name: "", email: "", phone: "", date: "", message: "", services: [] });
    localStorage.removeItem("ctaForm");
    setErrors({});
  };

  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-bg from-20% via-black to-bg w-full flex flex-col items-center justify-around p-6 pt-34">
      <div className="max-w-xl w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        <p className="text-sfg uppercase font-semibold text-4xl text-center">Claim Your Free Session</p>
        <p className="text-gray-400 text-center mt-8">
          We help you <span className="text-ssfg">launch</span>, <span className="text-ssfg">rise</span>, and{" "}
          <span className="text-ssfg">stand out</span>—with <span className="text-ssfg">clarity</span>,{" "}
          <span className="text-ssfg">confidence</span>, and <span className="text-ssfg">impact</span>.
        </p>

        <form id="cta-form" action={handleAction} className="mt-8 grid grid-cols-1 gap-4">
          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={e => handleChange("name", e.target.value)}
              className="mt-1 p-3 rounded-xl text-secondary bg-white/5 border border-white/10 focus:outline-none"
            />
            {errors.name && <span className="text-sm text-red-400 mt-1">{errors.name}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Email</span>
            <input
              name="email"
              value={form.email}
              onChange={e => handleChange("email", e.target.value)}
              className="mt-1 p-3 rounded-xl text-secondary bg-white/5 border border-white/10 focus:outline-none"
            />
            {errors.email && <span className="text-sm text-red-400 mt-1">{errors.email}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Phone (optional)</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={e => handleChange("phone", e.target.value)}
              className="mt-1 p-3 rounded-xl text-secondary bg-white/5 border border-white/10 focus:outline-none"
            />
            {errors.phone && <span className="text-sm text-red-400 mt-1">{errors.phone}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Preferred Date</span>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={e => handleChange("date", e.target.value)}
              className="text-secondary mt-1 p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Tell us what you'd like help with</span>
            <textarea
              name="message"
              value={form.message}
              onChange={e => handleChange("message", e.target.value)}
              rows={4}
              className="text-secondary mt-1 p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
            />
            {errors.message && <span className="text-sm text-red-400 mt-1">{errors.message}</span>}
          </label>

          <div className="flex flex-col gap-2 mt-2">
            <span className="text-sm text-gray-300">Type of Service</span>
            <div className="grid grid-cols-2 gap-2">
              {services.map(service => (
                <label
                  key={service}
                  className={`flex items-center gap-2 cursor-pointer select-none p-2 rounded-lg border border-white/20 hover:bg-secondary/40 transition-colors ${
                    form.services.includes(service) ? "bg-ssfg/20 border-sfg" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={form.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-5 h-5 accent-ssfg"
                  />
                  <span className="text-gray-200">{service}</span>
                </label>
              ))}
            </div>
            {errors.services && <span className="text-sm text-red-400 mt-1">{errors.services}</span>}
          </div>

          <div className="flex flex-col items-center gap-4 pt-2 w-full">
            <Button
              type="submit"
              className="bg-sfg px-12 py-5 hover:bg-black"
              content={submitting ? "Booking..." : "Book Now"}
            />
            {success && <span className="text-sm font-bold text-emerald-300">Booked — we'll email you shortly.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
