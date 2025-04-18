import React from "react";

const Layout = ({ children, showFooter = false }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:max-w-sm md:max-w-2xl lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl flex flex-col min-h-[80vh]">
        {/* เนื้อหาหลักจะขยายเต็มที่เท่าที่มี */}
        <div className="flex-grow">{children}</div>

        {/* Footer จะติดล่างของ div ขาวเสมอ */}
        {showFooter && (
          <div className="flex justify-center p-4 shadow-inner">
            <p className="text-gray-700 font-semibold">
              © 2024 All Hub Co., Ltd. All rights reserved.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
