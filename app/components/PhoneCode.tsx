"use client";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function PhoneField() {
  const [phone, setPhone] = useState("");
  return <PhoneInput defaultCountry="ng" value={phone} onChange={setPhone} />;
}