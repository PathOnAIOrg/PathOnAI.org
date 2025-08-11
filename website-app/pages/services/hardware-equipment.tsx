import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { HiArrowLeft } from "react-icons/hi"

const HardwareEquipment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <div className="w-full max-w-4xl">
        <Link href="/services" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
          <HiArrowLeft className="mr-2" />
          Back to Services
        </Link>
        
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
          Hardware & Equipment Access
        </h1>
        <p className="leading-7 mb-12 text-black dark:text-white">
          Access to specialized hardware and equipment for prototyping, testing, and development.
        </p>
        
        <div className="space-y-8">
          {/* 3D Printers */}
          <Card className="border-2 border-orange-200 dark:border-orange-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">3D Printers</h2>
              <ul className="text-black dark:text-white space-y-4">
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🖨️</span>
                    <span className="font-semibold text-lg">Bambu Lab P1S 3D Printer</span>
                    <a href="https://us.store.bambulab.com/products/p1s?from=navigation&id=583855874739507208" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [Product Page]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Professional-grade enclosed 3D printer with multi-color capability (up to 16 colors with AMS), perfect for prototyping robot parts and complex components.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🖨️</span>
                    <span className="font-semibold text-lg">Bambu Lab A1 3D Printer</span>
                    <a href="https://us.store.bambulab.com/products/a1?srsltid=AfmBOopMF1hLY9DWxxR4p2VoS9DRDnBCPqLyoxLGXLXrxJ-ghAiZ7Hfg" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [Product Page]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    High-quality 3D printer for prototyping robot parts and custom components.
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 text-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdfJsHlU44ozciuyHnlvO6hHdetvFOOkPFW6AbGYKrj3XgQZQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-lg font-medium"
                >
                  🖨️ Sign Up for 3D Printing
                </a>
              </div>
              
              {/* 3D Printing Service Policy */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-300">3D Printing Service Policy</h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                  <li>• We provide assistance for individual replacement parts only</li>
                  <li>• Complete product sets or commercially available collections will not be printed</li>
                  <li>• Our service is intended to help repair existing items, not produce entire product lines</li>
                  <li>• Each request will be evaluated to ensure compliance with intellectual property rights and our non-commercial mission</li>
                  <li>• Each community member is limited to &lt;30g per month</li>
                </ul>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default HardwareEquipment;