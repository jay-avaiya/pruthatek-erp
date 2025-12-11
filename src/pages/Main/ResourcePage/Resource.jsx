import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import SectionCard from "./_components/SectionCard";

const Resource = () => {
  const [active, setActive] = useState("invoicing");
  const [query, setQuery] = useState("");

  const items = [
    { label: "Invoicing & Billing", id: "invoicing" },
    { label: "Financial Reporting", id: "financial" },
    { label: "Expense Tracking", id: "expense" },
    { label: "Full Payroll Service", id: "payroll" },
    { label: "Data Import", id: "import" },
    { label: "Reports", id: "report" },
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    if (filtered.length === 0) return alert("No results found for " + query);
    const id = filtered[0].id;

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setQuery("");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // middle of screen triggers section
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-between px-24 font-inter">
      {/* side bar */}
      <div className="flex flex-col gap-12 sticky top-10 h-fit">
        <p className="text-[16px] text-[#F19623] font-semibold">
          Resources→Client Management
        </p>

        <div className="w-full max-w-[310px] h-fit bg-[#F9FAFB] border border-[#D1D5DB] rounded-3xl px-3 py-3">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    document
                      .getElementById(item.id)
                      .scrollIntoView({ behavior: "smooth" });
                    setActive(item.id);
                  }}
                  className={`w-full text-left py-3 px-4 rounded-[10px] text-[16px] font-semibold flex items-center gap-4
                        ${
                          active === item.id
                            ? "bg-[#F19623] text-white"
                            : "text-[#333] hover:text-[#008060] hover:bg-[#42756820]"
                        }
                      `}
                >
                  <span
                    className={`text-lg leading-none
                          ${
                            active === item.id
                              ? "text-white"
                              : "text-black group-hover:text-[#008060]"
                          }
                        `}
                  >
                    •
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-[65%] flex flex-col gap-4">
        {/* search */}
        <div className="flex justify-end">
          <div className="w-fit h-fit relative">
            <input
              type="text"
              placeholder="Search here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full max-w-[310px] border border-[#D1D5DB] rounded-[12px] bg-[#F9FAFB] py-3 px-4 placeholder:text-[#A5A5A580] text-[16px] outline-none"
            />
            <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D1D5DB]" />
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <SectionCard btnText={`Let's Start`} />
          <SectionCard
            id={"financial"}
            title={"How to Create Estimate?"}
            desc={
              "One of the best features (there are so many, we can’t pick one) of ERPCA is that it is designed keeping client management in mind. Because we are aware of the key role clients play in your practice. With ERPCA, your team will always have a complete picture of everything related to your clients, right from documents, task(s), time consumed, invoices etc. All these details can be accessed in a single click."
            }
          />
          <SectionCard
            id={"expense"}
            title={"How to Create Purchase Bill ?"}
            desc={
              "All client discussions are consolidated by ERPCA and it goes straight into that particular client’s file. This makes it easy for you to work together with your staff."
            }
          />
          <SectionCard
            id={"payroll"}
            title={"How to Edit Bill/Invoice or Estimate?"}
            desc={
              "Say good-bye to the time-consuming task of importing clients and prospects one at a time. ERPCA lets you import all your clients in bulk so that you don’t waste any time. Moreover, ERPCA allows you to filter clients and execute particular activities for many clients at the same time."
            }
          />
          <SectionCard
            id={"import"}
            title={"How to Delete Bill/Invoice or Estimate?"}
            desc={
              "ERPCA gives you the authority to modify employee roles and their access to confidential client data along with regulating universal settings. A bonus feature is our audit log which helps you keep a watch on your team’s happenings."
            }
          />
          <SectionCard
            id={"report"}
            title={"How to Export Bill/Invoice or Estimate?"}
            desc={
              "ERPCA gives you the authority to modify employee roles and their access to confidential client data along with regulating universal settings. A bonus feature is our audit log which helps you keep a watch on your team’s happenings."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Resource;
