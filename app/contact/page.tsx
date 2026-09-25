import Banner from "@/app/components/Banner";
import PhoneCode from "@/app/components/PhoneCode";

export default function contact() {
  return (
    <>
      <Banner
        bannerTitle="Contact"
        bannerDescription="Ready to start a project or just want to talk? We're at Allen Avenue, Ikeja Lagos , or drop us a message and we'll get back to you."
      />
      <section className="flex flex-row mx-auto gap-10 justify-between py-5 my-5 max-w-[85%]">
        <div className="p-5 w-[45%]">
          <h5 className="mb-2 font-bold text-[#616977]">CONTACT US</h5>
          <h1 className="text-3xl text-[#2e3950] font-bold w-[50%] my-7">
            We would love to hear from you!
          </h1>
          <h6 className="font-bold text-sm mb-3">Customer support</h6>
          <p className="text-[#616977] mb-2 leading-8 text-sm">
            Available from <br /> Monday to Friday, 8:00 AM - 5:00 PM WAT
          </p>
          <p className="text-primary mb-2 leading-8">
            (+234) 903-6065-544, (+234) 901-2925-909 <br />{" "}
            info@datalordtech.com
          </p>
          <p className="font-bold mb-4">Office Address</p>
          <p className="text-[#616977] mb-2 text-sm">
            2, Wemi akinsola close, allen avenue Ikeja <br /> Lagos, Nigeria
          </p>
        </div>
        <div className="py-5 px-6 w-[35%] shadow-lg">
          {/* <div > */}
          <form className="">
            <div className="">
              <h3 className="font-bold mb-1">Questions or feedback?</h3>
              <p className="text-xs text-[#616977]">
                Fill out the form below and a team member will get back to you
                within 24 hours!
              </p>
            </div>
            <div className="my-2 w-full">
              <div className="flex my-2 gap-5 ">
                <label className="flex flex-col w-full">
                  <span className="text-xs text-[#616977] font-bold mb-1">
                    First name
                  </span>
                  <input
                    className="bg-[#F8F8F8] p-1.5 rounded-lg"
                    type="text"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-xs text-[#616977] font-bold mb-1">
                    Last name
                  </span>
                  <input
                    className="bg-[#F8F8F8] p-1.5 rounded-lg"
                    type="text"
                  />
                </label>
              </div>
              <div className="gap-10 my-1">
                <label className="flex flex-col gap-2">
                  <span className="text-xs text-[#616977] font-bold mb-1">
                    Email
                  </span>
                  <input
                    className="bg-[#F8F8F8] p-1.5 rounded-lg"
                    type="email"
                  />
                </label>
              </div>
              {/* <div className = "flex flex-col gap-2 my-2 ">
                  <label className="flex flex-col gap-2 w-full">
                    <span className = "text-xs text-[#616977] font-bold mt-1 mb-1">Phone Number</span>              
                  </label>
                  <label className="flex gap-2 w-full">
                    <PhoneCode />
                  </label>
                </div> */}
              <div className="flex flex-col gap-2 my-2">
                <label
                  htmlFor="phone"
                  className="text-xs text-[#616977] font-bold mt-1 mb-1"
                >
                  Phone Number
                </label>
                <div className="flex gap-2 w-full">
                  <PhoneCode />
                </div>
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label>
                  <span className="text-xs text-[#616977] font-bold mb-1">
                    Your Message*
                  </span>
                  <textarea
                    className="bg-[#F8F8F8] p-1.5 rounded-lg w-full"
                    rows={4}
                  />
                </label>
              </div>
              <div className="py-2">
                <button className="bg-[#DC2626] w-full text-white py-2 cursor-pointer rounded-lg text-sm">
                  Submit
                </button>
              </div>
              <div>
                <p className="text-[10px] text-[#616977] mt-1 text-justify">
                  By providing a telephone number and submitting this form, you
                  are consenting to be contacted by SMS text message and receive
                  marketing communications from Datalord Technologies. Message &
                  data rates may apply. Message frequency may vary. Reply HELP
                  for more information. You can reply STOP to opt-out of further
                  messaging.
                </p>
              </div>
            </div>
          </form>
          {/* </div> */}
        </div>
      </section>
        {/* Map section */}
      <section className="mx-auto my-10 w-[85%]">
        <iframe
          src="https://www.google.com/maps?q=2+Wemi+Akinsola+Close,+Allen+Avenue,+Ikeja,+Lagos,+Nigeria&output=embed"
          className="w-full h-[400px] rounded-lg border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Office location"
        />
      </section>
    </>
  );
}
