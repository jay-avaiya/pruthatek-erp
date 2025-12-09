import React from "react";

const Blog = () => {
  const blogs = [
    {
      category: "Artificial intelligence",
      description:
        "Revolutionizing Healthcare: The Role of AI in Early Disease Detection",
      image: "/blog1.png",
      date: "2025-08-23",
    },
    {
      category: "Artificial intelligence",
      description:
        "The Ring of Fire Is Waking Up What Indonesia's Eruption Means for the Pacific Region",
      image: "/blog2.png",
      date: "2025-08-23",
    },
    {
      category: "Crypto",
      description:
        "Is Bitcoin Becoming the Backbone of Stablecoins The Unfolding of America's Silent Strategy",
      image: "/blog3.png",
      date: "2025-08-23",
    },
  ];

  return (
    <div className="w-full h-[80vh] font-inter px-24">
      <h1 className="font-semibold text-[#333] text-[40px]">Pruthatek Blogs</h1>

      <div className="flex justify-between mt-24">
        {/* card 1 */}
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative w-[420px] h-[440px] bg-[#EFF1F380] border border-[#CDE6D1] rounded-[20px] p-3"
          >
            <div>
              <img
                src={blog.image}
                alt=""
                className="h-[200px] w-full rounded-[14px]"
              />
            </div>

            <div className="mt-5">
              {/* categorY */}
              <div className="bg-[#EBEBEB] rounded-full py-1 px-3 w-fit">
                <p className="text-sm font-medium text-[#868686]">
                  {blog.category}
                </p>
              </div>

              {/* DESCRIPTION */}
              <div className="relative mt-4 h-[120px]">
                <p className="text-xl text-[#333] leading-[28px]">
                  {blog.description}
                </p>

                <p className="absolute bottom-0 left-0 text-[#008060] text-[16px] font-medium cursor-pointer">
                  Discover More...
                </p>
              </div>

              {/* DATE */}
              <div className="absolute right-3 bottom-2 flex items-center gap-2">
                <p className="text-sm font-medium text-[#868686]">
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
