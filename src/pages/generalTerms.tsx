import React, { useState, useEffect } from "react";
import SearchLayout from "@/containers/layout/SearchLayout";
import Header from "../components/Header";
import { useRouter } from "next/router";

// Define the content for each section
const termsContent = `This section will be updated to abide with EU regulation on data collection.

User usage history:
By selecting this, you agree that we can record the pages you visit on our website alongside the searches that you make on grocery-guru.de in order to improve our recommendations, calculating metrics and other AI tasks. This information is stored securely and anonymously in our database and is not shared with any 3rd party.

Data share consent (or whatever the name is):
By selecting this, you agree to share your profile with 3rd party apps. This will be in compliance with data sharing regulation. The details of what exactly happens will be updated in the future.
`;
const privacyPolicyContent = `This section will be updated to abide with EU regulation on data collection.

User usage history:
By selecting this, you agree that we can record the pages you visit on our website alongside the searches that you make on grocery-guru.de in order to improve our recommendations, calculating metrics and other AI tasks. This information is stored securely and anonymously in our database and is not shared with any 3rd party.

Data share consent (or whatever the name is):
By selecting this, you agree to share your profile with 3rd party apps. This will be in compliance with data sharing regulation. The details of what exactly happens will be updated in the future.
`;
const usageOfDataContent = `This section will be updated to abide with EU regulation on data collection.

    User usage history:
    By selecting this, you agree that we can record the pages you visit on our website alongside the searches that you make on grocery-guru.de in order to improve our recommendations, calculating metrics and other AI tasks. This information is stored securely and anonymously in our database and is not shared with any 3rd party.

    Data share consent (or whatever the name is):
    By selecting this, you agree to share your profile with 3rd party apps. This will be in compliance with data sharing regulation. The details of what exactly happens will be updated in the future.
`;

const GeneralTerms = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const router = useRouter();

  // default content 
  useEffect(() => {
    setSelectedSection("usageOfData");
  }, []);

  const getContent = () => {
    switch (selectedSection) {
      case "terms":
        return termsContent;
      case "privacyPolicy":
        return privacyPolicyContent;
      case "usageOfData":
        return usageOfDataContent;
      default:
        return usageOfDataContent;
    }
  };

  const getSubheading = () => {
    switch (selectedSection) {
      case "terms":
        return "Terms";
      case "privacyPolicy":
        return "Privacy Policy";
      case "usageOfData":
        return "Usage of Data";
      default:
        return "General Terms";
    }
  };

  return (
    <div className="bg-[#F5F3F0] h-screen">
      <SearchLayout>
        <Header />

        
        <div className="flex items-center justify-center mt-10">
          <div className="fixed left-0 flex flex-col justify-start items-start py-2 pl-5">
            <button
              className={`nav-link ${
                selectedSection === "usageOfData" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("usageOfData")}
            >
              Usage of Data
            </button>
            <button
              className={`nav-link ${selectedSection === "terms" ? "active" : ""}`}
              onClick={() => setSelectedSection("terms")}
            >
              Terms
            </button>
            <button
              className={`nav-link ${
                selectedSection === "privacyPolicy" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("privacyPolicy")}
            >
              Privacy Policy
            </button>
          </div>

      
          <div className="max-w-5xl p-10 ml-120 bg-white rounded-3xl mt-2 text-lg">
            <h1 className="text-3xl font-bold mb-4">General Terms</h1>
            <h2 className="text-xl font-semibold mb-8">{getSubheading()}</h2>
            <div className="text-center">{getContent()}</div>
          </div>
        </div>
      </SearchLayout>

      <style jsx>{`
        .nav-link {
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          color: #4b5563;
          cursor: pointer;
          font-size: 16px;
          margin-bottom: 8px;
          padding: 12px;
          transition: background-color 0.3s, color 0.3s;
          width: 200px;
          text-align: left;
          border-radius: 8px;
        }

        .nav-link:hover {
          background-color: #f3f4f6;
        }

        .nav-link.active {
          background-color: #ff7d00;
          border: 1px solid #ff7d00;
          color: #ffffff;
        }

        .nav-link.active:hover {
          background-color: #D53513;
        }
      `}</style>
    </div>
  );
};

export default GeneralTerms;
