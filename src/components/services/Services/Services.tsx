import MagicBento from "@/components/reactbits/MagicBento/MagicBento";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { SERVICES } from "@/lib/content";
import styles from "./Services.module.css";

interface ServicesProps {
  withHeader?: boolean;
}

const Services = ({ withHeader = true }: ServicesProps) => {
  return (
    <section className="section" id="services">
      <div className="container">
        {withHeader && (
          <SectionHeader
            eyebrow="Flexible & Futuristic"
            title={
              <>
                Solutions <span className="text-gradient">Tailored for You</span>
              </>
            }
            subtitle="A full-stack agency partner - from first prototype to production scale, across every layer of your product."
          />
        )}

        <div className={styles.bentoWrap}>
          <MagicBento
            cards={SERVICES}
            glowColor="56, 189, 248"
            spotlightRadius={320}
            particleCount={10}
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
