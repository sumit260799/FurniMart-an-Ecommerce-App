import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
const AboutPage = () => {
  return (
    <main className=" w-[90%] lg:w-[80%] mx-auto my-[3rem] md:my-[5rem]">
      <div className="grid  grid-col-1  md:grid-col-2 md:grid-flow-col gap-10">
        <img
          src={about2}
          className=" h-[500px]  lg:h-[600px] w-[500px] object-cover rounded-md"
          alt=""
        />
        <article>
          <div className="title mb-10  ">
            <h2 className="text-[2.5rem] grid justify-start font-semibold ">
              our story
            </h2>
            <div className="float-left relative left-0 underline  ml-0"></div>
          </div>
          <p className="text-[1.2rem] text-zinc-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </div>
    </main>
  );
};

export default AboutPage;
