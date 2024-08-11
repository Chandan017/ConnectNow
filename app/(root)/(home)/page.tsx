"use client";
import Loader from "@/components/Loader";
import MeetingTypeList from "@/components/MeetingTypeList";
import { useGetCalls } from "@/hooks/useGetCall";
import React, { useEffect, useState } from "react";

const Home = () => {
  const now = new Date();
  const [data, setTime] = useState({
    time: now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime({
        time: now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  const { upcomingCalls, isLoading } = useGetCalls();
  if (isLoading) return <Loader />;
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          {upcomingCalls && upcomingCalls.length > 0 && (
            <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
              {`Upcoming meeting at: ${upcomingCalls[0]?.state?.startsAt?.toLocaleTimeString(
                "en-US",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}`}
            </h2>
          )}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{data.time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
