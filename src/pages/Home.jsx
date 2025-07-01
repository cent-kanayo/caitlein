import React from "react";
import Img1 from "../assets/desktop/img1.webp";
import Img2 from "../assets/desktop/img2.webp";
import Img3 from "../assets/desktop/img3.webp";
import Img4 from "../assets/desktop/img4.webp";
import Img5 from "../assets/desktop/img5.webp";
import { Link } from "react-router-dom";
import { reviews } from "../data";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
const Home = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <section className="banner"></section>
      <section className="max-w-[800px] mx-auto mt-[48px] mb-4 px-4 lg:px-0">
        <p className="mb-3 text-[16px] md:text-[18px] leading-7">
          If We Haven't Had The Pleasure Of Meeting Yet, let's change that. Care
          to pour me a drink while I slip into something more comfortable? Oh, &
          by comfort I mean these barely there panties & the sheerest of robes..
          Don't you just love it when the chemistry is so intense you can
          already feel your hard, throbbing cock inside my sweet tight- hold up.
        </p>
        <p>𝐘𝐨𝐮 𝐜𝐚𝐧,𝐭 𝐜𝐮𝐦 𝐲𝐞𝐭, 𝐈 𝐡𝐚𝐯𝐞𝐧,𝐭 𝐟𝐢𝐧𝐢𝐬𝐡𝐞𝐝 𝐦𝐲 𝐝𝐫𝐢𝐧𝐤.</p>
      </section>
      <section className="flex justify-center items-center gap-4">
        <div className="w-[166px] lg:w-[332px] h-[169px] lg:h-[465px]">
          <img src={Img1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[166px] lg:w-[332px] h-[169px] lg:h-[465px] hidden lg:block">
          <img src={Img2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[166px] lg:w-[332px] h-[169px] lg:h-[465px]">
          <img src={Img3} alt="" className="w-full h-full object-cover" />
        </div>
      </section>
      <section className="max-w-[800px] mx-auto mt-[48px] mb-8 px-4 lg:px-0">
        <h2 className="text-[40px] font-bold">Tell Me</h2>
        <p className="mb-3 text-[16px] md:text-[18px] leading-7">
          How you like it baby, <strong>tease</strong> me,{" "}
          <strong>please</strong> me
        </p>
        <p className="mb-3 text-[16px] md:text-[18px] leading-7">
          Spread me wide open like one of your favorite books. My skin is
          waiting to be read and devoured by you.
        </p>
        <p className="mb-3 text-[16px] md:text-[18px] leading-7">
          How do I taste? You finally realized you were only dreaming of me and
          now you're calling me but, I respond with a text
        </p>
        <p className="mb-3 text-[16px] md:text-[18px] leading-7">
          <strong>"Are you ready to see me now?"</strong>
        </p>
        <p className="mb-3 text-[16px] md:text-[18px] leading-7">
          Yes, Mistress.
        </p>
        <p className="mb-3 text-[16px] md:text-[18px] leading-7">
          OK Miss Caitlein, will see you now
        </p>
      </section>
      <section className="flex justify-center items-center gap-4">
        <div className="w-[332px] h-[465px] hidden lg:block">
          <img src={Img4} alt="" className="w-full h-full" />
        </div>
        <div className="w-[332px] h-[465px] hidden lg:block">
          <img src={Img5} alt="" className="w-full h-full" />
        </div>
        <div className="w-[80%] h-[465px] lg:hidden">
          <img src={Img2} alt="" className="w-full h-full object-cover" />
        </div>
      </section>
      <section className="max-w-[800px] mx-auto mt-[48px] mb-4 px-4 lg:px-0">
        <h2 className="text-[24px] lg:text-[32px] font-bold">
          What my clients have to say
        </h2>
        <p className="text-[14px] opacity-[0.6] mb-6">
          Reviews from my wonderful clients from the past
        </p>
        <div>
          <div className="flex flex-col lg:flex-row justify-center gap-1.5">
            <div className="lg:w-[50%]">
              <article className="border-black border-[0.5px] p-4">
                <div>
                  <h2 className="text-[18px] font-bold">Best Time Ever</h2>
                  <p className="text-[#1D4942] text-[14px] font-semibold">
                    James Rodd
                  </p>
                  <p className="text-black font-medium text-[14px] mb-2">
                    1 June, 2025
                  </p>
                </div>
                <p className="mb-3 text-[16px] leading-7">
                  Quick report on my time with Caitlin. First of all, she's very
                  easy to communicate with and drama-free. Our initial contact
                  was by email with subsequent exchanges and directions given
                  via text. Caitlin answered the door freshly showered and
                  greeted me with a big hug. Caitlin's appearance is exactly
                  like the photos from her ad. We started making out before she
                  dropped to her knees and began some of the best blowjob I've
                  experienced in a long time. Could easily have finished that
                  way, but wanted to experience her doggy. Escorting is a side
                  gig for Caitlin but she genuinely gets into the action and
                  wants her low volume customers to leave happy and satisfied
                </p>
              </article>
            </div>
            <div className="lg:w-[50%]">
              <article className="border-black border-[0.5px] p-4 mb-1.5">
                <div>
                  <h2 className="text-[18px] font-bold">Real girl, no games</h2>
                  <p className="text-[#1D4942] text-[14px] font-semibold">
                    Hugh Henry
                  </p>
                  <p className="text-black font-medium text-[14px] mb-2">
                    5 June, 2025
                  </p>
                </div>
                <p className="mb-3 text-[16px] leading-7">
                  Finally learned what a legit provider looks and sounds like. I
                  have tried this 4 times earlier and got scammed every time.
                  She sounded different so I thought to give it a final shot.
                  This is the first provider I've had a successful meet with
                </p>
              </article>
              <article className="border-black border-[0.5px] p-4">
                <div>
                  <h2 className="text-[18px] font-bold">Premium Experience</h2>
                  <p className="text-[#1D4942] text-[14px] font-semibold">
                    Fitch
                  </p>
                  <p className="text-black font-medium text-[14px] mb-2">
                    6 June, 2025
                  </p>
                </div>
                <p className="mb-3 text-[16px] leading-7">
                  Had the pleasure of meeting Caitlein yesterday, and it was a
                  delightful experience. she is bubbly, fun, and incredibly easy
                  to talk to. She greeted me in casual, yet sexy attire, which
                  set a relaxed tone for the evening. The whole experience felt
                  very natural. Caitlein's intimate skills are top-notch, and
                  she knows how to make you feel special. Her playful and
                  energetic approach kept things exciting, and her genuine
                  enthusiasm made it a memorable encounter. Definitely planning
                  to see her again soon!
                </p>
              </article>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="block w-full bg-[#1D4942] hover:bg-[#1D4942]/80 transition-all duration-300 ease-in-out py-4 text-center text-white mt-6 text-[14px] cursor-pointer tracking-wider"
          >
            View all reviews
          </button>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto mt-[48px] mb-4 px-4 lg:px-0">
        <h2 className="text-[24px] font-bold">My Sexy Packages</h2>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-1 my-6">
          <article className="border-black border-[1px] p-4 flex-1 w-full">
            <h2 className="text-[20px] font-bold leading-5">
              Standard Experience
            </h2>
            <h3 className="text-[#1D4942] text-[18px] font-bold">$ 130</h3>
            <p className="text-[14px]">30Mins/Quickie, Car Sex and a Blowjob</p>
          </article>
          <article className="border-black border-[1px] p-4 flex-1 w-full">
            <h2 className="text-[20px] font-bold leading-5">
              Standard Experience
            </h2>
            <h3 className="text-[#1D4942] text-[18px] font-bold">$ 150</h3>
            <p className="text-[14px]">1 hour</p>
          </article>
          <article className="border-black border-[1px] p-4 flex-1 w-full">
            <h2 className="text-[20px] font-bold leading-5">
              Standard Experience
            </h2>
            <h3 className="text-[#1D4942] text-[18px] font-bold">$ 300</h3>
            <p className="text-[14px]">2 hour</p>
          </article>
          <article className="border-black border-[1px] p-4 flex-1 w-full">
            <h2 className="text-[20px] font-bold leading-5">
              Standard Experience
            </h2>
            <h3 className="text-[#1D4942] text-[18px] font-bold">$ 800</h3>
            <p className="text-[14px]">Full Night Satisfaction</p>
          </article>
        </div>
        <Link
          to="/reviews"
          className="block bg-[#1D4942] py-4 text-center text-white mt-6 text-[14px]"
        >
          Payment Methods
        </Link>
      </section>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center bg-[rgba(0,0,0,0.5)] justify-center p-4">
          <DialogPanel className="max-w-3xl space-y-4 bg-white p-4 lg:p-12 rounded-2xl">
            <div className="flex justify-between items-center">
              <DialogTitle
                as="p"
                className="font-[500] text-[24px] lg:text-[32px]"
              >
                All Reviews
              </DialogTitle>
              <button onClick={() => setIsOpen(false)} aria-label="Close" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.29331 7.29333C7.48081 7.10607 7.73497 7.00088 7.99997 7.00088C8.26498 7.00088 8.51914 7.10607 8.70664 7.29333L16 14.5867L23.2933 7.29333C23.3849 7.19508 23.4953 7.11628 23.6179 7.06163C23.7406 7.00697 23.873 6.97758 24.0073 6.97521C24.1416 6.97284 24.2749 6.99754 24.3994 7.04784C24.524 7.09813 24.6371 7.17299 24.732 7.26795C24.827 7.36291 24.9018 7.47602 24.9521 7.60054C25.0024 7.72505 25.0271 7.85843 25.0248 7.9927C25.0224 8.12697 24.993 8.25938 24.9384 8.38205C24.8837 8.50472 24.8049 8.61512 24.7066 8.70667L17.4133 16L24.7066 23.2933C24.8049 23.3849 24.8837 23.4953 24.9384 23.6179C24.993 23.7406 25.0224 23.873 25.0248 24.0073C25.0271 24.1416 25.0024 24.2749 24.9521 24.3995C24.9018 24.524 24.827 24.6371 24.732 24.732C24.6371 24.827 24.524 24.9019 24.3994 24.9522C24.2749 25.0025 24.1416 25.0272 24.0073 25.0248C23.873 25.0224 23.7406 24.993 23.6179 24.9384C23.4953 24.8837 23.3849 24.8049 23.2933 24.7067L16 17.4133L8.70664 24.7067C8.51707 24.8833 8.26635 24.9795 8.00728 24.9749C7.74821 24.9703 7.50103 24.8654 7.31781 24.6822C7.13459 24.4989 7.02965 24.2518 7.02507 23.9927C7.0205 23.7336 7.11667 23.4829 7.29331 23.2933L14.5866 16L7.29331 8.70667C7.10604 8.51917 7.00085 8.265 7.00085 8C7.00085 7.735 7.10604 7.48083 7.29331 7.29333Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </button>
            </div>
            <div className="h-[500px] overflow-y-scroll mt-6">
              {reviews.map((review) => (
                <article
                  className="border-b-[0.5px] border-[#E3E3E3] mb-2"
                  key={review.id}
                >
                  <div>
                    <h2 className="text-[18px] font-bold">{review.title}</h2>
                    <p className="text-[#1D4942] text-[14px] font-semibold">
                      {review.author}
                    </p>
                    <p className="text-black font-medium text-[14px] mb-2">
                      {review.date}
                    </p>
                  </div>
                  <p className="mb-3 text-[16px] leading-7">{review.content}</p>
                </article>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </main>
  );
};

export default Home;
