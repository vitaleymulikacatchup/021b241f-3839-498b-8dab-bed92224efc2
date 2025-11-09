"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Award, Linkedin, MessageSquare, Palette, Sparkles, Twitter, User, Instagram } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Alex Chen"
          button={{
            text: "Get In Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Product Designer crafting digital experiences"
          description="I help companies create intuitive and beautiful products that users love. With 5+ years of experience in UI/UX design, I transform complex problems into simple, elegant solutions."
          tag="Available for Projects"
          tagIcon={Sparkles}
          imageSrc="https://pixabay.com/get/g2e0486c1d11d92404de8c5937e5bd28d60d530d70a9d6e8d9289c19b2e5cc248adeb122abf0b6465521cc94a736f163982fb886041e7318b572631dcd2f30e05_1280.jpg"
          imageAlt="Alex Chen - Product Designer workspace"
          frameStyle="card"
          buttons={[
            {
              text: "View My Work",
              href: "https://behance.net/alexchen"
            },
            {
              text: "Contact Me",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Design Expertise"
          description="Specialized skills in creating exceptional user experiences across digital platforms"
          tag="What I Do"
          tagIcon={Palette}
          layout="default"
          features={[
            {
              title: "UI/UX Design",
              description: "Creating intuitive user interfaces and seamless user experiences for web and mobile applications",
              imageSrc: "https://pixabay.com/get/gea507bbb860fbad6a7d6ef25bde7fb47b209e2eaf1c44b3bdd78f7afff6bd53900f1fb795592a5074013d4bb6cea26d6dec542985049d5eb36d7318b4f0add86_1280.jpg",
              imageAlt: "UI UX design process"
            },
            {
              title: "Product Strategy",
              description: "Developing comprehensive product strategies that align business goals with user needs and market demands",
              imageSrc: "https://pixabay.com/get/gdd4f01fc674948d06e87dd6088321cebf981fb130d6245ae46418ca08eab6b96970bf98ef2bd6b1e70bb315c42b06f76025f3e095abe125a62050af48856a566_1280.jpg",
              imageAlt: "Product strategy and planning"
            },
            {
              title: "Brand Identity",
              description: "Building cohesive brand identities that communicate values and create lasting connections with audiences",
              imageSrc: "https://pixabay.com/get/g55a0eff7fa62be6e134d1fe32b3982c0852cfdc723bf25a41d411cfc1e63ae46f303ad33d63c501c7f6d91df62833169d360b902f5c20baeba235d86b7a6bcd0_1280.jpg",
              imageAlt: "Brand identity design work"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="I've had the privilege to work with amazing teams and create impactful designs for industry leaders"
          tag="Clients"
          tagIcon={Award}
          logos={[
            "https://pixabay.com/get/g875c0f8a63969e86020bfef4531f8080d53f1d4079c9184c0d669bf86706c4fa874b8c11dd5e1386bad147e119c246564a6f7b969c7da5d3310dc33491f3bcd1_1280.jpg",
            "https://pixabay.com/get/g76b99459cbebba227e5508357a8277ae1208f533d1bf19bfb97ee80e68b706a64d4e76a5e5bb498657cdc094c84d2efa3728117a5d69cccaf611c3b1b1f4080a_1280.jpg",
            "https://pixabay.com/get/g271b8505fc1af5ceca4a4c66fa1b3303725a910ceea31de068a4e61e3353d2f5707ed6b9281f7daa30b920208c71530ca122301c1db8b72a4dca8054ee2a8606_1280.jpg",
            "https://pixabay.com/get/g5f4b0ccc19112bbe43a33a47dd71884c57a9d1e8465787b37d120ae6ca572b5c34268c452ac235ebf337dba025ccc8310c70db771be29d0723424e403e74d2bc_1280.jpg",
            "https://pixabay.com/get/g889ece909c6525e736cfe84a73dc9776fc344e21c28507a630494f5f470c5608d2a5d9946db18b218afb5a5148d01d9bf2a9f3553575c999a8a8601b03ee778f_1280.jpg",
            "https://pixabay.com/get/g4be273c8ba1618232bebe17bb7771ccffa5d66d9957e058ab38af89d05d9f947c8d9a2212a545b706f7ead8ef6ae13402c598075e55b33a076cf700cfd62743a_1280.jpg",
            "https://pixabay.com/get/ga068a0ec43342c951deceaae728faa1dda63eb190641316a76c5f9c5fe75b1a5b1dbf0c967c12ebf7d6f460cc225aa3e2f307df1f97cbc46719925432db1c83f_1280.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet the Designer"
          description="Passionate about creating meaningful digital experiences that make a difference"
          tag="About Me"
          tagIcon={User}
          members={[
            {
              id: "1",
              name: "Alex Chen",
              role: "Product Designer",
              imageSrc: "https://pixabay.com/get/gfb950c7fadc95ea2b2c2f303733c28816902217598e8defbd46f46afd013c8f470dedd96e8c47798dbb9c3ef9f0391b932a056cafcb2e721649c28a75cc2a6f1_1280.jpg",
              imageAlt: "Alex Chen - Product Designer"
            },
            {
              id: "2",
              name: "Alex Chen",
              role: "Product Designer",
              imageSrc: "https://pixabay.com/get/gfb950c7fadc95ea2b2c2f303733c28816902217598e8defbd46f46afd013c8f470dedd96e8c47798dbb9c3ef9f0391b932a056cafcb2e721649c28a75cc2a6f1_1280.jpg",
              imageAlt: "Alex Chen - Product Designer"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Clients Say"
          description="Real feedback from teams and companies I've worked with"
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Product Manager at TechFlow",
              testimonial: "Alex transformed our complex SaaS product into an intuitive experience. His attention to detail and user-centric approach resulted in a 40% increase in user engagement.",
              imageSrc: "https://pixabay.com/get/gf32d6698626e75dea5fb3e0f9c6c935344f9473f3fd5832ec457760a6d19a68c9b6360033bafad82485ce91b1a7ef660b9216d3285ea75c2862cb81ef9c9a89a_1280.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Rivera",
              role: "Founder at StartupLab",
              testimonial: "Working with Alex was incredible. He didn't just design our app, he helped us understand our users better and create a product that truly resonates with them.",
              imageSrc: "https://pixabay.com/get/g3e3116b1e80155a412a197c76eeb84d6fae9cb48baabd03eea3f0cdeacf167f6fba5b351c5561c637569f2682ac9a7736a96660905940c1fbd830ee7a5143741_1280.jpg",
              imageAlt: "Michael Rivera"
            },
            {
              id: "3",
              name: "Emily Watson",
              role: "CEO at InnovateCorp",
              testimonial: "Alex's design thinking and strategic approach helped us redesign our entire customer journey. The results speak for themselves - conversion rates increased by 65%.",
              imageSrc: "https://pixabay.com/get/g4f548d5c25f00b9bae9b2a5c68e8fc60ad1df62d66a9fd809385793ec3087750489e68e1e0514ee5c4a921d94b0c44ff78a2133551de1340ab2026e1f04c4af3_1280.jpg",
              imageAlt: "Emily Watson"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Creative Director at PixelStudio",
              testimonial: "Alex brings both creative vision and analytical thinking to every project. His designs are not only beautiful but also grounded in solid user research and business strategy.",
              imageSrc: "https://pixabay.com/get/g0836876172cb3169510575aa8c21bef12d5a1c4d161e199098b88ca5224c7ab226c4fc46d767ee22c721de36ac3d05fb40eb2e98fae0d3ced354cb25e683a539_1280.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Let's Create Something Amazing Together"
          description="Ready to start your next project? I'd love to hear about your ideas and discuss how we can bring them to life."
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company (Optional)",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your project...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Alex Chen"
          copyrightText="© 2025 Alex Chen. All rights reserved."
          columns={[
            {
              title: "Work",
              items: [
                {
                  label: "Portfolio",
                  href: "https://behance.net/alexchen"
                },
                {
                  label: "Case Studies",
                  href: "https://medium.com/@alexchen"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/alexchen"
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/alexchen"
                },
                {
                  label: "Dribbble",
                  href: "https://dribbble.com/alexchen"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/alexchen",
              ariaLabel: "LinkedIn Profile"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/alexchen",
              ariaLabel: "Twitter Profile"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/alexchen",
              ariaLabel: "Instagram Profile"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}