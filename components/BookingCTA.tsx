"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type FormData = {
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Booking() {
  const [formData, setFormData] = useState<FormData>({
    checkIn: "",
    checkOut: "",
    guests: "2",
    room: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    // Remove error when user starts correcting the field
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: "",
      }));
    }

    // Hide previous success message if form changes
    if (isSuccess) {
      setIsSuccess(false);
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.checkIn) {
      newErrors.checkIn = "Please select a check-in date.";
    }

    if (!formData.checkOut) {
      newErrors.checkOut = "Please select a check-out date.";
    }

    if (
      formData.checkIn &&
      formData.checkOut &&
      formData.checkOut <= formData.checkIn
    ) {
      newErrors.checkOut =
        "Check-out must be after check-in.";
    }

    if (!formData.room) {
      newErrors.room = "Please select a room.";
    }

    return newErrors;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSuccess(false);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Simulate API request
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      setIsSuccess(true);

      setFormData({
        checkIn: "",
        checkOut: "",
        guests: "2",
        room: "",
      });
    } catch {
      setErrors({
        room: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="overflow-hidden bg-[#0B1F33] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/50 sm:text-xs">
            Your Stay Awaits
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Make your next stay
            <span className="block italic">
              unforgettable.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Choose your dates, select your room, and begin
            your LUXORA experience.
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.form
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-14 max-w-5xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm sm:mt-16 sm:p-8 lg:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Check In */}
            <div>
              <label
                htmlFor="check-in"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/50"
              >
                Check In
              </label>

              <input
                id="check-in"
                type="date"
                value={formData.checkIn}
                onChange={(event) =>
                  handleChange(
                    "checkIn",
                    event.target.value
                  )
                }
                aria-invalid={Boolean(errors.checkIn)}
                aria-describedby={
                  errors.checkIn
                    ? "check-in-error"
                    : undefined
                }
                className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none transition-colors focus:border-white"
              />

              {errors.checkIn && (
                <p
                  id="check-in-error"
                  role="alert"
                  className="mt-2 text-xs text-red-300"
                >
                  {errors.checkIn}
                </p>
              )}
            </div>

            {/* Check Out */}
            <div>
              <label
                htmlFor="check-out"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/50"
              >
                Check Out
              </label>

              <input
                id="check-out"
                type="date"
                value={formData.checkOut}
                onChange={(event) =>
                  handleChange(
                    "checkOut",
                    event.target.value
                  )
                }
                aria-invalid={Boolean(errors.checkOut)}
                aria-describedby={
                  errors.checkOut
                    ? "check-out-error"
                    : undefined
                }
                className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none transition-colors focus:border-white"
              />

              {errors.checkOut && (
                <p
                  id="check-out-error"
                  role="alert"
                  className="mt-2 text-xs text-red-300"
                >
                  {errors.checkOut}
                </p>
              )}
            </div>

            {/* Guests */}
            <div>
              <label
                htmlFor="guests"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/50"
              >
                Guests
              </label>

              <select
                id="guests"
                value={formData.guests}
                onChange={(event) =>
                  handleChange(
                    "guests",
                    event.target.value
                  )
                }
                className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none focus:border-white"
              >
                <option
                  value="1"
                  className="text-black"
                >
                  1 Guest
                </option>

                <option
                  value="2"
                  className="text-black"
                >
                  2 Guests
                </option>

                <option
                  value="3"
                  className="text-black"
                >
                  3 Guests
                </option>

                <option
                  value="4"
                  className="text-black"
                >
                  4 Guests
                </option>
              </select>
            </div>

            {/* Room */}
            <div>
              <label
                htmlFor="room"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/50"
              >
                Room
              </label>

              <select
                id="room"
                value={formData.room}
                onChange={(event) =>
                  handleChange(
                    "room",
                    event.target.value
                  )
                }
                aria-invalid={Boolean(errors.room)}
                aria-describedby={
                  errors.room
                    ? "room-error"
                    : undefined
                }
                className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none focus:border-white"
              >
                <option
                  value=""
                  className="text-black"
                >
                  Select room
                </option>

                <option
                  value="deluxe"
                  className="text-black"
                >
                  Deluxe Room
                </option>

                <option
                  value="ocean-suite"
                  className="text-black"
                >
                  Ocean Suite
                </option>

                <option
                  value="presidential"
                  className="text-black"
                >
                  Presidential Suite
                </option>
              </select>

              {errors.room && (
                <p
                  id="room-error"
                  role="alert"
                  className="mt-2 text-xs text-red-300"
                >
                  {errors.room}
                </p>
              )}
            </div>

          </div>

          {/* Submit */}
          <div className="mt-10 flex flex-col items-center gap-5">

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={
                isSubmitting ? {} : { scale: 1.02 }
              }
              whileTap={
                isSubmitting ? {} : { scale: 0.98 }
              }
              className="w-full bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-[#0B1F33] transition-opacity disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {isSubmitting
                ? "Checking Availability..."
                : "Check Availability"}
            </motion.button>

            {/* Success */}
            {isSuccess && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                role="status"
                className="text-sm text-green-200"
              >
                Your request has been received. We'll
                be in touch shortly.
              </motion.p>
            )}

          </div>
        </motion.form>
      </div>
    </section>
  );
}