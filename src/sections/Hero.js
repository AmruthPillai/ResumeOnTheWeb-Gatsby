import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Parallax from "parallax-js";
import React, { useRef, useState, useEffect } from "react";
import Social from "../components/Social";
import Subtitle from "../components/Subtitle";

import Face1 from "../images/photographs/one.jpg";
import Face2 from "../images/photographs/two.jpg";
import Face3 from "../images/photographs/three.jpg";
import Face4 from "../images/photographs/four.jpg";
import Face5 from "../images/photographs/five.jpg";
import Face6 from "../images/photographs/six.jpg";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [parallax, setParallax] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(height: 128, placeholder: NONE, layout: CONSTRAINED)
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setParallax(
        new Parallax(parallaxRef.current, {
          invertX: false,
          invertY: false,
        }),
      );
    }

    return () => {
      parallax && parallax.destroy();
    };
  }, [parallaxRef]);

  useEffect(() => {
    // Scene, Camera and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas: document.getElementById("photograph"),
    });

    // Base Config
    renderer.setPixelRatio(devicePixelRatio * 2);
    renderer.setSize(512, 512);
    camera.position.setZ(30);

    // Avatar
    const materials = [
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(Face1),
      }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(Face2),
      }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(Face3),
      }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(Face4),
      }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(Face5),
      }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(Face6),
      }),
    ];
    const avatar = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), materials);
    scene.add(avatar);

    // Lights
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(50, 50, 50);
    scene.add(spotLight);

    // Controls
    const controls = new OrbitControls(camera, document.getElementById("hero"));
    controls.enableZoom = false;
    controls.enablePan = false;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      const speedMultiplier = 0.5;
      avatar.rotation.x += speedMultiplier * 0.005;
      avatar.rotation.y += speedMultiplier * 0.0025;
      avatar.rotation.z += speedMultiplier * 0.005;

      spotLight.position.copy(camera.getWorldPosition());

      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div ref={parallaxRef} className="col-span-2">
          <div className="max-w-lg mx-auto" data-depth="0.4">
            <canvas id="photograph" />
          </div>
        </div>
        <div className="col-span-3">
          <GatsbyImage
            alt="Amruth Pillai"
            className="max-w-lg max-h-32 mx-auto lg:mx-0"
            image={data.logo.childImageSharp.gatsbyImageData}
          />

          <h1 className="sr-only">
            Amruth Pillai&apos;s Resume on the Web <br />
            Designer, Developer, Photographer, Writer from Bangalore, India
          </h1>

          <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start">
            <Subtitle onDone={() => setShowSocial(true)} />

            <div className="w-full md:w-auto h-6 my-6">
              {showSocial && <Social />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
