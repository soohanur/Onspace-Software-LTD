"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { COUNTRY_MARKERS, WORLD_TOPO_JSON } from "@/lib/site";
import type { CountryMarker } from "@/lib/types";
import styles from "./Globe.module.css";

const Globe = () => {
  const [active, setActive] = useState<CountryMarker | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleEnter = (
    marker: CountryMarker,
    event: React.MouseEvent<SVGGElement>
  ) => {
    const host = event.currentTarget.ownerSVGElement?.parentElement;
    const rect = host?.getBoundingClientRect();
    if (rect) {
      setTooltipPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
    setActive(marker);
  };

  return (
    <section className="section" id="globe">
      <div className="container">
        <SectionHeader
          eyebrow="The clients and countries we work with"
          title={
            <>
              Empowering Digital Space
              <br />
              <span className="text-gradient">Across the Globe</span>
            </>
          }
          subtitle="Hover the map to explore where Onspace has delivered software and AI automation projects."
        />

        <div className={styles.mapWrap}>
          <div className={styles.mapInner}>
            <ComposableMap
              projectionConfig={{ scale: 175 }}
              width={980}
              height={460}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={WORLD_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      className={styles.geo}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {COUNTRY_MARKERS.map((marker) => (
                <Marker
                  key={marker.name}
                  coordinates={marker.coordinates}
                  onMouseEnter={(e) => handleEnter(marker, e)}
                  onMouseLeave={() => setActive(null)}
                  className={styles.marker}
                >
                  <circle r={4} className={styles.markerDot} />
                </Marker>
              ))}
            </ComposableMap>

            {active && (
              <div
                className={styles.tooltip}
                style={{ left: tooltipPos.x, top: tooltipPos.y }}
                role="status"
              >
                <span className={styles.tipName}>{active.name}</span>
                <span className={styles.tipMeta}>
                  {active.clients} clients served
                </span>
              </div>
            )}
          </div>

          <ul className={styles.legend}>
            <li>
              <strong>{COUNTRY_MARKERS.length}</strong> countries
            </li>
            <li>
              <strong>
                {COUNTRY_MARKERS.reduce((sum, m) => sum + m.clients, 0)}+
              </strong>{" "}
              clients
            </li>
            <li>
              <strong>4</strong> continents
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Globe;
