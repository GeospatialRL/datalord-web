import Banner from "@/app/components/Banner";

export default function contact() {
  return (
    <>
      <Banner
        bannerTitle="Contact"
        bannerDescription="Ready to start a project or just want to talk? We're at Allen Avenue, Ikeja Lagos , or drop us a message and we'll get back to you."
      />
      <section className="flex flex-row mx-15 gap-10 justify-between py-5 border-6 border-red my-5">
        <div className="border-2 border-red-500 p-5 w-[45%]">
            <h5 className="text-sm mb-2 border-2 font-bold text-[#616977]">CONTACT US</h5>
            <h1 className="text-4xl font-bold max-w-8/12 mb-5 border-2 border-red-500 ">We would live to hear from you!</h1>
            <h6 className="font-bold text-sm mb-3">Customer support</h6>
            <p>Available from <br /> Monday to Friday, 8:00 AM - 5:00 PM WAT</p>
            <p>(+234) 903-6065-544, (+234) 901-2925-909 <br /> info@datalordtech.com</p>
            <p>Office Address</p>
            <p>2, Wemi akinsola close, allen avenue Ikeja <br /> Lagos, Nigeria</p>
        </div>
        <div className="border-2 border-red-500 p-5 w-[45%]">
            form
        </div>
      </section>
    </>
  );
}
