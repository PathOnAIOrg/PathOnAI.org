import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { HiArrowLeft } from "react-icons/hi"

const RobotAccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <div className="w-full max-w-4xl">
        <Link href="/services" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
          <HiArrowLeft className="mr-2" />
          Back to Services
        </Link>
        
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
          Robot Access
        </h1>
        <p className="leading-7 mb-12 text-black dark:text-white">
          Hands-on access to various robotic platforms for embodied AI research and learning.
        </p>
        
        <div className="space-y-8">
          <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Available Robots</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Access to various robotic platforms for hands-on learning and research.
              </p>
              <ul className="text-black dark:text-white space-y-3">
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🦾</span>
                    <span className="font-semibold text-lg">SO-ARM100 Robot Arm</span>
                    <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [GitHub]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Standard Open Arm 100 - A low-cost, open-source robotic arm perfect for learning manipulation tasks and AI research.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🦾</span>
                    <span className="font-semibold text-lg">SO-ARM101 Robot Arm</span>
                    <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [GitHub]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Standard Open Arm 101 - Enhanced version with improved capabilities.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🚗</span>
                    <span className="font-semibold text-lg">LeKiwi Low-Cost Mobile Manipulator</span>
                    <a href="https://github.com/SIGRobotics-UIUC/LeKiwi" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [GitHub]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Mobile robot platform combining holonomic drive with manipulation capabilities, ideal for embodied AI experiments.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🚙</span>
                    <span className="font-semibold text-lg">HIWONDER JetAuto Pro ROS2 Robot Car</span>
                    <a href="https://www.amazon.com/dp/B0C2VZLJCL?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [Amazon]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    ROS2-enabled autonomous vehicle platform for navigation and perception research.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🐢</span>
                    <span className="font-semibold text-lg">Clearpath Robotics TurtleBot 4</span>
                    <a href="https://www.robotshop.com/products/clearpath-robotics-turtlebot-4-mobile-robot?variant=42360573362337" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [RobotShop]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Industry-standard mobile robot for ROS2 development and education.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🤖</span>
                    <span className="font-semibold text-lg">ROSMASTER X3 ROS2 Robot</span>
                    <a href="https://www.robotshop.com/products/yahboom-rosmaster-x3-ros2-robot-with-mecanum-wheel-advanced-without-orin-super-board?variant=51961379619180" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [RobotShop]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Mecanum wheel robot with omnidirectional movement for advanced control algorithms.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🦾</span>
                    <span className="font-semibold text-lg">Servo Mini Arm V2 - CyberBrick</span>
                    <a href="https://makerworld.com/en/models/1455332-servo-mini-arm-v2-cyberbrick#profileId-1516661" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [MakerWorld]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Compact servo-based arm for desktop robotics experiments.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🦾</span>
                    <span className="font-semibold text-lg">Elephant Robotics myCobot 280 Pi 2023</span>
                    <a href="https://shop.elephantrobotics.com/collections/mycobot-280/products/holiday-mycobot-pi-raspberry-pi-powered-6-dof-collaborative-robot" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [Shop]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    6-DOF collaborative robot powered by Raspberry Pi 4B (64-bit 1.5GHz 4-Core). Supports Python, C++, C#, Arduino, and ROS. 
                    All-in-one suite includes AI kit, adaptive gripper, and multiple bases. Perfect for education, research, and embodied AI development 
                    with capabilities for object recognition, image sorting, and face tracking.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🚶</span>
                    <span className="font-semibold text-lg">Hightorque Bipedal Robot Mini π</span>
                    <a href="https://store.hightorque.cn/products/bipedal-robot-mini-%CF%80" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [Store]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Advanced bipedal robot platform for walking gait research and humanoid robotics development.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-2 border-orange-200 dark:border-orange-900 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">How to Request Access</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To request access to our robots:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-black dark:text-white">Join our Discord</p>
                    <p className="text-gray-600 dark:text-gray-300">Connect with our community and submit your request</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-black dark:text-white">Email us</p>
                    <p className="text-gray-600 dark:text-gray-300">Send your request to info@pathonai.org</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <a 
                  href="https://discord.com/invite/UTxjyNwTeP" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mr-3"
                >
                  Join Discord
                </a>
                <a 
                  href="mailto:info@pathonai.org" 
                  className="inline-block bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RobotAccess;