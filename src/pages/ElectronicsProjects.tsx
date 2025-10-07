import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const ElectronicsProjects = () => {
  const projects = [
    {
      title: "IoT Home Automation",
      description: "Smart home system with ESP32 and sensor integration for automated control.",
      category: "Electronics",
      tags: ["IoT", "ESP32", "Sensors"]
    },
    {
      title: "Arduino Weather Station",
      description: "Real-time weather monitoring system with temperature, humidity, and pressure sensors.",
      category: "Electronics",
      tags: ["Arduino", "Sensors", "Display"]
    },
    {
      title: "PCB Design Projects",
      description: "Custom PCB designs for various embedded systems and microcontroller applications.",
      category: "Electronics",
      tags: ["PCB", "Eagle", "KiCad"]
    },
    {
      title: "Raspberry Pi Server",
      description: "Home server setup with Raspberry Pi for file storage and media streaming.",
      category: "Electronics",
      tags: ["Raspberry Pi", "Linux", "Server"]
    },
    {
      title: "Motor Control System",
      description: "DC and stepper motor control using microcontrollers and H-bridge drivers.",
      category: "Electronics",
      tags: ["Motors", "Control", "PWM"]
    },
    {
      title: "Smart Energy Meter",
      description: "IoT-based energy monitoring system with real-time data visualization.",
      category: "Electronics",
      tags: ["IoT", "Energy", "Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <section className="flex-1 pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Electronics Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative electronics and embedded systems projects showcasing hardware design, 
              IoT integration, and microcontroller programming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElectronicsProjects;
